"use client";

import { motion } from "framer-motion";

export function Dream() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/[0.03] blur-[100px] pointer-events-none"
      />

      <div className="text-center px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          The <span className="text-amber-400 italic">Dream</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-xl md:text-2xl text-[#f5f5f0]/40 font-serif italic max-w-2xl mx-auto leading-relaxed"
        >
          To build technology that makes education accessible,
          information available, and ideas possible — for everyone.
        </motion.p>
      </div>
    </section>
  );
}