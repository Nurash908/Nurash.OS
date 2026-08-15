"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90, icon: "⚛️" },
  { name: "TypeScript", level: 85, icon: "📘" },
  { name: "Next.js", level: 80, icon: "▲" },
  { name: "Python", level: 75, icon: "🐍" },
  { name: "AI/ML", level: 70, icon: "🤖" },
  { name: "UI/UX", level: 85, icon: "🎨" },
  { name: "Node.js", level: 75, icon: "🟢" },
  { name: "Tailwind", level: 90, icon: "🎨" },
];

export function Skills() {
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
              TOOLKIT
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
            Weapons of <span className="text-amber-400 italic">Choice</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="p-6 rounded-2xl bg-[#111111]/50 border border-[#f5f5f0]/5 hover:border-amber-400/20 transition-all duration-500 backdrop-blur-sm"
            >
              <motion.span
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="text-3xl mb-4 block"
              >
                {skill.icon}
              </motion.span>
              <h3 className="font-serif text-lg font-bold mb-4">{skill.name}</h3>
              <div className="h-1.5 bg-[#f5f5f0]/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full"
                />
              </div>
              <p className="text-xs font-mono text-amber-400/60 mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}