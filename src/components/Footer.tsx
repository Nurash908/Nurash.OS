"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-20 border-t border-[#f5f5f0]/5 relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-amber-500/[0.03] blur-[80px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl font-bold mb-8"
        >
          WHAT SHOULD I <span className="text-amber-400 italic">BUILD NEXT?</span>
        </motion.h2>

        <motion.a
          href="mailto:nurashnew@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 rounded-full bg-amber-400 text-black font-bold text-sm tracking-[0.2em] uppercase hover:bg-amber-300 transition-colors duration-300 shadow-[0_0_40px_rgba(251,191,36,0.3)]"
        >
          Have an Idea →
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <p className="font-serif text-xl font-bold mb-2">Nurash Weerasinghe</p>
          <p className="text-sm text-[#f5f5f0]/30 mb-8">Founder · Builder · Learner</p>

          <div className="flex items-center justify-center gap-6">
            {[
              { name: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/nurash-weerasinghe/" },
              { name: "GitHub", icon: "gh", href: "https://github.com" },
              { name: "YouTube", icon: "yt", href: "https://youtube.com" },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-[#111111] border border-[#f5f5f0]/10 flex items-center justify-center text-sm font-bold text-[#f5f5f0]/50 hover:border-amber-400/30 hover:text-amber-400 transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 font-mono text-xs text-[#f5f5f0]/20 tracking-[0.3em]"
        >
          © 2026 NURASH.OS — THE BUILDER&apos;S ARCHIVE
        </motion.p>
      </div>
    </footer>
  );
}