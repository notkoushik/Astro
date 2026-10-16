import React, { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import Logo from './components/Logo'
import ZodiacWheel from './components/ZodiacWheel'
import ServiceDetailView from './components/ServiceDetailView'
import NotFoundView from './components/NotFoundView'
import { detailedServicesData } from './data/servicesData'
import AnimatedCounter from './components/AnimatedCounter'
import BookingPageView from './components/BookingPageView'
import LocationDetailView from './components/LocationDetailView'
import { locationsData, locationsList, getLocationBySlug } from './data/locationsData'
import type { LocationData } from './data/locationsData'

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
    title: 'Love &',
    subtitle: 'Relationship Healing',
    img: '/images/couple.webp',
    desc: 'Rebuild trust, kindness and honest conversation with your partner.',
    details: 'Joint chart reading for couples, Venus remedies and simple daily practices to ease conflict and bring back closeness.'
  },
  {
    id: 'marriage-compatibility',
    title: 'Marriage &',
    subtitle: 'Kundali Matching',
    img: '/images/wedding.webp',
    desc: 'Match charts with care and start married life on solid ground.',
    details: '36 Guna matching, Manglik checks, family guidance and auspicious wedding dates for couples across California.'
  },
  {
    id: 'career-business',
    title: 'Career &',
    subtitle: 'Business Success',
    img: '/images/career.webp',
    desc: 'Time your next career move or business launch with confidence.',
    details: '10th house and Dasha review for promotions, job changes, startups and small businesses, with launch timing.'
  },
  {
    id: 'financial-problems',
    title: 'Money &',
    subtitle: 'Debt Relief',
    img: '/images/finance.webp',
    desc: 'Ease money worries and strengthen the wealth houses in your chart.',
    details: 'Wealth house analysis, Lakshmi-Kubera yantra, debt-relief homa and guidance on timing money decisions.'
  },
  {
    id: 'black-magic-removal',
    title: 'Black Magic',
    subtitle: 'Cleansing & Removal',
    img: '/images/fire.webp',
    desc: 'Discreet Vedic cleansing for homes and families under a dark cloud.',
    details: 'Private spiritual assessment, Sudarshana protection homa, home cleansing and a consecrated Raksha Kavach.'
  },
  {
    id: 'evil-eye-protection',
    title: 'Evil Eye &',
    subtitle: 'Nazar Remedies',
    img: '/images/eye.webp',
    desc: 'Shield your family, home and business from envy and Nazar.',
    details: 'Nazar removal, Hanuman yantra, Drishti Ganapati at the entrance and protective threads for the whole family.'
  },
  {
    id: 'family-child-problems',
    title: 'Family &',
    subtitle: 'Children’s Harmony',
    img: '/images/family.webp',
    desc: 'Bring calm, respect and closeness back to family life.',
    details: 'Remedies for family tension, children’s focus and couples hoping to conceive, including Santana Gopala prayers.'
  },
  {
    id: 'health-wellness',
    title: 'Wellness &',
    subtitle: 'Peace of Mind',
    img: '/images/wellness.webp',
    desc: 'Spiritual support for better energy, rest and a steadier mind.',
    details: 'Ayur-Jyotish insight into energy, sleep and stress, offered alongside the care of your own doctor.'
  },
  {
    id: 'court-case-problems',
    title: 'Legal &',
    subtitle: 'Court Case Guidance',
    img: '/images/court.webp',
    desc: 'Steady guidance and Baglamukhi remedies through legal battles.',
    details: '6th house review, Baglamukhi puja and timing guidance for hearings, mediation and settlement talks.'
  },
  {
    id: 'property-land-disputes',
    title: 'Property &',
    subtitle: 'Real Estate Disputes',
    img: '/images/home.webp',
    desc: 'Clarity on buying, selling and inheritance, plus Vastu balance.',
    details: 'Bhumi puja, Mars remedies and Vastu corrections for stalled sales, escrow delays and inheritance disputes.'
  },
  {
    id: 'get-ex-love-back',
    title: 'Bring Back',
    subtitle: 'Lost Love',
    img: '/images/love-couple-reunion.webp',
    desc: 'Heal a painful breakup and learn whether reconnection is possible.',
    details: 'Sattvic love mantras, Radha-Krishna puja and honest timing advice for reconnecting after a breakup.'
  },
  {
    id: 'horoscope-reading',
    title: 'Birth Chart &',
    subtitle: 'Horoscope Reading',
    img: '/images/vedic-zodiac-wheel-orange.webp',
    desc: 'A personal reading of your birth chart and the year ahead.',
    details: 'Full Janam Kundali reading with Dasha timeline, Sade Sati review and a personal outlook for the year ahead.'
  },
  {
    id: 'psychic-reading',
    title: 'Psychic &',
    subtitle: 'Intuitive Reading',
    img: '/images/moon-phases.webp',
    desc: 'Intuitive answers to urgent questions about love, work and life.',
    details: 'Intuitive insight checked against a Prashna chart cast for the moment you ask, by phone, video or in person.'
  },
  {
    id: 'tarot-reading',
    title: 'Tarot Card',
    subtitle: 'Reading',
    img: '/images/tarot.webp',
    desc: 'A tarot spread read alongside your birth chart for clear direction.',
    details: 'Three-card, ten-card, love and year-ahead tarot spreads, each matched with your Dasha and transits.'
  },
  {
    id: 'love-spells',
    title: 'Love Spells',
    subtitle: '& Sacred Rituals',
    img: '/images/candles.webp',
    desc: 'Positive love rituals to attract the right partner and deepen a bond.',
    details: 'Sattvic love spells, Swayamvara Parvati mantra and Venus rituals that always respect free will.'
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
    category: 'Vedic Astrology & Jyotish Readings',
    bgImage: '/images/astronomical-red-nebula.webp',
    isBrightRedOrange: true,
    hasWheel: true,
    classicKicker: '✦ HOLLYWOOD BLVD • LOS ANGELES, CALIFORNIA ✦',
    line1: 'PANDITH VIKRAM',
    line2: 'INDIAN ASTROLOGER IN LOS ANGELES',
    line2Color: 'text-[#FFD700]',
    subtitle: 'More than 35 years of traditional Jyotish practice, now serving California from Hollywood Boulevard. Get clear, honest answers about love, marriage, career and family, grounded in careful birth chart calculation.',
    buttonText: 'BOOK YOUR READING',
    modalType: 'question'
  },
  {
    id: 'love-marriage',
    category: 'Love Reunion & Venus Remedies',
    bgImage: '/images/love-couple-reunion.webp',
    isBrightRedOrange: false,
    hasWheel: true,
    classicKicker: '✦ DEVOTIONAL REMEDIES FOR MATTERS OF THE HEART ✦',
    line1: 'HEAL A BROKEN HEART',
    line2: 'RECONNECT WITH THE ONE YOU LOVE',
    line2Color: 'text-[#FFD700]',
    subtitle: 'Ease the anger, pride and outside interference that pulled you apart. Gentle Sattvic remedies help create the calm and goodwill needed for an honest second chance.',
    buttonText: 'TALK ABOUT YOUR RELATIONSHIP',
    modalType: 'booking'
  },
  {
    id: 'career-wealth',
    category: 'Career Timing & Business Growth',
    bgImage: '/images/career.webp',
    isBrightRedOrange: false,
    hasWheel: true,
    classicKicker: '✦ 10TH HOUSE CAREER & WEALTH TIMING ✦',
    line1: 'CAREER BREAKTHROUGH',
    line2: 'GROW YOUR BUSINESS WITH CLARITY',
    line2Color: 'text-[#FFD700]',
    subtitle: 'From Silicon Valley tech to Hollywood studios to family businesses in Artesia, learn which planetary periods favor a job change, a new venture or a move, and choose auspicious dates for every launch.',
    buttonText: 'ASK ABOUT YOUR CAREER',
    modalType: 'question'
  },
  {
    id: 'protection',
    category: 'Sudarshana & Pratyangira Protection',
    bgImage: '/images/fire.webp',
    isBrightRedOrange: true,
    hasWheel: true,
    classicKicker: '✦ PRIVATE, DISCREET SPIRITUAL PROTECTION ✦',
    line1: 'NEGATIVE ENERGY CLEANSING',
    line2: 'EVIL EYE & BLACK MAGIC PROTECTION',
    line2Color: 'text-[#FFD700]',
    subtitle: 'Lift the heaviness from your home, your health and your work. Consecrated Vedic homas and a protective kavach help restore peace for you and the people you love.',
    buttonText: 'REQUEST A CLEANSING',
    modalType: 'booking'
  },
  {
    id: 'family-health',
    category: 'Kundali Matching & Marriage Harmony',
    bgImage: '/images/indian_wedding_regal.webp',
    isBrightRedOrange: false,
    hasWheel: true,
    classicKicker: '✦ 36 GUNA MATCHING & MARRIAGE PEACE ✦',
    line1: 'MARRIAGE HARMONY',
    line2: 'EASE FAMILY & IN-LAW TENSIONS',
    line2Color: 'text-[#FFD700]',
    subtitle: 'Understand your Manglik, Nadi and Bhakoot results properly, and find practical remedies that bring warmth back to married life and peace between families.',
    buttonText: 'MATCH YOUR KUNDALIS',
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
    title: 'Blessings of Lord Shiva',
    subtitle: 'Calm, Protection & Inner Strength',
    category: 'Divine Grace',
    serviceId: 'health-wellness'
  },
  {
    id: 'm2',
    img: '/images/love-couple-reunion.webp',
    title: 'Bring Back Lost Love',
    subtitle: 'Devotional Love Reunion Remedies',
    category: 'Love Reunion',
    serviceId: 'get-ex-love-back'
  },
  {
    id: 'm3',
    img: '/images/vedic-zodiac-wheel-orange-nobg.webp',
    title: 'Janam Kundali Reading',
    subtitle: 'Over Three Decades of Chart Reading',
    category: 'Birth Chart',
    serviceId: 'horoscope-reading'
  },
  {
    id: 'm4',
    img: '/images/indian_wedding_regal.webp',
    title: 'Marriage & Kundali Matching',
    subtitle: '36 Guna Matching & Manglik Checks',
    category: 'Marriage',
    serviceId: 'marriage-compatibility'
  },
  {
    id: 'm5',
    img: '/images/career.webp',
    title: 'Career & Business Success',
    subtitle: 'Timing for Promotions & Launches',
    category: 'Career',
    serviceId: 'career-business'
  },
  {
    id: 'm6',
    img: '/images/finance.webp',
    title: 'Money & Debt Relief',
    subtitle: 'Lakshmi-Kubera Prosperity Remedies',
    category: 'Wealth',
    serviceId: 'financial-problems'
  },
  {
    id: 'm7',
    img: '/images/fire.webp',
    title: 'Black Magic Cleansing',
    subtitle: 'Private Protection Homa',
    category: 'Protection',
    serviceId: 'black-magic-removal'
  },
  {
    id: 'm8',
    img: '/images/eye.webp',
    title: 'Evil Eye & Nazar Remedies',
    subtitle: 'Hanuman Yantra & Raksha Sutra',
    category: 'Nazar Shield',
    serviceId: 'evil-eye-protection'
  },
  {
    id: 'm9',
    img: '/images/family.webp',
    title: 'Family & Children’s Harmony',
    subtitle: 'Santana Gopala & Saraswati Prayers',
    category: 'Family Peace',
    serviceId: 'family-child-problems'
  },
  {
    id: 'm10',
    img: '/images/wellness.webp',
    title: 'Wellness & Peace of Mind',
    subtitle: 'Ayur-Jyotish & Healing Mantras',
    category: 'Wellbeing',
    serviceId: 'health-wellness'
  },
  {
    id: 'm11',
    img: '/images/court.webp',
    title: 'Legal & Court Case Guidance',
    subtitle: 'Baglamukhi Puja & Court Dates',
    category: 'Legal Matters',
    serviceId: 'court-case-problems'
  },
  {
    id: 'm12',
    img: '/images/home.webp',
    title: 'Property & Real Estate',
    subtitle: 'Vastu & Bhumi Puja Remedies',
    category: 'Vastu',
    serviceId: 'property-land-disputes'
  },
  {
    id: 'm13',
    img: '/images/shiva-meditating-rishikesh.webp',
    title: 'Meditation & Inner Calm',
    subtitle: 'Gently Clearing Old Karma',
    category: 'Spiritual Calm',
    serviceId: 'health-wellness'
  },
  {
    id: 'm14',
    img: '/images/astrology-chart.webp',
    title: 'Dasha & Transit Forecast',
    subtitle: 'Mahadasha & Sade Sati Timing',
    category: 'Planetary Periods',
    serviceId: 'horoscope-reading'
  },
  {
    id: 'm15',
    img: '/images/moon-phases.webp',
    title: 'Psychic & Intuitive Reading',
    subtitle: 'Quick Answers to Urgent Questions',
    category: 'Psychic',
    serviceId: 'psychic-reading'
  },
  {
    id: 'm16',
    img: '/images/tarot.webp',
    title: 'Tarot Card Reading',
    subtitle: 'Tarot Read With Your Birth Chart',
    category: 'Tarot',
    serviceId: 'tarot-reading'
  },
  {
    id: 'm17',
    img: '/images/candles.webp',
    title: 'Love Spells & Sacred Rituals',
    subtitle: 'Positive Rituals That Respect Free Will',
    category: 'Love Spells',
    serviceId: 'love-spells'
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
  review: string
  tag: string
}

