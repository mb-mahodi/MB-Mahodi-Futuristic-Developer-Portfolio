import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EarthCanvas } from './canvas/EarthCanvas';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div id="contact" className="w-full px-6 sm:px-16 py-20 relative z-10">
      <div className="w-full max-w-4xl mx-auto">
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-center">
          {/* Left Form Column matching Screenshot 7 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-[0.75] bg-[#100d25] p-8 rounded-2xl w-full border border-white/5 shadow-2xl"
          >
            <p className="text-[12px] sm:text-[14px] text-[#aaa6c3] uppercase tracking-widest font-semibold">
              Get in touch
            </p>
            <h3 className="text-white font-black text-[28px] xs:text-[34px] sm:text-[42px] md:text-[46px] tracking-tight">
              Contact.
            </h3>

          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            {/* Name Field */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                required
                className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3]/60 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915eff]"
              />
            </label>

            {/* Email Field */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                required
                className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3]/60 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915eff]"
              />
            </label>

            {/* Message Field */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                required
                className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3]/60 text-white rounded-lg outline-none border-none font-medium resize-none focus:ring-2 focus:ring-[#915eff]"
              />
            </label>

            {/* Send Button */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#151030] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#1d1836] hover:text-[#915eff] transition-all cursor-pointer border border-white/5 active:scale-95 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>

              <AnimatePresence>
                {success && (
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-emerald-400 text-sm font-medium font-mono"
                  >
                    ✓ Message received! Thank you.
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>

        {/* Right 3D Earth Canvas Column matching Screenshot 7 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[380px] w-full flex items-center justify-center"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  </div>
);
};
