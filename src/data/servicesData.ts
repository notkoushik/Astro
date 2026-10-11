export interface ServiceGalleryImage {
  url: string
  fallbackUrl?: string
  category: 'Sacred Vedic Ritual & Remedy' | 'Real-Life Transformation' | 'Astrological & Planetary Iconography'
  title: string
  caption: string
  source: 'Unsplash' | 'Wikimedia Commons' | 'NASA' | 'Pexels'
  license: string
  alt: string
}

export interface ServiceTheme {
  primaryGradient: string
  heroBg: string
  accentColor: string
  accentBorder: string
  badgeBg: string
  badgeText: string
  badgeBorder: string
  testimonialBg: string
  testimonialBorder: string
  cardBorderHover: string
  glowColor: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface DetailedService {
  id: string
  title: string
  subtitle: string
  img: string
  desc: string
  category: string
  deity: string
  planetaryCause: string
  symptoms: string[]
  remedies: { name: string; desc: string }[]
  howItWorks: string[]
  testimonial: { quote: string; client: string; location: string }
  theme: ServiceTheme
  gallery: ServiceGalleryImage[]
  faqs?: ServiceFAQ[]
}

export const detailedServicesData: Record<string, DetailedService> = {
  'love-relationship': {
    id: 'love-relationship',
    title: 'Love & Relationship',
    subtitle: 'Problems',
    img: '/images/couple.webp',
    desc: 'Restore trust, communication and mutual devotion through Vedic astrological compatibility and planetary balancing.',
    category: 'Vedic Relationship Healing',
    deity: 'Shukra Dev (Venus) & Kamadeva',
    theme: {
      primaryGradient: 'from-[#2A080C] via-[#3B0713] to-[#4A0E17]',
      heroBg: '#3B0713',
      accentColor: '#B76E79',
      accentBorder: 'border-[#B76E79]',
      badgeBg: 'bg-[#8B1E3F]',
      badgeText: 'text-rose-100',
      badgeBorder: 'border-[#B76E79]',
      testimonialBg: 'bg-[#4A0E17]',
      testimonialBorder: 'border-[#B76E79]',
      cardBorderHover: 'hover:border-[#B76E79]',
      glowColor: 'rgba(183, 110, 121, 0.25)',
    },
    planetaryCause: 'In Vedic Astrology, the 7th house (Kalatra Bhava) governs romantic partnerships, while Venus (Shukra) represents romantic harmony and affection. When Rahu, Mars, or Saturn afflict Venus or cast malefic drishti on the 7th house, misunderstandings, sudden emotional withdrawals, suspicion, and communication breakdowns occur.',
    symptoms: [
      'Unexplained emotional coldness and sudden detachment from your partner',
      'Recurring misunderstandings turning minor discussions into bitter disputes',
      'Interference from third parties, outside opinions, or malicious gossip',
      'Loss of intimacy, mutual respect, and warmth in everyday life',
      'Unresolved past grievances repeatedly resurfacing and blocking healing',
    ],
    remedies: [
      {
        name: 'Shukra Graha Shanti Puja',
        desc: 'Sacred ritual to pacify malefic planetary transits affecting Venus, restoring romantic warmth, attraction, and emotional softness between partners.',
      },
      {
        name: 'Kamakhya & Radha-Krishna Samvada Mantras',
        desc: 'Personalized energized Vedic chants designed to open closed hearts and remove psychic blockages between romantic partners.',
      },
      {
        name: 'Kundali Dosha Neutralization',
        desc: 'Remedies to mitigate underlying doshas causing cyclic tension in your combined birth charts.',
      },
      {
        name: 'Aura Cleansing & Positive Frequency Alignment',
        desc: 'Spiritual purification to shield both partners from toxic outer negative vibrations.',
      },
    ],
    howItWorks: [
      'Confidential Kundali & Birth Chart Analysis of both partners',
      'Identification of Rahu-Ketu or Mars afflictions on the 7th house',
      'Customized Vedic Remedial Ritual & Mantra Prescription',
      'Continuous guidance until relationship harmony is restored',
    ],
    testimonial: {
      quote: 'My partner and I were on the verge of separation after 5 years together. Pandith Vikram accurately identified the planetary transit affecting our 7th house and prescribed specific remedies. Within three weeks, the toxic tension dissolved completely.',
      client: 'Sunita & Raj',
      location: 'Wembley, London, UK',
    },
    faqs: [
      {
            "question": "Can Vedic astrology help if my partner has emotionally detached or blocked me?",
            "answer": "Yes. In Vedic astrology, sudden emotional withdrawals are often linked to malefic transits across the 7th house (Kalatra Bhava) or adverse afflictions to Venus (Shukra). Pandith Vikram pinpoints the exact planetary trigger and prescribes targeted Shukra Graha Shanti rituals and personalized Samvada mantras to clear negative psychic barriers and reopen gentle communication."
      },
      {
            "question": "Are these remedies safe for both of us, or do they carry negative karmic repercussions?",
            "answer": "They are 100% safe, pure, and Sattvic. Pandith Vikram practices strictly scriptural Vedic Jyotish rituals rooted in harmony, compassion, and divine grace. He does not use forceful or manipulative magic, ensuring that all outcomes bring genuine peace, mutual respect, and lasting devotion without any karmic backlash."
      },
      {
            "question": "What birth details do I need to provide for a relationship consultation?",
            "answer": "Ideally, both partners' full names, dates of birth, exact times of birth, and birth cities. However, if your partner's exact birth time is unavailable, Pandith Vikram utilizes Prashna Horary Astrology (the planetary chart of the moment of query) alongside Palmistry and Face Reading to perform an accurate diagnostic reading."
      },
      {
            "question": "How long does it typically take for emotional warmth and mutual understanding to return?",
            "answer": "While energetic shifts begin immediately upon the commencement of remedies, planetary alignment operates on a natural 21-to-41 day mandala cycle. Most clients experience marked softening in conversations and dissolution of tension within 3 to 4 weeks of consistent remedial practice."
      }
],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/candles.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Shukra Shanti Diya & Rose Petal Altar',
        caption: 'Sacred Shukra Graha Shanti puja altar with glowing brass diya and fresh rose petal offerings for relationship healing.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Sacred Shukra Graha Shanti puja altar with glowing brass diya and fresh rose petal offerings for relationship healing.',
      },
      {
        url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/couple.webp',
        category: 'Real-Life Transformation',
        title: 'Reconnected Couple in Warm Sunset',
        caption: 'Loving couple holding hands in soft golden hour light reflecting mutual forgiveness and emotional reunion.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Loving couple holding hands in soft golden hour light reflecting mutual forgiveness and emotional reunion.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA00104/PIA00104~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Planet Venus (Shukra) Glowing Sphere',
        caption: 'NASA Magellan radar mosaic of planet Venus (Shukra), significator of romance and aesthetic grace in Vedic astrology.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA planetary radar mosaic of Venus Shukra in deep space representing love, harmony, and grace.',
      },
    ],
  },

  'marriage-compatibility': {
    id: 'marriage-compatibility',
    title: 'Marriage &',
    subtitle: 'Compatibility',
    img: '/images/wedding.webp',
    desc: 'Deep Kundali Milan (Guna Milan), dosha pacification, and sacred remedies for marital longevity and lifelong happiness.',
    category: 'Vedic Kundali Milan',
    deity: 'Brihaspati Dev (Guru/Jupiter) & Vivaha Samskara (Gauri-Shankar)',
    theme: {
      primaryGradient: 'from-[#431407] via-[#7C2D12] to-[#9A3412]',
      heroBg: '#7C2D12',
      accentColor: '#FFD700',
      accentBorder: 'border-[#FFD700]',
      badgeBg: 'bg-[#C2410C]',
      badgeText: 'text-amber-100',
      badgeBorder: 'border-[#FFD700]',
      testimonialBg: 'bg-[#7C2D12]',
      testimonialBorder: 'border-[#FFD700]',
      cardBorderHover: 'hover:border-[#FFD700]',
      glowColor: 'rgba(255, 215, 0, 0.25)',
    },
    planetaryCause: 'Marital longevity depends on the strength of Jupiter (Brihaspati) and Venus, alongside the 2nd (Kutumba), 7th (Kalatra), and 8th (Mangalya) houses. Manglik Dosha (Kuja Dosha) caused by Mars placed in the 1st, 4th, 7th, 8th, or 12th house, as well as Nadi Dosha, can create pre-marital delays or post-marital discord.',
    symptoms: [
      'Repeated obstacles, last-minute cancellations, or unexplainable delays in marriage proposals',
      'Severe Mangal (Manglik) Dosha causing disputes between families',
      'Nadi Dosha or Bhakoot Dosha flagging severe incompatibility in Guna Milan',
      'Post-marital estrangement, ego clashes, and inability to build shared future plans',
      'In-law friction and outside interference disrupting domestic peace',
    ],
    remedies: [
      {
        name: 'Mangal Dosha & Kumbh Vivah Remedies',
        desc: 'Targeted Vedic rituals to neutralize aggressive Martian fire energy before or during marriage.',
      },
      {
        name: 'Gauri Shankar Puja & Rudrabhishek',
        desc: 'Auspicious prayers invoking Lord Shiva and Goddess Parvati for unbreakable marital union and domestic harmony.',
      },
      {
        name: 'Jupiter (Brihaspati) Strengthening Yantra',
        desc: 'Energized yantra and gemstone recommendations to enhance wisdom, tolerance, and prosperity in family life.',
      },
      {
        name: 'Family Vastu & Energetic Harmony Corrections',
        desc: 'Balancing the energetic north-east and south-west quadrants of the marital home.',
      },
    ],
    howItWorks: [
      'Comprehensive 36 Guna Ashtakoota Milan evaluation',
      'Detailed Navamsha (D9) Chart breakdown for lifelong marriage karma',
      'Prescription of corrective Vedic dosha pacification remedies',
      'Selection of highly auspicious Muhurat dates for engagements and ceremonies',
    ],
    testimonial: {
      quote: 'Our families were worried because of severe Manglik Dosha in our charts. Pandith Vikram guided us with exact dosha shanti rituals. We have been happily married for over four years now in total peace.',
      client: 'Pooja & Harpreet',
      location: 'Hounslow, London, UK',
    },
    faqs: [
      {
            "question": "What if our Kundali Milan scores low (below 18 Gunas) or reveals Nadi / Bhakoot Dosha?",
            "answer": "A low score or Nadi Dosha indicates energetic friction, but does not mean a marriage is doomed. Vedic astrology provides specific neutralizing homams (such as Maha Mrityunjaya and Gauri Shankar pujas) and gemstone recommendations that bridge energetic disparities and allow couples to build a harmonious, enduring marriage."
      },
      {
            "question": "How serious is Manglik Dosha (Kuja Dosha), and can it be fully resolved?",
            "answer": "Manglik Dosha is one of the most common and misunderstood astrological combinations. It occurs when Mars is placed in specific houses, generating aggressive fiery energy. Pandith Vikram calculates whether the dosha is canceled by other planetary placements (Bhanga) or prescribes tailored Kuja Shanti rituals that effectively pacify Martian turbulence before or after marriage."
      },
      {
            "question": "Can Pandith Vikram assist with inter-caste or inter-faith marriages facing family resistance?",
            "answer": "Yes. Parental resistance is frequently caused by 4th and 9th house afflictions in the charts. Pandith Vikram prescribes Brihaspati (Jupiter) and Chandra (Moon) balancing remedies to soften family hearts, remove misunderstandings, and facilitate peaceful parental acceptance."
      }
],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pooja_and_Havan_Kund_1.jpg',
        fallbackUrl: '/images/ritual.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Vivaha Homa Sacred Fire Kund',
        caption: 'Sacred Vedic wedding Vivaha Homa with consecrated copper fire pit and samidha wood for lifelong marital stability.',
        source: 'Wikimedia Commons',
        license: 'CC-BY-SA 4.0 / Public Domain',
        alt: 'Sacred Vedic wedding Vivaha Homa with consecrated copper fire pit and samidha wood for lifelong marital stability.',
      },
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/indian_wedding_regal.webp',
        category: 'Real-Life Transformation',
        title: 'Traditional Regal Indian Wedding Union',
        caption: 'Indian bride and groom smiling in traditional regal wedding attire during sacred marriage ceremony.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Indian bride and groom smiling in traditional regal wedding attire during sacred marriage ceremony.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA22946/PIA22946~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Planet Jupiter (Brihaspati) Celestial Globe',
        caption: 'NASA Juno spacecraft portrait of Jupiter (Brihaspati), the supreme guru and divine guarantor of marital harmony.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA high-definition full globe portrait of planet Jupiter Brihaspati significator of marital blessings and dharma.',
      },
    ],
  },

  'career-business': {
    id: 'career-business',
    title: 'Career &',
    subtitle: 'Business',
    img: '/images/career.webp',
    desc: 'Activate your 10th house Karma Bhava, dissolve professional stagnation, and unlock lucrative commercial opportunities.',
    category: 'Astrological Career Guidance',
    deity: 'Surya Dev (Sun) & Budha Dev (Mercury) - 10th House Karma',
    theme: {
      primaryGradient: 'from-[#1E1602] via-[#2E1A04] to-[#451A03]',
      heroBg: '#2E1A04',
      accentColor: '#F59E0B',
      accentBorder: 'border-[#F59E0B]',
      badgeBg: 'bg-[#B45309]',
      badgeText: 'text-amber-100',
      badgeBorder: 'border-[#F59E0B]',
      testimonialBg: 'bg-[#451A03]',
      testimonialBorder: 'border-[#F59E0B]',
      cardBorderHover: 'hover:border-[#F59E0B]',
      glowColor: 'rgba(245, 158, 11, 0.25)',
    },
    planetaryCause: 'Professional trajectory is dictated by the 10th House (Karma Bhava), the Sun (Surya - authority), Mercury (Budha - commerce), and Saturn (Shani - hard work and discipline). When Saturn or Rahu forms a Vish Yoga or Pitra Dosha over the 10th house, professionals face sudden layoffs, missed promotions, and persistent business stagnation.',
    symptoms: [
      'Chronic career stagnation despite superior qualifications and intense hard work',
      'Repeatedly being passed over for promotions, leadership roles, and recognition',
      'Sudden collapse of lucrative business deals or client contracts at the final stage',
      'Unresolvable partnership disputes and toxic workplace politics',
      'Uncertainty regarding whether to pursue employment or launch an independent enterprise',
    ],
    remedies: [
      {
        name: 'Surya Arghya & Aditya Hridaya Stotra Sadhana',
        desc: 'Consecrated solar invocations to ignite leadership charisma, respect from superiors, and career velocity.',
      },
      {
        name: 'Budha (Mercury) Vyapar Vriddhi Puja',
        desc: 'Sacred ritual performed to stimulate business acumen, revenue growth, and flawless trade execution.',
      },
      {
        name: 'Shani Sade Sati Karmic Pacification',
        desc: 'Alleviating harsh Saturn transit cycles to transform professional delays into enduring achievements.',
      },
      {
        name: 'Auspicious Business Muhurat Timing',
        desc: 'Calculations for opening stores, signing corporate agreements, or registering new UK companies.',
      },
    ],
    howItWorks: [
      'Detailed 10th House & Dashamsha (D10) career chart dissection',
      'Analysis of ongoing Mahadasha and Antardasha planetary periods',
      'Remedial gemstone and yantra alignment tailored to your dominant planet',
      'Strategic timeline mapping for job transitions, salary negotiations, or business launches',
    ],
    testimonial: {
      quote: 'My consultancy business was struggling for 18 months with clients stalling payments. Pandith Vikram analyzed my D10 chart, showed me a transit block, and gave me an energized Vyapar Yantra. Within two months, I closed two major international contracts.',
      client: 'Amit Patel',
      location: 'Canary Wharf, London, UK',
    },
    faqs: [
      {
            "question": "Can a reading determine whether I should remain in employment or start an independent business?",
            "answer": "Yes. The 10th house (Karma Bhava) indicates your career status, the 6th house indicates service/employment, and the 7th and 11th houses govern independent business and commercial profits. Pandith Vikram assesses the comparative strength of these houses and your Mahadasha to recommend your most lucrative and stable vocational path."
      },
      {
            "question": "How does Shani Sade Sati or Rahu Mahadasha impact corporate careers and leadership roles?",
            "answer": "Saturn (Shani) tests discipline and integrity, often bringing unexpected delays, workplace politics, or restructuring. Rahu can create sudden volatile shifts or illusionary opportunities. Pandith Vikram provides precise Sade Sati pacification remedies and strategic timelines so you know when to maintain patience and when to push aggressively for promotion."
      },
      {
            "question": "When is the ideal astrological time (Muhurat) to sign a major commercial agreement or launch a company?",
            "answer": "Selecting an auspicious Shubh Muhurat ensures that planetary horas, lunar tithis, and nakshatras align with your chart to favor sustainable profit. Pandith Vikram calculates bespoke dates and times for corporate incorporation, contract execution, and store inaugurations."
      }
],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/(A)_puja_in_progress_before_Yagam_Yajna.jpg',
        fallbackUrl: '/images/ritual.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Surya Arghya & Vyapar Yajna Altar',
        caption: 'Sacred Vedic Surya Arghya puja setup with copper vessel and consecrated offerings to activate 10th house karma.',
        source: 'Wikimedia Commons',
        license: 'CC-BY-SA / Public Domain',
        alt: 'Sacred Vedic Surya Arghya puja setup with copper vessel and consecrated offerings to activate 10th house karma.',
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/career.webp',
        category: 'Real-Life Transformation',
        title: 'Executive Commercial Leadership Skyline',
        caption: 'Modern architectural workspace and executive commercial towers symbolizing career ascension and business expansion.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Modern architectural workspace and executive commercial towers symbolizing career ascension and business expansion.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000084/GSFC_20171208_Archive_e000084~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Surya (Sun) Solar Corona & Radiant Energy',
        caption: 'NASA SDO high-energy extreme ultraviolet view of the Sun (Surya), planetary ruler of authority, soul, and career prestige.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA Solar Dynamics Observatory high-definition sun flare displaying cosmic power and professional vitality.',
      },
    ],
  },

  'financial-problems': {
    id: 'financial-problems',
    title: 'Financial',
    subtitle: 'Problems',
    img: '/images/finance.webp',
    desc: 'Unblock your 2nd and 11th wealth houses, eradicate chronic debts, and invite sustained Lakshmi prosperity.',
    category: 'Vedic Wealth & Prosperity',
    deity: 'Maha Lakshmi & Lord Kuber (Dhanakaraka)',
    theme: {
      primaryGradient: 'from-[#021810] via-[#062419] to-[#064E3B]',
      heroBg: '#062419',
      accentColor: '#10B981',
      accentBorder: 'border-[#10B981]',
      badgeBg: 'bg-[#065F46]',
      badgeText: 'text-emerald-100',
      badgeBorder: 'border-[#10B981]',
      testimonialBg: 'bg-[#064E3B]',
      testimonialBorder: 'border-[#10B981]',
      cardBorderHover: 'hover:border-[#10B981]',
      glowColor: 'rgba(16, 185, 129, 0.25)',
    },
    planetaryCause: 'The 2nd house (Dhana Bhava) signifies accumulated wealth, while the 11th house (Labha Bhava) dictates recurring gains. When malefic Ketu, Rahu, or Saturn afflict these houses or when Kemadruma Yoga is present, wealth quickly drains through unexpected expenses, unpaid debts, and investment losses.',
    symptoms: [
      'Money slips away immediately upon receiving salary or income through unexpected emergencies',
      'Mounting debt cycles and intense difficulty clearing loans or credit cards',
      'Sudden speculative losses in investments, stock markets, or real estate',
      'Stalled payments from debtors who refuse to settle long-overdue dues',
      'Feeling an invisible energetic ceiling blocking wealth accumulation',
    ],
    remedies: [
      {
        name: 'Maha Lakshmi & Kuber Yantra Sthapana',
        desc: 'Installation of high-frequency energized copper yantras in the auspicious North-East quadrant of your home.',
      },
      {
        name: 'Dhanakaraka Jupiter Blessing Rituals',
        desc: 'Strengthening the supreme benefic Jupiter to activate natural wealth preservation and moral prosperity.',
      },
      {
        name: 'Rin Mukti (Debt Relief) Homa',
        desc: 'Ancient Vedic fire sacrifice to dissolve deep-seated karmic burdens associated with financial indebtedness.',
      },
      {
        name: 'Charitable Annadanam & Cow Seva Prescriptions',
        desc: 'Specific planetary charity aligned with your birth nakshatra to burn negative financial karma.',
      },
    ],
    howItWorks: [
      'In-depth examination of the 2nd (Wealth) and 11th (Income) houses',
      'Detection of Daridra Yoga or Kemadruma Yoga afflictions',
      'Customized Vedic Lakshmi puja and consecrated talisman provision',
      'Ongoing planetary advice to safeguard assets and prevent impulsive expenditures',
    ],
    testimonial: {
      quote: 'I was under severe stress with accumulating business loans and property legal fees. Pandith Vikram identified the affliction in my 2nd house and performed the Rin Mukti Puja. Within 4 months, my cash flow revived and I repaid my main debts.',
      client: 'Ramesh K.',
      location: 'Southall, London, UK',
    },
    faqs: [
      {
            "question": "Why do sudden financial losses, stalled cash flow, or mounting debts occur according to Vedic astrology?",
            "answer": "Financial turbulence is governed by the 2nd (accumulated wealth), 8th (sudden liabilities), and 12th (uncontrolled expenditure) houses, alongside afflictions from Rahu, Ketu, or a debilitated Jupiter. When negative transits suppress Dhan Yogas, hard work fails to translate into retained wealth. Pandith Vikram identifies these blocks and activates corrective remedies."
      },
      {
            "question": "What is a Dhan Yoga, and how does Pandith Vikram activate dormant wealth combinations?",
            "answer": "Dhan Yogas are auspicious alignments between wealth lords (e.g. 1st, 2nd, 5th, 9th, and 11th houses). If these yogas are dormant due to planetary combustion or malefic aspects, Pandith Vikram utilizes consecrated Lakshmi-Kuber Yantras and targeted planetary mantras to re-energize wealth reception."
      },
      {
            "question": "Do natural certified gemstones help with debt relief and income acceleration?",
            "answer": "Yes, but only when carefully chosen. Wearing the wrong gemstone can exacerbate financial strain. Pandith Vikram conducts rigorous calculations to determine your Yogakaraka planet before recommending certified natural gemstones (such as Yellow Sapphire or Emerald) energized during specific planetary horas."
      }
],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sri_Yantra_copper.jpg',
        fallbackUrl: '/images/candles.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Consecrated Copper Sri Yantra Altar',
        caption: 'Authentic consecrated copper Sri Yantra plaque for Maha Lakshmi invocation and debt relief.',
        source: 'Wikimedia Commons',
        license: 'Public Domain',
        alt: 'Authentic consecrated copper Sri Yantra plaque for Maha Lakshmi invocation and debt relief.',
      },
      {
        url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/finance.webp',
        category: 'Real-Life Transformation',
        title: 'Golden Abundance & Relieved Prosperity',
        caption: 'Abundant golden harvest held in open hands symbolizing debt clearance and sustainable Lakshmi prosperity.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Abundant golden harvest held in open hands symbolizing debt clearance and sustainable Lakshmi prosperity.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA18904/PIA18904~orig.jpg',
        fallbackUrl: '/images/astronomical-red-nebula.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Golden Cosmic Stellar Dust Nursery',
        caption: 'NASA Hubble deep-space infrared view of luminous golden stellar nursery, symbolizing cosmic abundance and Lakshmi treasury.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA Hubble deep space golden nebula showcasing boundless celestial wealth and stellar energy.',
      },
    ],
  },

  'black-magic-removal': {
    id: 'black-magic-removal',
    title: 'Black Magic',
    subtitle: 'Removal',
    img: '/images/fire.webp',
    desc: 'Confidential spiritual diagnosis and powerful Vedic purification to neutralize dark energies, curses, and unseen obstacles.',
    category: 'Tantrik & Vedic Cleansing',
    deity: 'Maha Sudarshana & Maa Pratyangira Devi (Lord Narasimha)',
    theme: {
      primaryGradient: 'from-[#0A0102] via-[#1A0306] to-[#3B050B]',
      heroBg: '#1A0306',
      accentColor: '#DC2626',
      accentBorder: 'border-[#DC2626]',
      badgeBg: 'bg-[#7F1D1D]',
      badgeText: 'text-red-100',
      badgeBorder: 'border-[#DC2626]',
      testimonialBg: 'bg-[#3B050B]',
      testimonialBorder: 'border-[#DC2626]',
      cardBorderHover: 'hover:border-[#DC2626]',
      glowColor: 'rgba(220, 38, 38, 0.25)',
    },
    planetaryCause: 'Severe afflictions involving Rahu in the 8th or 12th house, Saturn-Rahu conjunctions (Shrapit Dosha), or malefic planetary transits leave an individual vulnerable to psychic intrusions, negative thought projections, envy curses, and spiritual blockages.',
    symptoms: [
      'Constant unexplained heaviness on the chest, chronic fatigue, and recurring dark nightmares',
      'Sudden streak of catastrophic misfortune hitting health, finances, and relationships simultaneously',
      'Feeling an oppressive or hostile presence in your home or bedroom at night',
      'Medical doctors unable to diagnose severe, chronic physical and mental exhaustion',
      'Sudden bitter discord between family members who previously shared loving bonds',
    ],
    remedies: [
      {
        name: 'Maha Sudarshana & Narasimha Homa',
        desc: 'The ultimate supreme protective Vedic fire ritual that incinerates negative entities and psychic curses.',
      },
      {
        name: 'Pratyangira Devi Kavach Energization',
        desc: 'Preparation of an indestructible sacred protective amulet that acts as a spiritual mirror, returning malice to its origin.',
      },
      {
        name: 'Complete Home & Business Energetic Purification',
        desc: 'Consecrated sacred salt, mustard seeds, and Vedic mantras to banish residual dark energies from properties.',
      },
      {
        name: 'Aura Sealing & Chakra Recharging',
        desc: 'Restoring damaged psychic boundaries so you remain immune to future negative psychic interference.',
      },
    ],
    howItWorks: [
      '100% confidential spiritual diagnosis of your aura and horoscope',
      'Pinpointing the source and type of energetic or psychic affliction',
      'Performance of sacred Vedic cleansing rituals and protective mantra chanting',
      'Hand-delivering an energized protective Kavach for permanent shielding',
    ],
    testimonial: {
      quote: 'Our household was tormented by sudden illnesses, horrific nightmares, and business failures. We suspected dark negative energy. Pandith Vikram conducted a confidential spiritual cleansing ritual for our house. The heavy oppressive feeling lifted immediately.',
      client: 'Jaswinder & Family',
      location: 'Slough, UK',
    },
    faqs: [
      {
            "question": "How can I differentiate between psychological/physical stress and negative spiritual energy?",
            "answer": "Genuine negative energy afflictions manifest as sudden, unnatural patterns: continuous medical deterioration despite normal clinical test results, sudden irrational domestic hatred among loving family members, severe recurring nightmares, and a heavy, suffocating atmosphere at home. Pandith Vikram examines your 8th house, Rahu/Ketu axis, and Gulika placement to verify spiritual intrusion."
      },
      {
            "question": "Is your spiritual cleansing completely safe and confidential for my family?",
            "answer": "Absolutely. Pandith Vikram relies exclusively on sacred Vedic Maha Sudarshana, Pratyangira Devi, and Narasimha kavacham procedures. These are protective, purifying divine rituals that permanently neutralize external negativity and establish an impenetrable spiritual barrier around your home and loved ones."
      },
      {
            "question": "Can spiritual cleansing be conducted remotely if I am located outside London or in the USA?",
            "answer": "Yes. In authentic Vedic science, spiritual energy transcends geographic distance. Pandith Vikram performs the consecrated homam using your photograph, Janam Kundali, and Gotra/name, delivering protective energized kavachs and instructions directly to your home."
      }
],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/fire.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Maha Sudarshana Homa Sacred Fire Pit',
        caption: 'Blazing sacred Vedic fire homa flames incinerating negative psychic entities and generational curses.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Blazing sacred Vedic fire homa flames incinerating negative psychic entities and generational curses.',
      },
      {
        url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/hero-slide-fire.webp',
        category: 'Real-Life Transformation',
        title: 'Meditative Spiritual Freedom & Aura Rebirth',
        caption: 'Serene meditator surrounded by peaceful dawn light after dissolving heavy psychic blockages and fear.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Serene meditator surrounded by peaceful dawn light after dissolving heavy psychic blockages and fear.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA19821/PIA19821~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Solar Eclipse Protective Diamond Ring',
        caption: 'NASA solar eclipse diamond ring phenomenon, representing the supreme Sudarshana disc piercing all negative astral obscurations.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA total solar eclipse diamond ring phenomenon symbolizing cosmic protection against dark shadows.',
      },
    ],
  },

  'evil-eye-protection': {
    id: 'evil-eye-protection',
    title: 'Evil Eye',
    subtitle: 'Protection',
    img: '/images/eye.webp',
    desc: 'Traditional Nazar Dosha diagnosis, negative aura shielding, and ancient Vedic talisman remedies to safeguard your household.',
    category: 'Nazar Dosha Shielding',
    deity: 'Lord Hanuman & Drishti Ganesha (Chandra Kavach)',
    theme: {
      primaryGradient: 'from-[#03071E] via-[#0A1128] to-[#001F54]',
      heroBg: '#0A1128',
      accentColor: '#06B6D4',
      accentBorder: 'border-[#06B6D4]',
      badgeBg: 'bg-[#1E40AF]',
      badgeText: 'text-blue-100',
      badgeBorder: 'border-[#06B6D4]',
      testimonialBg: 'bg-[#001F54]',
      testimonialBorder: 'border-[#06B6D4]',
      cardBorderHover: 'hover:border-[#06B6D4]',
      glowColor: 'rgba(6, 182, 212, 0.25)',
    },
    planetaryCause: 'Buri Nazar (Evil Eye) occurs when jealous or covetous visual vibrations penetrate an individual with a vulnerable Moon (Chandra) or afflicted Lagna (Ascendant). In Vedic science, strong jealousy emits heavy low-frequency vibrational fields that cause sudden illness, accidents, or losses.',
    symptoms: [
      'Sudden bouts of severe headache, nausea, or dizziness after public appearances or celebrations',
      'Infants or young children crying inconsolably without any physical or medical explanation',
      'Sudden unexplained drop in customers or footfall at a newly successful business',
      'Glass objects, sacred items, or vehicle parts breaking repeatedly without reason',
      'Feelings of restlessness, sudden anxiety, and uncharacteristic self-doubt',
    ],
    remedies: [
      {
        name: 'Vedic Nazar Utarna & Salt Cleansing',
        desc: 'Traditional consecrated five-element ritual to pull toxic jealousy frequencies straight out of the physical aura.',
      },
      {
        name: 'Hanuman Chalisa & Bajrang Baan Energized Yantra',
        desc: 'Supreme talisman of Lord Hanuman providing unbreakable courage and total protection from envious onlookers.',
      },
      {
        name: 'Drishti Ganesha Sthapana for Homes & Offices',
        desc: 'Installation of consecrated protective deity tiles at the entrance to dissolve envy before it enters the threshold.',
      },
      {
        name: 'Black Tourmaline & Vedic Protective Threads',
        desc: 'Consecrated Raksha Sutra threads tied during auspicious planetary hours.',
      },
    ],
    howItWorks: [
      'Aura and Moon chart evaluation to assess energetic permeability',
      'Determination of recent social or professional triggers of jealousy',
      'Immediate physical and subtle-body clearing of stagnant heavy energy',
      'Fitting of long-term protective yantras and talismans',
    ],
    testimonial: {
      quote: 'Every time my boutique did well, I would fall sick and orders would freeze. Pandith Vikram showed me how Nazar was affecting my energy field. His protective Hanuman talisman and shop cleansing completely changed everything.',
      client: 'Priya Mehta',
      location: 'Ealing, London, UK',
    },
    faqs: [
      {
            "question": "What is Buri Nazar (Evil Eye / Drishti Dosha) in classical Vedic astrology?",
            "answer": "Drishti Dosha refers to the psychic projection of jealousy, envy, or malice from others that disrupts your personal aura and destabilizes your planetary harmony. It frequently strikes after visible milestones like weddings, new business launches, child births, or promotions."
      },
      {
            "question": "How does an authentic Vedic Raksha Kavach protect against ongoing jealousy?",
            "answer": "A consecrated Raksha Kavach acts as a personal electromagnetic shield for your aura. Energized with sacred Vedic mantras during auspicious planetary horas, it reflects negative psychic projections back to the universe, preventing emotional drain, sudden disputes, and unexplainable misfortune."
      },
      {
            "question": "Can the Evil Eye affect infants, businesses, or newly acquired properties?",
            "answer": "Yes. Newborns, pregnant mothers, front-facing retail shops, and newly bought homes possess vulnerable energetic fields that readily absorb heavy environmental vibrations. Pandith Vikram provides specific Vastu and Nazar Nivaran remedies to fortify these spaces permanently."
      }
],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/ritual.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Traditional Nazar Utarna Altar & Diya',
        caption: 'Vedic Nazar Utarna ritual brass thali with burning camphor flame, kumkum, and protective offerings.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Vedic Nazar Utarna ritual brass thali with burning camphor flame, kumkum, and protective offerings.',
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/eye.webp',
        category: 'Real-Life Transformation',
        title: 'Energetically Shielded Peaceful Living Home',
        caption: 'Warm, tranquil household living sanctuary shielded from envious gazes and toxic outside vibrations.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Warm, tranquil household living sanctuary shielded from envious gazes and toxic outside vibrations.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA14021/PIA14021~orig.jpg',
        fallbackUrl: '/images/moon-phases.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Full Moon (Chandra) Protective Luminous Sphere',
        caption: 'NASA Lunar Reconnaissance Orbiter portrait of full Moon (Chandra), divine guardian of psychic calmness and mental fortresses.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA high-definition full moon disc radiating soothing lunar light to calm anxiety and ward off evil eye.',
      },
    ],
  },

  'family-child-problems': {
    id: 'family-child-problems',
    title: 'Family &',
    subtitle: 'Child Problems',
    img: '/images/family.webp',
    desc: 'Restore domestic harmony, resolve generational friction, and receive astrological remedies for child health and conception.',
    category: 'Domestic Peace & Santan Yoga',
    deity: 'Santana Gopala (Balakrishna) & Goddess Saraswati (Matru Bhava)',
    theme: {
      primaryGradient: 'from-[#290E02] via-[#451A03] to-[#78350F]',
      heroBg: '#451A03',
      accentColor: '#EA580C',
      accentBorder: 'border-[#FB923C]',
      badgeBg: 'bg-[#C2410C]',
      badgeText: 'text-orange-100',
      badgeBorder: 'border-[#FB923C]',
      testimonialBg: 'bg-[#78350F]',
      testimonialBorder: 'border-[#FB923C]',
      cardBorderHover: 'hover:border-[#FB923C]',
      glowColor: 'rgba(234, 88, 12, 0.25)',
    },
    planetaryCause: 'The 4th house (Matru Bhava) governs domestic tranquility, while the 5th house (Putra Bhava) governs children, education, and intellect. Afflictions from Rahu, Saturn, or Ketu to Jupiter or the 5th lord manifest as delays in childbearing, behavioral turbulence, or continuous arguments between family members.',
    symptoms: [
      'Persistent conflict between parents and children, leading to emotional estrangement',
      'Severe lack of focus, academic setbacks, and defiance in children or teenagers',
      'Delays in conception despite favorable medical reports (Putra Dosha)',
      'Unending property and domestic arguments between siblings or in-laws',
      'A tense, unhappy home atmosphere devoid of peace and mutual affection',
    ],
    remedies: [
      {
        name: 'Santana Gopala Homa',
        desc: 'Auspicious Vedic fire ritual invoked for couples seeking healthy, blessed progeny and safe childbirth.',
      },
      {
        name: 'Saraswati & Budha Medha Suktam Prayers',
        desc: 'Sacred chanting and remedies to elevate a child’s concentration, memory retention, and academic success.',
      },
      {
        name: 'Matru-Pitru Shanti & Domestic Harmony Puja',
        desc: 'Remedies to pacify generational karma and heal emotional wounds between family elders and youth.',
      },
      {
        name: 'Household Vastu Correction for the North-East',
        desc: 'Clearing stagnant energy in the Ishanya quadrant to bring soothing peace into the living quarters.',
      },
    ],
    howItWorks: [
      'Detailed birth chart analysis of parents and children (4th & 5th houses)',
      'Identification of Santana Dosha, Jupiter afflictions, or domestic Vastu faults',
      'Prescription of simple, potent daily remedies and sacred homas',
      'Compassionate follow-up counseling to foster empathetic communication',
    ],
    testimonial: {
      quote: 'My teenage son was growing increasingly distant and refusing to study. Pandith Vikram analyzed his chart, pointed out a severe Rahu transit, and suggested specific Saraswati mantras. The transformation in his calm demeanor and focus was miraculous.',
      client: 'Deepa Verma',
      location: 'Croydon, London, UK',
    },
    faqs: [
      {
            "question": "Which planetary placements cause bitter family feuds and parent-child alienation?",
            "answer": "The 2nd house (family unity), 4th house (domestic peace and mother), and 5th house (children and progeny) govern household harmony. Afflictions from Rahu, Saturn, or Mars in these houses cause misunderstandings, emotional rebelliousness, and estrangement. Pandith Vikram\u2019s remedies restore mutual empathy and respectful communication."
      },
      {
            "question": "What astrological remedies assist couples struggling with delays in conceiving (Santana Dosha)?",
            "answer": "Delays in childbirth often stem from 5th house afflictions, Pitra Dosha, or Rahu-Jupiter discord (Guru Chandal Yoga). Pandith Vikram calculates the Kshetra and Beeja Sphuta points in both parents' charts and prescribes Santana Gopala pujas and scriptural remedies to support healthy parenthood."
      },
      {
            "question": "Can a parent perform remedies on behalf of a child who is struggling or unwilling to participate?",
            "answer": "Yes. A biological parent shares an intimate karmic and energetic link with their child. By utilizing the parent\u2019s Sankalpa and chart, Pandith Vikram guides mothers and fathers through specific daily prayers and charity rituals that positively influence the child\u2019s mental focus, emotional calm, and destiny."
      }
],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ganesha_Puja_Setup.jpg',
        fallbackUrl: '/images/candles.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Santana Gopala Puja Offerings & Tulsi Altar',
        caption: 'Auspicious Santana Gopala Vedic altar with brass deepam, fresh tulsi leaves, and sacred milk offerings.',
        source: 'Wikimedia Commons',
        license: 'CC-BY-SA / Public Domain',
        alt: 'Auspicious Santana Gopala Vedic altar with brass deepam, fresh tulsi leaves, and sacred milk offerings.',
      },
      {
        url: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/family.webp',
        category: 'Real-Life Transformation',
        title: 'United Multi-Generational Family Harmony',
        caption: 'Loving Indian parents smiling with their young child in mutual warmth and domestic peace.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Loving Indian parents smiling with their young child in mutual warmth and domestic peace.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA15985/PIA15985~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Stellar Nursery & Celestial Birth Cloud',
        caption: 'NASA Spitzer Space Telescope portrait of Carina Nebula stellar nursery, symbolizing fertility, children, and life genesis.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA infrared stellar nursery cloud in Carina Nebula symbolizing fertility, children, and cosmic life creation.',
      },
    ],
  },

  'health-wellness': {
    id: 'health-wellness',
    title: 'Health &',
    subtitle: 'Wellness',
    img: '/images/wellness.webp',
    desc: 'Ayur-Jyotish planetary insights into chronic physical, mental, and energetic fatigue with sacred healing mantras.',
    category: 'Vedic Health & Ayur-Jyotish',
    deity: 'Lord Maha Mrityunjaya (Shiva) & Lord Dhanvantari',
    theme: {
      primaryGradient: 'from-[#041510] via-[#061E16] to-[#134E4A]',
      heroBg: '#061E16',
      accentColor: '#14B8A6',
      accentBorder: 'border-[#2DD4BF]',
      badgeBg: 'bg-[#115E59]',
      badgeText: 'text-teal-100',
      badgeBorder: 'border-[#2DD4BF]',
      testimonialBg: 'bg-[#134E4A]',
      testimonialBorder: 'border-[#2DD4BF]',
      cardBorderHover: 'hover:border-[#2DD4BF]',
      glowColor: 'rgba(20, 184, 166, 0.25)',
    },
    planetaryCause: 'In Ayur-Jyotish, the 6th house governs disease (Roga Bhava) and the 8th house governs longevity and chronic issues. The Sun governs vitality, the Moon governs mental equilibrium, and Mars governs blood and energy. Afflictions from Saturn (cold, chronic debility) or Rahu (mysterious ailments) deplete the body’s natural Ojas.',
    symptoms: [
      'Chronic lethargy, brain fog, and low physical stamina without clear medical reason',
      'Recurring bouts of sleep disorders, severe insomnia, or persistent anxiety',
      'Recurring illnesses that return as soon as previous treatments conclude',
      'Digestive issues linked to unbalanced solar or Martian internal fire (Agni)',
      'Depression and heavy melancholic thoughts tied to lunar afflictions',
    ],
    remedies: [
      {
        name: 'Maha Mrityunjaya Japa & Rudrabhishek',
        desc: 'The supreme life-protecting Vedic mantra of Lord Shiva to rejuvenate vitality and ward off critical illnesses.',
      },
      {
        name: 'Surya Upasana for Vitality & Ojas',
        desc: 'Harnessing the cosmic energy of the Sun to rebuild immunity, bone strength, and mental fortitude.',
      },
      {
        name: 'Chandra Shanti for Mental Peace',
        desc: 'Remedies to soothe an agitated Moon, calming anxiety, emotional stress, and panic reactions.',
      },
      {
        name: 'Ayurvedic Dosha Balancing Guidance',
        desc: 'Harmonizing Vata, Pitta, and Kapha tendencies according to your planetary constitution.',
      },
    ],
    howItWorks: [
      'Ayur-Jyotish evaluation of the 1st (Vitality), 6th (Diseases), and 8th houses',
      'Assessment of planetary Dashas influencing physical resilience',
      'Chanting schedules and energized herbal/gemstone recommendations',
      'Guidance complementing professional medical care for holistic restoration',
    ],
    testimonial: {
      quote: 'I had been struggling with severe chronic sleep issues and panic attacks for over two years. Pandith Vikram explained how my afflicted Moon transit was triggering it. His Maha Mrityunjaya remedies brought me the first peaceful night of sleep in years.',
      client: 'Meera K.',
      location: 'Ilford, London, UK',
    },
    faqs: [
      {
            "question": "Does Ayur-Jyotish replace medical diagnosis or modern hospital care?",
            "answer": "No. Pandith Vikram firmly emphasizes that medical treatments and qualified physicians must always be consulted for all physical illnesses. Ayur-Jyotish works in tandem as complementary spiritual support, identifying subtle planetary root causes, optimizing treatment timing, and strengthening the body\u2019s innate vitality (Prana)."
      },
      {
            "question": "Which planetary cycles trigger chronic fatigue, emotional anxiety, and insomnia?",
            "answer": "The Moon (Chandra) rules the mind and fluids; Sun (Surya) governs vital stamina; and Saturn/Rahu cause chronic exhaustion and mental restlessness. Afflictions to the Lagna (1st house) or Moon during adverse Dashas frequently manifest as chronic malaise. Pandith Vikram prescribes Chandra Shanti and Surya Arghya to revitalize physical and mental vitality."
      },
      {
            "question": "How does the Maha Mrityunjaya Mantra support healing and longevity?",
            "answer": "The Maha Mrityunjaya Mantra is the supreme Vedic healing hymn dedicated to Lord Shiva. Energized recitation and homams neutralize Maraka (death-inflicting) planetary periods, clearing negative karmic imprints and instilling profound physical and psychological resilience."
      }
],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pooja_and_Havan_Kund_1.jpg',
        fallbackUrl: '/images/shiva-sacred-blessing.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Sacred Rudrabhishek & Bilva Patra Altar',
        caption: 'Maha Mrityunjaya Rudrabhishek offering altar with bilva leaves and sacred water for vitality and healing.',
        source: 'Wikimedia Commons',
        license: 'Public Domain',
        alt: 'Maha Mrityunjaya Rudrabhishek offering altar with bilva leaves and sacred water for vitality and healing.',
      },
      {
        url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/wellness.webp',
        category: 'Real-Life Transformation',
        title: 'Sunrise Yoga & Pranic Herbal Rejuvenation',
        caption: 'Holistic dawn meditation and Ayurvedic wellness practice reviving physical Ojas stamina.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Holistic dawn meditation and Ayurvedic wellness practice reviving physical Ojas stamina.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA09178/PIA09178~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Cosmic Helix Nebula Life-Force Envelope',
        caption: 'NASA Spitzer and Hubble composite of Helix Nebula, representing the celestial cosmic eye and revitalizing Prana life-force.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA Helix Nebula infrared celestial eye representing rejuvenation, longevity, and vital cosmic breath.',
      },
    ],
  },

  'court-case-problems': {
    id: 'court-case-problems',
    title: 'Court Case',
    subtitle: 'Problems',
    img: '/images/court.webp',
    desc: 'Clear guidance and ancient Baglamukhi rituals when navigating false accusations, disputes, and legal concerns.',
    category: 'Legal Protection & Baglamukhi Sadhana',
    deity: 'Maa Baglamukhi (Pitambari Devi) & Shatru Nashak',
    theme: {
      primaryGradient: 'from-[#1C1401] via-[#2D1F00] to-[#713F12]',
      heroBg: '#2D1F00',
      accentColor: '#EAB308',
      accentBorder: 'border-[#FACC15]',
      badgeBg: 'bg-[#A16207]',
      badgeText: 'text-yellow-100',
      badgeBorder: 'border-[#FACC15]',
      testimonialBg: 'bg-[#713F12]',
      testimonialBorder: 'border-[#FACC15]',
      cardBorderHover: 'hover:border-[#FACC15]',
      glowColor: 'rgba(234, 179, 8, 0.25)',
    },
    planetaryCause: 'The 6th house (Shatru Bhava) governs enemies and litigation, the 8th house indicates court complications, and the 12th house represents confinement or heavy legal fees. Malefic Mars and Saturn transits or an afflicted Sun can leave an individual vulnerable to prolonged false court cases and judicial delays.',
    symptoms: [
      'Entanglement in drawn-out legal battles that drain financial reserves and peace of mind',
      'False allegations or malicious lawsuits filed by envious competitors or disgruntled partners',
      'Unexpected postponements and biased testimonies threatening favorable verdicts',
      'Anxiety regarding custody battles, divorce settlements, or commercial litigation',
      'Feeling that the opponent possesses unfair advantages or corrupt influence',
    ],
    remedies: [
      {
        name: 'Maa Baglamukhi Shatru Nashak Puja',
        desc: 'The paramount goddess of victory in litigation, invoked to paralyze the malicious speech and intent of opponents.',
      },
      {
        name: '6th House Shatru Shanti Ritual',
        desc: 'Vedic pacification to dismantle the active karmic enmity fueling legal opposition.',
      },
      {
        name: 'Surya (Sun) Strengthening for Judicial Favor',
        desc: 'Aligning with the solar principle of truth and dharma so judges recognize the honesty of your case.',
      },
      {
        name: 'Auspicious Hearing Date Timing',
        desc: 'Astrological Muhurat calculations for filing appeals, signing depositions, and attending hearings.',
      },
    ],
    howItWorks: [
      'Astrological forensic review of the 6th, 8th, and 12th houses',
      'Identification of enemy planetary periods and favorable judicial transits',
      'Performance of consecrated Baglamukhi mantras and protective shielding',
      'Strategic tactical guidance for key legal dates and negotiations',
    ],
    testimonial: {
      quote: 'I was trapped in a malicious business lawsuit in the UK for over 3 years that seemed endless. Pandith Vikram performed a dedicated Baglamukhi puja for my case. Within two court dates, the opposition agreed to an honorable out-of-court settlement.',
      client: 'Vikramjit Singh',
      location: 'Birmingham, UK',
    },
    faqs: [
      {
            "question": "Can Vedic astrology predict the likely trajectory and timeline of an active legal dispute?",
            "answer": "Yes. The 6th house (Shatru Bhava) governs court litigation, enemies, and disputes, while the 9th house reflects legal justice and judges. By analyzing these houses and Mars (Mangal - courage/litigation), Pandith Vikram forecasts favorable negotiation windows, trial dates, and settlement opportunities."
      },
      {
            "question": "How does Maa Baglamukhi propitiation assist in overcoming hostile opponents and false allegations?",
            "answer": "Goddess Baglamukhi is revered as the deity of Stambhana (paralyzing hostile intentions). Consecrated Baglamukhi rituals silence malicious slander, dissolve fabricated allegations, and tilt judicial clarity in favor of truthful, righteous outcomes."
      },
      {
            "question": "What should I do if a legal case has been dragging on for years without resolution?",
            "answer": "Prolonged litigation usually coincides with slow-moving Saturn or Ketu transits across the 6th or 8th house. Pandith Vikram prescribes specific Tuesday and Saturday remedial sankalpas designed to break legal stagnation and achieve an honorable out-of-court settlement or decisive victory."
      }
],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/ritual.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Maa Baglamukhi Turmeric Root & Diya Puja',
        caption: 'Maa Baglamukhi Pitambari puja altar with sacred turmeric roots and yellow blossoms for legal triumph.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Maa Baglamukhi Pitambari puja altar with sacred turmeric roots and yellow blossoms for legal triumph.',
      },
      {
        url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/court.webp',
        category: 'Real-Life Transformation',
        title: 'Dignified Legal Resolution & Balanced Justice',
        caption: 'Classical courtroom pillars and balanced scales of justice symbolizing honorable verdict and settlement.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Classical courtroom pillars and balanced scales of justice symbolizing honorable verdict and settlement.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA04591/PIA04591~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Planet Mars (Mangal) Victorious Red Globe',
        caption: 'NASA Hubble full-globe portrait of planet Mars (Mangal), celestial commander granting unyielding courage, truth, and judicial victory.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA high-definition full globe of planet Mars Mangal significator of courage and victory over opponents.',
      },
    ],
  },

  'property-land-disputes': {
    id: 'property-land-disputes',
    title: 'Property &',
    subtitle: 'Land Disputes',
    img: '/images/home.webp',
    desc: 'Astrological insight for property decisions, boundary conflicts, delayed sales, and comprehensive Vastu harmony.',
    category: 'Bhumi Dosha & Vastu Astrology',
    deity: 'Bhumi Devi, Lord Varaha & Mangal Dev (Mars - Bhumi Karaka)',
    theme: {
      primaryGradient: 'from-[#1A0903] via-[#2E1005] to-[#7C2D12]',
      heroBg: '#2E1005',
      accentColor: '#FB923C',
      accentBorder: 'border-[#FB923C]',
      badgeBg: 'bg-[#9A3412]',
      badgeText: 'text-orange-100',
      badgeBorder: 'border-[#FB923C]',
      testimonialBg: 'bg-[#7C2D12]',
      testimonialBorder: 'border-[#FB923C]',
      cardBorderHover: 'hover:border-[#FB923C]',
      glowColor: 'rgba(251, 146, 60, 0.25)',
    },
    planetaryCause: 'The 4th house (Sukha Bhava & Land/Vehicles) and Mars (Bhumi Karaka - significator of real estate) govern landed properties. When Mars is debilitated, afflicted by Saturn, or when the 4th house suffers from Bhumi Dosha, property purchases get frozen, inheritance conflicts erupt, and land sales stall.',
    symptoms: [
      'Properties listed on the market for months or years without serious buyers or final closures',
      'Bitter inheritance or ancestral property disputes between siblings and relatives',
      'Disputes with builders, contractors, or planning permission authorities causing severe delays',
      'Feeling an oppressive, unlucky energy inside a newly purchased flat or house',
      'Loss of money in fraudulent property deposits or encumbered titles',
    ],
    remedies: [
      {
        name: 'Bhumi & Mars (Mangal) Shanti Homa',
        desc: 'Sacred fire sacrifice to honor the earth element and pacify Martian conflicts surrounding physical territory.',
      },
      {
        name: 'Vastu Purusha Mandala Sthapana',
        desc: 'Placing energized lead/copper pyramids and yantras to correct structural Vastu defects without demolition.',
      },
      {
        name: 'Lord Varaha Prayers for Land Reclamation',
        desc: 'Ancient hymns to the third avatar of Lord Vishnu for the swift recovery and clearance of stalled properties.',
      },
      {
        name: 'Auspicious Registry & Griha Pravesh Muhurat',
        desc: 'Selecting mathematically exact astrological moments for deeds, key handovers, and moves.',
      },
    ],
    howItWorks: [
      'Evaluation of the 4th house, Mars placement, and current Dasha cycle',
      'Remote energetic Vastu assessment of property blueprints or photographs',
      'Performance of land pacification and sale-accelerating Vedic remedies',
      'Clear timelines for when market conditions and planetary transits favor successful closure',
    ],
    testimonial: {
      quote: 'We had a commercial property in East London that had sat unsold for 14 months, creating heavy mortgage strain. Pandith Vikram identified a Vastu blockage and performed a Bhumi Puja. We had two competitive offers within 30 days and completed the sale.',
      client: 'Tariq & Shreya',
      location: 'Stratford, London, UK',
    },
    faqs: [
      {
            "question": "Which planets and houses govern real estate, land disputes, and ancestral property?",
            "answer": "Mars (Bhumi Karaka) rules raw land and construction, while the 4th house (Matru & Griha Bhava) governs residential properties and happiness. The 8th house oversees ancestral inheritance. Malefic aspects from Rahu or Saturn often trigger fraudulent claims, boundary conflicts, or delayed probate approvals."
      },
      {
            "question": "How do Vastu Purusha alignments and Mars pacification accelerate stuck property transactions?",
            "answer": "Energetic imbalances in the North-East or South-West quadrants of a plot cause financial inertia and buyer hesitation. Pandith Vikram\u2019s Vastu corrections and Mars Graha Shanti dissolve energetic deadlock, enabling smooth sales at equitable market values."
      },
      {
            "question": "What is the importance of a Shubh Griha Pravesh Muhurat before occupying a new home?",
            "answer": "Entering a home under an auspicious celestial window ensures that the living space is infused with health, peace, and abundance from day one. Pandith Vikram calculates custom Griha Pravesh dates based on your Janam Nakshatra, avoiding malefic Rahu Kaal and eclipse hours."
      }
],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vastu_Purusha_Vis%C3%A3o_Dorsal.jpg',
        fallbackUrl: '/images/ritual.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Sacred Vastu Purusha Mandala Diagram',
        caption: 'Sacred Vastu Purusha Mandala grid for architectural harmony, land clearing, and Bhumi Dosha remedies.',
        source: 'Wikimedia Commons',
        license: 'CC-BY-SA 4.0',
        alt: 'Sacred Vastu Purusha Mandala grid for architectural harmony, land clearing, and Bhumi Dosha remedies.',
      },
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/home.webp',
        category: 'Real-Life Transformation',
        title: 'Auspicious New Home Ownership & Key Handover',
        caption: 'Keys to a beautiful newly acquired residential home doorstep symbolizing successful property settlement.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Keys to a beautiful newly acquired residential home doorstep symbolizing successful property settlement.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/as17-148-22727/as17-148-22727~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Planet Earth "Blue Marble" From Space',
        caption: 'NASA Apollo 17 historic "Blue Marble" view of Mother Earth, honoring Bhumi Devi, goddess of territory and soil.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA Apollo 17 iconic Blue Marble photograph of Earth honoring Bhumi Devi the goddess of land and shelter.',
      },
    ],
  },

  'get-ex-love-back': {
    id: 'get-ex-love-back',
    title: 'Get Ex Love',
    subtitle: 'Back',
    img: '/images/heartbreak.webp',
    desc: 'Specialized Vedic Vashikaran, Venus attraction remedies, and spiritual healing to reunite separated lovers and heal past hurt.',
    category: 'Vedic Love Reunion',
    deity: 'Kamadeva & Rati Devi (Satvik Vashikaran & Shukra Dev)',
    theme: {
      primaryGradient: 'from-[#220006] via-[#38000A] to-[#881337]',
      heroBg: '#38000A',
      accentColor: '#E11D48',
      accentBorder: 'border-[#FB7185]',
      badgeBg: 'bg-[#9F1239]',
      badgeText: 'text-rose-100',
      badgeBorder: 'border-[#FB7185]',
      testimonialBg: 'bg-[#881337]',
      testimonialBorder: 'border-[#FB7185]',
      cardBorderHover: 'hover:border-[#FB7185]',
      glowColor: 'rgba(225, 29, 72, 0.25)',
    },
    planetaryCause: 'Sudden romantic breakups typically occur during harsh Ketu or Rahu transits impacting Venus, or when Saturn separates the Moon from the 7th house lord. These planetary currents create intense sudden resentment, impulsive anger, and psychic distance, making reconciliation seem impossible through normal dialogue alone.',
    symptoms: [
      'Your partner abruptly ended the relationship without clear explanations or closure',
      'Complete communication blackout—blocked on WhatsApp, phone, and social media channels',
      'Third-party interference, toxic friends, or family disapproval poisoning their mind against you',
      'Enduring deep heartbreak, obsession, and the inability to move on without them',
      'Regret over past misunderstandings and wanting a genuine, loving second chance',
    ],
    remedies: [
      {
        name: 'Satvik Vashikaran & Mohini Mantra Sadhana',
        desc: 'Pure, dharmic Vedic attraction mantras that rekindle dormant love, tenderness, and fond memories in the partner’s heart without harmful side-effects.',
      },
      {
        name: 'Shukra (Venus) & Kamadeva Healing Ritual',
        desc: 'Elevating the magnetic attraction and physical/emotional resonance between your soul and your partner’s soul.',
      },
      {
        name: 'Third-Party Clearance & Negative Influence Shield',
        desc: 'Spiritual remedies to detach toxic rivals or ill-wishing associates who drove a wedge between you.',
      },
      {
        name: 'Heart Chakra Emotional Healing & Forgiveness Prayers',
        desc: 'Clearing bitterness, trauma, and lingering resentment from previous fights.',
      },
    ],
    howItWorks: [
      'Deep astrological examination of both lovers’ birth dates and horoscope charts',
      'Determining if your karmic bond (Rinanubandha) allows lifelong reunion',
      'Initiation of powerful Vedic love mantras and sanctified rituals',
      'Step-by-step guidance on the exact auspicious day and words to use when re-establishing contact',
    ],
    testimonial: {
      quote: 'My partner had blocked me completely for five months after a terrible argument, and another person was trying to get in between. Pandith Vikram did a dedicated love reunion ritual for us. Two weeks later, he unblocked me and called, apologizing with tears. We are now happily engaged.',
      client: 'Chloe & Arjun',
      location: 'Central London, UK',
    },
    faqs: [
      {
            "question": "How is Vedic Love Restoration fundamentally different from forceful black magic or coercive rituals?",
            "answer": "Vedic love restoration focuses entirely on resolving negative planetary afflictions, dissolving mutual misunderstandings, and awakening genuine soul affection through sacred Shukra (Venus) and Kamakhya mantras. It respects free will and creates an authentic, lasting reunion built on mutual forgiveness and respect, rather than temporary, dangerous obsession."
      },
      {
            "question": "Can a reunion reading be performed if my ex-partner has blocked me everywhere and refuses to speak?",
            "answer": "Yes. In Vedic astrology, sudden blocking and hostile silence often correspond to intense transit afflictions (such as Rahu or Mars influencing the 7th house). Pandith Vikram assesses the chart to determine if the soul connection remains open, performing distance pacification rituals that dissolve pride, anger, and third-party interference."
      },
      {
            "question": "What information do I need to share with Pandith Vikram for an ex-love consultation?",
            "answer": "You will need your birth details (date, time, and city) and, if possible, your partner's details. If your partner's birth time is unknown, a clear photograph and full name suffice for Pandith Vikram to examine the energetic bond through Prashna astrology."
      },
      {
            "question": "What happens after the relationship is restored \u2014 will the problems return?",
            "answer": "To prevent recurrent misunderstandings, Pandith Vikram provides an energized Vedic relationship protective kavach and practical astrological counsel on navigating upcoming sensitive transit dates, ensuring lifelong harmony and commitment."
      }
],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/candles.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Kamadeva Love Attraction Diya & Flowers',
        caption: 'Vedic Kamadeva attraction ritual setup with glowing flames and pink blossom garlands to reignite love.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Vedic Kamadeva attraction ritual setup with glowing flames and pink blossom garlands to reignite love.',
      },
      {
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/love-couple-reunion.webp',
        category: 'Real-Life Transformation',
        title: 'Heartfelt Lovers Reunion at Sunset',
        caption: 'Deep emotional hug between reunited lovers at sunset, melting past heartbreak and estrangement.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Deep emotional hug between reunited lovers at sunset, melting past heartbreak and estrangement.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA13123/PIA13123~orig.jpg',
        fallbackUrl: '/images/astronomical-red-nebula.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Heart Nebula (IC 1805) Cosmic Hydrogen Cloud',
        caption: 'NASA WISE infrared portrait of the Heart Nebula (IC 1805), symbolizing cosmic love resonance and enduring soul union.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA WISE space telescope infrared portrait of the Heart Nebula IC 1805 symbolizing eternal soul bonding.',
      },
    ],
  },

  'horoscope-reading': {
    id: 'horoscope-reading',
    title: 'Horoscope',
    subtitle: 'Reading',
    img: '/images/zodiac.webp',
    desc: 'A comprehensive Janam Kundali breakdown including Mahadasha, Sade Sati analysis, and personalized 12-month future forecast.',
    category: 'Complete Janam Kundali',
    deity: 'Navagrahas (The 9 Celestial Deities) & Surya Narayana',
    theme: {
      primaryGradient: 'from-[#03071E] via-[#0B132B] to-[#1C2541]',
      heroBg: '#0B132B',
      accentColor: '#FFD700',
      accentBorder: 'border-[#FFD700]',
      badgeBg: 'bg-[#1E1B4B]',
      badgeText: 'text-amber-200',
      badgeBorder: 'border-[#FFD700]',
      testimonialBg: 'bg-[#0B132B]',
      testimonialBorder: 'border-[#FFD700]',
      cardBorderHover: 'hover:border-[#FFD700]',
      glowColor: 'rgba(255, 215, 0, 0.25)',
    },
    planetaryCause: 'A Vedic Horoscope (Janam Kundali) is the precise celestial map of the 9 Grahas across the 12 Bhavas and 27 Nakshatras at the exact moment and location of your birth. Understanding this divine blueprint unveils your karmic strengths, hidden challenges, health vulnerabilities, and auspicious windows of destiny.',
    symptoms: [
      'Feeling completely lost or indecisive regarding major life choices and next moves',
      'Curiosity regarding when marriage, children, property purchases, or wealth will arrive',
      'Enduring recurring patterns of failure despite maximum effort in career or business',
      'Undergoing the challenging 7.5-year cycle of Shani Sade Sati or Rahu Mahadasha',
      'Seeking to discover your true spiritual path, purpose, and natural talents',
    ],
    remedies: [
      {
        name: 'Complete 12-House Astrological Breakdown',
        desc: 'Exhaustive examination covering health, wealth, relationships, longevity, spiritual evolution, and foreign travel.',
      },
      {
        name: 'Vimshottari Dasha & Antardasha Timeline Mapping',
        desc: 'Precise chronological roadmap of the next 1-5 years, highlighting high-luck and low-risk planetary periods.',
      },
      {
        name: 'Authentic Gemstone (Ratna) Recommendation',
        desc: 'Scientific selection of natural gemstones (Ruby, Yellow Sapphire, Blue Sapphire, Emerald) energized during specific planetary horas.',
      },
      {
        name: 'Personalized Daily Mantra & Charity Prescription',
        desc: 'Easy-to-follow spiritual practices aligned with your Ishta Devata to ensure ongoing divine protection.',
      },
    ],
    howItWorks: [
      'Verification of accurate date, time, and city of birth for precise Ascendant (Lagna) calculation',
      'Mathematical generation of Rashi (D1), Navamsha (D9), and Dashamsha (D10) charts',
      'One-on-one confidential consultation with Pandith Vikram (in-person or telephone)',
      'Detailed remedies, dates, and actionable answers to your top questions provided in writing',
    ],
    testimonial: {
      quote: 'Pandith Vikram’s Janam Kundali reading was the most accurate consultation I have ever received. He accurately told me events from my past that nobody knew, and predicted my overseas relocation date to the exact month. Invaluable guidance.',
      client: 'Kavita Sharma',
      location: 'Richmond, London, UK',
    },
    faqs: [
      {
            "question": "What comprehensive insights does a full Janam Kundali consultation provide?",
            "answer": "A complete life reading analyzes all 12 Bhavas of your birth chart, detailing career trajectory, wealth accumulation, marriage timing and partner compatibility, health vulnerabilities, foreign travel, and spiritual evolution. It also maps your upcoming 5-year Vimshottari Dasha timeline."
      },
      {
            "question": "What if I do not have an exact birth time recorded on my hospital certificate?",
            "answer": "Pandith Vikram specializes in Birth Time Rectification (Nashta Jataka) through detailed verification of major past life events, alongside Prashna Horary Astrology (the planetary chart cast at the query moment) and Palmistry to provide exceptionally precise guidance."
      },
      {
            "question": "How does Vedic Sidereal astrology differ from Western Tropical astrology or tarot cards?",
            "answer": "Western astrology uses a fixed seasonal calendar, whereas Vedic (Sidereal) astrology calculates the actual visible astronomical positions of the planets and stars against the 27 Nakshatras. Vedic astrology also incorporates the unmatched Dasha system, allowing for chronological precision down to specific months and weeks."
      }
],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/astrology-chart.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Janam Kundali Manuscript & Astrological Calculations',
        caption: 'Traditional Janam Kundali birth horoscope chart parchment with sacred mathematical calculations and celestial houses.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Traditional Janam Kundali birth horoscope chart manuscript with sacred astronomical planetary calculations.',
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/horoscope-reading.webp',
        category: 'Real-Life Transformation',
        title: 'Spiritual Revelation Under Starlit Canopy',
        caption: 'Contemplative seeker experiencing profound cosmic clarity and peace under a brilliant starlit sky.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Contemplative seeker experiencing profound cosmic clarity and peace under a brilliant starlit sky.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~orig.jpg',
        fallbackUrl: '/images/astrological-zodiac-wheel.svg',
        category: 'Astrological & Planetary Iconography',
        title: 'Deep Space Zodiac Constellations & Star Field',
        caption: 'NASA Goddard deep-space astronomical survey revealing the starry constellations of the 12 rashis and celestial wheel.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA deep space starry cosmic starfield representing the 12 zodiac rashis and 27 nakshatras.',
      },
    ],
  },
}