// 8 Illustrative Client Journeys (Example stories based on common consultations; names and details changed)
const clientReviews: ClientReview[] = [
  {
    id: 'r1',
    name: 'Rohan K.',
    city: 'Artesia & Cerritos',
    state: 'California',
    service: 'Love Reunion After a Breakup',
    serviceId: 'get-ex-love-back',
    img: '/images/client-1.webp',
    tag: 'Example Journey • Southern California',
    review: 'My fiancée called off our engagement and stopped answering for almost six months. Other astrologers I spoke with promised she would be back within days. Panditji was different. He explained that her Venus was under a Rahu transit, gave me a 28-day prayer routine and asked me to stay patient. Near the end of that cycle she sent a message asking to meet. We talked calmly for the first time in months and are slowly rebuilding.'
  },
  {
    id: 'r2',
    name: 'Divya & Nikhil R.',
    city: 'Fremont & Milpitas',
    state: 'California',
    service: 'Kundali Matching & Family Approval',
    serviceId: 'marriage-compatibility',
    img: '/images/client-2.webp',
    tag: 'Example Journey • Bay Area',
    review: 'Our Kundali match came back with 15 Gunas and a Nadi Dosha, and my mother was firmly against the wedding. Panditji went through the Navamsha charts with both families on a video call and showed how Jupiter softened the concerns. He performed a shanti puja and picked a Muhurat that worked for relatives in India and in California. The wedding went ahead peacefully, with both sides there.'
  },
  {
    id: 'r3',
    name: 'Siddharth A.',
    city: 'Santa Clara & Cupertino',
    state: 'California',
    service: 'Career Timing in Tech',
    serviceId: 'career-business',
    img: '/images/client-3.webp',
    tag: 'Example Journey • Silicon Valley',
    review: 'I work in tech and was never sure about astrology, but after a layoff, a stalled promotion and a startup idea going nowhere, I wanted another perspective. Panditji read my 10th house, explained that Sade Sati was at its peak for me, and gave me a strict morning Surya routine plus a gemstone suggestion. A few months later a reorganization opened up the role I had been waiting for.'
  },
  {
    id: 'r4',
    name: 'Gurpreet & Simran B.',
    city: 'Bakersfield',
    state: 'California',
    service: 'Family Peace Across Generations',
    serviceId: 'family-child-problems',
    img: '/images/client-4.webp',
    tag: 'Example Journey • Central Valley',
    review: 'Arguments between my wife and my parents had made our home exhausting. Everyone was on edge all the time. Panditji visited, pointed out problems in the north-east of the house, and performed a Navagraha Shanti. Within a few weeks the tension eased. My mother and my wife now cook together on weekends, something I never thought I would see.'
  },
  {
    id: 'r5',
    name: 'Manoj T.',
    city: 'Irvine & Anaheim',
    state: 'California',
    service: 'Business Cash-Flow Relief',
    serviceId: 'financial-problems',
    img: '/images/client-5.webp',
    tag: 'Example Journey • Orange County',
    review: 'Fair warning: Panditji is busy, and it took me almost a week to get a phone appointment. His remedies also take commitment. I chanted before sunrise for 41 days, which was not easy with my commute. But his reading of my stuck commercial property sale was spot on. The escrow problem that had frozen my money for more than a year cleared in the very month he named.'
  },
  {
    id: 'r6',
    name: 'Lavanya & Prakash N.',
    city: 'San Diego & Carlsbad',
    state: 'California',
    service: 'Marriage Reconciliation',
    serviceId: 'marriage-compatibility',
    img: '/images/client-6.webp',
    tag: 'Example Journey • San Diego',
    review: 'We were weeks away from filing for divorce after two hard years. A friend insisted we see Panditji first. He looked at both our charts and our palms and told us neither of us was to blame; we were simply in clashing Saturn and Mars periods. His Venus remedies and honest advice gave us the breathing room we needed. It took real effort, but we are still together and happier.'
  },
  {
    id: 'r7',
    name: 'Ajay M.',
    city: 'Henderson & Las Vegas',
    state: 'Nevada',
    service: 'Business Lawsuit Support',
    serviceId: 'court-case-problems',
    img: '/images/client-7.webp',
    tag: 'Example Journey • Las Vegas',
    review: 'I had spent tens of thousands of dollars on attorneys fighting a partnership lawsuit built on false claims. Panditji’s Baglamukhi yantra and his advice on hearing dates kept me steady through some very stressful depositions. It took longer than I hoped, but the other side eventually offered a settlement on fair terms. His read on their weak points was remarkably accurate.'
  },
  {
    id: 'r8',
    name: 'Sunita G.',
    city: 'Hollywood & Burbank',
    state: 'California',
    service: 'Home Cleansing & Protection',
    serviceId: 'black-magic-removal',
    img: '/images/client-8.webp',
    tag: 'Example Journey • Los Angeles',
    review: 'After a trip abroad, our home felt cold and heavy. My daughter could not sleep, and our catering business lost two big contracts for no clear reason. Panditji sensed strong envy directed at our family, performed a Sudarshana protection homa and tied protective threads for each of us. Within a few days the house felt light again, and the rest of the year was calm.'
  }
]

interface HomeFaq {
  question: string
  answer: string
}

