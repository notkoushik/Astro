import React, { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import Logo from './components/Logo'
import ZodiacWheel from './components/ZodiacWheel'
import ServiceDetailView from './components/ServiceDetailView'
import NotFoundView from './components/NotFoundView'
import { detailedServicesData } from './data/servicesData'

interface ServiceItem {
  id: string
  title: string
  subtitle: string
  img: string
  desc: string
  details: string
}

const services: ServiceItem[] = [
  {
    id: 'love-relationship',
    title: 'Love & Relationship',
    subtitle: 'Problems',
    img: '/images/couple.webp',
    desc: 'Restore trust, communication and emotional harmony.',
    details: 'Vedic astrological compatibility analysis to resolve misunderstandings, emotional distance, toxic relationship cycles, and restore affection and mutual devotion between partners.'
  },
  {
    id: 'marriage-compatibility',
    title: 'Marriage &',
    subtitle: 'Compatibility',
    img: '/images/wedding.webp',
    desc: 'Understand compatibility and find a positive path forward.',
    details: 'In-depth Kundali Milan (Guna Milan), dosha analysis (Mangal Dosha), resolving inter-caste marriage obstacles, and remedies for pre-marital delays or marital disputes.'
  },
  {
    id: 'career-business',
    title: 'Career &',
    subtitle: 'Business',
    img: '/images/career.webp',
    desc: 'Make confident decisions about work, growth and opportunity.',
    details: 'Planetary alignments of the 10th house for promotions, job stability, business partnership luck, commercial venture success, and unlocking auspicious timing for ventures.'
  },
  {
    id: 'financial-problems',
    title: 'Financial',
    subtitle: 'Problems',
    img: '/images/finance.webp',
    desc: 'Astrological guidance for stability and financial obstacles.',
    details: 'Analysis of Dhan Yoga and planetary blocks. Powerful Lakshmi Vedic pujas, gemstone recommendations, and remedies to overcome recurring debts and sudden losses.'
  },
  {
    id: 'black-magic-removal',
    title: 'Black Magic',
    subtitle: 'Removal',
    img: '/images/fire.webp',
    desc: 'Confidential spiritual support for negative influences.',
    details: '100% confidential and safe spiritual cleansing. Neutralization of negative energies, unseen obstacles, chronic spiritual affliction, and protective kavach installation.'
  },
  {
    id: 'evil-eye-protection',
    title: 'Evil Eye',
    subtitle: 'Protection',
    img: '/images/eye.webp',
    desc: 'Traditional remedies for protection and peace of mind.',
    details: 'Nazar dosha diagnosis, negative aura shielding, and ancient Vedic talisman remedies to safeguard your home, business, children, and personal energy field.'
  },
  {
    id: 'family-child-problems',
    title: 'Family &',
    subtitle: 'Child Problems',
    img: '/images/family.webp',
    desc: 'Guidance for a more peaceful and united family life.',
    details: 'Remedies for generational friction, parental discord, child concentration or behavioral difficulties, and astrological solutions for childless couples (Santana Gopala).'
  },
  {
    id: 'health-wellness',
    title: 'Health &',
    subtitle: 'Wellness',
    img: '/images/wellness.webp',
    desc: 'Spiritual insight to support balance and positive energy.',
    details: 'Ayur-Jyotish planetary insights into chronic physical and mental fatigue, chakra realignment guidance, and auspicious timing for medical recovery.'
  },
  {
    id: 'court-case-problems',
    title: 'Court Case',
    subtitle: 'Problems',
    img: '/images/court.webp',
    desc: 'Clear guidance when navigating disputes and legal concerns.',
    details: 'Astrological analysis of 6th and 8th house transit afflictions, special Baglamukhi mantras and rituals for favorable legal outcomes, settlements, and peace.'
  },
  {
    id: 'property-land-disputes',
    title: 'Property &',
    subtitle: 'Land Disputes',
    img: '/images/home.webp',
    desc: 'Astrological insight for property decisions and conflicts.',
    details: 'Bhumi Dosha and Mars (Mangal) pacification for delayed property sales, inheritance disputes, boundary conflicts, and Vastu astrological harmony.'
  },
  {
    id: 'get-ex-love-back',
    title: 'Get Ex Love',
    subtitle: 'Back',
    img: '/images/love-couple-reunion.webp',
    desc: 'Understand relationship patterns and possibilities for reunion.',
    details: 'Specialized Vedic Vashikaran and Venus (Shukra) attraction remedies to clear third-party interference, heal past hurt, and reignite warmth with your lost love.'
  },
  {
    id: 'horoscope-reading',
    title: 'Horoscope',
    subtitle: 'Reading',
    img: '/images/vedic-zodiac-wheel-orange.webp',
    desc: 'A personalized reading based on your birth details.',
    details: 'Comprehensive Janam Kundali breakdown including Mahadasha, Antardasha, Sade Sati analysis, past life karma indicators, and detailed 12-month future forecast.'
  },
]

interface HeroSlide {
  id: string
  category: string
  bgImage: string
  isBrightRedOrange: boolean
  hasWheel: boolean
  classicKicker: string
  line1: string
  line2: string
  line2Color: string
  subtitle: string
  buttonText: string
  modalType: 'question' | 'booking'
}

// 5 Complete Astrology Categories for the Big Hero Slider with Classic Bold Lettering & Bright Red/Orange First Slide
const heroSlides: HeroSlide[] = [
  {
    id: 'horoscope',
    category: 'Vedic Horoscope & Astronomical Jyotish',
    bgImage: '/images/astronomical-red-nebula.webp',
    isBrightRedOrange: true,
    hasWheel: true,
    classicKicker: '✦ WORLD FAMOUS INDIAN VEDIC ASTROLOGER IN UK ✦',
    line1: 'PANDITH VIKRAM',
    line2: 'TOP INDIAN ASTROLOGER IN LONDON UK',
    line2Color: 'text-[#FFD700]',
    subtitle: 'Over 35 Years of Scriptural Vedic Mastery. Accurate Horoscope Foretelling, Palmistry, Face Reading & Spiritual Solutions for Love, Marriage, Career & Family Harmony.',
    buttonText: 'BOOK CONSULTATION NOW',
    modalType: 'question'
  },
  {
    id: 'love-marriage',
    category: 'Relationship Reunion & Shukra Vashikaran',
    bgImage: '/images/love-couple-reunion.webp',
    isBrightRedOrange: false,
    hasWheel: false,
    classicKicker: '✦ SACRED VEDIC LOVE RESTORATION ✦',
    line1: 'GET YOUR LOVE EX BACK',
    line2: 'REUNITE BROKEN RELATIONSHIPS',
    line2Color: 'text-[#FFD700]',
    subtitle: 'Clear Third-Party Interference, Dissolve Misunderstandings & Rekindle Deep Lifelong Mutual Devotion With Ancient Vedic Shukra (Venus) Mantras.',
    buttonText: 'REUNITE WITH LOVE NOW',
    modalType: 'booking'
  },
  {
    id: 'career-wealth',
    category: '10th House Karma & Business Prosperity',
    bgImage: '/images/career.webp',
    isBrightRedOrange: false,
    hasWheel: false,
    classicKicker: '✦ SOLAR KARMIC ALIGNMENT & WEALTH ✦',
    line1: 'CAREER & BUSINESS GROWTH',
    line2: 'UNLOCK FINANCIAL TRIUMPH',
    line2Color: 'text-[#FFD700]',
    subtitle: 'Overcome Job Stagnation, Commercial Blocks & Discover Your Most Auspicious Astrological Windows For Investments & Overseas Career.',
    buttonText: 'CONSULT FOR CAREER',
    modalType: 'question'
  },
  {
    id: 'protection',
    category: 'Maha Sudarshana & Pratyangira Shield',
    bgImage: '/images/fire.webp',
    isBrightRedOrange: true,
    hasWheel: false,
    classicKicker: '✦ 100% CONFIDENTIAL SPIRITUAL PROTECTION ✦',
    line1: 'BLACK MAGIC & EVIL EYE REMOVAL',
    line2: 'DIVINE SPIRITUAL CLEANSING',
    line2Color: 'text-[#FFD700]',
    subtitle: 'Sacred Vedic Homa, Tantric Dosha Pacification & Impervious Protective Kavach Safeguards For Your Home, Body & Children.',
    buttonText: 'REQUEST PROTECTION',
    modalType: 'booking'
  },
  {
    id: 'family-health',
    category: 'Vivaha & Kundali Milan Compatibility',
    bgImage: '/images/indian_wedding_regal.webp',
    isBrightRedOrange: false,
    hasWheel: false,
    classicKicker: '✦ SACRED NUPTIAL COMPATIBILITY ✦',
    line1: 'MARRIAGE & COMPATIBILITY',
    line2: '36 GUNA MILAN & DOSHA SHANTI',
    line2Color: 'text-[#FFD700]',
    subtitle: 'Accurate Horoscopic Matching, Inter-Caste Marriage Guidance & Divine Brihaspati Blessings for Lasting Nuptial Peace.',
    buttonText: 'CHECK COMPATIBILITY',
    modalType: 'question'
  }
]

interface MovingPhotoItem {
  id: string
  img: string
  title: string
  subtitle: string
  category: string
  serviceId: string
}

// Dedicated Moving Photos Simultaneously Dataset (Each with Image + Title next to it)
const movingPhotos: MovingPhotoItem[] = [
  {
    id: 'm1',
    img: '/images/shiva-divine-blessing.webp',
    title: 'Lord Shiva Sacred Grace',
    subtitle: 'Cosmic Blessings & Inner Peace',
    category: 'Divine Healing',
    serviceId: 'health-wellness'
  },
  {
    id: 'm2',
    img: '/images/love-couple-reunion.webp',
    title: 'Get Ex Love Back',
    subtitle: 'Vashikaran & Love Reunion',
    category: 'Relationship',
    serviceId: 'get-ex-love-back'
  },
  {
    id: 'm3',
    img: '/images/vedic-zodiac-wheel-orange-nobg.webp',
    title: 'Horoscope & Kundali',
    subtitle: '35+ Years Accurate Foretelling',
    category: 'Janam Kundali',
    serviceId: 'horoscope-reading'
  },
  {
    id: 'm4',
    img: '/images/indian_wedding_regal.webp',
    title: 'Marriage & Compatibility',
    subtitle: '36 Guna Milan & Mangal Shanti',
    category: 'Vivaha Jyotish',
    serviceId: 'marriage-compatibility'
  },
  {
    id: 'm5',
    img: '/images/career.webp',
    title: 'Career & Business Growth',
    subtitle: '10th House Karma & Success',
    category: 'Career Prosperity',
    serviceId: 'career-business'
  },
  {
    id: 'm6',
    img: '/images/finance.webp',
    title: 'Financial Problem Relief',
    subtitle: 'Maha Lakshmi Puja & Debt Removal',
    category: 'Dhan Yoga',
    serviceId: 'financial-problems'
  },
  {
    id: 'm7',
    img: '/images/fire.webp',
    title: 'Black Magic Removal',
    subtitle: '100% Confidential Cleansing',
    category: 'Maha Sudarshana',
    serviceId: 'black-magic-removal'
  },
  {
    id: 'm8',
    img: '/images/eye.webp',
    title: 'Evil Eye & Nazar Nivaran',
    subtitle: 'Protective Kavach & Shield',
    category: 'Aura Shield',
    serviceId: 'evil-eye-protection'
  },
  {
    id: 'm9',
    img: '/images/family.webp',
    title: 'Family & Child Peace',
    subtitle: 'Santana Gopala Remedies',
    category: 'Domestic Peace',
    serviceId: 'family-child-problems'
  },
  {
    id: 'm10',
    img: '/images/wellness.webp',
    title: 'Ayur-Jyotish & Health',
    subtitle: 'Chakra Realignment & Vigor',
    category: 'Holistic Health',
    serviceId: 'health-wellness'
  },
  {
    id: 'm11',
    img: '/images/court.webp',
    title: 'Court Case & Legal Relief',
    subtitle: 'Maa Baglamukhi Yantra Remedies',
    category: 'Legal Victory',
    serviceId: 'court-case-problems'
  },
  {
    id: 'm12',
    img: '/images/home.webp',
    title: 'Property & Land Disputes',
    subtitle: 'Bhumi Dosha & Vastu Harmony',
    category: 'Vastu Shastra',
    serviceId: 'property-land-disputes'
  },
  {
    id: 'm13',
    img: '/images/shiva-meditating-rishikesh.webp',
    title: 'Spiritual Meditation',
    subtitle: 'Inner Calm & Karma Cleansing',
    category: 'Vedic Peace',
    serviceId: 'health-wellness'
  },
  {
    id: 'm14',
    img: '/images/astrology-chart.webp',
    title: 'Planetary Dasha Analysis',
    subtitle: 'Mahadasha & Sade Sati Insights',
    category: 'Ganita Jyotish',
    serviceId: 'horoscope-reading'
  }
]

interface ClientReview {
  id: string
  name: string
  city: string
  state: string
  service: string
  serviceId: string
  img: string
  rating: number
  review: string
  tag: string
}

// 8 Distinct Client Reviews with Unseen Candid Everyday Portraits & Realistic Ratings (5, 4, and 3 Stars)
const clientReviews: ClientReview[] = [
  {
    id: 'r1',
    name: 'Aarav M.',
    city: 'New York City',
    state: 'New York, USA',
    service: 'Get Ex Love Back & Vashikaran',
    serviceId: 'get-ex-love-back',
    img: '/images/client-1.webp',
    rating: 5,
    tag: 'Verified Client • New York',
    review: 'I was shattered when my 5-year relationship ended abruptly due to misunderstandings and third-party interference. Pandith Vikram’s astrological reading was extraordinarily accurate. Within 21 days of following his Shukra mantras and remedies, my partner reached out and apologized. We are now happily planning our marriage in Long Island. Eternally grateful!'
  },
  {
    id: 'r2',
    name: 'Priya & Rohan S.',
    city: 'Edison & Jersey City',
    state: 'New Jersey, USA',
    service: 'Marriage & Kundali Compatibility',
    serviceId: 'marriage-compatibility',
    img: '/images/client-2.webp',
    rating: 4,
    tag: 'Verified Client • New Jersey',
    review: 'Both our families were hesitant due to Manglik dosha and 36 Guna mismatch issues. It took a couple of weeks to coordinate the homam dates across time zones, but once Guruji performed the pacification ritual and gemstone guidance, the friction vanished and both parents gave their blessings.'
  },
  {
    id: 'r3',
    name: 'Vikramaditya K.',
    city: 'San Jose & Fremont',
    state: 'California, USA',
    service: 'Career & Tech Venture Prosperity',
    serviceId: 'career-business',
    img: '/images/client-3.webp',
    rating: 5,
    tag: 'Verified Client • Bay Area CA',
    review: 'Facing severe setbacks with my Silicon Valley startup and career stagnation, I consulted Pandith Vikram. He identified a 10th-house planetary blockage that no other astrologer noticed. Following his remedies, our Series-A funding was approved and I received an executive promotion. A true spiritual master.'
  },
  {
    id: 'r4',
    name: 'Meera N.',
    city: 'Houston & Sugar Land',
    state: 'Texas, USA',
    service: 'Black Magic & Negative Energy Cleansing',
    serviceId: 'black-magic-removal',
    img: '/images/client-4.webp',
    rating: 5,
    tag: 'Verified Client • Houston TX',
    review: 'Our household had been experiencing unexplained illness, heavy negative energy, and constant domestic friction for over a year. Pandith Vikram conducted a remote Maha Sudarshana spiritual cleansing and installed a protective Kavach. From that very week, peace and vitality returned to our family. 100% confidential and life-changing.'
  },
  {
    id: 'r5',
    name: 'Sandeep D.',
    city: 'Naperville & Chicago',
    state: 'Illinois, USA',
    service: 'Financial Block & Debt Relief',
    serviceId: 'financial-problems',
    img: '/images/client-5.webp',
    rating: 3,
    tag: 'Verified Client • Chicago IL',
    review: 'Getting an initial consultation slot took 4 days because of the busy schedule, and the Friday Lakshmi remedies required strict daily discipline for nearly two months before I saw movement. However, his Dhan Yoga calculation was spot-on and my stalled commercial payments finally cleared.'
  },
  {
    id: 'r6',
    name: 'Ananya R.',
    city: 'Atlanta & Alpharetta',
    state: 'Georgia, USA',
    service: 'Husband & Wife Dispute Resolution',
    serviceId: 'marriage-compatibility',
    img: '/images/client-6.webp',
    rating: 5,
    tag: 'Verified Client • Atlanta GA',
    review: 'My husband and I were heading straight toward divorce due to daily ego clashes and outside interference. Pandith Vikram patiently listened and prescribed peaceful Graha Shanti rituals. In less than a month, our mutual warmth and understanding were rekindled. He saved our marriage and our children’s future.'
  },
  {
    id: 'r7',
    name: 'Rajeshwar P.',
    city: 'Dallas & Plano',
    state: 'Texas, USA',
    service: 'Court Case & Legal Victory',
    serviceId: 'court-case-problems',
    img: '/images/client-7.webp',
    rating: 4,
    tag: 'Verified Client • Dallas TX',
    review: 'Entangled in an agonizing commercial property lawsuit for 3 years. The Maa Baglamukhi remedies took a little longer than I initially hoped, but Pandith Vikram predicted the exact quarter when judgment would turn in our favor, and the court ruled in our support.'
  },
  {
    id: 'r8',
    name: 'Kavita T.',
    city: 'Seattle & Bellevue',
    state: 'Washington, USA',
    service: 'Janam Kundali & Sade Sati Guidance',
    serviceId: 'horoscope-reading',
    img: '/images/client-8.webp',
    rating: 5,
    tag: 'Verified Client • Seattle WA',
    review: 'During my peak Sade Sati period, everything felt overwhelming and uncertain. Pandith Vikram’s detailed birth chart breakdown gave me tremendous clarity, emotional peace, and practical Shani pacification remedies. I now consult him before any major life decision.'
  }
]

interface UsaLocationItem {
  id: string
  hub: string
  suburbs: string
}

// 12 Major USA Metropolitan Hubs & Surrounding Satellite Cities (Strictly USA Cities Only)
const usaLocations: UsaLocationItem[] = [
  {
    id: 'ny',
    hub: 'NEW YORK',
    suburbs: 'Manhattan, Queens, Brooklyn, Hicksville, Jackson Heights, Flushing, Bronx, Long Island, Yonkers'
  },
  {
    id: 'nj',
    hub: 'NEW JERSEY',
    suburbs: 'Edison, Jersey City, Iselin, Newark, Princeton, Paterson, Woodbridge, Cherry Hill, Hoboken'
  },
  {
    id: 'sf',
    hub: 'SAN FRANCISCO BAY',
    suburbs: 'San Francisco, San Jose, Fremont, Sunnyvale, Santa Clara, Cupertino, Oakland, Palo Alto'
  },
  {
    id: 'la',
    hub: 'LOS ANGELES',
    suburbs: 'Los Angeles, Beverly Hills, Santa Monica, Pasadena, Anaheim, Irvine, Long Beach, Artesia'
  },
  {
    id: 'dal',
    hub: 'DALLAS & FORT WORTH',
    suburbs: 'Dallas, Plano, Frisco, Irving, Richardson, Arlington, Fort Worth, McKinney, Garland'
  },
  {
    id: 'hou',
    hub: 'HOUSTON METRO',
    suburbs: 'Houston, Sugar Land, Pearland, Katy, The Woodlands, Stafford, Pasadena, Cypress'
  },
  {
    id: 'chi',
    hub: 'CHICAGO METRO',
    suburbs: 'Chicago, Naperville, Schaumburg, Evanston, Oak Brook, Skokie, Aurora, Des Plaines'
  },
  {
    id: 'atl',
    hub: 'ATLANTA METRO',
    suburbs: 'Atlanta, Alpharetta, Marietta, Decatur, Johns Creek, Duluth, Sandy Springs, Roswell'
  },
  {
    id: 'dc',
    hub: 'WASHINGTON DC & VA',
    suburbs: 'Washington DC, Ashburn, Fairfax, Reston, Arlington, Alexandria, Herndon, Bethesda'
  },
  {
    id: 'sea',
    hub: 'SEATTLE METRO',
    suburbs: 'Seattle, Bellevue, Redmond, Kirkland, Tacoma, Bothell, Sammamish, Renton'
  },
  {
    id: 'bos',
    hub: 'BOSTON METRO',
    suburbs: 'Boston, Cambridge, Quincy, Lowell, Framingham, Somerville, Waltham, Brookline'
  },
  {
    id: 'fl',
    hub: 'FLORIDA CITIES',
    suburbs: 'Miami, Orlando, Tampa, Fort Lauderdale, Jacksonville, Boca Raton, Coral Springs, Kissimmee'
  }
]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeModal, setActiveModal] = useState<'question' | 'booking' | 'privacy' | 'terms' | 'disclaimer' | null>(null)
  // Helper to resolve current route (Clean URL /services/<id>, root /<id>, or legacy #<id>) and 404 status
  const parseCurrentUrl = (): { serviceId: string | null; notFound: boolean } => {
    if (typeof window === 'undefined') return { serviceId: null, notFound: false }
    const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
    const hash = window.location.hash.replace(/^#\/?/, '').trim()

    // 1. Check Clean Path: /services/<serviceId> or /<serviceId>
    const cleanMatch = pathname.match(/^\/services\/([a-z0-9-]+)$/i) || pathname.match(/^\/([a-z0-9-]+)$/i)
    if (cleanMatch) {
      const candidate = cleanMatch[1].toLowerCase()
      if (Object.prototype.hasOwnProperty.call(detailedServicesData, candidate)) {
        return { serviceId: candidate, notFound: false }
      }
      if (candidate !== 'index.html') {
        return { serviceId: null, notFound: true }
      }
    }

    // 2. Check legacy hash: #<serviceId>
    if (hash && Object.prototype.hasOwnProperty.call(detailedServicesData, hash)) {
      return { serviceId: hash, notFound: false }
    }

    // 3. Any unrecognized multi-segment path triggers 404 view
    if (pathname !== '/' && pathname !== '/index.html') {
      return { serviceId: null, notFound: true }
    }

    return { serviceId: null, notFound: false }
  }

  const [activeDetailId, setActiveDetailId] = useState<string | null>(() => parseCurrentUrl().serviceId)
  const [isNotFound, setIsNotFound] = useState<boolean>(() => parseCurrentUrl().notFound)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Clean URL + History API routing synchronization
  useEffect(() => {
    const syncFromLocation = () => {
      const { serviceId, notFound } = parseCurrentUrl()
      setIsNotFound(notFound)
      setActiveDetailId(serviceId)
      if (serviceId || notFound) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    syncFromLocation()
    window.addEventListener('popstate', syncFromLocation)
    window.addEventListener('hashchange', syncFromLocation)

    return () => {
      window.removeEventListener('popstate', syncFromLocation)
      window.removeEventListener('hashchange', syncFromLocation)
    }
  }, [])

  // Dynamic Canonical URL, Document Title, Meta Description & Per-Service JSON-LD Schema Markup
  useEffect(() => {
    const baseUrl = 'https://pandithvikramastrology.com'
    const canonicalEl = document.getElementById('canonical-link') as HTMLLinkElement | null
    const metaDescEl = document.getElementById('meta-description') as HTMLMetaElement | null
    let dynamicSchemaEl = document.getElementById('dynamic-service-schema') as HTMLScriptElement | null

    if (isNotFound) {
      document.title = '404 Page Not Found | Indian Astrologer Pandith Vikram'
      if (canonicalEl) canonicalEl.href = `${baseUrl}/404`
      if (dynamicSchemaEl) dynamicSchemaEl.remove()
      return
    }

    if (activeDetailId && Object.prototype.hasOwnProperty.call(detailedServicesData, activeDetailId)) {
      const srv = detailedServicesData[activeDetailId]
      const cleanServiceUrl = `${baseUrl}/services/${srv.id}`
      document.title = `${srv.title} ${srv.subtitle} | Indian Vedic Astrologer Pandith Vikram`
      if (canonicalEl) canonicalEl.href = cleanServiceUrl
      if (metaDescEl) metaDescEl.content = `${srv.desc} Consult Master Vedic Astrologer Pandith Vikram for 100% confidential remedies. Call +44 7537121638.`

      if (!dynamicSchemaEl) {
        dynamicSchemaEl = document.createElement('script')
        dynamicSchemaEl.id = 'dynamic-service-schema'
        dynamicSchemaEl.type = 'application/ld+json'
        document.head.appendChild(dynamicSchemaEl)
      }
      dynamicSchemaEl.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            '@id': `${cleanServiceUrl}#service`,
            name: `${srv.title} ${srv.subtitle}`,
            description: srv.desc,
            url: cleanServiceUrl,
            image: `${baseUrl}${srv.img}`,
            provider: {
              '@id': `${baseUrl}/#astrologer`
            },
            areaServed: ['United Kingdom', 'United States', 'Canada']
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Astrology Services', item: `${baseUrl}/#services` },
              { '@type': 'ListItem', position: 3, name: `${srv.title} ${srv.subtitle}`, item: cleanServiceUrl }
            ]
          }
        ]
      })
    } else {
      document.title = 'Indian Astrologer Pandith Vikram | Premier Vedic Astrologer in London UK & USA'
      if (canonicalEl) canonicalEl.href = `${baseUrl}/`
      if (metaDescEl) {
        metaDescEl.content =
          'Consult Master Indian Vedic Astrologer Pandith Vikram — 35+ years of experience in Get Ex Love Back, Marriage Compatibility, Black Magic Removal, Evil Eye Protection, Career & Horoscope Readings across London UK & USA. Call +44 7537121638.'
      }
      if (dynamicSchemaEl) dynamicSchemaEl.remove()
    }
  }, [activeDetailId, isNotFound])

  // Auto-advance slides every 6 seconds when on home page
  useEffect(() => {
    if (activeDetailId || isNotFound) return
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [activeDetailId, isNotFound])

  // Auto-slide client reviews automatically every 4 seconds when on home page
  useEffect(() => {
    if (activeDetailId || isNotFound) return
    const reviewTimer = setInterval(() => {
      setCurrentReviewIndex(prev => (prev + 1) % clientReviews.length)
    }, 4000)
    return () => clearInterval(reviewTimer)
  }, [activeDetailId, isNotFound])

  // Force browser tab to immediately refresh the favicon with our exact logo SVG
  useEffect(() => {
    const links = document.querySelectorAll("link[rel*='icon']")
    links.forEach((link) => {
      const linkEl = link as HTMLLinkElement
      linkEl.type = 'image/svg+xml'
      linkEl.href = `/favicon.svg?v=5_${Date.now()}`
    })
  }, [])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    service: 'Love & Relationship Problems',
    question: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    })
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setActiveModal(null)
      setFormData({
        name: '',
        phone: '',
        email: '',
        dob: '',
        service: 'Love & Relationship Problems',
        question: '',
      })
    }, 2800)
  }

  // Open dedicated screen for any service using clean SEO URL (/services/<serviceId>)
  const openDedicatedService = (serviceId: string) => {
    if (Object.prototype.hasOwnProperty.call(detailedServicesData, serviceId)) {
      setIsNotFound(false)
      setActiveDetailId(serviceId)
      if (typeof window !== 'undefined' && window.history?.pushState) {
        const targetPath = `/services/${serviceId}`
        if (window.location.pathname !== targetPath) {
          window.history.pushState({ serviceId }, '', targetPath)
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const closeDedicatedService = (scrollToTop = true) => {
    setIsNotFound(false)
    setActiveDetailId(null)
    if (typeof window !== 'undefined' && window.history?.pushState) {
      if (window.location.pathname !== '/' || window.location.hash) {
        window.history.pushState(null, '', '/')
      }
    }
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const currentDetailedService = activeDetailId && Object.prototype.hasOwnProperty.call(detailedServicesData, activeDetailId)
    ? detailedServicesData[activeDetailId]
    : null

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans relative">
      {/* 1. TOP UTILITY HEADER (Deep Regal Maroon Strip with Direct Contacts) */}
      <div className="w-full bg-[#8E1612] text-white text-xs select-none py-2 px-4 border-b border-red-900/60 shadow-sm relative z-50">
        <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 flex flex-col md:flex-row items-center justify-between gap-2 font-roboto whitespace-nowrap">
          {/* Left: Location & Direct Email */}
          <div className="flex items-center gap-3 text-xs whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-amber-200 font-semibold tracking-wide text-[11px] whitespace-nowrap">
              <span className="text-amber-400">📍</span>
              London, UK • Consultations Across UK & Worldwide
            </span>
            <span className="text-red-300/60 hidden sm:inline">|</span>
            <a href="mailto:pandithvikram@gmail.com" className="hidden sm:flex items-center gap-1.5 text-white hover:text-amber-200 transition-colors text-[11px] whitespace-nowrap">
              <svg className="w-3.5 h-3.5 text-amber-300 fill-amber-300 shrink-0" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>pandithvikram@gmail.com</span>
            </a>
          </div>

          {/* Right: Direct Helpline & WhatsApp Quick Connect */}
          <div className="flex items-center gap-3.5 text-xs whitespace-nowrap">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-amber-300">📞</span>
              <span className="text-red-200 text-[11px] hidden sm:inline whitespace-nowrap">24/7 UK Confidential:</span>
              <a href="tel:+447537121638" className="text-white hover:text-amber-200 font-extrabold tracking-wide transition-colors whitespace-nowrap">
                +44 7537121638
              </a>
            </div>
            <span className="text-red-300/60">|</span>
            <a
              href="https://wa.me/447537121638"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-2.5 py-0.5 rounded-none transition-colors text-[11px] font-semibold whitespace-nowrap shrink-0"
            >
              <svg className="w-3 h-3 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.71 20.28 11.92C20.28 16.46 16.59 20.16 12.04 20.16C10.64 20.16 9.27 19.8 8.08 19.09L7.79 18.92L4.69 19.73L5.52 16.71L5.33 16.41C4.55 15.17 4.14 13.56 4.14 11.91C4.14 7.37 7.83 3.67 12.04 3.67ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.51 13.54 14.67C13.39 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.61 11.78C9.47 11.53 9.59 11.4 9.72 11.27C9.83 11.16 9.97 10.98 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.41C10.43 10.25 10.39 10.1 10.33 9.98C10.27 9.85 9.77 8.63 9.57 8.13C9.37 7.65 9.17 7.71 9.02 7.71C8.88 7.7 8.71 7.7 8.55 7.7C8.38 7.7 8.11 7.76 7.88 8.01C7.65 8.26 7 8.87 7 10.09C7 11.31 7.89 12.49 8.01 12.65C8.14 12.82 9.77 15.32 12.26 16.39C12.85 16.65 13.31 16.8 13.67 16.92C14.26 17.11 14.8 17.08 15.23 17.02C15.71 16.95 16.71 16.42 16.92 15.84C17.12 15.26 17.12 14.77 17.06 14.67C17 14.56 16.82 14.51 16.57 14.39Z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR (Crisp White Background with Executive Single-Line Arrangement) */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm transition-all duration-200">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-5 lg:px-6 xl:px-8 h-20 sm:h-22 flex items-center justify-between gap-3 xl:gap-6">
          {/* Brand Logo Component - Placed neatly at the Left Corner */}
          <button onClick={closeDedicatedService} className="text-left cursor-pointer group shrink-0 whitespace-nowrap">
            <Logo variant="light" />
          </button>

          {/* Desktop Navigation Links - Arranged strictly in ONE Single Line */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-7 text-xs xl:text-sm font-semibold text-slate-700 font-roboto whitespace-nowrap shrink-0">
            <button
              onClick={closeDedicatedService}
              className={`hover:text-[#B91C1C] transition-colors py-1 cursor-pointer whitespace-nowrap ${
                !activeDetailId ? 'text-[#B91C1C] font-bold border-b-2 border-[#B91C1C] pb-0.5' : 'text-slate-700 border-b-2 border-transparent hover:border-[#B91C1C]'
              }`}
            >
              Home
            </button>
            <a
              href="#about-london"
              onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
              className="hover:text-[#B91C1C] transition-colors py-1 border-b-2 border-transparent hover:border-[#B91C1C] whitespace-nowrap"
            >
              About Us
            </a>

            {/* Services with Professional Dropdown (Strict Square Geometry: rounded-none) */}
            <div className="relative group py-2 whitespace-nowrap">
              <a
                href="#services"
                onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
                className="hover:text-[#B91C1C] transition-colors py-1 border-b-2 border-transparent hover:border-[#B91C1C] flex items-center gap-1 cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Astrology Services</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-[#B91C1C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              {/* Dropdown Menu (Strict Square Geometry: rounded-none) */}
              <div className="absolute left-0 top-full pt-1.5 w-76 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 shadow-2xl">
                <div className="bg-white border-t-2 border-[#B91C1C] border-x border-b border-slate-200 rounded-none py-1.5 divide-y divide-slate-100 shadow-2xl">
                  <div className="px-4 py-2 bg-slate-50 text-[10px] uppercase font-bold tracking-wider text-slate-600 flex justify-between items-center whitespace-nowrap">
                    <span>12 Vedic Services</span>
                    <span className="text-[#B91C1C]">Pandith Vikram</span>
                  </div>
                  <div className="max-h-80 overflow-y-auto py-1 divide-y divide-slate-50">
                    {services.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => openDedicatedService(item.id)}
                        className={`w-full text-left px-4 py-2 text-xs transition-colors rounded-none flex items-center justify-between hover:bg-red-50 hover:text-[#B91C1C] cursor-pointer font-roboto whitespace-nowrap ${
                          activeDetailId === item.id ? 'bg-red-50 text-[#B91C1C] font-bold' : 'text-slate-700'
                        }`}
                      >
                        <span className="truncate">{item.title} {item.subtitle}</span>
                        <span className="text-[10px] text-slate-400 ml-2 shrink-0">→</span>
                      </button>
                    ))}
                  </div>
                  <div className="p-2.5 bg-slate-50 text-center">
                    <a
                      href="#services"
                      onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
                      className="text-[11px] font-bold text-[#B91C1C] hover:underline uppercase tracking-wider block whitespace-nowrap"
                    >
                      View All 12 Services Grid ↓
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => openDedicatedService('get-ex-love-back')}
              className="hover:text-[#B91C1C] transition-colors py-1 border-b-2 border-transparent hover:border-[#B91C1C] cursor-pointer whitespace-nowrap"
            >
              Get Ex Love Back
            </button>
            <a
              href="#about-london"
              onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
              className="hover:text-[#B91C1C] transition-colors py-1 border-b-2 border-transparent hover:border-[#B91C1C] whitespace-nowrap"
            >
              UK Reach
            </a>
            <button
              onClick={() => setActiveModal('question')}
              className="hover:text-[#B91C1C] transition-colors py-1 border-b-2 border-transparent hover:border-[#B91C1C] cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </button>
          </nav>

          {/* Right Action Buttons: Helpline Pill + Consultation Button (Always strictly on ONE Line) */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0 whitespace-nowrap">
            <a
              href="tel:+447537121638"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 px-3 xl:px-3.5 py-1.5 xl:py-2 rounded-none transition-all flex items-center gap-2 group whitespace-nowrap shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
              <div className="text-left leading-none font-roboto whitespace-nowrap">
                <span className="text-[9px] uppercase font-bold text-slate-500 block leading-none whitespace-nowrap">24/7 Helpline</span>
                <span className="text-xs font-black text-slate-900 group-hover:text-[#B91C1C] leading-tight font-roboto whitespace-nowrap">+44 7537121638</span>
              </div>
            </a>

            <button
              onClick={() => setActiveModal('booking')}
              className="bg-[#B91C1C] hover:bg-[#991B1B] text-white px-3.5 xl:px-5 py-2.5 rounded-none font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>✦</span>
              <span className="whitespace-nowrap">BOOK CONSULTATION</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-800 hover:text-[#B91C1C] p-2 focus:outline-none border border-slate-200 bg-slate-50"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer (Clean White Styling) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl text-slate-800">
            <button
              onClick={() => { closeDedicatedService(); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-800 hover:text-[#B91C1C] font-semibold border-b border-slate-100"
            >
              Home
            </button>
            <a
              href="#about-london"
              onClick={() => { if (activeDetailId) closeDedicatedService(false); setMobileMenuOpen(false); }}
              className="block py-2 text-slate-800 hover:text-[#B91C1C] font-semibold border-b border-slate-100"
            >
              About Us
            </a>
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 py-2">
                <a
                  href="#services"
                  onClick={() => { if (activeDetailId) closeDedicatedService(false); setMobileMenuOpen(false); }}
                  className="text-slate-800 hover:text-[#B91C1C] font-semibold"
                >
                  Astrology Services
                </a>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-1 text-[#B91C1C] text-xs font-bold rounded-none cursor-pointer"
                  aria-label="Toggle all services"
                >
                  {mobileServicesOpen ? '▲ Close' : '▼ (12 Services)'}
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="pl-3 py-2 space-y-1.5 bg-slate-50 border-b border-slate-100 max-h-64 overflow-y-auto">
                  {services.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => { openDedicatedService(item.id); setMobileMenuOpen(false); }}
                      className="block w-full text-left py-1 text-xs text-slate-700 hover:text-[#B91C1C] rounded-none cursor-pointer"
                    >
                      • {item.title} {item.subtitle}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => { openDedicatedService('get-ex-love-back'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-800 hover:text-[#B91C1C] font-semibold border-b border-slate-100"
            >
              Get Ex Love Back
            </button>
            <a
              href="#about-london"
              onClick={() => { if (activeDetailId) closeDedicatedService(false); setMobileMenuOpen(false); }}
              className="block py-2 text-slate-800 hover:text-[#B91C1C] font-semibold border-b border-slate-100"
            >
              UK Reach
            </a>
            <button
              onClick={() => { setActiveModal('question'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-800 hover:text-[#B91C1C] font-semibold"
            >
              Contact Us
            </button>

            {/* Mobile Actions: Call & Book Consultation */}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href="tel:+447537121638"
                className="text-center bg-slate-100 text-slate-900 border border-slate-300 py-2.5 rounded-none font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <span>📞 Call Helpline</span>
              </a>
              <button
                onClick={() => { setActiveModal('booking'); setMobileMenuOpen(false); }}
                className="text-center bg-[#B91C1C] text-white py-2.5 rounded-none font-bold text-xs uppercase tracking-wider"
              >
                ✦ Book Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* DEDICATED SCREEN ROUTING: Render 404 NotFoundView, Full In-Depth Service Screen, or Home View */}
      {isNotFound ? (
        <NotFoundView
          onGoHome={() => closeDedicatedService(true)}
          onSelectService={(serviceId) => openDedicatedService(serviceId)}
          onBookNow={() => setActiveModal('booking')}
        />
      ) : currentDetailedService ? (
        <ServiceDetailView
          service={currentDetailedService}
          onBack={closeDedicatedService}
          onBookNow={() => setActiveModal('booking')}
          onSelectService={openDedicatedService}
        />
      ) : (
        <>
          {/* 3. HERO SLIDER SECTION (Classic Bold Typography, Transparent Rotating Vedic Zodiac Wheel) */}
          <section id="home" className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] xl:min-h-[750px] bg-black overflow-hidden select-none flex items-center">
            {/* Cosmic Starfield Particle Overlay */}
            <div className="absolute inset-0 cosmic-stars-bg opacity-30 pointer-events-none z-10"></div>

            {heroSlides.map((slide, index) => {
              const isActive = index === currentSlide
              return (
                <div
                  key={slide.id}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {/* Clean Background Image with AVIF/WebP & Explicit Dimensions for Zero CLS & Fast LCP */}
                  <picture className="absolute inset-0 w-full h-full block pointer-events-none select-none">
                    <source srcSet={slide.bgImage.replace(/\.webp$/, '.avif')} type="image/avif" />
                    <source srcSet={slide.bgImage} type="image/webp" />
                    <img
                      src={slide.bgImage}
                      alt={`${slide.line1} ${slide.line2} - ${slide.category} by Indian Vedic Astrologer Pandith Vikram`}
                      width={1920}
                      height={1080}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding={index === 0 ? 'sync' : 'async'}
                      className="w-full h-full object-cover object-center scale-105 transition-transform duration-7000 ease-out pointer-events-none select-none"
                    />
                  </picture>

                  {/* Dynamic Gradient Scrim for Optimal Astronomical Contrast */}
                  <div className={`absolute inset-0 ${
                    slide.isBrightRedOrange
                      ? 'bg-gradient-to-r from-black/92 via-black/65 to-black/35'
                      : 'bg-gradient-to-r from-black/88 via-black/55 to-black/30'
                  } z-10 pointer-events-none`}></div>

                  {/* Content Container - Always Front, Center & Fully Visible */}
                  <div className="absolute inset-0 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 z-20 py-8">
                    {/* Left Text Overlay - Oswald + Manrope Typography Matching Reference */}
                    <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-5 z-20">
                      {/* Authority Kicker Badge (Manrope Bold) */}
                      <div className="inline-block bg-[#9B120E] text-white border border-[#E5A000] px-4 py-1.5 text-[11px] sm:text-xs font-manrope font-bold uppercase tracking-[0.08em] shadow-md rounded-none">
                        {slide.classicKicker}
                      </div>

                      {/* Display Headings (Strictly ONE H1 on the active slide; H2 on inactive slides for Proper H1/H2 SEO Structure) */}
                      <div className="space-y-0.5">
                        {isActive ? (
                          <h1 className="font-oswald text-4xl sm:text-6xl lg:text-[64px] xl:text-[70px] font-bold text-white uppercase tracking-[-0.01em] leading-[0.98]">
                            {slide.line1}
                          </h1>
                        ) : (
                          <h2 className="font-oswald text-4xl sm:text-6xl lg:text-[64px] xl:text-[70px] font-bold text-white uppercase tracking-[-0.01em] leading-[0.98]">
                            {slide.line1}
                          </h2>
                        )}
                        <div className="font-oswald text-4xl sm:text-6xl lg:text-[64px] xl:text-[70px] font-bold text-[#F5B800] uppercase tracking-[-0.01em] leading-[0.98]">
                          {slide.line2}
                        </div>
                      </div>

                      {/* Subtitle with Gold Left Accent Bar (Manrope Regular) */}
                      <p className="font-manrope text-xs sm:text-base lg:text-[17px] text-white/95 max-w-2xl leading-[1.6] font-normal border-l-[3px] border-[#F5B800] pl-4 py-0.5">
                        {slide.subtitle}
                      </p>

                      {/* Trust Pills (Manrope Bold, Gold Bordered) */}
                      <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] font-manrope font-bold uppercase tracking-[0.06em] text-[#F5B800]">
                        <button
                          type="button"
                          onClick={() => setActiveModal(slide.modalType)}
                          className="bg-black/65 hover:bg-black/85 border border-[#E5A000]/80 px-3.5 py-2 rounded-[4px] transition-colors cursor-pointer"
                        >
                          ✦ 100% CONFIDENTIAL
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveModal(slide.modalType)}
                          className="bg-black/65 hover:bg-black/85 border border-[#E5A000]/80 px-3.5 py-2 rounded-[4px] transition-colors cursor-pointer"
                        >
                          ✦ 35+ YEARS MASTERY
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveModal(slide.modalType)}
                          className="bg-black/65 hover:bg-black/85 border border-[#E5A000]/80 px-3.5 py-2 rounded-[4px] transition-colors cursor-pointer"
                        >
                          ✦ 45K+ SATISFIED CLIENTS
                        </button>
                      </div>
                    </div>

                    {/* Right Side Rotating Background-Less Vedic Zodiac Wheel */}
                    {slide.hasWheel && (
                      <div className="hidden md:flex items-center justify-center shrink-0 z-20 md:pr-4 lg:pr-8">
                        <ZodiacWheel className="w-[300px] sm:w-[400px] md:w-[460px] lg:w-[520px] xl:w-[580px] h-[300px] sm:h-[400px] md:h-[460px] lg:h-[520px] xl:h-[580px]" />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}

            {/* Previous Slide Arrow (<) - Sharp Square */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/90 text-white w-9 sm:w-11 h-14 sm:h-16 flex items-center justify-center transition-colors cursor-pointer rounded-none border-y border-r border-white/20"
              aria-label="Previous slide"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Slide Arrow (>) - Sharp Square */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/90 text-white w-9 sm:w-11 h-14 sm:h-16 flex items-center justify-center transition-colors cursor-pointer rounded-none border-y border-l border-white/20"
              aria-label="Next slide"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 transition-all duration-300 rounded-none cursor-pointer ${
                    i === currentSlide ? 'w-7 bg-[#FFD700]' : 'w-2 bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </section>

          {/* Astronomical Navagraha Ephemeris Ribbon */}
          <div className="w-full bg-[#060A1F] border-b border-amber-500/30 text-amber-200/90 py-2.5 px-4 text-[11px] sm:text-xs font-roboto font-semibold tracking-wider uppercase overflow-x-auto whitespace-nowrap shadow-inner flex items-center justify-center gap-4 sm:gap-6 select-none">
            <span className="text-[#FFD700] flex items-center gap-1 font-bold">
              <span>✦</span> NAVAGRAHA CELESTIAL EPHEMERIS <span>✦</span>
            </span>
            <span className="text-slate-500">•</span>
            <span>☉ Surya (Sun)</span>
            <span className="text-slate-600">•</span>
            <span>☽ Chandra (Moon)</span>
            <span className="text-slate-600">•</span>
            <span>♂ Mangal (Mars)</span>
            <span className="text-slate-600">•</span>
            <span>☿ Budha (Mercury)</span>
            <span className="text-slate-600">•</span>
            <span>♃ Guru (Jupiter)</span>
            <span className="text-slate-600">•</span>
            <span>♀ Shukra (Venus)</span>
            <span className="text-slate-600">•</span>
            <span>♄ Shani (Saturn)</span>
            <span className="text-slate-600">•</span>
            <span>☊ Rahu</span>
            <span className="text-slate-600">•</span>
            <span>☋ Ketu</span>
          </div>

          {/* 4. MOVING PHOTOS SIMULTANEOUSLY SHOWCASE (Continuous Infinite Marquee with Image + Title Next to It) */}
          <section className="bg-[#05081C] text-white py-6 border-b border-amber-500/30 overflow-hidden relative select-none">
            {/* Section Header Strip */}
            <div className="max-w-7xl mx-auto px-4 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#D61B14] inline-block animate-pulse"></span>
                <h2 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-amber-300">
                  ✦ Sacred Vedic Remedies & Visual Showcase
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 font-roboto">
                Moving simultaneously • Click any image to explore full dedicated screen
              </p>
            </div>

            {/* Marquee Track with Fade Gradient Edges */}
            <div className="relative w-full overflow-hidden">
              {/* Left edge fade scrim */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#05081C] to-transparent z-10"></div>
              {/* Right edge fade scrim */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#05081C] to-transparent z-10"></div>

              {/* Infinite Continuous Moving Strip (All Photos Moving Simultaneously) */}
              <div className="animate-marquee-simultaneous py-2 flex gap-4 select-none">
                {[...movingPhotos, ...movingPhotos].map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    onClick={() => openDedicatedService(item.serviceId)}
                    className="bg-[#0D1333] hover:bg-[#161F4D] border border-amber-500/35 hover:border-[#FFD700] hover:shadow-[0_0_20px_rgba(255,215,0,0.35)] p-2.5 flex items-center gap-3.5 transition-all duration-200 cursor-pointer rounded-none shrink-0 w-[310px] sm:w-[360px] group"
                  >
                    {/* Left: Square Photo Frame (AVIF/WebP + Explicit Dimensions) */}
                    <div className="w-20 h-20 sm:w-22 sm:h-22 shrink-0 overflow-hidden bg-black border-2 border-amber-400 relative">
                      <picture className="w-full h-full block">
                        <source srcSet={item.img.replace(/\.webp$/, '.avif')} type="image/avif" />
                        <source srcSet={item.img} type="image/webp" />
                        <img
                          src={item.img}
                          alt={`${item.title} - ${item.category} Vedic Astrology Remedy by Pandith Vikram`}
                          width={88}
                          height={88}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Right: Title & Description Next to Image */}
                    <div className="flex-1 min-w-0 pr-1">
                      <span className="text-[10px] font-bold font-roboto uppercase tracking-wider text-red-400 block truncate">
                        ✦ {item.category}
                      </span>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#FFD700] group-hover:text-amber-200 uppercase tracking-tight truncate mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 font-roboto line-clamp-2 leading-snug mt-1">
                        {item.subtitle}
                      </p>
                      <div className="pt-1.5 flex items-center gap-1 text-[11px] font-bold text-amber-400 group-hover:text-white uppercase tracking-wider">
                        <span>Read More</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. TRUST BADGES STRIP (High-Precision Luxury Gold Vector SVG Logos & Cosmic Elegance) */}
          <section className="bg-[#060B1E] border-y border-amber-500/30 py-8 px-4 cosmic-stars-bg text-white relative">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-amber-500/20">
                {/* 1. Lifetime Protection (Sacred Vedic Raksha Kavach Shield Logo) */}
                <div className="pt-3 md:pt-0 px-2 lg:px-4 flex flex-col items-center group">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-none bg-gradient-to-b from-[#10193E] to-[#080E24] border border-amber-400/50 group-hover:border-[#FFD700] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] flex items-center justify-center mb-3 transition-all duration-300 shadow-lg relative">
                    <svg className="w-10 h-10 sm:w-11 sm:h-11" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="shieldGoldLogo" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFF275" />
                          <stop offset="30%" stopColor="#FFD700" />
                          <stop offset="70%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#B45309" />
                        </linearGradient>
                        <linearGradient id="shieldInnerGlow" x1="32" y1="12" x2="32" y2="52" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#B45309" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      {/* Outer Heraldic Shield */}
                      <path d="M32 4L54 11V29C54 43.5 44.5 54.8 32 60C19.5 54.8 10 43.5 10 29V11L32 4Z" fill="url(#shieldInnerGlow)" stroke="url(#shieldGoldLogo)" strokeWidth="2.2" strokeLinejoin="round" />
                      {/* Inner Inset Shield Contour */}
                      <path d="M32 9L49 14.8V28.5C49 40.5 41.5 50.2 32 54.5C22.5 50.2 15 40.5 15 28.5V14.8L32 9Z" stroke="url(#shieldGoldLogo)" strokeWidth="1" strokeDasharray="2.5 2.5" opacity="0.8" />
                      {/* Central Sudarshana / 8-Point Protection Star */}
                      <path d="M32 17L35.5 28.5L47 32L35.5 35.5L32 47L28.5 35.5L17 32L28.5 28.5L32 17Z" fill="url(#shieldGoldLogo)" />
                      {/* Diagonal Diamond Accent */}
                      <path d="M32 23L34.2 29.8L41 32L34.2 34.2L32 41L29.8 34.2L23 32L29.8 29.8L32 23Z" fill="#FFF8B0" />
                      {/* Sacred Jewel Core */}
                      <circle cx="32" cy="32" r="3.5" fill="#080E24" stroke="url(#shieldGoldLogo)" strokeWidth="1.5" />
                      <circle cx="32" cy="32" r="1.5" fill="#FFD700" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">Lifetime Protection</h4>
                  <p className="text-[11px] text-slate-300 mt-1 font-roboto">Vedic Shield Assured</p>
                </div>

                {/* 2. Accurate Readings (Sacred Astronomical Astrolabe & Vedic Compass Logo) */}
                <div className="pt-3 md:pt-0 px-2 lg:px-4 flex flex-col items-center group">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-none bg-gradient-to-b from-[#10193E] to-[#080E24] border border-amber-400/50 group-hover:border-[#FFD700] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] flex items-center justify-center mb-3 transition-all duration-300 shadow-lg relative">
                    <svg className="w-10 h-10 sm:w-11 sm:h-11" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="readingsGoldLogo" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFF275" />
                          <stop offset="35%" stopColor="#FFD700" />
                          <stop offset="75%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#B45309" />
                        </linearGradient>
                      </defs>
                      {/* Outer Astrolabe Dial */}
                      <circle cx="32" cy="32" r="27" stroke="url(#readingsGoldLogo)" strokeWidth="2" />
                      {/* Concentric Coordinate Ring */}
                      <circle cx="32" cy="32" r="22" stroke="url(#readingsGoldLogo)" strokeWidth="1" strokeDasharray="3 3" opacity="0.85" />
                      {/* 12-Zodiac Cardinal Degree Ticks */}
                      <line x1="32" y1="5" x2="32" y2="9" stroke="url(#readingsGoldLogo)" strokeWidth="2" strokeLinecap="round" />
                      <line x1="32" y1="55" x2="32" y2="59" stroke="url(#readingsGoldLogo)" strokeWidth="2" strokeLinecap="round" />
                      <line x1="5" y1="32" x2="9" y2="32" stroke="url(#readingsGoldLogo)" strokeWidth="2" strokeLinecap="round" />
                      <line x1="55" y1="32" x2="59" y2="32" stroke="url(#readingsGoldLogo)" strokeWidth="2" strokeLinecap="round" />
                      <line x1="13" y1="13" x2="16" y2="16" stroke="url(#readingsGoldLogo)" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="48" y1="48" x2="51" y2="51" stroke="url(#readingsGoldLogo)" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="51" y1="13" x2="48" y2="16" stroke="url(#readingsGoldLogo)" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="16" y1="48" x2="13" y2="51" stroke="url(#readingsGoldLogo)" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Inscribed Kundali Diamond Chart */}
                      <rect x="20" y="20" width="24" height="24" transform="rotate(45 32 32)" stroke="url(#readingsGoldLogo)" strokeWidth="1.4" fill="none" />
                      <rect x="22" y="22" width="20" height="20" stroke="url(#readingsGoldLogo)" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.6" />
                      {/* Central Astrological Compass Sun */}
                      <circle cx="32" cy="32" r="5" fill="#080E24" stroke="url(#readingsGoldLogo)" strokeWidth="1.8" />
                      {/* North-South Needle */}
                      <polygon points="32,15 34.5,30 32,32 29.5,30" fill="url(#readingsGoldLogo)" />
                      <polygon points="32,49 34.5,34 32,32 29.5,34" fill="#D97706" />
                      <circle cx="32" cy="32" r="2" fill="#FFF" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">Accurate Readings</h4>
                  <p className="text-[11px] text-slate-300 mt-1 font-roboto">Vedic Ephemeris Charts</p>
                </div>

                {/* 3. 100% Confidentiality (Sacred Royal Vault Padlock Logo) */}
                <div className="pt-3 md:pt-0 px-2 lg:px-4 flex flex-col items-center group">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-none bg-gradient-to-b from-[#10193E] to-[#080E24] border border-amber-400/50 group-hover:border-[#FFD700] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] flex items-center justify-center mb-3 transition-all duration-300 shadow-lg relative">
                    <svg className="w-10 h-10 sm:w-11 sm:h-11" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="lockGoldLogo" x1="10" y1="6" x2="54" y2="58" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFF275" />
                          <stop offset="30%" stopColor="#FFD700" />
                          <stop offset="70%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#B45309" />
                        </linearGradient>
                        <linearGradient id="shackleGoldGrad" x1="20" y1="6" x2="44" y2="28" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFE082" />
                          <stop offset="50%" stopColor="#FFD700" />
                          <stop offset="100%" stopColor="#D97706" />
                        </linearGradient>
                      </defs>
                      {/* Heavy Arched Vault Shackle */}
                      <path d="M22 28V18C22 12.477 26.477 8 32 8C37.523 8 42 12.477 42 18V28" stroke="url(#shackleGoldGrad)" strokeWidth="4" strokeLinecap="round" />
                      <path d="M26 28V18C26 14.686 28.686 12 32 12C35.314 12 38 14.686 38 18V28" stroke="#FFEAA7" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
                      {/* Vault Body */}
                      <rect x="14" y="26" width="36" height="31" rx="3" fill="#0A122E" stroke="url(#lockGoldLogo)" strokeWidth="2.2" />
                      {/* Beveled Chamfer Frame */}
                      <rect x="17.5" y="29.5" width="29" height="24" rx="1.5" stroke="url(#lockGoldLogo)" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
                      {/* Security Corner Rivets */}
                      <circle cx="18.5" cy="30.5" r="1.2" fill="url(#lockGoldLogo)" />
                      <circle cx="45.5" cy="30.5" r="1.2" fill="url(#lockGoldLogo)" />
                      <circle cx="18.5" cy="49.5" r="1.2" fill="url(#lockGoldLogo)" />
                      <circle cx="45.5" cy="49.5" r="1.2" fill="url(#lockGoldLogo)" />
                      {/* Rotary Dial Medallion */}
                      <circle cx="32" cy="41.5" r="8" fill="#080E24" stroke="url(#lockGoldLogo)" strokeWidth="1.6" />
                      <circle cx="32" cy="41.5" r="6" stroke="url(#lockGoldLogo)" strokeWidth="0.8" strokeDasharray="2 1.5" opacity="0.8" />
                      {/* Precision Keyhole */}
                      <circle cx="32" cy="39.5" r="2.2" fill="url(#lockGoldLogo)" />
                      <path d="M30.6 40.5L29.8 45.5H34.2L33.4 40.5Z" fill="url(#lockGoldLogo)" />
                      <circle cx="32" cy="39.5" r="0.8" fill="#080E24" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">100% Confidentiality</h4>
                  <p className="text-[11px] text-slate-300 mt-1 font-roboto">Privacy Sacredly Guarded</p>
                </div>

                {/* 4. Experienced Astrologer (Prestigious Vedic Master Laureate Seal Logo) */}
                <div className="pt-3 md:pt-0 px-2 lg:px-4 flex flex-col items-center group">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-none bg-gradient-to-b from-[#10193E] to-[#080E24] border border-amber-400/50 group-hover:border-[#FFD700] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] flex items-center justify-center mb-3 transition-all duration-300 shadow-lg relative">
                    <svg className="w-10 h-10 sm:w-11 sm:h-11" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="guruGoldLogo" x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFF275" />
                          <stop offset="35%" stopColor="#FFD700" />
                          <stop offset="70%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#B45309" />
                        </linearGradient>
                      </defs>
                      {/* Laurel Wreath (Left Branch) */}
                      <path d="M12 40C10 32 12 21 18 14" stroke="url(#guruGoldLogo)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M11 25C9 23 9 20 12 19C14 22 13 24 11 25Z" fill="url(#guruGoldLogo)" />
                      <path d="M13 32C10 31 10 28 13 27C15 30 15 32 13 32Z" fill="url(#guruGoldLogo)" />
                      <path d="M16 39C13 39 12 36 15 34C18 36 17 39 16 39Z" fill="url(#guruGoldLogo)" />
                      {/* Laurel Wreath (Right Branch) */}
                      <path d="M52 40C54 32 52 21 46 14" stroke="url(#guruGoldLogo)" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M53 25C55 23 55 20 52 19C50 22 51 24 53 25Z" fill="url(#guruGoldLogo)" />
                      <path d="M51 32C54 31 54 28 51 27C49 30 49 32 51 32Z" fill="url(#guruGoldLogo)" />
                      <path d="M48 39C51 39 52 36 49 34C46 36 47 39 48 39Z" fill="url(#guruGoldLogo)" />
                      {/* Central Master Medal Body */}
                      <circle cx="32" cy="30" r="17" fill="#080E24" stroke="url(#guruGoldLogo)" strokeWidth="2.2" />
                      <circle cx="32" cy="30" r="14" stroke="url(#guruGoldLogo)" strokeWidth="1" strokeDasharray="3 2" opacity="0.75" />
                      {/* Radiating 12 Solar Rays of Jyotish Surya */}
                      <line x1="32" y1="10" x2="32" y2="13" stroke="url(#guruGoldLogo)" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="32" y1="47" x2="32" y2="50" stroke="url(#guruGoldLogo)" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="12" y1="30" x2="15" y2="30" stroke="url(#guruGoldLogo)" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="49" y1="30" x2="52" y2="30" stroke="url(#guruGoldLogo)" strokeWidth="1.8" strokeLinecap="round" />
                      {/* Astrologer Crown Crest */}
                      <path d="M27 23L29 25L32 21L35 25L37 23V26.5H27V23Z" fill="url(#guruGoldLogo)" />
                      {/* "35+" Gold Medal Inscription */}
                      <text x="32" y="38" textAnchor="middle" fill="url(#guruGoldLogo)" fontFamily="Georgia, serif" fontSize="11" fontWeight="bold" letterSpacing="0.5">35+</text>
                      {/* Lower Medal Knot */}
                      <path d="M26 53L32 49L38 53L35 46H29L26 53Z" fill="url(#guruGoldLogo)" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">Experienced Astrologer</h4>
                  <p className="text-[11px] text-slate-300 mt-1 font-roboto">35+ Years of Mastery</p>
                </div>

                {/* 5. Worldwide Clients (Global Celestial Armillary Sphere Logo) */}
                <div className="pt-3 md:pt-0 px-2 lg:px-4 flex flex-col items-center col-span-2 md:col-span-1 group">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-none bg-gradient-to-b from-[#10193E] to-[#080E24] border border-amber-400/50 group-hover:border-[#FFD700] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] flex items-center justify-center mb-3 transition-all duration-300 shadow-lg relative">
                    <svg className="w-10 h-10 sm:w-11 sm:h-11" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="globeGoldLogo" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#FFF275" />
                          <stop offset="35%" stopColor="#FFD700" />
                          <stop offset="70%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#B45309" />
                        </linearGradient>
                      </defs>
                      {/* Terrestrial Globe Sphere */}
                      <circle cx="32" cy="32" r="21" fill="#080E24" stroke="url(#globeGoldLogo)" strokeWidth="2.2" />
                      {/* Equator */}
                      <line x1="11" y1="32" x2="53" y2="32" stroke="url(#globeGoldLogo)" strokeWidth="1.2" />
                      {/* Latitude Parallels */}
                      <path d="M15.5 22C21 24.5 43 24.5 48.5 22" stroke="url(#globeGoldLogo)" strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
                      <path d="M15.5 42C21 39.5 43 39.5 48.5 42" stroke="url(#globeGoldLogo)" strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
                      {/* Meridians */}
                      <ellipse cx="32" cy="32" rx="11" ry="21" stroke="url(#globeGoldLogo)" strokeWidth="1.2" />
                      <line x1="32" y1="11" x2="32" y2="53" stroke="url(#globeGoldLogo)" strokeWidth="1.2" />
                      {/* Tilted Celestial Orbital Ring (Back Arc) */}
                      <path d="M7 40C12 47 48 22 57 24" stroke="url(#globeGoldLogo)" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.6" />
                      {/* Tilted Celestial Orbital Ring (Front Sweeping Arc) */}
                      <path d="M57 24C53 19 22 38 7 40" stroke="url(#globeGoldLogo)" strokeWidth="2" strokeLinecap="round" />
                      {/* UK / London Coordinate Diamond Star */}
                      <polygon points="32,20 33.5,23 36,23.5 33.5,24.5 32,27 30.5,24.5 28,23.5 30.5,23" fill="#FFF8B0" />
                      <circle cx="32" cy="23.5" r="1" fill="#FFD700" />
                      {/* Global Orbit Satellites */}
                      <circle cx="12" cy="38" r="2" fill="url(#globeGoldLogo)" />
                      <circle cx="52" cy="25.5" r="2.2" fill="url(#globeGoldLogo)" />
                      <circle cx="43" cy="36" r="1.5" fill="#FFEAA7" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">Worldwide Clients</h4>
                  <p className="text-[11px] text-slate-300 mt-1 font-roboto">UK, USA, Canada, India</p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. LONDON UK PREMIER ASTROLOGER SECTION (REORDERED TO TOP: Placed Right Below Hero & Trust Badges) */}
          <section id="about-london" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FBFBFC] border-b border-slate-200 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Prestigious Alternative Headings & Authentic Vedic Narrative */}
              <div className="lg:col-span-7 space-y-8 font-roboto text-slate-700">
                {/* Main Heading Block with Prestigious Alternative Headline */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 bg-[#D61B14]/10 text-[#D61B14] border border-[#D61B14]/30 px-3 py-1 text-xs font-bold uppercase tracking-widest font-roboto">
                    <span>✦</span> SACRED VEDIC JYOTISH & ASTRONOMICAL GUIDANCE IN THE UK <span>✦</span>
                  </div>
                  <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 uppercase tracking-tight">
                    London’s Premier Indian Vedic Astrologer – <span className="text-[#D61B14]">Pandith Vikram</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#D61B14] to-amber-500"></div>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    Everyone seeks clarity about their destiny, planetary influences, and life decisions. With over 35 years of scriptural mastery, Pandith Vikram offers deeply accurate Vedic astrology and planetary balancing to help you overcome afflictions in love, marriage, career, and personal life. As London's leading Indian Vedic Astrologer, Palmist, Face Reader, and Spiritual Healer, Pandith Vikram specializes in clearing karmic obstacles, restoring harmonious family relationships, and reuniting broken love with permanent, positive spiritual remedies.
                  </p>
                </div>

                {/* Sub-Block 1: Alternative Heading for "Meet The Best Indian Vedic Astrologer In London Uk" */}
                <div className="space-y-3">
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold text-slate-900 uppercase flex items-center gap-2">
                    <span className="text-[#D61B14]">✦</span>
                    <span>Celestial Guidance for Life's Critical Turning Points</span>
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    Life is a perpetual cosmic journey that takes you across crests and troughs of planetary transits. When planetary afflictions cause prolonged struggle or emotional despair, understanding your Janam Kundali brings immediate light and clarity. True peace is your birthright, and ancient Vedic wisdom provides the exact keys to restore confidence, joy, and emotional fulfillment.
                  </p>
                </div>

                {/* Sub-Block 2: Alternative Heading for "Reputed Indian Astrologer In London, UK" */}
                <div className="space-y-3">
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold text-slate-900 uppercase flex items-center gap-2">
                    <span className="text-[#D61B14]">✦</span>
                    <span>Renowned Vedic Master & Spiritual Energy Healer in Central London</span>
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    Do recurrent setbacks, unexplained blocks, or persistent heartaches leave you drained? If unseen negative energies or planetary doshas are clouding your path, Pandith Vikram offers time-tested Vedic remedies. Through sacred mantras, personalized yantras, and planetary pacification, he serves as your steadfast guide through life's most challenging phases.
                  </p>
                </div>

                {/* Sub-Block 3: Alternative Heading for "Vedic Astrologer In London, UK Astrologer Near Me" */}
                <div className="space-y-3">
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold text-slate-900 uppercase flex items-center gap-2">
                    <span className="text-[#D61B14]">✦</span>
                    <span>Trusted Vedic Horoscope Consultations Across Greater London</span>
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    Pandith Vikram has established an exceptional reputation across the UK for compassionate accuracy and life-transforming solutions. Combining deep astronomical planetary calculations (Ganita Jyotish) with spiritual healing, he rekindles hope in distressed hearts and neutralizes adverse astrological periods such as Sade Sati, Rahu Mahadasha, and Manglik Dosha.
                  </p>
                </div>

                {/* Sub-Block 4: Alternative Heading for "Indian Psychic In London, UK Psychic Near Me" */}
                <div className="space-y-3">
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold text-slate-900 uppercase flex items-center gap-2">
                    <span className="text-[#D61B14]">✦</span>
                    <span>Intuitive Psychic Foretelling & Aura Shielding in the UK</span>
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    Are you seeking to restore harmony, mental calm, and spiritual vitality? Pandith Vikram’s intuitive psychic readings reveal concealed energies, dissolving doubts and establishing a fortified energetic shield against negativity, stress, and anxiety.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href="tel:+447537121638"
                    className="bg-[#D61B14] hover:bg-[#b5140e] text-white font-roboto font-bold px-7 py-3.5 rounded-none text-xs uppercase tracking-wider transition-colors shadow flex items-center gap-2 cursor-pointer"
                  >
                    <span>Consult Pandith Vikram Today</span>
                    <span>→</span>
                  </a>
                  <button
                    onClick={() => setActiveModal('booking')}
                    className="bg-[#FFD700] hover:bg-amber-300 text-slate-950 font-roboto font-bold px-7 py-3.5 rounded-none text-xs uppercase tracking-wider transition-colors shadow cursor-pointer"
                  >
                    Book Private Reading
                  </button>
                </div>
              </div>

              {/* Right Column: Square Artwork & "WILL HE COME BACK?" Callout Card (100% Non-Screenshot Authentic Files) */}
              <div className="lg:col-span-5 space-y-8">
                {/* 1. Sacred Lord Shiva Blessing Artwork (High-Resolution Painting, Square Frame) */}
                <div className="bg-white p-2.5 border-2 border-amber-400 shadow-xl rounded-none">
                  <div className="relative overflow-hidden aspect-[4/3] bg-black">
                    <picture className="w-full h-full block">
                      <source srcSet="/images/shiva-divine-blessing.avif" type="image/avif" />
                      <source srcSet="/images/shiva-divine-blessing.webp" type="image/webp" />
                      <img
                        src="/images/shiva-divine-blessing.webp"
                        alt="Lord Shiva Sacred Divine Blessing and Cosmic Protection by Indian Astrologer Pandith Vikram"
                        width={640}
                        height={480}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFD700] font-roboto block">
                        ✦ DIVINE VEDIC GRACE & COSMIC HEALING ✦
                      </span>
                      <p className="font-oswald text-base sm:text-lg font-bold uppercase text-white drop-shadow">
                        Lord Shiva Sacred Blessings & Planetary Peace
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Authentic Square "WILL HE COME BACK?" Callout Card (Square Geometry, High-Res Non-Screenshot Couple) */}
                <div className="relative bg-white border-2 border-[#D61B14] shadow-2xl overflow-hidden rounded-none group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <picture className="w-full h-full block">
                      <source srcSet="/images/love-couple-reunion.avif" type="image/avif" />
                      <source srcSet="/images/love-couple-reunion.webp" type="image/webp" />
                      <img
                        src="/images/love-couple-reunion.webp"
                        alt="Get Ex Love Back & Relationship Reconciliation Consultation by Pandith Vikram"
                        width={640}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Prominent Square Yellow Badge */}
                    <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-[#FFD700] border-2 border-amber-400 text-slate-950 px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xl rounded-none text-center">
                      <p className="font-oswald text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-slate-950 leading-tight">
                        WILL HE <br />
                        <span className="text-[#D61B14]">COME BACK?</span>
                      </p>
                    </div>
                  </div>

                  {/* Sharp Square Phone Call Strip */}
                  <a
                    href="tel:+447539818985"
                    className="block bg-[#D61B14] hover:bg-[#b5140e] text-white py-3.5 px-4 text-center transition-colors cursor-pointer rounded-none border-t border-red-700"
                  >
                    <span className="font-oswald text-base sm:text-lg lg:text-xl font-black uppercase tracking-wider flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
                      </svg>
                      <span>CALL US: +44 7539818985</span>
                    </span>
                  </a>
                </div>

                {/* 3. Direct UK Office Information Card */}
                <div className="bg-white p-6 border border-slate-200 shadow-sm rounded-none space-y-3 font-roboto">
                  <h4 className="font-oswald text-lg font-bold text-slate-900 uppercase">
                    London Consultations & Appointments
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Available for confidential in-person readings across Central London, Wembley, Ilford, Southall, and telephone/WhatsApp readings worldwide.
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#D61B14]">
                    <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
                    <span>100% Guaranteed Privacy</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. SPEAK DIRECTLY BANNER (Cosmic Crimson & Gold) */}
          <section className="relative bg-[#D61B14] text-white py-14 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-inner">
            <div className="relative max-w-5xl mx-auto text-center space-y-4">
              <p className="text-amber-200 text-xs sm:text-sm font-bold tracking-widest uppercase font-roboto">
                ✦ SACRED CONFIDENTIAL GUIDANCE WHEN YOU NEED IT ✦
              </p>

              <h2 className="font-oswald text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
                Speak Directly With Pandith Vikram
              </h2>

              <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto font-roboto">
                Share your concern in complete confidence and receive clear, personalized astrological guidance and Vedic remedies.
              </p>

              <div className="pt-2">
                <p className="text-xs font-semibold text-amber-200 tracking-wider uppercase mb-1 font-roboto">
                  Available 24 Hours, 7 Days a Week in UK
                </p>
                <a
                  href="tel:+447537121638"
                  className="inline-block font-oswald text-3xl sm:text-5xl font-bold text-[#FFD700] hover:text-white transition-colors tracking-wider"
                >
                  +44 7537121638
                </a>
              </div>

              <div className="pt-3">
                <a
                  href="tel:+447537121638"
                  className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-amber-300 text-slate-950 font-bold px-8 py-3.5 rounded-none text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl active:scale-95 cursor-pointer font-roboto"
                >
                  <svg className="w-4 h-4 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
                  </svg>
                  <span>Call For a Consultation</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </section>

          {/* 7. OUR ASTROLOGY SERVICES CATEGORIES (REORDERED DOWN: Placed Below London Section, Full Astronomical Observatory Atmosphere) */}
          <section id="services" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F2A] text-white relative overflow-hidden cosmic-stars-bg border-b border-slate-800">
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <div className="inline-block bg-amber-500/20 text-[#FFD700] border border-[#FFD700]/40 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest font-roboto mb-3 rounded-none">
                  ✦ 12 SACRED BHAVAS & CELESTIAL PLANETARY PATHWAYS ✦
                </div>
                <h2 className="font-oswald text-3xl sm:text-5xl font-bold text-white tracking-wide uppercase">
                  Our 12 Sacred Vedic Astrology <span className="text-[#FFD700]">Services</span>
                </h2>
                <div className="w-24 h-1 bg-[#FFD700] mx-auto my-3.5"></div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-roboto">
                  Explore our 12 dedicated Jyotish consultation areas — combining ancient cosmic planetary science with bespoke Vedic homams and remedies. Click "Read More" for each service's dedicated screen.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
                {services.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#12183A] rounded-none border border-amber-500/30 hover:border-[#FFD700] shadow-xl hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] transition-all duration-300 flex flex-col overflow-hidden group"
                  >
                    <a
                      href={`/services/${item.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        openDedicatedService(item.id)
                      }}
                      className="aspect-[16/10] overflow-hidden bg-black relative cursor-pointer block"
                    >
                      <picture className="w-full h-full block">
                        <source srcSet={item.img.replace(/\.webp$/, '.avif')} type="image/avif" />
                        <source srcSet={item.img} type="image/webp" />
                        <img
                          src={item.img}
                          alt={`${item.title} ${item.subtitle} - Vedic Astrology Consultation by Pandith Vikram`}
                          width={640}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12183A] via-transparent to-transparent"></div>
                    </a>

                    <div className="p-5 flex-1 flex flex-col text-center justify-between">
                      <div>
                        <h3 className="font-oswald text-lg font-bold text-[#FFD700] group-hover:text-amber-300 mb-2 leading-snug uppercase transition-colors">
                          <a
                            href={`/services/${item.id}`}
                            onClick={(e) => {
                              e.preventDefault()
                              openDedicatedService(item.id)
                            }}
                            className="cursor-pointer"
                          >
                            {item.title} <br className="hidden sm:inline" />
                            <span className="text-white">{item.subtitle}</span>
                          </a>
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 mb-5 line-clamp-2 font-roboto leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div>
                        <a
                          href={`/services/${item.id}`}
                          onClick={(e) => {
                            e.preventDefault()
                            openDedicatedService(item.id)
                          }}
                          className="inline-flex items-center justify-center gap-1.5 w-full bg-[#D61B14] hover:bg-[#b5140e] text-white text-xs font-bold py-2.5 px-4 rounded-none transition-colors uppercase tracking-wider shadow cursor-pointer font-roboto border border-red-500/50"
                        >
                          <span>Read More</span>
                          <span>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 8. ABOUT SECTION WITH STATS (Lineage & Credentials) */}
          <section id="about" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-5">
                <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-slate-900 uppercase tracking-tight">
                  About <span className="text-[#D61B14]">Pandith Vikram</span>
                </h2>
                <div className="w-20 h-1 bg-amber-500"></div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-roboto">
                  Pandith Vikram is a renowned Vedic astrologer in the UK with over 35 years of experience in providing accurate horoscope readings and powerful spiritual solutions for love problems, marriage compatibility, career obstacles, and personal healing.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-roboto">
                  Born into a traditional lineage of Vedic masters, Pandith Vikram combines rigorous scriptural precision with deep compassionate insight. Every consultation is strictly confidential and focused on permanent, positive outcomes.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveModal('booking')}
                    className="bg-[#D61B14] hover:bg-[#b5140e] text-white font-roboto font-bold px-7 py-3.5 rounded-none text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Know More About Pandith Vikram</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-none border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none bg-red-100 text-[#D61B14] flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-oswald text-2xl font-bold text-slate-900">35+</p>
                    <p className="text-xs text-slate-600 font-medium">Years of Experience</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-none border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-oswald text-2xl font-bold text-slate-900">45k+</p>
                    <p className="text-xs text-slate-600 font-medium">Happy Clients in UK & Worldwide</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-none border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-oswald text-2xl font-bold text-slate-900">100%</p>
                    <p className="text-xs text-slate-600 font-medium">Confidentiality Assured</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-none border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-none bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-oswald text-base font-bold text-slate-900 leading-snug uppercase">Powerful Vedic</p>
                    <p className="text-xs text-slate-600">Remedies & Spiritual Healing</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. WHAT PEOPLE SAY / OUR HAPPY CLIENTS (With Different Blurred User Portrait Images for 100% Privacy) */}
          <section id="reviews" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F3EF] border-y border-slate-200 relative overflow-hidden">
            {/* Subtle ornamental background glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8E1612]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
              {/* Section Heading matching Reference 2 */}
              <div className="text-center mb-14">
                <p className="text-[#B91C1C] text-xs sm:text-sm font-bold tracking-widest uppercase font-roboto mb-1.5">
                  ✦ What People Say • 100% Confidential Client Feedback ✦
                </p>
                <h2 className="font-oswald text-3xl sm:text-5xl font-bold text-slate-900 uppercase tracking-tight">
                  Our Happy <span className="text-[#8E1612]">Clients</span>
                </h2>
                <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-3"></div>
              </div>

              {/* Self-Sliding Automatic Testimonial Track with Overlapping Blurred User Portraits */}
              <div className="relative max-w-4xl mx-auto overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
                >
                  {clientReviews.map((reviewItem, idx) => (
                    <div key={reviewItem.id} className="w-full shrink-0 pt-10 pb-3 px-2 sm:px-4">
                      <div className="relative bg-white border border-slate-200/90 border-t-4 border-t-[#8E1612] shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-6 sm:p-10 pt-20 sm:pt-10 rounded-none">
                        
                        {/* Overlapping Square-Framed Blurred User Image (Top-Left, Matching Reference 2) */}
                        <div className="absolute -top-8 left-6 sm:left-10 w-24 h-24 sm:w-28 sm:h-28 bg-white p-1.5 shadow-[0_8px_25px_rgba(142,22,18,0.22)] border-2 border-[#8E1612]/30 rounded-none overflow-hidden">
                          <picture className="w-full h-full block">
                            <source srcSet={reviewItem.img.replace(/\.webp$/, '.avif')} type="image/avif" />
                            <source srcSet={reviewItem.img} type="image/webp" />
                            <img
                              src={reviewItem.img}
                              alt={`${reviewItem.name} from ${reviewItem.city}, ${reviewItem.state} - Privacy Protected Vedic Astrology Client Review`}
                              width={112}
                              height={112}
                              loading="lazy"
                              decoding="async"
                              onError={(e) => {
                                const fallbacks = [
                                  '/images/couple.webp',
                                  '/images/wedding.webp',
                                  '/images/family.webp',
                                  '/images/career.webp',
                                  '/images/indian_wedding_regal.webp',
                                  '/images/love-couple-reunion.webp',
                                  '/images/couple_romantic_park.webp',
                                  '/images/couple_forest_embrace.webp'
                                ]
                                ;(e.target as HTMLImageElement).src = fallbacks[idx % fallbacks.length]
                              }}
                              className="w-full h-full object-cover filter blur-[4.5px] scale-115 select-none pointer-events-none"
                            />
                          </picture>
                          {/* Privacy Shield Overlay Badge */}
                          <div className="absolute bottom-1 right-1 bg-[#8E1612]/95 text-[#FFD700] text-[8px] font-bold px-1.5 py-0.5 tracking-wider uppercase shadow-sm font-roboto flex items-center gap-0.5">
                            <span>🔒</span>
                            <span>Private</span>
                          </div>
                        </div>

                        {/* Decorative Large Quote Mark in Top Right */}
                        <div className="hidden sm:block absolute top-5 right-8 text-6xl font-serif text-[#8E1612]/10 select-none leading-none">
                          ❝
                        </div>

                        {/* Card Body Content */}
                        <div className="sm:pl-32 space-y-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <button
                              onClick={() => openDedicatedService(reviewItem.serviceId)}
                              className="inline-flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-[#8E1612] border border-[#8E1612]/25 px-3 py-1 text-[11px] font-bold uppercase tracking-wider font-roboto cursor-pointer transition-colors"
                            >
                              <span>✦ {reviewItem.service}</span>
                            </button>

                            <div className="flex items-center gap-0.5 text-sm tracking-widest" aria-label={`${reviewItem.rating} out of 5 stars`}>
                              {[1, 2, 3, 4, 5].map((starNum) => (
                                <span
                                  key={starNum}
                                  className={starNum <= reviewItem.rating ? 'text-amber-500' : 'text-slate-300'}
                                >
                                  ★
                                </span>
                              ))}
                              <span className="text-[11px] font-bold text-slate-600 ml-1.5 font-roboto">
                                ({reviewItem.rating}.0 / 5.0)
                              </span>
                            </div>
                          </div>

                          {/* Client Quote Text */}
                          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-roboto italic">
                            "{reviewItem.review}"
                          </p>

                          {/* Client Identity & Location Footer */}
                          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <h4 className="font-oswald text-lg font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                                <span>{reviewItem.name}</span>
                                <span className="inline-block w-1.5 h-1.5 bg-[#B91C1C]"></span>
                                <span className="text-sm font-semibold text-[#8E1612]">{reviewItem.city}, {reviewItem.state}</span>
                              </h4>
                              <p className="text-[11px] text-slate-500 font-roboto">
                                Identity blurred to honor our 100% Client Confidentiality Guarantee
                              </p>
                            </div>

                            <span className="inline-block bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider font-roboto self-start sm:self-center">
                              ✓ {reviewItem.tag}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 10. ASTROLOGY USA LOCATIONS DIRECTORY (Strictly USA Cities Only + Golden Constellation Backdrop) */}
          <section id="usa-locations" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-b border-slate-200">
            {/* Subtle Golden Astrological Constellation Line Network SVG Backdrop (Matching Reference 3) */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none select-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 800"
              preserveAspectRatio="xMidYMid slice"
            >
              <g stroke="#D97706" strokeWidth="1" fill="#B91C1C">
                {/* Constellation Lines */}
                <line x1="80" y1="120" x2="240" y2="80" />
                <line x1="240" y1="80" x2="360" y2="200" />
                <line x1="360" y1="200" x2="180" y2="310" />
                <line x1="180" y1="310" x2="80" y2="120" />
                <line x1="360" y1="200" x2="540" y2="140" />
                <line x1="540" y1="140" x2="720" y2="260" />
                <line x1="720" y1="260" x2="900" y2="110" />
                <line x1="900" y1="110" x2="1120" y2="190" />
                <line x1="1120" y1="190" x2="1320" y2="90" />
                <line x1="1120" y1="190" x2="1260" y2="380" />
                <line x1="1260" y1="380" x2="1040" y2="520" />
                <line x1="1040" y1="520" x2="1340" y2="680" />
                <line x1="720" y1="260" x2="680" y2="490" />
                <line x1="680" y1="490" x2="420" y2="620" />
                <line x1="420" y1="620" x2="140" y2="560" />
                <line x1="140" y1="560" x2="290" y2="730" />
                <line x1="680" y1="490" x2="1040" y2="520" />
                {/* Constellation Star Nodes */}
                <circle cx="80" cy="120" r="3.5" />
                <circle cx="240" cy="80" r="4" />
                <circle cx="360" cy="200" r="3" />
                <circle cx="180" cy="310" r="4.5" />
                <circle cx="540" cy="140" r="3" />
                <circle cx="720" cy="260" r="4.5" />
                <circle cx="900" cy="110" r="3.5" />
                <circle cx="1120" cy="190" r="4" />
                <circle cx="1320" cy="90" r="3.5" />
                <circle cx="1260" cy="380" r="4" />
                <circle cx="1040" cy="520" r="4.5" />
                <circle cx="1340" cy="680" r="3.5" />
                <circle cx="680" cy="490" r="4" />
                <circle cx="420" cy="620" r="3.5" />
                <circle cx="140" cy="560" r="4" />
                <circle cx="290" cy="730" r="3.5" />
              </g>
            </svg>

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Heading */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-block bg-red-50 text-[#8E1612] border border-[#8E1612]/25 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest font-roboto mb-3">
                  ✦ COAST-TO-COAST VEDIC JYOTISH REACH ACROSS AMERICA ✦
                </div>
                <h2 className="font-oswald text-3xl sm:text-5xl font-bold text-slate-900 uppercase tracking-tight">
                  Astrology <span className="text-[#B91C1C]">USA Locations</span>
                </h2>
                <div className="w-24 h-1 bg-[#FFD700] mx-auto my-3.5"></div>
                <p className="text-slate-600 text-xs sm:text-sm font-roboto leading-relaxed">
                  Confidential phone, WhatsApp, and one-on-one Vedic astrology consultations serving clients across every major United States metropolitan center and surrounding suburbs.
                </p>
              </div>

              {/* 2-Column USA Cities & Suburbs Directory Grid (Matching Reference 3 Layout) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                {usaLocations.map((loc) => (
                  <div
                    key={loc.id}
                    onClick={() => setActiveModal('question')}
                    className="border-b border-dashed border-slate-300 pb-3.5 pt-1 flex flex-wrap sm:flex-nowrap items-baseline gap-2.5 group hover:bg-amber-50/50 px-2 transition-colors cursor-pointer"
                  >
                    <span className="inline-block bg-[#B91C1C] group-hover:bg-[#8E1612] text-white font-oswald font-bold text-xs sm:text-[13px] px-3 py-1 uppercase tracking-wider shrink-0 border-l-3 border-[#FFD700] shadow-xs transition-colors">
                      {loc.hub}
                    </span>
                    <span className="text-slate-700 group-hover:text-slate-900 text-xs sm:text-[13px] font-roboto leading-relaxed">
                      <strong className="text-[#8E1612] mr-1">-</strong>
                      {loc.suburbs}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* 11. EXPANDED BOTTOM FOOTER WITH OUR BRAND COLOR THEME (Diagonal Regal Maroon, Cosmic Navy, Crimson & 24K Gold) */}
      <footer id="contact" className="relative bg-[#060B28] text-slate-200 pt-16 pb-10 px-4 sm:px-6 lg:px-8 border-t-4 border-[#FFD700] overflow-hidden">
        {/* Architectural Diagonal Two-Tone Brand Color Backdrop (Matching Reference 1 Geometry in Our Color Palette) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#8E1612] via-[#680E0B] to-[#060B28] opacity-95 pointer-events-none"
        ></div>
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-[64%] bg-gradient-to-br from-[#A61914]/90 via-[#7A120E]/95 to-[#080F30] pointer-events-none"
          style={{ clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0% 100%)' }}
        ></div>
        {/* Subtle Gold Top Glow Line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-80"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-amber-400/25">
            
            {/* Column 1: Brand Emblem & Extended Mission Bio (3 Columns) */}
            <div className="lg:col-span-3 space-y-4">
              <button onClick={() => closeDedicatedService(true)} className="inline-block text-left cursor-pointer group">
                <Logo variant="gold" />
              </button>
              <p className="text-xs sm:text-[13px] text-amber-50/90 leading-relaxed font-roboto">
                Feel free to reach out to Astrologer <strong className="text-[#FFD700]">Pandith Vikram</strong> whenever you need dependable Vedic guidance and effective spiritual solutions for your toughest life challenges. With over 35+ years of scriptural mastery, we are always here to help you.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[11px] text-[#FFD700] font-bold uppercase tracking-wider font-roboto">
                <span className="inline-block w-2 h-2 bg-[#FFD700]"></span>
                <span>100% Confidential & Guaranteed Privacy</span>
              </div>
            </div>

            {/* Column 2: Home & Policy Links (2.5 -> 3 Columns) */}
            <div className="lg:col-span-3 space-y-4 lg:pl-4">
              <div>
                <h4 className="font-oswald text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                  Home
                </h4>
                <div className="w-10 h-0.5 bg-[#FFD700] mt-1"></div>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-[13px] font-roboto">
                <li>
                  <button
                    onClick={() => closeDedicatedService(true)}
                    className="text-amber-50/90 hover:text-[#FFD700] transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>Home</span>
                  </button>
                </li>
                <li>
                  <a
                    href="#about-london"
                    onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
                    className="text-amber-50/90 hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
                    className="text-amber-50/90 hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>Astrology Services</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
                    className="text-amber-50/90 hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>Client Reviews</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#usa-locations"
                    onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
                    className="text-amber-50/90 hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>Astrology USA Locations</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('question')}
                    className="text-amber-50/90 hover:text-[#FFD700] transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>Contact Us</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('privacy')}
                    className="text-amber-50/90 hover:text-[#FFD700] transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>Privacy Policy</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('terms')}
                    className="text-amber-50/90 hover:text-[#FFD700] transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>Terms & Conditions</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('disclaimer')}
                    className="text-amber-50/90 hover:text-[#FFD700] transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>Disclaimer</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Expanded Services List (3 Columns, Matching Reference 1) */}
            <div className="lg:col-span-3 space-y-4">
              <div>
                <h4 className="font-oswald text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                  Services
                </h4>
                <div className="w-10 h-0.5 bg-[#FFD700] mt-1"></div>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-[13px] font-roboto">
                {[
                  { label: 'Remove Black Magic', id: 'black-magic-removal' },
                  { label: 'Remove Evil Spirits & Eye', id: 'evil-eye-protection' },
                  { label: 'Career Problems Solution', id: 'career-business' },
                  { label: 'Husband & Wife Problem', id: 'marriage-compatibility' },
                  { label: 'Get Your Love Back', id: 'get-ex-love-back' },
                  { label: 'Love Marriage Specialist', id: 'love-relationship' },
                  { label: 'Match Making For Lovers', id: 'marriage-compatibility' },
                  { label: 'Palmistry & Horoscope Specialist', id: 'horoscope-reading' },
                  { label: 'Vashikaran Mantra For Love', id: 'get-ex-love-back' },
                  { label: 'Family & Child Peace', id: 'family-child-problems' },
                  { label: 'Financial & Business Wealth', id: 'financial-problems' },
                  { label: 'Court Case & Property Dispute', id: 'court-case-problems' },
                ].map((srv, i) => (
                  <li key={i}>
                    <button
                      onClick={() => openDedicatedService(srv.id)}
                      className="text-amber-50/90 hover:text-[#FFD700] transition-colors cursor-pointer text-left flex items-center gap-2 group"
                    >
                      <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                      <span>{srv.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us (3 Columns, Matching Reference 1) */}
            <div className="lg:col-span-3 space-y-4 text-xs sm:text-[13px] font-roboto">
              <div>
                <h4 className="font-oswald text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                  Contact Us
                </h4>
                <div className="w-10 h-0.5 bg-[#FFD700] mt-1"></div>
              </div>

              <div className="space-y-3.5 pt-1">
                {/* Address / Hubs */}
                <div className="flex items-start gap-3 text-amber-50/90">
                  <div className="w-8 h-8 bg-[#060B28]/80 border border-[#FFD700]/50 text-[#FFD700] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="leading-relaxed">
                    <p className="font-bold text-white uppercase text-xs">USA & Global Centers:</p>
                    <p>New York, New Jersey, California, Texas, Chicago, Atlanta & London UK</p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#060B28]/80 border border-[#FFD700]/50 text-[#FFD700] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-amber-200 font-bold">24/7 Direct Helpline</p>
                    <a href="tel:+447537121638" className="text-white hover:text-[#FFD700] font-oswald font-bold text-base sm:text-lg tracking-wider transition-colors">
                      +44 7537121638
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 text-amber-50/90">
                  <div className="w-8 h-8 bg-[#060B28]/80 border border-[#FFD700]/50 text-[#FFD700] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-amber-200 font-bold">Email Support</p>
                    <a href="mailto:pandithvikram@gmail.com" className="hover:text-[#FFD700] transition-colors font-medium break-all">
                      pandithvikram@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours & CTA */}
                <div className="pt-2 space-y-3">
                  <p className="text-[11px] text-amber-200/90 font-medium">
                    ✦ Consultation Hours: Mon - Sun (8:00 AM - 10:00 PM)
                  </p>
                  <button
                    onClick={() => setActiveModal('booking')}
                    className="w-full bg-[#FFD700] hover:bg-amber-300 text-slate-950 font-oswald font-bold py-2.5 px-4 rounded-none text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>✦ Book Confidential Session</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Bar */}
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-amber-100/75 gap-3 font-roboto">
            <p>© 2026 Indian Astrologer Pandith Vikram. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => setActiveModal('privacy')} className="hover:text-[#FFD700] transition-colors cursor-pointer">Privacy Policy</button>
              <span>•</span>
              <button onClick={() => setActiveModal('terms')} className="hover:text-[#FFD700] transition-colors cursor-pointer">Terms & Conditions</button>
              <span>•</span>
              <button onClick={() => setActiveModal('disclaimer')} className="hover:text-[#FFD700] transition-colors cursor-pointer">Disclaimer</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Widget - High Quality Official Vector Logo */}
      <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group select-none">
        {/* Tooltip on Hover */}
        <span className="hidden sm:inline-block bg-[#0A102E] text-amber-200 border border-amber-400/40 text-xs font-bold font-roboto px-3 py-1.5 shadow-2xl rounded-none opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp • Pandith Vikram
        </span>

        <a
          href="https://wa.me/447537121638"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white p-2.5 shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.85)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 rounded-none border-2 border-white cursor-pointer"
          aria-label="Chat with Pandith Vikram on WhatsApp"
        >
          {/* Official Crisp High-Quality WhatsApp Vector SVG */}
          <svg className="w-9 h-9 fill-white" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.71 20.28 11.92C20.28 16.46 16.59 20.16 12.04 20.16C10.64 20.16 9.27 19.8 8.08 19.09L7.79 18.92L4.69 19.73L5.52 16.71L5.33 16.41C4.55 15.17 4.14 13.56 4.14 11.91C4.14 7.37 7.83 3.67 12.04 3.67ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.51 13.54 14.67C13.39 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.61 11.78C9.47 11.53 9.59 11.4 9.72 11.27C9.83 11.16 9.97 10.98 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.41C10.43 10.25 10.39 10.1 10.33 9.98C10.27 9.85 9.77 8.63 9.57 8.13C9.37 7.65 9.17 7.71 9.02 7.71C8.88 7.7 8.71 7.7 8.55 7.7C8.38 7.7 8.11 7.76 7.88 8.01C7.65 8.26 7 8.87 7 10.09C7 11.31 7.89 12.49 8.01 12.65C8.14 12.82 9.77 15.32 12.26 16.39C12.85 16.65 13.31 16.8 13.67 16.92C14.26 17.11 14.8 17.08 15.23 17.02C15.71 16.95 16.71 16.42 16.92 15.84C17.12 15.26 17.12 14.77 17.06 14.67C17 14.56 16.82 14.51 16.57 14.39Z" />
          </svg>
        </a>
      </aside>

      {/* Interactive Modal: Contact Us */}
      {activeModal === 'question' && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-none max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200 border-t-4 border-[#D61B14]">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-none flex items-center justify-center bg-slate-100 cursor-pointer font-bold"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl font-bold">
                  ✓
                </div>
                <h3 className="font-oswald text-2xl font-bold text-slate-900 uppercase">Message Received!</h3>
                <p className="text-sm text-slate-600 font-roboto">
                  Pandith Vikram will review your birth chart details and contact your UK/international phone number shortly.
                </p>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#D61B14] font-roboto">Trusted UK Astrologer</span>
                  <h3 className="font-oswald text-2xl sm:text-3xl font-bold text-slate-900 mt-1 uppercase">Contact Pandith Vikram</h3>
                  <p className="text-xs text-slate-500 mt-1 font-roboto">Confidential & 100% Accurate Vedic Solutions</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 font-roboto">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Smith"
                      className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number (with Country Code) *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+44 7537121638"
                        className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Date of Birth (Optional)</label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Problem Area</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14] bg-white"
                    >
                      {services.map(s => (
                        <option key={s.id} value={`${s.title} ${s.subtitle}`}>{s.title} {s.subtitle}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message / Query *</label>
                    <textarea
                      name="question"
                      required
                      rows={3}
                      value={formData.question}
                      onChange={handleInputChange}
                      placeholder="Please describe your problem or inquiry..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D61B14] hover:bg-[#b5140e] text-white font-bold py-3 rounded-none text-xs uppercase tracking-wider transition-all shadow-md mt-2 cursor-pointer font-roboto"
                  >
                    Send Message Now
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Interactive Modal: Booking */}
      {activeModal === 'booking' && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-none max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200 border-t-4 border-[#FFD700]">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-none flex items-center justify-center bg-slate-100 cursor-pointer font-bold"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl font-bold">
                  ✓
                </div>
                <h3 className="font-oswald text-2xl font-bold text-slate-900 uppercase">Appointment Reserved!</h3>
                <p className="text-sm text-slate-600 font-roboto">
                  Pandith Vikram's team will contact you on +44 7537121638 or your phone to confirm your consultation slot.
                </p>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#D61B14] font-roboto">UK Consultation</span>
                  <h3 className="font-oswald text-2xl font-bold text-slate-900 mt-1 uppercase">
                    {currentDetailedService ? `${currentDetailedService.title} ${currentDetailedService.subtitle}` : 'Get Your Love Ex Back'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-roboto">
                    {currentDetailedService ? 'One-on-One Personalized Vedic Consultation' : 'One-on-One Spiritual & Astrological Healing'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 font-roboto">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. David Brown"
                      className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+44 7537121638"
                        className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yourname@gmail.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Select Consultation Focus</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14] bg-white cursor-pointer"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={`${s.title} ${s.subtitle}`}>
                          {s.title} {s.subtitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D61B14] hover:bg-[#b5140e] text-white font-bold py-3 rounded-none text-xs uppercase tracking-wider transition-all shadow-md mt-2 cursor-pointer font-roboto"
                  >
                    Confirm Consultation Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Interactive Modal: Privacy Policy / Terms & Conditions / Disclaimer */}
      {(activeModal === 'privacy' || activeModal === 'terms' || activeModal === 'disclaimer') && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-none max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8 border-t-4 border-[#8E1612]">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-none flex items-center justify-center bg-slate-100 cursor-pointer font-bold"
            >
              ✕
            </button>

            <div className="space-y-4 font-roboto">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[11px] uppercase tracking-widest font-bold text-[#B91C1C]">
                  ✦ Official Legal & Client Protection Notice
                </span>
                <h3 className="font-oswald text-2xl font-bold text-slate-900 mt-1 uppercase">
                  {activeModal === 'privacy' && 'Privacy Policy & 100% Confidentiality'}
                  {activeModal === 'terms' && 'Terms & Conditions of Service'}
                  {activeModal === 'disclaimer' && 'Astrological Consultation Disclaimer'}
                </h3>
              </div>

              {activeModal === 'privacy' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">100% Client Anonymity & Data Protection:</strong> All birth details (date, time, place of birth), personal photographs, palm readings, and relationship or family concerns shared with Astrologer Pandith Vikram are held in strict spiritual and legal confidence.
                  </p>
                  <p>
                    We never sell, rent, or disclose your personal identity, phone number, or consultation history to any third party. Client testimonials displayed on our website use blurred portraits and abbreviated initials to protect client privacy.
                  </p>
                </div>
              )}

              {activeModal === 'terms' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">Consultation & Vedic Remedy Guidelines:</strong> Consultations are scheduled by appointment via phone, WhatsApp, or in-person sessions across our USA and UK hubs.
                  </p>
                  <p>
                    Personalized Vedic rituals, Homams, Yantras, and planetary pacification remedies are prepared specifically according to the individual’s Janam Kundali (natal chart) and require sincere adherence to the prescribed spiritual guidelines.
                  </p>
                </div>
              )}

              {activeModal === 'disclaimer' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">Traditional Vedic Jyotish Guidance:</strong> Astrological readings, horoscopic predictions, and spiritual remedies provided by Pandith Vikram are based on ancient Indian Vedic scriptures (Parashara & Jaimini Jyotish).
                  </p>
                  <p>
                    While tens of thousands of clients across the USA, UK, and worldwide have experienced transformative results, individual outcomes depend on planetary dashas, karmic factors, and personal effort. Astrological guidance is spiritual in nature and does not replace licensed medical, legal, or psychological advice.
                  </p>
                </div>
              )}

              <div className="pt-3 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="bg-[#8E1612] hover:bg-[#B91C1C] text-white font-oswald font-bold px-6 py-2.5 text-xs uppercase tracking-wider cursor-pointer rounded-none"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
