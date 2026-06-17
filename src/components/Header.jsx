import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrambleText from './ScrambleText';

const navItems = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'capabilities', label: 'Capabilities', href: '#capabilities' },
  { id: 'vision', label: 'Our Vision', href: '#vision' },
  { id: 'team', label: 'The Team', href: '#team' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[60] flex items-center justify-center p-1.5 rounded-full transition-all duration-500 ${isScrolled ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl' : 'bg-white/5 backdrop-blur-md border border-white/10'}`}
      >
        <nav 
          className="flex items-center space-x-1"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {navItems.map((item) => {
            const isHovered = hoveredNav === item.id;
            return (
              <a 
                key={item.id}
                href={item.href} 
                onMouseEnter={() => setHoveredNav(item.id)}
                className="relative px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium transition-colors z-10 flex items-center gap-2 rounded-full"
                style={{ color: isHovered ? '#000000' : 'rgba(255,255,255,0.6)' }}
              >
                {isHovered && (
                  <motion.div 
                    layoutId="nav-bubble"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {isHovered && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </motion.header>

      {/* Massive Gaava Logo transitioning on scroll */}
      <motion.div
        className="fixed z-[60] pointer-events-none flex items-center justify-center"
        initial={false}
        animate={{
          top: isScrolled ? "1.5rem" : "50vh",
          left: isScrolled ? "2rem" : "50%",
          x: isScrolled ? "0%" : "-50%",
          y: isScrolled ? "0%" : "-50%",
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.a 
          href="#"
          className={`font-tech tracking-widest text-primary pointer-events-auto block transition-opacity duration-500 ${isScrolled ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}
          animate={{
            fontSize: isScrolled ? "1.5rem" : "clamp(3.5rem, 15vw, 8rem)",
            lineHeight: isScrolled ? "2rem" : "clamp(4rem, 15vw, 8rem)",
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ScrambleText text="GAAVA" trigger={isScrolled} />
        </motion.a>
      </motion.div>
    </>
  );
};

export default Header;
