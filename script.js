document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav
  const btn = document.querySelector(".nav-toggle");
  const list = document.querySelector(".nav-list");

  if (btn && list) {
    btn.addEventListener("click", () => {
      const open = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close menu on click
    list.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Open menu");
      });
    });
  }

  // Footer dates
  const year = document.getElementById("year");
  const updated = document.getElementById("updated");
  const now = new Date();
  if (year) year.textContent = String(now.getFullYear());
  if (updated) {
    updated.textContent = now.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  }

  // i18n dictionary
  const dict = {
    en: {
      brand_tag: "Software Engineer • Web Developer • Cybersecurity (In Progress)",

      nav_about: "About",
      nav_exp: "Experience",
      nav_skills: "Skills",
      nav_projects: "Work",
      nav_certs: "Certifications",
      nav_contact: "Contact",

      hero_location: "Jeddah, Saudi Arabia",
      hero_title:
        'Software Engineer building modern web solutions with a growing focus on <span class="accent">cybersecurity</span>.',
      hero_lead:
        "Software Engineering graduate (University of Jeddah). I build clean, responsive websites and practical solutions. Currently pursuing a Higher Diploma in Cybersecurity.",

      btn_work: "View Work",
      btn_cv: "Download Resume (PDF)",

      pill_1: "Web: HTML • CSS • JavaScript",
      pill_2: "GitHub Pages • Responsive UI",
      pill_3: "Cybersecurity: Fundamentals • Best Practices",

      quick_title: "Quick Links",
      quick_sub: "Profiles & downloads",
      quick_ai: "SDAIA AI Certificate (PDF)",
      quick_cv: "Resume (PDF)",
      open_to: "Open to opportunities",
      available: "Available",

      stat_1: "BSc Software Engineering",
      stat_2: "Frontend development",
      stat_3: "Cybersecurity diploma",

      about_title: "About",
      about_sub: "Practical, detail-oriented, and focused on clean code.",
      about_summary_title: "Summary",
      about_summary_p1:
        "I’m a Software Engineering graduate with hands-on experience building responsive web pages and supporting real business needs.",
      about_summary_p2:
        "I’m currently expanding my skills through a Higher Diploma in Cybersecurity, with a strong interest in secure and reliable systems.",
      about_skills_title: "Core Skills",
      skill_1: "Web development: HTML, CSS, JavaScript",
      skill_2: "Responsive UI, clean layouts, accessibility basics",
      skill_3: "Git & GitHub, deployment with GitHub Pages",
      skill_4: "Technical documentation and structured work",
      skill_5: "Cybersecurity fundamentals and best practices",

      // Skills section
      skills_title: "Skills",
      skills_sub: "What I’m strong at — in a quick, visual view.",
      s1_title: "Python",
      s1_desc: "Scripting, automation basics, and clean problem-solving.",
      s2_title: "Java",
      s2_desc: "OOP fundamentals and structured application logic.",
      s3_title: "HTML & CSS",
      s3_desc: "Modern layouts, responsive design, and clean UI styling.",
      s4_title: "JavaScript",
      s4_desc: "DOM, i18n toggles, and practical interactivity.",
      s5_title: "Cybersecurity Foundations",
      s5_desc: "Security mindset, fundamentals, and continuous learning.",
      s6_title: "Git & Deployment",
      s6_desc: "GitHub workflows and publishing with GitHub Pages.",

      exp_title: "Experience",
      exp_sub: "Roles focused on systems, delivery, and business impact.",
      job1_title: "IT Technician",
      job1_meta: "Alkan Industrial Co. • Mar 2025 – Present",
      job1_chip: "Systems • Delivery",
      job1_b1: "Supported business systems and improved operational workflows.",
      job1_b2: "Worked on structured product data and web presence support.",
      job1_b3: "Contributed to secure configurations and reliable operations.",

      job2_title: "IT Assistant (Internship)",
      job2_meta: "Basaffar Eye Clinic • May 2024 – Jul 2024",
      job2_chip: "Support",
      job2_b1: "Supported daily operations, troubleshooting, and documentation.",

      job3_title: "Tech Assistant",
      job3_meta: "First Decoration Co. • Apr 2021 – May 2024",
      job3_chip: "Operations",
      job3_b1: "Supported coordination, documentation, and operational tasks.",
      job3_b2: "Contributed to brand assets and digital content support.",

      work_title: "Work",
      work_sub: "Selected projects and real outcomes.",
      p1_title: "Portfolio Website (GitHub Pages)",
      chip_project: "Project",
      chip_work: "Work",
      label_stack: "Stack",
      p1_stack: "HTML • CSS • JavaScript • GitHub Pages",
      label_focus: "Focus",
      p1_b1: "Clean, responsive layout optimized for readability.",
      p1_b2: "Clear sections for skills, experience, and certifications.",
      p1_b3: "Fast loading + simple deployment.",

      // Sheet project (IMPORTANT keys to match HTML)
      sheet_title: "IT Operations & Systems Sheet (Alkan Industrial)",
      sheet_desc:
        "Ongoing work log & structured delivery across IT, security, and infrastructure.",
      btn_view_sheet: "View Sheet ↗",
      btn_request: "Request details",
      label_highlights: "Highlights",
      sheet_b1: "Odoo product database design (Marble / Granite / Stone).",
      sheet_b2: "Email domain security improvements + unified signatures (company-wide).",
      sheet_b3: "Employee onboarding: equipment, system access, and account setup.",
      sheet_b4: "Software accounts & license management for employees.",
      sheet_b5: "Factory internet infrastructure setup and upgrade coordination.",
      sheet_b6: "Centralized storage structure for government documents and company files.",
      tag_itops: "IT Ops",
      tag_security: "Security",
      tag_infra: "Infrastructure",

      p2_title: "Corporate Website Support",
      chip_live: "Live",
      p2_desc: "Web presence support and structured content delivery.",
      btn_visit: "Visit Website ↗",
      btn_details: "Request Details",
      p2_tag1: "Web",
      p2_tag2: "Content",
      p2_tag3: "Delivery",

      p3_title: "Graduation Project (BLOOM)",
      p3_b1: "Plant identification model using machine learning.",
      p3_b2: "Achieved 85% accuracy.",
      p3_b3: "Earned an A+ grade.",

      p4_title: "Email Security Setup",
      chip_security: "Security",
      label_scope: "Scope",
      p4_b1: "SPF / DKIM / DMARC configuration",
      p4_b2: "Standardized signatures and account governance",
      p4_b3: "Improved deliverability and reduced spoofing risk",

      certs_title: "Certifications",
      certs_sub: "Verified credentials (Credly) and selected training.",

      contact_title: "Contact",
      contact_sub: "Let’s connect.",
      contact_email: "Email",
      contact_phone: "Phone",
      btn_whatsapp: "WhatsApp ↗",
    },

    ar: {
      brand_tag: "مهندسة برمجيات • مطورة ويب • الأمن السيبراني (قيد الدراسة)",

      nav_about: "نبذة",
      nav_exp: "الخبرات",
      nav_skills: "المهارات",
      nav_projects: "الأعمال",
      nav_certs: "الشهادات",
      nav_contact: "تواصل",

      hero_location: "جدة، السعودية",
      hero_title:
        'مهندسة برمجيات أبني حلول ويب حديثة مع اهتمام متزايد بـ <span class="accent">الأمن السيبراني</span>.',
      hero_lead:
        "خريجة هندسة برمجيات (جامعة جدة). أطور مواقع نظيفة ومتجاوبة وحلول عملية. أدرس حاليًا دبلوم عالي في الأمن السيبراني.",

      btn_work: "عرض الأعمال",
      btn_cv: "تحميل السيرة (PDF)",

      pill_1: "الويب: HTML • CSS • JavaScript",
      pill_2: "GitHub Pages • واجهات متجاوبة",
      pill_3: "الأمن السيبراني: أساسيات • أفضل الممارسات",

      quick_title: "روابط سريعة",
      quick_sub: "الملفات والتواصل",
      quick_ai: "شهادة سدايا للذكاء الاصطناعي (PDF)",
      quick_cv: "السيرة الذاتية (PDF)",
      open_to: "متاحة للفرص",
      available: "متاحة",

      stat_1: "بكالوريوس هندسة برمجيات",
      stat_2: "تطوير واجهات ويب",
      stat_3: "دبلوم أمن سيبراني",

      about_title: "نبذة",
      about_sub: "عملية، دقيقة، وتركّز على كود نظيف.",
      about_summary_title: "ملخص",
      about_summary_p1:
        "خريجة هندسة برمجيات ولدي خبرة عملية في بناء صفحات ويب متجاوبة ودعم احتياجات حقيقية للأعمال.",
      about_summary_p2:
        "حاليًا أطور مهاراتي عبر دبلوم عالي في الأمن السيبراني مع اهتمام بالأنظمة الآمنة والموثوقة.",
      about_skills_title: "المهارات الأساسية",
      skill_1: "تطوير الويب: HTML, CSS, JavaScript",
      skill_2: "واجهات متجاوبة، تنظيم بصري، أساسيات الوصول",
      skill_3: "Git و GitHub والنشر عبر GitHub Pages",
      skill_4: "توثيق تقني وتنظيم العمل",
      skill_5: "أساسيات الأمن السيبراني وأفضل الممارسات",

      // Skills section
      skills_title: "المهارات",
      skills_sub: "أبرز نقاط قوتي بشكل بصري سريع.",
      s1_title: "Python",
      s1_desc: "سكربتات وأتمتة أساسيات وحلول مرتبة للمشاكل.",
      s2_title: "Java",
      s2_desc: "أساسيات البرمجة الكائنية ومنطق تطبيقات منظم.",
      s3_title: "HTML و CSS",
      s3_desc: "تصاميم حديثة، استجابة للشاشات، وتنسيق واجهات نظيف.",
      s4_title: "JavaScript",
      s4_desc: "DOM، تفاعلات عملية، ودعم الترجمة داخل الموقع.",
      s5_title: "أساسيات الأمن السيبراني",
      s5_desc: "تفكير أمني، أساسيات قوية، وتعلم مستمر.",
      s6_title: "Git والنشر",
      s6_desc: "إدارة المشاريع على GitHub والنشر عبر GitHub Pages.",

      exp_title: "الخبرات",
      exp_sub: "أدوار تركّز على الأنظمة والتنفيذ والأثر العملي.",
      job1_title: "فنية تقنية معلومات",
      job1_meta: "شركة الكان الصناعية • مارس 2025 – حتى الآن",
      job1_chip: "أنظمة • تنفيذ",
      job1_b1: "دعم الأنظمة وتحسين سير العمل التشغيلي.",
      job1_b2: "العمل على بيانات منظمة ودعم الحضور الرقمي.",
      job1_b3: "المساهمة في إعدادات أكثر أمانًا وعمليات موثوقة.",

      job2_title: "مساعدة تقنية معلومات (تدريب)",
      job2_meta: "عيادات بصفر • مايو 2024 – يوليو 2024",
      job2_chip: "دعم",
      job2_b1: "دعم التشغيل اليومي وحل المشاكل والتوثيق.",

      job3_title: "مساعدة تقنية",
      job3_meta: "شركة الديكور الأول • أبريل 2021 – مايو 2024",
      job3_chip: "تشغيل",
      job3_b1: "دعم التنسيق والتوثيق والمهام التشغيلية.",
      job3_b2: "المساهمة في مواد الهوية والمحتوى الرقمي.",

      work_title: "الأعمال",
      work_sub: "مختارات من المشاريع ونتائج حقيقية.",
      p1_title: "موقع بورتفوليو (GitHub Pages)",
      chip_project: "مشروع",
      chip_work: "عمل",
      label_stack: "التقنيات",
      p1_stack: "HTML • CSS • JavaScript • GitHub Pages",
      label_focus: "التركيز",
      p1_b1: "تصميم نظيف ومتجاوب وسهل القراءة.",
      p1_b2: "أقسام واضحة للمهارات والخبرة والشهادات.",
      p1_b3: "تحميل سريع ونشر بسيط.",

      // Sheet project (IMPORTANT keys to match HTML)
      sheet_title: "ملف أعمال وتقارير تقنية المعلومات (شركة الكان الصناعية)",
      sheet_desc:
        "سجل عمل مستمر وتسليم منظم في تقنية المعلومات والأمن والبنية التحتية.",
      btn_view_sheet: "عرض الشيت ↗",
      btn_request: "طلب التفاصيل",
      label_highlights: "أبرز الأعمال",
      sheet_b1: "تصميم قاعدة بيانات منتجات Odoo (رخام / جرانيت / حجر).",
      sheet_b2: "تحسين أمن الدومين للبريد + توحيد التواقيع (على مستوى الشركة).",
      sheet_b3: "تجهيز الموظفين الجدد: أجهزة وصلاحيات وإعدادات أنظمة.",
      sheet_b4: "إعداد حسابات البرامج وإدارة التراخيص للموظفين.",
      sheet_b5: "تهيئة/ترقية إنترنت المصنع وتنسيق الأجهزة والمشتريات.",
      sheet_b6: "تنظيم تخزين مركزي لملفات ووثائق الشركة الحكومية.",
      tag_itops: "تشغيل IT",
      tag_security: "أمن",
      tag_infra: "بنية تحتية",

      p2_title: "دعم موقع شركة",
      chip_live: "مباشر",
      p2_desc: "دعم الظهور الرقمي وتنظيم المحتوى وتسليم العمل.",
      btn_visit: "زيارة الموقع ↗",
      btn_details: "طلب تفاصيل",
      p2_tag1: "ويب",
      p2_tag2: "محتوى",
      p2_tag3: "تنفيذ",

      p3_title: "مشروع التخرج (BLOOM)",
      label_highlights: "أبرز النقاط",
      p3_b1: "نموذج تعرّف على النباتات باستخدام تعلم الآلة.",
      p3_b2: "دقة 85%.",
      p3_b3: "تقدير A+.",

      p4_title: "إعداد أمن البريد",
      chip_security: "أمن",
      label_scope: "النطاق",
      p4_b1: "إعداد SPF / DKIM / DMARC",
      p4_b2: "توحيد التواقيع وحوكمة الحسابات",
      p4_b3: "تحسين التسليم وتقليل انتحال الهوية",

      certs_title: "الشهادات",
      certs_sub: "اعتمادات موثّقة (Credly) ودورات مختارة.",

      contact_title: "تواصل",
      contact_sub: "يسعدني تواصلك.",
      contact_email: "البريد",
      contact_phone: "الجوال",
      btn_whatsapp: "واتساب ↗",
    },
  };

  // Keys that must keep HTML
  const allowHTMLKeys = new Set(["hero_title"]);

  function applyLang(lang) {
    const isAR = lang === "ar";
    document.documentElement.lang = isAR ? "ar" : "en";
    document.body.dir = isAR ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[lang]?.[key];
      if (!val) return;

      if (allowHTMLKeys.has(key)) el.innerHTML = val;
      else el.textContent = val;
    });

    const toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.textContent = isAR ? "EN" : "AR";
      toggle.setAttribute("aria-label", isAR ? "Translate to English" : "Translate to Arabic");
    }

    localStorage.setItem("site_lang", lang);
  }

  // Apply saved language
  let currentLang = localStorage.getItem("site_lang") || "en";
  applyLang(currentLang);

  // Bind click
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ar" : "en";
      applyLang(currentLang);
    });
  } else {
    console.error("langToggle not found ❌ (check id='langToggle')");
  }
});
