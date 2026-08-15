"use client";

import { motion } from "framer-motion";

const dna = [
  { trait: "Curiosity", desc: "Always asking 'what if?'", icon: "🔍" },
  { trait: "Resilience", desc: "Build, break, rebuild", icon: "🛠️" },
  { trait: "Speed", desc: "Ship fast, iterate faster", icon: "⚡" },
  { trait: "Empathy", desc: "Build for real people", icon: "💚" },
];

export function BuilderDNA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs text-amber-400/60 tracking-[0.3em]"
            >
              DNA
            </motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px w-12 bg-amber-400/30 origin-left"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-bold tracking-tight"
          >
            Builder <span className="text-amber-400 italic">DNA</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {dna.map((item, i) => (
            <motion.div
              key={item.trait}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="p-6 rounded-2xl bg-[#111111]/50 border border-[#f5f5f0]/5 hover:border-amber-400/20 transition-all duration-500 backdrop-blur-sm text-center"
            >
              <motion.span
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="text-3xl mb-4 block"
              >
                {item.icon}
              </motion.span>
              <h3 className="font-serif text-lg font-bold mb-2">{item.trait}</h3>
              <p className="text-sm text-[#f5f5f0]/40">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}