# OpenRCT2 Style Manager (v0.1.0-beta)

A comprehensive theme, color scheme, and aesthetic management plugin for [OpenRCT2](https://openrct2.io).

---

## 🌟 Credits & Authors

* **Lead Developer:** [ReaLFoxy](https://github.com/ReaLFoxy)
* **AI Coding Partner:** Google Gemini 3.8 Flash (High)

---

## 💡 About Style Manager

Style Manager is designed to help park builders effortlessly manage, apply, and coordinate color palettes and aesthetic styles across attractions in OpenRCT2. Instead of manually adjusting color pickers for every single ride track and vehicle, Style Manager provides curated palettes and batch-styling capabilities.

### Features in v0.1.0 Beta:
* **Curated Style Presets**:
  * 🟣 **Cyber Neon**: Electric violet track with cyan rails & stealth black supports
  * 🔴 **Classic Crimson**: Ruby red track with wine ties, white trim & gold accents
  * 🔵 **Ocean Marine**: Deep navy track with bright aqua rails & crisp white supports
  * 🟢 **Forest Timber**: Forest green track with moss ties & dark timber supports
  * 🟠 **Sunset Sunrise**: Radiant dark orange track with sunny yellow rails & coral supports
  * ⚫ **Monochrome Stealth**: Matte black track with graphite rails & industrial grey supports
* **Selective Component Toggles**:
  * `[x] Track colors (3-tier)`: Main, Additional, and Supports
  * `[x] Vehicle colors (Body/Trim/Tertiary)`: Automatically updates all trains & cars
  * `[x] Station entrance style`: Synchronize entrance buildings
  * `[x] Guest accessories`: Bulk-style guest T-shirts, hats, balloons, and shop merchandise
* **Target Scope**:
  * Style a **single selected ride** or apply to **ALL rides in the park** in a single click
* **Graceful Degradation**:
  * Automatically adapts to attractions and vehicles supporting 3 colors, 2 colors, or 1 color without visual artifacts or crashes
* **FlexUI Modern Interface**: Clean, responsive, dockable in-game window

---

## 📥 Installation

1. Download **`style-manager.js`** from the [`dist/`](./dist/style-manager.js) folder or the GitHub Releases.
2. Place `style-manager.js` into your OpenRCT2 `plugin` folder:
   * **Windows**: `Documents\OpenRCT2\plugin\`
     *(e.g. `C:\Users\<YourUsername>\Documents\OpenRCT2\plugin\`)*
   * **macOS**: `~/Library/Application Support/OpenRCT2/plugin/`
   * **Linux**: `~/.config/OpenRCT2/plugin/`
3. Launch OpenRCT2 and open **Style Manager** from the top menu dropdown under the Map icon.

---

## 🛠️ Development & Building from Source

### Prerequisites
* [Node.js](https://nodejs.org/) (v18+)
* `npm`

### Commands
```bash
# Clone the repository
git clone https://github.com/ReaLFoxy/openrct2-style-manager.git
cd openrct2-style-manager

# Install dependencies
npm install

# Build for production (outputs to ./dist/style-manager.js)
npm run build

# Build for development (automatically copies to local OpenRCT2 plugin directory)
npm run build:dev

# Live watch mode
npm start
```

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).  
Copyright (c) 2026 ReaLFoxy & Contributors (Coded with Google Gemini 3.8 Flash (High)).
