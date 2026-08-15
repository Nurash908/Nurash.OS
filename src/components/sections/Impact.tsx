"use client";

import { motion } from "framer-motion";

const impacts = [
  { value: "2,500+", label: "LinkedIn Community", icon: "🌐" },
  { value: "#1", label: "Google Result for 'fuel alert'", icon: "🔍" },
  { value: "1st", label: "Place — Smart City Pitching", icon: "🏆" },
  { value: "8+", label: "Projects Built & Shipped", icon: "🚀" },
];

export function Impact() {
  return (
    <section id="impact" className="min-h-screen py-32 relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-amber-500/[0.04] blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs text-amber-400/60 tracking-[0.3em]"
            >
              06
            </motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px w-12 bg-amber-400/30 origin-left"
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs text-[#f5f5f0]/40 tracking-[0.3em]"
            >
              IMPACT
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-bold tracking-tight"
          >
            The <span className="text-amber-400 italic">2,500 Moment</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impacts.map((impact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="p-8 rounded-2xl bg-[#111111]/50 border border-[#f5f5f0]/5 hover:border-amber-400/20 transition-all duration-500 backdrop-blur-sm text-center"
            >
              <motion.span
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="text-4xl mb-4 block"
              >
                {impact.icon}
              </motion.span>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                className="font-serif text-3xl md:text-4xl font-bold text-amber-400 mb-2"
              >
                {impact.value}
              </motion.p>
              <p className="text-sm text-[#f5f5f0]/40">{impact.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-[#f5f5f0]/40 font-serif italic">
            Same passion. Bigger audience. Greater impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}