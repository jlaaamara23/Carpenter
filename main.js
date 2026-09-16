import {
  LANG_KEY,
  loadContent,
  strings,
  localized,
} from "./i18n.js";

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const filters = document.querySelector("[data-filters]");
const gallery = document.querySelector("[data-gallery]");
const featuredGrid = document.querySelector("[data-featured-grid]");
const dialog = document.querySelector("[data-dialog]");
const timeline = document.querySelector("[data-timeline]");
const form = document.querySelector("[data-form]");
const formStatus = document.querySelector("[data-form-status]");
const year = document.querySelector("[data-year]");

let lang = localStorage.getItem(LANG_KEY) || "he";
let content = loadContent();
let activeFilter = "all";
let currentProjects = [];

if (year) year.textContent = String(new Date().getFullYear());

function applyStrings() {
  const s = strings[lang];
  document.documentElement.lang = s.lang;
  document.documentElement.dir = s.dir;
  document.documentElement.dataset.lang = lang;
  document.title = s.metaTitle;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", s.metaDesc);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (s[key] != null) el.textContent = s[key];
  });

  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-set-lang") === lang);
  });
}

function categoryLabel(key) {
  return strings[lang].categories[key] || key;
}

function renderFeatured() {
  if (!featuredGrid) return;
  featuredGrid.innerHTML = content.featured
    .map(
      (item, i) => `
      <button type="button" class="project-tile" data-open-featured="${item.id}" style="--i:${i}">
        <img src="${item.image}" alt="${localized(item.title, lang)}" width="1400" height="1000" loading="lazy" />
        <div class="project-tile__meta">
          <h3>${localized(item.title, lang)}</h3>
          <p><span>${categoryLabel(item.category)}</span> · <span>${item.year}</span></p>
        </div>
      </button>`
    )
    .join("");
}

function renderGallery() {
  if (!gallery) return;
  currentProjects = content.projects;
  gallery.innerHTML = content.projects
    .map((project) => {
      const hidden =
        activeFilter !== "all" && project.category !== activeFilter
          ? " is-hidden"
          : "";
      return `
      <article class="gallery-item${hidden}" data-category="${project.category}">
        <button type="button" class="gallery-item__open" data-open-project="${project.id}">
          <img src="${project.image}" alt="${localized(project.title, lang)}" width="1200" height="900" loading="lazy" />
          <div class="gallery-item__caption">
            <h3>${localized(project.title, lang)}</h3>
            <p>${categoryLabel(project.category)} · ${project.year}</p>
          </div>
        </button>
      </article>`;
    })
    .join("");
}

function openProject(project) {
  if (!project || !dialog) return;
  dialog.querySelector("[data-dialog-title]").textContent = localized(
    project.title,
    lang
  );
  dialog.querySelector("[data-dialog-category]").textContent = categoryLabel(
    project.category
  );
  dialog.querySelector("[data-dialog-copy]").textContent = localized(
    project.copy,
    lang
  );
  dialog.querySelector("[data-dialog-material]").textContent = localized(
    project.material,
    lang
  );
  dialog.querySelector("[data-dialog-finish]").textContent = localized(
    project.finish,
    lang
  );
  dialog.querySelector("[data-dialog-hardware]").textContent = localized(
    project.hardware,
    lang
  );
  dialog.querySelector("[data-dialog-style]").textContent = localized(
    project.style,
    lang
  );

  const before = dialog.querySelector("[data-dialog-before]");
  const after = dialog.querySelector("[data-dialog-after]");
  const mainImage = project.after || project.image;
  after.src = mainImage;
  before.src = project.before || mainImage;
  before.style.clipPath = "inset(0 50% 0 0)";
  dialog.querySelector("[data-ba-range]").value = "50";

  const macros = dialog.querySelector("[data-dialog-macros]");
  const shots = (project.macros || []).filter(Boolean);
  macros.innerHTML = shots
    .map(
      (src, index) =>
        `<img src="${src}" alt="" width="600" height="600" loading="lazy" />`
    )
    .join("");
  macros.hidden = shots.length === 0;

  dialog.showModal();
}

function findProject(id) {
  return content.projects.find((p) => p.id === id);
}

function renderAll() {
  const hero = document.querySelector("[data-hero-image]");
  if (hero) hero.src = content.heroImage;
  const map = document.querySelector("[data-map-frame]");
  if (map && content.mapEmbed) map.src = content.mapEmbed;
  applyStrings();
  renderFeatured();
  renderGallery();
}

document.querySelectorAll("[data-set-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    lang = btn.getAttribute("data-set-lang");
    localStorage.setItem(LANG_KEY, lang);
    renderAll();
  });
});

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("is-scrolled", window.scrollY > 24),
  { passive: true }
);

navToggle?.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  mobileNav.hidden = open;
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    if (mobileNav) mobileNav.hidden = true;
  });
});

filters?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  filters.querySelectorAll(".filter").forEach((el) => {
    el.classList.toggle("is-active", el === button);
  });
  gallery?.querySelectorAll(".gallery-item").forEach((item) => {
    const match =
      activeFilter === "all" || item.dataset.category === activeFilter;
    item.classList.toggle("is-hidden", !match);
  });
});

featuredGrid?.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-open-featured]");
  if (!btn) return;
  const featured = content.featured.find(
    (f) => f.id === btn.getAttribute("data-open-featured")
  );
  if (!featured) return;
  const match =
    content.projects.find((p) => p.category === featured.category) ||
    content.projects[0];
  if (match) openProject({ ...match, image: featured.image, after: featured.image });
});

gallery?.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-open-project]");
  if (!btn) return;
  openProject(findProject(btn.getAttribute("data-open-project")));
});

dialog?.querySelector("[data-dialog-close]")?.addEventListener("click", () => {
  dialog.close();
});

dialog?.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const inside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;
  if (!inside) dialog.close();
});

dialog?.querySelector("[data-ba-range]")?.addEventListener("input", (event) => {
  const value = event.target.value;
  dialog.querySelector(
    "[data-dialog-before]"
  ).style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});

if (timeline && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timeline.classList.add("is-visible");
          observer.disconnect();
        }
      });
    },
    { threshold: 0.25 }
  );
  observer.observe(timeline);
} else {
  timeline?.classList.add("is-visible");
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const required = form.querySelectorAll("[required]");
  let valid = true;
  required.forEach((field) => {
    const ok = Boolean(String(field.value || "").trim());
    field.classList.toggle("is-invalid", !ok);
    if (!ok) valid = false;
  });
  if (!valid) {
    formStatus.textContent = strings[lang].formError;
    return;
  }
  formStatus.textContent = strings[lang].formOk;
  form.reset();
  required.forEach((field) => field.classList.remove("is-invalid"));
});

window.addEventListener("storage", (event) => {
  if (event.key === "meridian-content-v1") {
    content = loadContent();
    renderAll();
  }
});

renderAll();
