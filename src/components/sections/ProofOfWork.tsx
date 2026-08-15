"use client";

import { motion } from "framer-motion";

const proofs = [
  { title: "Smart City Project", result: "1st Place", icon: "🏆", year: "2025" },
  { title: "DEV{thon} 3.0", result: "Semi-Finals", icon: "⚡", year: "2025" },
  { title: "FuelAlert", result: "#1 Google Result", icon: "🔍", year: "2026" },
  { title: "LinkedIn", result: "2,500+ Followers", icon: "🌐", year: "2026" },
];

export function ProofOfWork() {
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
              PROOF
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
            Proof of <span className="text-amber-400 italic">Work</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {proofs.map((proof, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl bg-[#111111]/50 border border-[#f5f5f0]/5 hover:border-amber-400/20 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <motion.span
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="text-3xl"
                >
                  {proof.icon}
                </motion.span>
                <span className="font-mono text-xs text-[#f5f5f0]/30">{proof.year}</span>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">{proof.title}</h3>
              <p className="text-amber-400 font-mono text-sm">{proof.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}