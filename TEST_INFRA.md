# Vedic Services Expansion: End-to-End Test Infrastructure Specification (TEST_INFRA)

**Project**: Indian Astrologer Pandith Vikram Vedic Services Expansion  
**Working Directory**: `d:\New_project\astro_v2`  
**Author**: E2E Testing Track (`test_writer_e2e_1`)  
**Test Framework**: Zero-Dependency Native Node.js Automated Test Harness (`tests/run_e2e_tests.cjs`)  
**Specification References**: `PROJECT.md`, `ORIGINAL_REQUEST.md`, Survey Hand-offs  

---

## 1. Executive Overview & Test Architecture

The End-to-End (E2E) Test Suite for the Indian Astrologer Pandith Vikram web application provides an opaque-box, requirement-driven verification system. It guarantees that all 12 dedicated Vedic astrology services, visual theme engines, royalty-free concept galleries, square UI geometry, navigation flows, and consultation inquiry pipelines operate with 100% correctness and fidelity.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Master Test Runner                              │
│                    `node tests/run_e2e_tests.cjs`                      │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
┌──────────────────────┐┌──────────────────────┐┌──────────────────────┐
│  Tier 0: Build &     ││  Tier 1: Feature     ││  Tier 2: Boundary &  │
│  Asset Integrity     ││  Coverage (75 Tests) ││  Corner Cases (75)   │
│  (9 Tests)           ││  15 Services × 5     ││  15 Services × 5     │
└──────────────────────┘└──────────────────────┘└──────────────────────┘
    │                               │                               │
    └───────────────────────────────┼───────────────────────────────┘
                                    │
    ┌───────────────────────────────┴───────────────────────────────┐
    ▼                                                               ▼
┌──────────────────────────────────────┐┌──────────────────────────────┐
│  Tier 3: Cross-Feature Combinations  ││  Tier 4: Real-World CA       │
│  & Navigation Flows (18 Tests)       ││  Client Scenarios (15 Tests) │
└──────────────────────────────────────┘└──────────────────────────────┘
```

### 1.1 Four-Tier Methodology

1. **Tier 0: Production Build & Asset Integrity**:
   Verifies compilation health, production distribution bundles (`dist/index.html`, JavaScript/CSS chunks), configuration validity (`tsconfig.json`, `package.json`, `vite.config.ts`), and static media availability.
2. **Tier 1: Feature Coverage (>=75 Tests)**:
   Exhaustively exercises the 5 core behavioral pillars of each of the 15 astrology services (Identity & Metadata, Planetary Cause & Bhavas, Square Warning Symptoms, Tailored Remedies, Consultation Journey & California Client Journey).
3. **Tier 2: Boundary & Corner Cases (>=75 Tests)**:
   Validates contracts, edge cases, string lengths, image triplet category schemas, missing fallback resilience, and the strict non-overlapping distinctiveness of color themes and deities.
4. **Tier 3: Cross-Feature Combinations & State Interactions (18 Tests)**:
   Validates pairwise transitions, hash-synchronized URL deep-linking (`#<service-id>`), modal layering over dedicated screens, consultation form validation rules, telephone URI protocols, and strict square UI geometry (`rounded-none`).
5. **Tier 4: Real-World California Client Application Scenarios (15 Tests)**:
   Simulates end-to-end user journeys from California communities (Los Angeles, San Jose, Irvine, Fremont, Cerritos, Artesia, Sacramento, Pasadena, Riverside, Northridge, Bakersfield, San Diego, Santa Monica, West Hollywood, Anaheim) exercising full user lifecycle flows.

---

## 2. Test Matrix & Detailed Tier Specifications

### 2.1 Tier 0: Production Build & Asset Integrity (9 Tests)

