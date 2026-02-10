import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="relative z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto w-full">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(255,107,0,0.6)]">
          <span className="material-icons-outlined text-white text-sm">terminal</span>
        </div>
        <span className="font-display font-bold text-xl tracking-wider uppercase text-white drop-shadow-md select-none">
          CHAHETH <span className="text-primary drop-shadow-[0_0_8px_rgba(255,107,0,0.8)]">SENEVIRATHNE</span>
        </span>
      </div>
      <button 
        onClick={() => window.location.href = "mailto:chahetsen12@gmail.com"}
        className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 group hover:border-primary/50 hover:shadow-[0_0_15px_rgba(255,107,0,0.3)]"
      >
        <span className="material-icons-outlined text-sm group-hover:scale-110 transition-transform text-primary">mail</span>
        <span className="text-sm font-semibold tracking-wide hidden sm:inline">GET IN TOUCH</span>
      </button>
    </nav>
  );
};

export default Header;