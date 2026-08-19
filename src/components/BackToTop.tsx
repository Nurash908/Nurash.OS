"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appears only after scrolling past the initial viewport height (100vh)
      const threshold = window.innerHeight;
      if (window.scrollY > threshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Check initial position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById("now");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 flex items-center gap-2"
        >
          {/* Tooltip on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.2 }}
                className="hidden sm:inline-block px-3 py-1 text-[11px] font-mono tracking-widest uppercase bg-[#141414]/95 text-amber-400/90 rounded-md border border-amber-400/20 backdrop-blur-md shadow-lg pointer-events-none whitespace-nowrap"
              >
                TOP · HERO
              </motion.span>
            )}
          </AnimatePresence>

          {/* Floating Action Button */}
          <motion.button
            id="back-to-top-button"
            type="button"
            aria-label="Back to top"
            onClick={scrollToHero}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#121214]/90 hover:bg-[#1c1917] border border-amber-400/30 hover:border-amber-400/80 backdrop-blur-md text-amber-400 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all duration-300 cursor-pointer active:scale-95"
          >
            {/* Ambient inner glow */}
            <span
              className="absolute inset-0 rounded-full bg-amber-400/0 group-hover:bg-amber-400/10 transition-colors duration-300 pointer-events-none"
              aria-hidden="true"
            />

            {/* Upward Arrow Icon */}
            <ArrowUp
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
              strokeWidth={2.25}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default BackToTop;
