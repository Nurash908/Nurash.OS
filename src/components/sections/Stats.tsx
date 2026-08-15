"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "Projects Built", icon: "🚀" },
  { value: "2,500+", label: "Community", icon: "🌐" },
  { value: "1st", label: "Place Wins", icon: "🏆" },
  { value: "3", label: "Active Builds", icon: "⚡" },
];

export function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
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
                {stat.icon}
              </motion.span>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                className="font-serif text-3xl md:text-4xl font-bold text-amber-400 mb-2"
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-[#f5f5f0]/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}