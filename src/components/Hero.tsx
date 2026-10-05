import React, { useState, useEffect } from 'react';
import { DeskCanvas } from './canvas/DeskCanvas';

const TYPING_PHRASES = [
  'MB Mahodi',
  'a 3D Developer',
  'a Artist',
  'a Prompt Engineer',
  'a INTJ-A',
];

export const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentPhrase) {
      // Pause at full word: longer on the name, brisk on titles
      const pauseDuration = phraseIndex === 0 ? 2800 : 1800;
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === '') {
      // Word completely deleted: advance to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
    } else {
      // Natural typewriter rhythm: 90ms typing, 45ms deleting
      const speed = isDeleting ? 45 : 95;
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);
  return (
    <section className="relative w-full h-screen min-h-[660px] flex flex-col justify-between overflow-hidden bg-[#0b0c10]">
      {/* 1. BACKGROUND NEON CONTOUR LINES (#1 Theme & Background) */}
      <div className="absolute right-0 top-0 w-full lg:w-[68%] h-full pointer-events-none opacity-45 z-0 overflow-hidden">
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full object-cover"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="url(#purpleWaveGrad)" strokeWidth="1.2" opacity="0.75">
            {[...Array(34)].map((_, i) => (
              <path
                key={i}
                d={`M ${560 + i * 15} -80 C ${460 + i * 17} 220, ${970 - i * 13} 430, ${680 + i * 12} 720 C ${520 - i * 9} 920, ${820 + i * 10} 1060, 1140 1140`}
                fill="none"
              />
            ))}
          </g>
          <defs>
            <linearGradient id="purpleWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#915eff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#915eff]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 2. TOP-LEFT HERO TEXT BLOCK (Aligned identically with Navbar and Overview) */}
      <div className="w-full px-6 sm:px-16 pt-[95px] sm:pt-[110px] pb-2 z-20 shrink-0 select-none">
        <div className="w-full max-w-4xl mx-auto flex flex-row items-start gap-4 sm:gap-5">
          {/* Left Vertical Pin Indicator */}
          <div className="flex flex-col justify-center items-center mt-2.5 shrink-0">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915eff] shadow-[0_0_15px_#915eff]" />
            <div className="w-1 h-28 sm:h-44 violet-gradient" />
          </div>

          {/* Headline & Description */}
          <div>
            <h1 className="font-black text-white lg:text-[64px] sm:text-[50px] xs:text-[38px] text-[32px] lg:leading-[78px] tracking-tight min-h-[1.2em] flex flex-wrap items-baseline">
              <span>Hi, I'm&nbsp;</span>
              <span className="bg-gradient-to-r from-[#915eff] via-[#a855f7] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(145,94,255,0.45)]">
                {displayText || '\u00A0'}
              </span>
              <span
                className="inline-block w-[3.5px] lg:w-[5px] h-[0.8em] ml-1 bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] animate-pulse align-middle"
                aria-hidden="true"
              />
            </h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[18px] xs:text-[16px] text-[14px] lg:leading-[30px] mt-1 font-sans tracking-wide">
              I develop 3D visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>
          </div>
        </div>
      </div>

      {/* 3. 3D COMPUTERS CANVAS SETUP (Positioned strictly below the text block in lower-middle section) */}
      <div className="relative w-full flex-1 min-h-[320px] z-10 flex items-center justify-center overflow-hidden">
        <DeskCanvas />
      </div>
    </section>
  );
};
