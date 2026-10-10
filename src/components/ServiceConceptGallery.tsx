import React, { useState, useEffect } from 'react'
import type { ServiceGalleryImage, ServiceTheme } from '../data/servicesData'

export interface ServiceConceptGalleryProps {
  gallery: ServiceGalleryImage[]
  theme?: ServiceTheme
  title?: string
  subtitle?: string
  onActionClick?: () => void
}

interface CategoryBadgeConfig {
  badgeBg: string
  badgeText: string
  badgeBorder: string
  icon: string
  shortLabel: string
  pillarTag: string
  keyHighlightLabel: string
  keyHighlightValue: string
  ctaText: string
}

function getCategoryBadgeConfig(
  category: ServiceGalleryImage['category'],
  index: number
): CategoryBadgeConfig {
  switch (category) {
    case 'Sacred Vedic Ritual & Remedy':
      return {
        badgeBg: 'bg-[#8E1612]/95',
        badgeText: 'text-[#FFD700]',
        badgeBorder: 'border-[#FFD700]/60',
        icon: '🔥',
        shortLabel: 'Vedic Ritual & Remedy',
        pillarTag: `PILLAR 0${index + 1} • SACRED KRIYA`,
        keyHighlightLabel: 'Spiritual Method',
        keyHighlightValue: 'Energized Homam, Yantra & Mantra Siddhi',
        ctaText: 'Book This Sacred Ritual',
      }
    case 'Real-Life Transformation':
      return {
        badgeBg: 'bg-[#064e3b]/95',
        badgeText: 'text-emerald-200',
        badgeBorder: 'border-emerald-400/60',
        icon: '🌿',
        shortLabel: 'Life Transformation',
        pillarTag: `PILLAR 0${index + 1} • POSITIVE OUTCOME`,
        keyHighlightLabel: 'Expected Result',
        keyHighlightValue: 'Lasting Peace, Reunion & Obstacle Relief',
        ctaText: 'Consult For This Outcome',
      }
    case 'Astrological & Planetary Iconography':
      return {
        badgeBg: 'bg-[#060B28]/95',
        badgeText: 'text-amber-200',
        badgeBorder: 'border-amber-400/60',
        icon: '🪐',
        shortLabel: 'Planetary Alignment',
        pillarTag: `PILLAR 0${index + 1} • JYOTISH SCIENCE`,
        keyHighlightLabel: 'Planetary Focus',
        keyHighlightValue: 'Janam Kundali, Dasha & Transit Alignment',
        ctaText: 'Check Your Birth Chart',
      }
    default:
      return {
        badgeBg: 'bg-slate-900/95',
        badgeText: 'text-amber-200',
        badgeBorder: 'border-amber-400/50',
        icon: '✦',
        shortLabel: 'Vedic Guidance',
        pillarTag: `PILLAR 0${index + 1} • VEDIC INSIGHT`,
        keyHighlightLabel: 'Consultation Mode',
        keyHighlightValue: '100% Confidential 1-on-1 Session',
        ctaText: 'Request Consultation',
      }
  }
}

