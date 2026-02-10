import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto relative">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className={`material-icons-outlined transition-colors ${status === 'error' ? 'text-red-500' : 'text-gray-400 group-focus-within:text-primary'}`}>
              mail
            </span>
          </div>
          <input 
            type="email" 
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
            }}
            disabled={status === 'loading' || status === 'success'}
            className={`w-full pl-10 pr-4 py-3 bg-black/30 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all backdrop-blur-md ${
                status === 'error' ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10'
            }`}
            placeholder={status === 'success' ? "You're on the list!" : "Enter your email"}
          />
        </div>
        <button 
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={`
            bg-gradient-to-r from-primary to-orange-600 hover:from-orange-500 hover:to-orange-700 
            text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 
            shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] 
            flex items-center justify-center gap-2 transform hover:-translate-y-0.5
            disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
          `}
        >
          {status === 'loading' ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : status === 'success' ? (
             <>
               <span>SAVED</span>
               <span className="material-icons-outlined text-sm">check</span>
             </>
          ) : (
             <>
               <span>NOTIFY ME</span>
               <span className="material-icons-outlined text-sm">notifications_active</span>
             </>
          )}
        </button>
      </form>
      <p className="mt-4 text-xs text-blue-200/60 font-mono">
        {status === 'success' 
            ? "Thanks! I'll let you know when the site goes live." 
            : "Be the first to know when my new portfolio drops."}
      </p>
    </div>
  );
};

export default NewsletterForm;