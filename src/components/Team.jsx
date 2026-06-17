import React from 'react';
import { motion } from 'framer-motion';

const founders = [
  {
    name: "Yashwanth",
    role: "Founding Engineer / ML Lead",
    link: "https://www.linkedin.com/in/k-yashwanth-kumar/",
    points: [
      "Architected proprietary predictive algorithms.",
      "Expertise in deep learning and NLP.",
      "Led deployment of scalable inference engines."
    ]
  },
  {
    name: "Zaid",
    role: "Founding Engineer / Full-Stack Architect",
    points: [
      "Designed secure, zero-trust infrastructure.",
      "Specializes in distributed MERN architectures.",
      "Optimizes performance for high-load systems."
    ]
  },
  {
    name: "Faizan",
    role: "Founding Engineer / Systems Design",
    points: [
      "Pioneered autonomous agent frameworks.",
      "Integrates complex physical-digital workflows.",
      "Focuses on resilient, fault-tolerant logic."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  }
};

const Team = () => {
  return (
    <section id="team" className="py-32 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary">The Founding Engineers</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center text-center p-10 rounded-3xl bg-card/50 border border-border hover:border-white/30 transition-colors duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <motion.div
                animate={{ borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.1)"] }}
                transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 rounded-full bg-gradient-to-tr from-white/10 to-white/5 border-[2px] mb-8 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-shadow duration-500"
              >
                <motion.span
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-3xl font-bold text-white cursor-default"
                >
                  {founder.name.charAt(0)}
                </motion.span>
              </motion.div>
              <h3 className="text-3xl font-bold text-primary mb-3 group-hover:text-white transition-colors">
                {founder.link ? (
                  <a href={founder.link} target="_blank" rel="noopener noreferrer" className="hover:text-white underline decoration-white/30 underline-offset-4 cursor-pointer">
                    {founder.name}
                  </a>
                ) : (
                  founder.name
                )}
              </h3>
              <p className="text-base font-semibold text-white/70 mb-8 pb-8 border-b border-white/10 w-full">{founder.role}</p>
              <ul className="text-left w-full space-y-4">
                {founder.points.map((point, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 8, color: "#ffffff" }}
                    className="text-base text-muted flex items-start transition-colors"
                  >
                    <span className="text-white/40 mr-3 mt-1">•</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
