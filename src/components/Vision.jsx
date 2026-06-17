import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section id="vision" className="py-40 px-4 relative overflow-hidden bg-black flex items-center justify-center">
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-[150px] pointer-events-none" 
      />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, scale: 1.1 },
            visible: { 
              opacity: 1, 
              scale: 1, 
              transition: { staggerChildren: 0.3, duration: 1.5, ease: "easeOut" } 
            }
          }}
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, filter: "blur(20px)", y: 30 },
              visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1.2, type: "spring" } }
            }}
            className="text-5xl md:text-7xl font-bold text-primary mb-10 drop-shadow-2xl"
          >
            Our Vision: Tech for Human Potential.
          </motion.h2>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } }
            }}
            className="text-2xl text-muted leading-relaxed max-w-4xl mx-auto"
          >
            We believe that true innovation shouldn't replace humans, but elevate them. Gaava is dedicated to empowering essential workforces, radically increasing operational efficiency, and building resilient infrastructure using deep intelligence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
