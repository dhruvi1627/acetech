import React, { useState, useEffect } from 'react';

const AnimatedHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        
        {/* Main Heading Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          
          {/* "Expert Skill" Text */}
          <div className={`transform transition-all duration-1200 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white uppercase tracking-tight leading-none font-['Bebas_Neue',Arial,sans-serif]">
              Expert Skill
            </h1>
          </div>

          {/* "Matching for" Text */}
          <div className={`transform transition-all duration-1200 delay-200 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white uppercase tracking-tight leading-none font-['Bebas_Neue',Arial,sans-serif]">
              Matching for
            </h1>
          </div>


          {/* "Your Unique Needs" Text with Purple Color */}
          <div className={`transform transition-all duration-1200 delay-400 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-purple-400 uppercase tracking-tight leading-none font-['Bebas_Neue',Arial,sans-serif]">
              Your Unique Needs
            </h1>
          </div>
        </div>

        {/* Subtitle Text (if needed) */}
        <div className={`transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-white/80 text-sm md:text-base lg:text-lg uppercase tracking-widest font-['Bebas_Neue',Arial,sans-serif] max-w-xs mx-auto">
            
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <button 
            onClick={scrollToNext}
            className="text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer group"
            aria-label="Scroll to next section"
          >
            <div className="animate-bounce">
              <svg 
                width="24" 
                height="36" 
                viewBox="0 0 23.521 35.994" 
                className="fill-current group-hover:fill-purple-400 transition-colors duration-300"
              >
                <path d="M85.019,0H82.258A10.276,10.276,0,0,0,72.083,10.586V25.407A10.277,10.277,0,0,0,82.258,35.994h2.761A10.6,10.6,0,0,0,95.6,25.407V10.586A10.6,10.6,0,0,0,85.019,0ZM83.737,5.547h.214a.606.606,0,0,1,.606.606v4.311a.606.606,0,0,1-.606.606h-.214a.606.606,0,0,1-.606-.606V6.153A.606.606,0,0,1,83.737,5.547ZM94.22,25.407a9.212,9.212,0,0,1-9.2,9.2H82.258a8.908,8.908,0,0,1-8.791-9.2V10.586a8.907,8.907,0,0,1,8.791-9.2h.885v2.87a1.994,1.994,0,0,0-1.4,1.9v4.311a1.993,1.993,0,0,0,1.4,1.9v3.562a.692.692,0,0,0,1.384,0V12.369a1.993,1.993,0,0,0,1.413-1.9V6.153a1.993,1.993,0,0,0-1.413-1.9V1.384h.492a9.211,9.211,0,0,1,9.2,9.2Z" 
                transform="translate(-72.083)" 
              />
            </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Floating particles/dots for extra visual appeal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedHeroSection;