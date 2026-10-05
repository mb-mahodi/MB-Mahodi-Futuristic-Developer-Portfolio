# MB Mahodi — Futuristic 3D Developer Portfolio

A responsive, production-quality developer portfolio website built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Three.js (@react-three/fiber & @react-three/drei).

Inspired by cutting-edge creative developer showcases, the portfolio features an ultra-dark cosmic purple aesthetic (`#07060D`), interactive 3D elements, smooth animations, and clean modular architecture.

---

## Brand Identity & Specifications

- **Name**: MB Mahodi
- **Role**: Visionary Developer, Robotics Enthusiast, and Creative Technologist
- **Personal Brand**: The Visionary Synthesizer
- **Color Palette**:
  - Main Background: `#07060D`
  - Secondary Background: `#100C1D`
  - Primary Accent: `#9B5CFF`
  - Secondary Accent: `#6E42D9`
  - Main Text: `#F7F4FF`
  - Muted Text: `#AAA4BB`

---

## Features & Sections

1. **Fixed Responsive Navigation (`Navbar.tsx`)**:
   - Brand logo with glowing indicator
   - Smooth-scrolling links with active section tracking
   - Mobile responsive drawer menu
2. **Hero Section (`Hero.tsx`)**:
   - Personal brand badge (`THE VISIONARY SYNTHESIZER`)
   - Gradient headline: "Hi, I'm **MB Mahodi**"
   - Subtitle & elevator summary for robotics, web engineering, and AI
   - CTA buttons ("Explore My Work", "Contact Me")
   - **Interactive 3D Computer Desk Setup (`DeskCanvas.tsx`)**:
     - Monitor displaying glowing procedural code matrix
     - PC tower with tempered glass and spinning RGB cooling fans
     - Backlit keyboard and gaming mouse with mousepad
     - Interactive camera rotation & auto-float
     - Graceful WebGL fallback
   - Animated scroll indicator
3. **Overview Section (`Overview.tsx`)**:
   - 4 interactive feature cards:
     - Web Development
     - Robotics & Electronics
     - Artificial Intelligence
     - Creative Problem Solving
4. **Experience Timeline (`Experience.tsx`)**:
   - Vertical illuminated timeline with alternating responsive cards:
     - Robotics Science Club
     - Personal Technology Projects
     - Science Fair Participation & Achievements
     - Web Development & AI Experiments
5. **Skills Showcase (`Skills.tsx`)**:
   - Interactive category filtering (Frontend, Programming, Robotics & Hardware, AI & Machine Learning, Dev Tools)
   - Circular 3D badges with glowing borders and animated proficiency meters
6. **Projects Gallery (`Projects.tsx`)**:
   - Category filtering (Web, Robotics, AI, Creative Tech)
   - Visual card banners with glowing hologram iconography
   - Feature bullet points, tech tags, and Live Demo / Repository actions
   - Honest modal notifications for placeholder URLs (preventing broken dead links)
7. **Testimonials (`Testimonials.tsx`)**:
   - 3 dark testimonial cards clearly labeled as configurable placeholders
8. **Contact Section (`Contact.tsx`)**:
   - Left column: Direct email (with copy-to-clipboard), location, network links (GitHub, LinkedIn, Twitter)
   - Accessible validated form (Name, Email, Subject, Message) with error handling
   - Right column: **Interactive 3D Orbital Sphere (`OrbitalSphereCanvas.tsx`)**
9. **Footer (`Footer.tsx`)**:
   - Brand statement, navigation quick-links, and "Back to Orbit" smooth scroll

---

## Project Structure

```text
src/
├── components/
│   ├── canvas/
│   │   ├── DeskCanvas.tsx          # 3D Computer Desk Setup
│   │   ├── OrbitalSphereCanvas.tsx # 3D Quantum Orbital Sphere
│   │   └── StarsCanvas.tsx         # Cosmic background particles
│   ├── Contact.tsx                 # Contact form & social reachout
│   ├── Experience.tsx              # Vertical experience timeline
│   ├── Footer.tsx                  # Footer & back-to-top
│   ├── Hero.tsx                    # Opening hero with 3D canvas
│   ├── Navbar.tsx                  # Fixed glassmorphic navigation
│   ├── Overview.tsx                # 4-card introduction grid
│   ├── Projects.tsx                # Filterable project gallery
│   ├── Skills.tsx                  # Filterable skills showcase
│   └── Testimonials.tsx            # Endorsement cards
├── data/
│   ├── config.ts                   # Brand metadata & overview items
│   ├── contact.ts                  # Contact info & social links
│   ├── experience.ts               # Experience entries & milestones
│   ├── projects.ts                 # Project records & descriptions
│   ├── skills.ts                   # Technical skills & percentages
│   └── testimonials.ts             # Testimonial quotes & personas
├── styles/
│   └── tokens.ts                   # Global color & design tokens
├── types/
│   └── index.ts                    # TypeScript types & interfaces
├── App.tsx                         # Main composition root
├── index.css                       # Tailwind CSS theme configuration
└── main.tsx                        # React application entry
```

---

## How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 3. Production Build
```bash
npm run build
```

### 4. Typecheck & Lint
```bash
npm run lint
```

---

## Customizing Your Content

All portfolio content is separated into clean, data-driven files in `src/data/`:
- **Personal & Brand Info**: `src/data/config.ts`
- **Projects & URLs**: `src/data/projects.ts`
- **Experience Records**: `src/data/experience.ts`
- **Technical Skills**: `src/data/skills.ts`
- **Contact Details**: `src/data/contact.ts`
- **Testimonials**: `src/data/testimonials.ts`
# MB-Mahodi-Futuristic-Developer-Portfolio