function GalleryCard({
  item,
  index,
  accentColor,
  onActionClick,
}: {
  item: ServiceGalleryImage
  index: number
  accentColor: string
  onActionClick?: () => void
}) {
  const [imgSrc, setImgSrc] = useState<string>(item.url)
  const [hasFallenBack, setHasFallenBack] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setImgSrc(item.url)
    setHasFallenBack(false)
    setHasError(false)
    setIsLoading(true)
  }, [item.url, item.fallbackUrl])

  const handleError = () => {
    if (item.fallbackUrl && !hasFallenBack && imgSrc !== item.fallbackUrl) {
      setImgSrc(item.fallbackUrl)
      setHasFallenBack(true)
      setIsLoading(true)
    } else {
      setHasError(true)
      setIsLoading(false)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const badgeConfig = getCategoryBadgeConfig(item.category, index)

  const handleCardCta = () => {
    if (onActionClick) {
      onActionClick()
    } else {
      const formEl = document.getElementById('service-inquiry-form')
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div
      className="group relative bg-white border border-slate-200 hover:border-[#8E1612] rounded-none shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
      style={{ borderTop: `3px solid ${accentColor}` }}
    >
      {/* 1. Image Container with Clean Non-Overflowing Badge */}
      <div className="relative w-full aspect-[16/11] bg-[#060B28] overflow-hidden rounded-none border-b border-slate-200">
        {/* Concise Non-Overflowing Category Badge (Top-Left) */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-roboto font-bold uppercase tracking-wider rounded-none border shadow-md backdrop-blur-sm ${badgeConfig.badgeBg} ${badgeConfig.badgeText} ${badgeConfig.badgeBorder}`}
          >
            <span>{badgeConfig.icon}</span>
            <span>{badgeConfig.shortLabel}</span>
          </span>
        </div>

        {/* Step Number Badge (Top-Right) */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="inline-block bg-black/75 text-white border border-white/25 px-2 py-0.5 text-[10px] font-oswald font-bold tracking-widest uppercase">
            0{index + 1}
          </span>
        </div>

        {/* Image / Fallback (AVIF + WebP + Explicit Dimensions for Zero CLS) */}
        {!hasError ? (
          <picture className="w-full h-full block">
            {imgSrc.endsWith('.webp') && (
              <source srcSet={imgSrc.replace(/\.webp$/, '.avif')} type="image/avif" />
            )}
            <source srcSet={imgSrc} type="image/webp" />
            <img
              src={imgSrc}
              alt={item.alt || `${item.title} - Vedic Astrology Remedy by Pandith Vikram`}
              width={640}
              height={440}
              loading="lazy"
              decoding="async"
              onLoad={handleLoad}
              onError={handleError}
              className={`w-full h-full object-cover rounded-none transition-all duration-500 group-hover:scale-105 ${
                isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            />
          </picture>
        ) : (
          <div className="w-full h-full bg-[#060B28] flex flex-col items-center justify-center p-4 text-center rounded-none">
            <span className="text-[#FFD700] text-3xl mb-2">🕉</span>
            <p className="font-oswald text-xs uppercase text-amber-200 tracking-wider">
              {item.title}
            </p>
          </div>
        )}

        {/* Bottom Gradient Overlay with Pillar Kicker */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-6 pb-2 px-3">
          <span className="text-[10px] font-roboto font-bold uppercase tracking-widest text-amber-300 block">
            ✦ {badgeConfig.pillarTag}
          </span>
        </div>
      </div>

      {/* 2. Card Information Body (Full Title, Description & Structured Vedic Insight) */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h4 className="font-oswald text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-[#8E1612] uppercase tracking-tight leading-snug transition-colors">
            {item.title}
          </h4>

          <p className="font-roboto text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            {item.caption}
          </p>

          {/* Structured Vedic Card Info Box */}
          <div className="bg-[#FAF8F5] border-l-3 border-[#8E1612] p-2.5 space-y-0.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#8E1612] font-roboto">
              {badgeConfig.keyHighlightLabel}:
            </p>
            <p className="text-[11px] font-semibold text-slate-800 font-roboto leading-snug">
              {badgeConfig.keyHighlightValue}
            </p>
          </div>
        </div>

        {/* 3. Interactive Consultation & Direct Connect Links */}
        <div className="pt-3 border-t border-slate-100 space-y-2 mt-auto">
          <button
            type="button"
            onClick={handleCardCta}
            className="w-full py-2 px-3 bg-[#8E1612] hover:bg-[#B91C1C] text-white font-oswald font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer rounded-none shadow-xs"
          >
            <span>{badgeConfig.ctaText}</span>
            <span className="text-[#FFD700] font-bold">→</span>
          </button>

          <div className="flex items-center justify-between gap-2 pt-0.5 text-[11px] font-roboto font-bold">
            <a
              href="tel:+447537121638"
              className="text-slate-700 hover:text-[#B91C1C] transition-colors flex items-center gap-1"
            >
              <span className="text-[#B91C1C]">📞</span>
              <span>Call Astrologer</span>
            </a>

            <span className="text-slate-300">|</span>

            <a
              href="https://wa.me/447537121638"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1"
            >
              <span>💬</span>
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServiceConceptGallery({
  gallery,
  theme,
  subtitle = 'Explore the three sacred pillars of this service — authentic Vedic ritual remedies, real-life spiritual transformation, and planetary birth chart alignment.',
  onActionClick,
}: ServiceConceptGalleryProps) {
  if (!gallery || gallery.length === 0) {
    return null
  }

  const accentColor = theme?.accentColor || '#D61B14'

  return (
    <section
      className="bg-white p-6 sm:p-8 rounded-none border border-slate-200 shadow-sm space-y-6"
      style={{ borderTop: `4px solid ${accentColor}` }}
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 inline-block rounded-none"
              style={{ backgroundColor: accentColor }}
            />
            <span className="text-xs uppercase font-bold tracking-widest text-[#8E1612] font-roboto">
              Three Sacred Pillars of Resolution
            </span>
          </div>

          <h2 className="font-oswald text-2xl sm:text-3xl font-bold text-slate-900 uppercase">
            Sacred Vedic Process &{' '}
            <span style={{ color: accentColor }}>Spiritual Alignment</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm font-roboto leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>

        <a
          href="#service-inquiry-form"
          className="self-start sm:self-auto shrink-0 inline-flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-[#8E1612] border border-[#8E1612]/30 px-3.5 py-2 text-xs font-oswald font-bold uppercase tracking-wider transition-colors"
        >
          <span>✦ Inquire Now</span>
          <span>↓</span>
        </a>
      </div>

      {/* 3-Pillar Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {gallery.map((item, idx) => (
          <GalleryCard
            key={`${item.category}-${idx}`}
            item={item}
            index={idx}
            accentColor={accentColor}
            onActionClick={onActionClick}
          />
        ))}
      </div>

      {/* Bottom Quick-Action & Direct Consultation Links Bar */}
      <div className="bg-gradient-to-r from-[#060B28] via-[#121A42] to-[#8E1612] text-white p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-l-4 border-[#FFD700]">
        <div className="space-y-0.5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#FFD700] font-roboto">
            ✦ Need Personalized Guidance For Your Birth Chart?
          </p>
          <p className="text-xs sm:text-sm text-slate-200 font-roboto">
            Speak directly with Pandith Vikram for a 100% confidential kundali diagnosis and custom remedy plan.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full sm:w-auto">
          <a
            href="tel:+447537121638"
            className="flex-1 sm:flex-initial text-center bg-[#FFD700] hover:bg-amber-300 text-slate-950 font-oswald font-bold text-xs uppercase tracking-wider px-4 py-2.5 transition-colors"
          >
            📞 Call +44 7537121638
          </a>
          <a
            href="https://wa.me/447537121638"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial text-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-oswald font-bold text-xs uppercase tracking-wider px-4 py-2.5 transition-colors"
          >
            💬 WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  )
}

export { ServiceConceptGallery }

