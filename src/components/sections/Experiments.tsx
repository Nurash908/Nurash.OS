"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const experiments = [
  {
    name: "RainiX",
    status: "RENAMED → RAINLENS",
    lesson: "Some ideas don't fail. They evolve.",
    phase: "EVOLVED",
    icon: "🌦️",
    color: "text-sky-400",
  },
  {
    name: "Skin2Glow",
    status: "ARCHIVED",
    lesson: "Beauty tech needs better data.",
    phase: "PAUSED",
    icon: "✨",
    color: "text-pink-400",
  },
  {
    name: "Snap2Note",
    status: "MERGED",
    lesson: "Visual thinking is underrated.",
    phase: "MERGED INTO SMARTNOTESGPT",
    icon: "📸",
    color: "text-amber-400",
  },
  {
    name: "Breathly",
    status: "ARCHIVED",
    lesson: "Wellness apps need real science.",
    phase: "PAUSED",
    icon: "🌬️",
    color: "text-emerald-400",
  },
  {
    name: "FridgeChef AI",
    status: "PROTOTYPE",
    lesson: "Food waste is a data problem.",
    phase: "EXPERIMENTING",
    icon: "🍳",
    color: "text-orange-400",
  },
  {
    name: "FocusFlow",
    status: "EVOLVING",
    lesson: "Productivity needs AI, not just timers.",
    phase: "IN DEVELOPMENT",
    icon: "🎯",
    color: "text-purple-400",
  },
];

export function Experiments() {
  return (
    <section id="experiments" className="min-h-screen py-32 relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/[0.04] blur-[100px] pointer-events-none"
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
              03
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
              EXPERIMENTS
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-bold tracking-tight"
          >
            The <span className="text-amber-400 italic">Experiment Lab</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-lg text-[#f5f5f0]/40 font-serif italic max-w-2xl"
          >
            NOT EVERYTHING I BUILD IS SUPPOSED TO WORK.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full bg-[#111111]/50 border-[#f5f5f0]/5 hover:border-amber-400/20 transition-all duration-500 backdrop-blur-sm overflow-hidden group">
                <CardContent className="p-8 flex flex-col h-full relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-start justify-between mb-6 relative">
                    <motion.span
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      className={`text-4xl ${exp.color}`}
                    >
                      {exp.icon}
                    </motion.span>
                    <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#f5f5f0]/5 text-[#f5f5f0]/40 border border-[#f5f5f0]/10">
                      {exp.phase}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {exp.name}
                  </h3>
                  
                  <p className={`text-sm font-mono mb-4 ${exp.color}`}>
                    {exp.status}
                  </p>
                  
                  <p className="text-sm text-[#f5f5f0]/40 leading-relaxed mt-auto italic font-serif">
                    &ldquo;{exp.lesson}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}