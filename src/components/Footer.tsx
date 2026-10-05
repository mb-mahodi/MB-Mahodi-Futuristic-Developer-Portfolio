import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { portfolioConfig, navItems } from '../data/config';
import { THEME_COLORS } from '../styles/tokens';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="w-full pt-16 pb-12 border-t relative overflow-hidden"
      style={{
        backgroundColor: '#07060D',
        borderColor: 'rgba(155, 92, 255, 0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#9B5CFF]/15">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm tracking-wider"
                style={{
                  backgroundColor: 'rgba(155, 92, 255, 0.2)',
                  color: THEME_COLORS.purpleAccent,
                  border: `1px solid ${THEME_COLORS.purpleAccent}`,
                }}
              >
                MB
              </div>
              <span className="text-base font-bold text-[#F7F4FF] tracking-wide">
                {portfolioConfig.name}
              </span>
            </div>
            <p className="text-xs font-mono text-[#AAA4BB] max-w-sm">
              The Visionary Synthesizer — Bridging robotics hardware, machine intelligence, and 3D web craft.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-[#AAA4BB]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.href)}
                className="hover:text-[#9B5CFF] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#100C1D] border border-[#9B5CFF]/30 hover:border-[#9B5CFF] text-[#F7F4FF] text-xs font-mono transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(155,92,255,0.2)]"
          >
            <span>Back to Orbit</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#9B5CFF] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#AAA4BB]/70">
          <div>
            © {new Date().getFullYear()} {portfolioConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered with React, Three.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
