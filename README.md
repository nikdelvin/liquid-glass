# 🫧 Liquid Glass

**iOS 26 Liquid Glass effect recreated for the web using pure CSS SVG filters.**

[![Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://liquid-glass.nikdelvin.dev)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/nikdelvin/liquid-glass)

![Liquid Glass Preview](https://raw.githubusercontent.com/nikdelvin/liquid-glass/main/preview.webp)

---

## ✨ Features

- 🎨 **Pure CSS** - No JavaScript animation libraries, just SVG filters and backdrop-filter
- 🔮 **Realistic Refraction** - Displacement mapping creates authentic glass distortion
- 🌈 **Chromatic Aberration** - RGB color splitting for that premium glass look
- ⚡ **Performant** - GPU-accelerated CSS transforms and filters
- 📱 **Responsive** - Scales beautifully across all screen sizes
- 🍎 **Safari Fallback** - Graceful degradation with glassmorphism mode

---

## 🧩 Components

### LiquidGlass

A container with liquid glass refraction effect. Perfect for cards, panels, and hero sections.

```astro
<LiquidGlass
  width={655}
  height={127}
  radius={50}
  depth={10}
  blur={1}
  chromaticAberration={2}
  color="white"
>
  <div class="p-8 text-4xl font-bold">
    Your content here
  </div>
</LiquidGlass>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | number | required | Width in pixels |
| `height` | number | required | Height in pixels |
| `radius` | number | required | Border radius in pixels |
| `depth` | number | required | Edge refraction depth |
| `blur` | number | 0 | Blur amount |
| `chromaticAberration` | number | — | RGB split intensity |
| `color` | 'white' \| 'black' \| 'transparent' | 'black' | Glass tint |

---

### LiquidText

Apply liquid glass effect directly to text for stunning typography.

```astro
<div class="text-6xl font-bold">
  <LiquidText blur={1} chromaticAberration={4} color="black">
    LIQUID TEXT
  </LiquidText>
</div>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `blur` | number | — | Blur amount |
| `chromaticAberration` | number | — | RGB split intensity |
| `color` | 'white' \| 'black' \| 'transparent' | — | Text tint |

---

### LiquidButton

Pill-shaped button with displacement and specular map effects.

```astro
<!-- Full liquid glass effect -->
<LiquidButton w={300} h={60}>
  <a href="/link">Click Me</a>
</LiquidButton>

<!-- Safari-compatible fallback -->
<LiquidButton w={300} h={60} morph>
  <a href="/link">Click Me</a>
</LiquidButton>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `w` | number | required | Width in pixels |
| `h` | number | required | Height in pixels |
| `morph` | boolean | false | Enable Safari glassmorphism fallback |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/nikdelvin/liquid-glass.git

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🌐 Browser Support

| Browser | LiquidGlass | LiquidText | LiquidButton |
|---------|-------------|------------|--------------|
| Chrome 76+ | ✅ Full | ✅ Full | ✅ Full |
| Firefox 103+ | ✅ Full | ✅ Full | ✅ Full |
| Safari 15+ | ⚠️ Partial | ⚠️ Partial | ✅ morph mode |
| Edge 79+ | ✅ Full | ✅ Full | ✅ Full |

---

## 📁 Required Assets

For `LiquidButton`, place these PNG files in `/public/assets/`:

```
public/
└── assets/
    ├── displacement-map-left.png
    ├── displacement-map-middle.png
    ├── displacement-map-right.png
    ├── specular-map-left.png
    ├── specular-map-middle.png
    └── specular-map-right.png
```

---

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- SVG Filters - feDisplacementMap, feGaussianBlur, feColorMatrix
- CSS backdrop-filter

---

## 📄 License

MIT © [Nik Delvin](https://github.com/nikdelvin)

---

<p align="center">
  Made with 🫧 by <a href="https://github.com/nikdelvin">Nik Delvin</a>
</p>
