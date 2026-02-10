import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-40 bg-black/80 backdrop-blur-xl border-t border-white/5 py-4 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <span className="flex items-center gap-2 text-orange-400/80">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(251,146,60,0.8)]"></span>
            STATUS: BUILDING
          </span>
          <span className="hidden md:inline text-gray-700">|</span>
          <span>© {new Date().getFullYear()} CHAHETH SENEVIRATHNE</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Chahethsen12" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
            <span>GITHUB</span>
          </a>
          <a href="https://www.linkedin.com/in/chaheth-senevirathne" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;