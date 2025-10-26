# TabMasque – Chrome Extension

TabMasque is a simple and powerful Google Chrome extension that lets you **disguise, customize, or personalize any browser tab**. Change the **favicon** and **title** of the current tab instantly — perfect for privacy, fun, or organization.

## ✨ Features

### 🔹 Change Tab Favicon

Choose from built-in favicon presets:

* Google
* YouTube
* Wikipedia
* Facebook
* …and more

The favicon updates instantly on the active tab.

### 🔹 Custom Tab Title

Set any title you want — helpful for hiding sensitive tabs or organizing your workspace.

### 🔹 Reset Anytime

Restore the original title and favicon in one click.

### 🔹 Clean & Lightweight

No heavy scripts or tracking. Everything runs instantly and locally.

---

## 📦 Installation

1. Download or clone this repository.
2. Open Chrome and visit: `chrome://extensions/`
3. Enable **Developer mode** (toggle in top-right).
4. Click **Load unpacked** and select this project folder.
5. The TabMasque icon will appear in the toolbar.

---

## 🚀 Usage

1. Click the **TabMasque** icon in your toolbar.
2. Choose a favicon preset **or** upload/provide your own favicon URL.
3. Enter a custom tab title.
4. Hit **Apply** to update the current tab instantly.
5. Press **Reset** to restore the tab’s original identity.

---

## 📁 File Structure

* `manifest.json` – Extension configuration
* `popup.html` – UI for selecting favicon & title
* `popup.js` – Logic for applying changes to the current tab
* `popup.css` – Popup styling
* `content.js` & `popup.js` – Handles tab updates (if used)

---

## 🔑 Permissions

This extension requires:

* **tabs** – To modify the current tab’s title & icon
* **activeTab** – To interact with the currently selected tab

---

## 🤝 Contributing

Pull requests are welcome!
If you’d like to add more preset favicons or improve the interface, feel free to fork the repo and submit a PR.

---

## 📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

## 💬 Support

Have questions, suggestions, or issues?
Open an issue in the repository — contributions and feedback are appreciated!


