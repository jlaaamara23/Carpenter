const STORAGE_KEY = "meridian-content-v1";
const LANG_KEY = "meridian-lang";

const defaultContent = {
  heroImage:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85",
  mapEmbed:
    "https://maps.google.com/maps?q=32.748556,35.335722&z=17&output=embed",
  featured: [
    {
      id: "f1",
      category: "kitchens",
      year: "2025",
      title: { he: "מטבח מינימליסטי מודרני", ar: "مطبخ حديث بسيط" },
      image:
        "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "f2",
      category: "wardrobes",
      year: "2025",
      title: { he: "חדר הלבשה עם תאורת לד", ar: "غرفة ملابس بإضاءة LED" },
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "f3",
      category: "cladding",
      year: "2024",
      title: { he: "חיפוי קיר מעץ אלון", ar: "كسوة جدارية من خشب البلوط" },
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "f4",
      category: "furniture",
      year: "2024",
      title: { he: "דלתות נסתרות ואחסון", ar: "أبواب مخفية وتخزين" },
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80",
    },
  ],
  projects: [
    {
      id: "p1",
      category: "kitchens",
      year: "2025",
      title: { he: "מטבח אלון מעושן", ar: "مطبخ بلوط مدخن" },
      copy: {
        he: "חזיתות אלון מעושן רציפות עם ידיות שקועות ומשטח אבן שקט.",
        ar: "واجهات بلوط مدخن متصلة بمقابض غائرة وسطح حجر هادئ.",
      },
      material: { he: "ציפוי אלון אירופאי מעושן", ar: "قشرة بلوط أوروبي مدخن" },
      finish: { he: "שמן-שעווה מט", ar: "زيت شمع مطفي" },
      hardware: { he: "BLUM LEGRABOX", ar: "BLUM LEGRABOX" },
      style: { he: "מודרני", ar: "حديث" },
      image:
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80",
      before:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      after:
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1600&q=80",
      macros: [],
    },
    {
      id: "p2",
      category: "wardrobes",
      year: "2025",
      title: { he: "סוויטת אגוז לחדר הלבשה", ar: "جناح ملابس من الجوز" },
      copy: {
        he: "ארונות אגוז מהרצפה עד התקרה עם נישות מוארות לד.",
        ar: "خزائن جوز من الأرض للسقف مع مساحات مضاءة بـ LED.",
      },
      material: { he: "אגוז אמריקאי מלא וציפוי", ar: "جوز أمريكي صلب وقشرة" },
      finish: { he: "שמן טבעי", ar: "زيت طبيعي" },
      hardware: { he: "Häfele · BLUM", ar: "Häfele · BLUM" },
      style: { he: "מודרני", ar: "حديث" },
      image:
        "https://images.unsplash.com/photo-1556020685-ae97dea0ea4b?auto=format&fit=crop&w=1200&q=80",
      before:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
      after:
        "https://images.unsplash.com/photo-1556020685-ae97dea0ea4b?auto=format&fit=crop&w=1600&q=80",
      macros: [],
    },
    {
      id: "p3",
      category: "cladding",
      year: "2024",
      title: { he: "קיר מדיה מאלון", ar: "جدار وسائط من البلوط" },
      copy: {
        he: "פסים אנכיים של אלון המסתירים יחידת מדיה וגיבוי אקוסטי.",
        ar: "شرائح بلوط عمودية تخفي وحدة الوسائط ودعامة صوتية.",
      },
      material: { he: "אלון אירופאי מנוסר ברבע", ar: "بلوط أوروبي مقطوع ربعياً" },
      finish: { he: "שמן קשה טבעי", ar: "زيت صلب طبيعي" },
      hardware: { he: "Häfele דחיפה לפתיחה", ar: "Häfele دفع للفتح" },
      style: { he: "אדריכלי", ar: "معماري" },
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      before:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
      after:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      macros: [],
    },
    {
      id: "p4",
      category: "office",
      year: "2024",
      title: { he: "נגרות לחדר ישיבות", ar: "أعمال خشبية لقاعة اجتماعات" },
      copy: {
        he: "חיפוי עץ רציף ושולחן ישיבות מונוליטי לחלל משרדי שקט.",
        ar: "كسوة خشبية متصلة وطاولة اجتماعات متجانسة لمكتب هادئ.",
      },
      material: { he: "ציפוי אפר לבן", ar: "قشرة رماد أبيض" },
      finish: { he: "לכה סאטן שקופה", ar: "لاكيه ساتان شفاف" },
      hardware: { he: "Häfele Connect", ar: "Häfele Connect" },
      style: { he: "עכשווי", ar: "معاصر" },
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      before:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
      after:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      macros: [],
    },
    {
      id: "p5",
      category: "furniture",
      year: "2023",
      title: { he: "קונסולה בחיבורי זנב יונה", ar: "كونسول بوصلات ذيل الحمامة" },
      copy: {
        he: "רהיט עצמאי עם חיבורי זנב יונה ומגירה צפה — נגרות סדנה לחלל מגורים.",
        ar: "قطعة مستقلة بوصلات ذيل الحمامة ودرج عائم — نجارة ورشة للمنازل.",
      },
      material: { he: "אגוז מלא", ar: "جوز صلب" },
      finish: { he: "שמן מוברש ידנית", ar: "زيت يدوي" },
      hardware: { he: "ידיות פליז · BLUM", ar: "مقابض نحاس · BLUM" },
      style: { he: "מלאכת יד מודרנית", ar: "حرفية حديثة" },
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      before:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      after:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1600&q=80",
      macros: [],
    },
    {
      id: "p6",
      category: "kitchens",
      year: "2023",
      title: { he: "מטבח עם אי מפל", ar: "مطبخ بجزيرة شلال" },
      copy: {
        he: "אי אלון בצורת מפל מעגן מטבח פתוח עם ישיבה משולבת.",
        ar: "جزيرة بلوط شلالية تثبّت مطبخاً مفتوحاً مع جلوس مدمج.",
      },
      material: { he: "ציפוי אלון טבעי", ar: "قشرة بلوط طبيعي" },
      finish: { he: "שמן UV מט רך", ar: "زيت UV مطفي ناعم" },
      hardware: { he: "BLUM AVENTOS", ar: "BLUM AVENTOS" },
      style: { he: "מודרני", ar: "حديث" },
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      before:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      after:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      macros: [],
    },
  ],
};

