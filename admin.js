import {
  LANG_KEY,
  defaultContent,
  loadContent,
  saveContent,
  compressImage,
  localized,
  toMapEmbed,
} from "./i18n.js";

/** SHA-256 of the admin password — plaintext is never stored in the page. */
const ADMIN_PASS_HASH =
  "e38cc25c584060df082861186216db13db06e6bee0d1580341d31dae0053717a";
const SESSION_KEY = "talib-admin-session";

const adminCopy = {
  he: {
    backSite: "← חזרה לאתר",
    logout: "יציאה",
    loginBrand: "נגריית טאלב אמארה",
    loginTitle: "כניסה לניהול",
    loginLede: "הזינו את הסיסמה כדי לנהל תמונות ופרויקטים.",
    passwordLabel: "סיסמה",
    loginBtn: "כניסה",
    badPass: "סיסמה שגויה",
    title: "לוח ניהול",
    subtitle: "העלאת תמונות, עריכת פרויקטים ושמירה מיידית באתר.",
    tabHero: "פתיחה",
    tabProjects: "גלריה",
    tabFeatured: "מובילים",
    tabLocation: "מיקום",
    tabBackup: "גיבוי",
    heroSection: "תמונת פתיחה",
    heroHint: "גררו תמונה לכאן, בחרו מהגלריה, או צלמו מהטלפון.",
    dropHint: "שחררו תמונה כאן",
    uploadHero: "בחירת תמונה",
    cameraHero: "צילום",
    projectsSection: "פרויקטים בגלריה",
    projectsHint: "כל פרויקט מופיע בגלריה עם סינון לפי קטגוריה.",
    addProject: "+ פרויקט חדש",
    featuredSection: "פרויקטים מובילים",
    featuredHint: "מוצגים בראש העמוד תחת «פרויקטים מובילים».",
    addFeatured: "+ פריט מוביל",
    emptyProjects: "אין פרויקטים עדיין — הוסיפו את הראשון.",
    emptyFeatured: "אין פריטים מובילים עדיין.",
    locationSection: "מיקום מדויק ב־Google Maps",
    mapStep1: "פתחו Google Maps בטלפון או במחשב.",
    mapStep2: "לחצו לחיצה ארוכה על הנקודה המדויקת של המנגריה (או חפשו וסמנו את הכתובת).",
    mapStep3: "לחצו «שתף» / Share והעתיקו את הקישור.",
    mapStep4: "הדביקו כאן את הקישור (או קואורדינטות כמו 32.75, 35.34) ושמרו.",
    mapLinkLabel: "קישור Google Maps או קואורדינטות",
    mapLinkHint: "אפשר גם קישור מלא מ־Google Maps, או lat,lng מהסיכה.",
    saveMap: "שמירת מיקום",
    toastMap: "המיקום במפה עודכן",
    backupSection: "גיבוי ושחזור",
    persistNote:
      "התמונות נשמרות בדפדפן במכשיר זה. מומלץ לייצא גיבוי אחרי שינויים חשובים.",
    exportBtn: "ייצוא גיבוי",
    importBtn: "ייבוא גיבוי",
    previewSite: "תצוגה מקדימה של האתר",
    dangerTitle: "אזור מסוכן",
    dangerHint: "איפוס מוחק את כל התמונות והפרויקטים ששמרתם במכשיר.",
    resetBtn: "איפוס לברירת מחדל",
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
    choosePhoto: "בחירה מהגלריה",
    cameraPhoto: "צילום",
    cancel: "ביטול",
    save: "שמירה",
    edit: "עריכה",
    remove: "מחיקה",
    confirmReset: "לאפס את כל התוכן והתמונות במכשיר זה?",
    confirmDelete: "למחוק פריט זה?",
    needPhoto: "נא להוסיף תמונה ראשית",
    needTitles: "נא למלא כותרת בעברית ובערבית",
    needYear: "נא למלא שנה",
    saveFailed: "השמירה נכשלה. נסו שוב עם תמונה קטנה יותר.",
    toastSaved: "נשמר בהצלחה",
    toastHero: "תמונת הפתיחה עודכנה",
    toastDeleted: "נמחק",
    toastImported: "הגיבוי יובא",
    toastReset: "אופס לברירת מחדל",
    toastExported: "הגיבוי הורד",
  },
  ar: {
    backSite: "← العودة للموقع",
    logout: "خروج",
    loginBrand: "منجرة طالب اماره",
    loginTitle: "دخول الإدارة",
    loginLede: "أدخلوا كلمة المرور لإدارة الصور والمشاريع.",
    passwordLabel: "كلمة المرور",
    loginBtn: "دخول",
    badPass: "كلمة مرور خاطئة",
    title: "لوحة الإدارة",
    subtitle: "رفع الصور وتعديل المشاريع والحفظ فوراً في الموقع.",
    tabHero: "الواجهة",
    tabProjects: "المعرض",
    tabFeatured: "مميزة",
    tabLocation: "الموقع",
    tabBackup: "نسخ احتياطي",
    heroSection: "صورة الواجهة",
    heroHint: "اسحبوا صورة هنا، أو اختاروا من المعرض، أو صوّروا من الهاتف.",
    dropHint: "أفلتوا الصورة هنا",
    uploadHero: "اختيار صورة",
    cameraHero: "تصوير",
    projectsSection: "مشاريع المعرض",
    projectsHint: "كل مشروع يظهر في المعرض مع تصفية حسب الفئة.",
    addProject: "+ مشروع جديد",
    featuredSection: "مشاريع مميزة",
    featuredHint: "تظهر أعلى الصفحة تحت المشاريع المميزة.",
    addFeatured: "+ عنصر مميز",
    emptyProjects: "لا مشاريع بعد — أضيفوا الأول.",
    emptyFeatured: "لا عناصر مميزة بعد.",
    locationSection: "موقع دقيق في Google Maps",
    mapStep1: "افتحوا Google Maps على الهاتف أو الحاسوب.",
    mapStep2: "اضغطوا مطولاً على نقطة المنجرة الدقيقة (أو ابحثوا وحددوا العنوان).",
    mapStep3: "اضغطوا «مشاركة» / Share وانسخوا الرابط.",
    mapStep4: "الصقوا الرابط هنا (أو الإحداثيات مثل 32.75, 35.34) ثم احفظوا.",
    mapLinkLabel: "رابط Google Maps أو الإحداثيات",
    mapLinkHint: "يمكن رابط Maps كامل أو lat,lng من الدبوس.",
    saveMap: "حفظ الموقع",
    toastMap: "تم تحديث الموقع على الخريطة",
    backupSection: "نسخ احتياطي واستعادة",
    persistNote:
      "تُحفظ الصور في متصفح هذا الجهاز. يُفضّل تصدير نسخة بعد التغييرات المهمة.",
    exportBtn: "تصدير نسخة",
    importBtn: "استيراد نسخة",
    previewSite: "معاينة الموقع",
    dangerTitle: "منطقة خطرة",
    dangerHint: "الإعادة تحذف كل الصور والمشاريع المحفوظة على هذا الجهاز.",
    resetBtn: "إعادة للافتراضي",
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
    choosePhoto: "من المعرض",
    cameraPhoto: "تصوير",
    cancel: "إلغاء",
    save: "حفظ",
    edit: "تعديل",
    remove: "حذف",
    confirmReset: "إعادة ضبط كل المحتوى والصور على هذا الجهاز؟",
    confirmDelete: "حذف هذا العنصر؟",
    needPhoto: "يرجى إضافة صورة رئيسية",
    needTitles: "يرجى تعبئة العنوان بالعبرية والعربية",
    needYear: "يرجى إدخال السنة",
    saveFailed: "فشل الحفظ. حاولوا مجدداً بصورة أصغر.",
    toastSaved: "تم الحفظ بنجاح",
    toastHero: "تم تحديث صورة الواجهة",
    toastDeleted: "تم الحذف",
    toastImported: "تم استيراد النسخة",
    toastReset: "تمت الإعادة للافتراضي",
    toastExported: "تم تنزيل النسخة",
  },
};

