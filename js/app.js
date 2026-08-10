/* ============================================================
   Projects showcase — filtering, search, rendering.
   ============================================================ */

(function () {
  const grid = document.getElementById("project-grid");
  const searchInput = document.getElementById("search");
  const filtersEl = document.getElementById("filters");
  const emptyState = document.getElementById("empty-state");

  let activeFilter = "All";

  // ---- Build filter buttons from unique languages ----
  function buildFilters() {
    const langs = ["All", ...new Set(PROJECTS.map((p) => p.language))];
    filtersEl.innerHTML = "";
    langs.forEach((lang) => {
      const btn = document.createElement("button");
      btn.className = "filter" + (lang === "All" ? " is-active" : "");
      btn.textContent = lang;
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

  // ---- Render filtered projects ----
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

    filtered.forEach((p) => {
      const card = document.createElement("a");
      card.className = "card" + (p.featured ? " featured" : "");
      card.href = p.url;
      card.target = "_blank";
      card.rel = "noopener";

      const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
      const img = p.image ? `<img class="card-img" src="${p.image}?v=2" alt="" loading="lazy" />` : "";

      card.innerHTML = `
        ${img}
        <div class="card-top">
          <h3 class="card-name">${p.title || p.name}</h3>
          ${p.featured ? '<span class="badge">Featured</span>' : ""}
        </div>
        <p class="card-desc">${p.description}</p>
        <div class="card-bottom">
          <span class="lang">${p.language}</span>
          <div class="tags">${tags}</div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  searchInput.addEventListener("input", render);

  buildFilters();
  render();
})();
