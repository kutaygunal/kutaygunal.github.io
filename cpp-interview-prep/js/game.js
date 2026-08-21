/* ============================================================
   C++ Interview Quest — game engine
   Worlds -> questions -> boss. XP, lives, combos, power-ups,
   achievements, localStorage save.
   ============================================================ */

(function () {
  "use strict";

  const SAVE_KEY = "cpp-quest-save-v1";

  // ---------- State ----------
  const state = {
    xp: 0,
    level: 1,
    lives: 3,
    combo: 0,
    bestCombo: 0,
    powerups: { fifty: 2, skip: 2, hint: 2 },
    achievements: [],
    worldProgress: {}, // worldId -> { done: bool, bestScore: int }
    currentWorld: null,
    currentIndex: 0,
    isBoss: false,
    answered: false,
    timer: 0,
    timerInterval: null,
    questionStart: 0,
    worldScore: 0,
    worldCorrect: 0,
    worldTotal: 0,
  };

  const ACHIEVEMENTS = [
    { id: "first", name: "First Blood", desc: "Answer your first question correctly", icon: "🎯" },
    { id: "streak5", name: "On Fire", desc: "Reach a 5-question combo", icon: "🔥" },
    { id: "streak10", name: "Unstoppable", desc: "Reach a 10-question combo", icon: "⚡" },
    { id: "world1", name: "OOP Master", desc: "Clear the OOP world", icon: "◆" },
    { id: "world2", name: "Data Wrangler", desc: "Clear the Data Structures world", icon: "▤" },
    { id: "world3", name: "Modernist", desc: "Clear the Modern C++ world", icon: "⚡" },
    { id: "world4", name: "Pattern Seer", desc: "Clear the Design Patterns world", icon: "◈" },
    { id: "world5", name: "Interview Ready", desc: "Clear the Interview Q&A world", icon: "★" },
    { id: "all", name: "Keysight Bound", desc: "Clear all five worlds", icon: "🏆" },
    { id: "perfect", name: "Flawless", desc: "Clear a world without losing a life", icon: "💎" },
    { id: "level5", name: "Rising Star", desc: "Reach level 5", icon: "⭐" },
    { id: "level10", name: "C++ Veteran", desc: "Reach level 10", icon: "👑" },
  ];

  // ---------- DOM refs ----------
  const $ = (id) => document.getElementById(id);
  const screens = {
    title: $("screen-title"),
    world: $("screen-world"),
    battle: $("screen-battle"),
    result: $("screen-result"),
    achieve: $("screen-achieve"),
  };

  // ---------- Helpers ----------
  function save() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        Object.assign(state, s);
        state.powerups = Object.assign({ fifty: 2, skip: 2, hint: 2 }, s.powerups);
        state.worldProgress = s.worldProgress || {};
        state.achievements = s.achievements || [];
      }
    } catch (e) {}
  }

  function levelForXp(xp) {
    return Math.floor(xp / 100) + 1;
  }

  function addXp(n) {
    const before = state.level;
    state.xp += n;
    state.level = levelForXp(state.xp);
    if (state.level > before) {
      if (state.level >= 10) unlock("level10");
      else if (state.level >= 5) unlock("level5");
    }
  }

  function unlock(id) {
    if (!state.achievements.includes(id)) {
      state.achievements.push(id);
      showToast(ACHIEVEMENTS.find((a) => a.id === id));
    }
  }

  function showToast(ach) {
    if (!ach) return;
    const t = $("toast");
    t.innerHTML = `<span class="toast-icon">${ach.icon}</span><div><b>${ach.name}</b><small>${ach.desc}</small></div>`;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 3200);
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- Screen switching ----------
  function show(name) {
    Object.values(screens).forEach((s) => s.classList.remove("active"));
    screens[name].classList.add("active");
  }

  // ---------- Title screen ----------
  function renderTitle() {
    $("title-level").textContent = state.level;
    $("title-xp").textContent = state.xp;
    $("title-ach").textContent = state.achievements.length + " / " + ACHIEVEMENTS.length;
    const bar = $("title-xpbar");
    const pct = (state.xp % 100);
    bar.style.width = pct + "%";
    $("title-xpbar-label").textContent = pct + " / 100 XP";
  }

  // ---------- World select ----------
  function renderWorlds() {
    const grid = $("world-grid");
    grid.innerHTML = "";
    WORLDS.forEach((w) => {
      const prog = state.worldProgress[w.id];
      const done = prog && prog.done;
      const card = document.createElement("button");
      card.className = "world-card" + (done ? " done" : "");
      card.style.setProperty("--wc", w.color);
      card.innerHTML = `
        <div class="world-icon">${w.icon}</div>
        <div class="world-name">${w.name}</div>
        <div class="world-tag">${w.tagline}</div>
        <div class="world-meta">
          <span>${w.questions.length + 1} Qs</span>
          <span>${done ? "✓ CLEARED" : "BOSS: " + w.boss.q.length + " chars"}</span>
        </div>
      `;
      card.addEventListener("click", () => startWorld(w.id));
      grid.appendChild(card);
    });
  }

  // ---------- Battle ----------
  function startWorld(id) {
    const w = WORLDS.find((x) => x.id === id);
    state.currentWorld = w;
    state.currentIndex = 0;
    state.isBoss = false;
    state.lives = 3;
    state.combo = 0;
    state.worldScore = 0;
    state.worldCorrect = 0;
    state.worldTotal = w.questions.length + 1;
    state.answered = false;
    show("battle");
    renderBattle();
  }

  function renderBattle() {
    const w = state.currentWorld;
    const isBoss = state.currentIndex >= w.questions.length;
    state.isBoss = isBoss;
    const q = isBoss ? w.boss : w.questions[state.currentIndex];

    $("battle-world").textContent = w.name;
    $("battle-world").style.color = w.color;
    $("battle-progress").textContent = (state.currentIndex + 1) + " / " + state.worldTotal;
    $("battle-lives").textContent = "♥".repeat(state.lives) + "♡".repeat(3 - state.lives);
    $("battle-combo").textContent = state.combo > 1 ? "COMBO x" + state.combo : "";
    $("battle-xp").textContent = state.xp + " XP";

    const bar = $("battle-bar");
    bar.style.width = ((state.currentIndex) / state.worldTotal * 100) + "%";

    $("q-badge").textContent = isBoss ? "BOSS" : "Q" + (state.currentIndex + 1);
    $("q-badge").className = "q-badge" + (isBoss ? " boss" : "");
    $("q-text").textContent = q.q;

    const opts = $("q-options");
    opts.innerHTML = "";
    const letters = ["A", "B", "C", "D"];
    q.options.forEach((opt, i) => {
      const b = document.createElement("button");
      b.className = "opt";
      b.innerHTML = `<span class="opt-letter">${letters[i]}</span><span class="opt-text">${opt}</span>`;
      b.addEventListener("click", () => answer(i));
      opts.appendChild(b);
    });

    // Power-ups
    $("pu-fifty").disabled = state.powerups.fifty <= 0 || state.answered;
    $("pu-skip").disabled = state.powerups.skip <= 0 || state.answered;
    $("pu-hint").disabled = state.powerups.hint <= 0 || state.answered;
    $("pu-fifty-count").textContent = state.powerups.fifty;
    $("pu-skip-count").textContent = state.powerups.skip;
    $("pu-hint-count").textContent = state.powerups.hint;

    $("explain").classList.remove("show");
    $("next-btn").classList.add("hidden");

    state.answered = false;
    startTimer();
  }

  function startTimer() {
    clearInterval(state.timerInterval);
    state.timer = 30;
    state.questionStart = Date.now();
    $("timer").textContent = state.timer;
    $("timer-ring").style.strokeDashoffset = 0;
    const total = 2 * Math.PI * 22;
    state.timerInterval = setInterval(() => {
      state.timer--;
      $("timer").textContent = state.timer;
      $("timer-ring").style.strokeDashoffset = (total * (30 - state.timer) / 30);
      if (state.timer <= 5) $("timer").classList.add("low");
      else $("timer").classList.remove("low");
      if (state.timer <= 0) {
        clearInterval(state.timerInterval);
        if (!state.answered) answer(-1); // timeout = wrong
      }
    }, 1000);
  }

  function answer(idx) {
    if (state.answered) return;
    state.answered = true;
    clearInterval(state.timerInterval);

    const w = state.currentWorld;
    const isBoss = state.isBoss;
    const q = isBoss ? w.boss : w.questions[state.currentIndex];
    const correct = idx === q.answer;
    const opts = document.querySelectorAll(".opt");

    opts.forEach((o, i) => {
      o.classList.add("locked");
      if (i === q.answer) o.classList.add("correct");
      if (i === idx && !correct) o.classList.add("wrong");
    });

    const explain = $("explain");
    explain.innerHTML = `<b>${correct ? "✓ CORRECT" : "✗ WRONG"}</b> — ${q.explain}`;
    explain.className = "explain show " + (correct ? "good" : "bad");

    let gained = 0;
    if (correct) {
      state.combo++;
      state.bestCombo = Math.max(state.bestCombo, state.combo);
      state.worldCorrect++;
      const base = isBoss ? 60 : 20;
      const timeBonus = Math.max(0, Math.floor(state.timer / 5));
      const comboMult = Math.min(3, 1 + Math.floor(state.combo / 3));
      gained = (base + timeBonus) * comboMult;
      addXp(gained);
      state.worldScore += gained;
      if (state.combo === 5) unlock("streak5");
      if (state.combo === 10) unlock("streak10");
      if (state.worldCorrect === 1 && state.combo === 1) unlock("first");
    } else {
      state.combo = 0;
      state.lives--;
      $("battle-lives").textContent = "♥".repeat(state.lives) + "♡".repeat(3 - state.lives);
    }

    $("gain").textContent = correct ? "+" + gained + " XP" : "";
    $("battle-xp").textContent = state.xp + " XP";

    const next = $("next-btn");
    next.classList.remove("hidden");
    next.textContent = state.lives <= 0 ? "WORLD FAILED" : (state.currentIndex + 1 >= state.worldTotal ? "WORLD COMPLETE" : "NEXT →");
    next.onclick = () => {
      if (state.lives <= 0) return worldFailed();
      if (state.currentIndex + 1 >= state.worldTotal) return worldComplete();
      state.currentIndex++;
      renderBattle();
    };

    save();
  }

  // ---------- Power-ups ----------
  function useFifty() {
    if (state.answered || state.powerups.fifty <= 0) return;
    state.powerups.fifty--;
    const w = state.currentWorld;
    const q = state.isBoss ? w.boss : w.questions[state.currentIndex];
    const opts = document.querySelectorAll(".opt");
    let removed = 0;
    const wrongIdx = [];
    q.options.forEach((_, i) => { if (i !== q.answer) wrongIdx.push(i); });
    const toRemove = shuffle(wrongIdx).slice(0, 2);
    opts.forEach((o, i) => {
      if (toRemove.includes(i)) { o.classList.add("removed"); o.disabled = true; }
    });
    $("pu-fifty-count").textContent = state.powerups.fifty;
    save();
  }

  function useSkip() {
    if (state.answered || state.powerups.skip <= 0) return;
    state.powerups.skip--;
    $("pu-skip-count").textContent = state.powerups.skip;
    // Skip = auto-correct with reduced XP
    state.answered = true;
    clearInterval(state.timerInterval);
    const w = state.currentWorld;
    const q = state.isBoss ? w.boss : w.questions[state.currentIndex];
    const opts = document.querySelectorAll(".opt");
    opts.forEach((o, i) => {
      o.classList.add("locked");
      if (i === q.answer) o.classList.add("correct");
    });
    state.combo++;
    state.bestCombo = Math.max(state.bestCombo, state.combo);
    state.worldCorrect++;
    const gained = (state.isBoss ? 30 : 10);
    addXp(gained);
    state.worldScore += gained;
    const explain = $("explain");
    explain.innerHTML = `<b>⏭ SKIPPED</b> — ${q.explain}`;
    explain.className = "explain show good";
    $("gain").textContent = "+" + gained + " XP";
    $("battle-xp").textContent = state.xp + " XP";
    const next = $("next-btn");
    next.classList.remove("hidden");
    next.textContent = state.currentIndex + 1 >= state.worldTotal ? "WORLD COMPLETE" : "NEXT →";
    next.onclick = () => {
      if (state.currentIndex + 1 >= state.worldTotal) return worldComplete();
      state.currentIndex++;
      renderBattle();
    };
    save();
  }

  function useHint() {
    if (state.answered || state.powerups.hint <= 0) return;
    state.powerups.hint--;
    $("pu-hint-count").textContent = state.powerups.hint;
    const w = state.currentWorld;
    const q = state.isBoss ? w.boss : w.questions[state.currentIndex];
    const opts = document.querySelectorAll(".opt");
    // Highlight the correct answer briefly
    opts[q.answer].classList.add("hint-glow");
    setTimeout(() => opts[q.answer].classList.remove("hint-glow"), 1500);
    save();
  }

  // ---------- World end ----------
  function worldComplete() {
    const w = state.currentWorld;
    const perfect = state.lives === 3;
    state.worldProgress[w.id] = { done: true, bestScore: Math.max(state.worldProgress[w.id]?.bestScore || 0, state.worldScore) };
    unlock("world" + (WORLDS.indexOf(w) + 1));
    if (perfect) unlock("perfect");
    if (WORLDS.every((x) => state.worldProgress[x.id]?.done)) unlock("all");
    save();
    showResult(true);
  }

  function worldFailed() {
    showResult(false);
  }

  function showResult(win) {
    const w = state.currentWorld;
    $("result-title").textContent = win ? "WORLD CLEARED!" : "WORLD FAILED";
    $("result-title").style.color = win ? "#81c784" : "#ff8a80";
    $("result-world").textContent = w.name;
    $("result-score").textContent = state.worldScore + " XP";
    $("result-correct").textContent = state.worldCorrect + " / " + state.worldTotal + " correct";
    $("result-combo").textContent = "Best combo: x" + state.bestCombo;
    $("result-total").textContent = "Total: " + state.xp + " XP · Level " + state.level;
    show("result");
  }

  // ---------- Achievements ----------
  function renderAchievements() {
    const grid = $("ach-grid");
    grid.innerHTML = "";
    ACHIEVEMENTS.forEach((a) => {
      const got = state.achievements.includes(a.id);
      const el = document.createElement("div");
      el.className = "ach" + (got ? " got" : " locked");
      el.innerHTML = `<div class="ach-icon">${a.icon}</div><div class="ach-name">${a.name}</div><div class="ach-desc">${a.desc}</div>`;
      grid.appendChild(el);
    });
  }

  // ---------- Reset ----------
  function resetAll() {
    if (!confirm("Reset all progress? This cannot be undone.")) return;
    localStorage.removeItem(SAVE_KEY);
    location.reload();
  }

  // ---------- Init ----------
  function init() {
    load();
    renderTitle();
    renderWorlds();
    renderAchievements();

    $("btn-play").addEventListener("click", () => { renderWorlds(); show("world"); });
    $("btn-ach").addEventListener("click", () => { renderAchievements(); show("achieve"); });
    $("btn-reset").addEventListener("click", resetAll);
    $("back-title").addEventListener("click", () => { renderTitle(); startWorld("oop"); });
    $("back-title2").addEventListener("click", () => { renderTitle(); startWorld("oop"); });
    $("back-world").addEventListener("click", () => { renderWorlds(); show("world"); });
    $("retry").addEventListener("click", () => startWorld(state.currentWorld.id));
    $("worlds-btn").addEventListener("click", () => { renderWorlds(); show("world"); });

    $("pu-fifty").addEventListener("click", useFifty);
    $("pu-skip").addEventListener("click", useSkip);
    $("pu-hint").addEventListener("click", useHint);

    show("title");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
