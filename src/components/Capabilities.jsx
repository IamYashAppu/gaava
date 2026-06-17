import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Cpu, Search, Lock } from 'lucide-react';

const capabilities = [
  {
    title: "Predictive Market Forecasting Engines",
    description: "Proprietary models that analyze multi-dimensional datasets to anticipate market shifts before they happen.",
    icon: <LineChart className="w-8 h-8 text-white" />
  },
  {
    title: "Agentic AI for Autonomous Field Operations",
    description: "Self-correcting, autonomous agents capable of managing complex, real-world logistical deployments.",
    icon: <Cpu className="w-8 h-8 text-white" />
  },
  {
    title: "ML-Powered Quality Assurance with Computer Vision",
    description: "High-precision computer vision pipelines that detect anomalies and enforce quality standards at scale.",
    icon: <Search className="w-8 h-8 text-white" />
  },
  {
    title: "Secure, Scalable MERN Architectures",
    description: "Enterprise-grade infrastructure designed for zero-downtime, maximum security, and rapid global scaling.",
    icon: <Lock className="w-8 h-8 text-white" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 20 },
  visible: { 
    opacity: 1, y: 0, scale: 1, rotateX: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 }
  }
};

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-32 px-4 bg-[#050505]" style={{ perspective: "1000px" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Core Capabilities</h2>
          <p className="text-muted text-xl max-w-2xl mx-auto">Integrated systems driven by custom intelligence architectures.</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -10, rotateX: 5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-10 rounded-3xl bg-card border border-border hover:border-white/40 transition-colors duration-300 group shadow-lg hover:shadow-2xl hover:shadow-white/10 z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
              
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors shadow-inner border border-white/5 group-hover:border-white/20"
              >
                <motion.div whileHover={{ rotate: 15, scale: 1.2 }}>
                  {cap.icon}
                </motion.div>
              </motion.div>
              <h3 className="text-2xl font-bold text-primary mb-4">{cap.title}</h3>
              <p className="text-muted leading-relaxed text-lg">{cap.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
