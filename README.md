# Songsterr Warning Remover

Removes unwanted blur and warning elements from [Songsterr.com](https://www.songsterr.com) for a cleaner, distraction-free experience.

## Features

-   Instantly removes blur overlays and warning popups.
-   Toggle the extension on/off from the popup.
-   Works automatically and observes dynamic page changes.

## Usage

1. **Clone this repo**
    ```sh
    git clone https://github.com/yourusername/songsterrWarningRemover.git
    ```
2. **Load into Chrome**

    - Go to `chrome://extensions`
    - Enable "Developer mode"
    - Click "Load unpacked" and select this folder

3. **Click the extension icon**
    - Use the popup to enable/disable blur removal.

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License.  
Commercial use is **not allowed without written permission**.

Zie [LICENSE](./LICENSE) voor meer details.

## Files

| File            | Purpose                                      |
| --------------- | -------------------------------------------- |
| `content.js`    | Removes blur/warning elements from Songsterr |
| `popup.html`    | Popup UI for toggling the extension          |
| `popup.js`      | Popup logic for enable/disable               |
| `manifest.json` | Chrome extension manifest                    |

## Screenshots

> ![Popup Example](https://user-images.githubusercontent.com/placeholder/popup.png) > _Popup UI: Toggle blur remover_

## License

MIT

---

**Enjoy a cleaner Songsterr!**
