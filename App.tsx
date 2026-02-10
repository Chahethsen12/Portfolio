import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CountdownTimer from './components/CountdownTimer';
import NewsletterForm from './components/NewsletterForm';
import StarField from './components/StarField';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-space-image">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-0"></div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/40 to-transparent z-0"></div>
        {/* Nebula effect */}
        <div className="absolute inset-0 bg-nebula-cloud opacity-60 z-0 mix-blend-screen"></div>
        
        {/* Stars */}
        <StarField />
      </div>

      {/* Floating Elements - Updated to be more 'creative/tech' focused */}
      <div className="absolute top-24 left-[10%] animate-float hidden lg:block opacity-40 z-10 rotate-12" style={{ '--tw-rotate': '12deg' } as React.CSSProperties}>
        <span className="material-icons-outlined text-6xl text-blue-300 drop-shadow-[0_0_15px_rgba(147,197,253,0.5)]">code</span>
      </div>
      <div className="absolute top-1/3 right-[5%] animate-float-delayed hidden lg:block opacity-40 z-10 -rotate-12" style={{ '--tw-rotate': '-12deg' } as React.CSSProperties}>
        <span className="material-icons-outlined text-5xl text-purple-300 drop-shadow-[0_0_15px_rgba(216,180,254,0.5)]">palette</span>
      </div>
       <div className="absolute bottom-32 left-[15%] animate-float hidden lg:block opacity-30 z-10 rotate-45" style={{ '--tw-rotate': '45deg' } as React.CSSProperties}>
        <span className="material-icons-outlined text-4xl text-emerald-300 drop-shadow-[0_0_15px_rgba(110,231,183,0.5)]">data_object</span>
      </div>

      {/* Main Layout */}
      <Header />

      <main className="relative z-40 flex-grow flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="atmospheric-glow-wrapper max-w-3xl w-full mx-auto">
          <div className="glass-panel rounded-2xl p-8 md:p-12 lg:p-16 w-full text-center transform transition-all hover:scale-[1.01] duration-500 bg-glass-dark dark:bg-[#0B0F19]/70 border-white/10 relative overflow-hidden">
            
            {/* Top highlight bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm"></div>

            <div className="mb-6 inline-block">
              <span className="bg-primary/10 border border-primary/50 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase animate-pulse-glow shadow-[0_0_10px_rgba(255,107,0,0.2)]">
                System Upgrade In Progress
              </span>
            </div>

            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl mb-4 text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] tracking-tight leading-none">
              SOMETHING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-orange-200">NEW</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              I'm currently redefining my digital presence. A new portfolio showcasing my latest projects, experiments, and thoughts is currently compiling.
            </p>

            <CountdownTimer />
            <NewsletterForm />
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;