import {
  LANG_KEY,
  defaultContent,
  loadContent,
  saveContent,
  compressImage,
  localized,
} from "./i18n.js";

const ADMIN_PASS = "meridian";
const SESSION_KEY = "meridian-admin-ok";

const adminCopy = {
  he: {
    loginTitle: "כניסה לניהול",
    loginHint: "סיסמה ברירת מחדל: meridian",
    passwordLabel: "סיסמה",
    loginBtn: "כניסה",
    badPass: "סיסמה שגויה",
    title: "ניהול תמונות ופרויקטים",
    subtitle:
      "העלו תמונות מהטלפון או מהמחשב. השינויים נשמרים במכשיר זה ומוצגים באתר מיד.",
    heroSection: "תמונת פתיחה (Hero)",
    uploadHero: "העלאת תמונת פתיחה",
    projectsSection: "פרויקטים בגלריה",
    addProject: "+ פרויקט חדש",
    featuredSection: "פרויקטים מובילים",
    addFeatured: "+ פריט מוביל",
    exportBtn: "ייצוא גיבוי",
    importBtn: "ייבוא גיבוי",
    resetBtn: "איפוס לברירת מחדל",
    persistNote:
      "התמונות נשמרות בדפדפן במכשיר זה. לייצוא לגיבוי לחצו «ייצוא». אחרי שמירה רעננו את דף האתר.",
    editTitle: "עריכת פרויקט",
    titleHe: "כותרת בעברית",
    titleAr: "العنوان بالعربية",
    yearLabel: "שנה",
    categoryLabel: "קטגוריה",
    copyHe: "תיאור בעברית",
    copyAr: "الوصف بالعربية",
    materialHe: "חומר (עברית)",
    materialAr: "المادة (عربي)",
    finishHe: "גימור (עברית)",
    finishAr: "التشطيب (عربي)",
    mainPhoto: "תמונה ראשית",
    beforePhoto: "תמונת לפני (אופציונלי)",
    choosePhoto: "בחירת תמונה",
    cancel: "ביטול",
    save: "שמירה",
    edit: "עריכה",
    remove: "מחיקה",
    confirmReset: "לאפס את כל התוכן והתמונות?",
    confirmDelete: "למחוק פריט זה?",
    saved: "נשמר",
  },
  ar: {
    loginTitle: "دخول الإدارة",
    loginHint: "كلمة المرور الافتراضية: meridian",
    passwordLabel: "كلمة المرور",
    loginBtn: "دخول",
    badPass: "كلمة مرور خاطئة",
    title: "إدارة الصور والمشاريع",
    subtitle:
      "ارفعوا صوراً من الهاتف أو الحاسوب. تُحفظ التغييرات على هذا الجهاز وتظهر في الموقع فوراً.",
    heroSection: "صورة الواجهة (Hero)",
    uploadHero: "رفع صورة الواجهة",
    projectsSection: "مشاريع المعرض",
    addProject: "+ مشروع جديد",
    featuredSection: "مشاريع مميزة",
    addFeatured: "+ عنصر مميز",
    exportBtn: "تصدير نسخة احتياطية",
    importBtn: "استيراد نسخة",
    resetBtn: "إعادة للافتراضي",
    persistNote:
      "تُحفظ الصور في متصفح هذا الجهاز. للتصدير اضغطوا «تصدير». بعد الحفظ حدّثوا صفحة الموقع.",
    editTitle: "تعديل المشروع",
    titleHe: "العنوان بالعبرية",
    titleAr: "العنوان بالعربية",
    yearLabel: "السنة",
    categoryLabel: "الفئة",
    copyHe: "الوصف بالعبرية",
    copyAr: "الوصف بالعربية",
    materialHe: "المادة (عبري)",
    materialAr: "المادة (عربي)",
    finishHe: "التشطيب (عبري)",
    finishAr: "التشطيب (عربي)",
    mainPhoto: "الصورة الرئيسية",
    beforePhoto: "صورة قبل (اختياري)",
    choosePhoto: "اختيار صورة",
    cancel: "إلغاء",
    save: "حفظ",
    edit: "تعديل",
    remove: "حذف",
    confirmReset: "إعادة ضبط كل المحتوى والصور؟",
    confirmDelete: "حذف هذا العنصر؟",
    saved: "تم الحفظ",
  },
};

