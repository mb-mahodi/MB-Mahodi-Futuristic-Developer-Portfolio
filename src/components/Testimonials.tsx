import React from 'react';
import { motion } from 'framer-motion';

interface Feedback {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  avatarColor: string;
  avatarInitials: string;
}

const feedbacks: Feedback[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    avatarColor: '#ec4899',
    avatarInitials: 'SL',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    avatarColor: '#38bdf8',
    avatarInitials: 'CB',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    avatarColor: '#34d399',
    avatarInitials: 'LW',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full px-6 sm:px-16 py-16 relative z-10">
      <div className="w-full max-w-4xl mx-auto">
        {/* Outer Card Container matching Screenshot 6 */}
        <div className="bg-[#100d25] rounded-[20px] pb-14">
          {/* Top Header Section */}
          <div className="bg-[#151030] rounded-2xl min-h-[260px] p-8 sm:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[12px] sm:text-[14px] text-[#aaa6c3] uppercase tracking-widest font-semibold">
                What others say
              </p>
              <h2 className="text-white font-black text-[28px] xs:text-[34px] sm:text-[42px] md:text-[46px] tracking-tight">
                Testimonials.
              </h2>
            </motion.div>
          </div>

        {/* 3 Feedback Cards Grid Overlapping Header */}
        <div className="-mt-20 px-8 sm:px-12 flex flex-wrap gap-7 justify-center">
          {feedbacks.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#090325] p-10 rounded-3xl xs:w-[320px] w-full flex flex-col justify-between shadow-2xl border border-white/5"
            >
              {/* Giant White Quote Mark */}
              <p className="text-white font-black text-[48px] leading-none select-none">"</p>

              {/* Quote Content */}
              <div className="mt-1">
                <p className="text-white tracking-wider text-[17px] leading-[26px]">
                  {item.testimonial}
                </p>

                {/* Author Info & Avatar */}
                <div className="mt-7 flex justify-between items-center gap-1 pt-4 border-t border-white/10">
                  <div className="flex-1 flex flex-col">
                    <p className="text-white font-medium text-[16px]">
                      <span className="text-blue-400">@</span> {item.name}
                    </p>
                    <p className="mt-1 text-[#aaa6c3] text-[12px]">
                      {item.designation} of {item.company}
                    </p>
                  </div>

                  {/* Circular Avatar Portrait */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-white border-2 border-white/20 shadow-md"
                    style={{ backgroundColor: item.avatarColor }}
                  >
                    {item.avatarInitials}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
};
