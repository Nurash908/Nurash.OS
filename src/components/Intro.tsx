"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const bootLines = [
  "> initializing archive...",
  "> loading ideas...",
  "> loading projects...",
  "> loading experiments...",
  "> loading 2,500+ connections...",
  "> calibrating creative systems...",
  "> syncing with the builder's mind...",
  "> loading philosophy...",
  "> loading dreams...",
  "> archive ready.",
];

const introParticles = Array.from({ length: 40 }, (_, i) => {
  const seed1 = ((i * 17 + 7) % 100) / 100;
  const seed2 = ((i * 31 + 13) % 100) / 100;
  const seed3 = ((i * 19 + 3) % 100) / 100;
  return {
    id: i,
    left: `${(seed1 * 100).toFixed(1)}%`,
    top: `${(seed2 * 100).toFixed(1)}%`,
    xOffset: seed3 * 20 - 10,
    duration: seed1 * 6 + 3,
    delay: seed2 * 3,
  };
});

export function Intro({ onEnter }: { onEnter: () => void }) {
  const [stage, setStage] = useState<"boot" | "title" | "enter">("boot");
  const [lineIndex, setLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - 50);
      mouseY.set(e.clientY - 50);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (stage !== "boot") return;
    if (lineIndex < bootLines.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 250);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStage("title"), 500);
    return () => clearTimeout(t);
  }, [stage, lineIndex]);

  useEffect(() => {
    if (stage === "title") {
      const t = setTimeout(() => setStage("enter"), 5000);
      return () => clearTimeout(t);
    }
  }, [stage]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] text-[#f5f5f0] flex items-center justify-center overflow-hidden">
      {/* Cinematic grain */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')",
        }}
      />

      {/* Cinematic letterbox bars */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: stage === "enter" ? 0 : 1 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 right-0 h-24 bg-black z-20 origin-top"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: stage === "enter" ? 0 : 1 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 right-0 h-24 bg-black z-20 origin-bottom"
      />

      {/* Cursor-reactive lighting */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute w-[300px] h-[300px] rounded-full bg-amber-400/[0.08] blur-[100px] pointer-events-none z-10"
      />

      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-500/[0.05] blur-[120px] pointer-events-none"
      />

      {/* Floating particles */}
      {introParticles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: [0, -50, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 0.3, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 rounded-full bg-amber-400/30"
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      {/* Rotating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] border border-amber-400/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[400px] h-[400px] border border-amber-400/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px] border border-amber-400/15 rounded-full"
      />

      {/* Scanning line */}
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-40 bg-gradient-to-b from-transparent via-amber-400/[0.03] to-transparent pointer-events-none"
      />

      <AnimatePresence mode="wait">
        {stage === "boot" && (
          <motion.div
            key="boot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="font-mono text-sm text-[#f5f5f0]/50 space-y-3 relative z-10"
          >
            {bootLines.slice(0, lineIndex).map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-center gap-3"
              >
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-amber-400/60"
                >
                  ▸
                </motion.span>
                {line}
                {i === lineIndex - 1 && showCursor && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5 }}
                    className="inline-block w-2.5 h-5 bg-amber-400/80"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {stage === "title" && (
          <motion.div
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="text-center px-6 relative z-10"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "1em", filter: "blur(10px)" }}
              animate={{ opacity: 1, letterSpacing: "0.3em", filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-mono text-xs text-amber-400/60 mb-12"
            >
              NURASH WEERASINGHE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl md:text-8xl font-bold tracking-tight leading-tight"
            >
              I BUILD THINGS
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-amber-400 italic"
              >
                I WISH EXISTED.
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-12 flex items-center justify-center gap-4 flex-wrap"
            >
              {["AI", "Education", "Civic Tech", "Productivity", "Digital Identity"].map(
                (tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 1.5 + i * 0.15, duration: 0.6 }}
                    className="text-xs font-mono text-[#f5f5f0]/40"
                  >
                    {tag}
                    {i < 4 && <span className="mx-3 text-[#f5f5f0]/20">·</span>}
                  </motion.span>
                )
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-px h-12 bg-gradient-to-b from-amber-400/60 to-transparent mx-auto"
              />
            </motion.div>
          </motion.div>
        )}

        {stage === "enter" && (
          <motion.div
            key="enter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center relative z-10"
          >
            <motion.button
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={onEnter}
              className="group relative px-16 py-6 overflow-hidden rounded-full border border-[#f5f5f0]/20 text-sm tracking-[0.3em] uppercase transition-all duration-500 hover:border-amber-400/60 hover:shadow-[0_0_60px_rgba(251,191,36,0.2)] cursor-pointer"
            >
              <span className="relative z-10">Enter the Archive</span>
              <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
              />
              <span className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 transition-all duration-500" />
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 font-mono text-xs text-[#f5f5f0]/20 tracking-[0.2em]"
            >
              THE BUILDER&apos;S ARCHIVE
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
