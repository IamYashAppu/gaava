import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import predictiveVideo from '../assets/predictive.mp4';
import mlVideo from '../assets/ml.mp4';
import mernVideo from '../assets/mern.mp4';
import agenticVideo from '../assets/agentic.mp4';

const Capabilities = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Varied vertical parallax speeds for each block
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y4 = useTransform(scrollYProgress, [0, 1], [250, -250]);

  return (
    <section id="capabilities" ref={containerRef} className="py-32 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <motion.div 
          initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Core Capabilities</h2>
          <p className="text-muted text-xl max-w-2xl mx-auto">Integrated systems driven by custom intelligence architectures.</p>
        </motion.div>

        {/* Block 1: Full width 16:9 Landscape */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ y: y1 }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group"
        >
          <video autoPlay loop muted playsInline className="object-cover w-full h-full absolute inset-0">
            <source src={predictiveVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-10 left-10 max-w-xl pointer-events-none">
            <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">Predictive Market Forecasting Engines</h3>
            <p className="text-white/80 text-lg drop-shadow-md">Proprietary models that analyze multi-dimensional datasets to anticipate market shifts before they happen.</p>
          </div>
          
          {/* Liquidy Blob Watermark */}
          <div className="absolute bottom-8 right-8 flex items-center justify-center pointer-events-none z-20 w-28 h-28">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] [animation:spin_12s_linear_infinite] shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
            <div className="absolute inset-2 bg-blue-500/10 backdrop-blur-md rounded-[60%_40%_30%_70%/50%_60%_40%_50%] [animation:spin_8s_linear_infinite_reverse]" />
            <div className="relative font-tech text-white tracking-[0.3em] text-xs font-bold drop-shadow-md">GAAVA</div>
          </div>
        </motion.div>

        {/* Block 2 & 3: Split Row 50/50 9:16 Vertical */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Block 2 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ y: y2 }}
            className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <video autoPlay loop muted playsInline className="object-cover w-full h-full absolute inset-0">
              <source src={mlVideo} type="video/mp4" />
            </video>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] backdrop-blur-xl bg-black/40 border border-white/10 p-8 rounded-2xl pointer-events-none">
              <h3 className="text-2xl font-bold text-white mb-3">ML-Powered Quality Assurance</h3>
              <p className="text-white/70 text-lg">High-precision computer vision pipelines that detect anomalies and enforce quality standards at scale.</p>
            </div>
          </motion.div>

          {/* Block 3 */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: y3 }}
            className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <video autoPlay loop muted playsInline className="object-cover w-full h-full absolute inset-0">
              <source src={mernVideo} type="video/mp4" />
            </video>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] backdrop-blur-xl bg-black/40 border border-white/10 p-8 rounded-2xl pointer-events-none">
              <h3 className="text-2xl font-bold text-white mb-3">Secure, Scalable MERN Architectures</h3>
              <p className="text-white/70 text-lg">Enterprise-grade infrastructure designed for zero-downtime, maximum security, and rapid global scaling.</p>
            </div>
          </motion.div>
        </div>

        {/* Block 4: Bottom Offset 16:9 Landscape */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ y: y4 }}
          className="flex flex-col md:flex-row items-center gap-12 w-full mt-8"
        >
          <div className="w-full md:w-[35%] pl-4 md:pl-8">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">Agentic AI for Autonomous Field Operations</h3>
            <p className="text-muted text-lg leading-relaxed">Self-correcting, autonomous agents capable of managing complex, real-world logistical deployments without human intervention.</p>
          </div>
          <div className="relative w-full md:w-[65%] aspect-video rounded-3xl overflow-hidden shadow-2xl ml-auto">
            <video autoPlay loop muted playsInline className="object-cover w-full h-full absolute inset-0">
              <source src={agenticVideo} type="video/mp4" />
            </video>
            {/* Liquidy Blob Watermark */}
            <div className="absolute bottom-6 right-6 flex items-center justify-center pointer-events-none z-20 w-24 h-24">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] [animation:spin_12s_linear_infinite] shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
              <div className="absolute inset-2 bg-blue-500/10 backdrop-blur-md rounded-[60%_40%_30%_70%/50%_60%_40%_50%] [animation:spin_8s_linear_infinite_reverse]" />
              <div className="relative font-tech text-white tracking-[0.3em] text-xs font-bold drop-shadow-md">GAAVA</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Capabilities;
