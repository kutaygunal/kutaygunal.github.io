/* ============================================================
   SIM.01 — a small real-time particle field with a live HUD.
   Not decoration: this is the same kind of instrumentation panel
   the author builds professionally (telemetry/simulation GUIs),
   just running in a <canvas> instead of Qt.
   ============================================================ */

(function () {
  const canvas = document.getElementById("sim-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const screenEl = canvas.closest(".panel-screen");
  const panelEl = document.getElementById("sim-panel");
  const playOverlay = document.getElementById("sim-play");
  const hudCount = document.getElementById("hud-count");
  const hudFps = document.getElementById("hud-fps");
  const hudX = document.getElementById("hud-x");
  const hudY = document.getElementById("hud-y");
  const hudMode = document.getElementById("hud-mode");
  const btnAttract = document.getElementById("mode-attract");
  const btnRepel = document.getElementById("mode-repel");
  const btnReset = document.getElementById("sim-reset");

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let W = 0, H = 0, DPR = 1;
  let particles = [];
  let mode = "attract"; // "attract" | "repel"
  const RADIUS = 110; // pointer interaction circle radius (half of the original 220)
  let pointer = { x: null, y: null, active: false };
  let running = false;
  let rafId = null;
  let visible = true;

  // FPS tracking
  let frames = 0;
  let lastFpsSample = performance.now();

  function particleCount() {
    const area = W * H;
    const n = Math.round(area / 5200);
    return Math.max(30, Math.min(110, n));
  }

  function makeParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    };
  }

  function seed() {
    const n = particleCount();
    particles = new Array(n).fill(0).map(makeParticle);
  }

  function resize() {
    const rect = screenEl.getBoundingClientRect();
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(1, Math.round(rect.width));
    H = Math.max(1, Math.round(rect.height));
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    seed();
  }

  function step() {
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      if (pointer.active) {
        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq) || 1;
        if (dist < RADIUS) {
          const force = (1 - dist / RADIUS) * 0.045 * (mode === "attract" ? 1 : -1);
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }

      p.vx *= 0.985;
      p.vy *= 0.985;
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) { p.x = 0; p.vx *= -1; }
      if (p.x > W) { p.x = W; p.vx *= -1; }
      if (p.y < 0) { p.y = 0; p.vy *= -1; }
      if (p.y > H) { p.y = H; p.vy *= -1; }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // connecting lines between near particles
    ctx.lineWidth = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) {
          ctx.strokeStyle = `rgba(41, 211, 255, ${(1 - d / 90) * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      let near = false;
      if (pointer.active) {
        const dx = pointer.x - p.x, dy = pointer.y - p.y;
        near = dx * dx + dy * dy < RADIUS * RADIUS;
      }
      ctx.fillStyle = near ? "#ffb020" : "rgba(41, 211, 255, 0.85)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, near ? 2.2 : 1.6, 0, Math.PI * 2);
      ctx.fill();
    }

    // pointer crosshair
    if (pointer.active) {
      ctx.strokeStyle = "rgba(255, 176, 32, 0.5)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, RADIUS, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  function updateHud() {
    hudCount.textContent = particles.length;
    if (pointer.active) {
      hudX.textContent = Math.round(pointer.x);
      hudY.textContent = Math.round(pointer.y);
    } else {
      hudX.textContent = "—";
      hudY.textContent = "—";
    }
    hudMode.textContent = mode === "attract" ? "ATTRACT" : "REPEL";
  }

  function loop(now) {
    if (!running) return;
    step();
    draw();

    frames++;
    if (now - lastFpsSample >= 500) {
      const fps = Math.round((frames * 1000) / (now - lastFpsSample));
      hudFps.textContent = fps;
      frames = 0;
      lastFpsSample = now;
    }
    updateHud();

    rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (running) return;
    running = true;
    lastFpsSample = performance.now();
    frames = 0;
    rafId = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  function drawStaticFrame() {
    draw();
    updateHud();
    hudFps.textContent = "0";
  }

  // ---- Pointer input ----
  function toLocal(clientX, clientY) {
    const rect = screenEl.getBoundingClientRect();
    return { x: clientX - rect.left, y: clientY - rect.top };
  }

  screenEl.addEventListener("pointermove", (e) => {
    const p = toLocal(e.clientX, e.clientY);
    pointer.x = p.x;
    pointer.y = p.y;
    pointer.active = true;
  });
  screenEl.addEventListener("pointerleave", () => { pointer.active = false; });
  screenEl.addEventListener("pointerdown", (e) => {
    const p = toLocal(e.clientX, e.clientY);
    pointer.x = p.x;
    pointer.y = p.y;
    pointer.active = true;
  });

  // ---- Controls ----
  function setMode(next) {
    mode = next;
    btnAttract.classList.toggle("is-active", mode === "attract");
    btnRepel.classList.toggle("is-active", mode === "repel");
  }
  btnAttract.addEventListener("click", () => setMode("attract"));
  btnRepel.addEventListener("click", () => setMode("repel"));
  btnReset.addEventListener("click", () => {
    seed();
    if (!running) drawStaticFrame();
  });

  // ---- Reduced motion: start paused, offer explicit opt-in ----
  if (prefersReducedMotion) {
    playOverlay.hidden = false;
    playOverlay.addEventListener("click", () => {
      playOverlay.hidden = true;
      resize();
      start();
    }, { once: true });
  }

  // ---- Visibility-aware pause/resume ----
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else if (visible && !prefersReducedMotion) start();
  });

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible = entry.isIntersecting;
          if (visible && !document.hidden && !prefersReducedMotion) start();
          else stop();
        });
      },
      { threshold: 0.1 }
    );
    io.observe(panelEl);
  }

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      if (!running) drawStaticFrame();
    }, 150);
  });

  // ---- Init ----
  resize();
  if (prefersReducedMotion) {
    drawStaticFrame();
  } else {
    start();
  }
})();
