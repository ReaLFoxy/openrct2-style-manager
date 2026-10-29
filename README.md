# OpenRCT2 Style Manager (v0.1.0-beta)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![OpenRCT2](https://img.shields.io/badge/OpenRCT2-v0.4.0%2B-green.svg)](https://openrct2.io)
[![Release](https://img.shields.io/github/v/release/ReaLFoxy/openrct2-style-manager?include_prereleases)](https://github.com/ReaLFoxy/openrct2-style-manager/releases)

A comprehensive theme, color scheme, and real-time aesthetic management plugin for [OpenRCT2](https://openrct2.io).

---

## 🌟 Credits & Authors

* **Lead Developer:** [ReaLFoxy](https://github.com/ReaLFoxy)
* **AI Coding Partner:** Google Gemini 3.8 Flash (High)

---

## 💡 About Style Manager

**Style Manager** is designed to give park architects total artistic control over rides, vehicles, scenery, and guests in OpenRCT2. Instead of manually adjusting color pickers for every single ride piece and vehicle, Style Manager provides curated color harmonies, multi-scheme track designers, and a real-time 60 FPS RGB Chroma animation engine.

---

## ✨ Features

### 🎨 Tab 1: Themes & Custom Palette
* **6 Curated Style Presets**:
  * 🟣 **Cyber Neon**: Electric violet track with cyan rails & stealth black supports
  * 🔴 **Classic Crimson**: Ruby red track with wine ties, white trim & gold accents
  * 🔵 **Ocean Marine**: Deep navy track with bright aqua rails & crisp white supports
  * 🟢 **Forest Timber**: Forest green track with moss ties & dark timber supports
  * 🟠 **Sunset Sunrise**: Radiant dark orange track with sunny yellow rails & coral supports
  * ⚫ **Monochrome Stealth**: Matte black track with graphite rails & industrial grey supports
* **Custom Palette Designer**:
  * 5 persistent Save/Load preset slots.
  * Full 32-color native OpenRCT2 palette picker for Main (Track/Body), Sub (Rails/Trim), and Support (Pillars/Tertiary).
* **Flexible Scope & Target Selection**:
  * Apply to **Single Selected Ride** or **All Rides in Park**.
  * Selective component toggles: `Tracks`, `Vehicles`, `Stations`, `Guests & Stalls`.

---

### 🌈 Tab 2: Alternative Track Schemes (Alt 1, Alt 2, Alt 3)
OpenRCT2 allows track rides (such as Corkscrew Coasters, Twister Coasters, and Hypercoasters) to display up to 4 distinct color schemes across different sections of the track (e.g. inversions, lift hills, brake runs).
* **Automated Alt Scheme Generators**:
  * **Inverted Accent**: Dynamically flips spine and rail accents.
  * **Darker Tones**: High-contrast, deeply saturated shaded accents.
  * **Lighter Pastels**: Soft, vibrant complementary highlights.
  * **Tri-Tone Complement**: Harmonious three-way color wheel rotation.
* **Manual Alt Palette Designer**:
  * Design custom color sets for **Alternative Scheme 1**, **Alternative Scheme 2**, and **Alternative Scheme 3** individually.
* **Alt Scheme Synchronization**:
  * Choose whether unselected schemes follow the main color scheme or use dedicated custom variations.
* **Batch Apply**:
  * One-click apply to the selected ride or across the entire park.

---

### ⚡ Tab 3: Real-Time Rainbow RGB Chroma FX
Experience dynamic, fluid, real-time color animations across your park running at a seamless **60 FPS**.
* **Dual Animation FX Modes**:
  * 🌊 **Smooth Breathing RGB**: 32-step serpentine traversal through OpenRCT2's native color palette grid, providing smooth, organic, breathing color transitions without harsh jumps.
  * 🌈 **Classic Rainbow**: 9-step vibrant spectrum rotation.
* **Intelligent Vehicle Animation**:
  * **Per Car (차량마다 다른 색)**: Colors shift dynamically backward along the train from car to car in real time. Works dynamically with any train length ($1 \sim N$ cars)!
  * **Per Train (편성마다 다른 색)**: Each train cycles with its own harmonized phase offset.
  * **All Same (모든 차량 같은 색)**: Synchronous train-wide color cycle.
  * **Automatic In-Game Sync**: Seamlessly syncs OpenRCT2's internal `vehicleColourSettings` to match the selected vehicle style mode.
* **Multi-Target Animation**:
  * **Tracks**: Synchronous 12-slot wave animation cycling Main and Alt 1–3 schemes across all coaster tracks simultaneously.
  * **Vehicles**: Real-time coloring for roller coaster trains, tracked rides, and flat rides (Carousel, Ferris Wheel, Enterprise, etc.).
  * **Guests & Merchandise**: Live color transitions for guest T-shirts, hats, umbrellas, and balloons.
* **Speed Controls**:
  * `Slow (Chill Wave)`
  * `Normal (Classic Chroma)`
  * `Fast (Hyper Gamer RGB)`
* **Zero-Lag Architecture**:
  * Moving coaster cars are updated via direct in-memory entity manipulation (`car.colours`), eliminating game action queue bottlenecks and guaranteeing **rock-solid 60 FPS** performance.

---

## 📥 Installation

1. Download **`style-manager.js`** from the [GitHub Releases](https://github.com/ReaLFoxy/openrct2-style-manager/releases) or the [`dist/`](./dist/style-manager.js) folder.
2. Place `style-manager.js` into your OpenRCT2 `plugin` folder:
   * **Windows**: `Documents\OpenRCT2\plugin\`
     *(e.g. `C:\Users\<YourUsername>\Documents\OpenRCT2\plugin\`)*
   * **macOS**: `~/Library/Application Support/OpenRCT2/plugin/`
   * **Linux**: `~/.config/OpenRCT2/plugin/`
3. Launch OpenRCT2 and open **Style Manager** from the top map menu dropdown.

---

## 🛠️ Development & Building from Source

### Prerequisites
* [Node.js](https://nodejs.org/) (v18+)
* `npm`
* Python 3.8+ (for build generator and syntax validation)

### Commands
```bash
# Clone the repository
git clone https://github.com/ReaLFoxy/openrct2-style-manager.git
cd openrct2-style-manager

# Install dependencies
npm install

# Build distribution bundle
python ../scripts/build_style_manager_v033.py

# Validate syntax
python ../scripts/check_js_syntax.py dist/style-manager.js
```

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).  
Copyright (c) 2026 ReaLFoxy & Contributors.
