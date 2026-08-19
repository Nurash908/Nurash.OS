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

  const ask = (overrideQuery?: string) => {
    const textToQuery = (overrideQuery !== undefined ? overrideQuery : query).trim();
    if (!textToQuery) return;
    setThinking(true);
    setAnswer("");

    setTimeout(() => {
      const q = textToQuery.toLowerCase();
      const match = knowledgeBase.find((item) =>
        item.keywords.some((keyword) => q.includes(keyword))
      );

      setAnswer(
        match?.answer ||
          "I don't have a specific answer for that yet. Try asking about SmartNotesGPT, FuelAlert, RainLens, my competitions, or the philosophy behind my projects."
      );
      setThinking(false);
    }, 800);
  };

  return (
    <>
      <motion.button
        id="nexus-trigger-button"
        type="button"
        aria-label="Open Nexus AI query"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.4)] hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] transition-shadow duration-300 cursor-pointer active:scale-95"
      >
        <span className="text-lg sm:text-xl font-bold">✦</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-[#111114] border border-amber-400/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              <div className="p-4 sm:p-6 border-b border-[#f5f5f0]/5 bg-[#141418]">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      className="text-xl sm:text-2xl text-amber-400"
                    >
                      ✦
                    </motion.span>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#f5f5f0]">NEXUS AI</h3>
                      <p className="text-[10px] sm:text-xs text-amber-400/60 font-mono tracking-wider">ARCHIVE QUERY ENGINE</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close Nexus dialog"
                    className="w-8 h-8 rounded-full bg-[#1e1e24] hover:bg-[#282830] text-[#f5f5f0]/50 hover:text-[#f5f5f0] flex items-center justify-center transition-colors text-sm"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex gap-2">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && ask()}
                    placeholder="Ask about Nurash's builds..."
                    className="bg-[#0a0a0c] border-[#f5f5f0]/10 text-base md:text-sm text-[#f5f5f0] placeholder:text-[#f5f5f0]/25 focus:border-amber-400/40 rounded-xl"
                  />
                  <Button
                    onClick={() => ask()}
                    className="bg-amber-400 text-black hover:bg-amber-300 px-4 sm:px-6 font-semibold rounded-xl shrink-0"
                  >
                    Ask
                  </Button>
                </div>

                {/* Quick suggestion prompt chips */}
                <div className="flex items-center gap-1.5 sm:gap-2 mt-3 overflow-x-auto pb-1 scrollbar-none">
                  {["SmartNotesGPT", "FuelAlert", "RainLens", "Philosophy"].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => {
                        setQuery(chip);
                        setTimeout(() => ask(chip), 50);
                      }}
                      className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#1d1d22] text-[#f5f5f0]/60 hover:text-amber-300 hover:bg-amber-400/10 border border-[#f5f5f0]/5 transition-all whitespace-nowrap active:scale-95 cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-6 min-h-[180px] max-h-[360px] overflow-y-auto">
                {thinking ? (
                  <div className="flex items-center gap-2 text-[#f5f5f0]/40 py-8 justify-center">
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-amber-400"
                    />
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 rounded-full bg-amber-400"
                    />
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 rounded-full bg-amber-400"
                    />
                    <span className="text-xs sm:text-sm font-mono text-amber-400/70 ml-2">Searching memory banks...</span>
                  </div>
                ) : answer ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs sm:text-sm text-[#f5f5f0]/80 leading-relaxed font-sans"
                  >
                    {answer}
                  </motion.div>
                ) : (
                  <div className="text-center text-[#f5f5f0]/30 py-6">
                    <p className="text-2xl sm:text-3xl mb-3 text-amber-400/40">✦</p>
                    <p className="font-serif italic text-xs sm:text-sm text-[#f5f5f0]/50 max-w-sm mx-auto">
                      Ask about SmartNotesGPT, FuelAlert, RainLens, competitions, or the philosophy behind my builds.
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