| Test ID | Target | Verification Criteria | Expected Outcome |
|---|---|---|---|
| `T0-01` | `dist/index.html` | HTML5 root document exists, contains `<div id="root"></div>`, viewport meta, and title | Valid HTML5 shell |
| `T0-02` | `dist/assets/*.js` | Production JS bundle exists, non-empty, contains React application logic | Bundle > 50KB, valid JS syntax |
| `T0-03` | `dist/assets/*.css` | Production stylesheet exists, non-empty, contains Tailwind CSS utility classes | Bundle > 10KB, valid CSS |
| `T0-04` | `public/images/` | Static images folder contains essential fallback assets (`candles.jpg`, `couple.jpg`, `ritual.jpg`, etc.) | All files readable on disk |
| `T0-05` | Vector Assets | `astrological-zodiac-wheel.svg` is valid SVG XML markup with viewBox | Well-formed SVG document |
| `T0-06` | Project Config | `package.json` contains React 19, Vite, Tailwind CSS v4, and build scripts | Valid JSON with required dependencies |
| `T0-07` | TypeScript Config | `tsconfig.json` specifies ES2020+, React JSX, and strict module resolution | Valid JSON configuration |
| `T0-08` | Build Script | `npm run build` command registered in `package.json` scripts | Script `build: "vite build"` present |
| `T0-09` | Sitemap & robots.txt | Build generates `dist/sitemap.xml` listing the homepage, `/book-reading`, every service and every location on one site URL; `robots.txt` points to it; `index.html` canonical uses the same URL | 32 URLs, single origin, no unreplaced `%VITE_SITE_URL%` |

---

### 2.2 Tier 1: Feature Coverage (75 Tests: 15 Services × 5 Tests)

Every service must pass 5 dedicated opaque-box feature coverage tests:
- **Test .1: Identity & Presiding Vedic Deity**: Verifies service ID, title, category, and presiding planetary deity.
- **Test .2: Astrological Root Cause & Afflicted Bhavas**: Verifies deep philosophical Vedic explanation referencing governing houses, planets, and doshas.
- **Test .3: Square Warning Signs & Symptoms**: Verifies exactly 5 distinct, meaningful symptom indicators.
- **Test .4: Tailored Vedic Remedies**: Verifies exactly 4 named Vedic remedies with detailed actionable descriptions.
- **Test .5: 4-Step Consultation Journey & California Client Journey**: Verifies 4 chronological consultation steps and an illustrative example client journey with quotation, client initials, and a California city (`CA`).

#### Service Coverage Inventory:
1. **Service 1: Love & Relationship Healing (`love-relationship`)**
   - Deity: Shukra Deva (Venus), Kamadeva & Rati
   - Category: Couples Harmony Reading
   - Symptoms: 5 items
   - Remedies: 4 items (Venus Strengthening Puja, Couple’s Harmony Mantra Plan, Joint Chart Dosha Balancing, Home Energy Refresh for Couples)
   - Journey & Example Client Journey: 4 steps; Neha & Arjun S., Irvine, CA
2. **Service 2: Marriage & Kundali Matching (`marriage-compatibility`)**
   - Deity: Guru Brihaspati (Jupiter) with Shiva & Parvati
   - Category: Vivah Compatibility Analysis
   - Symptoms: 5 items
   - Remedies: 4 items (Manglik Dosha Shanti, Uma-Maheshwar Puja for Couples, Guru Graha Blessing & Yantra, Wedding Muhurat Selection)
   - Journey & Example Client Journey: 4 steps; Riya & Karan M., Fremont, CA
3. **Service 3: Career & Business Success (`career-business`)**
   - Deity: Surya (Sun) & Budha (Mercury), Lords of Work and Commerce
   - Category: Career & Venture Timing
   - Symptoms: 5 items
   - Remedies: 4 items (Surya Arghya Morning Practice, Mercury Puja for Business Growth, Saturn Period Relief Remedies, Launch & Signing Muhurat)
   - Journey & Example Client Journey: 4 steps; Rahul V., San Jose, CA
