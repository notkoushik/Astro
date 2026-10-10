import React from 'react'

export default function ZodiacWheel({ className = "w-[300px] sm:w-[420px] md:w-[480px] lg:w-[540px] xl:w-[600px] h-[300px] sm:h-[420px] md:h-[480px] lg:h-[540px] xl:h-[600px]" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Outer Multi-Layer Astronomical Solar Corona & Radiant Flare Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF1A00]/40 via-[#FF7700]/50 to-[#FFD700]/40 blur-3xl scale-110 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute -inset-6 rounded-full bg-[#FF4500]/20 blur-2xl pointer-events-none"></div>

      {/* Outer Concentric Astrolabe Degree Orbit Rings & Ticks */}
      <div className="absolute -inset-4 rounded-full border border-amber-400/35 pointer-events-none border-dashed animate-spin-very-slow" style={{ animationDirection: 'reverse', animationDuration: '180s' }}></div>
      <div className="absolute -inset-1.5 rounded-full border-2 border-[#FFD700]/70 pointer-events-none shadow-[0_0_25px_rgba(255,215,0,0.35)]"></div>

      {/* Rotating Background-Less High-Definition Vedic Rashi Chakra Wheel */}
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <picture className="w-full h-full flex items-center justify-center">
          <source srcSet="/images/vedic-zodiac-wheel-orange-nobg.avif" type="image/avif" />
          <source srcSet="/images/vedic-zodiac-wheel-orange-nobg.webp" type="image/webp" />
          <img
            src="/images/vedic-zodiac-wheel-orange-nobg.webp"
            alt="Sacred Vedic Rashi Chakra 12 Zodiac Wheel Emblem by Astrologer Pandith Vikram"
            width={580}
            height={580}
            decoding="async"
            className="w-full h-full object-contain animate-spin-very-slow select-none pointer-events-none drop-shadow-[0_0_40px_rgba(255,100,0,0.7)]"
          />
        </picture>
      </div>
    </div>
  )
}
