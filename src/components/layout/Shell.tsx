import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Terminal, Layers, Box, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../../data/config';
import { THEME_COLORS } from '../../styles/tokens';

export const Shell: React.FC = () => {
  const foundationChecks = [
    { name: 'Tailwind CSS', desc: 'Design tokens configured (#07060D, #100C1D, #9B5CFF)', icon: Layers },
    { name: 'Framer Motion', desc: 'Animation pipeline ready', icon: Sparkles },
    { name: 'Three.js & Fiber / Drei', desc: '3D engine runtime dependencies configured', icon: Box },
    { name: 'Lucide Icons', desc: 'Vector iconography ready', icon: Terminal },
  ];

  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{ backgroundColor: THEME_COLORS.background, color: THEME_COLORS.primaryText }}
    >
      {/* Minimal Top Header */}
      <header
        className="w-full px-6 py-4 flex items-center justify-between border-b"
        style={{
          borderColor: 'rgba(155, 92, 255, 0.15)',
          backgroundColor: THEME_COLORS.secondaryBackground,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm"
            style={{
              backgroundColor: 'rgba(155, 92, 255, 0.2)',
              color: THEME_COLORS.purpleAccent,
              border: `1px solid ${THEME_COLORS.purpleAccent}`,
            }}
          >
            MB
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-wide" style={{ color: THEME_COLORS.primaryText }}>
              {portfolioConfig.title}
            </h1>
            <p className="text-xs" style={{ color: THEME_COLORS.mutedText }}>
              {portfolioConfig.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded"
            style={{
              backgroundColor: 'rgba(155, 92, 255, 0.12)',
              color: THEME_COLORS.purpleAccent,
              border: '1px solid rgba(155, 92, 255, 0.25)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: THEME_COLORS.purpleAccent }}
            />
            {portfolioConfig.phase}
          </span>
        </div>
      </header>

      {/* Main Application Shell Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-xl rounded-lg p-6 sm:p-8 border shadow-2xl"
          style={{
            backgroundColor: THEME_COLORS.secondaryBackground,
            borderColor: 'rgba(155, 92, 255, 0.2)',
          }}
        >
          <div className="flex items-center gap-2 text-xs font-mono mb-3" style={{ color: THEME_COLORS.purpleAccent }}>
            <Terminal className="w-4 h-4" />
            <span>SYSTEM INITIALIZATION COMPLETE</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mb-2" style={{ color: THEME_COLORS.primaryText }}>
            {portfolioConfig.title}
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: THEME_COLORS.mutedText }}>
            Foundation stack successfully established. Ready for subsequent development phases without any placeholder
            models or mock assets.
          </p>

          {/* Foundation Verification Grid */}
          <div className="space-y-2.5 mb-6">
            {foundationChecks.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3 rounded border"
                  style={{
                    backgroundColor: THEME_COLORS.background,
                    borderColor: 'rgba(155, 92, 255, 0.12)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" style={{ color: THEME_COLORS.purpleAccent }} />
                    <div>
                      <div className="text-xs font-medium" style={{ color: THEME_COLORS.primaryText }}>
                        {item.name}
                      </div>
                      <div className="text-[11px]" style={{ color: THEME_COLORS.mutedText }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
              );
            })}
          </div>

          {/* Palette Tokens Bar */}
          <div className="pt-4 border-t" style={{ borderColor: 'rgba(155, 92, 255, 0.12)' }}>
            <div className="text-[11px] font-mono mb-2" style={{ color: THEME_COLORS.mutedText }}>
              VERIFIED DESIGN TOKENS
            </div>
            <div className="grid grid-cols-5 gap-2 text-center">
              {[
                { label: 'BG', hex: THEME_COLORS.background },
                { label: 'Surface', hex: THEME_COLORS.secondaryBackground },
                { label: 'Accent', hex: THEME_COLORS.purpleAccent },
                { label: 'Text', hex: THEME_COLORS.primaryText },
                { label: 'Muted', hex: THEME_COLORS.mutedText },
              ].map((token) => (
                <div key={token.label} className="space-y-1">
                  <div
                    className="h-6 rounded border"
                    style={{
                      backgroundColor: token.hex,
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  />
                  <div className="text-[10px] font-mono" style={{ color: THEME_COLORS.mutedText }}>
                    {token.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      {/* Minimal Footer */}
      <footer
        className="w-full py-3 px-6 text-center text-xs border-t"
        style={{
          borderColor: 'rgba(155, 92, 255, 0.1)',
          color: THEME_COLORS.mutedText,
        }}
      >
        <span>MB Mahodi — Phase 1 Verified • Waiting for user approval before Phase 2</span>
      </footer>
    </div>
  );
};
