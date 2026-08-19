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

// Pre-calculated seed points for particles
const introParticles = Array.from({ length: 30 }, (_, i) => {
  const seed1 = ((i * 17 + 7) % 100) / 100;
  const seed2 = ((i * 31 + 13) % 100) / 100;
  const seed3 = ((i * 19 + 3) % 100) / 100;
  return {
    id: i,
    left: `${(seed1 * 100).toFixed(1)}%`,
    top: `${(seed2 * 100).toFixed(1)}%`,
    xOffset: seed3 * 20 - 10,
    duration: seed1 * 4 + 3,
    delay: seed2 * 2,
    isMobileVisible: i < 12, // Only render 12 on mobile to maximize FPS
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
    // Only attach mousemove on non-touch fine-pointer devices
    if (typeof window !== "undefined" && window.matchMedia && !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - 50);
      mouseY.set(e.clientY - 50);
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (stage !== "boot") return;
    if (lineIndex < bootLines.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 220);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStage("title"), 450);
    return () => clearTimeout(t);
  }, [stage, lineIndex]);

  useEffect(() => {
    if (stage === "title") {
      const t = setTimeout(() => setStage("enter"), 4500);
      return () => clearTimeout(t);
    }
  }, [stage]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 450);
    return () => clearInterval(cursorInterval);
  }, []);

  const skipToArchive = () => {
    onEnter();
  };

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] text-[#f5f5f0] flex items-center justify-center overflow-hidden overscroll-none select-none">
      {/* Desktop Cinematic grain (Hidden on mobile for 60/120fps GPU performance) */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')",
        }}
      />

      {/* Mobile-optimized smooth radial vignette */}
      <div className="md:hidden absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.06)_0%,rgba(10,10,10,0.95)_70%)] pointer-events-none" />

      {/* Cinematic widescreen letterbox bars */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: stage === "enter" ? 0 : 1 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 right-0 h-14 sm:h-20 md:h-24 bg-black z-20 origin-top"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: stage === "enter" ? 0 : 1 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 right-0 h-14 sm:h-20 md:h-24 bg-black z-20 origin-bottom"
      />

      {/* Mobile Fast-Forward / Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={skipToArchive}
        aria-label="Skip to archive"
        className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 px-3.5 py-1.5 rounded-full bg-[#161618]/80 hover:bg-[#202024] border border-amber-400/20 text-[10px] sm:text-xs font-mono tracking-widest text-amber-400/80 hover:text-amber-400 backdrop-blur-md flex items-center gap-1.5 transition-all duration-300 active:scale-95 cursor-pointer"
      >
        <span>SKIP</span>
        <span className="text-amber-400 font-bold">▸</span>
      </motion.button>

      {/* Cursor-reactive lighting (Desktop only) */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="hidden md:block absolute w-[300px] h-[300px] rounded-full bg-amber-400/[0.08] blur-[100px] pointer-events-none z-10 gpu-layer"
      />

      {/* Ambient center glow */}
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-amber-500/[0.05] blur-[50px] md:blur-[120px] pointer-events-none gpu-layer"
      />

      {/* Floating particles - lightweight & GPU optimized */}
      {introParticles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: [0, -35, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 0.35, 0],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute w-1 h-1 rounded-full bg-amber-400/40 pointer-events-none gpu-layer ${
            particle.isMobileVisible ? "block" : "hidden md:block"
          }`}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      {/* Rotating cinematic rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[600px] md:h-[600px] border border-amber-400/5 rounded-full pointer-events-none gpu-layer"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] border border-amber-400/10 rounded-full pointer-events-none gpu-layer"
      />

      {/* Scanning ambient beam */}
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-32 md:h-40 bg-gradient-to-b from-transparent via-amber-400/[0.025] to-transparent pointer-events-none gpu-layer"
      />

      <AnimatePresence mode="wait">
        {stage === "boot" && (
          <motion.div
            key="boot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="font-mono text-xs sm:text-sm text-[#f5f5f0]/60 space-y-2.5 sm:space-y-3 relative z-10 px-6 max-w-lg w-full"
          >
            {bootLines.slice(0, lineIndex).map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center gap-2.5 sm:gap-3"
              >
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-amber-400/80 text-xs sm:text-sm shrink-0"
                >
                  ▸
                </motion.span>
                <span className="truncate tracking-wide">{line}</span>
                {i === lineIndex - 1 && showCursor && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.4 }}
                    className="inline-block w-2 h-4 sm:w-2.5 sm:h-5 bg-amber-400/90 shrink-0"
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
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="text-center px-4 sm:px-6 relative z-10 max-w-4xl mx-auto w-full"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-mono text-[10px] sm:text-xs text-amber-400/80 mb-6 sm:mb-10 tracking-[0.25em] sm:tracking-[0.3em]"
            >
              NURASH WEERASINGHE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl sm:text-5xl md:text-8xl font-bold tracking-tight leading-[1.15]"
            >
              I BUILD THINGS
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-amber-400 italic"
              >
                I WISH EXISTED.
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 sm:mt-12 flex items-center justify-center gap-2 sm:gap-4 flex-wrap"
            >
              {["AI", "Education", "Civic Tech", "Productivity", "Digital Identity"].map(
                (tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                    className="text-[11px] sm:text-xs font-mono text-[#f5f5f0]/50"
                  >
                    {tag}
                    {i < 4 && <span className="mx-2 sm:mx-3 text-[#f5f5f0]/20">·</span>}
                  </motion.span>
                )
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-10 sm:mt-16"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-px h-8 sm:h-12 bg-gradient-to-b from-amber-400/60 to-transparent mx-auto"
              />
            </motion.div>
          </motion.div>
        )}

        {stage === "enter" && (
          <motion.div
            key="enter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center relative z-10 px-4"
          >
            <motion.button
              initial={{ opacity: 0, y: 25, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 220, damping: 22 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={onEnter}
              className="group relative px-10 py-5 sm:px-16 sm:py-6 overflow-hidden rounded-full border border-amber-400/30 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase transition-all duration-500 hover:border-amber-400/80 hover:shadow-[0_0_50px_rgba(251,191,36,0.25)] cursor-pointer bg-[#121214]/60 backdrop-blur-md"
            >
              <span className="relative z-10 text-[#f5f5f0] group-hover:text-amber-300 transition-colors font-medium">
                Enter the Archive
              </span>
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
              transition={{ delay: 0.8 }}
              className="mt-6 sm:mt-8 font-mono text-[10px] sm:text-xs text-[#f5f5f0]/30 tracking-[0.2em]"
            >
              THE BUILDER&apos;S ARCHIVE
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Intro;

