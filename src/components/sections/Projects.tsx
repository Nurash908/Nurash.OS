"use client";

import { motion } from "framer-motion";

const projects = [
  {
    year: "2026",
    items: [
      { name: "SmartNotesGPT", desc: "AI learning platform", icon: "🧠", status: "ACTIVE", color: "text-amber-400" },
      { name: "FuelAlert", desc: "Fuel availability tracker", icon: "⛽", status: "ACTIVE", color: "text-emerald-400" },
      { name: "RainLens", desc: "Weather intelligence", icon: "🌧️", status: "ACTIVE", color: "text-sky-400" },
      { name: "Likable", desc: "Social engagement tool", icon: "💫", status: "BETA", color: "text-purple-400" },
      { name: "FocusFlow", desc: "Productivity suite", icon: "🎯", status: "BETA", color: "text-orange-400" },
    ],
  },
  {
    year: "2025",
    items: [
      { name: "RainiX", desc: "Weather prototype", icon: "🌦️", status: "EVOLVED", color: "text-sky-400" },
      { name: "Snap2Note", desc: "Visual note-taking", icon: "📸", status: "MERGED", color: "text-amber-400" },
      { name: "Breathly", desc: "Mindfulness app", icon: "🌬️", status: "ARCHIVED", color: "text-emerald-400" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-32 relative overflow-hidden">
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
              02
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
              PROJECTS
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-bold tracking-tight"
          >
            The <span className="text-amber-400 italic">Archive</span>
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line with animation */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/40 via-[#f5f5f0]/10 to-transparent origin-top"
          />

          {projects.map((period, periodIndex) => (
            <div key={period.year} className="mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-16 md:pl-24 mb-10"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                />
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="font-serif text-4xl font-bold text-amber-400/80"
                >
                  {period.year}
                </motion.h3>
              </motion.div>

              <div className="space-y-4 pl-16 md:pl-24">
                {period.items.map((project, i) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{
                      x: 10,
                      scale: 1.015,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.985 }}
                    className="group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{
                        boxShadow: "0 10px 30px -10px rgba(251, 191, 36, 0.08)",
                        borderColor: "rgba(251, 191, 36, 0.3)",
                      }}
                      className="p-6 rounded-xl bg-[#111111]/50 border border-[#f5f5f0]/5 hover:bg-[#141414] transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                    >
                      {/* Subtle ambient light sweep on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />

                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-4">
                          <motion.span
                            whileHover={{ rotate: 12, scale: 1.25 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className={`text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 inline-block ${project.color}`}
                          >
                            {project.icon}
                          </motion.span>
                          <div>
                            <h4 className="font-serif text-xl font-bold group-hover:text-amber-400 transition-colors duration-300 flex items-center gap-2">
                              {project.name}
                            </h4>
                            <p className="text-sm text-[#f5f5f0]/40 group-hover:text-[#f5f5f0]/60 transition-colors duration-300 mt-1">{project.desc}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className={`text-xs font-mono px-3 py-1.5 rounded-full transition-colors duration-300 ${
                              project.status === "ACTIVE" 
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:border-emerald-500/40"
                                : project.status === "BETA"
                                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:border-amber-500/40"
                                : project.status === "EVOLVED"
                                ? "bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:border-sky-500/40"
                                : "bg-[#f5f5f0]/5 text-[#f5f5f0]/40 border border-[#f5f5f0]/10 group-hover:border-[#f5f5f0]/20"
                            }`}
                          >
                            {project.status}
                          </motion.span>
                          <motion.span
                            className="text-[#f5f5f0]/20 group-hover:text-amber-400 transition-colors duration-300 font-mono text-lg"
                            variants={{
                              hover: { x: 5 },
                            }}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          >
                            →
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}