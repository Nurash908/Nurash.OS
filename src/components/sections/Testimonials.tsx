"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "SmartNotesGPT changed how I study. It's like having a personal tutor that actually understands.",
    author: "University Student",
    role: "SmartNotesGPT User",
    icon: "🎓",
  },
  {
    quote: "FuelAlert was a lifesaver during the crisis. Real-time information when we needed it most.",
    author: "Sri Lankan Resident",
    role: "FuelAlert User",
    icon: "⛽",
  },
  {
    quote: "The way Nurash thinks about problems is different. He builds for real people, not just for demos.",
    author: "Tech Community Member",
    role: "LinkedIn Follower",
    icon: "💬",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-500/[0.03] blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative">
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
              VOICES
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
            The <span className="text-amber-400 italic">Impact</span> Speaks
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full bg-[#111111]/50 border-[#f5f5f0]/5 hover:border-amber-400/20 transition-all duration-500 backdrop-blur-sm">
                <CardContent className="p-8 flex flex-col h-full">
                  <motion.span
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    className="text-3xl mb-6"
                  >
                    {t.icon}
                  </motion.span>
                  <p className="text-lg font-serif italic text-[#f5f5f0]/70 leading-relaxed mb-8 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-amber-400">{t.author}</p>
                    <p className="text-sm text-[#f5f5f0]/30 mt-1">{t.role}</p>
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