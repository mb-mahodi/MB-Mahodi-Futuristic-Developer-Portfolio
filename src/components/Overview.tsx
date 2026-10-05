import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// 3D Gem / Polyhedral Icons matching Screenshot 2
const GemWebIcon: React.FC = () => (
  <svg width="68" height="68" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,10 85,35 72,85 28,85 15,35" fill="url(#gemWebGrad1)" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" />
    <polygon points="50,10 50,55 85,35" fill="url(#gemWebGrad2)" />
    <polygon points="50,10 15,35 50,55" fill="url(#gemWebGrad3)" />
    <polygon points="15,35 28,85 50,55" fill="url(#gemWebGrad4)" />
    <polygon points="85,35 50,55 72,85" fill="url(#gemWebGrad5)" />
    <polygon points="28,85 50,55 72,85" fill="url(#gemWebGrad6)" />
    <defs>
      <linearGradient id="gemWebGrad1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#ec4899" /></linearGradient>
      <linearGradient id="gemWebGrad2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#c084fc" /></linearGradient>
      <linearGradient id="gemWebGrad3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#818cf8" /></linearGradient>
      <linearGradient id="gemWebGrad4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#3b82f6" /></linearGradient>
      <linearGradient id="gemWebGrad5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ec4899" /><stop offset="100%" stopColor="#a855f7" /></linearGradient>
      <linearGradient id="gemWebGrad6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#a855f7" /></linearGradient>
    </defs>
  </svg>
);

const GemNativeIcon: React.FC = () => (
  <svg width="68" height="68" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,15 65,38 90,45 70,68 76,92 50,78 24,92 30,68 10,45 35,38" fill="url(#gemNatGrad1)" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" />
    <polygon points="50,15 50,55 65,38" fill="url(#gemNatGrad2)" />
    <polygon points="65,38 50,55 90,45" fill="url(#gemNatGrad3)" />
    <polygon points="90,45 50,55 70,68" fill="url(#gemNatGrad4)" />
    <polygon points="70,68 50,55 76,92" fill="url(#gemNatGrad5)" />
    <polygon points="76,92 50,55 50,78" fill="url(#gemNatGrad6)" />
    <polygon points="24,92 50,55 30,68" fill="url(#gemNatGrad2)" />
    <polygon points="30,68 50,55 10,45" fill="url(#gemNatGrad3)" />
    <polygon points="10,45 50,55 35,38" fill="url(#gemNatGrad4)" />
    <polygon points="35,38 50,55 50,15" fill="url(#gemNatGrad5)" />
    <defs>
      <linearGradient id="gemNatGrad1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#38bdf8" /></linearGradient>
      <linearGradient id="gemNatGrad2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient>
      <linearGradient id="gemNatGrad3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2dd4bf" /><stop offset="100%" stopColor="#38bdf8" /></linearGradient>
      <linearGradient id="gemNatGrad4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#059669" /><stop offset="100%" stopColor="#0284c7" /></linearGradient>
      <linearGradient id="gemNatGrad5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#0ea5e9" /></linearGradient>
      <linearGradient id="gemNatGrad6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#047857" /><stop offset="100%" stopColor="#0369a1" /></linearGradient>
    </defs>
  </svg>
);

const GemBackendIcon: React.FC = () => (
  <svg width="68" height="68" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="38" fill="url(#gemBackGrad1)" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.5" />
    <path d="M 20 50 Q 50 20 80 50 Q 50 80 20 50 Z" fill="url(#gemBackGrad2)" opacity="0.8" />
    <path d="M 50 20 Q 80 50 50 80 Q 20 50 50 20 Z" fill="url(#gemBackGrad3)" opacity="0.8" />
    <polygon points="50,22 72,42 64,72 36,72 28,42" fill="url(#gemBackGrad4)" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
    <defs>
      <linearGradient id="gemBackGrad1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#38bdf8" /></linearGradient>
      <linearGradient id="gemBackGrad2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#c084fc" /></linearGradient>
      <linearGradient id="gemBackGrad3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f46e5" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient>
      <linearGradient id="gemBackGrad4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#a855f7" /><stop offset="100%" stopColor="#6366f1" /></linearGradient>
    </defs>
  </svg>
);

const GemCreatorIcon: React.FC = () => (
  <svg width="68" height="68" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="25" width="50" height="50" rx="8" transform="rotate(45 50 50)" fill="url(#gemCreGrad1)" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" />
    <polygon points="50,15 70,40 50,55 30,40" fill="url(#gemCreGrad2)" />
    <polygon points="85,50 60,70 50,55 60,30" fill="url(#gemCreGrad3)" />
    <polygon points="50,85 30,60 50,55 70,60" fill="url(#gemCreGrad4)" />
    <polygon points="15,50 40,30 50,55 40,70" fill="url(#gemCreGrad5)" />
    <defs>
      <linearGradient id="gemCreGrad1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ec4899" /><stop offset="100%" stopColor="#8b5cf6" /></linearGradient>
      <linearGradient id="gemCreGrad2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f43f5e" /><stop offset="100%" stopColor="#a855f7" /></linearGradient>
      <linearGradient id="gemCreGrad3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fb7185" /><stop offset="100%" stopColor="#c084fc" /></linearGradient>
      <linearGradient id="gemCreGrad4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e11d48" /><stop offset="100%" stopColor="#7c3aed" /></linearGradient>
      <linearGradient id="gemCreGrad5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#be123c" /><stop offset="100%" stopColor="#6d28d9" /></linearGradient>
    </defs>
  </svg>
);

const services = [
  { title: 'AI Web Developer', Icon: GemWebIcon },
  { title: 'Prompt Engineer', Icon: GemNativeIcon },
  { title: 'Artist', Icon: GemBackendIcon },
  { title: 'Graphics designer', Icon: GemCreatorIcon },
];

interface TiltCardProps {
  title: string;
  Icon: React.FC;
  index: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ title, Icon, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Normalized cursor coordinates (-1 to 1)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Highly responsive, buttery smooth spring physics
  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 22, mass: 0.3 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 22, mass: 0.3 });

  // Tilt animation matching user's exact specification:
  // Cursor over any side -> that side dips/depresses inward into the screen, opposite side lifts up!
  // Top (y < 0): top dips in, bottom lifts up -> rotateX is positive
  // Bottom (y > 0): bottom dips in, top lifts up -> rotateX is negative
  // Left (x < 0): left dips in, right lifts up -> rotateY is negative
  // Right (x > 0): right dips in, left lifts up -> rotateY is positive
  const rotateX = useTransform(mouseYSpring, [-1, 1], [22, -22]);
  const rotateY = useTransform(mouseXSpring, [-1, 1], [-22, 22]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize from -1 to 1
    const xPct = Math.max(-1, Math.min(1, (mouseX / width - 0.5) * 2));
    const yPct = Math.max(-1, Math.min(1, (mouseY / height - 0.5) * 2));

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Smoothly spring back to rest position (0, 0)
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="w-full [perspective:1000px] green-pink-gradient p-[1px] rounded-[20px] shadow-2xl cursor-pointer select-none transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(145,94,255,0.3)]"
    >
      <div
        style={{ transformStyle: 'preserve-3d' }}
        className="relative bg-[#151030] rounded-[20px] py-7 px-4 min-h-[260px] flex justify-evenly items-center flex-col shadow-inner overflow-hidden"
      >
        {/* Subtle ambient sheen */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[20px] opacity-35 mix-blend-overlay"
          style={{
            background:
              'radial-gradient(circle at 50% 10%, rgba(255,255,255,0.2), transparent 75%)',
          }}
        />

        {/* 3D Floating Gem Icon */}
        <div
          style={{ transform: 'translateZ(45px)' }}
          className="w-14 h-14 flex items-center justify-center filter drop-shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-transform"
        >
          <Icon />
        </div>

        {/* 3D Floating Title */}
        <h3
          style={{ transform: 'translateZ(35px)' }}
          className="text-white text-[17px] sm:text-[18px] font-bold text-center mt-3 tracking-wide"
        >
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export const Overview: React.FC = () => {
  return (
    <section id="about" className="w-full px-6 sm:px-16 py-16 sm:py-20 relative z-10">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header matching Screenshot 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[12px] sm:text-[14px] text-[#aaa6c3] uppercase tracking-widest font-semibold">
            Introduction
          </p>
          <h2 className="text-white font-black text-[28px] xs:text-[34px] sm:text-[42px] md:text-[46px] tracking-tight">
            Overview.
          </h2>
        </motion.div>

        {/* Description paragraph matching Screenshot 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3.5 text-[#aaa6c3] text-[14px] sm:text-[15.5px] max-w-3xl leading-[25px] sm:leading-[28px]"
        >
          I'm a skilled software developer with experience in TypeScript and JavaScript, and
          expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and
          collaborate closely with clients to create efficient, scalable, and user-friendly solutions
          that solve real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        {/* 4 Cards Grid with Smooth 3D Tilt Effect */}
        <div className="mt-14 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => (
            <TiltCard
              key={service.title}
              title={service.title}
              Icon={service.Icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
