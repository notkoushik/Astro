# Project: Indian Astrologer Pandith Vikram Vedic Services Expansion

## Architecture
The application is a high-performance single page application (SPA) built with React 19, Vite 8, TypeScript 5.7, and Tailwind CSS v4.
The expansion introduces full dedicated Vedic astrology experiences for all 12 services:
- **Data Layer (`src/data/servicesData.ts`)**: Strongly-typed data store containing deep Vedic astrology profiles, planetary deities, specific visual theme parameters (hex codes, gradients, accents), and a 36-image concept gallery matrix (3 verified royalty-free categories per service).
- **Component Layer (`src/components/ServiceDetailView.tsx`, `src/components/ServiceConceptGallery.tsx`)**: Themed service detail view engine rendering distinctive visual atmospheres for each planetary deity, square-geometry cards (`rounded-none`), symptom indicators, tailored remedies, 4-step journey, UK client testimonials, and multi-image galleries.
- **Application Shell & Navigation (`src/App.tsx`)**: Shell handling top banner, sticky navbar, hero slider, 12-card services grid, and hash-synchronized routing (`#<service-id>`) enabling seamless deep-linking, smooth scrolling, and browser history navigation.
- **Visual Assets (`public/images/`)**: Curated royalty-free open-source image collection from NASA, Wikimedia Commons, and Unsplash with verified fallback safety.

```
┌─────────────────────────────────────────────────────────────┐
│                          App.tsx                            │
│   (Navbar, Hero Slider, Hash Sync Router, Services Grid)    │
└──────────────┬──────────────────────────────▲───────────────┘
               │ (activeDetailId / #hash)     │ (onBack)
               ▼                              │
┌─────────────────────────────────────────────┴───────────────┐
│                   ServiceDetailView.tsx                     │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Hero Section with Presiding Deity & Theme Atmosphere   │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ Planetary Root Cause & Dosha Breakdown                 │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ Square Symptoms (5) & Tailored Vedic Remedies (4)      │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ ServiceConceptGallery (3 Royalty-Free Concept Images)  │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ 4-Step Consultation Journey & UK Client Testimonial    │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ Square Inquiry Form & Direct Telephone Helpline        │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────────▲──────────────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               │     src/data/servicesData.ts  │
               │ (12 Vedic Services & Gallery) │
               └───────────────────────────────┘
```

