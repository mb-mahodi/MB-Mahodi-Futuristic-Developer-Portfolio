import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: 'starbucks',
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: 'tesla',
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: 'shopify',
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: 'meta',
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

// SVG Logos matching the reference timeline
const BrandLogo: React.FC<{ type: string }> = ({ type }) => {
  if (type === 'starbucks') {
    return (
      <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" fill="#006241" />
        <circle cx="50" cy="50" r="38" stroke="#ffffff" strokeWidth="3" />
        <path d="M 50 25 L 53 35 L 63 35 L 55 42 L 58 52 L 50 45 L 42 52 L 45 42 L 37 35 L 47 35 Z" fill="#ffffff" />
        <circle cx="50" cy="62" r="10" fill="#ffffff" />
      </svg>
    );
  }
  if (type === 'tesla') {
    return (
      <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
        <path d="M 20 28 Q 50 20 80 28 L 78 35 Q 50 28 22 35 Z" fill="#e82127" />
        <path d="M 45 35 L 55 35 L 52 75 L 48 75 Z" fill="#e82127" />
        <path d="M 50 25 Q 35 25 32 38 Q 42 34 50 34 Q 58 34 68 38 Q 65 25 50 25 Z" fill="#e82127" />
      </svg>
    );
  }
  if (type === 'shopify') {
    return (
      <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
        <path d="M 35 25 L 65 25 L 75 80 L 25 80 Z" fill="#95bf47" />
        <path d="M 50 15 Q 40 15 40 25 L 60 25 Q 60 15 50 15 Z" fill="#5e8e3e" />
        <path d="M 45 45 Q 55 35 55 50 Q 55 65 45 70" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  return (
    <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
      <path d="M 20 50 Q 35 30 50 50 Q 65 70 80 50 Q 65 30 50 50 Q 35 70 20 50 Z" fill="#0081fb" />
    </svg>
  );
};

export const Experience: React.FC = () => {
  return (
    <section id="work" className="w-full px-6 sm:px-16 py-20 relative z-10">
      <div className="w-full max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[12px] sm:text-[14px] text-[#aaa6c3] uppercase tracking-widest font-semibold">
            What I have done so far
          </p>
          <h2 className="text-white font-black text-[28px] xs:text-[34px] sm:text-[42px] md:text-[46px] tracking-tight">
            Work Experience.
          </h2>
        </motion.div>

      {/* Vertical Timeline matching Screenshot 3 */}
      <div className="mt-20 flex flex-col relative">
        {/* Central White Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)]" />

        <div className="space-y-8 sm:space-y-10">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.title + exp.date}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 1. Date label on opposite side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`hidden md:block md:w-1/2 px-7 text-[13.5px] font-semibold text-white/90 ${
                    isEven ? 'text-right' : 'text-left'
                  }`}
                >
                  <span className="font-mono text-xs tracking-wider text-[#aaa6c3] bg-white/5 py-1 px-3 rounded-full border border-white/10">
                    {exp.date}
                  </span>
                </motion.div>

                {/* 2. Circular Icon Node on Line */}
                <motion.div
                  initial={{ scale: 0.3, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 border-[3px] border-white shadow-xl cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: exp.iconBg }}
                >
                  <BrandLogo type={exp.icon} />
                </motion.div>

                {/* 3. Experience Card with Pointer Arrow */}
                <div className="ml-14 md:ml-0 md:w-1/2 md:px-7 w-full">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="relative bg-[#1d1836] p-5 sm:p-6 rounded-xl shadow-xl border-b-[3px] border-[#915eff]"
                  >
                    {/* Small arrow pointing to node on desktop */}
                    <div
                      className={`hidden md:block absolute top-5 w-0 h-0 border-y-[7px] border-y-transparent ${
                        isEven
                          ? '-right-2 border-l-[9px] border-l-[#1d1836]'
                          : '-left-2 border-r-[9px] border-r-[#1d1836]'
                      }`}
                    />

                    <div>
                      <h3 className="text-white text-[17px] sm:text-[19px] font-bold tracking-tight">
                        {exp.title}
                      </h3>
                      <p className="text-[#aaa6c3] text-[13px] sm:text-[14px] font-medium mt-0.5">
                        {exp.company_name}
                      </p>
                    </div>

                    {/* Mobile Date */}
                    <p className="md:hidden text-[11px] font-mono text-[#aaa6c3] mt-1.5 bg-white/5 inline-block px-2 py-0.5 rounded">
                      {exp.date}
                    </p>

                    {/* Bullet Points */}
                    <ul className="mt-3.5 list-disc ml-4 space-y-1.5">
                      {exp.points.map((point, pIndex) => (
                        <li
                          key={pIndex}
                          className="text-[12.5px] sm:text-[13px] pl-0.5 tracking-normal text-white/85 leading-snug"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
};
