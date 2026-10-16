import React, { useState } from 'react'
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
    phone: '',
    dob: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } })
    setSubmitted(true)

    const formattedDetails = [
      `*✦ NEW INQUIRY - ${location.name.toUpperCase()}, CA ✦*`,
      `*Location Page:* ${location.slug}`,
      `*Client Name:* ${formData.name || 'Not provided'}`,
      `*Phone Number:* ${formData.phone || 'Not provided'}`,
      formData.dob ? `*Date of Birth:* ${formData.dob}` : null,
      formData.notes ? `*Client Situation:* ${formData.notes}` : null,
      `*Source:* pandith-vikram.vercel.app/${location.slug}`
    ].filter(Boolean).join('\n')

    const whatsappUrl = `https://wa.me/15103714626?text=${encodeURIComponent(formattedDetails)}`

    try {
      window.open(whatsappUrl, '_blank')
    } catch {
      window.location.href = whatsappUrl
    }

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', dob: '', notes: '' })
    }, 3000)
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

      {/* 2. Hero Section: Rich City Header + Quick Intake Form */}
      <section className="bg-gradient-to-b from-[#05081C] via-[#0A102E] to-[#05081C] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-[#FFD700]">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: Heading, Local Description, Badges, Direct Actions */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#8E1612] text-[#FFD700] border border-[#FFD700]/50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-roboto shadow-sm">
              <span>✦</span>
              <span>TOP-RATED VEDIC ASTROLOGER IN {location.name.toUpperCase()}, CA</span>
              <span>✦</span>
            </div>

            <h1 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight text-white">
              {location.headline}
            </h1>

            <p className="font-manrope text-sm sm:text-base text-amber-200 font-medium border-l-3 border-[#FFD700] pl-3.5 leading-snug">
              {location.tagline}
            </p>

            <p className="text-slate-300 text-xs sm:text-sm font-roboto leading-relaxed">
              {location.heroDescription}
            </p>

            {/* Trust Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-roboto font-bold uppercase tracking-wider text-amber-300">
              <span className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-none">
                ✦ 35+ Years Vedic Lineage
              </span>
              <span className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-none">
                ✦ 100% Confidential & Private
              </span>
              <span className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-none">
                ✦ In-Person & Remote Readings
              </span>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="tel:+15103714626"
                className="bg-[#8E1612] hover:bg-[#b5140e] text-white px-5 py-3 font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Helpline: +1 510-371-4626</span>
              </a>

              <a
                href={`https://wa.me/15103714626?text=${encodeURIComponent(`Hello Pandith Vikram, I am contacting you from ${location.name}, CA regarding a confidential Vedic astrology consultation.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.71 20.28 11.92C20.28 16.46 16.59 20.16 12.04 20.16C10.64 20.16 9.27 19.8 8.08 19.09L7.79 18.92L4.69 19.73L5.52 16.71L5.33 16.41C4.55 15.17 4.14 13.56 4.14 11.91C4.14 7.37 7.83 3.67 12.04 3.67ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.51 13.54 14.67C13.39 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.61 11.78C9.47 11.53 9.59 11.4 9.72 11.27C9.83 11.16 9.97 10.98 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.41C10.43 10.25 10.39 10.1 10.33 9.98C10.27 9.85 9.77 8.63 9.57 8.13C9.37 7.65 9.17 7.71 9.02 7.71C8.88 7.7 8.71 7.7 8.55 7.7C8.38 7.7 8.11 7.76 7.88 8.01C7.65 8.26 7 8.87 7 10.09C7 11.31 7.89 12.49 8.01 12.65C8.14 12.82 9.77 15.32 12.26 16.39C12.85 16.65 13.31 16.8 13.67 16.92C14.26 17.11 14.8 17.08 15.23 17.02C15.71 16.95 16.71 16.42 16.92 15.84C17.12 15.26 17.12 14.77 17.06 14.67C17 14.56 16.82 14.51 16.57 14.39Z"/>
                </svg>
                <span>WhatsApp Directly</span>
              </a>

              <button
                onClick={() => onBookNow(`Location: ${location.name}, CA`)}
                className="bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 px-5 py-3 font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
              >
                Schedule Consultation →
              </button>
            </div>
          </div>

          {/* Right Column: Quick Intake Booking Form Card */}
          <div className="lg:col-span-5 bg-white text-slate-900 border-2 border-[#FFD700] p-6 shadow-2xl rounded-none">
            <div className="border-b border-slate-200 pb-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E1612] block">
                ✦ Fast Intake & Response ✦
              </span>
              <h2 className="font-oswald text-xl font-bold uppercase text-slate-900">
                Book a Reading in {location.name}
              </h2>
              <p className="text-xs text-slate-600 font-roboto mt-0.5">
                Send your birth details to Pandith Vikram for immediate review.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-400 p-5 text-center space-y-2 font-roboto">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto font-bold text-sm">
                  ✓
                </div>
                <h4 className="font-bold text-emerald-900 text-sm">Inquiry Received</h4>
                <p className="text-xs text-emerald-800">
                  Redirecting your details to Pandith Vikram’s private WhatsApp (+1 510-371-4626)...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 font-roboto text-xs">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full border border-slate-300 p-2.5 focus:border-[#8E1612] focus:outline-none rounded-none text-slate-900 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Phone Number (Cell / WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full border border-slate-300 p-2.5 focus:border-[#8E1612] focus:outline-none rounded-none text-slate-900 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Date of Birth (Optional)</label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full border border-slate-300 p-2.5 focus:border-[#8E1612] focus:outline-none rounded-none text-slate-900 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Primary Concern or Question</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly describe your situation (e.g. Love reunion, tech career move, marriage matching)..."
                    className="w-full border border-slate-300 p-2.5 focus:border-[#8E1612] focus:outline-none rounded-none text-slate-900 text-xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8E1612] hover:bg-[#b5140e] text-white py-3 font-oswald font-bold text-xs uppercase tracking-wider transition-colors shadow cursor-pointer"
                >
                  Request Consultation Now →
                </button>

                <p className="text-[10px] text-slate-500 text-center italic">
                  ✦ Strictly Private. Your personal details are never shared with anyone.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Local Community Context & Why Clients in This City Consult Pandith Vikram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5 font-roboto">
            <div className="inline-block bg-red-50 text-[#8E1612] border border-[#8E1612]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              ✦ LOCAL ASTROLOGICAL GUIDANCE ✦
            </div>
            <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-900">
              Why Residents in {location.name} Trust Pandith Vikram
            </h2>
            <div className="w-16 h-1 bg-[#FFD700]"></div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              {location.aboutCity}
            </p>

            <div className="bg-amber-50/70 border-l-4 border-[#8E1612] p-4 text-xs text-slate-700 space-y-1">
              <strong className="text-slate-900 block font-bold">
                ✦ 35+ Years of Hereditary Vedic Lineage
              </strong>
              <span>
                Unlike commercial psychics, Pandith Vikram follows authentic Sidereal Jyotish calculations, analyzing planetary Dashas, Navamsha divisional charts, and Ashtakavarga transits to explain root causes without fear tactics.
              </span>
            </div>
          </div>

          {/* Local Challenges List */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-6 shadow-sm font-roboto space-y-4">
            <h3 className="font-oswald text-base font-bold uppercase text-slate-900 border-b border-slate-100 pb-2">
              Common Crossroads Faced in {location.name}
            </h3>
            <ul className="space-y-3 text-xs text-slate-700">
              {location.localChallenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#8E1612] font-bold text-sm shrink-0">✦</span>
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Core Astrology Services Tailored for this City */}
      <section className="bg-slate-100 border-y border-slate-200 py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8E1612]">
              ✦ SPECIALIZED SOLUTIONS ✦
            </span>
            <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-900">
              Vedic Astrology Services in {location.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-roboto">
              Time-tested remedies prescribed according to your specific planetary placements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {location.specialties.map((spec, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-5 shadow-xs hover:border-[#8E1612] hover:shadow-md transition-all flex flex-col justify-between space-y-3 font-roboto"
              >
                <div className="space-y-2">
                  <span className="w-8 h-8 rounded-none bg-red-50 text-[#8E1612] border border-[#8E1612]/30 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <h3 className="font-oswald text-base font-bold text-slate-900 uppercase">
                    {spec.title}
                  </h3>
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
      </section>

      {/* 5. Consultation Options: In-Person Hollywood Center, Phone & Video */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8E1612]">
            ✦ FLEXIBLE WAYS TO CONNECT ✦
          </span>
          <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-900">
            How Clients in {location.name} Consult Pandith Vikram
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-roboto">
            Choose the format that fits your schedule, location, and privacy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-roboto">
          {/* Card 1: In-Person Office */}
          <div className="bg-white border-2 border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#8E1612] text-[#FFD700] flex items-center justify-center font-bold text-lg">
                ✦
              </div>
              <h3 className="font-oswald text-lg font-bold text-slate-900 uppercase">
                1. In-Person Hollywood Center
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Meet Pandith Vikram face-to-face at his private California center located at <strong>7001 Hollywood Blvd, Los Angeles, CA 90028</strong>.
              </p>
              <div className="bg-slate-50 border border-slate-200 p-3 text-[11px] text-slate-700">
                <span className="font-bold text-[#8E1612] block mb-0.5">✦ For {location.name} Residents:</span>
                <span>{location.inPersonNote}</span>
              </div>
            </div>
            <a
              href="https://maps.google.com?q=Indian%20Astrologer,%207001%20Hollywood%20Blvd,%20Los%20Angeles,%20CA%2090028,%20United%20States&ftid=0x80c2bf003e569f33:0x14bf83fe85d0f8d5&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,100821555,47071704,94218641,94282134,100835694,94286869,100820247,100822504,100838877,121816461&g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#8E1612] hover:underline uppercase tracking-wider block"
            >
              View on Google Maps ↗
            </a>
          </div>

          {/* Card 2: Phone Consultations */}
          <div className="bg-white border-2 border-[#8E1612] p-6 shadow-md flex flex-col justify-between space-y-4 relative">
            <div className="absolute -top-3 right-4 bg-[#8E1612] text-[#FFD700] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5">
              Most Popular
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-slate-900 text-[#FFD700] flex items-center justify-center font-bold text-lg">
                ✦
              </div>
              <h3 className="font-oswald text-lg font-bold text-slate-900 uppercase">
                2. Direct Phone Consultations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect from the privacy of your home or office. Pandith Vikram casts your Janam Kundali live, answers your questions, and shares remedies immediately.
              </p>
              <div className="bg-amber-50 border border-amber-200 p-3 text-[11px] text-slate-700">
                <span className="font-bold text-slate-900 block mb-0.5">✦ Consultation Hours:</span>
                <span>Daily: 8:00 AM – 10:00 PM PST</span>
              </div>
            </div>
            <a
              href="tel:+15103714626"
              className="bg-[#8E1612] hover:bg-[#b5140e] text-white py-2.5 text-center font-oswald font-bold text-xs uppercase tracking-wider transition-colors block"
            >
              Call +1 510-371-4626
            </a>
          </div>

          {/* Card 3: WhatsApp & Video Consultations */}
          <div className="bg-white border-2 border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                ✦
              </div>
              <h3 className="font-oswald text-lg font-bold text-slate-900 uppercase">
                3. WhatsApp & Video Readings
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instant chat, voice note exchanges, and scheduled high-definition video calls for palmistry and horoscope discussions across California.
              </p>
              <div className="bg-slate-50 border border-slate-200 p-3 text-[11px] text-slate-700">
                <span className="font-bold text-slate-900 block mb-0.5">✦ Fast Response:</span>
                <span>Usually within 15–30 minutes during active hours.</span>
              </div>
            </div>
            <a
              href={`https://wa.me/15103714626?text=${encodeURIComponent(`Hello Pandith Vikram, I would like to book a WhatsApp reading from ${location.name}, CA.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 text-center font-oswald font-bold text-xs uppercase tracking-wider transition-colors block"
            >
              Open WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* 6. Neighborhoods & Zip Codes Served in this City */}
      <section className="bg-white border-y border-slate-200 py-12 px-4 sm:px-6 lg:px-8 font-roboto">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8E1612]">
                ✦ LOCAL COVERAGE DIRECTORY ✦
              </span>
              <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase text-slate-900">
                Neighborhoods & Communities Served in {location.name}
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              Region: <strong>{location.region}</strong>
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Key Neighborhoods & Suburbs:
              </h4>
              <div className="flex flex-wrap gap-2">
                {location.suburbs.map((suburb, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 hover:bg-amber-100 border border-slate-200 text-slate-800 text-xs px-3 py-1.5 transition-colors"
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
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-600">
                {location.zipCodes.map((zip, idx) => (
                  <span key={idx} className="bg-slate-50 border border-slate-200 px-2.5 py-1">
                    {zip}
                  </span>
                ))}
                <span className="text-slate-400 self-center text-xs font-roboto italic">
                  + All adjacent postal zones
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Local Client Testimonial */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-gradient-to-br from-[#8E1612] to-[#5C0D0A] text-white p-8 sm:p-10 border-2 border-[#FFD700] shadow-xl relative font-roboto space-y-4">
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
      </section>

      {/* 8. Frequently Asked Questions for this City */}
      <section className="bg-slate-100 border-y border-slate-200 py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8E1612]">
              ✦ CLARIFICATIONS & ANSWERS ✦
            </span>
            <h2 className="font-oswald text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-900">
              Questions From Clients in {location.name}
            </h2>
          </div>

          <div className="space-y-3 font-roboto">
            {location.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx
              return (
                <div key={idx} className="bg-white border border-slate-200 shadow-xs">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#8E1612] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#8E1612] font-mono text-base font-bold shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 9. Nearby California Locations Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 font-roboto">
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8E1612]">
                ✦ EXPLORE OTHER LOCATIONS ✦
              </span>
              <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase text-slate-900">
                Indian Astrologer Across California Cities
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              15 Dedicated Regional Centers
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {locationsList.map((loc) => {
              const isCurrent = loc.slug === location.slug
              return (
                <button
                  key={loc.id}
                  onClick={() => {
                    if (!isCurrent) {
                      onSelectLocation(loc.slug)
                    }
                  }}
                  disabled={isCurrent}
                  className={`p-3 text-left border transition-all text-xs rounded-none cursor-pointer ${
                    isCurrent
                      ? 'bg-[#8E1612] text-white border-[#8E1612] font-bold shadow-xs cursor-default'
                      : 'bg-white hover:bg-red-50 text-slate-800 border-slate-200 hover:border-[#8E1612]'
                  }`}
                >
                  <div className="font-oswald uppercase font-bold text-xs sm:text-sm tracking-wide">
                    {loc.name}
                  </div>
                  <div className={`text-[10px] mt-0.5 truncate ${isCurrent ? 'text-amber-200' : 'text-slate-500'}`}>
                    {loc.region.split('/')[0]}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 10. Bottom Direct Action Banner */}
      <section className="bg-[#05081C] text-white py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-[#FFD700]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-block bg-[#8E1612] text-[#FFD700] border border-[#FFD700]/50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-roboto">
            ✦ RESTORE CLARITY & HARMONY TODAY ✦
          </div>
          <h2 className="font-oswald text-2xl sm:text-4xl font-bold uppercase tracking-tight">
            Consult Pandith Vikram from {location.name}, California
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-roboto max-w-2xl mx-auto leading-relaxed">
            Whether you are navigating a painful relationship breakup, a pivotal career move, or seeking spiritual energy protection, Pandith Vikram provides honest, actionable Vedic guidance.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
            <a
              href="tel:+15103714626"
              className="bg-[#8E1612] hover:bg-[#b5140e] text-white px-6 py-3 font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow"
            >
              Call: +1 510-371-4626
            </a>
            <a
              href={`https://wa.me/15103714626?text=${encodeURIComponent(`Hello Pandith Vikram, I would like to schedule a private reading from ${location.name}, CA.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow"
            >
              WhatsApp Us
            </a>
            <button
              onClick={() => onBookNow(`Inquiry from ${location.name}`)}
              className="bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 px-6 py-3 font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
            >
              Book Consultation Form →
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
