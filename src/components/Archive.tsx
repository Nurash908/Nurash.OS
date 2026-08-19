"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Now } from "@/components/sections/Now";
import { Projects } from "@/components/sections/Projects";
import { Experiments } from "@/components/sections/Experiments";
import { Journey } from "@/components/sections/Journey";
import { Ideas } from "@/components/sections/Ideas";
import { Impact } from "@/components/sections/Impact";
import { Contact } from "@/components/sections/Contact";
import { Nexus } from "@/components/Nexus";
import { BuilderDNA } from "@/components/sections/BuilderDNA";
import { ProofOfWork } from "@/components/sections/ProofOfWork";
import { LabNotebook } from "@/components/sections/LabNotebook";
import { Dream } from "@/components/sections/Dream";
import { Philosophy } from "@/components/sections/Philosophy";
import { Stats } from "@/components/sections/Stats";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/ui/Logo";
import { BackToTop } from "@/components/BackToTop";

const sections = [
  { id: "now", label: "01", name: "NOW", icon: "⚡" },
  { id: "projects", label: "02", name: "PROJECTS", icon: "🚀" },
  { id: "experiments", label: "03", name: "EXPERIMENTS", icon: "🧪" },
  { id: "journey", label: "04", name: "JOURNEY", icon: "🗺️" },
  { id: "ideas", label: "05", name: "IDEAS", icon: "💡" },
  { id: "impact", label: "06", name: "IMPACT", icon: "🌐" },
  { id: "contact", label: "07", name: "CONTACT", icon: "✉️" },
];

export function Archive() {
  const [active, setActive] = useState("now");
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [isProjectsLoading, setIsProjectsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // Simulate initial project database hydration & sync
    const timer = setTimeout(() => {
      setIsProjectsLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const handleReloadProjects = () => {
    setIsProjectsLoading(true);
    setTimeout(() => {
      setIsProjectsLoading(false);
    }, 1200);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setShowScrollHint(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActive(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeSectionObj = sections.find((s) => s.id === active) || sections[0];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0] relative selection:bg-amber-400 selection:text-black">
      {/* Progress bar with glow */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 origin-left z-[60] gpu-layer"
      />
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[5px] bg-amber-400/25 blur-[3px] origin-left z-[59] gpu-layer hidden sm:block"
      />

      {/* Desktop Cinematic grain (Hidden on mobile for fast 60/120fps scrolling) */}
      <div
        className="hidden md:block fixed inset-0 opacity-[0.03] pointer-events-none z-[55]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')",
        }}
      />

      {/* Scroll hint */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
          >
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-mono text-[10px] sm:text-xs text-[#f5f5f0]/40 tracking-[0.3em]"
            >
              SCROLL
            </motion.span>
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8 sm:h-10 bg-gradient-to-b from-amber-400/60 to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header & Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#f5f5f0]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Logo size={24} />
            <span className="font-serif text-xs sm:text-sm font-bold tracking-[0.2em] text-[#f5f5f0]/90 group-hover:text-amber-400 transition-colors">
              NURASH.OS
            </span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + sections.indexOf(s) * 0.04 }}
                onClick={() => scrollToSection(s.id)}
                className={`group flex items-center gap-2 text-xs font-mono tracking-wider transition-all duration-300 ${
                  active === s.id
                    ? "text-amber-400"
                    : "text-[#f5f5f0]/30 hover:text-[#f5f5f0]/70"
                }`}
              >
                <span className={`text-[10px] ${active === s.id ? "text-amber-400" : "text-[#f5f5f0]/20"}`}>
                  {s.label}
                </span>
                {s.name}
                <motion.span
                  animate={{ width: active === s.id ? 16 : 0 }}
                  className="h-px bg-amber-400"
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Cinematic Nav Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              id="mobile-menu-trigger"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161618]/90 border border-amber-400/30 text-amber-400 font-mono text-[11px] tracking-wider active:scale-95 transition-all duration-200"
              aria-label="Toggle section navigation"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>{activeSectionObj.label} {activeSectionObj.name}</span>
              <span className="text-[10px] text-amber-400/70">{mobileMenuOpen ? "✕" : "▾"}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Cinematic Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden fixed top-[61px] left-0 right-0 z-40 bg-[#0c0c0e]/95 backdrop-blur-2xl border-b border-amber-400/20 shadow-2xl p-4 max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#f5f5f0]/5">
              <span className="font-mono text-[10px] text-amber-400/70 tracking-[0.25em] uppercase">
                ARCHIVE DIRECTORY
              </span>
              <span className="text-[10px] font-mono text-[#f5f5f0]/30">
                7 MODULES
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {sections.map((s, idx) => {
                const isSelected = active === s.id;
                return (
                  <motion.button
                    key={s.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all duration-200 active:scale-[0.98] ${
                      isSelected
                        ? "bg-amber-400/10 border border-amber-400/40 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.1)]"
                        : "bg-[#141416]/60 border border-[#f5f5f0]/5 text-[#f5f5f0]/70 hover:text-[#f5f5f0]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-bold ${isSelected ? "text-amber-400" : "text-[#f5f5f0]/30"}`}>
                        {s.label}
                      </span>
                      <span className="text-sm tracking-wide font-medium">
                        {s.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs opacity-70">{s.icon}</span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <Now />
        <Stats />
        <Projects isLoading={isProjectsLoading} onReload={handleReloadProjects} />
        <Experiments />
        <Journey />
        <Ideas />
        <ProofOfWork />
        <BuilderDNA />
        <LabNotebook />
        <Dream />
        <Philosophy />
        <Skills />
        <Testimonials />
        <Impact />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <Nexus />
    </div>
  );
}
export default Archive;
