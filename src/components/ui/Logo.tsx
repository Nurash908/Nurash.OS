"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export function Logo({ className = "", size = 28, glow = true }: LogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      id="nurash-brand-logo"
    >
      {glow && (
        <div
          className="absolute inset-0 rounded-lg bg-amber-400/25 blur-[6px] pointer-events-none transform scale-90"
          aria-hidden="true"
        />
      )}
      <svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full"
      >
        <defs>
          <linearGradient id="logoBgGrad" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1c1917" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <linearGradient id="logoAmberGold" x1="140" y1="120" x2="372" y2="390" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="25%" stopColor="#FBBF24" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="logoDiagonalShine" x1="140" y1="130" x2="372" y2="382" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#FDE68A" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Background rounded squircle */}
        <rect
          x="24"
          y="24"
          width="464"
          height="464"
          rx="112"
          fill="url(#logoBgGrad)"
          stroke="#F59E0B"
          strokeOpacity="0.5"
          strokeWidth="12"
        />

        {/* Architectural 'N' Monogram */}
        <g>
          {/* Left vertical bar */}
          <rect x="136" y="128" width="56" height="256" rx="10" fill="url(#logoAmberGold)" />

          {/* Right vertical bar */}
          <rect x="320" y="128" width="56" height="256" rx="10" fill="url(#logoAmberGold)" />

          {/* Diagonal traverse beam */}
          <path
            d="M136 136 C136 130 142 126 150 128 L192 128 L376 376 C380 382 376 388 368 388 L326 388 L142 140 C138 135 136 138 136 136 Z"
            fill="url(#logoDiagonalShine)"
          />

          {/* Architectural highlight facet */}
          <path d="M136 136 L192 136 L192 210 L136 160 Z" fill="#FFFFFF" fillOpacity="0.35" />

          {/* Spark star in upper right */}
          <path
            d="M396 86 Q396 112 422 112 Q396 112 396 138 Q396 112 370 112 Q396 112 396 86 Z"
            fill="#FDE68A"
          />
          <circle cx="396" cy="112" r="4" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}
export default Logo;