4. **Service 4: Money & Debt Relief (`financial-problems`)**
   - Deity: Goddess Lakshmi & Kubera, Keeper of Treasures
   - Category: Wealth & Abundance Astrology
   - Symptoms: 5 items
   - Remedies: 4 items (Lakshmi-Kubera Yantra Installation, Jupiter Abundance Prayers, Rina Mochana Debt-Relief Homa, Nakshatra-Based Charity Plan)
   - Journey & Example Client Journey: 4 steps; Sunil P., Bakersfield, CA
5. **Service 5: Black Magic Cleansing & Removal (`black-magic-removal`)**
   - Deity: Lord Narasimha, Sudarshana Chakra & Goddess Pratyangira
   - Category: Spiritual Protection & Purification
   - Symptoms: 5 items
   - Remedies: 4 items (Sudarshana & Narasimha Protection Homa, Pratyangira Raksha Kavach, Home & Workplace Purification, Aura Restoration Practice)
   - Journey & Example Client Journey: 4 steps; Jaspreet K., Cerritos, CA
6. **Service 6: Evil Eye & Nazar Remedies (`evil-eye-protection`)**
   - Deity: Lord Hanuman & Drishti Ganapati
   - Category: Drishti Dosha Protection
   - Symptoms: 5 items
   - Remedies: 4 items (Traditional Nazar Utara Ritual, Hanuman Raksha Yantra, Drishti Ganapati at the Entrance, Raksha Sutra & Protective Stones)
   - Journey & Example Client Journey: 4 steps; Pooja D., Artesia, CA
7. **Service 7: Family & Children’s Harmony (`family-child-problems`)**
   - Deity: Santana Gopala (Bala Krishna) & Goddess Saraswati
   - Category: Family Peace & Santana Yoga
   - Symptoms: 5 items
   - Remedies: 4 items (Santana Gopala Homa, Saraswati Vandana for Students, Generational Peace Puja, North-East Vastu Reset)
   - Journey & Example Client Journey: 4 steps; Anjali R., Sacramento, CA
8. **Service 8: Wellness & Peace of Mind (`health-wellness`)**
   - Deity: Lord Shiva as Mrityunjaya & Lord Dhanvantari
   - Category: Ayur-Jyotish Wellbeing
   - Symptoms: 5 items
   - Remedies: 4 items (Mrityunjaya Japa & Abhishekam, Surya Namaskar & Sun Prayers, Moon Calming Remedies, Dosha-Balancing Lifestyle Tips)
   - Journey & Example Client Journey: 4 steps; Meera J., Pasadena, CA
9. **Service 9: Legal & Court Case Guidance (`court-case-problems`)**
   - Deity: Goddess Baglamukhi (Pitambara Devi)
   - Category: Legal Matters & Baglamukhi Worship
   - Symptoms: 5 items
   - Remedies: 4 items (Baglamukhi Victory Puja, Shatru Bhava Shanti, Sun Remedies for Truth & Fairness, Court Date Muhurat Guidance)
   - Journey & Example Client Journey: 4 steps; Harjit S., Riverside, CA
10. **Service 10: Property & Real Estate Disputes (`property-land-disputes`)**
    - Deity: Bhumi Devi, Lord Varaha & Mangal (Mars)
    - Category: Vastu & Property Astrology
    - Symptoms: 5 items
    - Remedies: 4 items (Bhumi Puja & Mangal Shanti, Vastu Correction Without Rebuilding, Varaha Prayers for Stalled Property, Closing & Griha Pravesh Muhurat)
    - Journey & Example Client Journey: 4 steps; Tarun & Shreya B., Northridge, CA
11. **Service 11: Bring Back Lost Love (`get-ex-love-back`)**
    - Deity: Radha-Krishna & Shukra (Venus)
    - Category: Love Reunion Guidance
    - Symptoms: 5 items
    - Remedies: 4 items (Sattvic Love Mantra Sadhana, Radha-Krishna Reunion Puja, Third-Party Influence Shield, Heart Healing & Forgiveness Prayers)
    - Journey & Example Client Journey: 4 steps; Vikas T., Los Angeles, CA
