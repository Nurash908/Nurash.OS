"use client";

import { motion } from "framer-motion";

const notes = [
  { date: "2026-01", note: "SmartNotesGPT v2 architecture designed", icon: "📝" },
  { date: "2026-02", note: "FuelAlert reached 10k users", icon: "🚀" },
  { date: "2026-03", note: "RainLens AI model trained on 1M data points", icon: "🤖" },
  { date: "2026-04", note: "Experimenting with visual learning interfaces", icon: "🎨" },
];

export function LabNotebook() {
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
              LAB
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
            Lab <span className="text-amber-400 italic">Notebook</span>
          </motion.h2>
        </motion.div>

        <div className="space-y-4">
          {notes.map((note, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ x: 8 }}
              className="p-6 rounded-xl bg-[#111111]/50 border border-[#f5f5f0]/5 hover:border-amber-400/20 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <motion.span
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="text-2xl"
                >
                  {note.icon}
                </motion.span>
                <div className="flex-1">
                  <p className="text-sm text-[#f5f5f0]/70">{note.note}</p>
                </div>
                <span className="font-mono text-xs text-amber-400/60">{note.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}