let lang = localStorage.getItem(LANG_KEY) || "he";
let content = structuredClone(defaultContent);
let editState = { image: "", before: "" };
let toastTimer;
let ready = false;

const gate = document.querySelector("[data-gate]");
const app = document.querySelector("[data-app]");
const bar = document.querySelector("[data-bar]");
const dialog = document.querySelector("[data-edit-dialog]");
const form = document.querySelector("[data-edit-form]");
const toastEl = document.querySelector("[data-toast]");

async function hashText(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function toast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.hidden = false;
  toastEl.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("is-visible");
    toastEl.hidden = true;
  }, 2200);
}

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
  bar.hidden = false;
  render();
}

function lock() {
  sessionStorage.removeItem(SESSION_KEY);
  gate.hidden = false;
  app.hidden = true;
  bar.hidden = true;
  applyAdminLang();
}

function setTab(name) {
  document.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-tab") === name);
  });
  document.querySelectorAll("[data-panel]").forEach((panel) => {
    panel.classList.toggle(
      "is-active",
      panel.getAttribute("data-panel") === name
    );
  });
}

function renderStats() {
  const stats = document.querySelector("[data-stats]");
  if (!stats) return;
  stats.innerHTML = `
    <div><strong>${content.projects.length}</strong><span>${adminCopy[lang].tabProjects}</span></div>
    <div><strong>${content.featured.length}</strong><span>${adminCopy[lang].tabFeatured}</span></div>
  `;
}

