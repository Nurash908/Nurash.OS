"use client";

import { motion } from "framer-motion";

interface ProjectSkeletonProps {
  count?: number;
}

export function ProjectSkeleton({ count = 5 }: ProjectSkeletonProps) {
  return (
    <div className="w-full space-y-16 py-2" id="project-archive-skeleton">
      {/* 2026 Active Builds Skeleton */}
      <div className="relative">
        {/* Timeline year marker skeleton */}
        <div className="relative pl-16 md:pl-24 mb-8 flex items-center gap-4">
          <div className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400/40 animate-ping" />
          <div className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400/80 shadow-[0_0_15px_rgba(251,191,36,0.6)]" />
          
          <div className="h-9 w-28 rounded-lg bg-[#18181b] border border-amber-400/20 relative overflow-hidden flex items-center px-3">
            <span className="font-serif text-2xl font-bold text-amber-400/30">2026</span>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/15 to-transparent pointer-events-none"
            />
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-mono text-amber-400/80 tracking-wider">
              FETCHING ARCHIVE DATA...
            </span>
          </div>
        </div>

        {/* Project cards skeleton list */}
        <div className="space-y-4 pl-16 md:pl-24">
          {Array.from({ length: count }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-xl bg-[#111111]/70 border border-[#f5f5f0]/5 relative overflow-hidden backdrop-blur-sm shadow-sm"
            >
              {/* Animated shimmer beam */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/[0.05] to-transparent pointer-events-none"
              />

              <div className="flex items-center justify-between relative z-10">
                {/* Left: Icon and info */}
                <div className="flex items-center gap-4">
                  {/* Icon skeleton */}
                  <div className="w-10 h-10 rounded-lg bg-[#1a1a1d] border border-white/5 relative overflow-hidden flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-amber-400/20 animate-pulse" />
                  </div>

                  {/* Title & Description skeleton */}
                  <div className="space-y-2">
                    <div
                      className="h-5 rounded-md bg-[#222226] relative overflow-hidden"
                      style={{ width: i === 0 ? "170px" : i === 1 ? "130px" : i === 2 ? "150px" : "140px" }}
                    >
                      <div className="w-full h-full bg-gradient-to-r from-[#202024] via-[#2a2a30] to-[#202024] animate-pulse" />
                    </div>
                    <div
                      className="h-3.5 rounded bg-[#18181b] relative overflow-hidden"
                      style={{ width: i % 2 === 0 ? "230px" : "190px" }}
                    >
                      <div className="w-full h-full bg-gradient-to-r from-[#17171a] via-[#1f1f23] to-[#17171a] animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Right: Badge and arrow skeleton */}
                <div className="flex items-center gap-4">
                  {/* Status badge skeleton */}
                  <div className="w-20 h-6 rounded-full bg-[#18181b] border border-amber-400/15 relative overflow-hidden flex items-center justify-center">
                    <div className="w-10 h-2 rounded bg-amber-400/20 animate-pulse" />
                  </div>

                  {/* Arrow placeholder */}
                  <div className="w-4 h-4 rounded bg-[#1f1f23] opacity-40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2025 Historical Builds Skeleton */}
      <div className="relative pt-4">
        {/* Timeline year marker skeleton */}
        <div className="relative pl-16 md:pl-24 mb-8 flex items-center gap-4">
          <div className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400/30" />
          <div className="h-9 w-24 rounded-lg bg-[#18181b] border border-white/5 relative overflow-hidden flex items-center px-3">
            <span className="font-serif text-2xl font-bold text-[#f5f5f0]/20">2025</span>
          </div>
        </div>

        {/* Project cards skeleton list */}
        <div className="space-y-4 pl-16 md:pl-24">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`prev-${i}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
              className="p-6 rounded-xl bg-[#111111]/50 border border-[#f5f5f0]/5 relative overflow-hidden backdrop-blur-sm"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: (i + 5) * 0.15,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5f5f0]/[0.02] to-transparent pointer-events-none"
              />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#18181b] relative overflow-hidden flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-zinc-600/30" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-5 w-28 rounded-md bg-[#1f1f23] animate-pulse" />
                    <div className="h-3.5 w-44 rounded bg-[#161618] animate-pulse" />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-20 h-6 rounded-full bg-[#18181b] border border-white/5" />
                  <div className="w-4 h-4 rounded bg-[#18181b] opacity-30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProjectSkeleton;
