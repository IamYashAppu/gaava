import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Challenge = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="challenge" className="py-32 px-4 bg-black overflow-hidden relative">
      <motion.div 
        style={{ y }} 
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" 
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.4 }
            }
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 50, skewY: 5 },
              visible: { opacity: 1, y: 0, skewY: 0, transition: { type: "spring", stiffness: 40, damping: 15 } }
            }}
            className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight"
          >
            Re-engineering<br/>High-Impact Sectors.
          </motion.h2>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 40, damping: 15 } }
            }}
            className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed"
          >
            We tackle the systemic inefficiencies that legacy software ignores. From resolving extreme information asymmetry to optimizing heavily fragmented supply chains, we build the connective tissue that reduces operational overhead in physical-digital workflows.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;
