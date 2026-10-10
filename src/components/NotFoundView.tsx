import React from 'react'

interface NotFoundViewProps {
  onGoHome: () => void
  onSelectService: (serviceId: string) => void
  onOpenBooking: () => void
}

const quickServiceLinks = [
  { id: 'get-ex-love-back', label: 'Get Ex Love Back', path: '/services/get-ex-love-back' },
  { id: 'love-relationship', label: 'Love & Relationship Problems', path: '/services/love-relationship' },
  { id: 'marriage-compatibility', label: 'Marriage & Compatibility', path: '/services/marriage-compatibility' },
  { id: 'black-magic-removal', label: 'Black Magic Removal', path: '/services/black-magic-removal' },
  { id: 'career-business', label: 'Career & Business Growth', path: '/services/career-business' },
  { id: 'horoscope-reading', label: 'Horoscope & Kundali Reading', path: '/services/horoscope-reading' },
]

export default function NotFoundView({ onGoHome, onSelectService, onOpenBooking }: NotFoundViewProps) {
  return (
    <main className="min-h-[75vh] bg-[#060B28] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden cosmic-stars-bg flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full relative z-10 text-center space-y-8">
        <div className="bg-[#0E163B]/95 border-2 border-[#FFD700]/40 border-t-4 border-t-[#B91C1C] p-8 sm:p-12 shadow-2xl space-y-5">
          <div className="inline-block bg-[#8E1612] text-[#FFD700] border border-[#FFD700]/50 px-4 py-1 text-xs font-manrope font-bold uppercase tracking-widest">
            ✦ ERROR 404 • CELESTIAL COORDINATES NOT FOUND ✦
          </div>

          <h1 className="font-oswald text-6xl sm:text-8xl font-bold text-[#FFD700] tracking-tight leading-none">
            404
          </h1>

          <h2 className="font-oswald text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide">
            The Page You Are Looking For Could Not Be Found
          </h2>

          <p className="font-manrope text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The URL you visited may have been moved, renamed, or is temporarily unavailable. Explore our 12 sacred Vedic astrology services below or return directly to the homepage.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={onGoHome}
              className="bg-[#B91C1C] hover:bg-[#8E1612] text-white border border-[#FFD700] font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 transition-all cursor-pointer rounded-none shadow-lg"
            >
              ← Return to Homepage
            </button>

            <button
              type="button"
              onClick={onOpenBooking}
              className="bg-[#FFD700] hover:bg-amber-300 text-slate-950 font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 transition-all cursor-pointer rounded-none shadow-lg"
            >
              ✦ Book Consultation Now
            </button>

            <a
              href="tel:+447537121638"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-oswald font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 transition-all rounded-none"
            >
              📞 Call +44 7537121638
            </a>
          </div>
        </div>

        {/* Popular Clean URL Destinations */}
        <div className="bg-[#0B1233] border border-amber-500/30 p-6 sm:p-8 text-left space-y-4">
          <h3 className="font-oswald text-lg sm:text-xl font-bold uppercase text-[#FFD700] tracking-wider text-center">
            Popular Vedic Astrology Destinations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {quickServiceLinks.map((item) => (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault()
                  onSelectService(item.id)
                }}
                className="bg-[#121B4A] hover:bg-[#8E1612] border border-amber-400/25 hover:border-[#FFD700] p-3.5 text-xs sm:text-sm font-manrope font-bold text-white flex items-center justify-between transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-[#FFD700]">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
