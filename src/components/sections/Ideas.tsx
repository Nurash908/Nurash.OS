"use client";

import { motion } from "framer-motion";

const ideas = [
  { text: "What if studying felt like having a personal tutor?", result: "→ SmartNotesGPT", category: "AI × EDUCATION" },
  { text: "What if you could see fuel availability before driving across the city?", result: "→ FuelAlert", category: "AI × CIVIC TECH" },
  { text: "What if environmental data could actually explain itself?", result: "→ RainLens", category: "AI × ENVIRONMENT" },
  { text: "What if productivity tools understood your workflow?", result: "→ FocusFlow", category: "AI × PRODUCTIVITY" },
  { text: "What if learning was visual and instant?", result: "→ Snap2Note", category: "AI × EDUCATION" },
  { text: "What if food waste was a solvable data problem?", result: "→ FridgeChef AI", category: "AI × SUSTAINABILITY" },
];

export function Ideas() {
  return (
    <section id="ideas" className="min-h-screen py-32 relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/[0.04] blur-[100px] pointer-events-none"
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
              05
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
              IDEAS
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-bold tracking-tight"
          >
            Ideas I&apos;m <span className="text-amber-400 italic">Not Done With</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {ideas.map((idea, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="p-8 rounded-2xl bg-[#111111]/50 border border-[#f5f5f0]/5 hover:border-amber-400/20 transition-all duration-500 backdrop-blur-sm h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-amber-400/60 tracking-wider">
                    {idea.category}
                  </span>
                  <motion.span
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    💭
                  </motion.span>
                </div>
                <p className="text-lg font-serif italic text-[#f5f5f0]/70 leading-relaxed mb-6">
                  &ldquo;{idea.text}&rdquo;
                </p>
                <motion.p
                  whileHover={{ x: 8 }}
                  className="text-sm font-mono text-amber-400/80"
                >
                  {idea.result}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}