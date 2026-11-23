// BT Emoji Keyboard Pro — Main Controller (Manifest V3)
// 6 Languages (Default: English -> Hebrew -> Spanish Argentina -> Japanese -> Chinese -> Thai)
// Default Theme: Light | Strictly Pure Single-Language Tooltips & Inspector Descriptions
(function () {
  const SCHEMA_VERSION = 3; // Forces clean default to Light Theme + English on upgrade

  const I18N = {
    en: {
      dir: "ltr",
      title: "BT Emoji Keyboard Pro",
      searchPlaceholder: "Search emojis (e.g., fire, heart, rocket, smile)...",
      copyFieldPlaceholder: "Copy field — click emojis to collect & copy...",
      pinnedTitle: "📌 Pinned Favorites (Right-click to pin/unpin)",
      recentsTitle: "🕒 Recently Used",
      clearRecents: "Clear",
      allEmojis: "All Emojis",
      searchResults: "Search Results",
      emptyText: "No matching emojis found for your query.",
      defaultInspectorName: "Click any emoji to copy • Right-click to pin favorite",
      defaultInspectorCodes: "Alt+Shift+E quick launch • Arrow keys + Enter to pick",
      copiedToast: "Copied to clipboard:",
      insertedToast: "Inserted into page:",
      pinnedToast: "Pinned to favorites 📌",
      unpinnedToast: "Removed from favorites",
      trayCopy: "📋 Copy",
      trayInsert: "⚡ Insert",
      tipSkin: "Skin Tone",
      tipFormat: "Copy Format",
      tipLang: "Select Language",
      tipTheme: "Toggle Light / Dark Theme",
      tipClearSearch: "Clear search",
      tipTrayCopy: "Copy field to clipboard",
      tipTrayInsert: "Insert directly into active page field",
      tipTrayClear: "Clear copy field"
    },
    he: {
      dir: "rtl",
      title: "מקלדת אימוג׳י BT Pro",
      searchPlaceholder: "חפש אימוג׳י (למשל: אש, לב, צחוק, טיל, חיוך)...",
      copyFieldPlaceholder: "שדה העתקה — לחץ על אימוג׳ים להוספה והעתקה...",
      pinnedTitle: "📌 מועדפים מוצמדים (קליק ימני להצמדה/הסרה)",
      recentsTitle: "🕒 לאחרונה",
      clearRecents: "נקה",
      allEmojis: "כל האימוג׳ים",
      searchResults: "תוצאות חיפוש",
      emptyText: "לא נמצאו אימוג׳ים תואמים לחיפוש שלך.",
      defaultInspectorName: "לחיצה מעתיקה מיד ומוסיפה לשדה ההעתקה • קליק ימני למועדפים",
      defaultInspectorCodes: "Alt+Shift+E לפתיחה מהירה • חיצים + Enter לבחירה",
      copiedToast: "הועתק ללוח:",
      insertedToast: "הוכנס לעמוד:",
      pinnedToast: "הוצמד למועדפים 📌",
      unpinnedToast: "הוסר מהמועדפים",
      trayCopy: "📋 העתק",
      trayInsert: "⚡ לעמוד",
      tipSkin: "גוון עור",
      tipFormat: "פורמט העתקה",
      tipLang: "בחר שפה",
      tipTheme: "החלף עיצוב בהיר / כהה",
      tipClearSearch: "נקה חיפוש",
      tipTrayCopy: "העתק את שדה ההעתקה ללוח",
      tipTrayInsert: "הכנס ישירות לשדה הטקסט בעמוד",
      tipTrayClear: "נקה שדה העתקה"
    },
    es: {
      dir: "ltr",
      title: "Teclado Emoji BT Pro",
      searchPlaceholder: "Buscar emojis (ej.: fuego, corazón, risa, cohete)...",
      copyFieldPlaceholder: "Campo de copia — hacé clic en los emojis para copiar...",
      pinnedTitle: "📌 Favoritos fijados (Clic derecho para fijar/quitar)",
      recentsTitle: "🕒 Usados recientemente",
      clearRecents: "Limpiar",
      allEmojis: "Todos los Emojis",
      searchResults: "Resultados de búsqueda",
      emptyText: "No se encontraron emojis para tu búsqueda.",
      defaultInspectorName: "Hacé clic para copiar • Clic derecho para fijar en favoritos",
      defaultInspectorCodes: "Alt+Shift+E acceso rápido • Flechas + Enter para elegir",
      copiedToast: "Copiado al portapapeles:",
      insertedToast: "Insertado en la página:",
      pinnedToast: "Fijado en favoritos 📌",
      unpinnedToast: "Quitado de favoritos",
      trayCopy: "📋 Copiar",
      trayInsert: "⚡ Insertar",
      tipSkin: "Tono de piel",
      tipFormat: "Formato de copia",
      tipLang: "Seleccionar idioma",
      tipTheme: "Cambiar tema claro / oscuro",
      tipClearSearch: "Limpiar búsqueda",
      tipTrayCopy: "Copiar todo al portapapeles",
      tipTrayInsert: "Insertar directamente en la página",
      tipTrayClear: "Vaciar campo de copia"
    },
    ja: {
      dir: "ltr",
      title: "BT 絵文字キーボード Pro",
      searchPlaceholder: "絵文字を検索 (例: 笑顔, ハート, 炎, ロケット)...",
      copyFieldPlaceholder: "コピー欄 — 絵文字をクリックして追加・コピー...",
      pinnedTitle: "📌 ピン留めしたお気に入り (右クリックで固定/解除)",
      recentsTitle: "🕒 最近使った絵文字",
      clearRecents: "クリア",
      allEmojis: "すべての絵文字",
      searchResults: "検索結果",
      emptyText: "一致する絵文字が見つかりませんでした。",
      defaultInspectorName: "クリックで即コピー • 右クリックでお気に入りに固定",
      defaultInspectorCodes: "Alt+Shift+E で起動 • 矢印キー + Enter で選択",
      copiedToast: "コピーしました:",
      insertedToast: "ページに挿入しました:",
      pinnedToast: "お気に入りに固定しました 📌",
      unpinnedToast: "お気に入りから解除しました",
      trayCopy: "📋 コピー",
      trayInsert: "⚡ 挿入",
      tipSkin: "肌の色",
      tipFormat: "コピー形式",
      tipLang: "言語を選択",
      tipTheme: "ライト / ダークテーマ切替",
      tipClearSearch: "検索をクリア",
      tipTrayCopy: "クリップボードにコピー",
      tipTrayInsert: "ページの入力欄に直接挿入",
      tipTrayClear: "コピー欄をクリア"
    },
    zh: {
      dir: "ltr",
      title: "BT 专业表情键盘 Pro",
      searchPlaceholder: "搜索表情 (例如: 笑脸, 爱心, 火, 火箭)...",
      copyFieldPlaceholder: "复制栏 — 点击表情即可收集并复制...",
      pinnedTitle: "📌 置顶收藏 (右键点击可置顶或取消)",
      recentsTitle: "🕒 最近使用",
      clearRecents: "清空",
      allEmojis: "全部表情",
      searchResults: "搜索结果",
      emptyText: "未找到匹配的表情符号。",
      defaultInspectorName: "左键点击立即复制 • 右键点击添加至置顶收藏",
      defaultInspectorCodes: "Alt+Shift+E 快速打开 • 方向键 + Enter 快速选择",
      copiedToast: "已复制到剪贴板:",
      insertedToast: "已插入到网页:",
      pinnedToast: "已添加至收藏 📌",
      unpinnedToast: "已从收藏中移除",
      trayCopy: "📋 复制",
      trayInsert: "⚡ 插入",
      tipSkin: "肤色选择",
      tipFormat: "复制格式",
      tipLang: "选择语言",
      tipTheme: "切换浅色 / 深色主题",
      tipClearSearch: "清除搜索",
      tipTrayCopy: "复制到剪贴板",
      tipTrayInsert: "直接插入到当前网页输入框",
      tipTrayClear: "清空复制栏"
    },
    th: {
      dir: "ltr",
      title: "แป้นพิมพ์อิโมจิ BT Pro",
      searchPlaceholder: "ค้นหาอิโมจิ (เช่น ยิ้ม, หัวใจ, ไฟ, จรวด)...",
      copyFieldPlaceholder: "ช่องคัดลอก — คลิกอิโมจิเพื่อรวบรวมและคัดลอก...",
      pinnedTitle: "📌 รายการโปรดที่ปักหมุด (คลิกขวาเพื่อปักหมุด/ยกเลิก)",
      recentsTitle: "🕒 ใช้ล่าสุด",
      clearRecents: "ล้าง",
      allEmojis: "อิโมจิทั้งหมด",
      searchResults: "ผลการค้นหา",
      emptyText: "ไม่พบอิโมจิที่ตรงกับการค้นหาของคุณ",
      defaultInspectorName: "คลิกเพื่อคัดลอกทันที • คลิกขวาเพื่อปักหมุดรายการโปรด",
      defaultInspectorCodes: "Alt+Shift+E เปิดด่วน • ปุ่มลูกศร + Enter เพื่อเลือก",
      copiedToast: "คัดลอกไปยังคลิปบอร์ดแล้ว:",
      insertedToast: "แทรกลงในหน้าเว็บแล้ว:",
      pinnedToast: "ปักหมุดในรายการโปรดแล้ว 📌",
      unpinnedToast: "นำออกจากรายการโปรดแล้ว",
      trayCopy: "📋 คัดลอก",
      trayInsert: "⚡ แทรก",
      tipSkin: "โทนสีผิว",
      tipFormat: "รูปแบบการคัดลอก",
      tipLang: "เลือกภาษา",
      tipTheme: "สลับธีมสว่าง / มืด",
      tipClearSearch: "ล้างการค้นหา",
      tipTrayCopy: "คัดลอกไปยังคลิปบอร์ด",
      tipTrayInsert: "แทรกลงในช่องข้อความบนหน้าเว็บโดยตรง",
      tipTrayClear: "ล้างช่องคัดลอก"
    }
  };

  let state = {
    schemaVersion: SCHEMA_VERSION,
    lang: "en",      // Default: English
    theme: "light",  // Default: Light Design
    skinTone: "",
    copyFormat: "emoji",
    activeCategory: "all",
    searchQuery: "",
    recents: ["🔥", "❤️", "😂", "🚀", "✅", "🇮🇱", "👏", "✨", "⚖️"],
    pinned: ["🔥", "🚀", "❤️", "✨"],
    focusedIndex: -1,
    filteredEmojis: []
  };

  // DOM References
  const htmlEl = document.documentElement;
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search");
  const categoryNav = document.getElementById("category-nav");
  const emojiGrid = document.getElementById("emoji-grid");
  const pinnedSection = document.getElementById("pinned-section");
  const pinnedGrid = document.getElementById("pinned-grid");
  const recentsTopBar = document.getElementById("recents-top-bar");
  const recentsGrid = document.getElementById("recents-grid");
  const currentCatTitle = document.getElementById("current-cat-title");
  const resultsCount = document.getElementById("results-count");
  const emptyState = document.getElementById("empty-state");
  const inspectorChar = document.getElementById("inspector-char");
  const inspectorName = document.getElementById("inspector-name");
  const inspectorCodes = document.getElementById("inspector-codes");
  const toastEl = document.getElementById("toast");
  const skinBtn = document.getElementById("skin-btn");
  const skinMenu = document.getElementById("skin-menu");
  const formatSelect = document.getElementById("format-select");
  const langSelect = document.getElementById("lang-select");
  const themeBtn = document.getElementById("theme-btn");
  const trayInput = document.getElementById("tray-input");
  const trayCopyBtn = document.getElementById("tray-copy-btn");
  const trayInsertBtn = document.getElementById("tray-insert-btn");
  const trayClearBtn = document.getElementById("tray-clear-btn");
  const clearRecentsBtn = document.getElementById("clear-recents-btn");

  let toastTimer = null;

  // Returns ONLY the name in the active selected language (no mixing of other languages!)
  function getLocalizedEmojiName(emojiObj) {
    return emojiObj[state.lang] || emojiObj.en;
  }

  function getLocalizedCategoryName(catObj) {
    return catObj[state.lang] || catObj.en;
  }

  function applySkinTone(emojiObj) {
    if (!state.skinTone || !emojiObj.skin) return emojiObj.char;
    const base = emojiObj.char.replace(/\uFE0F$/g, "");
    return base + state.skinTone;
  }

  function formatOutput(emojiObj) {
    const charWithTone = applySkinTone(emojiObj);
    if (state.copyFormat === "shortcode") return emojiObj.shortcode;
    if (state.copyFormat === "unicode") return emojiObj.unicode;
    if (state.copyFormat === "html") {
      return Array.from(charWithTone)
        .map((c) => `&#x${c.codePointAt(0).toString(16).toUpperCase()};`)
        .join("");
    }
    return charWithTone;
  }

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.remove("hidden");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.add("hidden");
    }, 1500);
  }

  async function saveState() {
    const payload = {
      schemaVersion: SCHEMA_VERSION,
      lang: state.lang,
      theme: state.theme,
      skinTone: state.skinTone,
      copyFormat: state.copyFormat,
      recents: state.recents,
      pinned: state.pinned
    };
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      await chrome.storage.local.set({ bt_emoji_state: payload });
    } else {
      localStorage.setItem("bt_emoji_state", JSON.stringify(payload));
    }
  }

  async function loadState() {
    try {
      let saved = null;
      if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        const res = await chrome.storage.local.get("bt_emoji_state");
        if (res && res.bt_emoji_state) saved = res.bt_emoji_state;
      } else {
        const raw = localStorage.getItem("bt_emoji_state");
        if (raw) saved = JSON.parse(raw);
      }
      if (saved && saved.schemaVersion === SCHEMA_VERSION) {
        Object.assign(state, saved);
      } else {
        await saveState();
      }
    } catch (e) {
      console.warn("State load fallback:", e);
    }
  }

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    const t = I18N[state.lang] || I18N.en;
    showToast(`${t.copiedToast} ${text}`);
  }

  async function insertIntoActivePage(text) {
    if (typeof chrome !== "undefined" && chrome.tabs && chrome.scripting) {
      try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab && tab.id && !tab.url.startsWith("chrome://") && !tab.url.startsWith("edge://")) {
          await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (emojiText) => {
              const el = document.activeElement;
              if (!el) return false;
              if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                const start = el.selectionStart ?? el.value.length;
                const end = el.selectionEnd ?? el.value.length;
                el.value = el.value.slice(0, start) + emojiText + el.value.slice(end);
                el.selectionStart = el.selectionEnd = start + emojiText.length;
                el.dispatchEvent(new Event("input", { bubbles: true }));
                el.dispatchEvent(new Event("change", { bubbles: true }));
                return true;
              }
              if (el.isContentEditable) {
                el.focus();
                document.execCommand("insertText", false, emojiText);
                return true;
              }
              return false;
            },
            args: [text]
          });
          const t = I18N[state.lang] || I18N.en;
          showToast(`${t.insertedToast} ${text}`);
          await navigator.clipboard.writeText(text).catch(() => {});
          return;
        }
      } catch (e) {
        console.warn("Direct page insert fallback to clipboard:", e);
      }
    }
    await copyToClipboard(text);
  }

  function recordRecent(char) {
    state.recents = [char, ...state.recents.filter((c) => c !== char)].slice(0, 9);
    saveState();
    renderQuickLists();
  }

  function togglePin(char) {
    const t = I18N[state.lang] || I18N.en;
    if (state.pinned.includes(char)) {
      state.pinned = state.pinned.filter((c) => c !== char);
      showToast(`${t.unpinnedToast} ${char}`);
    } else {
      state.pinned = [char, ...state.pinned].slice(0, 18);
      showToast(`${t.pinnedToast} ${char}`);
    }
    saveState();
    renderQuickLists();
    renderMainGrid();
  }

  async function handleEmojiActivate(emojiObj) {
    const output = formatOutput(emojiObj);
    recordRecent(emojiObj.char);
    trayInput.value += output;
    await copyToClipboard(trayInput.value);
  }

  // Strictly shows ONLY the selected language's description in the bottom inspector bar!
  function updateInspector(emojiObj) {
    if (!emojiObj) return;
    const displayChar = applySkinTone(emojiObj);
    inspectorChar.textContent = displayChar;
    inspectorName.textContent = getLocalizedEmojiName(emojiObj);
    inspectorCodes.textContent = `${emojiObj.shortcode}  |  ${emojiObj.unicode}`;
  }

  function createEmojiButton(emojiObj) {
    const btn = document.createElement("button");
    btn.className = "emoji-cell";
    if (state.pinned.includes(emojiObj.char)) {
      btn.classList.add("pinned");
    }
    const displayChar = applySkinTone(emojiObj);
    if (Array.from(displayChar).length > 2) {
      btn.classList.add("combo-cell");
    }
    btn.textContent = displayChar;
    // Strictly localized tooltip in the active language only!
    btn.title = getLocalizedEmojiName(emojiObj);

    btn.addEventListener("mouseenter", () => updateInspector(emojiObj));
    btn.addEventListener("click", () => handleEmojiActivate(emojiObj));
    btn.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      togglePin(emojiObj.char);
    });
    return btn;
  }

  function renderCategories() {
    const t = I18N[state.lang] || I18N.en;
    categoryNav.innerHTML = "";
    const allBtn = document.createElement("button");
    allBtn.className = `cat-btn ${state.activeCategory === "all" ? "active" : ""}`;
    allBtn.textContent = "🌐";
    allBtn.title = t.allEmojis;
    allBtn.addEventListener("click", () => {
      state.activeCategory = "all";
      renderCategories();
      renderMainGrid();
    });
    categoryNav.appendChild(allBtn);

    window.BT_EMOJI_CATEGORIES.forEach((cat) => {
      if (cat.id === "recents") return;
      const btn = document.createElement("button");
      btn.className = `cat-btn ${state.activeCategory === cat.id ? "active" : ""}`;
      btn.textContent = cat.icon;
      btn.title = getLocalizedCategoryName(cat);
      btn.addEventListener("click", () => {
        state.activeCategory = cat.id;
        searchInput.value = "";
        state.searchQuery = "";
        clearSearchBtn.classList.add("hidden");
        renderCategories();
        renderQuickLists();
        renderMainGrid();
      });
      categoryNav.appendChild(btn);
    });
  }

  function renderQuickLists() {
    recentsGrid.innerHTML = "";
    if (state.recents.length > 0) {
      recentsTopBar.classList.remove("hidden");
      state.recents.slice(0, 9).forEach((ch) => {
        const obj = window.BT_EMOJI_DATA.find((e) => e.char === ch);
        if (obj) recentsGrid.appendChild(createEmojiButton(obj));
      });
    } else {
      recentsTopBar.classList.add("hidden");
    }

    pinnedGrid.innerHTML = "";
    if (state.searchQuery.trim() === "" && state.pinned.length > 0) {
      pinnedSection.classList.remove("hidden");
      state.pinned.forEach((ch) => {
        const obj = window.BT_EMOJI_DATA.find((e) => e.char === ch);
        if (obj) pinnedGrid.appendChild(createEmojiButton(obj));
      });
    } else {
      pinnedSection.classList.add("hidden");
    }
  }

  function renderMainGrid() {
    const q = state.searchQuery.trim().toLowerCase();
    const t = I18N[state.lang] || I18N.en;

    state.filteredEmojis = window.BT_EMOJI_DATA.filter((item) => {
      if (q) {
        const activeName = (item[state.lang] || "").toLowerCase();
        const activeKw = (item[`kw_${state.lang}`] || "").toLowerCase();
        return (
          item.char.includes(q) ||
          activeName.includes(q) ||
          activeKw.includes(q) ||
          item.en.toLowerCase().includes(q) ||
          item.he.includes(q) ||
          item.kw_en.toLowerCase().includes(q) ||
          item.kw_he.includes(q) ||
          item.shortcode.toLowerCase().includes(q)
        );
      }
      if (state.activeCategory === "all") return true;
      return item.cat === state.activeCategory;
    });

    if (q) {
      currentCatTitle.textContent = `${t.searchResults}: "${state.searchQuery}"`;
    } else if (state.activeCategory === "all") {
      currentCatTitle.textContent = t.allEmojis;
    } else {
      const catObj = window.BT_EMOJI_CATEGORIES.find((c) => c.id === state.activeCategory);
      currentCatTitle.textContent = catObj ? getLocalizedCategoryName(catObj) : t.allEmojis;
    }

    resultsCount.textContent = state.filteredEmojis.length;
    emojiGrid.innerHTML = "";
    state.focusedIndex = -1;

    if (state.filteredEmojis.length === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
      const frag = document.createDocumentFragment();
      state.filteredEmojis.forEach((emojiObj) => {
        frag.appendChild(createEmojiButton(emojiObj));
      });
      emojiGrid.appendChild(frag);
    }
  }

  function applyLocalizationAndTheme() {
    const t = I18N[state.lang] || I18N.en;
    htmlEl.setAttribute("dir", t.dir);
    htmlEl.setAttribute("lang", state.lang);
    htmlEl.setAttribute("data-theme", state.theme);

    document.getElementById("app-title").textContent = t.title;
    searchInput.placeholder = t.searchPlaceholder;
    trayInput.placeholder = t.copyFieldPlaceholder;
    document.getElementById("pinned-title").textContent = t.pinnedTitle;
    document.getElementById("recents-title").textContent = t.recentsTitle;
    clearRecentsBtn.textContent = t.clearRecents;
    document.getElementById("empty-text").textContent = t.emptyText;
    inspectorName.textContent = t.defaultInspectorName;
    inspectorCodes.textContent = t.defaultInspectorCodes;
    trayCopyBtn.textContent = t.trayCopy;
    trayInsertBtn.textContent = t.trayInsert;

    // Localized tooltips for all controls
    skinBtn.title = t.tipSkin;
    formatSelect.title = t.tipFormat;
    langSelect.title = t.tipLang;
    themeBtn.title = t.tipTheme;
    clearSearchBtn.title = t.tipClearSearch;
    trayCopyBtn.title = t.tipTrayCopy;
    trayInsertBtn.title = t.tipTrayInsert;
    trayClearBtn.title = t.tipTrayClear;

    langSelect.value = state.lang;
    themeBtn.textContent = state.theme === "dark" ? "🌙" : "☀️";
    skinBtn.textContent = "👋" + state.skinTone;
    formatSelect.value = state.copyFormat;
  }

  // Event Listeners
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    clearSearchBtn.classList.toggle("hidden", state.searchQuery === "");
    renderQuickLists();
    renderMainGrid();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    clearSearchBtn.classList.add("hidden");
    searchInput.focus();
    renderQuickLists();
    renderMainGrid();
  });

  skinBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    skinMenu.classList.toggle("hidden");
  });

  skinMenu.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.skinTone = btn.dataset.tone;
      skinMenu.classList.add("hidden");
      saveState();
      applyLocalizationAndTheme();
      renderQuickLists();
      renderMainGrid();
    });
  });

  document.addEventListener("click", () => {
    skinMenu.classList.add("hidden");
  });

  formatSelect.addEventListener("change", (e) => {
    state.copyFormat = e.target.value;
    saveState();
  });

  langSelect.addEventListener("change", (e) => {
    state.lang = e.target.value;
    saveState();
    applyLocalizationAndTheme();
    renderCategories();
    renderQuickLists();
    renderMainGrid();
  });

  themeBtn.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    applyLocalizationAndTheme();
  });

  clearRecentsBtn.addEventListener("click", () => {
    state.recents = [];
    saveState();
    renderQuickLists();
  });

  trayCopyBtn.addEventListener("click", () => {
    if (trayInput.value) copyToClipboard(trayInput.value);
  });

  trayInsertBtn.addEventListener("click", () => {
    if (trayInput.value) insertIntoActivePage(trayInput.value);
  });

  trayClearBtn.addEventListener("click", () => {
    trayInput.value = "";
    trayInput.focus();
  });

  // Keyboard Navigation (Arrow keys + Enter)
  document.addEventListener("keydown", (e) => {
    const cells = Array.from(emojiGrid.querySelectorAll(".emoji-cell"));
    if (cells.length === 0) return;

    if (["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)) {
      if ((document.activeElement === searchInput || document.activeElement === trayInput) && e.key !== "ArrowDown") return;
      e.preventDefault();
      const cols = 9;
      const isRTL = (I18N[state.lang] || I18N.en).dir === "rtl";
      if (state.focusedIndex < 0) {
        state.focusedIndex = 0;
      } else {
        if (e.key === "ArrowDown") state.focusedIndex = Math.min(cells.length - 1, state.focusedIndex + cols);
        if (e.key === "ArrowUp") state.focusedIndex = Math.max(0, state.focusedIndex - cols);
        if (e.key === "ArrowRight") state.focusedIndex = Math.max(0, Math.min(cells.length - 1, state.focusedIndex + (isRTL ? -1 : 1)));
        if (e.key === "ArrowLeft") state.focusedIndex = Math.max(0, Math.min(cells.length - 1, state.focusedIndex + (isRTL ? 1 : -1)));
      }
      cells.forEach((c, idx) => c.classList.toggle("focused", idx === state.focusedIndex));
      const activeCell = cells[state.focusedIndex];
      if (activeCell) {
        activeCell.scrollIntoView({ block: "nearest" });
        updateInspector(state.filteredEmojis[state.focusedIndex]);
      }
    } else if (e.key === "Enter" && state.focusedIndex >= 0 && state.filteredEmojis[state.focusedIndex]) {
      e.preventDefault();
      handleEmojiActivate(state.filteredEmojis[state.focusedIndex]);
    }
  });

  // Initialize
  (async function init() {
    await loadState();
    applyLocalizationAndTheme();
    renderCategories();
    renderQuickLists();
    renderMainGrid();
    searchInput.focus();
  })();
})();