## Code Layout
- `src/App.tsx`: Main application shell, state management, hash route synchronization, modal triggers.
- `src/data/servicesData.ts`: Data definitions for all 12 services, visual themes, planetary deities, and galleries.
- `src/components/ServiceDetailView.tsx`: Dedicated full-page service view with dynamic Vedic theming.
- `src/components/ServiceConceptGallery.tsx`: Subcomponent rendering the 3-tier square concept gallery.
- `src/components/Logo.tsx`: SVG Vedic Surya Mandala logo.
- `src/components/ZodiacWheel.tsx`: Animated SVG Astrolabe Zodiac Wheel.
- `src/index.css`: Tailwind v4 styles, custom slant cutouts, typography variables, strict square geometry rules.
- `public/images/`: Local open-source image assets and fallbacks.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Service 1: Love & Relationship | Shukra/Kamadeva theme, wine/rose-gold atmosphere, Kalatra Bhava analysis, 5 symptoms, 4 remedies | M1 | Survey / R1 |
| 2 | Service 2: Marriage & Compatibility | Brihaspati/Vivaha theme, saffron/gold atmosphere, Kundali Milan, Ashtakoota, 5 symptoms, 4 remedies | M1 | Survey / R1 |
| 3 | Service 3: Career & Business | 10th House Karma/Surya theme, royal amber atmosphere, D10 Dashamsha, 5 symptoms, 4 remedies | M1 | Survey / R1 |
| 4 | Service 4: Financial Problems | Maha Lakshmi/Kuber theme, emerald-gold atmosphere, Dhana Bhava, Rin Mukti, 5 symptoms, 4 remedies | M1 | Survey / R1 |
| 5 | Service 5: Black Magic Removal | Sudarshana/Pratyangira theme, crimson-obsidian atmosphere, Shrapit dosha, 5 symptoms, 4 remedies | M1 | Survey / R1 |
| 6 | Service 6: Evil Eye Protection | Drishti Ganesha/Hanuman theme, indigo/turquoise atmosphere, Buri Nazar, 5 symptoms, 4 remedies | M1 | Survey / R1 |
| 7 | Service 7: Family & Child Problems | Santana Gopala/Matru Bhava theme, warm saffron atmosphere, Putra dosha, 5 symptoms, 4 remedies | M1 | Survey / R1 |
| 8 | Service 8: Health & Wellness | Ayur-Jyotish/Mrityunjaya theme, lunar silver/teal atmosphere, Roga Bhava, 5 symptoms, 4 remedies | M1 | Survey / R1 |
| 9 | Service 9: Court Case Problems | Maa Baglamukhi theme, victorious haldi-yellow atmosphere, Shatru Bhava, 5 symptoms, 4 remedies | M1 | Survey / R1 |
| 10 | Service 10: Property & Land Disputes | Bhumi/Mars theme, earthy terracotta atmosphere, Vastu Purusha, 5 symptoms, 4 remedies | M1 | Survey / R1 |
| 11 | Service 11: Get Ex Love Back | Kamadeva/Satvik Vashikaran theme, ruby velvet atmosphere, Rinanubandha karma, 5 symptoms, 4 remedies | M1 | Survey / R1 |
| 12 | Service 12: Horoscope Reading | Deep celestial/Navagraha theme, midnight indigo/astral gold atmosphere, Janam Kundali, 5 symptoms, 4 remedies | M1 | Survey / R1 |
| 13 | Multi-Image Concept Galleries | 3 verified royalty-free images per service (Ritual, Transformation, Planetary Iconography) | M1, M2 | Survey / R2 |
| 14 | Dynamic Service Theming Engine | Per-service color atmosphere (hero gradients, badges, accents, glow, testimonial card) | M2 | Survey / R1 |
| 15 | Square UI Geometry Enforcement | Strict `rounded-none` borders, buttons, cards, image frames, and input fields | M2 | Survey / R4 |
| 16 | Dedicated Consultation Form & Helpline | Square inquiry form with instant confirmation feedback, confetti, and UK helpline (+44 7537121638) | M2 | Survey / R3 |
| 17 | Hash-Sync Routing & Deep-Linking | Synchronize active service view with `window.location.hash` (`#<service-id>`) and back/forward navigation | M3 | Survey / R3 |
| 18 | Breadcrumb & Back Navigation | Header breadcrumbs (`Home / Astrology Services / [Title]`) and "Back to All Services" with smooth scroll | M3 | Survey / R3 |
| 19 | Homepage Read More Wiring | 12 service cards on homepage cleanly open corresponding dedicated service screen | M3 | Survey / R3 |
| 20 | E2E Testing Suite (Tiers 1-4) | Comprehensive opaque-box test suite verifying all 12 services, theming, navigation, and assets | M4 | Survey / Acceptance Criteria |
| 21 | Adversarial Coverage Hardening (Tier 5) | White-box edge case testing, broken link resilience, and error state hardening | M4 | Survey / Quality |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Vedic Service Data & Asset Catalog | Implement enriched `DetailedService` schema, complete Vedic profiles, visual theme parameters, and 36-image royalty-free catalog in `src/data/servicesData.ts` | none | DONE |
| M2 | Themed Service Views & Concept Galleries | Upgrade `ServiceDetailView.tsx` with dynamic visual theming engine, Vedic deity badges, square-geometry concept gallery, and consultation inquiry form | M1 | DONE |
| M3 | Navigation & Application Shell Integration | Wire hash routing synchronization (`#<service-id>`), smooth scroll-to-top, breadcrumb navigation, homepage Read More triggers, and footer service links in `src/App.tsx` | M2 | IN_PROGRESS |
| M4 | Final Milestone: E2E Test Suite & Adversarial Hardening | Phase 1: Pass 100% of E2E tests (Tiers 1-4) created by E2E Testing Track. Phase 2: Adversarial coverage hardening (Tier 5) | M3 | PLANNED |

## Interface Contracts

### `src/data/servicesData.ts` ↔ `src/components/ServiceDetailView.tsx`
```typescript
export interface ServiceGalleryImage {
  url: string
  category: 'Sacred Vedic Ritual & Remedy' | 'Real-Life Transformation' | 'Astrological & Planetary Iconography'
  title: string
  caption: string
  source: 'Unsplash' | 'Wikimedia Commons' | 'NASA' | 'Pexels'
  license: string
  alt: string
}

export interface ServiceTheme {
  primaryGradient: string // e.g. "from-[#2A080C] via-[#3B0713] to-[#4A0E17]"
  heroBg: string          // e.g. "#3B0713"
  accentColor: string     // e.g. "#B76E79"
  accentBorder: string    // e.g. "border-[#B76E79]"
  badgeBg: string         // e.g. "bg-[#8B1E3F]"
  badgeText: string       // e.g. "text-rose-100"
  badgeBorder: string     // e.g. "border-[#B76E79]"
  testimonialBg: string   // e.g. "bg-[#4A0E17]"
  testimonialBorder: string // e.g. "border-[#B76E79]"
  cardBorderHover: string // e.g. "hover:border-[#B76E79]"
  glowColor: string       // e.g. "rgba(183, 110, 121, 0.25)"
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
}

export const detailedServicesData: Record<string, DetailedService>
```

### `src/components/ServiceDetailView.tsx` ↔ `src/App.tsx`
```typescript
export interface ServiceDetailViewProps {
  service: DetailedService
  onBack: () => void
  onBookNow: () => void
}
// Rendered when activeDetailId is non-null
// onBack clears activeDetailId and updates window.location.hash = ''
// onBookNow opens the booking modal
```
