import React, { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import type { LocationData } from '../data/locationsData'
import { locationsList } from '../data/locationsData'

export interface LocationDetailViewProps {
  location: LocationData
  onBack: () => void
  onBookNow: (serviceOrLocation?: string) => void
  onSelectLocation: (slug: string) => void
  onSelectService?: (serviceId: string) => void
}

export default function LocationDetailView({
  location,
  onBack,
  onBookNow,
  onSelectLocation,
  onSelectService
}: LocationDetailViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    cityLivingIn: location.name,
    country: 'United States',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('')

  // Keep city pre-filled when location changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      cityLivingIn: location.name
    }))
  }, [location.name])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } })

    const formattedDetails = [
      `*✦ NEW CONSULTATION INQUIRY - ${location.name.toUpperCase()} (CA) ✦*`,
      `*Name:* ${formData.name.trim() || 'Not provided'}`,
      `*Email:* ${formData.email.trim() || 'Not provided'}`,
      `*Phone:* ${formData.phone.trim() || 'Not provided'}`,
      `*Date of Birth:* ${formData.dob || 'Not provided'}`,
      `*City Living In:* ${formData.cityLivingIn.trim() || location.name}`,
      `*Country:* ${formData.country.trim() || 'United States'}`,
      `*Message / Situation:* ${formData.message.trim() || 'Vedic Astrology Consultation Request'}`,
      `*Location Page:* https://pandith-vikram.vercel.app/${location.slug}`
    ].join('\n')

    const whatsappUrl = `https://wa.me/15103714626?text=${encodeURIComponent(formattedDetails)}`
    setLastWhatsAppUrl(whatsappUrl)
    setSubmitted(true)

    try {
      const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      if (isMobile) {
        window.location.href = whatsappUrl
      } else {
        const opened = window.open(whatsappUrl, '_blank')
        if (!opened || opened.closed || typeof opened.closed === 'undefined') {
          window.location.href = whatsappUrl
        }
      }
    } catch {
      window.location.href = whatsappUrl
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20 animate-in fade-in duration-300">
      {/* 1. Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-roboto">
          <div className="flex items-center gap-2 text-slate-500 flex-wrap">
            <button
              onClick={onBack}
              className="hover:text-[#8E1612] font-medium transition-colors cursor-pointer rounded-none"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={onBack}
              className="hover:text-[#8E1612] font-medium transition-colors cursor-pointer rounded-none"
            >
              California Locations
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold">
              Indian Astrologer in {location.name}, CA
            </span>
          </div>

          <button
            onClick={onBack}
            className="text-xs font-bold text-[#8E1612] hover:text-[#b91c1c] uppercase tracking-wider flex items-center gap-1 transition-colors self-start sm:self-auto cursor-pointer"
          >
            ← View All California Cities
          </button>
        </div>
      </div>

      {/* 2. Main 2-Column Editorial Layout (Matching Reference Screenshot) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Main Editorial Content (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-8 font-roboto">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 bg-[#8E1612] text-[#FFD700] border border-[#FFD700]/50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-roboto shadow-xs">
              <span>✦</span>
              <span>TOP-RATED VEDIC ASTROLOGER IN {location.name.toUpperCase()}, CA</span>
              <span>✦</span>
            </div>

            {/* H1: Exact Bold Red Heading matching screenshot */}
            <div>
              <h1 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-[#8E1612] tracking-tight leading-snug">
                {location.headline}
              </h1>
              <p className="font-manrope text-sm sm:text-base font-semibold text-slate-700 border-l-4 border-[#FFD700] pl-3 py-1 mt-3">
                {location.tagline}
              </p>
            </div>

            {/* Deep Editorial Intro Paragraphs */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              {location.introParagraphs.map((para, idx) => (
                <p key={idx}>
                  {para}
                </p>
              ))}
            </div>

            {/* Divider */}
            <hr className="border-slate-200 my-6" />

            {/* H2: City-Specific Life Crossroads & Astrological Guidance */}
            <div className="space-y-4">
              <h2 className="font-oswald text-xl sm:text-2xl font-bold uppercase text-slate-900 border-b-2 border-[#8E1612] pb-2">
                {location.meetTrustedHeading}
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                {location.meetTrustedParagraphs.map((para, idx) => (
                  <p key={idx}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Local Challenges Callout Box */}
              <div className="bg-amber-50/90 border-l-4 border-[#8E1612] p-5 my-6 space-y-3 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8E1612] block">
                  ✦ Authentic Life Crossroads Faced in {location.name} ✦
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                  {location.localChallenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#8E1612] font-bold text-sm shrink-0">✦</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* H2: Specialized Vedic Consultations & Remedial Services */}
            <div className="space-y-4">
              <h2 className="font-oswald text-xl sm:text-2xl font-bold uppercase text-slate-900 border-b-2 border-[#8E1612] pb-2">
                {location.consultancyHeading}
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                {location.consultancyParagraphs.map((para, idx) => (
                  <p key={idx}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Core Specialized Services 4-Card Grid */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h3 className="font-oswald text-lg sm:text-xl font-bold uppercase text-slate-900">
                  Specialized Vedic Services for {location.name}
                </h3>
                <span className="text-xs text-[#8E1612] font-bold uppercase tracking-wider">
                  ✦ Time-Tested Remedies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {location.specialties.map((spec, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 p-5 shadow-xs hover:border-[#8E1612] hover:shadow-md transition-all flex flex-col justify-between space-y-3 font-roboto rounded-none"
                  >
                    <div className="space-y-2">
                      <span className="w-8 h-8 rounded-none bg-red-50 text-[#8E1612] border border-[#8E1612]/30 flex items-center justify-center font-bold text-xs">
                        0{idx + 1}
                      </span>
                      <h4 className="font-oswald text-base font-bold text-slate-900 uppercase">
                        {spec.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {spec.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      {onSelectService ? (
                        <button
                          onClick={() => onSelectService(spec.serviceId)}
                          className="text-xs font-bold text-[#8E1612] hover:underline uppercase tracking-wider cursor-pointer"
                        >
                          Service Details →
                        </button>
                      ) : null}
                      <button
                        onClick={() => onBookNow(`${spec.title} - ${location.name}`)}
                        className="text-xs font-bold text-slate-700 hover:text-slate-900 uppercase tracking-wider cursor-pointer"
                      >
                        Consult Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Coverage Directory (Neighborhoods & Zip Codes) */}
            <div className="bg-white border border-slate-200 p-6 shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8E1612]">
                    ✦ LOCAL COVERAGE DIRECTORY ✦
                  </span>
                  <h3 className="font-oswald text-lg sm:text-xl font-bold uppercase text-slate-900">
                    Neighborhoods & Postal Zones in {location.name}
                  </h3>
                </div>
                <span className="text-xs text-slate-500">
                  Region: <strong>{location.region}</strong>
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Key Neighborhoods & Suburbs:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {location.suburbs.map((suburb, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 hover:bg-amber-100 border border-slate-200 text-slate-800 text-xs px-2.5 py-1 transition-colors"
                    >
                      ✦ {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Serving Area Zip Codes:
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono text-slate-600">
                  {location.zipCodes.map((zip, idx) => (
                    <span key={idx} className="bg-slate-50 border border-slate-200 px-2 py-0.5">
                      {zip}
                    </span>
                  ))}
                  <span className="text-slate-400 self-center text-xs font-roboto italic ml-1">
                    + All adjacent postal zones
                  </span>
                </div>
              </div>
            </div>

            {/* Local Client Testimonial */}
            <div className="bg-gradient-to-br from-[#8E1612] to-[#5C0D0A] text-white p-6 sm:p-8 border-2 border-[#FFD700] shadow-md space-y-3">
              <div className="flex items-center gap-2 text-[#FFD700] text-xs font-bold uppercase tracking-widest font-oswald">
                <span>✦</span>
                <span>VERIFIED CLIENT EXPERIENCE FROM {location.name.toUpperCase()}</span>
                <span>✦</span>
              </div>

              <blockquote className="text-sm sm:text-base italic leading-relaxed text-amber-100">
                "{location.testimonial.quote}"
              </blockquote>

              <div className="pt-2 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-amber-200 gap-1">
                <span className="font-bold text-white text-sm">
                  — {location.testimonial.client}
                </span>
                <span>
                  {location.testimonial.area} • Service: <strong>{location.testimonial.service}</strong>
                </span>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8E1612]">
                  ✦ CLARIFICATIONS & ANSWERS ✦
                </span>
                <h3 className="font-oswald text-xl font-bold uppercase text-slate-900">
                  Questions From Clients in {location.name}
                </h3>
              </div>

              <div className="space-y-2.5">
                {location.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx
                  return (
                    <div key={idx} className="bg-white border border-slate-200 shadow-xs">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full text-left p-4 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#8E1612] transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <span className="text-[#8E1612] font-mono text-base font-bold shrink-0">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Other California Locations Grid */}
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 border-b border-slate-200 pb-2">
                <h3 className="font-oswald text-lg font-bold uppercase text-slate-900">
                  Explore Indian Astrologer Across California
                </h3>
                <span className="text-xs text-slate-500">15 Dedicated Regional Hubs</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 text-xs font-roboto">
                {locationsList.map((loc) => {
                  const isCurrent = loc.slug === location.slug
                  return (
                    <button
                      key={loc.slug}
                      onClick={() => onSelectLocation(loc.slug)}
                      className={`p-2.5 text-left border transition-all cursor-pointer rounded-none ${
                        isCurrent
                          ? 'bg-[#8E1612] text-white border-[#8E1612] font-bold shadow-xs'
                          : 'bg-white hover:bg-amber-50 text-slate-800 border-slate-200 hover:border-[#8E1612]'
                      }`}
                    >
                      <span className="block font-bold truncate">✦ {loc.name}</span>
                      <span className={`text-[10px] block truncate ${isCurrent ? 'text-amber-200' : 'text-slate-500'}`}>
                        {loc.region.split('/')[0]}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Contact Form & Direct Helplines (4 cols on lg, matching screenshot) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            
            {/* Navy Blue Card: Schedule a Private Consultation Form */}
            <div className="bg-[#192252] border-2 border-[#FFD700] p-5 sm:p-6 text-white shadow-xl rounded-none">
              
              {/* Header with Mail Icon */}
              <div className="text-center pb-4 mb-4 border-b border-white/15">
                <div className="w-12 h-12 mx-auto mb-2 bg-[#8E1612] border border-[#FFD700] flex items-center justify-center text-white">
                  <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                  Schedule a Private Consultation
                </h3>
                <p className="text-[11px] text-amber-200 font-roboto mt-0.5">
                  Confidential Vedic Guidance • In-Person & Remote Readings • {location.name}, CA
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-500/20 border border-emerald-400 p-5 text-center space-y-3 font-roboto">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-emerald-300 text-sm">Opening WhatsApp...</h4>
                  <p className="text-xs text-white/90">
                    All details entered in these boxes have been compiled for Pandith Vikram.
                  </p>
                  <a
                    href={lastWhatsAppUrl || `https://wa.me/15103714626`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 font-oswald font-bold text-xs uppercase tracking-wider transition-colors shadow-md rounded-none"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.71 20.28 11.92C20.28 16.46 16.59 20.16 12.04 20.16C10.64 20.16 9.27 19.8 8.08 19.09L7.79 18.92L4.69 19.73L5.52 16.71L5.33 16.41C4.55 15.17 4.14 13.56 4.14 11.91C4.14 7.37 7.83 3.67 12.04 3.67ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.51 13.54 14.67C13.39 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.61 11.78C9.47 11.53 9.59 11.4 9.72 11.27C9.83 11.16 9.97 10.98 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.41C10.43 10.25 10.39 10.1 10.33 9.98C10.27 9.85 9.77 8.63 9.57 8.13C9.37 7.65 9.17 7.71 9.02 7.71C8.88 7.7 8.71 7.7 8.55 7.7C8.38 7.7 8.11 7.76 7.88 8.01C7.65 8.26 7 8.87 7 10.09C7 11.31 7.89 12.49 8.01 12.65C8.14 12.82 9.77 15.32 12.26 16.39C12.85 16.65 13.31 16.8 13.67 16.92C14.26 17.11 14.8 17.08 15.23 17.02C15.71 16.95 16.71 16.42 16.92 15.84C17.12 15.26 17.12 14.77 17.06 14.67C17 14.56 16.82 14.51 16.57 14.39Z"/>
                    </svg>
                    <span>Tap to Open WhatsApp Now →</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[11px] text-amber-200 hover:underline block mx-auto cursor-pointer"
                  >
                    ← Edit or resubmit details
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="space-y-3 font-roboto text-xs">
                  <div>
                    <label className="block text-slate-200 font-semibold mb-1 text-[11px]">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full bg-white text-slate-900 border border-slate-300 px-3 py-2 text-xs focus:border-[#FFD700] focus:outline-none rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-200 font-semibold mb-1 text-[11px]">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full bg-white text-slate-900 border border-slate-300 px-3 py-2 text-xs focus:border-[#FFD700] focus:outline-none rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-200 font-semibold mb-1 text-[11px]">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone / WhatsApp Number"
                      className="w-full bg-white text-slate-900 border border-slate-300 px-3 py-2 text-xs focus:border-[#FFD700] focus:outline-none rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-200 font-semibold mb-1 text-[11px]">Date of birth</label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full bg-white text-slate-900 border border-slate-300 px-3 py-2 text-xs focus:border-[#FFD700] focus:outline-none rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-200 font-semibold mb-1 text-[11px]">City Living In:</label>
                    <input
                      type="text"
                      value={formData.cityLivingIn}
                      onChange={(e) => setFormData({ ...formData, cityLivingIn: e.target.value })}
                      placeholder="City Living In"
                      className="w-full bg-white text-slate-900 border border-slate-300 px-3 py-2 text-xs focus:border-[#FFD700] focus:outline-none rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-200 font-semibold mb-1 text-[11px]">Country</label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Country"
                      className="w-full bg-white text-slate-900 border border-slate-300 px-3 py-2 text-xs focus:border-[#FFD700] focus:outline-none rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-200 font-semibold mb-1 text-[11px]">Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your questions (e.g. Love reunion, marriage matching, career timing, spiritual healing)..."
                      className="w-full bg-white text-slate-900 border border-slate-300 px-3 py-2 text-xs focus:border-[#FFD700] focus:outline-none rounded-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#8E1612] hover:bg-[#b5140e] text-white py-3.5 font-oswald font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 rounded-none cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.71 20.28 11.92C20.28 16.46 16.59 20.16 12.04 20.16C10.64 20.16 9.27 19.8 8.08 19.09L7.79 18.92L4.69 19.73L5.52 16.71L5.33 16.41C4.55 15.17 4.14 13.56 4.14 11.91C4.14 7.37 7.83 3.67 12.04 3.67ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.51 13.54 14.67C13.39 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.61 11.78C9.47 11.53 9.59 11.4 9.72 11.27C9.83 11.16 9.97 10.98 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.41C10.43 10.25 10.39 10.1 10.33 9.98C10.27 9.85 9.77 8.63 9.57 8.13C9.37 7.65 9.17 7.71 9.02 7.71C8.88 7.7 8.71 7.7 8.55 7.7C8.38 7.7 8.11 7.76 7.88 8.01C7.65 8.26 7 8.87 7 10.09C7 11.31 7.89 12.49 8.01 12.65C8.14 12.82 9.77 15.32 12.26 16.39C12.85 16.65 13.31 16.8 13.67 16.92C14.26 17.11 14.8 17.08 15.23 17.02C15.71 16.95 16.71 16.42 16.92 15.84C17.12 15.26 17.12 14.77 17.06 14.67C17 14.56 16.82 14.51 16.57 14.39Z"/>
                    </svg>
                    <span>Send Details via WhatsApp →</span>
                  </button>

                  <p className="text-[10px] text-slate-300 text-center italic pt-1">
                    ✦ Strictly confidential. Details are never shared.
                  </p>
                </form>
              )}
            </div>

            {/* Direct Helpline Buttons Below Form */}
            <div className="space-y-2.5 font-oswald">
              {/* Telephone Consultation Red Box */}
              <a
                href="tel:+15103714626"
                className="bg-[#8E1612] hover:bg-[#b5140e] text-white p-3.5 flex items-center justify-between shadow-md transition-colors border border-red-900 rounded-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-amber-200">Direct Telephone Reading</span>
                    <span className="text-base sm:text-lg font-bold tracking-tight">+1 510-371-4626</span>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider font-bold text-amber-300">Call Now →</span>
              </a>

              {/* WhatsApp Green Box */}
              <a
                href={`https://wa.me/15103714626?text=${encodeURIComponent(`Hello Pandith Vikram, I am contacting you from ${location.name}, CA regarding a confidential Vedic astrology consultation.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 flex items-center justify-between shadow-md transition-colors border border-emerald-700 rounded-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.71 20.28 11.92C20.28 16.46 16.59 20.16 12.04 20.16C10.64 20.16 9.27 19.8 8.08 19.09L7.79 18.92L4.69 19.73L5.52 16.71L5.33 16.41C4.55 15.17 4.14 13.56 4.14 11.91C4.14 7.37 7.83 3.67 12.04 3.67ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.51 13.54 14.67C13.39 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.61 11.78C9.47 11.53 9.59 11.4 9.72 11.27C9.83 11.16 9.97 10.98 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.41C10.43 10.25 10.39 10.1 10.33 9.98C10.27 9.85 9.77 8.63 9.57 8.13C9.37 7.65 9.17 7.71 9.02 7.71C8.88 7.7 8.71 7.7 8.55 7.7C8.38 7.7 8.11 7.76 7.88 8.01C7.65 8.26 7 8.87 7 10.09C7 11.31 7.89 12.49 8.01 12.65C8.14 12.82 9.77 15.32 12.26 16.39C12.85 16.65 13.31 16.8 13.67 16.92C14.26 17.11 14.8 17.08 15.23 17.02C15.71 16.95 16.71 16.42 16.92 15.84C17.12 15.26 17.12 14.77 17.06 14.67C17 14.56 16.82 14.51 16.57 14.39Z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-emerald-100">Chat On WhatsApp</span>
                    <span className="text-base sm:text-lg font-bold tracking-tight">+1 510-371-4626</span>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider font-bold text-white">Chat Now →</span>
              </a>

              {/* Direct Email Box */}
              <a
                href="mailto:pandithvikram@gmail.com"
                className="bg-slate-900 hover:bg-slate-800 text-white p-3.5 flex items-center justify-between shadow-md transition-colors border border-slate-700 rounded-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-300">Direct Email</span>
                    <span className="text-xs sm:text-sm font-bold tracking-tight font-mono">pandithvikram@gmail.com</span>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider font-bold text-amber-300">Email →</span>
              </a>

              {/* In-Person Office Badge */}
              <div className="bg-white border-2 border-slate-200 p-4 shadow-xs font-roboto text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#8E1612] font-bold uppercase tracking-wider text-[11px]">
                  <span>✦</span>
                  <span>In-Person Consultation Center</span>
                </div>
                <p className="text-slate-700 leading-snug">
                  <strong>7001 Hollywood Blvd, Los Angeles, CA 90028</strong>
                </p>
                <p className="text-[11px] text-slate-500">
                  {location.inPersonNote}
                </p>
                <a
                  href="https://maps.google.com?q=Indian%20Astrologer,%207001%20Hollywood%20Blvd,%20Los%20Angeles,%20CA%2090028,%20United%20States&ftid=0x80c2bf003e569f33:0x14bf83fe85d0f8d5&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,100821555,47071704,94218641,94282134,100835694,94286869,100820247,100822504,100838877,121816461&g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] font-bold text-[#8E1612] hover:underline uppercase tracking-wider pt-1"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
