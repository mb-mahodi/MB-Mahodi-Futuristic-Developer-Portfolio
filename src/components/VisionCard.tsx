import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Bot, Brain, Compass, Code2 } from 'lucide-react';
import { VisionCardItem } from '../data/about';

interface VisionCardProps {
  card: VisionCardItem;
  index: number;
}

const iconMap = {
  robotics: Bot,
  ai: Brain,
  creativeTech: Compass,
  webDev: Code2,
};

export const VisionCard: React.FC<VisionCardProps> = ({ card, index }) => {
  const shouldReduceMotion = useReducedMotion();
  const IconComponent = iconMap[card.iconName];

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.6,
        delay: shouldReduceMotion ? 0 : 0.15 + index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -6,
              transition: { duration: 0.25, ease: 'easeOut' },
            }
      }
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#100C1D]/80 backdrop-blur-xs border border-white/10 hover:border-[#9B5CFF]/60 transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_32px_rgba(155,92,255,0.12)] overflow-hidden"
    >
      {/* Subtle hover gradient illumination */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9B5CFF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Top row: Icon and Domain Tag */}
      <div className="relative z-10 flex items-center justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-[#07060D] border border-white/10 group-hover:border-[#9B5CFF]/50 flex items-center justify-center text-[#9B5CFF] shadow-inner transition-all duration-300">
          <IconComponent
            className={`w-6 h-6 transition-transform duration-300 ${
              shouldReduceMotion ? '' : 'group-hover:scale-110'
            }`}
            aria-hidden="true"
          />
        </div>
        <span className="text-[11px] font-mono tracking-wider text-[#AAA4BB]/70 uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/5 group-hover:border-[#9B5CFF]/30 group-hover:text-[#F7F4FF] transition-colors">
          {card.badge}
        </span>
      </div>

      {/* Body: Title and Description */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-[#F7F4FF] group-hover:text-white transition-colors mb-2 tracking-tight">
          {card.title}
        </h3>
        <p className="text-sm text-[#AAA4BB] group-hover:text-[#AAA4BB]/95 leading-relaxed transition-colors">
          {card.description}
        </p>
      </div>

      {/* Bottom accent indicator */}
      <div className="relative z-10 pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-mono text-[#AAA4BB]/60 group-hover:text-[#9B5CFF] transition-colors flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9B5CFF]/40 group-hover:bg-[#9B5CFF] group-hover:scale-125 transition-all" />
          <span>Synthesis Focus</span>
        </span>
      </div>
    </motion.article>
  );
};
