# 📦 מדריך התקנה מקומית לבדיקה + פרטי הגשה ל-Chrome Web Store

## 1. איך להתקין ולבחון את התוסף אצלך בכרום בתוך 10 שניות (`Load unpacked`)
1. פתח בדפדפן Chrome את הכתובת: `chrome://extensions/`
2. הפעל בפינה העליונה את מתג **Developer mode** (מצב פיתוח).
3. לחץ על **Load unpacked** (טעינת פריט שלא נארז).
4. בחר את התיקייה:
   `D:\Websites\Chrome\bt-emojie-keyboard`
5. הצמד (Pin 📌) את האייקון **BT Emoji Keyboard Pro** לסרגל הכלים של כרום (או לחץ `Alt+Shift+E`).

---

## 2. קובץ ה-ZIP המוכן להעלאה ל-Chrome Web Store Developer Console
- **נתיב הקובץ להעלאה ב-New Item**:
  `D:\Websites\Chrome\bt-emojie-keyboard\bt-emojie-keyboard-v1.0.0.zip`

## 3. נכסים גרפיים מוכנים להעלאה בחנות (`store-assets/`)
- **אייקון חנות (`128x128`)**: `D:\Websites\Chrome\bt-emojie-keyboard\icons\icon128.png`
- **צילום מסך 1 (`1280x800` - ממשק עברי RTL)**: `D:\Websites\Chrome\bt-emojie-keyboard\store-assets\store_screenshot_1_1280x800.png`
- **צילום מסך 2 (`1280x800` - ממשק אנגלי LTR)**: `D:\Websites\Chrome\bt-emojie-keyboard\store-assets\store_screenshot_2_1280x800.png`
- **Small Promo Tile (`440x280`)**: `D:\Websites\Chrome\bt-emojie-keyboard\store-assets\small_promo_tile_440x280.png`

## 4. טקסטים מוכנים להדבקה בטופס ה-Store Listing & Privacy Practices
- **Category**: `Productivity` -> `Workflow & Planning` (או `Tools`)
- **Single Purpose Description**:
  `Provides an instant bilingual (English & Hebrew) emoji keyboard popup and context menu to copy emojis to the clipboard or insert them into the active text input field.`
- **Permission Justifications**:
  - `storage`: Saves user preferences locally (selected language HE/EN, dark/light theme, skin tone modifier, recently used emojis, and pinned favorite emojis).
  - `activeTab`: Allows inserting the user-selected emoji directly into the currently focused input or editable element on the active tab when the user clicks an emoji in Insert Mode.
  - `scripting`: Executes the lightweight text-insertion snippet on the active tab only upon explicit user action (clicking an emoji or context-menu item).
  - `clipboardWrite`: Copies the selected emoji, combo, shortcode, or Unicode point directly to the system clipboard upon user click.
  - `contextMenus`: Adds a quick right-click menu on editable text fields for instant 1-click insertion of top emojis.
- **Data Usage Certification**: Does NOT collect, transmit, or sell any user data. 100% offline execution.
