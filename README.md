# LuxeDrive - Luxury Automotive Website

A cinematic, high-performance luxury car frontend built with React, Vite, Tailwind CSS, GSAP, and Framer Motion.

## 🚀 Features

- **Cinematic Design**: Magazine-style asymmetric layout with glassmorphism effects
- **Smooth Animations**: GSAP ScrollTrigger for scroll-driven animations and Framer Motion for component transitions
- **Video Integration**: Hero and Product Showcase sections with optimized video playback
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: Built with accessibility in mind (ARIA labels, focus rings, reduced motion support)
- **Performance Optimized**: Lazy loading, preloading critical assets, optimized animations

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Component and route animations
- **GSAP + ScrollTrigger** - Scroll-driven animations
- **React Router DOM** - Client-side routing

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🎨 Design System

### Colors
- Background: `#070708`
- Surface: `#0f1113`
- Text Primary: `#F5F5F7`
- Muted: `#AFAFAF`
- Accent Gold: `#C9A14B`
- Accent Light: `#F2E6C5`

### Typography
- **Headings**: Playfair Display (fallback: GT Super Display)
- **Body**: Inter (fallback: Calibre)

### Animations
- Respects `prefers-reduced-motion`
- Only animates `transform` and `opacity` for performance
- Custom easing curves for smooth, luxurious feel

## 📁 Project Structure

```
luxedrive/
├── assets/               # Images and videos
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductShowcase.jsx
│   │   ├── ModelCard.jsx
│   │   ├── ModelModal.jsx
│   │   ├── GalleryGrid.jsx
│   │   ├── ContactForm.jsx
│   │   └── MagneticButton.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Models.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎯 Key Components

### Hero
- Full-screen video background with autoplay
- Animated text and CTA buttons
- Scroll indicator

### ProductShowcase
- GSAP-powered horizontal pinned scroll
- Video playback synced with scroll position
- Feature panels with specs

### ModelCard & ModelModal
- Interactive card grid with hover effects
- Modal with image carousel
- Detailed specifications and CTAs

### GalleryGrid
- Masonry-style layout
- Lightbox on click
- Lazy loading images

### ContactForm
- Floating label inputs
- Form validation
- Success notification

## 🎬 Animations

- **Route transitions**: Smooth fade/slide between pages
- **Scroll animations**: GSAP ScrollTrigger for parallax and reveal effects
- **Hover effects**: Magnetic button movement, image scale
- **Loading states**: Skeleton screens and progressive loading

## ♿ Accessibility

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation
- Focus visible states
- Respects reduced motion preferences
- Alt text for all images

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚀 Performance

- Preload critical assets (hero video, fonts)
- Lazy load non-critical images
- Optimized video compression
- Tree-shaking and code splitting
- Minimal JavaScript bundle size

## 📄 License

© 2025 LuxeDrive. All rights reserved.


Built with ❤️ using React, Vite, and Tailwind CSS
