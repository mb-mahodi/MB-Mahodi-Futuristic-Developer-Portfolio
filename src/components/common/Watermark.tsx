import React from 'react';

export const Watermark: React.FC = () => {
  return (
    <div
      className="fixed bottom-4 right-4 z-40 select-none pointer-events-none opacity-90 hidden sm:flex items-center gap-1.5 p-1 px-2.5 rounded border border-[#38bdf8]/50 bg-[#050816]/90 backdrop-blur-sm shadow-xl shadow-black/80"
      title="JS Mastery"
    >
      <div className="w-5 h-5 rounded bg-[#181824] border border-[#38bdf8] flex items-center justify-center text-[10px] font-black text-[#38bdf8]">
        {'{JS}'}
      </div>
      <span className="text-[10px] font-black tracking-widest text-[#38bdf8]">
        MASTERY
      </span>
    </div>
  );
};
