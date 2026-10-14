import React, { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'

export interface BookingPageViewProps {
  onBack: () => void
  initialService?: string
}

export const servicesList = [
  'Love & Relationship Healing',
  'Get Ex Love Back & Reunion',
  'Marriage & Kundali 36-Guna Matching',
  'Career & Business Breakthrough',
  'Money, Wealth & Debt Relief',
  'Black Magic Cleansing & Removal',
  'Evil Eye & Nazar Suraksha',
  'Family Harmony & Child Blessing',
  'Health, Mind & Stress Relief',
  'Court Case & Property Dispute Help',
  'Palmistry & Hand Analysis',
  'Vedic Horoscope & Kundali Reading',
  'Sacred Vedic Love Spells',
  'Tarot & Card Divination',
  'Psychic Reading & Future Vision',
  'General Life Consultation'
]

export default function BookingPageView({ onBack, initialService }: BookingPageViewProps) {
  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Book a Session & Contact Pandith Vikram | Indian Astrologer in Los Angeles'
    return () => {
      document.title = originalTitle
    }
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    tob: '',
    pob: '',
    service: initialService || 'Love & Relationship Healing',
    consultationMode: 'WhatsApp Audio / Video Call',
    question: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    })

    // Construct highly-structured, professional WhatsApp message
    const lines = [
      `*✦ VEDIC ASTROLOGY CONSULTATION BOOKING ✦*`,
      `*Name:* ${formData.name || 'Not provided'}`,
      `*Phone:* ${formData.phone || 'Not provided'}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      formData.dob ? `*Date of Birth:* ${formData.dob}` : null,
      formData.tob ? `*Time of Birth:* ${formData.tob}` : null,
      formData.pob ? `*Place of Birth / City:* ${formData.pob}` : null,
      `*Service Required:* ${formData.service}`,
      `*Preferred Mode:* ${formData.consultationMode}`,
      formData.question ? `*Inquiry / Details:* ${formData.question}` : null,
      `-----------------------------------------`,
      `*Submitted via:* Official Booking Page (pandith-vikram.vercel.app)`
    ].filter(Boolean).join('\n')

    const whatsappUrl = `https://wa.me/15103714626?text=${encodeURIComponent(lines)}`
    setLastWhatsAppUrl(whatsappUrl)
    setSubmitted(true)

    // Automatically trigger WhatsApp in new window/tab
    try {
      window.open(whatsappUrl, '_blank')
    } catch {
      window.location.href = whatsappUrl
    }
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans pb-24 animate-in fade-in duration-300">
      {/* 1. Breadcrumb & Back Strip */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-roboto">
          <div className="flex items-center gap-2 text-slate-500">
            <button
              onClick={onBack}
              className="hover:text-[#8E1612] font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>← Return to Home</span>
            </button>
            <span>/</span>
            <span className="text-slate-800 font-bold">Book a Session & Contact</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 hidden md:inline">Need immediate assistance?</span>
            <a
              href="tel:+15103714626"
              className="inline-flex items-center gap-1.5 font-bold text-[#8E1612] hover:text-[#b5140e] transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span>Direct Line: +1 510-371-4626</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Hero Header Strip (Regal Vedic Cosmic Accent) */}
      <section className="bg-gradient-to-r from-[#060B28] via-[#0D1445] to-[#1A0E2E] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FFD700] relative overflow-hidden select-none">
        {/* Subtle Cosmic Stars Overlay */}
        <div className="absolute inset-0 cosmic-stars-bg opacity-30 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-block bg-[#8E1612] text-[#FFD700] border border-[#FFD700]/50 px-4 py-1 text-xs font-bold uppercase tracking-widest font-roboto">
            ✦ PRIVATE & CONFIDENTIAL VEDIC CONSULTATION ✦
          </div>
          <h1 className="font-oswald text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            Book a Session & Contact <span className="text-[#FFD700]">Pandith Vikram</span>
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-roboto leading-relaxed">
            Personalized chart calculation, Prashna analysis, and Sattvic remedies. Consult in person on Hollywood Boulevard, Los Angeles, or via phone and WhatsApp worldwide.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-roboto font-semibold text-amber-200">
            <span className="bg-white/10 border border-white/20 px-3 py-1">✦ 100% Private & Confidential</span>
            <span className="bg-white/10 border border-white/20 px-3 py-1">✦ Handwritten Kundali Analysis</span>
            <span className="bg-white/10 border border-white/20 px-3 py-1">✦ Instant WhatsApp Confirmation</span>
            <span className="bg-white/10 border border-white/20 px-3 py-1">✦ 35+ Years Ancestral Mastery</span>
          </div>
        </div>
      </section>

      {/* 3. Main Form & Information Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Booking Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 border-t-4 border-t-[#8E1612] p-6 sm:p-10 shadow-xl rounded-none">
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in duration-300">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-4xl font-bold rounded-none border-2 border-emerald-400 shadow-inner">
                  ✓
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#8E1612] font-roboto">
                    Consultation Request Forwarded
                  </span>
                  <h2 className="font-oswald text-3xl font-bold text-slate-900 uppercase">
                    Details Forwarded to WhatsApp!
                  </h2>
                  <p className="text-sm text-slate-600 max-w-md mx-auto font-roboto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name || 'valued client'}</strong>. Your consultation details have been sent directly to Pandith Vikram’s private WhatsApp (+1 510-371-4626).
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-4 text-left max-w-md mx-auto space-y-2 text-xs font-roboto text-slate-700">
                  <p className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                    <span className="text-[#8E1612]">✦</span> What Happens Next?
                  </p>
                  <p>• Pandith Vikram or his personal assistant will review your planetary notes.</p>
                  <p>• You will receive a direct reply on WhatsApp with available appointment slots.</p>
                  <p>• For urgent guidance, tap below to open the WhatsApp chat immediately.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <a
                    href={lastWhatsAppUrl || 'https://wa.me/15103714626'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-none font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer font-roboto"
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.71 20.28 11.92C20.28 16.46 16.59 20.16 12.04 20.16C10.64 20.16 9.27 19.8 8.08 19.09L7.79 18.92L4.69 19.73L5.52 16.71L5.33 16.41C4.55 15.17 4.14 13.56 4.14 11.91C4.14 7.37 7.83 3.67 12.04 3.67ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.51 13.54 14.67C13.39 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.61 11.78C9.47 11.53 9.59 11.4 9.72 11.27C9.83 11.16 9.97 10.98 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.41C10.43 10.25 10.39 10.1 10.33 9.98C10.27 9.85 9.77 8.63 9.57 8.13C9.37 7.65 9.17 7.71 9.02 7.71C8.88 7.7 8.71 7.7 8.55 7.7C8.38 7.7 8.11 7.76 7.88 8.01C7.65 8.26 7 8.87 7 10.09C7 11.31 7.89 12.49 8.01 12.65C8.14 12.82 9.77 15.32 12.26 16.39C12.85 16.65 13.31 16.8 13.67 16.92C14.26 17.11 14.8 17.08 15.23 17.02C15.71 16.95 16.71 16.42 16.92 15.84C17.12 15.26 17.12 14.77 17.06 14.67C17 14.56 16.82 14.51 16.57 14.39Z" />
                    </svg>
                    <span>Open WhatsApp Chat Directly</span>
                  </a>
                  <button
                    onClick={onBack}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 px-6 py-3.5 rounded-none font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer font-roboto"
                  >
                    <span>← Return to Home</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="border-b border-slate-200 pb-5 mb-6">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#8E1612] font-roboto">
                    Fill Consultation Details
                  </span>
                  <h2 className="font-oswald text-2xl sm:text-3xl font-bold text-slate-900 mt-1 uppercase">
                    Your Information & Question
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 font-roboto">
                    All information shared is held under strict spiritual confidentiality and reviewed only by Pandith Vikram.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 font-roboto">
                  
                  {/* Step 1: Personal Contact Info */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-l-2 border-[#8E1612] pl-2 font-roboto">
                      1. Contact Information
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Priya Sharma / David Miller"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#8E1612] focus:ring-1 focus:ring-[#8E1612] bg-white transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone / WhatsApp (Include Area Code) *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (310) 555-0123"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#8E1612] focus:ring-1 focus:ring-[#8E1612] bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@example.com"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#8E1612] focus:ring-1 focus:ring-[#8E1612] bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Birth Details for Vedic Kundali */}
                  <div className="space-y-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-l-2 border-[#8E1612] pl-2 font-roboto">
                        2. Astrological Chart Details
                      </h3>
                      <span className="text-[11px] text-amber-700 font-medium">Used for Horoscope Calculation</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          className="w-full text-xs px-3 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#8E1612] focus:ring-1 focus:ring-[#8E1612] bg-white cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Time of Birth (Optional)
                        </label>
                        <input
                          type="text"
                          name="tob"
                          value={formData.tob}
                          onChange={handleInputChange}
                          placeholder="e.g. 06:45 AM / Night"
                          className="w-full text-xs px-3 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#8E1612] focus:ring-1 focus:ring-[#8E1612] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Place of Birth / City
                        </label>
                        <input
                          type="text"
                          name="pob"
                          value={formData.pob}
                          onChange={handleInputChange}
                          placeholder="e.g. Los Angeles, CA"
                          className="w-full text-xs px-3 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#8E1612] focus:ring-1 focus:ring-[#8E1612] bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Consultation Topic & Mode */}
                  <div className="space-y-4 pt-3 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-l-2 border-[#8E1612] pl-2 font-roboto">
                      3. Consultation Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Choose Astrology Service *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#8E1612] focus:ring-1 focus:ring-[#8E1612] bg-white cursor-pointer"
                        >
                          {servicesList.map((srv, idx) => (
                            <option key={idx} value={srv}>
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Preferred Consultation Mode *
                        </label>
                        <select
                          name="consultationMode"
                          value={formData.consultationMode}
                          onChange={handleInputChange}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#8E1612] focus:ring-1 focus:ring-[#8E1612] bg-white cursor-pointer"
                        >
                          <option value="WhatsApp Audio / Video Call">WhatsApp Audio / Video Call</option>
                          <option value="Direct Phone Call">Direct Phone Call</option>
                          <option value="In-Person at Hollywood Blvd, LA">In-Person (Hollywood Blvd, Los Angeles)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Describe What You Are Facing *
                      </label>
                      <textarea
                        name="question"
                        required
                        rows={4}
                        value={formData.question}
                        onChange={handleInputChange}
                        placeholder="Please describe your current situation, challenge, or specific questions you need answered by Pandith Vikram..."
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#8E1612] focus:ring-1 focus:ring-[#8E1612] bg-white transition-all leading-relaxed"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submission Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#8E1612] hover:bg-[#A91D18] text-white font-oswald font-bold py-4 px-6 rounded-none text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center gap-2 border-2 border-[#FFD700]"
                    >
                      <span>✦</span>
                      <span>SEND DETAILS TO PANDITH VIKRAM ON WHATSAPP & CONFIRM READING</span>
                      <span>✦</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2 font-roboto">
                      Strict Privacy Guaranteed • Your Details Are Directed To The Astrologer’s WhatsApp Only
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Astrologer Authority & Trust Pillars (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Master Astrologer Profile Box */}
            <div className="bg-[#060B28] text-white p-6 sm:p-7 border-t-4 border-[#FFD700] shadow-xl rounded-none relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  {/* Clean Vector Sun Emblem (Zero Colorful Emojis) */}
                  <div className="w-12 h-12 bg-[#8E1612] border-2 border-[#FFD700] text-[#FFD700] flex items-center justify-center shrink-0 shadow-md">
                    <svg className="w-7 h-7 fill-[#FFD700]" viewBox="0 0 24 24">
                      <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-13c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1zm0 16c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zm8-9c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2zm-16 0c-.55 0-1 .45-1 1s.45 1 1 1H2c-.55 0-1-.45-1-1s.45-1 1-1h2zm13.66-5.66c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.41-1.41zM5.75 16.84c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.41-1.41zm11.31 1.41c-.39.39-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0zM4.34 5.75c-.39.39-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.75 5.75c-.39-.39-1.02-.39-1.41 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-oswald text-xl font-bold uppercase tracking-wider text-white">
                      Pandith Vikram
                    </h3>
                    <p className="text-xs text-amber-200 font-roboto">
                      7th Generation Vedic Astrologer & Spiritual Guide
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-roboto leading-relaxed">
                  For over 35 years, Pandith Vikram has helped families, couples, business owners, and individuals overcome life’s toughest planetary obstacles. All calculations are performed by hand according to traditional Jyotish Shastras.
                </p>

                {/* Direct Contact Links with Clean SVG Vector Icons (No Emojis) */}
                <div className="pt-2 space-y-2.5 border-t border-slate-700/80 text-xs font-roboto">
                  <a
                    href="tel:+15103714626"
                    className="flex items-center gap-2.5 text-white hover:text-amber-300 transition-colors"
                  >
                    <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Direct Call / Text: <strong className="text-white">+1 510-371-4626</strong></span>
                  </a>

                  <a
                    href="https://wa.me/15103714626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-white hover:text-emerald-300 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.71 20.28 11.92C20.28 16.46 16.59 20.16 12.04 20.16C10.64 20.16 9.27 19.8 8.08 19.09L7.79 18.92L4.69 19.73L5.52 16.71L5.33 16.41C4.55 15.17 4.14 13.56 4.14 11.91C4.14 7.37 7.83 3.67 12.04 3.67ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.51 13.54 14.67C13.39 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.61 11.78C9.47 11.53 9.59 11.4 9.72 11.27C9.83 11.16 9.97 10.98 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.41C10.43 10.25 10.39 10.1 10.33 9.98C10.27 9.85 9.77 8.63 9.57 8.13C9.37 7.65 9.17 7.71 9.02 7.71C8.88 7.7 8.71 7.7 8.55 7.7C8.38 7.7 8.11 7.76 7.88 8.01C7.65 8.26 7 8.87 7 10.09C7 11.31 7.89 12.49 8.01 12.65C8.14 12.82 9.77 15.32 12.26 16.39C12.85 16.65 13.31 16.8 13.67 16.92C14.26 17.11 14.8 17.08 15.23 17.02C15.71 16.95 16.71 16.42 16.92 15.84C17.12 15.26 17.12 14.77 17.06 14.67C17 14.56 16.82 14.51 16.57 14.39Z"/>
                    </svg>
                    <span>Instant WhatsApp: <strong className="text-white">+1 510-371-4626</strong></span>
                  </a>

                  <a
                    href="mailto:pandithvikram@gmail.com"
                    className="flex items-center gap-2.5 text-white hover:text-amber-300 transition-colors"
                  >
                    <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email: <strong className="text-white">pandithvikram@gmail.com</strong></span>
                  </a>

                  <div className="flex items-start gap-2.5 text-amber-200/90 pt-1">
                    <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>7001 Hollywood Blvd, Los Angeles, CA 90028</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white/5 border border-white/10 p-3 text-[11px] text-amber-100 font-roboto">
                  <p className="font-bold text-amber-300">✦ Consultation Hours:</p>
                  <p>Monday – Sunday: 8:00 AM – 10:00 PM (PST)</p>
                  <p className="text-slate-400 mt-0.5">Emergency readings available upon request.</p>
                </div>
              </div>
            </div>

            {/* What to Expect from Your Session */}
            <div className="bg-white border border-slate-200 p-6 shadow-md rounded-none space-y-3 font-roboto">
              <h4 className="font-oswald text-base font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                What to Expect from Your Reading
              </h4>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#8E1612] font-bold text-sm shrink-0">✦</span>
                  <div>
                    <strong className="text-slate-800 block">Personalized Janam Kundali Analysis</strong>
                    <span>Pandith Vikram inspects your planetary Dasha, Navamsha, and transits to identify current karmic blocks.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#8E1612] font-bold text-sm shrink-0">✦</span>
                  <div>
                    <strong className="text-slate-800 block">Root-Cause Clarification</strong>
                    <span>Clear explanations on why relationship friction, career slowdowns, or bad luck occurred without fear tactics.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#8E1612] font-bold text-sm shrink-0">✦</span>
                  <div>
                    <strong className="text-slate-800 block">Authentic Sattvic Vedic Remedies</strong>
                    <span>Prescriptions of Vedic mantras, gemstone alignment, Yantras, and specific pujas to restore planetary harmony.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#8E1612] font-bold text-sm shrink-0">✦</span>
                  <div>
                    <strong className="text-slate-800 block">100% Confidentiality Guarantee</strong>
                    <span>Your identity, situation, and discussions remain strictly private and never shared with anyone.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Reassurance Banner */}
            <div className="bg-amber-50 border-2 border-amber-300 p-5 rounded-none space-y-2 font-roboto text-slate-800">
              <div className="flex items-center gap-2 text-[#8E1612] font-bold text-xs uppercase tracking-wider">
                <span>✦</span>
                <span>Trusted by Thousands Across California</span>
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                "Pandith Vikram identified the planetary reason behind my relationship crisis within 10 minutes of reading our charts. The remedies he gave brought peace back into our home."
              </p>
              <p className="text-[11px] font-bold text-slate-900 text-right">
                — Verified Client, Los Angeles
              </p>
            </div>

          </div>
        </div>

        {/* 4. Google Maps Location Section (Square Block Focusing 7001 Hollywood Blvd, Los Angeles) */}
        <section className="mt-12 lg:mt-16 pt-10 border-t-2 border-slate-200">
          <div className="bg-[#FAF9F5] border-2 border-slate-300 p-6 sm:p-8 lg:p-10 shadow-sm rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Location & Consultation Details */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-block bg-[#8E1612] text-[#FFD700] border border-[#FFD700]/50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider font-roboto">
                  ✦ In-Person Hollywood Consultations ✦
                </div>
                <h3 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-slate-900 leading-tight">
                  Our Los Angeles Consultation Center
                </h3>
                <p className="text-slate-700 text-sm sm:text-base font-roboto leading-relaxed">
                  In addition to worldwide private phone and WhatsApp readings, Pandith Vikram welcomes clients for confidential in-person astrological readings and specialized Vedic remedial pujas at our Hollywood Boulevard office in Los Angeles, California.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm font-roboto text-slate-800">
                  <div className="flex items-start gap-3 p-3.5 bg-white border border-slate-300 shadow-xs">
                    <svg className="w-5 h-5 text-[#8E1612] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <strong className="block text-slate-900 font-oswald uppercase text-sm tracking-wide">
                        Office Address:
                      </strong>
                      <span className="font-medium text-slate-800">
                        7001 Hollywood Blvd, Los Angeles, CA 90028, United States
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-white border border-slate-300 shadow-xs">
                    <span className="font-bold text-slate-900">Consultation Hours:</span>
                    <span className="text-[#8E1612] font-bold">Daily: 8:00 AM – 10:00 PM (PT)</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-white border border-slate-300 shadow-xs">
                    <span className="font-bold text-slate-900">In-Person Sessions:</span>
                    <span className="text-emerald-700 font-bold">By Prior Appointment / Walk-ins Subject to Slot</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=7001+Hollywood+Blvd,+Los+Angeles,+CA+90028"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#8E1612] hover:bg-[#b5140e] text-white px-5 py-3 font-oswald font-bold text-xs uppercase tracking-wider transition-colors shadow"
                  >
                    <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Get Directions on Google Maps</span>
                  </a>

                  <a
                    href="tel:+15103714626"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 px-5 py-3 font-oswald font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <svg className="w-4 h-4 text-[#8E1612] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Office: +1 510-371-4626</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Square Google Maps Block */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-md sm:max-w-lg aspect-square bg-slate-100 border-4 border-[#8E1612] shadow-2xl relative overflow-hidden">
                  <iframe
                    title="Pandith Vikram Vedic Astrology - 7001 Hollywood Blvd, Los Angeles, CA 90028"
                    src="https://maps.google.com/maps?q=7001+Hollywood+Blvd,+Los+Angeles,+CA+90028&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full object-cover"
                  />
                  {/* Address Badge Overlay on Map */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/90 backdrop-blur-sm text-white p-2.5 border border-[#FFD700]/70 text-xs font-roboto flex items-center justify-between gap-2 shadow-xl">
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span className="font-semibold truncate">7001 Hollywood Blvd, Los Angeles, CA 90028</span>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=7001+Hollywood+Blvd,+Los+Angeles,+CA+90028"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FFD700] hover:text-amber-200 font-bold shrink-0 text-[11px] uppercase tracking-wider"
                    >
                      View Map →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
