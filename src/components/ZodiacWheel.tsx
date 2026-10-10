import React from 'react'

export default function ZodiacWheel({ className = "w-[260px] sm:w-[340px] md:w-[460px] lg:w-[520px] xl:w-[580px] h-[260px] sm:h-[340px] md:h-[460px] lg:h-[520px] xl:h-[580px]" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none p-3 sm:p-4 ${className}`}>
      {/* Outer Multi-Layer Astronomical Solar Corona & Radiant Flare Glow */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#FF1A00]/45 via-[#FF7700]/55 to-[#FFD700]/45 blur-2xl sm:blur-3xl scale-105 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute inset-0 rounded-full bg-[#FF4500]/20 blur-xl sm:blur-2xl pointer-events-none"></div>

      {/* Outer Concentric Astrolabe Degree Orbit Rings & Ticks (Fully Contained Inside Bounds) */}
      <div className="absolute inset-0 rounded-full border border-amber-400/45 pointer-events-none border-dashed animate-spin-very-slow" style={{ animationDirection: 'reverse', animationDuration: '180s' }}></div>
      <div className="absolute inset-2 rounded-full border-2 border-[#FFD700]/75 pointer-events-none shadow-[0_0_25px_rgba(255,215,0,0.35)]"></div>

      {/* Rotating Background-Less High-Definition Vedic Rashi Chakra Surya Sun Wheel */}
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <picture className="w-full h-full flex items-center justify-center">
          <source srcSet="/images/vedic-zodiac-wheel-orange-nobg.avif" type="image/avif" />
          <source srcSet="/images/vedic-zodiac-wheel-orange-nobg.webp" type="image/webp" />
          <img
            src="/images/vedic-zodiac-wheel-orange-nobg.webp"
            alt="Sacred Vedic Surya Sun & Rashi Chakra 12 Zodiac Wheel Emblem by Astrologer Pandith Vikram"
            width={580}
            height={580}
            decoding="async"
            className="w-full h-full object-contain animate-spin-very-slow select-none pointer-events-none drop-shadow-[0_0_35px_rgba(255,100,0,0.75)]"
          />
        </picture>
      </div>
    </div>
  )
}
