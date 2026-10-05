import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { aboutData } from '../data/about';
import { VisionCard } from './VisionCard';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isTransformed, setIsTransformed] = useState(false);

  // Subtle cyclic transformation: "Think ordinary." -> "Think beyond ordinary."
  useEffect(() => {
    if (shouldReduceMotion) {
      setIsTransformed(true);
      return;
    }

    const timer = setInterval(() => {
      setIsTransformed((prev) => !prev);
    }, 3800);

    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full py-28 sm:py-36 overflow-hidden bg-[#07060D] text-[#F7F4FF]"
    >
      {/* Seamless transition gradient from Hero into About */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050816] via-[#050816]/70 to-transparent pointer-events-none z-0" />

      {/* Subtle ambient light field */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#9B5CFF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#6E42D9]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Conceptual Pipeline: Ideas → Perspective → Technology → Creation */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-8 flex items-center flex-wrap gap-2 sm:gap-3 text-xs font-mono text-[#AAA4BB]/70"
          aria-label="Creative philosophy pipeline"
        >
          {aboutData.pipeline.map((stage, idx) => (
            <React.Fragment key={stage}>
              <span className="px-2.5 py-1 rounded-md bg-[#100C1D] border border-white/5 text-[#AAA4BB] hover:text-[#9B5CFF] hover:border-[#9B5CFF]/30 transition-colors">
                {stage}
              </span>
              {idx < aboutData.pipeline.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-[#9B5CFF]/60 shrink-0" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Conceptual Narrative & Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: 0.1 }}
              className="flex items-center gap-2.5 mb-3"
            >
              <span className="w-6 h-[2px] bg-[#9B5CFF]" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-mono tracking-widest text-[#9B5CFF] uppercase font-bold">
                {aboutData.eyebrow}
              </p>
            </motion.div>

            {/* 2. Large Heading */}
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: 0.15 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F7F4FF] tracking-tight leading-[1.15]"
            >
              {aboutData.heading}
              <span className="text-[#9B5CFF]">.</span>
            </motion.h2>

            {/* 3. Thoughtful Narrative Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: 0.2 }}
              className="mt-6 space-y-4 text-sm sm:text-base text-[#AAA4BB] leading-relaxed"
            >
              <p>{aboutData.introPrimary}</p>
              <p className="text-[#AAA4BB]/90 italic border-l-2 border-[#9B5CFF]/40 pl-4 py-0.5">
                "{aboutData.introSecondary}"
              </p>
            </motion.div>

            {/* 4. "Think Differently" Visual Transformation */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: 0.25 }}
              className="mt-10 p-5 rounded-2xl bg-[#100C1D]/60 border border-white/10 relative overflow-hidden group select-none cursor-pointer"
              onClick={() => setIsTransformed((prev) => !prev)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsTransformed((prev) => !prev);
                }
              }}
              aria-label="Interactive philosophy: click to transform thinking statement"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#AAA4BB]/60 mb-2">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#9B5CFF]" />
                  <span>PERSPECTIVE SHIFT</span>
                </span>
                <span className="text-[10px] text-[#9B5CFF]/70 group-hover:text-[#9B5CFF] transition-colors">
                  Tap to toggle
                </span>
              </div>

              <div className="h-9 flex items-center font-mono text-base sm:text-lg font-semibold tracking-wide">
                <span className="text-[#F7F4FF] mr-2">Think</span>
                <div className="relative min-w-[150px] inline-block">
                  <AnimatePresence mode="wait">
                    {!isTransformed ? (
                      <motion.span
                        key="ordinary"
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="text-[#AAA4BB] line-through decoration-[#9B5CFF]/60"
                      >
                        ordinary.
                      </motion.span>
                    ) : (
                      <motion.span
                        key="beyond-ordinary"
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="text-[#9B5CFF] drop-shadow-[0_0_12px_rgba(155,92,255,0.4)]"
                      >
                        beyond ordinary.
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Subtle animated accent line */}
              <div className="mt-3 w-full h-[1px] bg-gradient-to-r from-[#9B5CFF]/40 via-[#9B5CFF]/10 to-transparent" />
            </motion.div>
          </div>

          {/* Right Column: 2x2 Vision Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {aboutData.visionCards.map((card, index) => (
                <VisionCard key={card.id} card={card} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
