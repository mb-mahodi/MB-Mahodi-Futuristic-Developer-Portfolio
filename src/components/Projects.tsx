import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  imageType: 'car' | 'job' | 'trip';
  source_code_link: string;
}

// Visual Mockup Graphics matching Screenshot 5
const ProjectMockup: React.FC<{ type: 'car' | 'job' | 'trip' }> = ({ type }) => {
  if (type === 'car') {
    return (
      <div className="w-full h-full bg-[#1e293b] p-4 flex flex-col justify-between rounded-2xl relative overflow-hidden select-none">
        {/* Top Navbar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-[11px] font-bold text-blue-400">MORENT</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-blue-500" />
          </div>
        </div>
        {/* Two Car Cards */}
        <div className="grid grid-cols-2 gap-2 my-2">
          <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-2.5 rounded-lg flex flex-col justify-between">
            <span className="text-[9px] font-bold text-white">The Best Platform for Car Rental</span>
            <div className="w-full h-8 flex items-center justify-center">
              <svg viewBox="0 0 120 40" className="w-full h-full" fill="none">
                <path d="M10 25 Q 30 15 50 15 Q 70 8 90 15 Q 110 20 115 25 L 115 32 L 5 32 Z" fill="#ffffff" />
                <circle cx="28" cy="30" r="7" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
                <circle cx="92" cy="30" r="7" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-lg flex flex-col justify-between">
            <span className="text-[9px] font-bold text-white">Easy way to rent a car at low price</span>
            <div className="w-full h-8 flex items-center justify-center">
              <svg viewBox="0 0 120 40" className="w-full h-full" fill="none">
                <path d="M10 25 Q 30 15 50 15 Q 70 8 90 15 Q 110 20 115 25 L 115 32 L 5 32 Z" fill="#e2e8f0" />
                <circle cx="28" cy="30" r="7" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
                <circle cx="92" cy="30" r="7" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        {/* Popular Cars Row */}
        <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-white/10">
          <div className="bg-white/5 p-1 rounded text-center"><div className="w-8 h-2 bg-white/30 rounded mx-auto" /></div>
          <div className="bg-white/5 p-1 rounded text-center"><div className="w-8 h-2 bg-white/30 rounded mx-auto" /></div>
          <div className="bg-white/5 p-1 rounded text-center"><div className="w-8 h-2 bg-white/30 rounded mx-auto" /></div>
        </div>
      </div>
    );
  }

  if (type === 'job') {
    return (
      <div className="w-full h-full bg-[#f8fafc] p-4 flex flex-col justify-between rounded-2xl relative overflow-hidden select-none text-slate-800">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <span className="text-[10px] font-bold text-slate-700">Welcome to the Job Search Platform for Developers</span>
          <div className="w-4 h-4 rounded-full bg-slate-300" />
        </div>
        {/* Search row */}
        <div className="my-2 bg-white border border-slate-200 p-2 rounded-lg shadow-sm flex items-center justify-between">
          <span className="text-[9px] text-slate-400">Search by job title or keyword...</span>
          <span className="text-[8px] bg-emerald-500 text-white px-2 py-0.5 rounded font-bold">Search</span>
        </div>
        {/* Job Listings List */}
        <div className="space-y-1.5">
          <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-[9px] text-white font-bold">G</div>
              <div>
                <p className="text-[9px] font-bold text-slate-800">Senior React Engineer</p>
                <p className="text-[8px] text-slate-400">Google • Mountain View, CA</p>
              </div>
            </div>
            <span className="text-[8px] font-semibold text-emerald-600">$160k - $210k</span>
          </div>
          <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-rose-500 flex items-center justify-center text-[9px] text-white font-bold">M</div>
              <div>
                <p className="text-[9px] font-bold text-slate-800">Full Stack TypeScript Dev</p>
                <p className="text-[8px] text-slate-400">Microsoft • Redmond, WA</p>
              </div>
            </div>
            <span className="text-[8px] font-semibold text-emerald-600">$150k - $190k</span>
          </div>
        </div>
      </div>
    );
  }

  // Trip Guide
  return (
    <div className="w-full h-full bg-[#ecfeff] p-4 flex flex-col justify-between rounded-2xl relative overflow-hidden select-none text-slate-800">
      {/* Background Resort Banner */}
      <div className="h-20 w-full rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 p-3 flex flex-col justify-between text-white relative">
        <span className="text-[11px] font-extrabold drop-shadow">Book With Us And Enjoy your Journey!</span>
        <span className="text-[8px] opacity-90">Find the best hotels, flights & excursions</span>
      </div>
      {/* Search Filter Box */}
      <div className="bg-white p-2.5 rounded-xl border border-cyan-100 shadow-sm grid grid-cols-3 gap-1.5 my-1.5 text-center">
        <div className="border-r border-slate-100 pr-1">
          <p className="text-[7px] text-slate-400">Location</p>
          <p className="text-[8px] font-bold text-slate-700">Bali, Indonesia</p>
        </div>
        <div className="border-r border-slate-100 pr-1">
          <p className="text-[7px] text-slate-400">Check-in</p>
          <p className="text-[8px] font-bold text-slate-700">12 Oct 2026</p>
        </div>
        <div>
          <p className="text-[7px] text-slate-400">Guests</p>
          <p className="text-[8px] font-bold text-slate-700">2 Adults</p>
        </div>
      </div>
      <div className="flex justify-between items-center text-[9px] font-bold text-cyan-600 pt-1">
        <span>Popular Destinations</span>
        <span className="text-slate-400 font-normal">View all →</span>
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      { name: 'react', color: '#38bdf8' },
      { name: 'mongodb', color: '#34d399' },
      { name: 'tailwind', color: '#f472b6' },
    ],
    imageType: 'car',
    source_code_link: 'https://github.com/mb-mahodi/car-rent-hub',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      { name: 'react', color: '#38bdf8' },
      { name: 'restapi', color: '#34d399' },
      { name: 'scss', color: '#f472b6' },
    ],
    imageType: 'job',
    source_code_link: 'https://github.com/mb-mahodi/job-it-portal',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      { name: 'nextjs', color: '#38bdf8' },
      { name: 'supabase', color: '#34d399' },
      { name: 'css', color: '#f472b6' },
    ],
    imageType: 'trip',
    source_code_link: 'https://github.com/mb-mahodi/trip-guide-app',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full px-6 sm:px-16 py-16 sm:py-20 relative z-10">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header matching Screenshot 5 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[12px] sm:text-[14px] text-[#aaa6c3] uppercase tracking-widest font-semibold">
            My work
          </p>
          <h2 className="text-white font-black text-[28px] xs:text-[34px] sm:text-[42px] md:text-[46px] tracking-tight">
            Projects.
          </h2>
        </motion.div>

        {/* Description paragraph matching Screenshot 5 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3.5 text-[#aaa6c3] text-[14px] sm:text-[15.5px] max-w-3xl leading-[25px] sm:leading-[28px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos in it. It
          reflects my ability to solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>

        {/* 3 Project Cards Grid matching Screenshot 5 */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-[#1d1836] p-5 rounded-2xl sm:w-[360px] w-full shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Preview Banner */}
              <div className="relative w-full h-[230px] rounded-2xl overflow-hidden shadow-lg border border-white/5">
                <ProjectMockup type={project.imageType} />

                {/* Top-Right GitHub Circular Button */}
                <div className="absolute top-3 right-3 flex justify-end">
                  <div
                    onClick={() => window.open(project.source_code_link, '_blank')}
                    className="w-10 h-10 rounded-full bg-black/80 border border-white/20 flex justify-center items-center cursor-pointer hover:scale-110 hover:border-[#915eff] transition-all shadow-md"
                  >
                    <Github className="w-1/2 h-1/2 text-white" />
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                <p className="mt-2 text-[#aaa6c3] text-[14px] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Colored Tag Hashtags */}
            <div className="mt-4 flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <p
                  key={`${project.name}-${tag.name}`}
                  className="text-[14px] font-mono"
                  style={{ color: tag.color }}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
};