function renderList(target, items, kind) {
  const empty = document.querySelector(
    kind === "project" ? "[data-empty-projects]" : "[data-empty-featured]"
  );
  if (!items.length) {
    target.innerHTML = "";
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  target.innerHTML = items
    .map(
      (item) => `
      <article class="admin-item">
        <img src="${item.image}" alt="" />
        <div>
          <h3>${localized(item.title, lang)}</h3>
          <p>${item.category} · ${item.year}</p>
        </div>
        <div class="admin-item__actions">
          <button type="button" class="btn btn--ghost" data-edit="${kind}:${item.id}">${adminCopy[lang].edit}</button>
          <button type="button" class="btn btn--ghost btn--danger-text" data-delete="${kind}:${item.id}">${adminCopy[lang].remove}</button>
        </div>
      </article>`
    )
    .join("");
}

function render() {
  applyAdminLang();
  renderStats();
  const heroPreview = document.querySelector("[data-hero-preview]");
  if (heroPreview) heroPreview.src = content.heroImage || "";
  const mapPreview = document.querySelector("[data-map-preview]");
  const mapInput = document.querySelector("[data-map-input]");
  if (mapPreview && content.mapEmbed) mapPreview.src = content.mapEmbed;
  if (mapInput && !mapInput.value) mapInput.value = content.mapEmbed || "";
  renderList(
    document.querySelector("[data-project-list]"),
    content.projects,
    "project"
  );
  renderList(
    document.querySelector("[data-featured-list]"),
    content.featured,
    "featured"
  );
}

async function persist(messageKey) {
  try {
    await saveContent(content);
    render();
    if (messageKey) toast(adminCopy[lang][messageKey]);
    return true;
  } catch (error) {
    console.error(error);
    toast(adminCopy[lang].saveFailed);
    return false;
  }
}

async function setImageFromFile(file, onDone) {
  if (!file || !file.type.startsWith("image/")) return;
  const dataUrl = await compressImage(file);
  onDone(dataUrl);
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
  form.querySelectorAll(".admin-project-fields").forEach((el) => {
    el.hidden = kind === "featured";
  });
  dialog.showModal();
}

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
    void persist("toastDeleted");
  }
}

function bindDropZone(zone, onFile) {
  if (!zone) return;
  ["dragenter", "dragover"].forEach((type) => {
    zone.addEventListener(type, (event) => {
      event.preventDefault();
      zone.classList.add("is-dragging");
    });
  });
  ["dragleave", "drop"].forEach((type) => {
    zone.addEventListener(type, (event) => {
      event.preventDefault();
      zone.classList.remove("is-dragging");
    });
  });
  zone.addEventListener("drop", (event) => {
    const file = event.dataTransfer?.files?.[0];
    if (file) onFile(file);
  });
}

document.querySelectorAll("[data-set-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    lang = btn.getAttribute("data-set-lang");
    localStorage.setItem(LANG_KEY, lang);
    applyAdminLang();
    if (!app.hidden) render();
  });
});