12. **Service 12: Birth Chart & Horoscope Reading (`horoscope-reading`)**
    - Deity: The Navagrahas & Surya Narayana
    - Category: Complete Life Reading
    - Symptoms: 5 items
    - Remedies: 4 items (Full 12-House Life Analysis, Dasha Timeline for the Years Ahead, Personal Gemstone Guidance, Daily Mantra & Charity Routine)
    - Journey & Example Client Journey: 4 steps; Kavya N., San Diego, CA
13. **Service 13: Psychic & Intuitive Reading (`psychic-reading`)**
    - Deity: Ketu & Chandra (the Moon), Lords of Intuition
    - Category: Intuitive & Prashna Guidance
    - Symptoms: 5 items
    - Remedies: 4 items (Intuitive Prashna Session, Dream & Sign Interpretation, Third-Eye (Ajna) Meditation Practice, Moon & Ketu Balancing Prayers)
    - Journey & Example Client Journey: 4 steps; Leena M., Santa Monica, CA
14. **Service 14: Tarot Card Reading (`tarot-reading`)**
    - Deity: Lord Ganesha & Budha (Mercury)
    - Category: Tarot & Vedic Insight
    - Symptoms: 5 items
    - Remedies: 4 items (Three-Card Clarity Spread, Ten-Card Life Spread, Love & Relationship Spread, Year-Ahead Tarot & Transit Forecast)
    - Journey & Example Client Journey: 4 steps; Aisha K., West Hollywood, CA
15. **Service 15: Love Spells & Sacred Rituals (`love-spells`)**
    - Deity: Swayamvara Parvati & Kamadeva
    - Category: Positive Love Rituals
    - Symptoms: 5 items
    - Remedies: 4 items (Swayamvara Parvati Mantra, Kamadeva Attraction Puja, Friday Rose & Venus Ritual, Couple’s Bond Blessing)
    - Journey & Example Client Journey: 4 steps; Kiran S., Anaheim, CA

---

### 2.3 Tier 2: Boundary & Corner Cases (75 Tests: 15 Services × 5 Tests)

Every service must pass 5 boundary, contract, and edge-case tests:
- **Test .1: Visual Theme Parameters & Color Atmosphere Contract**: Validates presence and formatting of color themes (hex format `#RRGGBB`, gradient strings, non-empty contrast values).
- **Test .2: Concept Gallery Category Triplet Schema**: Validates that the service defines or associates with 3 distinct concept categories:
  1. `Sacred Vedic Ritual & Remedy`
  2. `Real-Life Transformation`
  3. `Astrological & Planetary Iconography`
- **Test .3: Asset Availability & Fallback Safety**: Validates that all primary image URLs and local fallback files (`/images/...`) exist and are readable without 404 hazards.
- **Test .4: String Length & Substantive Content Boundaries**: Enforces minimum length bounds to guard against placeholder text (symptom string >= 15 chars, remedy description >= 30 chars, planetary cause >= 100 chars, testimonial quote >= 60 chars).
- **Test .5: Distinctiveness & Non-Overlapping Isolation**: Enforces that no two services share identical IDs, identical presiding deities, or identical color palettes.

---

### 2.4 Tier 3: Cross-Feature Combinations & State Interactions (18 Tests)

