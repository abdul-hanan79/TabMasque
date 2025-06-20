# TabMasque Chrome Extension

TabMasque is a Google Chrome extension designed to help users manage, organize, and control their browser tabs efficiently. With a simple and intuitive interface, TabMasque allows you to quickly view, search, and manage all your open tabs from a convenient popup window.

## Features

- **View All Tabs:** Instantly see a list of all open tabs in your current Chrome window.
- **Search Tabs:** Quickly find a specific tab by typing keywords.
- **Switch Tabs:** Click on any tab in the list to switch to it immediately.
- **Close Tabs:** Easily close unwanted tabs directly from the popup.
- **Lightweight & Fast:** Minimal resource usage and fast performance.

## Installation

1. Download or clone this repository to your local machine.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (toggle in the top right corner).
4. Click on "Load unpacked" and select the folder containing the extension files.
5. The TabMasque icon will appear in your Chrome toolbar.

## Usage

1. Click the TabMasque icon in your Chrome toolbar to open the popup.
2. Browse the list of open tabs, use the search bar to filter tabs, or click on a tab to switch to it.
3. Use the close button next to any tab to close it instantly.

## File Structure

- `manifest.json` – Chrome extension manifest file.
- `content.js` – Content script for interacting with tab data.
- `popup.html` – HTML for the extension popup UI.
- `popup.js` – JavaScript for popup functionality.
- `popup.css` – Styles for the popup UI.
- `icon128.png` – Extension icon.

## Permissions

This extension requires the following Chrome permissions:
- `tabs` – To access and manage browser tabs.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For questions, suggestions, or issues, please open an issue in this repository.