document.querySelector("[data-login]")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const password = String(new FormData(event.target).get("password") || "");
  const status = document.querySelector("[data-login-status]");
  const hash = await hashText(password);
  if (hash === ADMIN_PASS_HASH) {
    sessionStorage.setItem(SESSION_KEY, "1");
    status.textContent = "";
    event.target.reset();
    unlock();
  } else {
    status.textContent = adminCopy[lang].badPass;
  }
});

document.querySelector("[data-logout]")?.addEventListener("click", lock);

document.querySelector("[data-tabs]")?.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-tab]");
  if (!btn) return;
  setTab(btn.getAttribute("data-tab"));
});

async function handleHeroFile(file) {
  await setImageFromFile(file, async (dataUrl) => {
    content.heroImage = dataUrl;
    await persist("toastHero");
  });
}

document.querySelector("[data-hero-file]")?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (file) await handleHeroFile(file);
  event.target.value = "";
});

document.querySelector("[data-hero-camera]")?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (file) await handleHeroFile(file);
  event.target.value = "";
});

bindDropZone(document.querySelector('[data-drop="hero"]'), handleHeroFile);

document.querySelector("[data-add-project]")?.addEventListener("click", () => {
  openEditor("project", null);
});

document.querySelector("[data-add-featured]")?.addEventListener("click", () => {
  openEditor("featured", null);
});

document.querySelector("[data-project-list]")?.addEventListener("click", onListClick);
document.querySelector("[data-featured-list]")?.addEventListener("click", onListClick);

async function bindImageInput(input, key) {
  input?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await setImageFromFile(file, (dataUrl) => {
      editState[key] = dataUrl;
      form.querySelector(
        key === "image" ? "[data-edit-image]" : "[data-edit-before]"
      ).src = dataUrl;
    });
    event.target.value = "";
  });
}

bindImageInput(form?.imageFile, "image");
bindImageInput(form?.imageCamera, "image");
bindImageInput(form?.beforeFile, "before");
bindImageInput(form?.beforeCamera, "before");

document.querySelectorAll("[data-cancel]").forEach((btn) => {
  btn.addEventListener("click", () => dialog.close());
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!ready) return;

  const titleHe = form.titleHe.value.trim();
  const titleAr = form.titleAr.value.trim();
  const yearVal = form.year.value.trim();

  if (!titleHe || !titleAr) {
    toast(adminCopy[lang].needTitles);
    form.titleHe.focus();
    return;
  }
  if (!yearVal) {
    toast(adminCopy[lang].needYear);
    form.year.focus();
    return;
  }
  if (!editState.image) {
    toast(adminCopy[lang].needPhoto);
    return;
  }

  const kind = form.kind.value;
  const id = form.id.value || `${kind[0]}${Date.now()}`;
  const base = {
    id,
    year: yearVal,
    category: form.category.value,
    title: { he: titleHe, ar: titleAr },
    image: editState.image,
  };

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

  const ok = await persist("toastSaved");
  if (ok) dialog.close();
});

document.querySelector("[data-map-form]")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = String(new FormData(event.target).get("mapInput") || "").trim();
  const embed = toMapEmbed(input);
  if (!embed) return;
  content.mapEmbed = embed;
  const preview = document.querySelector("[data-map-preview]");
  if (preview) preview.src = embed;
  await persist("toastMap");
});

document.querySelector("[data-export]")?.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(content, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "talib-amara-content.json";
  a.click();
  URL.revokeObjectURL(url);
  toast(adminCopy[lang].toastExported);
});

document.querySelector("[data-import]")?.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    content = {
      ...structuredClone(defaultContent),
      ...JSON.parse(await file.text()),
    };
    await persist("toastImported");
  } catch {
    alert("JSON error");
  }
  event.target.value = "";
});

document.querySelector("[data-reset]")?.addEventListener("click", async () => {
  if (!confirm(adminCopy[lang].confirmReset)) return;
  content = structuredClone(defaultContent);
  await persist("toastReset");
});

async function boot() {
  try {
    content = await loadContent();
  } catch (error) {
    console.error(error);
    content = structuredClone(defaultContent);
  }
  ready = true;
  if (sessionStorage.getItem(SESSION_KEY) === "1") unlock();
  else {
    bar.hidden = true;
    applyAdminLang();
  }
}

boot();
