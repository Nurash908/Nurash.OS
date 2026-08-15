"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2024",
    title: "FIRST IDEAS",
    desc: "Started building things that didn't exist yet.",
    icon: "💡",
    color: "text-amber-400",
  },
  {
    year: "2025",
    title: "FIRST COMPETITIONS",
    desc: "Entered the arena. Learned what real building means.",
    icon: "⚔️",
    color: "text-sky-400",
  },
  {
    year: "2025",
    title: "FIRST WINS",
    desc: "1st Place — Smart City Project & Business Pitching",
    icon: "🏆",
    color: "text-emerald-400",
  },
  {
    year: "2026",
    title: "SMARTNOTESGPT",
    desc: "The flagship project. AI × Education × Real Impact.",
    icon: "🧠",
    color: "text-purple-400",
  },
  {
    year: "2026",
    title: "FUELALERT",
    desc: "Built during crisis. Became #1 Google result.",
    icon: "⛽",
    color: "text-orange-400",
  },
  {
    year: "2026",
    title: "2,500+ FOLLOWERS",
    desc: "A community that follows the journey.",
    icon: "🌐",
    color: "text-pink-400",
  },
];

export function Journey() {
  return (
    <section id="journey" className="min-h-screen py-32 relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-500/[0.04] blur-[100px] pointer-events-none"
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
              04
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
              JOURNEY
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-bold tracking-tight"
          >
            The <span className="text-amber-400 italic">Journey</span>
          </motion.h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/40 via-[#f5f5f0]/10 to-transparent origin-top"
          />

          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative pl-16 md:pl-0 md:w-1/2 mb-12 ${
                i % 2 === 0 ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16"
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
                className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)] ${
                  i % 2 === 0 ? "left-6 md:left-auto md:-right-2" : "left-6 md:-left-2"
                }`}
              />

              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="p-6 rounded-2xl bg-[#111111]/50 border border-[#f5f5f0]/5 hover:border-amber-400/20 transition-all duration-500 backdrop-blur-sm"
              >
                <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <motion.span
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    className={`text-2xl ${milestone.color}`}
                  >
                    {milestone.icon}
                  </motion.span>
                  <span className="font-mono text-xs text-amber-400/60">{milestone.year}</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-sm text-[#f5f5f0]/40 leading-relaxed">{milestone.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}