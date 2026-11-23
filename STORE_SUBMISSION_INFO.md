# 📦 מדריך התקנה מקומית לבדיקה + פרטי הגשה מלאים ל-Chrome Web Store

## 1. קישורי הפרויקט הרשמיים (לשדות ה-URLs ב-Chrome Web Store)
- **Official Homepage URL**: `https://github.com/sagive/bt-emojie-keyboard` (או `https://brandtactics.co.il`)
- **Support URL**: `https://github.com/sagive/bt-emojie-keyboard/issues`
- **Draft Blog Post on BrandTactics.co.il (מוכן לפרסום מיד עם אישור התוסף)**:
  - Post ID: `2914` (`status: draft`)
  - Future Permalink: `https://brandtactics.co.il/chrome-emoji-copy-paste-extension-development-guide/`

---

## 2. קובץ ה-ZIP המוכן להעלאה ל-Chrome Web Store Developer Console
- **נתיב הקובץ להעלאה ב-New Item**:
  `D:\Websites\Chrome\bt-emojie-keyboard\bt-emojie-keyboard-v1.0.0.zip`

## 3. נכסים גרפיים מוכנים להעלאה בחנות (`store-assets/`)
- **אייקון חנות (`128x128`)**: `D:\Websites\Chrome\bt-emojie-keyboard\icons\icon128.png`
- **צילום מסך 1 (`1280x800` - Features Showcase)**: `D:\Websites\Chrome\bt-emojie-keyboard\store-assets\01_cws_screenshot_features_1280x800.png`
- **צילום מסך 2 (`1280x800` - 6-Language Dropdown Hero)**: `D:\Websites\Chrome\bt-emojie-keyboard\store-assets\02_cws_screenshot_hero_1280x800.png`
- **Small Promo Tile (`440x280`)**: `D:\Websites\Chrome\bt-emojie-keyboard\store-assets\03_cws_small_promo_tile_440x280.png`
- **Marquee Promo Tile (`1400x560`)**: `D:\Websites\Chrome\bt-emojie-keyboard\store-assets\04_cws_marquee_promo_tile_1400x560.png`

---

## 4. טקסטים מוכנים להדבקה בטופס ה-Store Listing & Privacy Practices

### Store Listing Description (English)
```text
BT Emoji Keyboard Pro is the fastest, cleanest 6-language emoji picker and copy-paste extension for Google Chrome.

Built with pure Vanilla JS and Manifest V3 for sub-25ms instant opening, it gives marketers, developers, writers, and everyday users a frictionless way to search, collect, copy, and insert emojis anywhere on the web.

✨ KEY FEATURES:
• 6 Native Languages (EN, HE, ES, JA, ZH, TH): Search and view pure single-language tooltips in English, Hebrew (full RTL support), Spanish (Argentina), Japanese, Chinese, and Thai.
• Smart Top-Down Workflow:
  1. Auto-Focus Search Bar at the very top for instant keyword filtering.
  2. Persistent Copy & Insert Field right below search — click multiple emojis to build a sequence, copy to clipboard, or insert directly into the active web page input.
  3. Always-Visible "Recently Used" Bar at the top for 1-click access to your top 9 recent emojis.
• Right-Click Pinned Favorites: Right-click any emoji to pin or unpin it to your personal Favorites section.
• Ready-Made Smart Combos & Kaomoji: Dedicated category for multi-emoji combinations (🚀🔥💯, ✅🎯📈) and classic Kaomoji.
• 4 Copy Formats & 6 Skin Tones: Copy as Emoji (🔥), :shortcode:, U+HEX Unicode, or &#xHEX; HTML entity.
• Light & Dark Themes: Clean Light design by default with 1-click Dark Mode toggle and uniform 9-column square grid.
• Keyboard-First UX: Open anytime with Alt+Shift+E and navigate with arrow keys + Enter.
• 100% Privacy-First: Zero <all_urls> host permissions, zero tracking, zero ads, and 100% offline execution.
```

### Privacy Practices — Single Purpose & Permission Justifications
- **Category**: `Productivity` -> `Workflow & Planning` (או `Tools`)
- **Single Purpose Description**:
  `Provides an instant 6-language emoji keyboard popup and context menu to copy emojis to the clipboard or insert them into the active text input field.`
- **Permission Justifications**:
  - `storage`: Saves user preferences locally (selected language, light/dark theme, skin tone modifier, recently used emojis, and pinned favorite emojis).
  - `activeTab`: Allows inserting the user-selected emoji directly into the currently focused input or editable element on the active tab when the user clicks Insert.
  - `scripting`: Executes the lightweight text-insertion snippet on the active tab only upon explicit user action (clicking Insert or context-menu item).
  - `clipboardWrite`: Copies the selected emoji, combo, shortcode, or Unicode point directly to the system clipboard upon user click.
  - `contextMenus`: Adds a quick right-click menu on editable text fields for instant 1-click insertion of top emojis.
- **Data Usage Certification**: Does NOT collect, transmit, or sell any user data. 100% offline execution.
