import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import type {
  DetailedService,
  ServiceTheme,
  ServiceGalleryImage,
} from '../data/servicesData'
import ServiceConceptGallery from './ServiceConceptGallery'

export type { DetailedService, ServiceTheme, ServiceGalleryImage }
export { default as ServiceConceptGallery } from './ServiceConceptGallery'

export interface ServiceDetailViewProps {
  service: DetailedService
  onBack: () => void
  onBookNow: () => void
  onSelectService?: (serviceId: string) => void
}

type Props = ServiceDetailViewProps

const defaultTheme: ServiceTheme = {
  primaryGradient: 'from-[#060B28] via-[#0C1445] to-[#141B4D]',
  heroBg: '#060B28',
  accentColor: '#D61B14',
  accentBorder: 'border-[#D61B14]',
  badgeBg: 'bg-[#D61B14]',
  badgeText: 'text-amber-200',
  badgeBorder: 'border-[#D61B14]',
  testimonialBg: 'bg-[#800000]',
  testimonialBorder: 'border-amber-400',
  cardBorderHover: 'hover:border-[#D61B14]',
  glowColor: 'rgba(214, 27, 20, 0.25)',
}

export default function ServiceDetailView({ service, onBack, onBookNow, onSelectService }: Props) {
  const theme = service.theme || defaultTheme

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } })
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', dob: '', notes: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20 animate-in fade-in duration-300">
      {/* 1. Top Navigation & Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-roboto">
          <div className="flex items-center gap-2 text-slate-500">
            <button
              onClick={onBack}
              className="hover:text-[#D61B14] font-medium transition-colors cursor-pointer rounded-none"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={onBack}
              className="hover:text-[#D61B14] font-medium transition-colors cursor-pointer rounded-none"
            >
              Astrology Services
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold">
              {service.title} {service.subtitle}
            </span>
          </div>

          <button
            onClick={onBack}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#D61B14] hover:text-black tracking-wider transition-colors cursor-pointer rounded-none"
          >
            <span>← Back to All Services</span>
          </button>
        </div>
      </div>

      {/* 2. Hero Section with Dynamic Planetary Atmosphere */}
      <div
        className={`relative text-white py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r ${theme.primaryGradient}`}
        style={{ backgroundColor: theme.heroBg }}
      >
        {/* Atmospheric Planetary Glow Layers */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] pointer-events-none opacity-30 blur-3xl rounded-none"
          style={{ background: theme.glowColor }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] pointer-events-none opacity-20 blur-3xl rounded-none"
          style={{ background: theme.glowColor }}
        />

        {/* Background image with deep overlay (AVIF + WebP + Explicit Dimensions) */}
        <div className="absolute inset-0">
          <picture className="w-full h-full block">
            {service.img.endsWith('.webp') && (
              <source srcSet={service.img.replace(/\.webp$/, '.avif')} type="image/avif" />
            )}
            <source srcSet={service.img} type="image/webp" />
            <img
              src={service.img}
              alt={`${service.title} ${service.subtitle} - Vedic astrology service with Pandith Vikram, Los Angeles`}
              width={1200}
              height={600}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover opacity-25 mix-blend-luminosity rounded-none"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/65"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            {/* Dual Badges: Category + Presiding Vedic Deity */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`inline-block text-xs uppercase font-bold px-3 py-1 font-roboto tracking-widest rounded-none border shadow ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}
                style={{ borderColor: theme.accentColor }}
              >
                {service.category}
              </span>

              {service.deity && (
                <span
                  className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-xs font-semibold px-3 py-1 font-roboto tracking-wide rounded-none border shadow-sm"
                  style={{ borderColor: `${theme.accentColor}80`, color: '#FFF' }}
                >
                  <span style={{ color: theme.accentColor }}>🕉️ Guiding Deity:</span>
                  <span className="font-bold text-amber-200">{service.deity}</span>
                </span>
              )}
            </div>

            <h1 className="font-oswald text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              {service.title}{' '}
              <span style={{ color: theme.accentColor }}>{service.subtitle}</span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-roboto">
              {service.desc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="tel:+15103714626"
                className="bg-[#D61B14] hover:bg-[#b5140e] text-white font-roboto font-bold px-6 py-3 rounded-none text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer border border-red-500/30"
              >
                <span>📞 Call +1 510-371-4626</span>
              </a>
              <button
                onClick={onBookNow}
                className="text-slate-950 font-roboto font-bold px-6 py-3 rounded-none text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:brightness-110"
                style={{ backgroundColor: theme.accentColor }}
              >
                Book This Reading
              </button>
            </div>
          </div>

          {/* Right Column Hero Card: Vedic Cosmic Sanctuary */}
          <div className="lg:col-span-4 hidden lg:block">
            <div
              className="bg-black/50 backdrop-blur-md border p-6 rounded-none space-y-3.5 shadow-2xl relative overflow-hidden"
              style={{
                borderColor: `${theme.accentColor}60`,
                boxShadow: `0 0 30px ${theme.glowColor}`,
              }}
            >
              <div
                className="flex items-center justify-between border-b pb-2"
                style={{ borderColor: `${theme.accentColor}40` }}
              >
                <p
                  className="font-oswald text-base font-bold uppercase tracking-wide"
                  style={{ color: theme.accentColor }}
                >
                  Hollywood Blvd Office
                </p>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-none bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Los Angeles, CA
                </span>
              </div>

              {service.deity && (
                <div className="text-xs space-y-1 font-roboto bg-white/5 p-2.5 rounded-none border border-white/10">
                  <p className="text-[11px] uppercase tracking-wider text-slate-300 font-bold">
                    Prayers Offered To
                  </p>
                  <p className="text-amber-200 font-serif italic text-xs leading-relaxed">
                    "{service.deity}"
                  </p>
                </div>
              )}

              <p className="text-xs text-slate-300 leading-relaxed font-roboto">
                Meet Pandith Vikram at 7001 Hollywood Blvd, Los Angeles, CA 90028, or book a private phone or video reading from anywhere in the US.
              </p>

              <div
                className="pt-2 border-t flex items-center justify-between text-xs font-bold"
                style={{ borderColor: `${theme.accentColor}30`, color: theme.accentColor }}
              >
                <span>⚡ Open 7 Days a Week</span>
                <span className="text-white">8 AM – 10 PM PT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main In-Depth Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Core Astrological Concepts & Remedies */}
          <div className="lg:col-span-8 space-y-10">
            {/* A. Astrological Root Cause */}
            <div
              className="bg-white p-6 sm:p-8 rounded-none border border-slate-200 shadow-sm space-y-4"
              style={{ borderTop: `4px solid ${theme.accentColor}` }}
            >
              <h2 className="font-oswald text-2xl sm:text-3xl font-bold text-slate-900 uppercase">
                What Your Chart Reveals{' '}
                <span style={{ color: theme.accentColor }}>
                  About This Problem
                </span>
              </h2>
              <div
                className="w-16 h-1 rounded-none"
                style={{ backgroundColor: theme.accentColor }}
              ></div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-roboto">
                {service.planetaryCause}
              </p>
            </div>

            {/* B. Warning Signs / Symptoms (Square Grid) */}
            <div
              className="bg-white p-6 sm:p-8 rounded-none border border-slate-200 shadow-sm space-y-4"
              style={{ borderTop: `4px solid ${theme.accentColor}` }}
            >
              <h2 className="font-oswald text-2xl sm:text-3xl font-bold text-slate-900 uppercase">
                Signs This{' '}
                <span style={{ color: theme.accentColor }}>
                  May Be Affecting You
                </span>
              </h2>
              <div
                className="w-16 h-1 rounded-none"
                style={{ backgroundColor: theme.accentColor }}
              ></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.symptoms.map((sym, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 p-3.5 rounded-none flex items-start gap-3 transition-all hover:bg-white hover:shadow-sm"
                    style={{ borderLeft: `4px solid ${theme.accentColor}` }}
                  >
                    <span
                      className="font-bold text-base mt-0.5 select-none"
                      style={{ color: theme.accentColor }}
                    >
                      ✦
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 font-roboto leading-relaxed">
                      {sym}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* C. Tailored Vedic Remedies Offered */}
            <div
              className="bg-white p-6 sm:p-8 rounded-none border border-slate-200 shadow-sm space-y-4"
              style={{ borderTop: `4px solid ${theme.accentColor}` }}
            >
              <h2 className="font-oswald text-2xl sm:text-3xl font-bold text-slate-900 uppercase">
                Remedies Pandith Vikram{' '}
                <span style={{ color: theme.accentColor }}>
                  May Recommend
                </span>
              </h2>
              <div
                className="w-16 h-1 rounded-none"
                style={{ backgroundColor: theme.accentColor }}
              ></div>

              <div className="space-y-4 pt-2">
                {service.remedies.map((rem, idx) => (
                  <div
                    key={idx}
                    className={`border border-slate-200 p-4 sm:p-5 rounded-none transition-all bg-white ${theme.cardBorderHover} hover:shadow-sm`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-none text-white font-oswald text-xs font-bold"
                        style={{ backgroundColor: theme.accentColor }}
                      >
                        0{idx + 1}
                      </span>
                      <h3
                        className="font-oswald text-lg font-bold uppercase"
                        style={{ color: theme.accentColor }}
                      >
                        {rem.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 font-roboto leading-relaxed pl-9">
                      {rem.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* D. Sacred 3-Image Concept Gallery */}
            {service.gallery && service.gallery.length > 0 && (
              <ServiceConceptGallery
                gallery={service.gallery}
                theme={theme}
                onActionClick={onBookNow}
              />
            )}

            {/* E. Consultation Journey (4 Steps) */}
            <div
              className="bg-white p-6 sm:p-8 rounded-none border border-slate-200 shadow-sm space-y-4"
              style={{ borderTop: `4px solid ${theme.accentColor}` }}
            >
              <h2 className="font-oswald text-2xl sm:text-3xl font-bold text-slate-900 uppercase">
                Your Consultation,{' '}
                <span style={{ color: theme.accentColor }}>
                  Step by Step
                </span>
              </h2>
              <div
                className="w-16 h-1 rounded-none"
                style={{ backgroundColor: theme.accentColor }}
              ></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {service.howItWorks.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 p-4 rounded-none border border-slate-200 text-center transition-all hover:bg-white hover:shadow-sm"
                  >
                    <div
                      className={`w-8 h-8 rounded-none ${theme.badgeBg} ${theme.badgeText} font-oswald font-bold text-sm mx-auto flex items-center justify-center mb-2 shadow-sm`}
                    >
                      {idx + 1}
                    </div>
                    <p className="text-xs text-slate-700 font-roboto font-medium leading-snug">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* F. Example Client Journey (Illustrative story, names & details changed; Dynamically Styled) */}
            <div
              className={`${theme.testimonialBg} ${theme.testimonialBorder} border-2 text-white p-6 sm:p-8 rounded-none shadow-lg space-y-3 relative overflow-hidden`}
              style={{
                borderLeftColor: theme.accentColor,
                borderLeftWidth: '4px',
                boxShadow: `0 4px 20px ${theme.glowColor}`,
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs uppercase font-bold tracking-widest font-roboto"
                  style={{ color: theme.accentColor }}
                >
                  Example Client Journey
                </span>
                <span className="text-amber-400 text-[11px] uppercase tracking-wider font-roboto select-none">✦ Names Changed</span>
              </div>
              <p className="font-serif italic text-sm sm:text-base leading-relaxed text-amber-100">
                "{service.testimonial.quote}"
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-white font-oswald">
                  — {service.testimonial.client}
                </p>
                <span className="text-amber-300 text-xs font-roboto">
                  {service.testimonial.location}
                </span>
              </div>
            </div>

            {/* G. Dedicated Service FAQs (Realistic Client Questions & Honest Answers) */}
            {service.faqs && service.faqs.length > 0 && (
              <div
                className="bg-white p-6 sm:p-8 rounded-none border border-slate-200 shadow-sm space-y-4"
                style={{ borderTop: `4px solid ${theme.accentColor}` }}
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h2 className="font-oswald text-2xl sm:text-3xl font-bold text-slate-900 uppercase">
                    Questions Clients{' '}
                    <span style={{ color: theme.accentColor }}>
                      Often Ask
                    </span>
                  </h2>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-roboto">
                    ✦ Straight, Honest Answers
                  </span>
                </div>
                <div
                  className="w-16 h-1 rounded-none"
                  style={{ backgroundColor: theme.accentColor }}
                ></div>
                <div className="divide-y divide-slate-100 pt-1">
                  {service.faqs.map((faq, idx) => (
                    <details key={idx} className="group py-3.5 cursor-pointer" open={idx === 0}>
                      <summary className="font-oswald text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-[#B91C1C] flex items-center justify-between list-none uppercase transition-colors">
                        <span>{faq.question}</span>
                        <span className="text-[#B91C1C] transition-transform duration-200 group-open:rotate-180 text-xs ml-2 shrink-0">▼</span>
                      </summary>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 font-roboto leading-relaxed pl-1">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Square Inquiry / Booking Form + Quick Service Links */}
          <div className="lg:col-span-4 space-y-6">
            <div
              id="service-inquiry-form"
              className={`bg-white p-6 rounded-none border-2 shadow-lg ${theme.accentBorder}`}
              style={{ borderColor: theme.accentColor }}
            >
              <div className="text-center pb-4 border-b border-slate-100 mb-4">
                <span
                  className="text-[11px] font-bold uppercase tracking-widest font-roboto"
                  style={{ color: theme.accentColor }}
                >
                  Private Inquiry
                </span>
                <h3 className="font-oswald text-2xl font-bold text-slate-900 uppercase mt-1">
                  Ask About {service.title} {service.subtitle}
                </h3>
                <p className="text-xs text-slate-500 font-roboto mt-0.5">
                  Answered personally by Pandith Vikram
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-3 animate-in fade-in duration-200">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-2xl font-bold rounded-none border border-emerald-300">
                    ✓
                  </div>
                  <h4 className="font-oswald text-xl font-bold text-slate-900 uppercase">
                    Inquiry Received!
                  </h4>
                  <p className="text-xs text-slate-600 font-roboto">
                    Thank you. Pandith Vikram’s office will read your note and call you back soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 font-roboto">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Meera Patel"
                      className="w-full text-xs px-3 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number (include area code) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (310) 555-0123"
                      className="w-full text-xs px-3 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Birth Date (optional)
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={e => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tell Us What’s Happening *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="A few lines about what you are facing..."
                      className="w-full text-xs px-3 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-slate-800"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white font-roboto font-bold py-3 rounded-none text-xs uppercase tracking-wider transition-all shadow cursor-pointer mt-1 hover:brightness-110"
                    style={{ backgroundColor: theme.accentColor }}
                  >
                    Send My Inquiry
                  </button>
                </form>
              )}

              {/* Quick Helpline Box */}
              <div className="mt-6 pt-5 border-t border-slate-200 text-center space-y-2">
                <p className="text-xs text-slate-500 font-roboto">Prefer to Talk Now?</p>
                <a
                  href="tel:+15103714626"
                  className="block font-oswald text-xl font-bold hover:text-black transition-colors rounded-none"
                  style={{ color: theme.accentColor }}
                >
                  📞 +1 510-371-4626
                </a>
                <p className="text-[11px] text-slate-400 font-roboto">
                  Daily 8 AM – 10 PM Pacific • Calls & WhatsApp
                </p>
              </div>
            </div>

            {/* Quick Navigation Directory to All 15 Services */}
            <div className="bg-white p-6 rounded-none border border-slate-200 shadow-sm space-y-3" style={{ borderTop: '4px solid #8E1612' }}>
              <div className="border-b border-slate-100 pb-2.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B91C1C] font-roboto">
                  ✦ More Ways We Can Help
                </span>
                <h4 className="font-oswald text-lg font-bold text-slate-900 uppercase">
                  Browse Other Services
                </h4>
              </div>
              <ul className="divide-y divide-slate-100 text-xs font-roboto">
                {[
                  { id: 'love-relationship', label: 'Love & Relationship Healing' },
                  { id: 'get-ex-love-back', label: 'Bring Back Lost Love' },
                  { id: 'marriage-compatibility', label: 'Marriage & Kundali Matching' },
                  { id: 'career-business', label: 'Career & Business Success' },
                  { id: 'financial-problems', label: 'Money & Debt Relief' },
                  { id: 'black-magic-removal', label: 'Black Magic Cleansing & Removal' },
                  { id: 'evil-eye-protection', label: 'Evil Eye & Nazar Remedies' },
                  { id: 'family-child-problems', label: 'Family & Children’s Harmony' },
                  { id: 'health-wellness', label: 'Wellness & Peace of Mind' },
                  { id: 'court-case-problems', label: 'Legal & Court Case Guidance' },
                  { id: 'property-land-disputes', label: 'Property & Real Estate Disputes' },
                  { id: 'horoscope-reading', label: 'Birth Chart & Horoscope Reading' },
                  { id: 'psychic-reading', label: 'Psychic & Intuitive Reading' },
                  { id: 'tarot-reading', label: 'Tarot Card Reading' },
                  { id: 'love-spells', label: 'Love Spells & Sacred Rituals' },
                ].map((linkItem) => (
                  <li key={linkItem.id}>
                    <a
                      href={`/services/${linkItem.id}`}
                      onClick={(e) => {
                        if (onSelectService) {
                          e.preventDefault()
                          onSelectService(linkItem.id)
                        }
                      }}
                      className={`py-2 px-2 flex items-center justify-between transition-colors ${
                        service.id === linkItem.id
                          ? 'bg-red-50 text-[#8E1612] font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#B91C1C]'
                      }`}
                    >
                      <span>{linkItem.label}</span>
                      <span className="text-[#B91C1C] font-bold">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
