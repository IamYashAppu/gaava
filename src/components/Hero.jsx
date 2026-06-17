import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';
import ParticleNetwork from './ParticleNetwork';
import bgVideo from '../assets/bgvideo.mp4';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-[35vh] pb-24 text-center overflow-hidden">
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <ParticleNetwork />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10" />
      </div>
      
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none z-0" 
      />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: isScrolled ? 1 : 0, 
          y: isScrolled ? 0 : 30,
          pointerEvents: isScrolled ? 'auto' : 'none'
        }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto w-full"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-6 drop-shadow-2xl">
          <ScrambleText 
            text="Optimizing Essential Industries with Connective Intelligence." 
            trigger={isScrolled} 
          />
        </h1>
        <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium">
          Gaava builds full-stack, predictive AI architectures to solve logistical inefficiencies in complex, underserved sectors. We move Beyond the Wrapper.
        </p>
        <motion.div>
          <motion.button 
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden w-72 h-14 mx-auto flex items-center justify-start text-base font-semibold text-primary bg-white/5 border border-white/20 rounded-lg backdrop-blur-md z-20 pointer-events-auto transition-all duration-300 hover:bg-white/10 hover:border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <motion.div
              variants={{
                rest: { x: "0%" },
                hover: { 
                  x: "-50%", 
                  transition: { duration: 3, repeat: Infinity, ease: "linear" } 
                }
              }}
              className="flex w-max"
            >
              <span className="w-72 flex-shrink-0 flex items-center justify-center">Request Early Access</span>
              <span className="w-72 flex-shrink-0 flex items-center justify-center">Request Early Access</span>
              <span className="w-72 flex-shrink-0 flex items-center justify-center">Request Early Access</span>
              <span className="w-72 flex-shrink-0 flex items-center justify-center">Request Early Access</span>
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
