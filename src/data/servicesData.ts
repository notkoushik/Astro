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
    title: 'Love &',
    subtitle: 'Relationship Healing',
    img: '/images/couple.webp',
    desc: 'Bring warmth, honesty and steady affection back into your relationship through a careful reading of both partners’ charts and gentle Vedic remedies.',
    category: 'Couples Harmony Reading',
    deity: 'Shukra Deva (Venus), Kamadeva & Rati',
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
    planetaryCause: 'The 7th house of your chart describes how you partner with someone, and Venus (Shukra) shows how you give and receive affection. When Mars heats up that house, Saturn cools Venus, or the Rahu–Ketu axis passes across it, couples often slip into cycles of mistrust, silent treatment and arguments over small things. Knowing which planet is responsible tells us what kind of support the relationship actually needs.',
    symptoms: [
      'Conversations that used to feel easy now end in tension or silence',
      'The same old argument returns no matter how often you settle it',
      'A friend, relative or ex keeps shaping how your partner sees you',
      'Affection, closeness and small daily kindnesses have faded away',
      'You still love each other but feel stuck and unsure how to reconnect',
    ],
    remedies: [
      {
        name: 'Venus Strengthening Puja',
        desc: 'A dedicated puja for Shukra that softens harsh planetary pressure on your bond and encourages tenderness, patience and attraction.',
      },
      {
        name: 'Couple’s Harmony Mantra Plan',
        desc: 'A short daily mantra routine chosen for both partners’ charts, designed to calm reactive moods and reopen honest conversation.',
      },
      {
        name: 'Joint Chart Dosha Balancing',
        desc: 'Targeted remedies for doshas that appear when your two charts are read together and keep triggering the same conflicts.',
      },
      {
        name: 'Home Energy Refresh for Couples',
        desc: 'Simple Vedic cleansing steps for your bedroom and shared living space to clear lingering heaviness after a difficult season.',
      },
    ],
    howItWorks: [
      'Private review of both partners’ birth charts',
      'Pinpointing the planets straining your 7th house',
      'A personal remedy and mantra plan for you both',
      'Follow-up check-ins as your relationship settles',
    ],
    testimonial: {
      quote: 'We had been together six years and were barely speaking. Panditji looked at both our charts, explained that a Mars period was making us both defensive, and gave us a simple routine to follow. Within a month the fights had slowed down and we were laughing together again.',
      client: 'Neha & Arjun S.',
      location: 'Irvine, CA',
    },
    faqs: [
      {
        question: 'My partner has become distant. Can a chart reading explain why?',
        answer: 'Often, yes. Emotional distance frequently lines up with a difficult transit over the 7th house or pressure on Venus in one or both charts. Pandith Vikram identifies which influence is active, roughly how long it is likely to last, and which remedies can help you reconnect in the meantime.',
      },
      {
        question: 'Will the remedies force my partner to feel a certain way?',
        answer: 'No. Every remedy Pandith Vikram prescribes is Sattvic, meaning devotional and non-manipulative. The aim is to ease the planetary pressure on your relationship so that both of you can respond with patience and goodwill. Free will is always respected.',
      },
      {
        question: 'Do I need my partner’s birth details?',
        answer: 'They help, but they are not essential. If you only have your own details, Pandith Vikram can work from your chart together with a Prashna (question-moment) chart, plus palm or face reading when you meet in person or over video.',
      },
      {
        question: 'How soon might we notice a change?',
        answer: 'Many couples say the atmosphere at home feels lighter within the first couple of weeks. Deeper change usually follows a full remedy cycle of 21 to 41 days. Every chart is different, so Pandith Vikram will give you an honest timeline after your reading.',
      },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/candles.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Venus Puja Altar with Rose Petals',
        caption: 'A brass diya and fresh rose petals prepared for a Shukra puja dedicated to a couple’s harmony.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Brass diya and rose petals arranged for a Venus puja for relationship harmony.',
      },
      {
        url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/couple.webp',
        category: 'Real-Life Transformation',
        title: 'Couple Reconnecting at Golden Hour',
        caption: 'A couple holding hands in warm evening light, a picture of trust returning to a relationship.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Couple holding hands in warm evening light after reconnecting.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA00104/PIA00104~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Venus, the Planet of Affection',
        caption: 'NASA radar image of Venus, the planet Vedic astrology links with love, beauty and partnership.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA radar image of the planet Venus, linked with love in Vedic astrology.',
      },
    ],
  },

  'marriage-compatibility': {
    id: 'marriage-compatibility',
    title: 'Marriage &',
    subtitle: 'Kundali Matching',
    img: '/images/wedding.webp',
    desc: 'Detailed Kundali matching, Manglik checks and auspicious wedding dates, so you can begin married life with clarity and your families’ blessings.',
    category: 'Vivah Compatibility Analysis',
    deity: 'Guru Brihaspati (Jupiter) with Shiva & Parvati',
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
    planetaryCause: 'A lasting marriage is read through Jupiter (Guru), Venus, and the 2nd, 7th and 8th houses, which cover family life, partnership and long-term commitment. Mars placed in the 1st, 4th, 7th, 8th or 12th house creates Manglik (Kuja) Dosha, while Nadi or Bhakoot mismatches can lower a Guna score. These factors can delay a wedding or create friction later, but most of them can be assessed accurately and balanced.',
    symptoms: [
      'Promising marriage proposals fall through at the last minute',
      'A Manglik or Kuja Dosha result has worried one or both families',
      'Your Guna Milan score came back low and you don’t know what it means',
      'Ego clashes and cold silences have crept into your married life',
      'In-laws or relatives keep stepping into decisions that belong to you two',
    ],
    remedies: [
      {
        name: 'Manglik Dosha Shanti',
        desc: 'Traditional pacification rituals, including Kumbh Vivah where appropriate, that cool an over-active Mars before or after the wedding.',
      },
      {
        name: 'Uma-Maheshwar Puja for Couples',
        desc: 'Prayers to Lord Shiva and Goddess Parvati, the ideal divine couple, asking for patience, loyalty and a peaceful home.',
      },
      {
        name: 'Guru Graha Blessing & Yantra',
        desc: 'A consecrated Jupiter yantra and, where suitable, a gemstone suggestion to bring wisdom, tolerance and good fortune into family life.',
      },
      {
        name: 'Wedding Muhurat Selection',
        desc: 'Careful calculation of auspicious dates and times for your roka, engagement and wedding ceremonies, in California or in India.',
      },
    ],
    howItWorks: [
      'Full 36-point Ashtakoota Guna Milan',
      'Navamsha (D9) review of long-term marriage karma',
      'Dosha check with clear, practical remedies',
      'Auspicious dates for engagement and wedding',
    ],
    testimonial: {
      quote: 'Our Guna score was only 16 and my parents were ready to call off the match. Panditji walked both families through the Navamsha charts, showed that Jupiter canceled most of the concern, and suggested a short shanti puja. We were married last spring with everyone’s blessing.',
      client: 'Riya & Karan M.',
      location: 'Fremont, CA',
    },
    faqs: [
      {
        question: 'Our Guna Milan score is below 18. Should we cancel the match?',
        answer: 'Not necessarily. The Guna score is only one part of compatibility. Pandith Vikram also reviews the Navamsha chart, the 7th house in both charts and any cancellations (Dosha Bhanga) before giving an opinion. Many lower-scoring matches turn out to be strong once the full picture is considered.',
      },
      {
        question: 'One of us is Manglik. What does that really mean?',
        answer: 'Manglik Dosha means Mars sits in a house that can bring intensity into married life. It is very common and is often canceled by other placements. Where it is active, Pandith Vikram recommends specific Mangal shanti remedies so that the energy works for the marriage rather than against it.',
      },
      {
        question: 'Can you help when our families come from different communities or faiths?',
        answer: 'Yes. Family resistance often shows up through the 4th and 9th houses in the charts. Pandith Vikram offers calm, practical guidance alongside Jupiter and Moon remedies that help parents listen, soften and come around to the relationship.',
      },
    ],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pooja_and_Havan_Kund_1.jpg',
        fallbackUrl: '/images/ritual.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Sacred Fire for a Vedic Wedding',
        caption: 'A havan kund with consecrated wood, prepared for a Vivah homa that blesses a new marriage.',
        source: 'Wikimedia Commons',
        license: 'CC-BY-SA 4.0 / Public Domain',
        alt: 'Havan kund prepared for a Vedic wedding homa.',
      },
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/indian_wedding_regal.webp',
        category: 'Real-Life Transformation',
        title: 'Bride and Groom in Traditional Attire',
        caption: 'An Indian bride and groom smiling together during their wedding ceremony.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Indian bride and groom smiling in traditional wedding clothes.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA22946/PIA22946~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Jupiter, Planet of Wisdom and Marriage',
        caption: 'NASA Juno image of Jupiter, the planet Vedic astrology calls Guru, protector of marriage and family.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA Juno image of the planet Jupiter, called Guru in Vedic astrology.',
      },
    ],
  },

  'career-business': {
    id: 'career-business',
    title: 'Career &',
    subtitle: 'Business Success',
    img: '/images/career.webp',
    desc: 'Find the right timing for job changes, promotions and new ventures, and clear the planetary blocks that keep your hard work from paying off.',
    category: 'Career & Venture Timing',
    deity: 'Surya (Sun) & Budha (Mercury), Lords of Work and Commerce',
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
    planetaryCause: 'Your 10th House (Karma Bhava) shows career and public reputation. The Sun reflects authority, Mercury governs trade and communication, and Saturn rewards steady effort. When Saturn or Rahu presses on the 10th house, or a tough Mahadasha begins, people often see stalled promotions, sudden layoffs or deals that collapse at the final stage. Knowing which period you are in helps you decide when to push forward and when to hold steady.',
    symptoms: [
      'Your career has hit stagnation even though you work harder than ever',
      'Promotions and leadership roles keep going to someone else',
      'Contracts or funding fall apart just before they close',
      'Office politics or a difficult business partner is wearing you down',
      'You can’t decide between a stable job and starting your own venture',
    ],
    remedies: [
      {
        name: 'Surya Arghya Morning Practice',
        desc: 'A simple sunrise offering and Aditya Hridayam recitation to build confidence, visibility and goodwill from senior leaders.',
      },
      {
        name: 'Mercury Puja for Business Growth',
        desc: 'A ritual for Budha that supports clear communication, sharp negotiation and steady revenue for founders and small business owners.',
      },
      {
        name: 'Saturn Period Relief Remedies',
        desc: 'Practical Shani remedies for Sade Sati or a Saturn Mahadasha, turning slow, frustrating years into a period of solid progress.',
      },
      {
        name: 'Launch & Signing Muhurat',
        desc: 'Auspicious timing for registering an LLC, signing an offer letter, opening a store or announcing a funding round.',
      },
    ],
    howItWorks: [
      'Study of your 10th house and Dashamsha (D10) chart',
      'Review of your current Mahadasha and Antardasha',
      'Gemstone, yantra or mantra matched to your chart',
      'A timeline for job moves, raises or launches',
    ],
    testimonial: {
      quote: 'I was passed over for promotion twice at my tech company and was ready to quit. Panditji showed me that my Saturn period would end within a few months and gave me a morning Surya routine. I stayed, kept working hard, and got the senior role that autumn.',
      client: 'Rahul V.',
      location: 'San Jose, CA',
    },
    faqs: [
      {
        question: 'Should I stay employed or start my own business?',
        answer: 'Your chart can show which path suits you. The 6th house relates to service and employment, while the 7th and 11th houses show independent business and gains. Pandith Vikram compares their strength along with your running Mahadasha to suggest the direction most likely to be stable and rewarding.',
      },
      {
        question: 'How does Sade Sati affect my career?',
        answer: 'Saturn’s seven-and-a-half-year transit tests patience. It can bring restructuring, delays or heavier workloads, but it also rewards discipline. Pandith Vikram gives you practical Shani remedies and a clear sense of which months suit bold moves and which call for steady effort.',
      },
      {
        question: 'Can you choose a good date to launch my company or sign a big deal?',
        answer: 'Yes. A Muhurat aligns the lunar day, nakshatra and planetary hour with your own chart. Pandith Vikram calculates dates and times for incorporations, contract signings, store openings and product launches, adjusted to Pacific Time.',
      },
    ],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/(A)_puja_in_progress_before_Yagam_Yajna.jpg',
        fallbackUrl: '/images/ritual.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Surya Offering for Career Growth',
        caption: 'A puja set up with a copper vessel and offerings for Surya, the planet of authority and recognition.',
        source: 'Wikimedia Commons',
        license: 'CC-BY-SA / Public Domain',
        alt: 'Puja set up with a copper vessel and offerings for the Sun.',
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/career.webp',
        category: 'Real-Life Transformation',
        title: 'Skyline of Professional Growth',
        caption: 'Modern office towers, a symbol of a rising career and an expanding business.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Modern glass office towers representing career growth.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000084/GSFC_20171208_Archive_e000084~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'The Sun, Source of Authority',
        caption: 'NASA Solar Dynamics Observatory image of the Sun, which Vedic astrology links with leadership and status.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA Solar Dynamics Observatory image of the Sun.',
      },
    ],
  },

  'financial-problems': {
    id: 'financial-problems',
    title: 'Money &',
    subtitle: 'Debt Relief',
    img: '/images/finance.webp',
    desc: 'Understand why money slips away, ease the pressure of debt, and strengthen the wealth houses in your chart with Lakshmi and Kubera remedies.',
    category: 'Wealth & Abundance Astrology',
    deity: 'Goddess Lakshmi & Kubera, Keeper of Treasures',
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
    planetaryCause: 'Savings are read from the 2nd house (Dhana Bhava) and regular income from the 11th house (Labha Bhava), with Jupiter acting as the natural indicator of wealth. When Rahu, Ketu or Saturn afflict these houses, or Kemadruma Yoga leaves the Moon unsupported, money tends to leak away through surprise bills, loans that never seem to shrink and investments that disappoint.',
    symptoms: [
      'Your paycheck seems to vanish on surprise expenses every month',
      'Credit card balances and loans keep growing despite your best efforts',
      'Investments, real estate deals or side businesses keep losing money',
      'Clients or borrowers keep delaying payments they owe you',
      'You earn well but somehow never manage to build savings',
    ],
    remedies: [
      {
        name: 'Lakshmi-Kubera Yantra Installation',
        desc: 'A consecrated copper yantra placed in the north-east of your home or office to invite stability and a steady inflow of wealth.',
      },
      {
        name: 'Jupiter Abundance Prayers',
        desc: 'Prayers that strengthen Guru, the natural giver of wealth, to support sound decisions and long-term financial security.',
      },
      {
        name: 'Rina Mochana Debt-Relief Homa',
        desc: 'A Vedic fire ritual traditionally performed to ease the karmic weight behind recurring debt and financial obligations.',
      },
      {
        name: 'Nakshatra-Based Charity Plan',
        desc: 'Specific acts of giving, such as food donation, chosen for your birth star to release blocked financial karma.',
      },
    ],
    howItWorks: [
      'Study of your 2nd and 11th wealth houses',
      'Checking for Daridra or Kemadruma Yoga',
      'Lakshmi puja and a consecrated yantra for you',
      'Ongoing guidance on timing big money decisions',
    ],
    testimonial: {
      quote: 'Between a restaurant loan and a slow year, I was barely covering payroll. Panditji found the problem in my 2nd house, performed the debt-relief homa and told me which months to avoid new borrowing. By the end of the year our cash flow had turned around and I paid off the largest loan.',
      client: 'Sunil P.',
      location: 'Bakersfield, CA',
    },
    faqs: [
      {
        question: 'Why does money keep slipping away even when I earn well?',
        answer: 'In Vedic astrology, retained wealth depends on the 2nd, 8th, 11th and 12th houses, along with Jupiter. Pressure from Rahu, Ketu or a weak Jupiter can let income drain away through unplanned expenses. Pandith Vikram identifies the exact pattern in your chart and recommends remedies to address it.',
      },
      {
        question: 'What is a Dhana Yoga, and can a weak one be strengthened?',
        answer: 'A Dhana Yoga is a planetary combination that supports wealth, formed between the lords of houses such as the 2nd, 5th, 9th and 11th. When these yogas are weakened by combustion or difficult aspects, Pandith Vikram uses mantras and consecrated Lakshmi-Kubera yantras to help them work more fully.',
      },
      {
        question: 'Will a gemstone help my finances?',
        answer: 'Only if it suits your chart. The wrong stone can make matters worse, which is why Pandith Vikram calculates your beneficial planets before suggesting anything. Please remember that astrology is spiritual guidance and does not replace advice from a licensed financial professional.',
      },
    ],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sri_Yantra_copper.jpg',
        fallbackUrl: '/images/candles.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Copper Sri Yantra for Lakshmi',
        caption: 'A copper Sri Yantra used in prayers to Goddess Lakshmi for prosperity and relief from debt.',
        source: 'Wikimedia Commons',
        license: 'Public Domain',
        alt: 'Copper Sri Yantra used in prayers to Goddess Lakshmi.',
      },
      {
        url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/finance.webp',
        category: 'Real-Life Transformation',
        title: 'Open Hands Holding Abundance',
        caption: 'Golden grain held in open hands, a symbol of steady income and financial relief.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Open hands holding golden grain as a symbol of abundance.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA18904/PIA18904~orig.jpg',
        fallbackUrl: '/images/astronomical-red-nebula.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Golden Star-Forming Cloud',
        caption: 'NASA image of a glowing stellar nursery, a picture of abundance and new beginnings.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA image of a golden star-forming nebula.',
      },
    ],
  },

  'black-magic-removal': {
    id: 'black-magic-removal',
    title: 'Black Magic',
    subtitle: 'Cleansing & Removal',
    img: '/images/fire.webp',
    desc: 'Discreet spiritual assessment and Vedic purification for homes and families troubled by heavy, negative energy or a run of unexplained setbacks.',
    category: 'Spiritual Protection & Purification',
    deity: 'Lord Narasimha, Sudarshana Chakra & Goddess Pratyangira',
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
    planetaryCause: 'Difficult placements such as Rahu in the 8th or 12th house, a Saturn–Rahu conjunction (Shrapit Dosha), or harsh eclipse transits can leave a person more sensitive to the negativity around them, whether that is envy, hostility or a heavy atmosphere at home. Vedic tradition meets these periods with protective, devotional remedies rather than fear.',
    symptoms: [
      'A constant heaviness, poor sleep and disturbing nightmares',
      'Health, money and relationships all seem to go wrong at once',
      'Your home feels tense, cold or unwelcoming, especially at night',
      'Ongoing exhaustion that check-ups and tests can’t explain',
      'Close family members suddenly turning against one another',
    ],
    remedies: [
      {
        name: 'Sudarshana & Narasimha Protection Homa',
        desc: 'A powerful Vedic fire ritual dedicated to the protective forms of Lord Vishnu, performed to clear negativity and restore a sense of safety.',
      },
      {
        name: 'Pratyangira Raksha Kavach',
        desc: 'A consecrated protective amulet prepared with specific mantras to guard you and your family from ill intentions.',
      },
      {
        name: 'Home & Workplace Purification',
        desc: 'Step-by-step cleansing with sea salt, mustard seed, camphor and Vedic chants to refresh the energy of a house or business.',
      },
      {
        name: 'Aura Restoration Practice',
        desc: 'Breathing, mantra and daily prayer routines that rebuild your personal energy and keep negativity from settling back in.',
      },
    ],
    howItWorks: [
      'Confidential reading of your chart and situation',
      'Identifying the nature and source of the disturbance',
      'Protective rituals and mantra chanting performed',
      'A consecrated Raksha Kavach sent to your home',
    ],
    testimonial: {
      quote: 'For months our house felt heavy. My son had nightmares, my husband’s business lost two big accounts and we argued constantly. Panditji performed a protection homa and taught us a daily cleansing routine. The heaviness lifted, and our home finally feels like ours again.',
      client: 'Jaspreet K.',
      location: 'Cerritos, CA',
    },
    faqs: [
      {
        question: 'How can I tell ordinary stress from negative energy?',
        answer: 'Always rule out medical and practical causes first. When problems arrive suddenly and from every direction, and the home itself feels oppressive, Pandith Vikram checks your 8th house, the Rahu–Ketu axis and Gulika placement to see whether a spiritual disturbance is indicated.',
      },
      {
        question: 'Is the cleansing safe for my family?',
        answer: 'Yes. Pandith Vikram uses only protective, devotional Vedic procedures dedicated to Narasimha, Sudarshana and Pratyangira. Nothing harmful is directed at anyone. The purpose is to purify, protect and bring peace back to your household, and every detail stays confidential.',
      },
      {
        question: 'Can this be done if I live outside Los Angeles?',
        answer: 'Yes. Clients from San Diego to the Bay Area, and some in other states, are helped remotely. The homa is performed using your name, photograph, birth chart and family lineage (gotra), and the energized kavach and instructions are shipped to your door.',
      },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/fire.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Sacred Fire for Protection',
        caption: 'Flames rising from a Vedic homa kund during a protective fire ritual.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Flames rising from a Vedic fire ritual for protection.',
      },
      {
        url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/hero-slide-fire.webp',
        category: 'Real-Life Transformation',
        title: 'Peace After Purification',
        caption: 'A person meditating calmly in soft morning light after spiritual cleansing.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Person meditating peacefully in soft morning light.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA19821/PIA19821~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Eclipse Diamond Ring',
        caption: 'NASA photograph of a total solar eclipse, a reminder that light always returns after darkness.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA photograph of the diamond ring effect during a total solar eclipse.',
      },
    ],
  },

  'evil-eye-protection': {
    id: 'evil-eye-protection',
    title: 'Evil Eye &',
    subtitle: 'Nazar Remedies',
    img: '/images/eye.webp',
    desc: 'Gentle, traditional remedies to shield you, your children and your business from jealousy, Nazar and the drain of other people’s envy.',
    category: 'Drishti Dosha Protection',
    deity: 'Lord Hanuman & Drishti Ganapati',
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
    planetaryCause: 'Nazar, or Drishti Dosha, is felt most strongly by people whose Moon (Chandra) is sensitive or whose Lagna (Ascendant) is under pressure. Tradition holds that intense envy carries a heavy energy, and when it lands on someone in this state it can show up as sudden illness, small accidents or a run of bad luck right after good news.',
    symptoms: [
      'Headaches, nausea or fatigue right after a party or public event',
      'Babies or small children crying for hours with no clear reason',
      'A newly busy shop or business suddenly losing customers',
      'Mirrors, glasses or car parts cracking or breaking repeatedly',
      'Unusual anxiety and self-doubt after sharing good news',
    ],
    remedies: [
      {
        name: 'Traditional Nazar Utara Ritual',
        desc: 'A time-honored cleansing with salt, dried red chilies and a lit lamp, circled around the person to draw envious energy away.',
      },
      {
        name: 'Hanuman Raksha Yantra',
        desc: 'A Hanuman yantra energized with the Hanuman Chalisa to bring courage and a strong protective presence to your home.',
      },
      {
        name: 'Drishti Ganapati at the Entrance',
        desc: 'A consecrated Drishti Ganapati placed at your front door or shop entrance so that envy is stopped at the threshold.',
      },
      {
        name: 'Raksha Sutra & Protective Stones',
        desc: 'Protective threads tied at an auspicious hour, with black tourmaline or other stones suggested to suit your chart.',
      },
    ],
    howItWorks: [
      'Checking your Moon and Lagna for sensitivity',
      'Understanding when and where the trouble began',
      'Immediate cleansing of heavy, stagnant energy',
      'Long-term protection with yantras and threads',
    ],
    testimonial: {
      quote: 'Every time my boutique in Little India had a good month, I got sick and sales dropped. Panditji explained how Nazar works, did a cleansing for the shop and gave me a Hanuman yantra for the counter. Business has been steady and calm ever since.',
      client: 'Pooja D.',
      location: 'Artesia, CA',
    },
    faqs: [
      {
        question: 'What exactly is Nazar, or the evil eye?',
        answer: 'Nazar (Drishti Dosha) is the traditional belief that strong envy or even excessive admiration from others can unsettle your energy and planetary balance. It tends to show up after visible milestones such as a wedding, a new baby, a promotion or the opening of a business.',
      },
      {
        question: 'How does a Raksha Kavach protect me?',
        answer: 'A Raksha Kavach is a protective amulet consecrated with Vedic mantras at a favorable planetary hour. Worn daily, it acts as a spiritual shield that helps deflect envy and keeps your energy steady.',
      },
      {
        question: 'Can babies, homes and shops be affected?',
        answer: 'Yes. Newborns, expectant mothers, newly bought homes and busy storefronts are traditionally considered the most exposed. Pandith Vikram suggests specific Nazar-removal and Vastu remedies to protect each of them.',
      },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/ritual.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Nazar Cleansing Thali',
        caption: 'A brass plate with a lit camphor flame and kumkum, prepared for a traditional Nazar removal.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Brass thali with a camphor flame prepared for evil eye removal.',
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/eye.webp',
        category: 'Real-Life Transformation',
        title: 'A Calm, Protected Home',
        caption: 'A bright, peaceful living room that feels safe and free of outside negativity.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Bright and peaceful living room in a protected home.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA14021/PIA14021~orig.jpg',
        fallbackUrl: '/images/moon-phases.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'The Full Moon, Guardian of the Mind',
        caption: 'NASA Lunar Reconnaissance Orbiter image of the full Moon, which Vedic astrology links with emotional calm.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA image of the full Moon, linked with emotional calm in Vedic astrology.',
      },
    ],
  },

  'family-child-problems': {
    id: 'family-child-problems',
    title: 'Family &',
    subtitle: 'Children’s Harmony',
    img: '/images/family.webp',
    desc: 'Restore peace at home, ease tension between generations, and find supportive remedies for your children’s focus and for couples hoping to conceive.',
    category: 'Family Peace & Santana Yoga',
    deity: 'Santana Gopala (Bala Krishna) & Goddess Saraswati',
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
    planetaryCause: 'Home life is described by the 4th house (Sukha Bhava), and children, learning and creativity by the 5th house (Putra Bhava). When Rahu, Saturn or Ketu afflict Jupiter or the lord of the 5th house, families can experience constant arguments, a child who struggles to concentrate, or delays for couples hoping to start a family.',
    symptoms: [
      'Constant arguments between parents and children at home',
      'A child or teen who can’t focus, falls behind or rebels',
      'Delays in conceiving despite normal medical reports',
      'Siblings or in-laws locked in disputes over property or care',
      'Home feels tense, with little warmth or laughter left',
    ],
    remedies: [
      {
        name: 'Santana Gopala Homa',
        desc: 'A Vedic fire ritual to Bala Krishna, offered by couples praying for a healthy child and a safe pregnancy.',
      },
      {
        name: 'Saraswati Vandana for Students',
        desc: 'Daily Saraswati and Mercury prayers chosen to help children concentrate, remember and feel confident at school.',
      },
      {
        name: 'Generational Peace Puja',
        desc: 'A puja to calm ancestral and family karma and to heal hurt between elders and the younger generation.',
      },
      {
        name: 'North-East Vastu Reset',
        desc: 'Simple changes to the Ishanya (north-east) corner of your home to invite calm and cooperation.',
      },
    ],
    howItWorks: [
      'Reading parents’ and children’s 4th and 5th houses',
      'Spotting Santana Dosha, Jupiter strain or Vastu faults',
      'Easy daily remedies and, if needed, a homa',
      'Caring follow-up to improve family communication',
    ],
    testimonial: {
      quote: 'Our 15-year-old stopped talking to us and his grades were sliding. Panditji read his chart, explained the Rahu period he was going through, and gave us a short Saraswati practice to do as a family. Slowly he opened up, and his teachers noticed the change before we did.',
      client: 'Anjali R.',
      location: 'Sacramento, CA',
    },
    faqs: [
      {
        question: 'Which planets cause tension within a family?',
        answer: 'The 2nd house reflects family unity, the 4th house domestic peace and the 5th house children. Rahu, Saturn or Mars in these houses can fuel misunderstandings and distance. Pandith Vikram’s remedies aim to restore patience and respectful communication at home.',
      },
      {
        question: 'Can astrology support couples trying to conceive?',
        answer: 'Astrology is not a substitute for fertility care, but it can offer spiritual support alongside it. Pandith Vikram reviews the 5th house, Jupiter, and the Beeja and Kshetra Sphuta in both partners’ charts, then recommends Santana Gopala prayers and related remedies.',
      },
      {
        question: 'Can I do the remedies on behalf of my child?',
        answer: 'Yes. Parents share a close karmic bond with their children. Using your sankalpa (intention) and chart, Pandith Vikram guides you through prayers and acts of charity that support your child’s focus, calm and wellbeing.',
      },
    ],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ganesha_Puja_Setup.jpg',
        fallbackUrl: '/images/candles.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Santana Gopala Altar',
        caption: 'A home altar with a brass lamp, tulsi leaves and milk offerings for a Santana Gopala puja.',
        source: 'Wikimedia Commons',
        license: 'CC-BY-SA / Public Domain',
        alt: 'Home altar with a brass lamp and tulsi leaves for a family puja.',
      },
      {
        url: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/family.webp',
        category: 'Real-Life Transformation',
        title: 'Parents and Child Together',
        caption: 'Smiling parents with their young child, a picture of a warm and peaceful home.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Smiling Indian parents with their young child.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA15985/PIA15985~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Stellar Nursery in Carina',
        caption: 'NASA Spitzer image of the Carina Nebula, where new stars are born, a symbol of new life.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA Spitzer image of the Carina Nebula star-forming region.',
      },
    ],
  },

  'health-wellness': {
    id: 'health-wellness',
    title: 'Wellness &',
    subtitle: 'Peace of Mind',
    img: '/images/wellness.webp',
    desc: 'Ayur-Jyotish insight into low energy, stress and restless sleep, with healing mantras that complement the care you receive from your doctor.',
    category: 'Ayur-Jyotish Wellbeing',
    deity: 'Lord Shiva as Mrityunjaya & Lord Dhanvantari',
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
    planetaryCause: 'In Ayur-Jyotish, the 6th house (Roga Bhava) shows illness and recovery, and the 8th house shows long-term conditions. The Sun governs vitality, the Moon mental balance and Mars physical energy. Pressure from Saturn tends toward slow, lingering fatigue, while Rahu is linked to issues that are hard to pin down; both can drain your natural reserves (Ojas).',
    symptoms: [
      'Persistent tiredness, brain fog or low stamina',
      'Trouble falling asleep, or waking anxious at night',
      'Health concerns that return as soon as one treatment ends',
      'Digestive discomfort tied to an imbalanced inner fire (Agni)',
      'Low moods and heavy thoughts that are hard to shake',
    ],
    remedies: [
      {
        name: 'Mrityunjaya Japa & Abhishekam',
        desc: 'Recitation of the Maha Mrityunjaya mantra with an offering to Lord Shiva, traditionally performed for strength, healing and protection.',
      },
      {
        name: 'Surya Namaskar & Sun Prayers',
        desc: 'Morning Sun salutations and prayers to support vitality, discipline and a more positive outlook.',
      },
      {
        name: 'Moon Calming Remedies',
        desc: 'Chandra remedies such as Monday prayers and pearl or moonstone suggestions to settle a restless, anxious mind.',
      },
      {
        name: 'Dosha-Balancing Lifestyle Tips',
        desc: 'Simple Ayurvedic routines for Vata, Pitta and Kapha matched to your planetary makeup, followed alongside your doctor’s advice.',
      },
    ],
    howItWorks: [
      'Review of the 1st, 6th and 8th houses',
      'Checking Dashas that affect your vitality',
      'Mantra schedule and gemstone suggestions',
      'Guidance that works alongside your medical care',
    ],
    testimonial: {
      quote: 'After two years of poor sleep and constant worry, I was willing to try something alongside my doctor’s plan. Panditji showed me how a Moon transit was affecting me and gave me a simple evening mantra. The first full night of sleep I had in months felt like a gift.',
      client: 'Meera J.',
      location: 'Pasadena, CA',
    },
    faqs: [
      {
        question: 'Does Ayur-Jyotish replace my doctor?',
        answer: 'No. Pandith Vikram always asks clients to follow the advice of qualified physicians. Ayur-Jyotish is complementary spiritual support: it looks at planetary influences, suggests favorable timing and helps you feel more balanced while you receive proper medical care.',
      },
      {
        question: 'Which planets are linked to fatigue, anxiety and poor sleep?',
        answer: 'The Moon governs the mind and the Sun governs vitality, while Saturn and Rahu are associated with long-lasting fatigue and restlessness. When the Lagna or Moon is under pressure during a difficult Dasha, these themes can surface. Remedies such as Chandra Shanti and Surya Arghya are commonly recommended.',
      },
      {
        question: 'What is the Maha Mrityunjaya mantra?',
        answer: 'It is a revered Vedic prayer to Lord Shiva for strength, healing and protection. Regular chanting, or a dedicated japa and homa, is traditionally used during challenging planetary periods to build resilience and peace of mind.',
      },
    ],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pooja_and_Havan_Kund_1.jpg',
        fallbackUrl: '/images/shiva-sacred-blessing.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Abhishekam Altar with Bilva Leaves',
        caption: 'An altar with bilva leaves and sacred water prepared for a Maha Mrityunjaya abhishekam.',
        source: 'Wikimedia Commons',
        license: 'Public Domain',
        alt: 'Altar with bilva leaves prepared for a Shiva abhishekam.',
      },
      {
        url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/wellness.webp',
        category: 'Real-Life Transformation',
        title: 'Sunrise Yoga and Renewal',
        caption: 'A person practicing yoga at sunrise, a picture of restored energy and calm.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Person practicing yoga at sunrise.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA09178/PIA09178~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'The Helix Nebula',
        caption: 'NASA image of the Helix Nebula, a picture of renewal and the life force that sustains us.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA image of the Helix Nebula.',
      },
    ],
  },

  'court-case-problems': {
    id: 'court-case-problems',
    title: 'Legal &',
    subtitle: 'Court Case Guidance',
    img: '/images/court.webp',
    desc: 'Steady spiritual support and Baglamukhi remedies while you face lawsuits, false accusations, custody matters or long-running disputes.',
    category: 'Legal Matters & Baglamukhi Worship',
    deity: 'Goddess Baglamukhi (Pitambara Devi)',
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
    planetaryCause: 'Disputes and opponents are seen in the 6th house (Shatru Bhava), complications and delays in the 8th, and heavy costs or losses in the 12th. Difficult transits of Mars or Saturn, or a weak Sun, often coincide with long, draining cases, repeated postponements and accusations that are hard to shake off.',
    symptoms: [
      'A legal fight that keeps draining your money and energy',
      'False claims made against you by a rival or former partner',
      'Hearings that keep getting postponed or going against you',
      'Stress over custody, divorce settlements or business litigation',
      'A feeling that the other side holds all the advantages',
    ],
    remedies: [
      {
        name: 'Baglamukhi Victory Puja',
        desc: 'Worship of Goddess Baglamukhi, traditionally invoked to quieten hostile speech and false claims made against you.',
      },
      {
        name: 'Shatru Bhava Shanti',
        desc: 'A Vedic ritual to calm the 6th house and reduce the hostility driving the case against you.',
      },
      {
        name: 'Sun Remedies for Truth & Fairness',
        desc: 'Prayers to Surya, the planet of truth, so that your honesty is seen clearly by those making decisions.',
      },
      {
        name: 'Court Date Muhurat Guidance',
        desc: 'Auspicious timing for filing papers, depositions, mediation sessions and important hearings.',
      },
    ],
    howItWorks: [
      'Review of your 6th, 8th and 12th houses',
      'Spotting difficult and favorable periods',
      'Baglamukhi mantras and protective rituals',
      'Timing guidance for key legal dates',
    ],
    testimonial: {
      quote: 'A former partner sued me over our business and the case dragged on for almost three years. Panditji performed a Baglamukhi puja and helped me choose dates for mediation. At the second session, the other side finally agreed to a fair settlement.',
      client: 'Harjit S.',
      location: 'Riverside, CA',
    },
    faqs: [
      {
        question: 'Can astrology show how my case may unfold?',
        answer: 'It can offer useful insight. The 6th house relates to disputes and opponents, and the 9th house to justice. By studying these alongside Mars and your current Dasha, Pandith Vikram can point to favorable windows for negotiation, hearings and settlement. Always follow your attorney’s advice on legal strategy.',
      },
      {
        question: 'Why is Goddess Baglamukhi worshipped in legal matters?',
        answer: 'Baglamukhi is associated with Stambhana, the power to stop hostility in its tracks. Her worship is traditionally performed to calm malicious speech, weaken false allegations and support a fair outcome.',
      },
      {
        question: 'My case has dragged on for years. What can I do?',
        answer: 'Very long disputes often coincide with slow Saturn or Ketu transits over the 6th or 8th house. Pandith Vikram recommends specific Tuesday and Saturday remedies intended to break the deadlock and encourage a settlement or resolution.',
      },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/ritual.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Baglamukhi Puja with Turmeric',
        caption: 'A Baglamukhi altar with turmeric roots and yellow flowers, the goddess’s sacred color.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Baglamukhi altar with turmeric roots and yellow flowers.',
      },
      {
        url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/court.webp',
        category: 'Real-Life Transformation',
        title: 'Scales of Justice',
        caption: 'Courthouse columns and balanced scales, a symbol of a fair and peaceful resolution.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Courthouse columns and balanced scales of justice.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA04591/PIA04591~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Mars, Planet of Courage',
        caption: 'NASA Hubble image of Mars, the planet Vedic astrology links with courage and the strength to face opponents.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA Hubble image of the planet Mars.',
      },
    ],
  },

  'property-land-disputes': {
    id: 'property-land-disputes',
    title: 'Property &',
    subtitle: 'Real Estate Disputes',
    img: '/images/home.webp',
    desc: 'Astrological guidance for buying, selling and inheriting property, resolving boundary or family disputes, and bringing Vastu balance to your home.',
    category: 'Vastu & Property Astrology',
    deity: 'Bhumi Devi, Lord Varaha & Mangal (Mars)',
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
    planetaryCause: 'Property is read from the 4th house (Sukha Bhava), which covers home, land and vehicles, and from Mars, the natural significator of land (Bhumi Karaka). When Mars is weak or pressured by Saturn, or the 4th house carries Bhumi Dosha, sales stall, escrow falls through, inheritance turns into conflict and new homes never quite feel settled.',
    symptoms: [
      'A listing that sits for months with no serious offers',
      'Siblings or relatives fighting over an inheritance or family home',
      'Disputes with contractors, HOAs or permit offices causing delays',
      'A new house or condo that feels uneasy or unlucky',
      'Money lost to a bad deposit, title issue or failed escrow',
    ],
    remedies: [
      {
        name: 'Bhumi Puja & Mangal Shanti',
        desc: 'A ritual honoring Mother Earth and calming Mars to ease conflict over land and property.',
      },
      {
        name: 'Vastu Correction Without Rebuilding',
        desc: 'Consecrated yantras and pyramids placed to correct Vastu imbalances in your home or office without any construction.',
      },
      {
        name: 'Varaha Prayers for Stalled Property',
        desc: 'Prayers to Lord Varaha, protector of the Earth, traditionally offered to clear obstacles around land and property.',
      },
      {
        name: 'Closing & Griha Pravesh Muhurat',
        desc: 'Auspicious dates for signing, closing escrow, receiving keys and moving into your new home.',
      },
    ],
    howItWorks: [
      'Study of your 4th house, Mars and current Dasha',
      'Vastu review from floor plans or photos',
      'Bhumi and Mars remedies to ease the deadlock',
      'Favorable timelines for listing and closing',
    ],
    testimonial: {
      quote: 'Our duplex in the San Fernando Valley sat on the market for over a year while the mortgage piled up. Panditji spotted a Vastu issue from the floor plan and performed a Bhumi puja. Within a month we had two solid offers, and we closed escrow soon after.',
      client: 'Tarun & Shreya B.',
      location: 'Northridge, CA',
    },
    faqs: [
      {
        question: 'Which planets govern property and inheritance?',
        answer: 'Mars rules land and construction, the 4th house governs your home and comfort, and the 8th house covers inheritance. Rahu or Saturn influencing these areas is often behind disputed titles, family arguments over property and slow probate.',
      },
      {
        question: 'How can Vastu help me sell a property?',
        answer: 'Imbalances in the north-east or south-west of a property are traditionally linked to stagnation and hesitant buyers. Pandith Vikram combines Vastu corrections with Mars remedies to help restore movement, alongside the advice of your realtor.',
      },
      {
        question: 'Why choose a Griha Pravesh Muhurat?',
        answer: 'Moving in at an auspicious time is believed to fill a home with health, harmony and prosperity from the very first day. Pandith Vikram calculates a date from your birth nakshatra while avoiding Rahu Kalam and eclipse periods.',
      },
    ],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vastu_Purusha_Vis%C3%A3o_Dorsal.jpg',
        fallbackUrl: '/images/ritual.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Vastu Purusha Mandala',
        caption: 'The Vastu Purusha Mandala grid used to plan balanced, harmonious buildings.',
        source: 'Wikimedia Commons',
        license: 'CC-BY-SA 4.0',
        alt: 'Vastu Purusha Mandala grid used in traditional architecture.',
      },
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/home.webp',
        category: 'Real-Life Transformation',
        title: 'Keys to a New Home',
        caption: 'Keys handed over at the front door of a newly purchased home.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'House keys handed over at the door of a new home.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/as17-148-22727/as17-148-22727~orig.jpg',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Earth from Apollo 17',
        caption: 'NASA’s famous Blue Marble photograph of Earth, honoring Bhumi Devi, goddess of the land.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA Apollo 17 Blue Marble photograph of Earth.',
      },
    ],
  },

  'get-ex-love-back': {
    id: 'get-ex-love-back',
    title: 'Bring Back',
    subtitle: 'Lost Love',
    img: '/images/heartbreak.webp',
    desc: 'Compassionate guidance, Venus remedies and devotional mantras for anyone hoping to heal a breakup and reconnect with someone they still love.',
    category: 'Love Reunion Guidance',
    deity: 'Radha-Krishna & Shukra (Venus)',
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
    planetaryCause: 'Sudden breakups often happen during harsh Rahu or Ketu transits over Venus, or when Saturn separates the Moon from the lord of the 7th house. These periods bring impulsive anger, wounded pride and emotional distance, so even honest attempts to talk can go wrong. Understanding the timing shows when reconnection has the best chance.',
    symptoms: [
      'Your partner ended things suddenly without a real explanation',
      'You have been blocked on your phone, Instagram and WhatsApp',
      'Friends or family seem to be turning them against you',
      'You can’t stop thinking about them or move forward',
      'You regret past mistakes and want a sincere second chance',
    ],
    remedies: [
      {
        name: 'Sattvic Love Mantra Sadhana',
        desc: 'Gentle, devotional mantras that soften old hurt and reawaken fond memories, with no coercion and no harmful side effects.',
      },
      {
        name: 'Radha-Krishna Reunion Puja',
        desc: 'A puja to the divine couple asking for understanding, forgiveness and a renewed emotional connection between you.',
      },
      {
        name: 'Third-Party Influence Shield',
        desc: 'Protective remedies that reduce the influence of people who are deliberately keeping the two of you apart.',
      },
      {
        name: 'Heart Healing & Forgiveness Prayers',
        desc: 'Prayers and simple practices to release bitterness and pain from past arguments on both sides.',
      },
    ],
    howItWorks: [
      'Reading both partners’ birth charts',
      'Checking whether your karmic bond is still strong',
      'Starting devotional love mantras and rituals',
      'Advice on the right day and way to reach out',
    ],
    testimonial: {
      quote: 'After a bad fight my girlfriend blocked me everywhere for four months. Panditji told me honestly that her Rahu period was ending soon, gave me prayers to do and asked me to wait before reaching out. When I finally messaged her on the day he suggested, she replied. We are engaged now.',
      client: 'Vikas T.',
      location: 'Los Angeles, CA',
    },
    faqs: [
      {
        question: 'How is this different from black magic or forceful Vashikaran?',
        answer: 'Pandith Vikram’s approach is entirely Sattvic. It works on the planetary pressure behind the separation and uses devotional mantras to Venus and Radha-Krishna to encourage forgiveness and understanding. Free will is respected, and nothing manipulative is ever used.',
      },
      {
        question: 'My ex has blocked me everywhere. Is there still hope?',
        answer: 'Sudden blocking and silence often coincide with a strong Rahu or Mars transit over the 7th house. Pandith Vikram checks whether the bond between your charts is still active and, if so, suggests remedies and timing that give reconciliation its best chance.',
      },
      {
        question: 'What details do I need to share?',
        answer: 'Your date, time and place of birth, and your partner’s if you know them. If their birth time is unknown, their full name and a clear photo are enough for a Prashna (question-moment) reading.',
      },
      {
        question: 'If we get back together, will the same problems return?',
        answer: 'To help keep old patterns from returning, Pandith Vikram provides a protective relationship kavach and tells you about sensitive transit periods ahead, so that the two of you can handle them together.',
      },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/candles.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Lamps and Flowers for a Love Puja',
        caption: 'Lit lamps and pink flower garlands arranged for a devotional love puja.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Lit lamps and pink flowers arranged for a love puja.',
      },
      {
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/love-couple-reunion.webp',
        category: 'Real-Life Transformation',
        title: 'Reunited at Sunset',
        caption: 'Two partners embracing at sunset, leaving past hurt behind them.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Couple embracing at sunset after reuniting.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA13123/PIA13123~orig.jpg',
        fallbackUrl: '/images/astronomical-red-nebula.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'The Heart Nebula',
        caption: 'NASA WISE infrared image of the Heart Nebula (IC 1805), a symbol of lasting love.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA WISE infrared image of the Heart Nebula IC 1805.',
      },
    ],
  },

  'horoscope-reading': {
    id: 'horoscope-reading',
    title: 'Birth Chart &',
    subtitle: 'Horoscope Reading',
    img: '/images/zodiac.webp',
    desc: 'A complete Janam Kundali reading covering your Mahadasha timeline, Sade Sati, strengths and challenges, with a personal outlook for the next 12 months.',
    category: 'Complete Life Reading',
    deity: 'The Navagrahas & Surya Narayana',
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
    planetaryCause: 'Your Janam Kundali maps the 9 Grahas across the 12 Bhavas and 27 Nakshatras at the exact moment and place you were born. Read carefully, it shows your natural strengths, the challenges you are here to work through, likely turning points, and the periods when life tends to flow in your favor.',
    symptoms: [
      'Feeling unsure about which direction to take in life',
      'Wondering when marriage, children, a home or wealth will arrive',
      'Repeating the same setbacks despite your best efforts',
      'Going through Sade Sati or a tough Rahu or Saturn period',
      'Wanting to understand your purpose and natural talents',
    ],
    remedies: [
      {
        name: 'Full 12-House Life Analysis',
        desc: 'A thorough look at career, money, relationships, health, family, travel and spiritual growth.',
      },
      {
        name: 'Dasha Timeline for the Years Ahead',
        desc: 'A month-by-month roadmap of your Vimshottari Dasha periods, showing favorable windows and times to be careful.',
      },
      {
        name: 'Personal Gemstone Guidance',
        desc: 'Advice on natural gemstones such as ruby, yellow sapphire, blue sapphire or emerald, given only when a stone truly suits your chart.',
      },
      {
        name: 'Daily Mantra & Charity Routine',
        desc: 'Simple practices linked to your Ishta Devata to keep you protected and spiritually supported.',
      },
    ],
    howItWorks: [
      'Confirming exactly when and where you were born',
      'Casting your D1, D9 and D10 charts',
      'Private session in Hollywood, by phone or on video',
      'Written summary of remedies and key dates',
    ],
    testimonial: {
      quote: 'I booked a full reading before deciding whether to move back to India. Panditji described turning points from my past that I had never mentioned and said the move would come together the following spring. It happened that April, almost exactly as he said.',
      client: 'Kavya N.',
      location: 'San Diego, CA',
    },
    faqs: [
      {
        question: 'What does a full Janam Kundali reading cover?',
        answer: 'It covers all 12 houses of your chart, including career, finances, marriage timing and compatibility, health tendencies, travel and spiritual growth, together with a timeline of your upcoming Vimshottari Dasha periods.',
      },
      {
        question: 'What if I don’t know my exact birth time?',
        answer: 'Pandith Vikram can rectify your birth time (Nashta Jataka) by matching your chart against key events in your life, and can also use Prashna astrology and palmistry to give you accurate guidance.',
      },
      {
        question: 'How is Vedic astrology different from Western astrology?',
        answer: 'Western astrology uses the tropical zodiac, which is tied to the seasons, while Vedic (sidereal) astrology follows the actual positions of the stars and the 27 Nakshatras. The Vedic Dasha system also allows events to be timed to specific months.',
      },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/astrology-chart.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Hand-Drawn Kundali Chart',
        caption: 'A traditional birth chart with handwritten calculations of the houses and planets.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Traditional hand-drawn Kundali birth chart with calculations.',
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        fallbackUrl: '/images/horoscope-reading.webp',
        category: 'Real-Life Transformation',
        title: 'Clarity Under a Starry Sky',
        caption: 'A person looking up at a sky full of stars, finding clarity and calm.',
        source: 'Unsplash',
        license: 'Royalty-Free Commercial',
        alt: 'Person gazing at a clear, starry night sky.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~orig.jpg',
        fallbackUrl: '/images/astrological-zodiac-wheel.svg',
        category: 'Astrological & Planetary Iconography',
        title: 'Deep Space Star Field',
        caption: 'NASA deep-space image of a star field, evoking the 12 rashis and 27 nakshatras.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA deep-space star field image.',
      },
    ],
  },
  'psychic-reading': {
    id: 'psychic-reading',
    title: 'Psychic &',
    subtitle: 'Intuitive Reading',
    img: '/images/moon-phases.webp',
    desc: 'Quick, honest answers to urgent questions about love, work and family, drawing on Pandith Vikram’s intuition and a Prashna chart cast for the moment you ask.',
    category: 'Intuitive & Prashna Guidance',
    deity: 'Ketu & Chandra (the Moon), Lords of Intuition',
    theme: {
      primaryGradient: 'from-[#12051F] via-[#1E0B33] to-[#3B0764]',
      heroBg: '#1E0B33',
      accentColor: '#A855F7',
      accentBorder: 'border-[#A855F7]',
      badgeBg: 'bg-[#6B21A8]',
      badgeText: 'text-purple-100',
      badgeBorder: 'border-[#A855F7]',
      testimonialBg: 'bg-[#3B0764]',
      testimonialBorder: 'border-[#A855F7]',
      cardBorderHover: 'hover:border-[#A855F7]',
      glowColor: 'rgba(168, 85, 247, 0.25)',
    },
    planetaryCause: 'In Vedic astrology, intuition is linked to the Moon (Chandra), which rules the mind and feelings, and to Ketu, the planet of inner knowing. The 8th and 12th houses govern what is hidden and what lies beneath the surface. A psychic reading pairs Pandith Vikram’s intuitive impressions with a Prashna chart cast for the exact moment you ask, so every insight is checked against the planets instead of resting on a hunch alone.',
    symptoms: [
      'You are stuck at a crossroads and need a clear answer soon',
      'Strong gut feelings or recurring dreams you cannot make sense of',
      'A sense that something is being kept from you in love or business',
      'A big decision is coming up: a job offer, a move or a commitment',
      'You feel spiritually disconnected and unsure what comes next',
    ],
    remedies: [
      {
        name: 'Intuitive Prashna Session',
        desc: 'A focused reading on one or two urgent questions, combining intuitive insight with a chart cast for the moment you ask.',
      },
      {
        name: 'Dream & Sign Interpretation',
        desc: 'Help understanding recurring dreams, signs and strong feelings, and what they may be pointing you toward.',
      },
      {
        name: 'Third-Eye (Ajna) Meditation Practice',
        desc: 'A short daily meditation and mantra routine to quiet mental noise and help you trust your own intuition.',
      },
      {
        name: 'Moon & Ketu Balancing Prayers',
        desc: 'Monday Chandra prayers and Ketu remedies to steady an anxious mind and sharpen inner clarity.',
      },
    ],
    howItWorks: [
      'Share your question, briefly and in confidence',
      'A Prashna chart is cast for that exact moment',
      'Intuitive insight checked against your birth chart',
      'Clear guidance and simple next steps',
    ],
    testimonial: {
      quote: 'I was weighing a job offer in Seattle against staying in LA, and every list I made came out even. In a short psychic session Panditji sensed the offer had problems no one had mentioned and told me to ask about the team’s budget. The role was being cut back. I stayed, and I am glad I did.',
      client: 'Leena M.',
      location: 'Santa Monica, CA',
    },
    faqs: [
      {
        question: 'How is a psychic reading different from an astrology reading?',
        answer: 'An astrology reading works mainly from your birth chart. A psychic reading starts with Pandith Vikram’s intuitive impressions about your question and then checks them against a Prashna chart cast for that moment. It is ideal when you need a fast answer on one specific situation.',
      },
      {
        question: 'Do I need my birth time for a psychic reading?',
        answer: 'No. A Prashna chart is based on the moment you ask, not on your birth details, so a psychic reading works even when your birth time is unknown. If you do have your details, they add useful depth.',
      },
      {
        question: 'Can a psychic reading be done over the phone?',
        answer: 'Yes. Many clients across California and in other states book psychic readings by phone or video. Intuition and the Prashna chart are tied to your question, not to where you happen to be sitting.',
      },
      {
        question: 'Will you tell me exactly what is going to happen?',
        answer: 'Pandith Vikram will tell you honestly what he sees, including the likely direction of a situation and the factors that could change it. The future is shaped by choices as well as planets, so you will leave with guidance you can act on rather than a fixed verdict.',
      },
    ],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Incense_in_India.jpg?width=1200',
        fallbackUrl: '/images/candles.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Incense to Settle the Mind',
        caption: 'Incense and brass vessels, used to calm the space and the mind before an intuitive reading.',
        source: 'Wikimedia Commons',
        license: 'CC0 / Public Domain',
        alt: 'Incense sticks burning beside brass vessels before a psychic reading.',
      },
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Meditating_In_Nature_(Unsplash).jpg?width=1200',
        fallbackUrl: '/images/wellness.webp',
        category: 'Real-Life Transformation',
        title: 'Clarity After the Fog Lifts',
        caption: 'A woman sitting quietly above a misty valley, a picture of the calm that comes with a clear answer.',
        source: 'Wikimedia Commons',
        license: 'CC0 / Public Domain',
        alt: 'Woman sitting on a rock above a misty forest valley.',
      },
      {
        url: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000868/GSFC_20171208_Archive_e000868~large.jpg',
        fallbackUrl: '/images/moon-phases.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'The Moon, Ruler of Intuition',
        caption: 'NASA image of the full Moon, the planet Vedic astrology links with the mind, feelings and intuition.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA image of the full Moon against a black sky.',
      },
    ],
  },

  'tarot-reading': {
    id: 'tarot-reading',
    title: 'Tarot Card',
    subtitle: 'Reading',
    img: '/images/tarot.webp',
    desc: 'A tarot spread read side by side with your Vedic birth chart, for clear direction on love, career and the choices in front of you.',
    category: 'Tarot & Vedic Insight',
    deity: 'Lord Ganesha & Budha (Mercury)',
    theme: {
      primaryGradient: 'from-[#0A0B1F] via-[#151A3D] to-[#312E81]',
      heroBg: '#151A3D',
      accentColor: '#818CF8',
      accentBorder: 'border-[#818CF8]',
      badgeBg: 'bg-[#3730A3]',
      badgeText: 'text-indigo-100',
      badgeBorder: 'border-[#818CF8]',
      testimonialBg: 'bg-[#312E81]',
      testimonialBorder: 'border-[#818CF8]',
      cardBorderHover: 'hover:border-[#818CF8]',
      glowColor: 'rgba(129, 140, 248, 0.25)',
    },
    planetaryCause: 'Many tarot cards carry planetary links: The High Priestess with the Moon, The Empress with Venus, The Magician with Mercury and the Wheel of Fortune with Jupiter. Pandith Vikram reads your spread as a snapshot of the present moment, then checks it against your running Dasha and current transits in your Vedic chart. The cards show what is happening; the planets show when it is likely to change.',
    symptoms: [
      'You want a quick, visual read on a situation you are facing',
      'You are torn between two choices: two jobs, two homes or two people',
      'You are wondering how a new relationship is likely to develop',
      'You need clarity before a big decision in the next few months',
      'You are curious about the themes and energy of the year ahead',
    ],
    remedies: [
      {
        name: 'Three-Card Clarity Spread',
        desc: 'A focused past, present and next-step spread for one clear question, ideal when you need direction quickly.',
      },
      {
        name: 'Ten-Card Life Spread',
        desc: 'A detailed ten-card spread covering the influences around you, hidden factors and the most likely outcome.',
      },
      {
        name: 'Love & Relationship Spread',
        desc: 'A spread that looks at both partners’ feelings, the strengths of the bond and what it needs to grow.',
      },
      {
        name: 'Year-Ahead Tarot & Transit Forecast',
        desc: 'A card for each month, matched with your planetary transits, so you can plan the year with confidence.',
      },
    ],
    howItWorks: [
      'Choose one clear question to focus on',
      'Cards are shuffled and drawn during your session',
      'Each card explained and checked against your chart',
      'Practical next steps and a sense of timing',
    ],
    testimonial: {
      quote: 'I came in torn between two apartments and two very different futures. The Empress and the Ten of Pentacles kept showing up, and Panditji matched them with the Venus period running in my chart. That settled it, and I signed the lease closer to my family. Six months later it still feels right.',
      client: 'Aisha K.',
      location: 'West Hollywood, CA',
    },
    faqs: [
      {
        question: 'Why combine tarot with Vedic astrology?',
        answer: 'Tarot is excellent at showing the energy of the present moment, while Vedic astrology is excellent at timing. Reading them together gives you a clear picture of what is going on and when things are likely to shift, which neither does as well on its own.',
      },
      {
        question: 'Can tarot be read over video?',
        answer: 'Yes. Pandith Vikram shuffles and draws the cards live during your video call, so you can see each card as it is turned over. In-person tarot readings are also available at the Hollywood Boulevard office.',
      },
      {
        question: 'What if I draw a frightening card like Death or The Tower?',
        answer: 'There is no need to worry. Death usually means the end of one chapter and the start of another, and The Tower points to sudden change that clears the way for something better. Pandith Vikram explains every card calmly and in context.',
      },
    ],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tarot_cards_-_3_card_spread_with_candles.jpg?width=1200',
        fallbackUrl: '/images/tarot.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'A Three-Card Spread by Candlelight',
        caption: 'A three-card tarot spread laid out on a blue cloth between candles, ready to be read.',
        source: 'Wikimedia Commons',
        license: 'CC0 / Public Domain',
        alt: 'Three tarot cards laid out on a blue cloth between candles.',
      },
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silhouette_woman_holding_lights_at_twilight_(Unsplash).jpg?width=1200',
        fallbackUrl: '/images/celestial.webp',
        category: 'Real-Life Transformation',
        title: 'Finding Your Way Forward',
        caption: 'A woman holding a string of lights against the twilight sky, a picture of clarity and direction.',
        source: 'Wikimedia Commons',
        license: 'CC0 / Public Domain',
        alt: 'Silhouette of a woman holding lights against a twilight sky.',
      },
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_02_High_Priestess.jpg?width=1200',
        fallbackUrl: '/images/tarot.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'The High Priestess and the Moon',
        caption: 'The High Priestess card from the classic Rider–Waite deck, linked with the Moon and intuition.',
        source: 'Wikimedia Commons',
        license: 'Public Domain',
        alt: 'The High Priestess tarot card from the Rider–Waite deck with a crescent Moon at her feet.',
      },
    ],
  },

  'love-spells': {
    id: 'love-spells',
    title: 'Love Spells',
    subtitle: '& Sacred Rituals',
    img: '/images/candles.webp',
    desc: 'Positive, Sattvic love spells and Vedic rituals to attract the right partner, rekindle romance and strengthen a bond, always with respect for free will.',
    category: 'Positive Love Rituals',
    deity: 'Swayamvara Parvati & Kamadeva',
    theme: {
      primaryGradient: 'from-[#1F0414] via-[#3A0A26] to-[#701A45]',
      heroBg: '#3A0A26',
      accentColor: '#EC4899',
      accentBorder: 'border-[#EC4899]',
      badgeBg: 'bg-[#9D174D]',
      badgeText: 'text-pink-100',
      badgeBorder: 'border-[#EC4899]',
      testimonialBg: 'bg-[#701A45]',
      testimonialBorder: 'border-[#EC4899]',
      cardBorderHover: 'hover:border-[#EC4899]',
      glowColor: 'rgba(236, 72, 153, 0.25)',
    },
    planetaryCause: 'Romance is read from the 5th house, commitment from the 7th house, and attraction from Venus (Shukra). When Venus is weak, combust or pressured by Saturn or Rahu, people often find it hard to meet the right partner, or watch the spark fade in a relationship that is otherwise good. Positive love spells work on these planetary blocks and on your own magnetism. They never try to force another person’s feelings.',
    symptoms: [
      'You have been single for a long time and want to meet the right person',
      'Dates and dating apps never seem to lead anywhere real',
      'The romance has faded in a relationship you want to keep',
      'You hope to move toward commitment, engagement or marriage',
      'Past heartbreak has left you guarded and closed off to love',
    ],
    remedies: [
      {
        name: 'Swayamvara Parvati Mantra',
        desc: 'A traditional Vedic mantra to Goddess Parvati, chanted for finding a loving and suitable life partner.',
      },
      {
        name: 'Kamadeva Attraction Puja',
        desc: 'A gentle puja to Kamadeva and Rati that strengthens your natural charm and openness to love.',
      },
      {
        name: 'Friday Rose & Venus Ritual',
        desc: 'A simple Friday ritual with rose petals, honey and a ghee lamp to strengthen Venus in your chart.',
      },
      {
        name: 'Couple’s Bond Blessing',
        desc: 'A ritual for existing couples to rekindle warmth, deepen trust and protect the relationship from outside strain.',
      },
    ],
    howItWorks: [
      'Private review of your Venus, 5th and 7th houses',
      'Choosing the right love ritual for your situation',
      'Ritual performed at an auspicious hour',
      'Simple daily practices and follow-up support',
    ],
    testimonial: {
      quote: 'After years of dating apps and first dates that went nowhere, I had almost given up. Panditji explained that Venus was weak in my chart, started the Swayamvara Parvati mantra for me and suggested a Friday rose ritual. A few months later I met someone through a friend, and we have been together for a year now.',
      client: 'Kiran S.',
      location: 'Anaheim, CA',
    },
    faqs: [
      {
        question: 'Can a love spell make a specific person fall in love with me?',
        answer: 'No, and an honest astrologer will never promise that. Pandith Vikram does not perform spells that try to control another person. His love rituals remove planetary blocks, strengthen your own attraction and support a bond where real feelings already exist. Love that is forced does not last.',
      },
      {
        question: 'Are your love spells safe? Do they use black magic?',
        answer: 'They are completely safe. Every ritual is Sattvic and devotional, using mantras, flowers, lamps and prayers to Parvati, Kamadeva and Venus. There is no black magic, nothing harmful to anyone and no risk of karmic backlash.',
      },
      {
        question: 'How long does a love spell take to work?',
        answer: 'Most love rituals follow a cycle of 21 to 41 days, and some people notice a shift in their confidence and the attention they receive within the first few weeks. Pandith Vikram will give you an honest timeline based on your chart, never a promise of overnight results.',
      },
      {
        question: 'Can the ritual be done if I live outside Los Angeles?',
        answer: 'Yes. Rituals can be performed on your behalf using your name and birth details, and you will be guided through simple daily practices at home, wherever you live in California or the rest of the US.',
      },
    ],
    gallery: [
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kamatchi_Vilakku.jpg?width=1200',
        fallbackUrl: '/images/candles.webp',
        category: 'Sacred Vedic Ritual & Remedy',
        title: 'Kamakshi Lamp for a Love Ritual',
        caption: 'A lit brass Kamakshi lamp, named for the loving form of Goddess Parvati, used in love rituals.',
        source: 'Wikimedia Commons',
        license: 'CC0 / Public Domain',
        alt: 'Lit brass Kamakshi lamp glowing in the dark, used in a Vedic love ritual.',
      },
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Adult_couple_holding_hands.jpg?width=1200',
        fallbackUrl: '/images/couple_romantic_park.webp',
        category: 'Real-Life Transformation',
        title: 'Walking Forward Together',
        caption: 'A couple walking hand in hand, a picture of the steady, mutual love these rituals support.',
        source: 'Wikimedia Commons',
        license: 'CC0 / Public Domain',
        alt: 'Couple walking hand in hand along a path.',
      },
      {
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_(cropped2).jpg?width=1000',
        fallbackUrl: '/images/celestial.webp',
        category: 'Astrological & Planetary Iconography',
        title: 'Venus, Planet of Romance',
        caption: 'NASA Mariner 10 view of Venus, the planet Vedic astrology links with attraction, romance and partnership.',
        source: 'NASA',
        license: 'Public Domain',
        alt: 'NASA Mariner 10 image of the planet Venus in natural color.',
      },
    ],
  },
}
