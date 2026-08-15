"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const knowledgeBase = [
  {
    keywords: ["smartnotesgpt", "smart notes", "learning", "education"],
    answer: "SmartNotesGPT is my flagship AI-powered learning platform. It lets students upload study materials and get personalized understanding, summaries, and mastery tools. Currently at 85% progress with 2.5k+ users and a 4.8★ rating.",
  },
  {
    keywords: ["fuelalert", "fuel", "crisis", "sri lanka"],
    answer: "FuelAlert was built during Sri Lanka's fuel crisis. It provides real-time fuel availability information, becoming the #1 Google result for 'fuel alert'. It's a civic tech solution that turned information into infrastructure during a national emergency.",
  },
  {
    keywords: ["rainlens", "rain", "weather", "environment"],
    answer: "RainLens is my environmental AI project that makes weather data explain itself. It's currently in active development with 1M+ data points and an AI model being trained. It evolved from my earlier experiment called RainiX.",
  },
  {
    keywords: ["active", "current", "building", "now"],
    answer: "Currently building: SmartNotesGPT (85%), FuelAlert (70%), and RainLens (60%). Also experimenting with visual learning interfaces and AI × productivity tools.",
  },
  {
    keywords: ["competition", "win", "award", "achievement"],
    answer: "Key achievements: 1st Place in Smart City Project & Business Pitching, Semi-Finals in DEV{thon} 3.0, and building a 2,500+ LinkedIn community following the journey.",
  },
  {
    keywords: ["connection", "philosophy", "vision", "mission"],
    answer: "All my projects share one philosophy: build things that make information accessible and learning possible. From SmartNotesGPT (AI × Education) to FuelAlert (AI × Civic Tech) to RainLens (AI × Environment) — they're all about turning data into human understanding.",
  },
  {
    keywords: ["experiment", "lab", "failed", "learned"],
    answer: "My experiment lab includes RainiX (evolved into RainLens), Skin2Glow (archived), Snap2Note (merged into SmartNotesGPT), Breathly (archived), and FridgeChef AI (prototype). The philosophy: some ideas don't fail, they evolve.",
  },
  {
    keywords: ["contact", "email", "reach", "connect"],
    answer: "You can reach me at nurashnew@gmail.com or connect on LinkedIn. I'm always open to new ideas, collaborations, and building things that matter.",
  },
];

export function Nexus() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [thinking, setThinking] = useState(false);

  const ask = () => {
    if (!query.trim()) return;
    setThinking(true);
    setAnswer("");

    setTimeout(() => {
      const q = query.toLowerCase();
      const match = knowledgeBase.find((item) =>
        item.keywords.some((keyword) => q.includes(keyword))
      );

      setAnswer(
        match?.answer ||
          "I don't have a specific answer for that yet. Try asking about SmartNotesGPT, FuelAlert, RainLens, my competitions, or the philosophy behind my projects."
      );
      setThinking(false);
    }, 1000);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-shadow duration-300"
      >
        <span className="text-xl">✦</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-[#111111] border border-[#f5f5f0]/10 shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-[#f5f5f0]/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="text-2xl"
                    >
                      ✦
                    </motion.span>
                    <div>
                      <h3 className="font-serif text-lg font-bold">NEXUS</h3>
                      <p className="text-xs text-[#f5f5f0]/30 font-mono">ASK THE ARCHIVE</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-[#f5f5f0]/30 hover:text-[#f5f5f0]/70 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex gap-2">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && ask()}
                    placeholder="Ask me anything about Nurash's work..."
                    className="bg-[#0a0a0a] border-[#f5f5f0]/10 text-[#f5f5f0] placeholder:text-[#f5f5f0]/20 focus:border-amber-400/30"
                  />
                  <Button
                    onClick={ask}
                    className="bg-amber-400 text-black hover:bg-amber-300 px-6"
                  >
                    Ask
                  </Button>
                </div>
              </div>

              <div className="p-6 min-h-[200px] max-h-[400px] overflow-y-auto">
                {thinking ? (
                  <div className="flex items-center gap-2 text-[#f5f5f0]/40">
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-amber-400"
                    />
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 rounded-full bg-amber-400"
                    />
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 rounded-full bg-amber-400"
                    />
                    <span className="text-sm font-mono">Processing...</span>
                  </div>
                ) : answer ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-[#f5f5f0]/70 leading-relaxed"
                  >
                    {answer}
                  </motion.div>
                ) : (
                  <div className="text-center text-[#f5f5f0]/30">
                    <p className="text-4xl mb-4">✦</p>
                    <p className="font-serif italic">
                      Ask me about SmartNotesGPT, FuelAlert, RainLens, my competitions, or the philosophy behind my projects.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}