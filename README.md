# Rayala Sai Mohith — AI Engineer Portfolio

A premium, dark-mode portfolio built with React, Tailwind CSS, and Framer Motion, themed
around an "agent operations console" — fitting for an agentic AI developer.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Intro video

- The intro clip lives at `public/video/intro.mp4`. Replace this file with your own video
  (keep the same filename, or update the `src` in `src/components/IntroVideo.jsx`).
- On a visitor's **first visit**, the video plays full-screen, muted, once, with a
  "Skip Intro" button in the top-right corner.
- When the video ends (or is skipped), it fades to black and reveals the homepage with a
  smooth fade-in.
- A flag is stored in `localStorage` (`portfolio_intro_played`) so the intro is **not**
  shown again on refresh or future visits in that browser. Clear localStorage (or use a
  private window) to see the intro again.

## Resume

Add your resume PDF as `public/resume.pdf` — the "Resume" buttons in the hero and contact
sections link to `/resume.pdf` for download.

## Project links

Update GitHub/demo URLs for each project in `src/components/Projects.jsx`.

## Structure

```
src/
  components/
    IntroVideo.jsx    — full-screen intro video + skip + localStorage logic
    LoadingScreen.jsx — brief loading state while intro/visit status resolves
    Navbar.jsx        — sticky nav + mobile menu
    Hero.jsx          — hero section with signature "agent pipeline" visual
    AgentPipeline.jsx — animated agent pipeline status panel
    About.jsx
    Skills.jsx        — animated skill cards
    Projects.jsx      — 4 featured projects with GitHub/demo links
    Timeline.jsx      — experience/learning timeline
    Achievements.jsx  — stats + GitHub-style contribution graph
    Testimonials.jsx  — placeholder testimonial cards
    Blog.jsx          — placeholder AI articles section
    Contact.jsx
    Footer.jsx        — social icons (GitHub, Email)
  App.jsx             — intro/homepage orchestration
  index.css           — design tokens, fonts, global styles
```

## Tech

- React 18 + Vite
- Tailwind CSS 3 (custom theme: ink/panel/amber/signal palette, Space Grotesk +
  Inter + JetBrains Mono)
- Framer Motion for all transitions and scroll-reveal animations
- lucide-react icons
