"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activeProjects = [
  {
    name: "SmartNotesGPT",
    tagline: "Upload. Understand. Master.",
    desc: "AI-powered learning platform that transforms how students absorb knowledge.",
    tags: ["EdTech", "AI", "Education"],
    status: "ACTIVE BUILD",
    icon: "🧠",
    gradient: "from-amber-500/20 to-transparent",
    progress: 85,
    stats: ["2.5k+ users", "4.8★ rating", "12 schools"],
  },
  {
    name: "FuelAlert",
    tagline: "Information becomes infrastructure.",
    desc: "Real-time fuel availability for Sri Lanka during crisis.",
    tags: ["Civic Tech", "Sri Lanka"],
    status: "ACTIVE BUILD",
    icon: "⛽",
    gradient: "from-emerald-500/20 to-transparent",
    progress: 70,
    stats: ["#1 Google", "10k+ users", "24/7 live"],
  },
  {
    name: "RainLens",
    tagline: "Environmental data that explains itself.",
    desc: "AI weather intelligence with self-explanatory insights.",
    tags: ["AI", "Environment"],
    status: "ACTIVE BUILD",
    icon: "🌧️",
    gradient: "from-sky-500/20 to-transparent",
    progress: 60,
    stats: ["1M+ data", "AI trained", "Beta soon"],
  },
];

const nowParticles = Array.from({ length: 20 }, (_, i) => {
  const seed1 = ((i * 23 + 11) % 100) / 100;
  const seed2 = ((i * 37 + 19) % 100) / 100;
  return {
    id: i,
    left: `${(seed1 * 100).toFixed(1)}%`,
    top: `${(seed2 * 100).toFixed(1)}%`,
    duration: seed1 * 5 + 3,
    delay: seed2 * 2,
  };
});

export function Now() {
  return (
    <section id="now" className="min-h-screen flex items-center pt-20 sm:pt-24 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Cinematic ambient glow */}
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[800px] h-[220px] sm:h-[300px] md:h-[400px] bg-amber-500/[0.04] blur-[50px] md:blur-[120px] pointer-events-none gpu-layer"
      />

      {/* Floating particles - Desktop prioritized */}
      {nowParticles.slice(0, 10).map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.25, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-0.5 h-0.5 rounded-full bg-amber-400/30 pointer-events-none gpu-layer hidden sm:block"
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-16"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs text-amber-400/60 tracking-[0.3em]"
            >
              01
            </motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-px w-8 sm:w-12 bg-amber-400/30 origin-left"
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs text-[#f5f5f0]/40 tracking-[0.3em]"
            >
              NOW
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight"
          >
            Currently <span className="text-amber-400 italic">Building</span>
          </motion.h2>
        </motion.div>

        {/* Live status system */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-8 sm:mb-12 p-4 sm:p-6 rounded-2xl bg-[#111114]/70 border border-[#f5f5f0]/10 backdrop-blur-md"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            <div>
              <p className="font-mono text-[10px] sm:text-xs text-[#f5f5f0]/30 mb-1.5 tracking-wider">STATUS</p>
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-emerald-400"
                />
                <span className="text-xs sm:text-sm font-bold text-emerald-400">BUILDING</span>
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] sm:text-xs text-[#f5f5f0]/30 mb-1.5 tracking-wider">CURRENTLY</p>
              <p className="text-xs sm:text-sm font-bold text-amber-400 truncate">SmartNotesGPT</p>
            </div>
            <div>
              <p className="font-mono text-[10px] sm:text-xs text-[#f5f5f0]/30 mb-1.5 tracking-wider">LAST SHIPPED</p>
              <p className="text-xs sm:text-sm font-bold text-[#f5f5f0]/80 truncate">FuelAlert</p>
            </div>
            <div>
              <p className="font-mono text-[10px] sm:text-xs text-[#f5f5f0]/30 mb-1.5 tracking-wider">EXPERIMENTING</p>
              <p className="text-xs sm:text-sm font-bold text-[#f5f5f0]/80 truncate">AI × Visuals</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-[10px] sm:text-xs text-[#f5f5f0]/30 mb-1.5 tracking-wider">NEXT</p>
              <p className="text-xs sm:text-sm font-bold text-[#f5f5f0]/80 truncate">RainLens</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {activeProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer"
            >
              <Card className="group relative overflow-hidden bg-[#111114] border-[#f5f5f0]/10 hover:border-amber-400/40 hover:shadow-[0_12px_40px_-15px_rgba(251,191,36,0.15)] transition-all duration-500 h-full rounded-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="p-5 sm:p-7 md:p-8 flex flex-col h-full relative">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <motion.span
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="text-3xl sm:text-4xl inline-block"
                    >
                      {project.icon}
                    </motion.span>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:border-emerald-500/40 backdrop-blur-sm transition-colors duration-300 text-[10px] sm:text-xs">
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5"
                      />
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-[#f5f5f0]/70 italic font-serif text-sm sm:text-base mb-3 sm:mb-4">{project.tagline}</p>
                  <p className="text-xs sm:text-sm text-[#f5f5f0]/45 leading-relaxed mb-6">{project.desc}</p>

                  {/* Progress bar */}
                  <div className="mb-5 sm:mb-6">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-[#f5f5f0]/30 font-mono text-[10px] sm:text-xs">PROGRESS</span>
                      <span className="text-amber-400 font-mono font-bold text-[10px] sm:text-xs">{project.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-[#f5f5f0]/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full group-hover:shadow-[0_0_12px_rgba(251,191,36,0.6)] transition-shadow duration-300"
                      />
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-5 sm:mb-6">
                    {project.stats.map((stat) => (
                      <span key={stat} className="text-[11px] sm:text-xs text-[#f5f5f0]/40 font-mono group-hover:text-[#f5f5f0]/60 transition-colors duration-300">
                        {stat}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 rounded-full bg-[#f5f5f0]/5 text-[#f5f5f0]/50 border border-[#f5f5f0]/5 group-hover:border-amber-400/20 group-hover:text-[#f5f5f0]/70 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