const strings = {
  he: {
    dir: "rtl",
    lang: "he",
    brand: "נגריית טאלב אמארה",
    brandShort: "טאלב אמארה",
    metaTitle: "נגריית טאלב אמארה — מטבחים וארונות בהתאמה אישית",
    metaDesc: "תיק עבודות של מטבחי עץ, חדרי הלבשה ונגרות אדריכלית. ללא מחירים.",
    skip: "דלג לתוכן",
    navPortfolio: "תיק עבודות",
    navProcess: "תהליך",
    navMaterials: "חומרים",
    navConsult: "ייעוץ",
    menu: "תפריט",
    heroTitle: "יוצרים אלגנטיות בעץ — נגרייה בהתאמה אישית ועבודות עץ אדריכליות",
    heroLede:
      "גלו את תיק העבודות שלנו: רהיטים בהתאמה אישית, אחסון משולב ופתרונות עץ מודרניים לחלל הפנים.",
    ctaPortfolio: "לתיק העבודות",
    ctaConsult: "בקשת ייעוץ מותאם",
    featuredEyebrow: "עבודות נבחרות",
    featuredTitle: "פרויקטים מובילים",
    featuredLede:
      "פרויקטים שהושלמו לאחרונה — נגרות מדויקת, משטחים שקטים ונוכחות חומרית מתמשכת.",
    galleryEyebrow: "ארכיון",
    galleryTitle: "גלריית פרויקטים",
    galleryLede: "סננו לפי סוג. כל פרויקט מתועד ללא מחירים — רק מלאכה, חומר וצורה.",
    filterAll: "הכל",
    filterKitchens: "מטבחים בהתאמה",
    filterWardrobes: "ארונות וחדרי הלבשה",
    filterCladding: "חיפויי קיר ויחידות TV",
    filterOffice: "משרד ומסחרי",
    filterFurniture: "רהיטים מותאמים",
    close: "סגור",
    before: "לפני",
    after: "אחרי",
    material: "חומר",
    finish: "גימור",
    hardware: "פרזול",
    style: "סגנון",
    processEyebrow: "שיטה",
    processTitle: "התהליך והמלאכה",
    processLede: "מסלול מדוד מהשיחה הראשונה ועד ההתקנה — לשקיפות, לא לראווה.",
    step1Title: "ייעוץ ועיצוב תלת־ממד",
    step1Copy: "ביקור באתר, תכנון מרחבי וקונספטים ריאליסטיים לפני חיתוך הלוח הראשון.",
    step2Title: "בחירת חומרים",
    step2Copy: "ציפויים, עץ מלא ולכות — נבדקים באור שלכם, עם כיוון סיבים מותאם לאדריכלות.",
    step3Title: "נגרות ידנית מדויקת בסדנה",
    step3Copy:
      "עבודה ידנית בלבד — ללא CNC. כל פאנל, קצה וחיבור נמדדים ומותאמים ביד, בדיוק וללא טעויות.",
    step4Title: "התקנה מקצועית באתר",
    step4Copy: "משלוח מוגן, יישור מדויק וכיוון פרזול שקט עד שהדלתות נסגרות כמו שצריך.",
    materialsEyebrow: "פלטה",
    materialsTitle: "חומרים וגימורי עץ",
    materialsLede: "תצוגה של המשטחים שאנחנו עובדים איתם — מאלון פתוח ועד MDF בלכה.",
    swatchOak: "אלון אירופאי",
    swatchOakCopy: "מלא וציפוי · סיבים חמים ועמידים לשימוש יומיומי",
    swatchWalnut: "אגוז אמריקאי",
    swatchWalnutCopy: "גווני שוקולד עשירים · אידיאלי לארונות וקירות פיצ׳ר",
    swatchSmoked: "אלון מעושן",
    swatchSmokedCopy: "חום פחם עמוק · מטבחים מודרניים וחיפויים",
    swatchLacquer: "MDF בלכה",
    swatchLacquerCopy: "מט וסאטן · חזיתות בצבע אחיד ללא תפרים",
    swatchHardware: "פרזול פרימיום",
    swatchHardwareCopy: "BLUM · Häfele · מנגנונים רכים לאורך שנים",
    swatchAsh: "אפר לבן",
    swatchAshCopy: "דמות בהירה וחיה · פנים מוארים ונגרות משרד",
    consultEyebrow: "התחלה",
    consultTitle: "יש לכם פרויקט בראש?",
    consultLede:
      "שתפו כמה פרטים ונתאם ייעוץ מותאם. אתר תיק עבודות בלבד — ללא מחירון.",
    whatsapp: "צ׳אט מהיר בוואטסאפ",
    workshop: "סדנה",
    workshopAddr: "כפר כנא, סלאח אלדין, בית מספר 24",
    hours: "שעות פעילות",
    hoursVal: "א׳–ה׳ 08:00–17:30 · ו׳ בתיאום מראש",
    labelName: "שם מלא",
    labelPhone: "טלפון",
    labelCity: "עיר / מיקום הפרויקט",
    labelType: "סוג הפרויקט",
    labelFiles: "תוכניות אדריכליות או תמונות מהאתר",
    labelMessage: "הודעה",
    optional: "(אופציונלי)",
    fileHint: "אופציונלי — PDF או תמונות עד 20MB.",
    typePlaceholder: "בחרו סוג",
    typeKitchen: "מטבח בהתאמה",
    typeWardrobe: "ארון / חדר הלבשה",
    typeCladding: "חיפוי קיר / יחידת TV",
    typeOffice: "משרד ומסחרי",
    typeFurniture: "רהיט מותאם",
    typeOther: "אחר / משולב",
    submit: "בקשת ייעוץ",
    formError: "נא למלא את השדות החובה.",
    formSending: "שולחים את הבקשה…",
    formOk: "תודה — הבקשה נשלחה למייל. ניצור קשר בהקדם.",
    formFail: "השליחה נכשלה. נסו שוב או התקשרו בוואטסאפ.",
    footerNote: "תיק עבודות בלבד · ללא מחירים · נגרות בהתאמה מאז 2009",
    footerCopy: "נגריית טאלב אמארה",
    categories: {
      kitchens: "מטבחים בהתאמה",
      wardrobes: "ארונות וחדרי הלבשה",
      cladding: "חיפויי קיר ויחידות TV",
      office: "משרד ומסחרי",
      furniture: "רהיטים מותאמים",
    },
  },
  ar: {
    dir: "rtl",
    lang: "ar",
    brand: "منجرة طالب اماره",
    brandShort: "طالب اماره",
    metaTitle: "منجرة طالب اماره — مطابخ وخزائن حسب الطلب",
    metaDesc: "معرض أعمال لمطابخ خشبية وغرف ملابس ونجارة معمارية. بدون أسعار.",
    skip: "تخطى إلى المحتوى",
    navPortfolio: "المعرض",
    navProcess: "العملية",
    navMaterials: "المواد",
    navConsult: "استشارة",
    menu: "القائمة",
    heroTitle: "صياغة الأناقة في الخشب — نجارة مخصصة وأعمال خشبية معمارية",
    heroLede:
      "استكشف معرضنا من الأثاث المخصص والتخزين المدمج وحلول الخشب الحديثة للداخل.",
    ctaPortfolio: "عرض المعرض",
    ctaConsult: "طلب استشارة مخصصة",
    featuredEyebrow: "أعمال مختارة",
    featuredTitle: "مشاريع مميزة",
    featuredLede: "مشاريع مكتملة مؤخراً — نجارة دقيقة وأسطح هادئة وحضور مادي دائم.",
    galleryEyebrow: "الأرشيف",
    galleryTitle: "معرض المشاريع",
    galleryLede: "صفّ حسب النوع. كل مشروع موثّق بدون أسعار — الحرفة والمادة والشكل فقط.",
    filterAll: "الكل",
    filterKitchens: "مطابخ مخصصة",
    filterWardrobes: "خزائن وغرف ملابس",
    filterCladding: "كسوة جدران ووحدات TV",
    filterOffice: "مكاتب وتجاري",
    filterFurniture: "أثاث مخصص",
    close: "إغلاق",
    before: "قبل",
    after: "بعد",
    material: "المادة",
    finish: "التشطيب",
    hardware: "الملحقات",
    style: "النمط",
    processEyebrow: "المنهج",
    processTitle: "عمليتنا وحرفيتنا",
    processLede: "مسار مدروس من أول حوار حتى التركيب — للوضوح لا للعرض.",
    step1Title: "استشارة وتصميم ثلاثي الأبعاد",
    step1Copy: "معاينة الموقع وتخطيط الفراغ ومفاهيم واقعية قبل قطع أول لوح.",
    step2Title: "اختيار المواد",
    step2Copy: "قشرة وأخشاب صلبة ولاكيه تُدرس تحت إضائتكم مع اتجاه ألياف يناسب العمارة.",
    step3Title: "نجارة يدوية دقيقة في الورشة",
    step3Copy:
      "عمل يدوي فقط — بدون CNC. كل لوح وحافة ووصلة تُقاس وتُضبط باليد، بدقة وبلا أخطاء.",
    step4Title: "تركيب احترافي في الموقع",
    step4Copy: "توصيل محمي وتسوية دقيقة وضبط ملحقات هادئ حتى تُغلق الأبواب كما يجب.",
    materialsEyebrow: "لوحة الألوان",
    materialsTitle: "المواد وتشطيبات الخشب",
    materialsLede: "عرض تعليمي للأسطح التي نعمل بها — من البلوط المفتوح إلى MDF باللاكيه.",
    swatchOak: "بلوط أوروبي",
    swatchOakCopy: "صلب وقشرة · حبيبات دافئة ومتينة للاستخدام اليومي",
    swatchWalnut: "جوز أمريكي",
    swatchWalnutCopy: "درجات شوكولاتة غنية · مثالي للخزائن والجدران المميزة",
    swatchSmoked: "بلوط مدخن",
    swatchSmokedCopy: "دفء فحمي عميق · مطابخ حديثة وكسوات",
    swatchLacquer: "MDF باللاكيه",
    swatchLacquerCopy: "مطفي وساتان · واجهات بلون موحّد بلا فواصل",
    swatchHardware: "ملحقات فاخرة",
    swatchHardwareCopy: "BLUM · Häfele · آليات إغلاق ناعم تدوم",
    swatchAsh: "رماد أبيض",
    swatchAshCopy: "شكل شاحب وحيوي · داخليات مضيئة ونجارة مكاتب",
    consultEyebrow: "ابدأ",
    consultTitle: "لديكم مشروع في البال؟",
    consultLede: "شاركوا بعض التفاصيل وسنرتب استشارة مخصصة. الموقع معرض فقط — بلا أسعار.",
    whatsapp: "دردشة واتساب سريعة",
    workshop: "الورشة",
    workshopAddr: "كفر كنا، صلاح الدين، بيت رقم ٢٤",
    hours: "ساعات العمل",
    hoursVal: "الإثنين–الجمعة 08:00–17:30 · السبت بموعد",
    labelName: "الاسم الكامل",
    labelPhone: "رقم الهاتف",
    labelCity: "المدينة / موقع المشروع",
    labelType: "نوع المشروع",
    labelFiles: "مخططات معمارية أو صور للموقع",
    labelMessage: "رسالة",
    optional: "(اختياري)",
    fileHint: "اختياري — PDF أو صور حتى 20MB.",
    typePlaceholder: "اختر نوعاً",
    typeKitchen: "مطبخ مخصص",
    typeWardrobe: "خزانة / غرفة ملابس",
    typeCladding: "كسوة جدار / وحدة TV",
    typeOffice: "مكتب وتجاري",
    typeFurniture: "أثاث مخصص",
    typeOther: "آخر / مختلط",
    submit: "طلب استشارة",
    formError: "يرجى إكمال الحقول المطلوبة.",
    formOk: "شكراً — تم تسجيل طلب الاستشارة. سنتواصل قريباً.",
    footerNote: "معرض فقط · بلا أسعار · نجارة مخصصة منذ 2009",
    footerCopy: "منجرة طالب اماره",
    categories: {
      kitchens: "مطابخ مخصصة",
      wardrobes: "خزائن وغرف ملابس",
      cladding: "كسوة جدران ووحدات TV",
      office: "مكاتب وتجاري",
      furniture: "أثاث مخصص",
    },
  },
};

function loadContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultContent);
    return {
      ...structuredClone(defaultContent),
      ...JSON.parse(raw),
    };
  } catch {
    return structuredClone(defaultContent);
  }
}

function saveContent(content) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

function t(lang, key) {
  return strings[lang]?.[key] ?? strings.he[key] ?? key;
}

function localized(value, lang) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.he || value.ar || "";
}

async function compressImage(file, maxWidth = 1600, quality = 0.82) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxWidth / bitmap.width);
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  return canvas.toDataURL("image/jpeg", quality);
}

function toMapEmbed(input) {
  const raw = String(input || "").trim();
  if (!raw) return "";

  const coords = raw
    .replace(/[()\[\]]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (/^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/.test(coords)) {
    const [lat, lng] = coords.split(",").map((part) => part.trim());
    return `https://maps.google.com/maps?q=${lat},${lng}&z=17&output=embed`;
  }

  if (raw.includes("output=embed") || raw.includes("/maps/embed")) {
    return raw;
  }

  try {
    const url = new URL(raw);
    const at = raw.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
    if (at) {
      return `https://maps.google.com/maps?q=${at[1]},${at[2]}&z=17&output=embed`;
    }
    const q = url.searchParams.get("q");
    if (q) {
      return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=17&output=embed`;
    }
    const query = url.searchParams.get("query");
    if (query) {
      return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=17&output=embed`;
    }
  } catch {
    /* ignore */
  }

  return `https://maps.google.com/maps?q=${encodeURIComponent(raw)}&z=17&output=embed`;
}

export {
  STORAGE_KEY,
  LANG_KEY,
  defaultContent,
  strings,
  loadContent,
  saveContent,
  t,
  localized,
  compressImage,
  toMapEmbed,
};
