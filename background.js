// BT Emoji Keyboard Pro — Manifest V3 Background Service Worker
// Provides right-click quick-insert context menu on editable fields with zero background RAM overhead

const QUICK_EMOJIS = [
  { id: "bt_em_fire", title: "🔥 אש / Fire", char: "🔥" },
  { id: "bt_em_heart", title: "❤️ לב / Red Heart", char: "❤️" },
  { id: "bt_em_rocket", title: "🚀 טיל / Rocket", char: "🚀" },
  { id: "bt_em_check", title: "✅ בוצע / Check Mark", char: "✅" },
  { id: "bt_em_joy", title: "😂 צחוק / Tears of Joy", char: "😂" },
  { id: "bt_em_clap", title: "👏 כפיים / Clapping Hands", char: "👏" },
  { id: "bt_em_il", title: "🇮🇱 דגל ישראל / Israel Flag", char: "🇮🇱" },
  { id: "bt_em_sparkles", title: "✨ נצנצים / Sparkles", char: "✨" }
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "bt_emoji_root",
      title: "✨ BT Emoji Pro — הכנס אימוג׳י מהיר",
      contexts: ["editable"]
    });

    for (const item of QUICK_EMOJIS) {
      chrome.contextMenus.create({
        id: item.id,
        parentId: "bt_emoji_root",
        title: item.title,
        contexts: ["editable"]
      });
    }
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  const found = QUICK_EMOJIS.find((e) => e.id === info.menuItemId);
  if (!found || !tab || !tab.id) return;

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (emojiText) => {
        const el = document.activeElement;
        if (!el) return;
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          const start = el.selectionStart ?? el.value.length;
          const end = el.selectionEnd ?? el.value.length;
          el.value = el.value.slice(0, start) + emojiText + el.value.slice(end);
          el.selectionStart = el.selectionEnd = start + emojiText.length;
          el.dispatchEvent(new Event("input", { bubbles: true }));
          el.dispatchEvent(new Event("change", { bubbles: true }));
        } else if (el.isContentEditable) {
          el.focus();
          document.execCommand("insertText", false, emojiText);
        }
      },
      args: [found.char]
    });
  } catch (err) {
    console.warn("BT Emoji context menu insert notice:", err);
  }
});
