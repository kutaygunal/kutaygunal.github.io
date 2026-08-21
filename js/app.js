/* ============================================================
   Instrument Panel — profile/nameplate rendering, nav behavior,
   scroll effects, and the work-log grid (filter + search).
   ============================================================ */

(function () {
  const prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Hand-drawn category line-icons (20x20, stroke = currentColor) ----
  const CATEGORY_ICONS = {
    ai: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="4.5" cy="5" r="2" stroke="currentColor" stroke-width="1.5"/><circle cx="15.5" cy="5" r="2" stroke="currentColor" stroke-width="1.5"/><circle cx="10" cy="15" r="2" stroke="currentColor" stroke-width="1.5"/><path d="M6.2 6.2 8.5 13.3M13.8 6.2 11.5 13.3M6.5 5H13.5" stroke="currentColor" stroke-width="1.3"/></svg>',
    compression: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="4" y="7" width="12" height="10" stroke="currentColor" stroke-width="1.5"/><path d="M7 3l3 4 3-4M10 3v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    data: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4 17V10M10 17V4M16 17v-7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    systems: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="2.6" stroke="currentColor" stroke-width="1.5"/><path d="M10 2.5v2.4M10 15v2.4M17.5 10h-2.4M4.9 10H2.5M15.4 4.6l-1.7 1.7M6.3 13.7l-1.7 1.7M15.4 15.4l-1.7-1.7M6.3 6.3 4.6 4.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    telemetry: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 17V9M10 9l5-5M13 2h2v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 13.5a5 5 0 0 1 0-7M3 15.5a8 8 0 0 1 0-11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
    desktop: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="9" stroke="currentColor" stroke-width="1.5"/><path d="M7 17h6M10 13v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    visualization: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 15 8 9l3 3 6-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="9" r="1.1" fill="currentColor"/><circle cx="11" cy="12" r="1.1" fill="currentColor"/></svg>',
    productivity: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3.5" y="3.5" width="13" height="13" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 10.3 9 12.8l4.5-5.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    api: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M7 3v4M13 3v4M4 7h12v3a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V7ZM10 14v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    health: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2.5 10.5h4l1.5-4 3 7 1.5-3h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    "3d": '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 2.5 17 6.5v7L10 17.5 3 13.5v-7L10 2.5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M3 6.5 10 10.5 17 6.5M10 10.5v7" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
    component: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="6" height="6" stroke="currentColor" stroke-width="1.5"/><rect x="11" y="3" width="6" height="6" stroke="currentColor" stroke-width="1.5"/><rect x="7" y="11" width="6" height="6" stroke="currentColor" stroke-width="1.5"/></svg>',
    game: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="6" width="15" height="8" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 9v2M5.5 10h2M13.5 9.5h.01M15.5 11h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  };
  const DEFAULT_ICON = CATEGORY_ICONS.systems;

  // ---- Profile / hero ----
  function renderProfile() {
    document.getElementById("hero-status").textContent = "STATUS: " + PROFILE.status;
    document.getElementById("hero-name").textContent = PROFILE.name;
    document.getElementById("hero-role").textContent = PROFILE.role + " · " + PROFILE.focus;
    document.getElementById("hero-bio").textContent = PROFILE.bio;
    document.getElementById("hero-stack").innerHTML = PROFILE.stack
      .map((s) => `<span class="chip">${s}</span>`)
      .join("");
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("build-date").textContent = new Date()
      .toISOString()
      .slice(0, 7)
      .replace("-", ".");
  }

  // ---- Contact nameplate ----
  function renderNameplate() {
    document.getElementById("np-name").textContent = PROFILE.name;
    document.getElementById("np-role").textContent = PROFILE.role;
    document.getElementById("np-location").textContent = PROFILE.location;
    const emailEl = document.getElementById("np-email");
    emailEl.innerHTML = `<a href="mailto:${PROFILE.email}">${PROFILE.email}</a>`;
    const linksEl = document.getElementById("np-links");
    linksEl.innerHTML =
      `<a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a>` +
      ` · <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`;
    document.getElementById("np-cta").href = `mailto:${PROFILE.email}`;
  }

  // ---- Stats strip ----
  function renderStats() {
    const languages = new Set(PROJECTS.map((p) => p.language));
    const featured = PROJECTS.filter((p) => p.featured).length;
    const stats = [
      { num: PROJECTS.length, label: "Weekend builds" },
      { num: languages.size, label: "Languages" },
      { num: PROFILE.yearsExperience + "+", label: "Years shipping software" },
      { num: featured, label: "Featured" },
    ];
    const html = stats
      .map(
        (s) =>
          `<div class="stat reveal"><span class="stat-num">${s.num}</span><span class="stat-label">${s.label}</span></div>`
      )
      .join("") + `<p class="stat-note">${PROFILE.bio}</p>`;
    document.getElementById("stats").innerHTML = html;
  }

  // ---- Header scroll shadow (kept minimal — flat toolbar, just a border-strength bump) ----
  function initToolbarScroll() {
    const toolbar = document.getElementById("toolbar");
    function update() {
      toolbar.style.borderBottomColor = window.scrollY > 8 ? "var(--border-bright)" : "var(--border)";
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  // ---- Mobile nav ----
  function initMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("mobile-nav");
    function close() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    function open() {
      menu.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }
    toggle.addEventListener("click", () => {
      menu.classList.contains("is-open") ? close() : open();
    });
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("click", (e) => {
      if (!menu.classList.contains("is-open")) return;
      if (menu.contains(e.target) || toggle.contains(e.target)) return;
      close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  // ---- Active-section nav highlighting ----
  function initActiveNav() {
    const sections = ["about", "work", "contact"].map((id) => document.getElementById(id)).filter(Boolean);
    const navLinks = document.querySelectorAll("[data-nav]");
    function setActive(id) {
      navLinks.forEach((a) => a.classList.toggle("is-active", a.dataset.nav === id));
    }
    if (!("IntersectionObserver" in window) || sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
  }

  // ---- Back to top ----
  function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    function update() {
      btn.hidden = false;
      btn.classList.toggle("is-visible", window.scrollY > 480);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  // ---- Scroll-reveal ----
  let revealIO = null;
  function observeReveal(el) {
    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      el.classList.add("is-visible");
      return;
    }
    if (!revealIO) {
      revealIO = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    }
    revealIO.observe(el);
  }

  // ---- Work log: filter + search ----
  const grid = document.getElementById("project-grid");
  const searchInput = document.getElementById("search");
  const filtersEl = document.getElementById("filters");
  const emptyState = document.getElementById("empty-state");

  let activeFilter = "All";

  function buildFilters() {
    const langs = ["All", ...new Set(PROJECTS.map((p) => p.language))];
    filtersEl.innerHTML = "";
    langs.forEach((lang) => {
      const count = lang === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.language === lang).length;
      const btn = document.createElement("button");
      btn.className = "filter" + (lang === "All" ? " is-active" : "");
      btn.innerHTML = `[${lang}<span class="filter-count">·${count}</span>]`;
      btn.dataset.lang = lang;
      btn.addEventListener("click", () => {
        activeFilter = lang;
        document.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        render();
      });
      filtersEl.appendChild(btn);
    });
  }

  function render() {
    const q = searchInput.value.trim().toLowerCase();
    const filtered = PROJECTS.filter((p) => {
      const matchesLang = activeFilter === "All" || p.language === activeFilter;
      const matchesSearch =
        !q ||
        (p.title || p.name).toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesLang && matchesSearch;
    });

    grid.innerHTML = "";
    emptyState.hidden = filtered.length > 0;

    filtered.forEach((p, i) => {
      const card = document.createElement("a");
      card.className = "card" + (p.featured ? " featured" : "");
      card.href = p.url;
      card.target = "_blank";
      card.rel = "noopener";
      card.style.transitionDelay = prefersReducedMotion ? "0ms" : `${Math.min(i, 8) * 35}ms`;

      const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
      const icon = CATEGORY_ICONS[p.category] || DEFAULT_ICON;

      card.innerHTML = `
        <div class="scanline"></div>
        <div class="card-top">
          <h3 class="card-name">${p.title || p.name}</h3>
          <span class="card-icon">${icon}</span>
        </div>
        <p class="card-desc">${p.description}</p>
        <div class="card-meta">
          <span>STACK: <b>${p.language}</b></span>
          <span>STATUS: <b>${p.status || "SHIPPED"}</b></span>
        </div>
        <div class="card-bottom">
          ${p.featured ? '<span class="badge">FEATURED</span>' : ""}
          ${tags}
        </div>
      `;
      grid.appendChild(card);
      observeReveal(card);
    });
  }

  searchInput.addEventListener("input", render);

  // ---- Init ----
  renderProfile();
  renderNameplate();
  renderStats();
  buildFilters();
  render();
  initToolbarScroll();
  initMobileNav();
  initActiveNav();
  initBackToTop();
  document.querySelectorAll(".stat").forEach(observeReveal);
})();
