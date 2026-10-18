/* =========================================================
   高桌文法研究中心 · trilingual site engine
   Requires: assets/js/content/<page>.js (window.GTL_CONTENT)
   ========================================================= */

(function () {
  "use strict";

  const LANGS = ["zh", "en", "fr"];
  const STORAGE_KEY = "gtl-lang";

  const CHROME = {
    zh: {
      brandName: "高桌文法研究中心",
      brandLatin: "GRAMMATICAL RESEARCH CENTER",
      footerBrand: "高桌文法研究中心",
      navLabel: "主导航",
      nav: {
        home: "首页",
        grammar: "文法",
        mind: "情绪",
        social: "社交",
        love: "爱恋",
        creation: "创作"
      },
      menu: "菜单",
      close: "关闭",
      skip: "跳到正文",
      enter: "进入",
      read: "阅读",
      tocLabel: "本页目录",
      backHome: "← 返回首页",
      epilogueLabel: "阅读之后",
      stamp: "高桌",
      nextLabel: "下一个模块",
      footerExplore: "五门功课",
      footerStatement: "本站声明",
      disclaimer: "仅作建议，不得当作依赖。",
      disclaimerNote: "本站内容为一般性人文讨论，不构成医疗、心理、法律或财务建议。",
      footerTagline: "一所没有围墙的小型文学院。以文字、心理、人际、亲密与创作，练习更清醒也更温柔地生活。",
      footerRights: "© 2026 高桌文法研究中心",
      footerMade: "以静默与好奇编辑 · 中 / EN / FR",
      langSwitch: "切换语言",
      tableHint: "← 左右滑动查看完整表格 →",
      install: "安装到桌面",
      installEyebrow: "高桌 · 应用",
      installTitle: "把高桌放到桌面",
      installBody: "安装后可以像应用一样从桌面打开，离线时也能阅读已缓存的页面。",
      installIos: "在 iPhone / iPad 上：用 Safari 打开本站，点击分享按钮，再选择“添加到主屏幕”。",
      installOther: "如果没有看到安装提示，请在浏览器菜单中查找“安装应用”或“添加到主屏幕”。",
      installClose: "知道了"
    },
    en: {
      brandName: "High Table",
      brandLatin: "GRAMMATICAL RESEARCH CENTER",
      footerBrand: "High Table Grammatical Research Center",
      navLabel: "Main navigation",
      nav: {
        home: "Home",
        grammar: "Grammar",
        mind: "Emotion",
        social: "Social",
        love: "Love",
        creation: "Creation"
      },
      menu: "Menu",
      close: "Close",
      skip: "Skip to content",
      enter: "Enter",
      read: "Read",
      tocLabel: "On this page",
      backHome: "← Back to home",
      epilogueLabel: "After reading",
      stamp: "高桌",
      nextLabel: "Next module",
      footerExplore: "Five studies",
      footerStatement: "Site statement",
      disclaimer: "Suggestions only — not to be depended upon.",
      disclaimerNote: "This site offers general humanistic reflection, not medical, psychological, legal or financial advice.",
      footerTagline: "A small college without walls. Language, mind, human company, intimacy and creation, practised toward a clearer and gentler life.",
      footerRights: "© 2026 High Table Grammatical Research Center",
      footerMade: "Edited in silence and curiosity · 中 / EN / FR",
      langSwitch: "Choose language",
      tableHint: "← Scroll sideways for the full table →",
      install: "Install app",
      installEyebrow: "HIGH TABLE · APP",
      installTitle: "Keep the High Table on your desktop",
      installBody: "Open the site like an app, and keep cached pages available offline.",
      installIos: "On iPhone or iPad: open this site in Safari, tap Share, then choose “Add to Home Screen”.",
      installOther: "If no install prompt appears, look for “Install app” or “Add to Home Screen” in your browser menu.",
      installClose: "Got it"
    },
    fr: {
      brandName: "Haute Table",
      brandLatin: "CENTRE DE RECHERCHE GRAMMATICALE",
      footerBrand: "Centre de recherche grammaticale de la Haute Table",
      navLabel: "Navigation principale",
      nav: {
        home: "Accueil",
        grammar: "Grammaire",
        mind: "Émotion",
        social: "Sociabilité",
        love: "Amour",
        creation: "Création"
      },
      menu: "Menu",
      close: "Fermer",
      skip: "Aller au contenu",
      enter: "Entrer",
      read: "Lire",
      tocLabel: "Sur cette page",
      backHome: "← Retour à l'accueil",
      epilogueLabel: "Après la lecture",
      stamp: "高桌",
      nextLabel: "Module suivant",
      footerExplore: "Cinq études",
      footerStatement: "Déclaration du site",
      disclaimer: "Simple suggestion — à ne pas prendre pour une dépendance.",
      disclaimerNote: "Ce site propose une réflexion humaniste générale ; il ne constitue pas un avis médical, psychologique, juridique ou financier.",
      footerTagline: "Un petit collège sans murs. La langue, l'esprit, la vie sociale, l'intimité et la création, exercés vers une vie plus lucide et plus douce.",
      footerRights: "© 2026 Centre de recherche grammaticale de la Haute Table",
      footerMade: "Édité dans le silence et la curiosité · 中 / EN / FR",
      langSwitch: "Choisir la langue",
      tableHint: "← Faites défiler pour voir tout le tableau →",
      install: "Installer",
      installEyebrow: "HAUTE TABLE · APPLICATION",
      installTitle: "Gardez la Haute Table sur votre écran",
      installBody: "Ouvrez le site comme une application et gardez les pages en cache disponibles hors ligne.",
      installIos: "Sur iPhone ou iPad : ouvrez le site dans Safari, touchez Partager, puis « Sur l'écran d'accueil ».",
      installOther: "Si aucune invite n'apparaît, cherchez « Installer l'application » ou « Ajouter à l'écran d'accueil » dans le menu du navigateur.",
      installClose: "Compris"
    }
  };

  const PAGE_LINKS = [
    { key: "home", href: "index.html" },
    { key: "grammar", href: "grammar.html" },
    { key: "mind", href: "mind.html" },
    { key: "social", href: "social.html" },
    { key: "love", href: "love.html" },
    { key: "creation", href: "creation.html" }
  ];

  const MODULES = [
    { key: "grammar", href: "grammar.html", num: "01", accent: "#33544a" },
    { key: "mind", href: "mind.html", num: "02", accent: "#a1543e" },
    { key: "social", href: "social.html", num: "03", accent: "#3d5b6b" },
    { key: "love", href: "love.html", num: "04", accent: "#7c3448" },
    { key: "creation", href: "creation.html", num: "05", accent: "#7b5b2d" }
  ];

  const main = document.getElementById("main");
  const page = document.body.getAttribute("data-page") || "home";
  const content = window.GTL_CONTENT && window.GTL_CONTENT[page];

  let lang = resolveInitialLang();
  let scrollTicking = false;

  function isLang(value) {
    return LANGS.indexOf(value) !== -1;
  }

  function resolveInitialLang() {
    try {
      const fromUrl = new URLSearchParams(window.location.search).get("lang");
      if (isLang(fromUrl)) return fromUrl;
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isLang(saved)) return saved;
    } catch (error) {
      /* localStorage can be unavailable in private modes */
    }
    return "en";
  }

  function pick(object, fallbackLang) {
    if (!object) return null;
    return object[lang] || object[fallbackLang || "zh"] || object.en || null;
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function chrome() {
    return CHROME[lang] || CHROME.zh;
  }

  function t(key) {
    return key.split(".").reduce(function (value, part) {
      return value && value[part] != null ? value[part] : "";
    }, chrome());
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(function (node) {
      node.textContent = value;
    });
  }

  function updateLangInUrl(nextLang) {
    if (!window.history || !window.history.replaceState) return;
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", nextLang);
      window.history.replaceState({ lang: nextLang }, "", url.toString());
    } catch (error) {
      /* ignore */
    }
  }

  function renderChrome() {
    const c = chrome();
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
    document.title = content && content.meta && content.meta[lang] ? content.meta[lang].title : c.brandName;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    if (content && content.meta && content.meta[lang] && content.meta[lang].description) {
      description.setAttribute("content", content.meta[lang].description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", document.title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && content && content.meta && content.meta[lang]) {
      ogDescription.setAttribute("content", content.meta[lang].description);
    }
    const appTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
    if (appTitle) appTitle.setAttribute("content", c.brandName);

    setText('[data-chrome="brandName"]', c.brandName);
    setText('[data-chrome="brandLatin"]', c.brandLatin);
    setText('[data-chrome="footerBrand"]', c.footerBrand);
    setText('[data-chrome="menu"]', c.menu);
    setText('[data-chrome="skip"]', c.skip);
    setText('[data-chrome="footerExplore"]', c.footerExplore);
    setText('[data-chrome="footerStatement"]', c.footerStatement);
    setText('[data-chrome="disclaimer"]', c.disclaimer);
    setText('[data-chrome="disclaimerNote"]', c.disclaimerNote);
    setText('[data-chrome="footerTagline"]', c.footerTagline);
    setText('[data-chrome="footerRights"]', c.footerRights);
    setText('[data-chrome="footerMade"]', c.footerMade);
    setText("[data-pwa-label]", c.install);
    setText("[data-pwa-eyebrow]", c.installEyebrow);
    setText("[data-pwa-title]", c.installTitle);
    setText("[data-pwa-body]", c.installBody);
    setText("[data-pwa-ios]", c.installIos);
    setText("[data-pwa-other]", c.installOther);
    setText("[data-pwa-close]", c.installClose);

    const pwaButton = document.querySelector(".pwa-install");
    if (pwaButton) pwaButton.setAttribute("aria-label", c.install);

    const nav = document.querySelector(".nav");
    if (nav) {
      nav.setAttribute("aria-label", c.navLabel);
      nav.innerHTML = PAGE_LINKS.map(function (item) {
        const current = item.key === page ? ' aria-current="page"' : "";
        return '<a href="' + item.href + '"' + current + ">" + escapeHtml(c.nav[item.key]) + "</a>";
      }).join("");
    }

    const footerNav = document.querySelector(".footer__nav");
    if (footerNav) {
      footerNav.setAttribute("aria-label", c.navLabel);
      footerNav.innerHTML = PAGE_LINKS.map(function (item) {
        return '<a href="' + item.href + '">' + escapeHtml(c.nav[item.key]) + "</a>";
      }).join("");
    }

    const brand = document.querySelector(".brand");
    if (brand) brand.setAttribute("aria-label", c.footerBrand);

    const langGroup = document.querySelector(".lang");
    if (langGroup) {
      langGroup.setAttribute("aria-label", c.langSwitch);
      langGroup.querySelectorAll("button[data-lang]").forEach(function (button) {
        button.setAttribute("aria-pressed", button.getAttribute("data-lang") === lang ? "true" : "false");
      });
    }

    const skip = document.querySelector(".skip-link");
    if (skip) skip.textContent = c.skip;
  }

  function renderIndex(c) {
    const modules = pick(c.modules, "zh");
    if (!modules) return "";
    return (
      '<div class="table-index reveal">' +
      '<p class="table-index__label"><span>' + escapeHtml(modules.indexLabel) + "</span><span>" +
      escapeHtml(modules.indexNoteShort || "") + "</span></p>" +
      "<ol>" +
      modules.items.map(function (item, index) {
        const meta = MODULES[index] || { num: String(index + 1).padStart(2, "0"), href: "#", accent: "#33544a" };
        return (
          '<li><a href="' + meta.href + '">' +
          '<span class="idx">' + meta.num + "</span>" +
          "<span><span class=\"idx-title\">" + escapeHtml(item.title) + "</span>" +
          '<span class="idx-sub">' + escapeHtml(item.latin) + "</span></span>" +
          '<span class="idx-arrow" aria-hidden="true">→</span>' +
          "</a></li>"
        );
      }).join("") +
      "</ol>" +
      '<p class="table-index__note">' + escapeHtml(modules.indexNote) + "</p>" +
      "</div>"
    );
  }

  function renderHome() {
    const cHome = content.home;
    const hero = pick(cHome.hero, "zh");
    const manifesto = pick(cHome.manifesto, "zh");
    const modules = pick(cHome.modules, "zh");
    const practices = pick(cHome.practices, "zh");
    const closing = pick(cHome.closing, "zh");
    const ch = chrome();
    const title = hero.titleTop + " " + hero.titleBottom;

    const heroHtml =
      '<section class="home-visual">' +
      '<h1 class="sr-only">' + escapeHtml(title) + "</h1>" +
      '<img class="home-visual__image" src="assets/img/brand/source-ambience.jpg" ' +
      'alt="" width="1672" height="941" fetchpriority="high" decoding="async">' +
      "</section>" +
      '<section class="hero hero--intro">' +
      '<div class="hero__copy reveal">' +
      '<p class="eyebrow">' + escapeHtml(hero.eyebrow) + "</p>" +
      '<p class="hero__latin">' + escapeHtml(hero.latin) + "</p>" +
      '<p class="hero__lede">' + escapeHtml(hero.lede) + "</p>" +
      '<div class="hero__actions">' +
      '<a class="button" href="' + escapeHtml(hero.primaryHref) + '">' + escapeHtml(hero.primaryLabel) +
      ' <span class="arrow" aria-hidden="true">→</span></a>' +
      '<a class="button button--ghost" href="' + escapeHtml(hero.secondaryHref) + '">' +
      escapeHtml(hero.secondaryLabel) + "</a>" +
      "</div></div>" +
      renderIndex(cHome) +
      "</section>";

    const manifestoHtml =
      '<section class="manifesto" id="approach">' +
      '<div class="wrap manifesto__inner">' +
      '<div class="reveal"><p class="eyebrow">' + escapeHtml(manifesto.eyebrow) + "</p>" +
      '<blockquote class="manifesto__quote">' + escapeHtml(manifesto.quote) + "</blockquote></div>" +
      '<div class="reveal"><h2 style="margin:0 0 16px;font-size:24px;font-weight:500;letter-spacing:.03em">' +
      escapeHtml(manifesto.title) + "</h2>" +
      '<p class="manifesto__body">' + escapeHtml(manifesto.body) + "</p>" +
      '<div class="principles">' +
      manifesto.principles.map(function (item) {
        return (
          '<div class="principle"><span class="principle__num">' + escapeHtml(item.num) + "</span>" +
          '<span class="principle__title">' + escapeHtml(item.title) + "</span>" +
          "<p>" + escapeHtml(item.text) + "</p></div>"
        );
      }).join("") +
      "</div></div></div></section>";

    const modulesHtml =
      '<section class="modules wrap">' +
      '<div class="section-head reveal"><div><p class="eyebrow">' + escapeHtml(modules.eyebrow) + "</p>" +
      "<h2>" + escapeHtml(modules.title) + "</h2></div>" +
      '<p class="section-head__note">' + escapeHtml(modules.lede) + "</p></div>" +
      '<div class="module-grid">' +
      modules.items.map(function (item, index) {
        const meta = MODULES[index];
        return (
          '<a class="module-card reveal" href="' + meta.href + '" style="--card-accent:' + meta.accent + '">' +
          '<div class="module-card__top"><span class="module-card__num">' + meta.num + "</span>" +
          '<span class="module-card__ghost" aria-hidden="true">' + meta.num + "</span></div>" +
          '<div class="module-card__body"><h3>' + escapeHtml(item.title) + "</h3>" +
          '<p class="module-card__latin">' + escapeHtml(item.latin) + "</p>" +
          '<p class="module-card__desc">' + escapeHtml(item.desc) + "</p>" +
          '<span class="module-card__link"><span>' + escapeHtml(ch.enter) + "</span>" +
          '<span class="arrow" aria-hidden="true">→</span></span></div></a>'
        );
      }).join("") +
      "</div></section>";

    const practicesHtml =
      '<section class="practices"><div class="wrap">' +
      '<div class="practices__head reveal"><div><p class="eyebrow">' + escapeHtml(practices.eyebrow) + "</p>" +
      "<h2>" + escapeHtml(practices.title) + "</h2></div></div>" +
      '<div class="practices__grid">' +
      practices.items.map(function (item) {
        return (
          '<div class="practice-item reveal"><span class="practice-item__verb">' + escapeHtml(item.verb) + "</span>" +
          '<span class="practice-item__label">' + escapeHtml(item.label) + "</span>" +
          "<p>" + escapeHtml(item.text) + "</p></div>"
        );
      }).join("") +
      "</div></div></section>";

    const closingHtml =
      '<section class="home-closing wrap" id="begin">' +
      '<div class="reveal"><p class="eyebrow">' + escapeHtml(closing.eyebrow) + "</p>" +
      "<h2>" + escapeHtml(closing.title) + "</h2>" +
      "<p>" + escapeHtml(closing.text) + "</p>" +
      '<a class="button" href="' + escapeHtml(closing.href) + '">' + escapeHtml(closing.cta) +
      ' <span class="arrow" aria-hidden="true">→</span></a></div>' +
      '<div class="home-closing__seal reveal" aria-hidden="true">' +
      '<img src="assets/img/brand/logo-full-256.png" alt="" width="132" height="132">' +
      "</div>" +
      "</section>";

    main.innerHTML = heroHtml + manifestoHtml + modulesHtml + practicesHtml +
      closingHtml + '<div class="wrap page-epilogue">' + renderEpilogue() + "</div>";
  }

  function renderBlock(block) {
    if (!block) return "";
    switch (block.type) {
      case "p":
        return "<p>" + escapeHtml(block.text) + "</p>";
      case "h3":
        return "<h3>" + escapeHtml(block.text) + "</h3>";
      case "ul":
        return "<ul>" + block.items.map(function (item) {
          return "<li>" + escapeHtml(item) + "</li>";
        }).join("") + "</ul>";
      case "ol":
        return "<ol>" + block.items.map(function (item) {
          return "<li>" + escapeHtml(item) + "</li>";
        }).join("") + "</ol>";
      case "quote":
        return '<blockquote class="quote"><p>' + escapeHtml(block.text) + "</p>" +
          (block.cite ? "<cite>" + escapeHtml(block.cite) + "</cite>" : "") + "</blockquote>";
      case "cards":
        return '<div class="cards">' + block.items.map(function (item) {
          return '<div class="card"><h3>' + escapeHtml(item.title) + "</h3><p>" +
            escapeHtml(item.text) + "</p></div>";
        }).join("") + "</div>";
      case "practice":
        return '<div class="practice"><p class="practice__title">' + escapeHtml(block.title) + "</p>" +
          (block.items.length && typeof block.items[0] === "object"
            ? "<ol>" + block.items.map(function (item) {
                return "<li><strong>" + escapeHtml(item.title) + "</strong> — " + escapeHtml(item.text) + "</li>";
              }).join("") + "</ol>"
            : "<ol>" + block.items.map(function (item) {
                return "<li>" + escapeHtml(item) + "</li>";
              }).join("") + "</ol>") +
          "</div>";
      case "note":
        return '<div class="note">' + (block.title ? '<span class="note__title">' + escapeHtml(block.title) + "</span>" : "") +
          escapeHtml(block.text) + "</div>";
      case "table":
        return '<div class="table-wrap" tabindex="0" role="region" aria-label="' +
          escapeHtml(block.caption || chrome().tableHint) + '"><table class="data-table">' +
          (block.caption ? "<caption>" + escapeHtml(block.caption) + "</caption>" : "") +
          "<thead><tr>" + block.head.map(function (cell) {
            return "<th scope=\"col\">" + escapeHtml(cell) + "</th>";
          }).join("") + "</tr></thead><tbody>" +
          block.rows.map(function (row) {
            return "<tr>" + row.map(function (cell, index) {
              return index === 0 ? "<th scope=\"row\">" + escapeHtml(cell) + "</th>" : "<td>" + escapeHtml(cell) + "</td>";
            }).join("") + "</tr>";
          }).join("") + "</tbody></table></div>" +
          '<p class="table-hint">' + escapeHtml(chrome().tableHint) + "</p>";
      default:
        return "";
    }
  }

  function renderEpilogue() {
    const c = chrome();
    return (
      '<div class="epilogue reveal">' +
      '<div class="epilogue__stamp" aria-hidden="true">' + escapeHtml(c.stamp) + "</div>" +
      "<div><span class=\"epilogue__label\">" + escapeHtml(c.epilogueLabel) + "</span>" +
      '<p class="epilogue__line" data-chrome="disclaimer">' + escapeHtml(c.disclaimer) + "</p>" +
      '<p class="epilogue__note" data-chrome="disclaimerNote">' + escapeHtml(c.disclaimerNote) + "</p></div>" +
      "</div>"
    );
  }

  function renderModule() {
    const cPage = pick(content.page, "zh");
    const hero = cPage.hero;
    const sections = cPage.sections;
    const ch = chrome();
    const meta = MODULES.filter(function (item) { return item.key === page; })[0] || MODULES[0];

    const heroHtml =
      '<section class="module-hero" data-ghost="' + meta.num + '">' +
      '<p class="eyebrow">' + escapeHtml(hero.eyebrow) + "</p>" +
      "<h1>" + escapeHtml(hero.title) + "</h1>" +
      '<p class="module-hero__latin">' + escapeHtml(hero.latin) + "</p>" +
      '<p class="module-hero__lede">' + escapeHtml(hero.lede) + "</p>" +
      '<ul class="tag-list">' + hero.tags.map(function (tag) {
        return "<li>" + escapeHtml(tag) + "</li>";
      }).join("") + "</ul></section>";

    const tocHtml =
      '<aside class="toc" aria-label="' + escapeHtml(ch.tocLabel) + '">' +
      '<p class="toc__label">' + escapeHtml(ch.tocLabel) + "</p>" +
      "<ol>" + sections.map(function (section, index) {
        return '<li><a href="#' + escapeHtml(section.id) + '"><span>' +
          String(index + 1).padStart(2, "0") + "</span><span>" + escapeHtml(section.title) + "</span></a></li>";
      }).join("") + "</ol>" +
      '<a class="toc__back" href="index.html">' + escapeHtml(ch.backHome) + "</a></aside>";

    const articleHtml =
      '<article class="article">' +
      sections.map(function (section, index) {
        return (
          '<section class="section" id="' + escapeHtml(section.id) + '">' +
          '<p class="section__kicker">' + String(index + 1).padStart(2, "0") + " · " +
          escapeHtml(section.kicker) + "</p>" +
          "<h2>" + escapeHtml(section.title) + "</h2>" +
          '<p class="section__lede">' + escapeHtml(section.lede) + "</p>" +
          '<div class="prose">' + section.blocks.map(renderBlock).join("") + "</div>" +
          "</section>"
        );
      }).join("") +
      (cPage.next
        ? '<a class="module-next" href="' + escapeHtml(cPage.next.href) + '">' +
          "<span><span class=\"module-next__label\">" + escapeHtml(ch.nextLabel) + "</span>" +
          '<span class="module-next__title">' + escapeHtml(cPage.next.title) + "</span></span>" +
          '<span class="module-next__arrow" aria-hidden="true">→</span></a>'
        : "") +
      renderEpilogue() +
      "</article>";

    main.innerHTML = heroHtml +
      '<div class="module-layout">' + tocHtml + articleHtml + "</div>";
  }

  function setupReveal() {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach(function (node) { node.classList.add("is-visible"); });
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    nodes.forEach(function (node) { observer.observe(node); });
  }

  function setupScrollSpy() {
    if (page === "home") return;
    const links = Array.prototype.slice.call(document.querySelectorAll(".toc a[href^='#']"));
    const sections = links.map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    }).filter(Boolean);
    if (!sections.length) return;

    function update() {
      const offset = 140;
      let current = sections[0];
      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= offset) {
          current = section;
        }
      });
      links.forEach(function (link) {
        link.classList.toggle("is-active", link.getAttribute("href") === "#" + current.id);
      });
      scrollTicking = false;
    }

    window.addEventListener("scroll", function () {
      if (!scrollTicking) {
        window.requestAnimationFrame(update);
        scrollTicking = true;
      }
    }, { passive: true });
    update();
  }

  function setupMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("masthead-menu");
    if (!toggle || !menu) return;

    function closeMenu() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = t("menu");
    }

    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? t("close") : t("menu");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  function setupPWA() {
    if (document.querySelector(".pwa-install")) return;

    const standalone = window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "pwa-install";
    button.hidden = standalone || location.protocol === "file:";
    button.innerHTML =
      '<img src="assets/img/brand/logo-mark-256.png" alt="" width="30" height="30">' +
      '<span data-pwa-label></span>';
    document.body.appendChild(button);

    const backdrop = document.createElement("div");
    backdrop.className = "pwa-dialog-backdrop";
    backdrop.hidden = true;
    backdrop.innerHTML =
      '<div class="pwa-dialog" role="dialog" aria-modal="true" aria-labelledby="pwa-dialog-title">' +
      '<img class="pwa-dialog__logo" src="assets/img/brand/logo-full-256.png" alt="" width="64" height="64">' +
      '<p class="pwa-dialog__eyebrow" data-pwa-eyebrow></p>' +
      '<h2 id="pwa-dialog-title" data-pwa-title></h2>' +
      '<p id="pwa-dialog-body" data-pwa-body></p>' +
      '<p data-pwa-ios></p>' +
      '<p data-pwa-other></p>' +
      '<button class="pwa-dialog__close" type="button" data-pwa-close></button>' +
      "</div>";
    document.body.appendChild(backdrop);

    const dialog = backdrop.querySelector(".pwa-dialog");
    const closeButton = backdrop.querySelector(".pwa-dialog__close");
    const iosParagraph = backdrop.querySelector("[data-pwa-ios]");
    const otherParagraph = backdrop.querySelector("[data-pwa-other]");
    if (iosParagraph) iosParagraph.hidden = !isIOS;
    if (otherParagraph) otherParagraph.hidden = isIOS;

    let deferredPrompt = null;

    function openDialog() {
      backdrop.hidden = false;
      if (dialog) dialog.setAttribute("aria-describedby", "pwa-dialog-body");
      if (closeButton) closeButton.focus();
    }

    function closeDialog() {
      backdrop.hidden = true;
      if (!button.hidden) button.focus();
    }

    button.addEventListener("click", async function () {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        try {
          const choice = await deferredPrompt.userChoice;
          if (choice && choice.outcome === "accepted") button.hidden = true;
        } catch (error) {
          /* the prompt can only be used once */
        }
        deferredPrompt = null;
        return;
      }
      openDialog();
    });

    if (closeButton) closeButton.addEventListener("click", closeDialog);
    backdrop.addEventListener("click", function (event) {
      if (event.target === backdrop) closeDialog();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !backdrop.hidden) closeDialog();
    });

    window.addEventListener("beforeinstallprompt", function (event) {
      event.preventDefault();
      deferredPrompt = event;
      if (!standalone && location.protocol !== "file:") button.hidden = false;
    });

    window.addEventListener("appinstalled", function () {
      deferredPrompt = null;
      button.hidden = true;
      closeDialog();
    });

    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("./sw.js").catch(function () {
          /* offline support is optional; the site still works online */
        });
      });
    }
  }

  function renderPage() {
    if (!content) {
      main.innerHTML = '<div class="wrap" style="padding:80px 32px"><p>Content unavailable.</p></div>';
      return;
    }
    renderChrome();
    if (page === "home") {
      renderHome();
    } else {
      renderModule();
    }
    setupReveal();
    setupScrollSpy();
    if (window.innerWidth <= 920) {
      const menu = document.getElementById("masthead-menu");
      if (menu) menu.classList.remove("is-open");
    }
  }

  function setLanguage(nextLang) {
    if (!isLang(nextLang) || nextLang === lang) return;
    lang = nextLang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* ignore */
    }
    updateLangInUrl(lang);
    renderPage();
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("masthead-menu");
    if (toggle) toggle.textContent = t("menu");
    if (menu) menu.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  document.querySelectorAll(".lang button[data-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-lang"));
    });
  });

  if (!isLang(lang)) lang = "en";
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    /* ignore */
  }
  updateLangInUrl(lang);
  setupMenu();
  setupPWA();
  renderPage();

  window.GTL = {
    setLanguage: setLanguage,
    getLanguage: function () { return lang; }
  };
})();
