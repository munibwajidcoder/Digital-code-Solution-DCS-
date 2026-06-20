"use client";

export default function IntroSportsCar({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="intro-car-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1f" />
          <stop offset="45%" stopColor="#0a0a0c" />
          <stop offset="100%" stopColor="#050508" />
        </linearGradient>
        <linearGradient id="intro-car-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="intro-car-purple-rim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7a22ff" stopOpacity="0" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7a22ff" stopOpacity="0" />
        </linearGradient>
        <filter id="intro-car-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="320" cy="198" rx="250" ry="14" fill="rgba(0,0,0,0.55)" />

      {/* Purple underglow */}
      <path
        d="M80 168 Q320 188 560 168"
        stroke="url(#intro-car-purple-rim)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Body */}
      <path
        d="M40 148 C90 132 140 118 210 108 C280 98 360 96 440 102 C500 108 540 118 580 128 L600 138 L590 158 L560 168 L520 172 L480 168 L120 168 L60 162 Z"
        fill="url(#intro-car-body)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />

      {/* Cabin / glass */}
      <path
        d="M220 108 C260 88 340 82 410 92 C450 98 480 108 500 118 L480 128 C440 118 360 112 300 114 C260 116 240 120 220 128 Z"
        fill="rgba(12,12,18,0.95)"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
      />

      {/* Body highlight */}
      <path
        d="M100 130 C200 118 380 112 520 124 L500 136 C360 128 200 132 110 144 Z"
        fill="url(#intro-car-highlight)"
        opacity="0.55"
      />

      {/* Front splitter accent */}
      <path d="M38 150 L58 142 L62 158 Z" fill="#7a22ff" opacity="0.65" filter="url(#intro-car-glow)" />

      {/* Headlight */}
      <path d="M34 144 L48 138 L50 152 Z" fill="rgba(255,255,255,0.85)" />
      <path d="M36 146 L44 142 L45 150 Z" fill="rgba(200,220,255,0.9)" />

      {/* Tail light */}
      <rect x="592" y="132" width="8" height="18" rx="2" fill="#ff2244" opacity="0.85" />

      {/* Wheels */}
      <circle cx="170" cy="168" r="34" fill="#08080a" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
      <circle cx="170" cy="168" r="22" fill="#111116" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <circle cx="170" cy="168" r="8" fill="#2a2a32" />

      <circle cx="470" cy="168" r="34" fill="#08080a" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
      <circle cx="470" cy="168" r="22" fill="#111116" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <circle cx="470" cy="168" r="8" fill="#2a2a32" />

      {/* Side intake */}
      <path
        d="M300 138 L380 134 L378 148 L302 152 Z"
        fill="rgba(122,34,255,0.15)"
        stroke="rgba(168,85,247,0.25)"
        strokeWidth="1"
      />
    </svg>
  );
}