| Test ID | Interaction Feature | Verification Logic |
|---|---|---|
| `T3-01` | Service-to-Service State Isolation | Transitioning from Service A to Service B completely replaces deity, symptoms, remedies, and testimonial with zero bleed |
| `T3-02` | Breadcrumb Navigation Hierarchy | Breadcrumb bar renders `Home / Astrology Services / [Service Title]`, clicking returns to root |
| `T3-03` | "Back to All Services" Trigger | Clicking back button resets `activeDetailId` to null and smoothly scrolls to top |
| `T3-04` | Hash-Synchronized Deep Linking | Setting `window.location.hash = '#career-business'` accurately targets and resolves the career service |
| `T3-05` | Hash Route Cleanup | Clicking back or home clears `window.location.hash` to empty string |
| `T3-06` | Invalid Hash Fallback Safety | Malformed or unknown hash (e.g., `#invalid-service-xyz`) gracefully falls back to homepage grid without runtime exception |
| `T3-07` | Homepage "Read More" Wiring | All 15 cards on the homepage grid contain click handlers mapped to their specific service ID |
| `T3-08` | Modal Layering over Service View | Triggering "Book This Reading" (`onBookNow`) opens booking modal without destroying dedicated view state |
| `T3-09` | Modal Dismissal State Retention | Closing booking modal returns focus cleanly to the active service detail view |
| `T3-10` | Form Input Validation: Required Fields | Submitting empty inquiry form triggers HTML5/React validation rejection on Name, Phone, and Notes |
| `T3-11` | Form Input Validation: Phone Format | Phone placeholder demonstrates US country-code format (`+1 (310) 555-0123`) |
| `T3-12` | Form Optional Field: DOB | Submitting form without Date of Birth succeeds seamlessly |
| `T3-13` | Form Submission Feedback | Successful submission triggers instant confirmation UI, fires confetti animation, and auto-resets after 3000ms |
| `T3-14` | Direct Helpline URI Integrity | All phone links in Hero and Sidebar correctly use the Los Angeles office `tel:+15103714626` URI scheme |
| `T3-15` | Square UI Geometry: Cards & Containers | Container cards in `ServiceDetailView.tsx` strictly utilize `rounded-none`, zero `rounded-md`/`rounded-lg` |
| `T3-16` | Square UI Geometry: Buttons & Badges | All CTA buttons, badges, and symptom bullet badges enforce `rounded-none` |
| `T3-17` | Square UI Geometry: Input Fields | Form `<input>` and `<textarea>` elements strictly enforce `rounded-none` borders |
| `T3-18` | Square UI Geometry: Image Frames | Gallery and hero image wrappers maintain sharp 90-degree square corners (`rounded-none`) |

---

### 2.5 Tier 4: Real-World California Client Application Scenarios (15 Tests)

Simulates 15 complete end-to-end user journeys representing California community clients:

1. **Scenario 1 (`T4-01`) — San Jose Tech Professional Career Growth**:
   Silicon Valley client selects Career & Business Success, reviews 10th House (Karma Bhava) analysis, inspects the Surya and Mercury remedies, and verifies the San Jose example journey.
2. **Scenario 2 (`T4-02`) — Irvine Couple Relationship Healing**:
   Orange County couple reads Love & Relationship Healing, inspects the warning signs of tension and silence, reviews the Venus Strengthening Puja, and verifies the Irvine example journey.
3. **Scenario 3 (`T4-03`) — Fremont Family Kundali Matching & Manglik Dosha**:
   Bay Area family reviews Manglik concerns, the Manglik Dosha Shanti and Uma-Maheshwar remedies, and verifies the Fremont example journey.
4. **Scenario 4 (`T4-04`) — Cerritos Household Spiritual Cleansing**:
   Household facing nightmares and simultaneous setbacks reviews the Sudarshana protection homa, confirms the confidential first consultation step, and verifies the Cerritos example journey.
5. **Scenario 5 (`T4-05`) — Artesia Boutique Owner Evil Eye & Nazar Remedies**:
   Little India shop owner facing a sudden loss of customers reviews Hanuman and Drishti Ganapati protection and verifies the Artesia example journey.
6. **Scenario 6 (`T4-06`) — Sacramento Parents Family & Child Harmony**:
   Parents of a teenager struggling with focus review Saraswati prayers and verify the Sacramento example journey.
7. **Scenario 7 (`T4-07`) — Pasadena Resident Wellness & Ayur-Jyotish Support**:
   Client with restless sleep reviews the Mrityunjaya japa, confirms remedies are framed alongside medical care, and verifies the Pasadena example journey.
8. **Scenario 8 (`T4-08`) — Riverside Business Owner Legal Guidance**:
   Client facing false claims reviews the Baglamukhi Victory Puja and verifies the Riverside example journey.
