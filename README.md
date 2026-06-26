# ⚡ BattleFront

BattleFront is a high-performance, visually stunning landing page for a Next-Gen AI Data Automation platform. It has been built under strict hackathon speedrun constraints to showcase premium design aesthetics, fluid responsive layouts, interactive WebGL layers, and highly optimized isolated state synchronization.

---

## 🚀 Key Features

### 1. 🌐 Dynamic WebGL Hero Canvas
- Leverages **React Three Fiber** and **Three.js** to render a slow, dramatically rotating wireframe icosahedron background aligned with the brand's Forsythia accent palette.
- **Optimized Performance**: The 3D canvas is dynamically lazy-loaded with SSR disabled to guarantee high performance and optimal Lighthouse scores.

### 2. 🔀 Bento-to-Accordion Wrapper
- **Adaptive Layout**: Automatically transitions from a modern, 3-column Bento Grid on desktop (`lg:` viewports) to a fluid, touch-optimized Accordion list on mobile.
- **Context Lock Rule**: Uses a single React state (`activeIndex`) to control both layouts. When resizing the browser, the active item context is preserved programmatically between views.
- **Native Micro-Animations**: Native CSS transitions only (no heavy libraries like Framer Motion). Utilizes CSS grid auto-height transitions for fluid accordion collapses, and scale/shadow transforms for 200ms hover interactions.
- **SVG Illustrations**: Custom, interactive vector animations for each engine/pipeline visualizer.

### 3. 📊 Isolated State Compute Pricing
- **Multi-Dimensional Pricing Matrix**: Dynamically computes pricing across three tiers (Starter, Professional, Scale) using three currencies (USD, INR, EUR) and billing schedules (Monthly, Annually with -20% discount).
- **Zero-Reflow Performance**: State is isolated to individual price text nodes via a lightweight pub-sub Event Emitter. The parent grid layout and other content blocks do not re-render when selections change.

---

## 🛠️ Technology Stack

- **Core**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Graphics**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://r3f.docs.pmnd.rs/)
- **Typography**: Inter (Body) & JetBrains Mono (Headers / Numbers) configured via `next/font/google`

---

## 🏗️ Getting Started

### Installation
Install the project dependencies:
```bash
npm install
```

### Run the Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production
Verify production compilation and optimization:
```bash
npm run build
```

---

## 🏆 Hackathon Guidelines Adhered To

- **Zero-Dependency Rule**: No external UI or transition libraries (e.g. Framer Motion, Radix, Shadcn, HeadlessUI). Everything written from scratch.
- **Semantic HTML**: Strict usage of semantic tags (`<main>`, `<section>`, `<article>`, `<button>`) instead of deep div nestings.
- **Accessibility & Contrast**: Highly contrasting color palette (`text-arctic-powder`, `bg-oceanic-noir`) meeting accessibility standards, accompanied by appropriate `aria-labels`.
