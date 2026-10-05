/**
 * MB Mahodi — 3D Developer Portfolio
 * Matching the exact UI / UX from the video walk-through
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Experience } from './components/Experience';
import { Tech } from './components/Tech';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { StarsCanvas } from './components/canvas/StarsCanvas';

export default function App() {
  return (
    <div className="relative z-0 bg-[#050816] text-white selection:bg-[#915eff]/30 selection:text-white">
      {/* 1. Fixed Navigation Bar (00:00 - 00:12) */}
      <Navbar />

      {/* 2. 3D Hero Section with Interactive Workstation (00:00 - 00:12) */}
      <Hero />

      {/* 3. Introduction / Overview Section with 4 3D Gem Service Cards (00:13 - 00:18) */}
      <Overview />

      {/* 4. Work Experience Vertical Timeline (00:19 - 00:27) */}
      <Experience />

      {/* 5. 3D Decal Tech Balls (00:28 - 00:39) */}
      <Tech />

      {/* 6. Projects Section with Car Rent, Job IT, Trip Guide (00:40 - 00:49) */}
      <Projects />

      {/* 7. Testimonials Section (00:50 - 00:56) */}
      <Testimonials />

      {/* 8. Contact Section with 3D Earth Globe & Ambient Cosmic Stars (00:57 - 01:12) */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
