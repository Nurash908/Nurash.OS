"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.03] blur-[100px] pointer-events-none"
      />

      <div className="text-center px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-7xl font-bold tracking-tight leading-tight mb-12"
        >
          BUILD BEFORE
          <br />
          <span className="text-amber-400 italic">YOU FEEL READY.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-4"
        >
          {[
            "I'm still learning.",
            "I'm still experimenting.",
            "I'm still getting things wrong.",
          ].map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-[#f5f5f0]/40 font-serif italic"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-12 font-mono text-xs text-amber-400/60 tracking-[0.3em]"
        >
          THAT&apos;S THE POINT.
        </motion.p>
      </div>
    </section>
  );
}