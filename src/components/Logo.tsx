import React from 'react'

interface LogoProps {
  className?: string
  variant?: 'light' | 'dark' | 'gold'
}

export default function Logo({ className = "h-12", variant = "light" }: LogoProps) {
  const isLight = variant === 'light'

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 100% Original Vector Astronomical Astrolabe & Navagraha Surya Mandala */}
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGoldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF275" />
              <stop offset="35%" stopColor="#FFD700" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="logoCrimsonGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="50%" stopColor="#B91C1C" />
              <stop offset="100%" stopColor="#7F1D1D" />
            </linearGradient>
            <radialGradient id="logoCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="60%" stopColor="#FEF08A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </radialGradient>
          </defs>

          {/* 12 Radiant Astronomical Zodiac Solar Rays */}
          <g stroke={isLight ? "url(#logoCrimsonGrad)" : "url(#logoGoldGrad)"} strokeWidth="2.5" strokeLinecap="round">
            {/* Cardinal Rays */}
            <line x1="50" y1="3" x2="50" y2="14" />
            <line x1="50" y1="86" x2="50" y2="97" />
            <line x1="3" y1="50" x2="14" y2="50" />
            <line x1="86" y1="50" x2="97" y2="50" />
            {/* Diagonal Rays */}
            <line x1="16.7" y1="16.7" x2="24.5" y2="24.5" />
            <line x1="75.5" y1="75.5" x2="83.3" y2="83.3" />
            <line x1="83.3" y1="16.7" x2="75.5" y2="24.5" />
            <line x1="24.5" y1="75.5" x2="16.7" y2="83.3" />
            {/* 4 Intermediate Subtle Rays */}
            <line x1="32.5" y1="7" x2="36.5" y2="17" strokeWidth="1.8" opacity="0.85" />
            <line x1="67.5" y1="7" x2="63.5" y2="17" strokeWidth="1.8" opacity="0.85" />
            <line x1="32.5" y1="93" x2="36.5" y2="83" strokeWidth="1.8" opacity="0.85" />
            <line x1="67.5" y1="93" x2="63.5" y2="83" strokeWidth="1.8" opacity="0.85" />
          </g>

          {/* Outer Astrolabe Celestial Orbit Ring */}
          <circle cx="50" cy="50" r="33" stroke="url(#logoGoldGrad)" strokeWidth="1.8" strokeDasharray="3 2.5" />
          
          {/* Inscribed Sacred Vedic Diamond (Kundali Geometric Frame) */}
          <rect x="27" y="27" width="46" height="46" transform="rotate(45 50 50)" stroke="url(#logoGoldGrad)" strokeWidth="1.4" fill="none" opacity="0.75" />

          {/* Middle Radiant Celestial Ring */}
          <circle cx="50" cy="50" r="25" stroke="url(#logoGoldGrad)" strokeWidth="2.2" fill={isLight ? "#FFFDF5" : "#0A1128"} />

          {/* 8-Point Navagraha Planetary Star Coordinates */}
          <circle cx="50" cy="25" r="2" fill={isLight ? "#B91C1C" : "#FFE58F"} />
          <circle cx="50" cy="75" r="2" fill={isLight ? "#B91C1C" : "#FFE58F"} />
          <circle cx="25" cy="50" r="2" fill={isLight ? "#B91C1C" : "#FFE58F"} />
          <circle cx="75" cy="50" r="2" fill={isLight ? "#B91C1C" : "#FFE58F"} />
          <circle cx="32.3" cy="32.3" r="1.6" fill="#F59E0B" />
          <circle cx="67.7" cy="67.7" r="1.6" fill="#F59E0B" />
          <circle cx="67.7" cy="32.3" r="1.6" fill="#F59E0B" />
          <circle cx="32.3" cy="67.7" r="1.6" fill="#F59E0B" />

          {/* Central Radiant Surya Sun Core */}
          <circle cx="50" cy="50" r="15" fill="url(#logoCoreGlow)" stroke="url(#logoGoldGrad)" strokeWidth="1.5" />

          {/* Sacred Celestial Bindu / Cosmic Spiral */}
          <path
            d="M50 42 C45.5 42 42.5 45.8 42.5 49.5 C42.5 54 46 57.5 50 57.5 C53.5 57.5 56.5 55 56.5 51.5 C56.5 49 54.5 47.5 52 47.5 C50.5 47.5 49.2 48.5 49.2 50"
            stroke="#9A3412"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="50" cy="50" r="1.6" fill="#B45309" />
        </svg>
      </div>

      {/* Prestigious Brand Typography: PANDITH VIKRAM • TOP VEDIC ASTROLOGER */}
      <div className="flex flex-col justify-center whitespace-nowrap shrink-0">
        <div className="flex items-baseline tracking-wide whitespace-nowrap">
          <span className={`font-manrope text-lg sm:text-xl lg:text-[23px] font-extrabold uppercase tracking-[0.04em] leading-none whitespace-nowrap ${
            isLight 
              ? 'text-slate-900' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5B8] via-[#FFD700] to-[#F59E0B] drop-shadow-[0_2px_10px_rgba(255,215,0,0.3)]'
          }`}>
            PANDITH VIKRAM
          </span>
        </div>
        <div className="flex items-center gap-1 mt-1 whitespace-nowrap">
          <span className="text-[#B91C1C] text-[8px] leading-none shrink-0">✦</span>
          <span className={`text-[9px] sm:text-[9.5px] font-extrabold tracking-[0.18em] uppercase leading-none font-manrope whitespace-nowrap ${
            isLight ? 'text-[#B91C1C]' : 'text-amber-300/90'
          }`}>
            VEDIC ASTROLOGER • LONDON UK
          </span>
          <span className="text-[#B91C1C] text-[8px] leading-none shrink-0">✦</span>
        </div>
      </div>
    </div>
  )
}
