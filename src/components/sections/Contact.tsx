"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-32 relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/[0.04] blur-[100px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs text-amber-400/60 tracking-[0.3em]"
            >
              07
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
              CONTACT
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Let&apos;s Build <span className="text-amber-400 italic">Something</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-[#f5f5f0]/40 font-serif italic"
          >
            Have an idea? A project? A problem worth solving?
          </motion.p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-[#f5f5f0]/30 mb-2 tracking-wider">
                NAME
              </label>
              <Input
                placeholder="Your name"
                className="bg-[#111111] border-[#f5f5f0]/10 text-[#f5f5f0] placeholder:text-[#f5f5f0]/20 focus:border-amber-400/30 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-[#f5f5f0]/30 mb-2 tracking-wider">
                EMAIL
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                className="bg-[#111111] border-[#f5f5f0]/10 text-[#f5f5f0] placeholder:text-[#f5f5f0]/20 focus:border-amber-400/30 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#f5f5f0]/30 mb-2 tracking-wider">
              MESSAGE
            </label>
            <Textarea
              placeholder="Tell me about your idea..."
              className="min-h-[150px] bg-[#111111] border-[#f5f5f0]/10 text-[#f5f5f0] placeholder:text-[#f5f5f0]/20 focus:border-amber-400/30 transition-colors resize-none"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              className="w-full bg-amber-400 text-black hover:bg-amber-300 transition-colors py-6 text-sm font-bold tracking-[0.2em] uppercase"
            >
              Send Message →
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}