let lang = localStorage.getItem(LANG_KEY) || "he";
let content = loadContent();
let editState = {
  image: "",
  before: "",
};

const gate = document.querySelector("[data-gate]");
const app = document.querySelector("[data-app]");
const dialog = document.querySelector("[data-edit-dialog]");
const form = document.querySelector("[data-edit-form]");

function applyAdminLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = "rtl";
  document.documentElement.dataset.lang = lang;
  const copy = adminCopy[lang];
  document.querySelectorAll("[data-admin]").forEach((el) => {
    const key = el.getAttribute("data-admin");
    if (copy[key] != null) el.textContent = copy[key];
  });
  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-set-lang") === lang);
  });
}

function unlock() {
  gate.hidden = true;
  app.hidden = false;
  render();
}

function render() {
  applyAdminLang();
  const heroPreview = document.querySelector("[data-hero-preview]");
  if (heroPreview) heroPreview.src = content.heroImage;

  const projectList = document.querySelector("[data-project-list]");
  projectList.innerHTML = content.projects
    .map(
      (p) => `
      <article class="admin-item">
        <img src="${p.image}" alt="" />
        <div>
          <h3>${localized(p.title, lang)}</h3>
          <p>${p.category} · ${p.year}</p>
        </div>
        <div class="admin-item__actions">
          <button type="button" class="btn btn--ghost" data-edit="project:${p.id}">${adminCopy[lang].edit}</button>
          <button type="button" class="btn btn--ghost" data-delete="project:${p.id}">${adminCopy[lang].remove}</button>
        </div>
      </article>`
    )
    .join("");

  const featuredList = document.querySelector("[data-featured-list]");
  featuredList.innerHTML = content.featured
    .map(
      (f) => `
      <article class="admin-item">
        <img src="${f.image}" alt="" />
        <div>
          <h3>${localized(f.title, lang)}</h3>
          <p>${f.category} · ${f.year}</p>
        </div>
        <div class="admin-item__actions">
          <button type="button" class="btn btn--ghost" data-edit="featured:${f.id}">${adminCopy[lang].edit}</button>
          <button type="button" class="btn btn--ghost" data-delete="featured:${f.id}">${adminCopy[lang].remove}</button>
        </div>
      </article>`
    )
    .join("");
}

function persist() {
  saveContent(content);
  render();
}

function openEditor(kind, item) {
  form.kind.value = kind;
  form.id.value = item?.id || "";
  form.titleHe.value = item?.title?.he || "";
  form.titleAr.value = item?.title?.ar || "";
  form.year.value = item?.year || new Date().getFullYear();
  form.category.value = item?.category || "kitchens";
  form.copyHe.value = item?.copy?.he || "";
  form.copyAr.value = item?.copy?.ar || "";
  form.materialHe.value = item?.material?.he || "";
  form.materialAr.value = item?.material?.ar || "";
  form.finishHe.value = item?.finish?.he || "";
  form.finishAr.value = item?.finish?.ar || "";
  editState.image = item?.image || "";
  editState.before = item?.before || "";
  form.querySelector("[data-edit-image]").src = editState.image || "";
  form.querySelector("[data-edit-before]").src = editState.before || "";
  document.querySelector(".admin-project-fields")?.classList.toggle(
    "is-featured-only",
    kind === "featured"
  );
  form.querySelectorAll(".admin-project-fields").forEach((el) => {
    el.hidden = kind === "featured";
  });
  dialog.showModal();
}

document.querySelectorAll("[data-set-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    lang = btn.getAttribute("data-set-lang");
    localStorage.setItem(LANG_KEY, lang);
    applyAdminLang();
    if (!app.hidden) render();
  });
});

