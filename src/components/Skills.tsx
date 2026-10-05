import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Atom,
  FileCode2,
  Palette,
  Box,
  Sparkles,
  Layout,
  Code2,
  Terminal,
  Binary,
  Database,
  Cpu,
  Radio,
  Gauge,
  GitFork,
  ScanEye,
  Brain,
  Sparkle,
  Layers,
  GitBranch,
  Zap,
  TerminalSquare,
  Send,
} from 'lucide-react';
import { skillsData, skillCategories } from '../data/skills';

const iconMap: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Atom,
  FileCode2,
  Palette,
  Box,
  Sparkles,
  Layout,
  Code2,
  Terminal,
  Binary,
  Database,
  Cpu,
  Microchip: Cpu,
  Radio,
  Gauge,
  GitFork,
  ScanEye,
  Brain,
  Sparkle,
  Layers,
  GitBranch,
  Zap,
  TerminalSquare,
  Send,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#6E42D9]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#9B5CFF]" />
            <span className="text-xs font-mono tracking-widest text-[#9B5CFF] uppercase font-bold">
              My Tech Arsenal
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F7F4FF] tracking-tight">
            Skills<span className="text-[#9B5CFF]">.</span>
          </h2>
          <p className="mt-3 text-[#AAA4BB] text-sm sm:text-base max-w-2xl">
            A comprehensive overview of programming languages, hardware toolchains, AI frameworks,
            and modern web engineering capabilities.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {skillCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs font-mono px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#9B5CFF] text-[#07060D] font-bold shadow-[0_0_15px_rgba(155,92,255,0.6)] scale-105'
                    : 'bg-[#100C1D] text-[#AAA4BB] hover:text-[#F7F4FF] hover:bg-[#9B5CFF]/15 border border-[#9B5CFF]/20'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Cards & Circular Badges Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.iconName] || Sparkles;

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className="group relative p-4 rounded-2xl bg-[#100C1D]/80 border border-[#9B5CFF]/20 hover:border-[#9B5CFF]/60 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(155,92,255,0.25)] transition-all cursor-pointer"
                >
                  {/* Subtle 3D Spherical Icon Container */}
                  <div
                    className="w-16 h-16 rounded-full mb-3 flex items-center justify-center relative shadow-[0_0_20px_rgba(155,92,255,0.2)] group-hover:shadow-[0_0_25px_rgba(155,92,255,0.5)] transition-all border"
                    style={{
                      backgroundColor: '#07060D',
                      borderColor: skill.color ? `${skill.color}50` : '#9B5CFF50',
                    }}
                  >
                    <IconComponent
                      className="w-8 h-8 transition-transform group-hover:rotate-6 group-hover:scale-110"
                      style={{ color: skill.color || '#9B5CFF' }}
                    />

                    {/* Circular Orbiting Accent */}
                    <div
                      className="absolute inset-0 rounded-full border border-dashed opacity-40 group-hover:opacity-100 group-hover:animate-spin"
                      style={{
                        borderColor: skill.color || '#9B5CFF',
                        animationDuration: '10s',
                      }}
                    />
                  </div>

                  {/* Skill Name */}
                  <span className="text-xs font-semibold text-[#F7F4FF] mb-1 group-hover:text-[#c49eff] transition-colors truncate w-full">
                    {skill.name}
                  </span>

                  {/* Category Muted Label */}
                  <span className="text-[10px] font-mono text-[#AAA4BB]/70 mb-2 truncate w-full">
                    {skill.category}
                  </span>

                  {/* Proficiency Meter */}
                  <div className="w-full bg-[#07060D] h-1.5 rounded-full overflow-hidden border border-[#9B5CFF]/15">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: skill.color || '#9B5CFF',
                        boxShadow: `0 0 8px ${skill.color || '#9B5CFF'}`,
                      }}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-[#AAA4BB] mt-1">
                    {skill.level}%
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
