# 🚀 NeoUI: High-Performance Brutalist Design System

NeoUI is a "shadcn-inspired" component library designed for the modern web. It combines a high-performance **Rust-based CLI** with a premium, high-contrast **React component library**.

## ✨ Features

- **⚡ Lightning Fast CLI:** Built in Rust for zero-overhead component injection.
- **🎨 Neo-Brutalist Aesthetic:** High-contrast, sharp-edged, and vibrant design tokens.
- **♿ Fully Accessible:** Built on top of Radix UI primitives with ARIA compliance.
- **🌓 Dark Mode Ready:** Optimized for high-impact pure black dark modes.
- **🧪 Production Ready:** Complete Storybook documentation and Vitest Browser test suites.

## 🛠️ Architecture

NeoUI is structured as a modular ecosystem:

- `/cli`: The Rust core responsible for `init` and `add <component>` commands.
- `/packages/registry`: Source templates for all Neo components.
- `/web`: Documentation and visual playground.

## 🚀 Getting Started

### 1. Initialize NeoUI
Bootstrap your project with the Neo design system (colors, shadows, and base utilities).
```bash
neoui init
```

### 2. Add Components
Inject components directly into your codebase.
```bash
neoui add button
neoui add card
neoui add badge
neoui add tabs
```

### 3. Theme Orchestration
NeoUI comes with built-in theme support.
```bash
neoui add theme-provider
neoui add theme-toggle
```

## 🧪 Testing

We believe in high-fidelity testing. Every component is verified using:
- **Storybook:** Visual isolation and variant documentation.
- **Vitest Browser:** Real-world browser interaction tests via Playwright.

```bash
# Run visual playground
npm run storybook

# Run browser tests
npm exec vitest run
```

## 📜 License
MIT


## 🎯 Project Roadmap
- [x] **Phase 1**: Brutalist Design System Foundations.
- [x] **Phase 2**: Rust CLI Scripts & Component Frontend Scaffold.
- [ ] **Phase 3**: Component Library Completion.
- [ ] **Phase 4**: Documentation & Release.