document.querySelector("[data-login]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = new FormData(event.target).get("password");
  const status = document.querySelector("[data-login-status]");
  if (password === ADMIN_PASS) {
    sessionStorage.setItem(SESSION_KEY, "1");
    unlock();
  } else {
    status.textContent = adminCopy[lang].badPass;
  }
});

if (sessionStorage.getItem(SESSION_KEY) === "1") unlock();
else applyAdminLang();

document.querySelector("[data-hero-file]")?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  content.heroImage = await compressImage(file, 2000, 0.85);
  persist();
  event.target.value = "";
});

document.querySelector("[data-add-project]")?.addEventListener("click", () => {
  openEditor("project", null);
});

document.querySelector("[data-add-featured]")?.addEventListener("click", () => {
  openEditor("featured", null);
});

document.querySelector("[data-project-list]")?.addEventListener("click", onListClick);
document.querySelector("[data-featured-list]")?.addEventListener("click", onListClick);

function onListClick(event) {
  const edit = event.target.closest("[data-edit]");
  const del = event.target.closest("[data-delete]");
  if (edit) {
    const [kind, id] = edit.getAttribute("data-edit").split(":");
    const list = kind === "project" ? content.projects : content.featured;
    openEditor(kind, list.find((item) => item.id === id));
  }
  if (del) {
    if (!confirm(adminCopy[lang].confirmDelete)) return;
    const [kind, id] = del.getAttribute("data-delete").split(":");
    if (kind === "project") {
      content.projects = content.projects.filter((item) => item.id !== id);
    } else {
      content.featured = content.featured.filter((item) => item.id !== id);
    }
    persist();
  }
}

form?.imageFile?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  editState.image = await compressImage(file);
  form.querySelector("[data-edit-image]").src = editState.image;
});

form?.beforeFile?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  editState.before = await compressImage(file);
  form.querySelector("[data-edit-before]").src = editState.before;
});

document.querySelector("[data-cancel]")?.addEventListener("click", () => dialog.close());

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const kind = form.kind.value;
  const id = form.id.value || `${kind[0]}${Date.now()}`;
  const base = {
    id,
    year: form.year.value.trim(),
    category: form.category.value,
    title: { he: form.titleHe.value.trim(), ar: form.titleAr.value.trim() },
    image: editState.image,
  };

  if (!base.image) {
    alert(lang === "he" ? "נא להוסיף תמונה" : "يرجى إضافة صورة");
    return;
  }

  if (kind === "featured") {
    const next = { ...base };
    const idx = content.featured.findIndex((item) => item.id === id);
    if (idx >= 0) content.featured[idx] = next;
    else content.featured.push(next);
  } else {
    const next = {
      ...base,
      copy: { he: form.copyHe.value.trim(), ar: form.copyAr.value.trim() },
      material: {
        he: form.materialHe.value.trim(),
        ar: form.materialAr.value.trim(),
      },
      finish: { he: form.finishHe.value.trim(), ar: form.finishAr.value.trim() },
      hardware: { he: "BLUM · Häfele", ar: "BLUM · Häfele" },
      style: { he: "מודרני", ar: "حديث" },
      before: editState.before || "",
      after: editState.image,
      macros: [],
    };
    const idx = content.projects.findIndex((item) => item.id === id);
    if (idx >= 0) content.projects[idx] = next;
    else content.projects.push(next);
  }

  persist();
  dialog.close();
});

document.querySelector("[data-export]")?.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(content, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "meridian-content.json";
  a.click();
  URL.revokeObjectURL(url);
});

document.querySelector("[data-import]")?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    content = JSON.parse(await file.text());
    persist();
  } catch {
    alert("JSON error");
  }
  event.target.value = "";
});

document.querySelector("[data-reset]")?.addEventListener("click", () => {
  if (!confirm(adminCopy[lang].confirmReset)) return;
  content = structuredClone(defaultContent);
  persist();
});

applyAdminLang();
