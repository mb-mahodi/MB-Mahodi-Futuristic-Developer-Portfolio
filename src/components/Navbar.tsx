import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [active, setActive] = useState('About');
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'work', title: 'Work' },
    { id: 'contact', title: 'Contact' },
  ];

  const handleNavClick = (id: string, title: string) => {
    setActive(title);
    setToggle(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 px-6 sm:px-16 ${
        scrolled ? 'bg-[#050816]/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-4xl mx-auto">
        {/* Left: Brand Monogram & Title matching Screenshot 1 */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          {/* Red/Crimson rounded square logo matching screenshot */}
          <div className="w-9 h-9 rounded-xl bg-[#e11d48] flex items-center justify-center text-white font-extrabold text-base shadow-[0_0_15px_rgba(225,29,72,0.5)] group-hover:scale-105 transition-transform">
            M
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center tracking-tight">
            MB Mahodi &nbsp;
            <span className="sm:block hidden text-white font-bold text-[18px]">
              | Portfolio
            </span>
          </p>
        </a>

        {/* Right Desktop Nav Links & Resource Pill */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white font-semibold' : 'text-[#aaa6c3]'
                } hover:text-white text-[16px] font-medium cursor-pointer transition-colors`}
                onClick={() => handleNavClick(link.id, link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle Navigation"
            className="p-2 text-white"
          >
            {toggle ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className="p-6 bg-[#100d25] border border-white/10 absolute top-20 right-4 mx-4 my-2 min-w-[160px] z-50 rounded-2xl shadow-2xl"
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`font-medium cursor-pointer text-[15px] ${
                        active === link.title ? 'text-[#915eff]' : 'text-[#aaa6c3]'
                      }`}
                      onClick={() => handleNavClick(link.id, link.title)}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};