9. **Scenario 9 (`T4-09`) — Northridge Owners Stalled Property Sale**:
   San Fernando Valley owners with an unsold listing review Bhumi Puja and Vastu corrections and verify the Northridge example journey.
10. **Scenario 10 (`T4-10`) — Bakersfield Restaurant Owner Debt Relief**:
    Business owner with growing loans reviews the Rina Mochana Debt-Relief Homa and Lakshmi-Kubera yantra and verifies the Bakersfield example journey.
11. **Scenario 11 (`T4-11`) — Los Angeles Separated Partner Love Reunion**:
    Client blocked by a partner reviews Sattvic love mantras and the Radha-Krishna Reunion Puja and verifies the Los Angeles example journey.
12. **Scenario 12 (`T4-12`) — San Diego Seeker Complete Janam Kundali Reading**:
    Seeker unsure of life direction reviews the 12-House Life Analysis and Dasha timeline and verifies the San Diego example journey.
13. **Scenario 13 (`T4-13`) — Santa Monica Professional Urgent Psychic Reading**:
    Client at a career crossroads reviews the Moon and Ketu explanation, selects the Intuitive Prashna Session, and verifies the Santa Monica example journey.
14. **Scenario 14 (`T4-14`) — West Hollywood Seeker Tarot & Vedic Chart Reading**:
    Client torn between two choices reviews how tarot is read alongside Dasha and transits, selects a tarot spread, and verifies the West Hollywood example journey.
15. **Scenario 15 (`T4-15`) — Anaheim Single Professional Positive Love Spell**:
    Single client reviews the Swayamvara Parvati mantra, confirms the page states love spells never force another person’s feelings, and verifies the Anaheim example journey.

---

## 3. Test Runner Architecture & Execution

The automated test runner is implemented in `tests/run_e2e_tests.cjs` using native Node.js APIs (`node:fs`, `node:path`, `node:assert`). It has zero runtime external testing dependencies, ensuring 100% deterministic execution on any Node.js environment (v18, v20, v22) across Windows, Linux, and macOS.

### 3.1 Test Command
```powershell
node tests/run_e2e_tests.cjs
```
Alternatively, via `npm`:
```powershell
npm test
```

### 3.2 Exit Codes
- `0`: All tests passed cleanly (100% success across all Tiers).
- `1`: One or more tests failed (detailed diagnostic report printed to stderr with file location and assertion failure reason).

---

## 4. Coverage Summary Table

| Tier | Focus Area | Test Count | Minimum Requirement | Status |
|---|---|---|---|---|
| **Tier 0** | Production Build & Static Asset Integrity | 9 | All core artifacts | **DEFINED & READY** |
| **Tier 1** | Feature Coverage (15 Services × 5 Core Pillars) | 75 | >= 75 tests | **DEFINED & READY** |
| **Tier 2** | Boundary & Corner Cases (15 Services × 5 Boundaries) | 75 | >= 75 tests | **DEFINED & READY** |
| **Tier 3** | Cross-Feature Interactions & Navigation Flows | 18 | Multi-feature coverage | **DEFINED & READY** |
| **Tier 4** | Real-World California Client End-to-End Scenarios | 15 | Realistic user journeys | **DEFINED & READY** |
| **TOTAL** | **Full End-to-End Test Suite** | **192** | **>= 120 tests** | **100% COMPLETE** |

---

## 5. Authoritative Expected Output Derivation

All expected values in this test suite are derived strictly from:
1. `ORIGINAL_REQUEST.md`: User-specified planetary deities, color themes, 3-image concept requirements, square geometry, and navigation contracts.
2. `PROJECT.md`: Architecture diagrams, component contracts (`DetailedService`, `ServiceTheme`, `ServiceGalleryImage`), and feature inventory.
3. Codebase ground truth: `src/data/servicesData.ts`, `src/components/ServiceDetailView.tsx`, `src/App.tsx`, and `public/images/`.