// 8 Core Practical Client FAQs for the Homepage Accordion
const homeFaqs: HomeFaq[] = [
  {
    question: 'I don’t know my exact birth time. Can I still get a reading?',
    answer: 'Yes. Many people have no exact time on record, especially for a partner or an older relative. Pandith Vikram can cast a Prashna chart for the moment you ask your question and combine it with palm and face reading. Together these give reliable insight even without a birth certificate.'
  },
  {
    question: 'Do you offer phone and video consultations?',
    answer: 'Yes. Along with in-person sessions at the Hollywood Boulevard office, Pandith Vikram holds daily phone, WhatsApp and video readings for clients throughout California, from San Diego to Sacramento, and for those living in other states. In Vedic astrology the chart belongs to the person, not the place, so remote readings are just as detailed.'
  },
  {
    question: 'Are the remedies safe? Could they backfire?',
    answer: 'They are safe. Pandith Vikram uses only Sattvic remedies drawn from the Vedas and the Brihat Parashara Hora Shastra: fire rituals (homas), mantras, consecrated yantras and natural gemstones, offered to benevolent deities such as Lakshmi, Shiva, Jupiter and Durga. There is no black magic and nothing that could harm you or anyone else.'
  },
  {
    question: 'How long before I notice a difference?',
    answer: 'Remedies follow natural cycles called a Mandala, usually 21 to 41 days. Many people feel calmer within the first few days. Outward changes, such as a partner reaching out, a case settling or a loan being approved, tend to unfold gradually as the planetary pressure eases. You will always get an honest timeline, never a promise of overnight miracles.'
  },
  {
    question: 'Will my personal information be kept private?',
    answer: 'Completely. Whether you work in entertainment or tech, run a family business, or are going through a private heartbreak, your birth details and everything you share stay confidential. Nothing is passed on to family members, entered into outside databases or published.'
  },
  {
    question: 'How do you approach broken relationships and marriages?',
    answer: 'Instead of general advice, Pandith Vikram looks for the specific cause in the chart, such as Venus afflicted by Rahu, a strong Manglik influence on the 7th or 8th house, or outside interference. He then recommends Venus pujas, devotional mantras and calming remedies that ease pride, clear up misunderstandings and help genuine affection return.'
  },
  {
    question: 'What happens during a consultation?',
    answer: 'First, Pandith Vikram listens to what is happening in your life, without judgment. He then studies your birth chart or a Prashna chart, explains which planetary periods are active and why the problem has appeared, and finishes with clear guidance and simple, personal remedies you can start right away.'
  },
  {
    question: 'Do you offer psychic and tarot readings as well as astrology?',
    answer: 'Yes. Alongside Vedic birth chart readings, Pandith Vikram offers psychic readings for urgent questions and tarot card readings for a clear picture of the present moment. Both are checked against your chart, so you get the insight of the cards or of intuition together with the timing of the planets.'
  },
  {
    question: 'Will a love spell force someone to love me?',
    answer: 'No. Pandith Vikram’s love spells are positive, Sattvic rituals that respect free will. They work on the planetary blocks in your own chart, strengthen Venus and your natural attraction, and support a bond where real feelings already exist. He never performs spells meant to control another person.'
  },
  {
    question: 'What should I have ready before my session?',
    answer: 'The day you were born, the city you were born in, and the time if you know it. If your question involves a partner, spouse or business associate, their details or a clear photo of their face and palms will help. Most of all, write down the questions that matter most to you.'
  }
]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [activeModal, setActiveModal] = useState<'question' | 'booking' | 'privacy' | 'terms' | 'disclaimer' | null>(null)
  // Helper to resolve current route (Clean URL /services/<id>, /locations/<slug>, /<slug>, /book-reading, root /<id>, or legacy #<id>) and 404 status
  const parseCurrentUrl = (): {
    serviceId: string | null
    locationSlug: string | null
    notFound: boolean
    isBooking: boolean
  } => {
    if (typeof window === 'undefined') return { serviceId: null, locationSlug: null, notFound: false, isBooking: false }
    const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
    const hash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase()

    // 0. Dedicated Booking & Contact Route: /book-reading, /book-session, /contact, /contact-us, etc.
    if (
      pathname === '/book-reading' ||
      pathname === '/book-session' ||
      pathname === '/book-a-session' ||
      pathname === '/book-appointment' ||
      pathname === '/consultation' ||
      pathname === '/contact' ||
      pathname === '/contact-us' ||
      hash === 'book-reading' ||
      hash === 'book-session' ||
      hash === 'book-a-session' ||
      hash === 'book-appointment' ||
      hash === 'consultation' ||
      hash === 'contact' ||
      hash === 'contact-us'
    ) {
      return { serviceId: null, locationSlug: null, notFound: false, isBooking: true }
    }

    // 1. Check Location Routes: /indian-astrologer-<city> or /locations/indian-astrologer-<city>
    const locMatch = pathname.match(/^\/locations\/([a-z0-9-]+)$/i) || pathname.match(/^\/([a-z0-9-]+)$/i)
    if (locMatch) {
      const candidate = locMatch[1].toLowerCase()
      if (
        candidate === 'book-reading' ||
        candidate === 'book-session' ||
        candidate === 'book-a-session' ||
        candidate === 'book-appointment' ||
        candidate === 'consultation' ||
        candidate === 'contact' ||
        candidate === 'contact-us'
      ) {
        return { serviceId: null, locationSlug: null, notFound: false, isBooking: true }
      }
      if (Object.prototype.hasOwnProperty.call(locationsData, candidate)) {
        return { serviceId: null, locationSlug: candidate, notFound: false, isBooking: false }
      }
    }

    // 2. Check Clean Service Path: /services/<serviceId> or /<serviceId>
    const cleanMatch = pathname.match(/^\/services\/([a-z0-9-]+)$/i) || pathname.match(/^\/([a-z0-9-]+)$/i)
    if (cleanMatch) {
      const candidate = cleanMatch[1].toLowerCase()
      if (Object.prototype.hasOwnProperty.call(detailedServicesData, candidate)) {
        return { serviceId: candidate, locationSlug: null, notFound: false, isBooking: false }
      }
      if (candidate !== 'index.html') {
        return { serviceId: null, locationSlug: null, notFound: true, isBooking: false }
      }
    }

    // 3. Check legacy hash: #<serviceId> or #<locationSlug>
    if (hash && Object.prototype.hasOwnProperty.call(detailedServicesData, hash)) {
      return { serviceId: hash, locationSlug: null, notFound: false, isBooking: false }
    }
    if (hash && Object.prototype.hasOwnProperty.call(locationsData, hash)) {
      return { serviceId: null, locationSlug: hash, notFound: false, isBooking: false }
    }

    // 4. Any unrecognized multi-segment path triggers 404 view
    if (pathname !== '/' && pathname !== '/index.html') {
      return { serviceId: null, locationSlug: null, notFound: true, isBooking: false }
    }

    return { serviceId: null, locationSlug: null, notFound: false, isBooking: false }
  }

  const [activeDetailId, setActiveDetailId] = useState<string | null>(() => parseCurrentUrl().serviceId)
  const [activeLocationSlug, setActiveLocationSlug] = useState<string | null>(() => parseCurrentUrl().locationSlug)
  const [isNotFound, setIsNotFound] = useState<boolean>(() => parseCurrentUrl().notFound)
  const [isBookingPage, setIsBookingPage] = useState<boolean>(() => parseCurrentUrl().isBooking)
  const [bookingInitialService, setBookingInitialService] = useState<string>('')
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Clean URL + History API routing synchronization
  useEffect(() => {
    const syncFromLocation = () => {
      const { serviceId, locationSlug, notFound, isBooking } = parseCurrentUrl()
      setIsNotFound(notFound)
      setActiveDetailId(serviceId)
      setActiveLocationSlug(locationSlug)
      setIsBookingPage(isBooking)
      if (serviceId || locationSlug || notFound || isBooking) {
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
      document.title = 'Page Not Found (404) | Pandith Vikram, Vedic Astrologer in Los Angeles'
      if (canonicalEl) canonicalEl.href = `${baseUrl}/404`
      if (dynamicSchemaEl) dynamicSchemaEl.remove()
      return
    }

    if (isBookingPage) {
      document.title = 'Book a Personal Reading | Pandith Vikram, Indian Vedic Astrologer in Los Angeles'
      if (canonicalEl) canonicalEl.href = `${baseUrl}/book-reading`
      if (metaDescEl) {
        metaDescEl.content = 'Book a private, 100% confidential Vedic astrology reading with Pandith Vikram. In person on Hollywood Blvd, Los Angeles, or via phone and WhatsApp. Call +1 510-371-4626.'
      }
      if (dynamicSchemaEl) dynamicSchemaEl.remove()
      return
    }

    // Dynamic SEO for Location Pages (/indian-astrologer-<city>)
    if (activeLocationSlug && Object.prototype.hasOwnProperty.call(locationsData, activeLocationSlug)) {
      const loc = locationsData[activeLocationSlug]
      const cleanLocUrl = `${baseUrl}/${loc.slug}`
      document.title = loc.metaTitle
      if (canonicalEl) canonicalEl.href = cleanLocUrl
      if (metaDescEl) metaDescEl.content = loc.metaDescription

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
            '@type': 'LocalBusiness',
            '@id': `${cleanLocUrl}#localbusiness`,
            name: `Indian Astrologer Pandith Vikram - ${loc.name}, CA`,
            description: loc.heroDescription,
            url: cleanLocUrl,
            telephone: '+1-510-371-4626',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '7001 Hollywood Blvd',
              addressLocality: 'Los Angeles',
              addressRegion: 'CA',
              postalCode: '90028',
              addressCountry: 'US'
            },
            areaServed: [loc.name, loc.region, 'California']
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'California Locations', item: `${baseUrl}/#usa-locations` },
              { '@type': 'ListItem', position: 3, name: `${loc.name}, CA`, item: cleanLocUrl }
            ]
          }
        ]
      })
      return
    }

    if (activeDetailId && Object.prototype.hasOwnProperty.call(detailedServicesData, activeDetailId)) {
      const srv = detailedServicesData[activeDetailId]
      const cleanServiceUrl = `${baseUrl}/services/${srv.id}`
      document.title = `${srv.title} ${srv.subtitle} | Pandith Vikram, Vedic Astrologer in Los Angeles`
      if (canonicalEl) canonicalEl.href = cleanServiceUrl
      if (metaDescEl) metaDescEl.content = `${srv.desc} Book a private reading with Pandith Vikram on Hollywood Blvd, Los Angeles. Call +1 510-371-4626.`

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
            areaServed: ['Los Angeles', 'California', 'United States']
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
      document.title = 'Indian Astrologer Pandith Vikram | Vedic Astrologer in Los Angeles, California'
      if (canonicalEl) canonicalEl.href = `${baseUrl}/`
      if (metaDescEl) {
        metaDescEl.content =
          'Indian Vedic astrologer Pandith Vikram, 7001 Hollywood Blvd, Los Angeles, CA. 35+ years of horoscope, psychic and tarot readings, love spells, marriage matching, career and family guidance. In person, by phone or video. Call +1 510-371-4626.'
      }
      if (dynamicSchemaEl) dynamicSchemaEl.remove()
    }
  }, [activeDetailId, isNotFound, isBookingPage])

  // Auto-advance slides every 6 seconds when on home page
  useEffect(() => {
    if (activeDetailId || isNotFound || isBookingPage) return
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [activeDetailId, isNotFound, isBookingPage])

  // Auto-slide client reviews automatically every 4 seconds when on home page
  useEffect(() => {
    if (activeDetailId || isNotFound || isBookingPage) return
    const reviewTimer = setInterval(() => {
      setCurrentReviewIndex(prev => (prev + 1) % clientReviews.length)
    }, 4000)
    return () => clearInterval(reviewTimer)
  }, [activeDetailId, isNotFound, isBookingPage])

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

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 280)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    service: 'Love & Relationship Healing',
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

    // Redirect every detail the user entered directly to the client's WhatsApp (+1 510-371-4626)
    const formattedDetails = [
      `*✦ NEW CONSULTATION / READING INQUIRY ✦*`,
      `*Name:* ${formData.name || 'Not provided'}`,
      `*Phone:* ${formData.phone || 'Not provided'}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      formData.dob ? `*Date of Birth:* ${formData.dob}` : null,
      `*Service Required:* ${formData.service || 'Vedic Astrology Consultation'}`,
      formData.question ? `*Inquiry / Details:* ${formData.question}` : null,
      `*Source:* pandith-vikram.vercel.app`
    ].filter(Boolean).join('\n')

    const whatsappUrl = `https://wa.me/15103714626?text=${encodeURIComponent(formattedDetails)}`

    try {
      window.open(whatsappUrl, '_blank')
    } catch {
      window.location.href = whatsappUrl
    }

    setTimeout(() => {
      setFormSubmitted(false)
      setActiveModal(null)
      setFormData({
        name: '',
        phone: '',
        email: '',
        dob: '',
        service: 'Love & Relationship Healing',
        question: '',
      })
    }, 2800)
  }

  // Open dedicated screen for booking
  const navigateToBooking = (initialService?: string) => {
    setIsNotFound(false)
    setActiveDetailId(null)
    setActiveLocationSlug(null)
    setIsBookingPage(true)
    if (initialService) setBookingInitialService(initialService)
    if (typeof window !== 'undefined' && window.history?.pushState) {
      if (window.location.pathname !== '/book-reading') {
        window.history.pushState({ isBooking: true }, '', '/book-reading')
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeBookingPage = (scrollToTop = true) => {
    setIsNotFound(false)
    setIsBookingPage(false)
    setActiveLocationSlug(null)
    if (typeof window !== 'undefined' && window.history?.pushState) {
      if (window.location.pathname !== '/' || window.location.hash) {
        window.history.pushState(null, '', '/')
      }
    }
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Open dedicated screen for any service using clean SEO URL (/services/<serviceId>)
  const openDedicatedService = (serviceId: string) => {
    if (Object.prototype.hasOwnProperty.call(detailedServicesData, serviceId)) {
      setIsNotFound(false)
      setIsBookingPage(false)
      setActiveLocationSlug(null)
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
    setIsBookingPage(false)
    setActiveDetailId(null)
    setActiveLocationSlug(null)
    if (typeof window !== 'undefined' && window.history?.pushState) {
      if (window.location.pathname !== '/' || window.location.hash) {
        window.history.pushState(null, '', '/')
      }
    }
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Open dedicated screen for California city location (/indian-astrologer-<city>)
  const openDedicatedLocation = (slug: string) => {
    if (Object.prototype.hasOwnProperty.call(locationsData, slug)) {
      setIsNotFound(false)
      setIsBookingPage(false)
      setActiveDetailId(null)
      setActiveLocationSlug(slug)
      if (typeof window !== 'undefined' && window.history?.pushState) {
        const targetPath = `/${slug}`
        if (window.location.pathname !== targetPath) {
          window.history.pushState({ locationSlug: slug }, '', targetPath)
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const closeDedicatedLocation = (scrollToTop = true) => {
    setIsNotFound(false)
    setIsBookingPage(false)
    setActiveLocationSlug(null)
    if (typeof window !== 'undefined' && window.history?.pushState) {
      if (window.location.pathname !== '/' || window.location.hash) {
        window.history.pushState(null, '', '/')
      }
    }
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const currentLocation = activeLocationSlug && Object.prototype.hasOwnProperty.call(locationsData, activeLocationSlug)
    ? locationsData[activeLocationSlug]
    : null

  const currentDetailedService = activeDetailId && Object.prototype.hasOwnProperty.call(detailedServicesData, activeDetailId)
    ? detailedServicesData[activeDetailId]
    : null

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans relative">
      {/* 1. TOP UTILITY HEADER (Static Maroon Bar - Prominent Call Helpline & WhatsApp Direct, Zero Scrolling) */}
      <div className="w-full bg-[#8E1612] text-white select-none py-2.5 sm:py-3 border-b border-red-900/80 shadow-xs relative z-50">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-6 flex items-center justify-center gap-3.5 sm:gap-6 text-sm sm:text-base font-roboto whitespace-nowrap">
          {/* Direct Phone Call Helpline */}
          <a
            href="tel:+15103714626"
            className="text-white hover:text-amber-200 font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-none bg-white/10 border border-white/25 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium tracking-wide">Call: <strong className="font-black underline underline-offset-2 text-amber-200 text-xs sm:text-sm">+1 510-371-4626</strong></span>
          </a>

          <span className="text-amber-400/60 font-light text-sm sm:text-base shrink-0">|</span>

          {/* WhatsApp Link without Number */}
          <a
            href="https://wa.me/15103714626"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-200 font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-none bg-emerald-600 border border-emerald-400/50 flex items-center justify-center shrink-0 shadow-xs">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white group-hover:fill-amber-200 transition-colors" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.71 20.28 11.92C20.28 16.46 16.59 20.16 12.04 20.16C10.64 20.16 9.27 19.8 8.08 19.09L7.79 18.92L4.69 19.73L5.52 16.71L5.33 16.41C4.55 15.17 4.14 13.56 4.14 11.91C4.14 7.37 7.83 3.67 12.04 3.67ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.51 13.54 14.67C13.39 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.61 11.78C9.47 11.53 9.59 11.4 9.72 11.27C9.83 11.16 9.97 10.98 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.41C10.43 10.25 10.39 10.1 10.33 9.98C10.27 9.85 9.77 8.63 9.57 8.13C9.37 7.65 9.17 7.71 9.02 7.71C8.88 7.7 8.71 7.7 8.55 7.7C8.38 7.7 8.11 7.76 7.88 8.01C7.65 8.26 7 8.87 7 10.09C7 11.31 7.89 12.49 8.01 12.65C8.14 12.82 9.77 15.32 12.26 16.39C12.85 16.65 13.31 16.8 13.67 16.92C14.26 17.11 14.8 17.08 15.23 17.02C15.71 16.95 16.71 16.42 16.92 15.84C17.12 15.26 17.12 14.77 17.06 14.67C17 14.56 16.82 14.51 16.57 14.39Z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-bold text-emerald-200 group-hover:text-white underline underline-offset-2 tracking-wide">WhatsApp</span>
          </a>
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
              href="#about-los-angeles"
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
                    <span>All 15 Services</span>
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
                      See Every Service ↓
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => openDedicatedService('get-ex-love-back')}
              className="hover:text-[#B91C1C] transition-colors py-1 border-b-2 border-transparent hover:border-[#B91C1C] cursor-pointer whitespace-nowrap"
            >
              Love Reunion
            </button>
            <a
              href="#methodology"
              onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
              className="hover:text-[#B91C1C] transition-colors py-1 border-b-2 border-transparent hover:border-[#B91C1C] whitespace-nowrap"
            >
              Our Approach
            </a>
            <a
              href="#faq"
              onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
              className="hover:text-[#B91C1C] transition-colors py-1 border-b-2 border-transparent hover:border-[#B91C1C] whitespace-nowrap"
            >
              FAQs
            </a>
            <a
              href="#usa-locations"
              onClick={() => {
                if (activeDetailId || activeLocationSlug || isBookingPage || isNotFound) {
                  closeDedicatedService(false)
                  closeDedicatedLocation(false)
                  closeBookingPage(false)
                }
              }}
              className="hover:text-[#B91C1C] transition-colors py-1 border-b-2 border-transparent hover:border-[#B91C1C] whitespace-nowrap"
            >
              Locations
            </a>
            <button
              onClick={() => navigateToBooking()}
              className="hover:text-[#B91C1C] transition-colors py-1 border-b-2 border-transparent hover:border-[#B91C1C] whitespace-nowrap cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          {/* Right Action Buttons: Helpline Pill + Consultation Button (Always strictly on ONE Line) */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0 whitespace-nowrap">
            <a
              href="tel:+15103714626"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 px-3 xl:px-3.5 py-1.5 xl:py-2 rounded-none transition-all flex items-center gap-2 group whitespace-nowrap shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
              <div className="text-left leading-none font-roboto whitespace-nowrap">
                <span className="text-[9px] uppercase font-bold text-slate-500 block leading-none whitespace-nowrap">Call Today</span>
                <span className="text-xs font-black text-slate-900 group-hover:text-[#B91C1C] leading-tight font-roboto whitespace-nowrap">+1 510-371-4626</span>
              </div>
            </a>

            <button
              onClick={() => navigateToBooking()}
              className="bg-[#B91C1C] hover:bg-[#991B1B] text-white px-3.5 xl:px-5 py-2.5 rounded-none font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>✦</span>
              <span className="whitespace-nowrap">BOOK A READING</span>
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
              href="#about-los-angeles"
              onClick={() => { if (activeDetailId || isBookingPage) closeDedicatedService(false); setMobileMenuOpen(false); }}
              className="block py-2 text-slate-800 hover:text-[#B91C1C] font-semibold border-b border-slate-100"
            >
              About Us
            </a>
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 py-2">
                <a
                  href="#services"
                  onClick={() => { if (activeDetailId || isBookingPage) closeDedicatedService(false); setMobileMenuOpen(false); }}
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
                  {mobileServicesOpen ? '▲ Close' : '▼ (All 15)'}
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
              Love Reunion
            </button>
            <a
              href="#methodology"
              onClick={() => { if (activeDetailId || isBookingPage) closeDedicatedService(false); setMobileMenuOpen(false); }}
              className="block py-2 text-slate-800 hover:text-[#B91C1C] font-semibold border-b border-slate-100"
            >
              Our Approach & Promises
            </a>
            <a
              href="#faq"
              onClick={() => { if (activeDetailId || isBookingPage) closeDedicatedService(false); setMobileMenuOpen(false); }}
              className="block py-2 text-slate-800 hover:text-[#B91C1C] font-semibold border-b border-slate-100"
            >
              Common Questions
            </a>
            <a
              href="#usa-locations"
              onClick={() => {
                if (activeDetailId || activeLocationSlug || isBookingPage || isNotFound) {
                  closeDedicatedService(false)
                  closeDedicatedLocation(false)
                  closeBookingPage(false)
                }
                setMobileMenuOpen(false)
              }}
              className="block py-2 text-slate-800 hover:text-[#B91C1C] font-semibold border-b border-slate-100"
            >
              Service Locations
            </a>
            <button
              onClick={() => { navigateToBooking(); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-800 hover:text-[#B91C1C] font-semibold cursor-pointer"
            >
              Contact Us
            </button>

            {/* Mobile Actions: Call & Book Consultation */}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href="tel:+15103714626"
                className="text-center bg-slate-100 text-slate-900 border border-slate-300 py-2.5 rounded-none font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 text-[#B91C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
              </a>
              <button
                onClick={() => { navigateToBooking(); setMobileMenuOpen(false); }}
                className="text-center bg-[#B91C1C] text-white py-2.5 rounded-none font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                ✦ Book a Reading
              </button>
            </div>
          </div>
        )}
      </header>

      {/* DEDICATED SCREEN ROUTING: Render 404 NotFoundView, Dedicated BookingPageView, Dedicated Location Page, Full In-Depth Service Screen, or Home View */}
      {isNotFound ? (
        <NotFoundView
          onGoHome={() => {
            closeDedicatedService(false)
            closeDedicatedLocation(false)
            closeBookingPage(true)
          }}
          onSelectService={(serviceId) => openDedicatedService(serviceId)}
          onBookNow={() => navigateToBooking()}
        />
      ) : isBookingPage ? (
        <BookingPageView
          onBack={() => closeBookingPage(true)}
          initialService={bookingInitialService}
        />
      ) : currentLocation ? (
        <LocationDetailView
          location={currentLocation}
          onBack={() => closeDedicatedLocation(true)}
          onBookNow={(label) => navigateToBooking(label || `Location: ${currentLocation.name}`)}
          onSelectLocation={openDedicatedLocation}
          onSelectService={openDedicatedService}
        />
      ) : currentDetailedService ? (
        <ServiceDetailView
          service={currentDetailedService}
          onBack={closeDedicatedService}
          onBookNow={() => navigateToBooking(`${currentDetailedService.title} ${currentDetailedService.subtitle}`)}
          onSelectService={openDedicatedService}
        />
      ) : (
        <>
          {/* 3. HERO SLIDER SECTION (Classic Bold Typography, Full Rotating Vedic Surya Sun & Zodiac Wheel on Mobile & Desktop) */}
          <section id="home" className="relative w-full min-h-[820px] sm:min-h-[860px] md:min-h-[680px] lg:min-h-[720px] xl:min-h-[750px] bg-black overflow-hidden select-none flex items-center">
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

                  {/* Content Container - Always Front, Center & Fully Visible on Mobile & Desktop */}
                  <div className="absolute inset-0 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 sm:gap-6 md:gap-8 z-20 pt-5 pb-12 md:py-8">
                    {/* Left Text Overlay - Oswald + Manrope Typography Matching Reference */}
                    <div className="w-full md:w-auto max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4 md:space-y-5 z-20">
                      {/* Authority Kicker Badge (Manrope Bold) */}
                      <div className="inline-block bg-[#9B120E] text-white border border-[#E5A000] px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-manrope font-bold uppercase tracking-[0.08em] shadow-md rounded-none">
                        {slide.classicKicker}
                      </div>

                      {/* Display Headings (Strictly ONE H1 on the active slide; H2 on inactive slides for Proper H1/H2 SEO Structure) */}
                      <div className="space-y-0.5">
                        {isActive ? (
                          <h1 className="font-oswald text-[34px] sm:text-6xl lg:text-[64px] xl:text-[70px] font-bold text-white uppercase tracking-[-0.01em] leading-[0.98]">
                            {slide.line1}
                          </h1>
                        ) : (
                          <h2 className="font-oswald text-[34px] sm:text-6xl lg:text-[64px] xl:text-[70px] font-bold text-white uppercase tracking-[-0.01em] leading-[0.98]">
                            {slide.line1}
                          </h2>
                        )}
                        <div className="font-oswald text-[34px] sm:text-6xl lg:text-[64px] xl:text-[70px] font-bold text-[#F5B800] uppercase tracking-[-0.01em] leading-[0.98]">
                          {slide.line2}
                        </div>
                      </div>

                      {/* Subtitle with Gold Left Accent Bar (Manrope Regular) */}
                      <p className="font-manrope text-xs sm:text-base lg:text-[17px] text-white/95 max-w-2xl leading-[1.55] sm:leading-[1.6] font-normal border-l-[3px] border-[#F5B800] pl-3.5 sm:pl-4 py-0.5">
                        {slide.subtitle}
                      </p>

                      {/* Trust Pills (Manrope Bold, Gold Bordered) */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5 sm:pt-1 text-[10px] sm:text-[11px] font-manrope font-bold uppercase tracking-[0.06em] text-[#F5B800]">
                        <button
                          type="button"
                          onClick={() => navigateToBooking()}
                          className="bg-black/65 hover:bg-black/85 border border-[#E5A000]/80 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-[4px] transition-colors cursor-pointer"
                        >
                          ✦ STRICTLY PRIVATE
                        </button>
                        <button
                          type="button"
                          onClick={() => navigateToBooking()}
                          className="bg-black/65 hover:bg-black/85 border border-[#E5A000]/80 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-[4px] transition-colors cursor-pointer"
                        >
                          ✦ 35+ YEARS OF PRACTICE
                        </button>
                        <button
                          type="button"
                          onClick={() => navigateToBooking()}
                          className="bg-black/65 hover:bg-black/85 border border-[#E5A000]/80 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-[4px] transition-colors cursor-pointer"
                        >
                          ✦ 45,000+ CLIENTS GUIDED
                        </button>
                      </div>
                    </div>

                    {/* Full Rotating Background-Less Vedic Surya Sun & Zodiac Wheel — Visible in Full on Mobile & Desktop */}
                    {slide.hasWheel && (
                      <div className="flex items-center justify-center shrink-0 z-20 mx-auto md:mx-0 md:pr-4 lg:pr-8">
                        <ZodiacWheel className="w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px] xl:w-[580px] xl:h-[580px]" />
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
              <span>✦</span> THE NINE PLANETS OF VEDIC ASTROLOGY <span>✦</span>
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
                  ✦ Explore Our Vedic Remedies
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 font-roboto">
                Tap any card to open the full service page
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
                        <span>Learn More</span>
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
                  <h4 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">Protective Remedies</h4>
                  <p className="text-[11px] text-slate-300 mt-1 font-roboto">Kavach, Yantra & Mantra</p>
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
                  <h4 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">Careful Calculations</h4>
                  <p className="text-[11px] text-slate-300 mt-1 font-roboto">Hand-Checked Birth Charts</p>
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
                  <h4 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">Complete Privacy</h4>
                  <p className="text-[11px] text-slate-300 mt-1 font-roboto">Your Story Stays With Us</p>
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
                  <h4 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">Seasoned Jyotishi</h4>
                  <p className="text-[11px] text-slate-300 mt-1 font-roboto">35+ Years of Practice</p>
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
                      {/* Los Angeles Coordinate Diamond Star */}
                      <polygon points="32,20 33.5,23 36,23.5 33.5,24.5 32,27 30.5,24.5 28,23.5 30.5,23" fill="#FFF8B0" />
                      <circle cx="32" cy="23.5" r="1" fill="#FFD700" />
                      {/* Global Orbit Satellites */}
                      <circle cx="12" cy="38" r="2" fill="url(#globeGoldLogo)" />
                      <circle cx="52" cy="25.5" r="2.2" fill="url(#globeGoldLogo)" />
                      <circle cx="43" cy="36" r="1.5" fill="#FFEAA7" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-amber-300 group-hover:text-amber-200 transition-colors">Trusted in California</h4>
                  <p className="text-[11px] text-slate-300 mt-1 font-roboto">LA, Bay Area & Beyond</p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. LOS ANGELES ASTROLOGER SECTION (Placed Right Below Hero & Trust Badges) */}
          <section id="about-los-angeles" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FBFBFC] border-b border-slate-200 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Prestigious Alternative Headings & Authentic Vedic Narrative */}
              <div className="lg:col-span-7 space-y-8 font-roboto text-slate-700">
                {/* Main Heading Block with Prestigious Alternative Headline */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 bg-[#D61B14]/10 text-[#D61B14] border border-[#D61B14]/30 px-3 py-1 text-xs font-bold uppercase tracking-widest font-roboto">
                    <span>✦</span> AUTHENTIC VEDIC ASTROLOGY ON HOLLYWOOD BOULEVARD <span>✦</span>
                  </div>
                  <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 uppercase tracking-tight">
                    Indian Vedic Astrologer in Los Angeles, California – <span className="text-[#D61B14]">Pandith Vikram</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#D61B14] to-amber-500"></div>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    When life suddenly turns upside down, through a breakup, a marriage under strain, a job that stalls or a family that stops talking, it helps to have someone steady to turn to. From his office on Hollywood Boulevard, Pandith Vikram brings more than 35 years of traditional Jyotish practice to individuals and families across Los Angeles, Southern California and the rest of the Golden State. He reads each chart by hand, using Parashara methods, the Navamsha (D9) chart and Prashna Shastra to find what is really driving the problem, then recommends gentle Sattvic remedies that help restore balance, confidence and peace of mind.
                  </p>
                </div>

                {/* Sub-Block 1: Life Crossroads */}
                <div className="space-y-3">
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold text-slate-900 uppercase flex items-center gap-2">
                    <span className="text-[#D61B14]">✦</span>
                    <span>Clear Answers When Life Reaches a Crossroads</span>
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    Periods such as Sade Sati, a shift in the Rahu–Ketu axis or pressure on the 7th house can make ordinary life feel unusually hard. Your Janam Kundali does not seal your fate. It shows why a difficult chapter has arrived and, just as importantly, when it is likely to ease. With that knowledge and the right remedies, you can move through it with a clear head instead of fear.
                  </p>
                </div>

                {/* Sub-Block 2: Spiritual Healing & Protection */}
                <div className="space-y-3">
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold text-slate-900 uppercase flex items-center gap-2">
                    <span className="text-[#D61B14]">✦</span>
                    <span>Spiritual Healing & Protection for Southern California Families</span>
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    Constant tension at home, setbacks that strike right before a breakthrough, or a tiredness that never seems to lift can point to an energetic imbalance or the weight of other people’s envy (Nazar). Pandith Vikram offers traditional Vedic cleansing through Sudarshana homas and protective kavach. Every remedy is devotional and non-invasive, and focused on bringing light and calm back into your home.
                  </p>
                </div>

                {/* Sub-Block 3: Horoscope Readings Across California */}
                <div className="space-y-3">
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold text-slate-900 uppercase flex items-center gap-2">
                    <span className="text-[#D61B14]">✦</span>
                    <span>Horoscope Readings from Hollywood to the Bay Area</span>
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    Clients visit from Hollywood, Artesia, Cerritos, Irvine and the San Fernando Valley, and call in from San Jose, Fremont, San Diego, Sacramento and beyond. They come for honest, compassionate readings: careful Ganita calculations to time big decisions, weigh up business partnerships and address doshas such as Manglik, Kaal Sarp or Pitra Dosha that can affect marriage and happiness.
                  </p>
                </div>

                {/* Sub-Block 4: Prashna & Palmistry */}
                <div className="space-y-3">
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold text-slate-900 uppercase flex items-center gap-2">
                    <span className="text-[#D61B14]">✦</span>
                    <span>Psychic, Tarot & Prashna Readings for Urgent Questions</span>
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    Some questions cannot wait for a full chart study. When you need to know “Is this relationship worth saving?” or “Should I accept this offer?”, Pandith Vikram combines intuitive psychic insight with a Prashna chart cast for the moment you ask, and can add a tarot spread or palm reading (Hasta Rekha). The result is a quick, honest answer you can act on.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href="tel:+15103714626"
                    className="bg-[#D61B14] hover:bg-[#b5140e] text-white font-roboto font-bold px-7 py-3.5 rounded-none text-xs uppercase tracking-wider transition-colors shadow flex items-center gap-2 cursor-pointer"
                  >
                    <span>Call Pandith Vikram Now</span>
                    <span>→</span>
                  </a>
                  <button
                    onClick={() => navigateToBooking()}
                    className="bg-[#FFD700] hover:bg-amber-300 text-slate-950 font-roboto font-bold px-7 py-3.5 rounded-none text-xs uppercase tracking-wider transition-colors shadow cursor-pointer"
                  >
                    Schedule a Private Reading
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
                        alt="Painting of Lord Shiva offering blessings, representing peace and protection, Pandith Vikram Los Angeles"
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
                        ✦ BLESSINGS FOR PEACE & PROTECTION ✦
                      </span>
                      <p className="font-oswald text-base sm:text-lg font-bold uppercase text-white drop-shadow">
                        Seek Lord Shiva’s Grace for Planetary Peace
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
                        alt="Couple reconciling after a breakup, love reunion guidance by Pandith Vikram in Los Angeles"
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
                        MISSING <br />
                        <span className="text-[#D61B14]">YOUR LOVE?</span>
                      </p>
                    </div>
                  </div>

                  {/* Sharp Square Phone Call Strip */}
                  <a
                    href="tel:+15103714626"
                    className="block bg-[#D61B14] hover:bg-[#b5140e] text-white py-3.5 px-4 text-center transition-colors cursor-pointer rounded-none border-t border-red-700"
                  >
                    <span className="font-oswald text-base sm:text-lg lg:text-xl font-black uppercase tracking-wider flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
                      </svg>
                      <span>CALL NOW: +1 510-371-4626</span>
                    </span>
                  </a>
                </div>

                {/* 3. Los Angeles Office Information Card */}
                <div className="bg-white p-6 border border-slate-200 shadow-sm rounded-none space-y-3 font-roboto">
                  <h4 className="font-oswald text-lg font-bold text-slate-900 uppercase">
                    Visit Our Los Angeles Office
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=7001+Hollywood+Blvd,+Los+Angeles,+CA+90028"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-slate-900 hover:text-[#D61B14] transition-colors inline-flex items-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5 text-[#D61B14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>7001 Hollywood Blvd, Los Angeles, CA 90028, United States</span>
                    </a>
                    <br />
                    In-person readings by appointment, plus private phone, WhatsApp and video sessions for clients anywhere in California and beyond.
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#D61B14]">
                    <span>Open Daily: 8 AM – 10 PM (PT)</span>
                    <span>Strictly Confidential</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. SPEAK DIRECTLY BANNER (Cosmic Crimson & Gold) */}
          <section className="relative bg-[#D61B14] text-white py-14 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-inner">
            <div className="relative max-w-5xl mx-auto text-center space-y-4">
              <p className="text-amber-200 text-xs sm:text-sm font-bold tracking-widest uppercase font-roboto">
                ✦ PRIVATE GUIDANCE, ONE PHONE CALL AWAY ✦
              </p>

              <h2 className="font-oswald text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
                Talk to Pandith Vikram Today
              </h2>

              <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto font-roboto">
                Whether you live in Los Angeles or call from another state, tell him what you are going through in complete confidence and come away with clear guidance and remedies chosen for your chart.
              </p>

              <div className="pt-2">
                <p className="text-xs font-semibold text-amber-200 tracking-wider uppercase mb-1 font-roboto">
                  Open 7 Days a Week • 8 AM – 10 PM Pacific Time
                </p>
                <a
                  href="tel:+15103714626"
                  className="inline-block font-oswald text-3xl sm:text-5xl font-bold text-[#FFD700] hover:text-white transition-colors tracking-wider"
                >
                  +1 510-371-4626
                </a>
              </div>

              <div className="pt-3">
                <a
                  href="tel:+15103714626"
                  className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-amber-300 text-slate-950 font-bold px-8 py-3.5 rounded-none text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl active:scale-95 cursor-pointer font-roboto"
                >
                  <svg className="w-4 h-4 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
                  </svg>
                  <span>Call to Book Your Reading</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </section>

          {/* 7. OUR ASTROLOGY SERVICES CATEGORIES (REORDERED DOWN: Placed Below Los Angeles Section, Full Astronomical Observatory Atmosphere) */}
          <section id="services" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F2A] text-white relative overflow-hidden cosmic-stars-bg border-b border-slate-800">
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <div className="inline-block bg-amber-500/20 text-[#FFD700] border border-[#FFD700]/40 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest font-roboto mb-3 rounded-none">
                  ✦ GUIDANCE FOR EVERY AREA OF LIFE ✦
                </div>
                <h2 className="font-oswald text-3xl sm:text-5xl font-bold text-white tracking-wide uppercase">
                  Vedic Astrology Services in <span className="text-[#FFD700]">Los Angeles</span>
                </h2>
                <div className="w-24 h-1 bg-[#FFD700] mx-auto my-3.5"></div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-roboto">
                  Fifteen focused consultations for families across Los Angeles and California, from birth charts and Kundali matching to psychic readings, tarot and positive love spells, each backed by traditional pujas, mantras and remedies. Choose a topic and tap “Read More” to see how Pandith Vikram can help.
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
                          alt={`${item.title} ${item.subtitle} - Vedic astrology service with Pandith Vikram, Los Angeles`}
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
                  Meet <span className="text-[#D61B14]">Pandith Vikram</span>
                </h2>
                <div className="w-20 h-1 bg-amber-500"></div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-roboto">
                  Pandith Vikram comes from seven generations of Vedic scholars and began learning classical Jyotish as a child. For more than 35 years he has helped people through some of the hardest moments of their lives, from separations and family rifts to business losses and long, unexplained runs of bad luck. Today he serves the Indian community and clients of every background across Los Angeles from his office on Hollywood Boulevard.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-roboto">
                  He does not rely on generic software printouts or frighten clients into expensive rituals. Each chart is calculated and checked by hand, then compared with your Navamsha and, where useful, a Prashna chart. Every remedy is Sattvic, safe and kept completely private.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => navigateToBooking()}
                    className="bg-[#D61B14] hover:bg-[#b5140e] text-white font-roboto font-bold px-7 py-3.5 rounded-none text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Book a Session With Pandith Vikram</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-none border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#8E1612] hover:shadow-md transition-all">
                  <div className="font-oswald text-4xl sm:text-5xl font-black text-[#8E1612] tracking-tight">
                    <AnimatedCounter target={35} suffix="+" duration={1800} />
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-xs sm:text-sm text-slate-800 font-bold font-roboto">Years Reading Charts</p>
                    <p className="text-[11px] text-slate-500 font-roboto mt-0.5">Ancestral Jyotish Mastery</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-none border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#D97706] hover:shadow-md transition-all">
                  <div className="font-oswald text-4xl sm:text-5xl font-black text-[#D97706] tracking-tight">
                    <AnimatedCounter target={45} suffix="k+" duration={2000} />
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-xs sm:text-sm text-slate-800 font-bold font-roboto">Clients Guided</p>
                    <p className="text-[11px] text-slate-500 font-roboto mt-0.5">California & Across the World</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-none border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-600 hover:shadow-md transition-all">
                  <div className="font-oswald text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">
                    <AnimatedCounter target={100} suffix="%" duration={2200} />
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-xs sm:text-sm text-slate-800 font-bold font-roboto">Private & Confidential</p>
                    <p className="text-[11px] text-slate-500 font-roboto mt-0.5">Strict Discretion Guaranteed</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-none border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-700 hover:shadow-md transition-all">
                  <div className="font-oswald text-4xl sm:text-5xl font-black text-blue-700 tracking-tight">
                    <AnimatedCounter target={100} suffix="%" duration={2200} />
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-xs sm:text-sm text-slate-800 font-bold font-roboto uppercase">Authentic Vedic</p>
                    <p className="text-[11px] text-slate-500 font-roboto mt-0.5">Sattvic Pujas, Mantras & Remedies</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8B. VEDIC METHODOLOGY & 5-PILLAR ETHICAL CODE (Authentic Classical Shastras & Sacred Principles) */}
          <section id="methodology" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#060B28] text-white border-y-4 border-[#FFD700] relative overflow-hidden">
            {/* Subtle sacred geometry background glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#8E1612]/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 space-y-16">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-block bg-[#8E1612] text-[#FFD700] border border-[#FFD700]/40 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest font-roboto">
                  ✦ TRADITIONAL TRAINING • CAREFUL, HONEST PRACTICE ✦
                </div>
                <h2 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                  How Pandith Vikram Works & <span className="text-[#FFD700]">What He Promises</span>
                </h2>
                <div className="w-24 h-1 bg-[#FFD700] mx-auto my-3"></div>
                <p className="text-slate-300 text-sm sm:text-base font-roboto leading-relaxed">
                  A look at the classical methods behind every reading, and the principles that protect every client who calls.
                </p>
              </div>

              {/* Part 1: The Tri-Fold Diagnostic System (The Vedic Triad) */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-amber-400/20 pb-3">
                  <span className="text-[#FFD700] text-lg font-bold font-oswald tracking-wider uppercase">PART 1</span>
                  <span className="text-slate-400">|</span>
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                    Three Ways He Reads Your Situation
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="bg-[#0C1236] border-2 border-amber-400/30 hover:border-[#FFD700] p-6 rounded-none transition-all duration-300 group shadow-lg flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#8E1612] text-[#FFD700] flex items-center justify-center font-oswald font-black text-xl border border-amber-400/40">
                        01
                      </div>
                      <div>
                        <h4 className="font-oswald text-xl font-bold uppercase tracking-wide text-[#FFD700] group-hover:text-amber-300 transition-colors">
                          Birth Chart & Navamsha Study
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-200/80 font-roboto mt-1">
                          Hand-Calculated Natal Chart
                        </p>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm font-roboto leading-relaxed">
                        A careful study of all 12 houses, exact planetary degrees and your Vimshottari Mahadasha and Antardasha periods. It reveals why a relationship has cooled, why business keeps stalling and where your vulnerabilities lie.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-700/60 mt-4 text-[11px] text-amber-300 font-semibold font-roboto flex items-center gap-1.5">
                      <span>✓ Shows which period you are in and what comes next</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#0C1236] border-2 border-amber-400/30 hover:border-[#FFD700] p-6 rounded-none transition-all duration-300 group shadow-lg flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#8E1612] text-[#FFD700] flex items-center justify-center font-oswald font-black text-xl border border-amber-400/40">
                        02
                      </div>
                      <div>
                        <h4 className="font-oswald text-xl font-bold uppercase tracking-wide text-[#FFD700] group-hover:text-amber-300 transition-colors">
                          Vedic Palm Reading
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-200/80 font-roboto mt-1">
                          Hasta Rekha Shastra
                        </p>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm font-roboto leading-relaxed">
                        When a birth time is missing or a partner’s details are unknown, the lines, mounts and markings of both hands help confirm planetary strength, marriage timing and major life events.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-700/60 mt-4 text-[11px] text-amber-300 font-semibold font-roboto flex items-center gap-1.5">
                      <span>✓ Works even without an exact birth time</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#0C1236] border-2 border-amber-400/30 hover:border-[#FFD700] p-6 rounded-none transition-all duration-300 group shadow-lg flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-[#8E1612] text-[#FFD700] flex items-center justify-center font-oswald font-black text-xl border border-amber-400/40">
                        03
                      </div>
                      <div>
                        <h4 className="font-oswald text-xl font-bold uppercase tracking-wide text-[#FFD700] group-hover:text-amber-300 transition-colors">
                          Question-Moment Chart
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-200/80 font-roboto mt-1">
                          Prashna Shastra
                        </p>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm font-roboto leading-relaxed">
                        A chart cast for the exact moment you ask an urgent question, giving a direct answer to concerns like “Will we reconcile?”, “Will this case settle?” or “Is now the time to change jobs?”
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-700/60 mt-4 text-[11px] text-amber-300 font-semibold font-roboto flex items-center gap-1.5">
                      <span>✓ Fast answers for pressing decisions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 2: The 5 Sacred Promises of Pandith Vikram (Ethical Astrologer's Code) */}
              <div className="space-y-6 pt-6">
                <div className="flex items-center gap-3 border-b border-amber-400/20 pb-3">
                  <span className="text-[#FFD700] text-lg font-bold font-oswald tracking-wider uppercase">PART 2</span>
                  <span className="text-slate-400">|</span>
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                    Five Promises Every Client Can Count On
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {/* Promise 1 */}
                  <div className="bg-[#0C1236]/90 border border-slate-700 hover:border-amber-400 p-5 rounded-none flex flex-col justify-between transition-colors">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-none bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="font-oswald text-base font-bold uppercase text-[#FFD700]">No Scare Tactics</h4>
                      <p className="text-xs text-slate-300 font-roboto leading-relaxed">
                        You will never be told about invented curses or looming disasters to push you into costly rituals.
                      </p>
                    </div>
                    <span className="text-[10px] text-amber-400/90 font-bold uppercase tracking-wider font-roboto mt-4 block">Honest Advice</span>
                  </div>

                  {/* Promise 2 */}
                  <div className="bg-[#0C1236]/90 border border-slate-700 hover:border-amber-400 p-5 rounded-none flex flex-col justify-between transition-colors">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-none bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h4 className="font-oswald text-base font-bold uppercase text-[#FFD700]">Total Privacy</h4>
                      <p className="text-xs text-slate-300 font-roboto leading-relaxed">
                        Your name, your marriage, your family matters: all of it stays private. Nothing is shared, sold or published.
                      </p>
                    </div>
                    <span className="text-[10px] text-amber-400/90 font-bold uppercase tracking-wider font-roboto mt-4 block">Always Confidential</span>
                  </div>

                  {/* Promise 3 */}
                  <div className="bg-[#0C1236]/90 border border-slate-700 hover:border-amber-400 p-5 rounded-none flex flex-col justify-between transition-colors">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-none bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h4 className="font-oswald text-base font-bold uppercase text-[#FFD700]">Only Positive Remedies</h4>
                      <p className="text-xs text-slate-300 font-roboto leading-relaxed">
                        Pujas, homas, mantras, genuine gemstones and yantras, all rooted in scripture. No black magic, and nothing that could harm anyone.
                      </p>
                    </div>
                    <span className="text-[10px] text-amber-400/90 font-bold uppercase tracking-wider font-roboto mt-4 block">Safe & Devotional</span>
                  </div>

                  {/* Promise 4 */}
                  <div className="bg-[#0C1236]/90 border border-slate-700 hover:border-amber-400 p-5 rounded-none flex flex-col justify-between transition-colors">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-none bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-oswald text-base font-bold uppercase text-[#FFD700]">Honest Timelines</h4>
                      <p className="text-xs text-slate-300 font-roboto leading-relaxed">
                        Remedies follow natural cycles, usually 21 to 41 days. You get a realistic timeframe, never a promise of overnight miracles.
                      </p>
                    </div>
                    <span className="text-[10px] text-amber-400/90 font-bold uppercase tracking-wider font-roboto mt-4 block">No False Promises</span>
                  </div>

                  {/* Promise 5 */}
                  <div className="bg-[#0C1236]/90 border border-slate-700 hover:border-amber-400 p-5 rounded-none flex flex-col justify-between transition-colors">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-none bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h4 className="font-oswald text-base font-bold uppercase text-[#FFD700]">Speak With Him Directly</h4>
                      <p className="text-xs text-slate-300 font-roboto leading-relaxed">
                        Your consultation is with Pandith Vikram himself, not an assistant, and comes with his full attention and personal prayers for you.
                      </p>
                    </div>
                    <span className="text-[10px] text-amber-400/90 font-bold uppercase tracking-wider font-roboto mt-4 block">One-on-One</span>
                  </div>
                </div>
              </div>

              {/* Action Banner */}
              <div className="bg-gradient-to-r from-[#8E1612] via-[#A61914] to-[#8E1612] p-8 border-2 border-[#FFD700] rounded-none flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-oswald text-2xl font-bold uppercase text-white">
                    Ready for Honest Answers About Your Future?
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-100 font-roboto">
                    Meet Pandith Vikram in person on Hollywood Boulevard, or book a private phone or video reading from anywhere in the United States.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href="tel:+15103714626"
                    className="bg-[#FFD700] hover:bg-amber-300 text-slate-950 font-roboto font-bold px-6 py-3 rounded-none text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    Call: +1 510-371-4626
                  </a>
                  <button
                    onClick={() => navigateToBooking()}
                    className="bg-black/40 hover:bg-black/60 text-white border border-amber-300 px-6 py-3 rounded-none text-xs font-bold uppercase tracking-wider font-roboto transition-colors cursor-pointer"
                  >
                    Reserve Your Session
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 9. EXAMPLE CLIENT JOURNEYS (Illustrative stories, names & details changed; blurred portraits for privacy) */}
          <section id="reviews" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F3EF] border-y border-slate-200 relative overflow-hidden">
            {/* Subtle ornamental background glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8E1612]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
              {/* Section Heading matching Reference 2 */}
              <div className="text-center mb-14">
                <p className="text-[#B91C1C] text-xs sm:text-sm font-bold tracking-widest uppercase font-roboto mb-1.5">
                  ✦ Example Client Journeys • Names & Details Changed for Privacy ✦
                </p>
                <h2 className="font-oswald text-3xl sm:text-5xl font-bold text-slate-900 uppercase tracking-tight">
                  Stories of <span className="text-[#8E1612]">Hope & Healing</span>
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
                              alt={`Blurred portrait for an illustrative client story from ${reviewItem.city}, ${reviewItem.state}`}
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
                          <div className="absolute bottom-1 right-1 bg-[#8E1612]/95 text-[#FFD700] text-[8px] font-bold px-1.5 py-0.5 tracking-wider uppercase shadow-sm font-roboto flex items-center gap-1">
                            <svg className="w-2.5 h-2.5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
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

                            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 font-roboto">
                              ✦ Illustrative Story
                            </span>
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
                                Example based on common consultations • not an individual review
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

          {/* 10. SERVICE AREAS DIRECTORY (Los Angeles & California Regions + Golden Constellation Backdrop) */}
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
                  ✦ BASED IN LOS ANGELES • SERVING CLIENTS ACROSS CALIFORNIA ✦
                </div>
                <h2 className="font-oswald text-3xl sm:text-5xl font-bold text-slate-900 uppercase tracking-tight">
                  Where We <span className="text-[#B91C1C]">Serve Clients</span>
                </h2>
                <div className="w-24 h-1 bg-[#FFD700] mx-auto my-3.5"></div>
                <p className="text-slate-600 text-xs sm:text-sm font-roboto leading-relaxed">
                  In-person readings at our Hollywood office, plus private phone, WhatsApp and video consultations for clients in every corner of California, from San Diego to Sacramento.
                </p>
              </div>

              {/* 15 California Cities Directory Grid (Exact Requested Locations) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {locationsList.map((loc, idx) => (
                  <div
                    key={loc.id}
                    onClick={() => openDedicatedLocation(loc.slug)}
                    className="bg-[#FAF9F5] hover:bg-amber-50/70 border border-slate-200 hover:border-[#8E1612] p-4 transition-all duration-200 cursor-pointer group flex flex-col justify-between space-y-2 shadow-2xs hover:shadow-sm"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-block bg-[#8E1612] group-hover:bg-[#b91c1c] text-white font-oswald font-bold text-xs px-2.5 py-0.5 uppercase tracking-wider border-l-2 border-[#FFD700] transition-colors">
                          {idx + 1}. {loc.name}
                        </span>
                        <span className="text-[10px] text-slate-500 font-roboto truncate">
                          {loc.region.split('/')[0]}
                        </span>
                      </div>
                      <p className="text-slate-700 text-xs font-roboto leading-relaxed line-clamp-2 pt-0.5">
                        {loc.suburbs.slice(0, 5).join(', ')}...
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-roboto font-bold">
                      <span className="text-[#8E1612] group-hover:text-[#b91c1c] uppercase tracking-wider flex items-center gap-1">
                        <span>View City Page</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">
                        /{loc.slug}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 10B. FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION SECTION (Grounded, Truthful Vedic Clarifications) */}
          <section id="faq" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FBFBFC] border-b border-slate-200 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 space-y-12">
              {/* Heading */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-block bg-[#D61B14]/10 text-[#D61B14] border border-[#D61B14]/30 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest font-roboto">
                  ✦ YOUR QUESTIONS, ANSWERED HONESTLY ✦
                </div>
                <h2 className="font-oswald text-3xl sm:text-5xl font-bold uppercase tracking-tight text-slate-900">
                  Common <span className="text-[#8E1612]">Questions</span> Before a Reading
                </h2>
                <div className="w-24 h-1 bg-[#FFD700] mx-auto my-3"></div>
                <p className="text-slate-600 text-xs sm:text-sm font-roboto leading-relaxed">
                  Straight answers about how consultations work, missing birth times, remote readings and the remedies Pandith Vikram uses.
                </p>
              </div>

              {/* Accordion List */}
              <div className="space-y-4">
                {homeFaqs.map((faqItem, idx) => {
                  const isOpen = openFaqIndex === idx
                  return (
                    <div
                      key={idx}
                      className={`border-2 transition-all duration-300 rounded-none bg-white ${
                        isOpen ? 'border-[#8E1612] shadow-md' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className={`font-oswald text-base sm:text-lg font-bold uppercase tracking-wide transition-colors ${
                          isOpen ? 'text-[#8E1612]' : 'text-slate-900'
                        }`}>
                          {faqItem.question}
                        </span>
                        <span className={`w-7 h-7 shrink-0 flex items-center justify-center font-bold text-sm rounded-none transition-all ${
                          isOpen ? 'bg-[#8E1612] text-[#FFD700] rotate-180' : 'bg-slate-100 text-slate-600'
                        }`}>
                          ▼
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-2 text-slate-700 text-xs sm:text-sm font-roboto leading-relaxed border-t border-slate-100 space-y-2 bg-slate-50/50">
                          <p>{faqItem.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Still have questions banner */}
              <div className="bg-amber-50 border border-amber-300 p-6 text-center space-y-3 rounded-none">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8E1612] font-roboto">
                  ✦ Don’t see your question here? ✦
                </p>
                <p className="text-xs sm:text-sm text-slate-700 font-roboto">
                  Every situation is different, and so is every chart. Call or message Pandith Vikram directly and talk it through in complete confidence.
                </p>
                <div className="pt-1 flex flex-wrap justify-center gap-3">
                  <a
                    href="tel:+15103714626"
                    className="inline-flex items-center gap-2 bg-[#8E1612] hover:bg-[#680E0B] text-white font-roboto font-bold px-6 py-2.5 rounded-none text-xs uppercase tracking-wider transition-colors shadow cursor-pointer"
                  >
                    <span>Call Now: +1 510-371-4626</span>
                  </a>
                  <button
                    onClick={() => navigateToBooking()}
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-roboto font-bold px-6 py-2.5 rounded-none text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Send a Private Message</span>
                  </button>
                </div>
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
                Whenever life feels uncertain, reach out to Astrologer <strong className="text-[#FFD700]">Pandith Vikram</strong> for honest Vedic guidance and remedies that fit your situation. With more than 35 years of experience and an office on Hollywood Boulevard, he is here to guide you forward, in Los Angeles or anywhere in the USA.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[11px] text-[#FFD700] font-bold uppercase tracking-wider font-roboto">
                <span className="inline-block w-2 h-2 bg-[#FFD700]"></span>
                <span>Private, Respectful & Confidential</span>
              </div>
            </div>

            {/* Column 2: Home & Policy Links (2.5 -> 3 Columns) */}
            <div className="lg:col-span-3 space-y-4 lg:pl-4">
              <div>
                <h4 className="font-oswald text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                  Quick Links
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
                    href="#about-los-angeles"
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
                    <span>Client Stories</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#methodology"
                    onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
                    className="text-amber-50/90 hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>Our Approach</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
                    className="text-amber-50/90 hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>Common Questions</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#usa-locations"
                    onClick={() => { if (activeDetailId) closeDedicatedService(false) }}
                    className="text-amber-50/90 hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#FFD700] font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>Service Areas</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => navigateToBooking()}
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
                  Our Services
                </h4>
                <div className="w-10 h-0.5 bg-[#FFD700] mt-1"></div>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-[13px] font-roboto">
                {[
                  { label: 'Black Magic Removal', id: 'black-magic-removal' },
                  { label: 'Evil Eye & Nazar Remedies', id: 'evil-eye-protection' },
                  { label: 'Career & Job Guidance', id: 'career-business' },
                  { label: 'Husband–Wife Disputes', id: 'marriage-compatibility' },
                  { label: 'Bring Back Lost Love', id: 'get-ex-love-back' },
                  { label: 'Love Marriage Guidance', id: 'love-relationship' },
                  { label: 'Psychic Reading', id: 'psychic-reading' },
                  { label: 'Palm & Horoscope Reading', id: 'horoscope-reading' },
                  { label: 'Tarot Card Reading', id: 'tarot-reading' },
                  { label: 'Love Spells', id: 'love-spells' },
                  { label: 'Family & Children', id: 'family-child-problems' },
                  { label: 'Money & Business Growth', id: 'financial-problems' },
                  { label: 'Court Case & Property Help', id: 'court-case-problems' },
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
                  Get in Touch
                </h4>
                <div className="w-10 h-0.5 bg-[#FFD700] mt-1"></div>
              </div>

              <div className="space-y-3.5 pt-1">
                {/* Office Address */}
                <div className="flex items-start gap-3 text-amber-50/90">
                  <div className="w-8 h-8 bg-[#060B28]/80 border border-[#FFD700]/50 text-[#FFD700] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="leading-relaxed">
                    <p className="font-bold text-white uppercase text-xs">Office Address:</p>
                    <a
                      href="https://maps.google.com?q=Indian%20Astrologer,%207001%20Hollywood%20Blvd,%20Los%20Angeles,%20CA%2090028,%20United%20States&ftid=0x80c2bf003e569f33:0x14bf83fe85d0f8d5&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,100821555,47071704,94218641,94282134,100835694,94286869,100820247,100822504,100838877,121816461&g_st=ic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FFD700] transition-colors"
                    >
                      7001 Hollywood Blvd, Los Angeles, CA 90028, United States
                    </a>
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
                    <p className="text-[10px] uppercase tracking-wider text-amber-200 font-bold">Call or WhatsApp</p>
                    <a href="tel:+15103714626" className="text-white hover:text-[#FFD700] font-oswald font-bold text-base sm:text-lg tracking-wider transition-colors">
                      +1 510-371-4626
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
                    <p className="text-[10px] uppercase tracking-wider text-amber-200 font-bold">Email</p>
                    <a href="mailto:pandithvikram@gmail.com" className="hover:text-[#FFD700] transition-colors font-medium break-all">
                      pandithvikram@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours & CTA */}
                <div className="pt-2 space-y-3">
                  <p className="text-[11px] text-amber-200/90 font-medium">
                    ✦ Open Daily: 8:00 AM – 10:00 PM Pacific Time
                  </p>
                  <button
                    onClick={() => navigateToBooking()}
                    className="w-full bg-[#FFD700] hover:bg-amber-300 text-slate-950 font-oswald font-bold py-2.5 px-4 rounded-none text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>✦ Book Your Private Reading</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* California Locations Directory Bar */}
          <div className="border-t border-slate-700/60 pt-6 mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 font-roboto">
              <span className="text-xs font-oswald font-bold uppercase tracking-wider text-[#FFD700]">
                ✦ Dedicated California Service Locations:
              </span>
              <span className="text-[11px] text-amber-100/70">
                In-Person Hollywood Consultations & Confidential Remote Readings Across CA
              </span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-roboto text-slate-300">
              {locationsList.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => openDedicatedLocation(loc.slug)}
                  className="hover:text-[#FFD700] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span className="text-[#FFD700] font-bold">›</span>
                  <span>{loc.name}</span>
                </button>
              ))}
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

      {/* Floating Action Hub (WhatsApp + Scroll to Top) */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
        {/* Floating WhatsApp Widget - Elevated Position */}
        <div className="flex items-center gap-2 group">
          <span className="hidden sm:inline-block bg-[#0A102E] text-amber-200 border border-amber-400/40 text-xs font-bold font-roboto px-3 py-1.5 shadow-2xl rounded-none opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Message Pandith Vikram on WhatsApp
          </span>

          <a
            href="https://wa.me/15103714626"
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white p-2.5 shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.85)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 rounded-none border-2 border-white cursor-pointer"
            aria-label="Chat with Pandith Vikram on WhatsApp"
          >
            {/* Official Crisp High-Quality WhatsApp Vector SVG */}
            <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-white" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.71 20.28 11.92C20.28 16.46 16.59 20.16 12.04 20.16C10.64 20.16 9.27 19.8 8.08 19.09L7.79 18.92L4.69 19.73L5.52 16.71L5.33 16.41C4.55 15.17 4.14 13.56 4.14 11.91C4.14 7.37 7.83 3.67 12.04 3.67ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.65 13.49 14.48 13.45 14.32 13.7C14.15 13.95 13.68 14.51 13.54 14.67C13.39 14.84 13.25 14.86 13 14.73C12.75 14.61 11.95 14.35 11 13.5C10.26 12.84 9.76 12.03 9.61 11.78C9.47 11.53 9.59 11.4 9.72 11.27C9.83 11.16 9.97 10.98 10.1 10.83C10.22 10.69 10.27 10.58 10.35 10.41C10.43 10.25 10.39 10.1 10.33 9.98C10.27 9.85 9.77 8.63 9.57 8.13C9.37 7.65 9.17 7.71 9.02 7.71C8.88 7.7 8.71 7.7 8.55 7.7C8.38 7.7 8.11 7.76 7.88 8.01C7.65 8.26 7 8.87 7 10.09C7 11.31 7.89 12.49 8.01 12.65C8.14 12.82 9.77 15.32 12.26 16.39C12.85 16.65 13.31 16.8 13.67 16.92C14.26 17.11 14.8 17.08 15.23 17.02C15.71 16.95 16.71 16.42 16.92 15.84C17.12 15.26 17.12 14.77 17.06 14.67C17 14.56 16.82 14.51 16.57 14.39Z" />
            </svg>
          </a>
        </div>

        {/* Scroll To Top Button - Placed directly below WhatsApp */}
        {showScrollTop && (
          <div className="flex items-center gap-2 group">
            <span className="hidden sm:inline-block bg-[#0A102E] text-amber-200 border border-amber-400/40 text-xs font-bold font-roboto px-3 py-1.5 shadow-2xl rounded-none opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Scroll to Top
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-11 h-11 sm:w-12 sm:h-12 bg-[#8E1612] hover:bg-[#A91D18] text-white p-2 shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 rounded-none border-2 border-[#FFD700] cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-white fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        )}
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
                <h3 className="font-oswald text-2xl font-bold text-slate-900 uppercase">Inquiry Forwarded to WhatsApp!</h3>
                <p className="text-sm text-slate-600 font-roboto">
                  Your message and details have been directed to Pandith Vikram’s WhatsApp (+1 510-371-4626). We will reply promptly.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/15103714626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-none font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#D61B14] font-roboto">Los Angeles Vedic Astrologer</span>
                  <h3 className="font-oswald text-2xl sm:text-3xl font-bold text-slate-900 mt-1 uppercase">Send Pandith Vikram a Message</h3>
                  <p className="text-xs text-slate-500 mt-1 font-roboto">Private, confidential and answered personally</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 font-roboto">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Priya Sharma"
                      className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number (include area code) *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (310) 555-0123"
                        className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Birth Date (optional)</label>
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1">What Can We Help With?</label>
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Question *</label>
                    <textarea
                      name="question"
                      required
                      rows={3}
                      value={formData.question}
                      onChange={handleInputChange}
                      placeholder="Briefly tell us what is happening..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D61B14] hover:bg-[#b5140e] text-white font-bold py-3 rounded-none text-xs uppercase tracking-wider transition-all shadow-md mt-2 cursor-pointer font-roboto"
                  >
                    Send My Message
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
                <h3 className="font-oswald text-2xl font-bold text-slate-900 uppercase">Consultation Inquiry Sent!</h3>
                <p className="text-sm text-slate-600 font-roboto">
                  Your booking request has been forwarded to Pandith Vikram’s WhatsApp (+1 510-371-4626). We will confirm your reading time shortly.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/15103714626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-none font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#D61B14] font-roboto">Private Consultation</span>
                  <h3 className="font-oswald text-2xl font-bold text-slate-900 mt-1 uppercase">
                    {currentDetailedService ? `${currentDetailedService.title} ${currentDetailedService.subtitle}` : 'Book Your Personal Reading'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-roboto">
                    {currentDetailedService ? 'A one-on-one session focused on your question' : 'In person in Hollywood, or by phone and video'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 font-roboto">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Mehta"
                      className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Best Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (310) 555-0123"
                        className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email (optional)</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#D61B14] focus:ring-1 focus:ring-[#D61B14]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Choose a Topic</label>
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
                    Request My Appointment
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
                  ✦ Policies & Important Information
                </span>
                <h3 className="font-oswald text-2xl font-bold text-slate-900 mt-1 uppercase">
                  {activeModal === 'privacy' && 'Privacy Policy'}
                  {activeModal === 'terms' && 'Terms & Conditions'}
                  {activeModal === 'disclaimer' && 'Disclaimer'}
                </h3>
              </div>

              {activeModal === 'privacy' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">How we handle your information:</strong> Your birth details, photos, palm images and anything you tell us about your relationships or family are kept strictly confidential by Astrologer Pandith Vikram.
                  </p>
                  <p>
                    We do not sell, rent or share your personal information, phone number or consultation history with anyone. The client stories on this website are illustrative examples based on common consultations; names, photos and details have been changed or blurred to protect privacy.
                  </p>
                </div>
              )}

              {activeModal === 'terms' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">Appointments & remedies:</strong> Consultations are booked by appointment, in person at 7001 Hollywood Blvd, Los Angeles, CA 90028, or by phone, WhatsApp or video call.
                  </p>
                  <p>
                    Pujas, homas, yantras and other remedies are prepared for each client’s individual birth chart and work best when the recommended practices are followed sincerely and consistently.
                  </p>
                </div>
              )}

              {activeModal === 'disclaimer' && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">About astrological guidance:</strong> Readings, predictions and remedies offered by Pandith Vikram are based on traditional Indian Vedic texts, including the Parashara and Jaimini systems of Jyotish.
                  </p>
                  <p>
                    Every chart is unique, so outcomes vary between individuals and depend on many factors, including planetary periods, karma and personal effort. Astrology is spiritual guidance and is not a substitute for advice from a licensed doctor, attorney, therapist or financial professional.
                  </p>
                </div>
              )}

              <div className="pt-3 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="bg-[#8E1612] hover:bg-[#B91C1C] text-white font-oswald font-bold px-6 py-2.5 text-xs uppercase tracking-wider cursor-pointer rounded-none"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
