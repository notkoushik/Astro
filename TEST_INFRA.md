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
│  Asset Integrity     ││  Coverage (60 Tests) ││  Corner Cases (60)   │
│  (8 Tests)           ││  12 Services × 5     ││  12 Services × 5     │
└──────────────────────┘└──────────────────────┘└──────────────────────┘
    │                               │                               │
    └───────────────────────────────┼───────────────────────────────┘
                                    │
    ┌───────────────────────────────┴───────────────────────────────┐
    ▼                                                               ▼
┌──────────────────────────────────────┐┌──────────────────────────────┐
│  Tier 3: Cross-Feature Combinations  ││  Tier 4: Real-World UK       │
│  & Navigation Flows (18 Tests)       ││  Client Scenarios (12 Tests) │
└──────────────────────────────────────┘└──────────────────────────────┘
```

### 1.1 Four-Tier Methodology

1. **Tier 0: Production Build & Asset Integrity**:
   Verifies compilation health, production distribution bundles (`dist/index.html`, JavaScript/CSS chunks), configuration validity (`tsconfig.json`, `package.json`, `vite.config.ts`), and static media availability.
2. **Tier 1: Feature Coverage (>=60 Tests)**:
   Exhaustively exercises the 5 core behavioral pillars of each of the 12 Vedic astrology services (Identity & Metadata, Planetary Cause & Bhavas, Square Warning Symptoms, Tailored Remedies, Consultation Journey & UK Testimonial).
3. **Tier 2: Boundary & Corner Cases (>=60 Tests)**:
   Validates contracts, edge cases, string lengths, image triplet category schemas, missing fallback resilience, and the strict non-overlapping distinctiveness of color themes and deities.
4. **Tier 3: Cross-Feature Combinations & State Interactions (18 Tests)**:
   Validates pairwise transitions, hash-synchronized URL deep-linking (`#<service-id>`), modal layering over dedicated screens, consultation form validation rules, telephone URI protocols, and strict square UI geometry (`rounded-none`).
5. **Tier 4: Real-World UK Client Application Scenarios (12 Tests)**:
   Simulates end-to-end user journeys from major UK metropolitan areas (London, Wembley, Hounslow, Slough, Croydon, Birmingham, Leicester, Southall, Stratford, Richmond) exercising full user lifecycle flows.

---

## 2. Test Matrix & Detailed Tier Specifications

### 2.1 Tier 0: Production Build & Asset Integrity (8 Tests)

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

---

### 2.2 Tier 1: Feature Coverage (60 Tests: 12 Services × 5 Tests)

Every service must pass 5 dedicated opaque-box feature coverage tests:
- **Test .1: Identity & Presiding Vedic Deity**: Verifies service ID, title, category, and presiding planetary deity.
- **Test .2: Astrological Root Cause & Afflicted Bhavas**: Verifies deep philosophical Vedic explanation referencing governing houses, planets, and doshas.
- **Test .3: Square Warning Signs & Symptoms**: Verifies exactly 5 distinct, meaningful symptom indicators.
- **Test .4: Tailored Vedic Remedies**: Verifies exactly 4 named Vedic remedies with detailed actionable descriptions.
- **Test .5: 4-Step Consultation Journey & UK Testimonial**: Verifies 4 chronological consultation steps and an authentic UK client case study with quotation, client name, and UK borough/city.

#### Service Coverage Inventory:
1. **Service 1: Love & Relationship Problems (`love-relationship`)**
   - Deity: Shukra (Venus) & Kamadeva
   - Root Cause: 7th house (Kalatra Bhava), Venus affliction by Rahu/Mars/Saturn
   - Symptoms: 5 items (emotional coldness, recurring disputes, third-party interference, intimacy loss, past grievances)
   - Remedies: 4 items (Shukra Graha Shanti Puja, Kamakhya & Radha-Krishna Mantras, Kundali Dosha Neutralization, Aura Cleansing)
   - Journey & Testimonial: 4 steps; Sunita & Raj, Wembley, London, UK
2. **Service 2: Marriage & Compatibility (`marriage-compatibility`)**
   - Deity: Jupiter (Brihaspati) & Vivaha
   - Root Cause: 2nd (Kutumba), 7th (Kalatra), 8th (Mangalya), Manglik Dosha (Kuja Dosha), Nadi Dosha
   - Symptoms: 5 items (pre-marital obstacles, Manglik disputes, Nadi/Bhakoot incompatibility, estrangement, in-law friction)
   - Remedies: 4 items (Mangal Dosha & Kumbh Vivah, Gauri Shankar Puja & Rudrabhishek, Jupiter Yantra, Family Vastu)
   - Journey & Testimonial: 4 steps; Pooja & Harpreet, Hounslow, London, UK
3. **Service 3: Career & Business (`career-business`)**
   - Deity: 10th House Karma & Surya/Mercury
   - Root Cause: 10th House (Karma Bhava), Sun (authority), Mercury (commerce), Saturn (discipline), Vish Yoga
   - Symptoms: 5 items (career stagnation, missed promotions, collapsed deals, partnership disputes, enterprise dilemma)
   - Remedies: 4 items (Surya Arghya & Aditya Hridaya, Budha Vyapar Vriddhi, Shani Sade Sati pacification, Auspicious Muhurat)
   - Journey & Testimonial: 4 steps; Amit Patel, Canary Wharf, London, UK
4. **Service 4: Financial Problems (`financial-problems`)**
   - Deity: Maha Lakshmi & Kuber
   - Root Cause: 2nd house (Dhana Bhava), 11th house (Labha Bhava), Kemadruma Yoga, debt karma
   - Symptoms: 5 items (immediate money slip, mounting debt cycles, speculative losses, stalled debtors, energetic ceiling)
   - Remedies: 4 items (Maha Lakshmi & Kuber Yantra Sthapana, Dhanakaraka Jupiter, Rin Mukti Homa, Annadanam/Cow Seva)
   - Journey & Testimonial: 4 steps; Ramesh K., Southall, London, UK
5. **Service 5: Black Magic Removal (`black-magic-removal`)**
   - Deity: Maha Sudarshana & Pratyangira Devi
   - Root Cause: Rahu in 8th/12th, Saturn-Rahu conjunction (Shrapit Dosha), psychic intrusions
   - Symptoms: 5 items (chest heaviness & nightmares, simultaneous misfortune, dark presence, undiagnosable fatigue, sudden discord)
   - Remedies: 4 items (Maha Sudarshana & Narasimha Homa, Pratyangira Devi Kavach, Home Purification, Aura Sealing)
   - Journey & Testimonial: 4 steps; Jaswinder & Family, Slough, UK
6. **Service 6: Evil Eye Protection (`evil-eye-protection`)**
   - Deity: Drishti Ganesha & Lord Hanuman
   - Root Cause: Buri Nazar, vulnerable Moon (Chandra), afflicted Lagna, low-frequency envy vibration
   - Symptoms: 5 items (post-celebration headache/nausea, crying infants, business drop, broken items, restlessness)
   - Remedies: 4 items (Vedic Nazar Utarna & Salt Cleansing, Hanuman Chalisa Yantra, Drishti Ganesha Sthapana, Black Tourmaline)
   - Journey & Testimonial: 4 steps; Priya Mehta, Ealing, London, UK
7. **Service 7: Family & Child Problems (`family-child-problems`)**
   - Deity: Santana Gopala & Matru Bhava
   - Root Cause: 4th house (Matru Bhava), 5th house (Putra Bhava), Putra Dosha, Jupiter afflictions
   - Symptoms: 5 items (parent-child conflict, youth defiance/lack of focus, conception delays, domestic disputes, tense home)
   - Remedies: 4 items (Santana Gopala Homa, Saraswati & Budha Medha Suktam, Matru-Pitru Shanti, North-East Vastu)
   - Journey & Testimonial: 4 steps; Deepa Verma, Croydon, London, UK
8. **Service 8: Health & Wellness (`health-wellness`)**
   - Deity: Ayur-Jyotish & Maha Mrityunjaya
   - Root Cause: 6th house (Roga Bhava), 8th house, depleted Ojas, Saturn/Rahu afflictions
   - Symptoms: 5 items (chronic lethargy, sleep disorders/insomnia, cyclic illnesses, digestive imbalance, depression)
   - Remedies: 4 items (Maha Mrityunjaya Japa & Rudrabhishek, Surya Upasana, Chandra Shanti, Ayurvedic Dosha Balancing)
   - Journey & Testimonial: 4 steps; Meera K., Ilford, London, UK
9. **Service 9: Court Case Problems (`court-case-problems`)**
   - Deity: Maa Baglamukhi
   - Root Cause: 6th house (Shatru Bhava), 8th house, 12th house, malefic Mars/Saturn transits
   - Symptoms: 5 items (drawn-out battles, false allegations, unexpected postponements, custody/divorce anxiety, unfair opponent advantages)
   - Remedies: 4 items (Maa Baglamukhi Shatru Nashak Puja, 6th House Shatru Shanti, Surya Judicial Favor, Auspicious Hearing Timing)
   - Journey & Testimonial: 4 steps; Vikramjit Singh, Birmingham, UK
10. **Service 10: Property & Land Disputes (`property-land-disputes`)**
    - Deity: Bhumi & Mars (Mangal)
    - Root Cause: 4th house (Sukha/Land), Mars (Bhumi Karaka), Bhumi Dosha, Vastu misalignment
    - Symptoms: 5 items (stalled sales, ancestral disputes, planning/contractor conflicts, oppressive property feeling, lost deposits)
    - Remedies: 4 items (Bhumi & Mars Shanti Homa, Vastu Purusha Mandala Sthapana, Lord Varaha Prayers, Registry Muhurat)
    - Journey & Testimonial: 4 steps; Tariq & Shreya, Stratford, London, UK
11. **Service 11: Get Ex Love Back (`get-ex-love-back`)**
    - Deity: Kamadeva & Satvik Vashikaran
    - Root Cause: Harsh Ketu/Rahu transit on Venus, Moon separation from 7th house, Rinanubandha karma
    - Symptoms: 5 items (abrupt breakup, full communication blackout, third-party interference, deep heartbreak/obsession, second-chance desire)
    - Remedies: 4 items (Satvik Vashikaran & Mohini Mantra, Shukra & Kamadeva Healing, Third-Party Clearance, Heart Chakra Prayers)
    - Journey & Testimonial: 4 steps; Chloe & Arjun, Central London, UK
12. **Service 12: Horoscope Reading (`horoscope-reading`)**
    - Deity: Deep celestial cosmic & Navagraha
    - Root Cause: 9 Grahas across 12 Bhavas & 27 Nakshatras, Janam Kundali blueprint, Shani Sade Sati
    - Symptoms: 5 items (indecision in major choices, destiny milestone timing, recurring failure patterns, Sade Sati cycle, spiritual purpose)
    - Remedies: 4 items (12-House Astrological Breakdown, Vimshottari Dasha Timeline, Authentic Gemstone Ratna, Daily Mantra & Charity)
    - Journey & Testimonial: 4 steps; Kavita Sharma, Richmond, London, UK

---

### 2.3 Tier 2: Boundary & Corner Cases (60 Tests: 12 Services × 5 Tests)

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
| `T3-07` | Homepage "Read More" Wiring | All 12 cards on the homepage grid contain click handlers mapped to their specific service ID |
| `T3-08` | Modal Layering over Service View | Triggering "Book Private Session" (`onBookNow`) opens booking modal without destroying dedicated view state |
| `T3-09` | Modal Dismissal State Retention | Closing booking modal returns focus cleanly to the active service detail view |
| `T3-10` | Form Input Validation: Required Fields | Submitting empty inquiry form triggers HTML5/React validation rejection on Name, Phone, and Notes |
| `T3-11` | Form Input Validation: Phone Format | Form accepts valid UK numbers (`+44 7537121638`, `07537121638`) and rejects invalid input |
| `T3-12` | Form Optional Field: DOB | Submitting form without Date of Birth succeeds seamlessly |
| `T3-13` | Form Submission Feedback | Successful submission triggers instant confirmation UI, fires confetti animation, and auto-resets after 3000ms |
| `T3-14` | Direct Helpline URI Integrity | All phone links in Hero and Sidebar correctly use `tel:+447537121638` URI scheme |
| `T3-15` | Square UI Geometry: Cards & Containers | Container cards in `ServiceDetailView.tsx` strictly utilize `rounded-none`, zero `rounded-md`/`rounded-lg` |
| `T3-16` | Square UI Geometry: Buttons & Badges | All CTA buttons, badges, and symptom bullet badges enforce `rounded-none` |
| `T3-17` | Square UI Geometry: Input Fields | Form `<input>` and `<textarea>` elements strictly enforce `rounded-none` borders |
| `T3-18` | Square UI Geometry: Image Frames | Gallery and hero image wrappers maintain sharp 90-degree square corners (`rounded-none`) |

---

### 2.5 Tier 4: Real-World UK Client Application Scenarios (12 Tests)

Simulates 12 complete end-to-end user journeys representing real UK community clients:

1. **Scenario 1 (`T4-01`) — London City Executive Career Guidance**:
   London financial district client visits site, selects Career & Business, reviews 10th House Karma and Dashamsha analysis, inspects Vyapar Vriddhi remedies, verifies Canary Wharf testimonial, and submits consultation booking.
2. **Scenario 2 (`T4-02`) — Wembley Couple Relationship Reconciliation**:
   Wembley client lands via deep link `#love-relationship`, reads Shukra & Kamadeva healing methods, inspects 5 warning symptoms, reviews Radha-Krishna Samvada Mantras, and dials the direct telephone helpline.
3. **Scenario 3 (`T4-03`) — Hounslow Family Marriage & Manglik Dosha Evaluation**:
   Hounslow family evaluates Marriage & Compatibility, reads Ashtakoota Milan and Kumbh Vivah dosha pacification, inspects Vivaha Homa fire gallery image, and requests auspicious Muhurat guidance.
4. **Scenario 4 (`T4-04`) — Slough Household Severe Negative Energy Removal**:
   Slough client experiencing sudden multi-domain crises seeks Black Magic Removal, verifies Sudarshana & Pratyangira Devi cleansing, reads 100% confidentiality guarantee, and submits emergency inquiry.
5. **Scenario 5 (`T4-05`) — Ealing Boutique Owner Evil Eye & Nazar Shielding**:
   Ealing retailer facing sudden footfall drop reviews Evil Eye Protection, inspects Drishti Ganesha and Lord Hanuman remedies, verifies Ealing client review, and reserves an on-site business blessing.
6. **Scenario 6 (`T4-06`) — Croydon Parents Domestic Harmony & Child Guidance**:
   Croydon family struggling with teenage defiance and domestic tension evaluates Santana Gopala and Saraswati Medha Suktam prayers, reviews North-East Vastu balancing, and books private family counseling.
7. **Scenario 7 (`T4-07`) — Ilford Resident Ayur-Jyotish Chronic Health Support**:
   Ilford client suffering from insomnia and fatigue reads Health & Wellness planetary insights, verifies Maha Mrityunjaya and Chandra Shanti remedies, and requests birth chart analysis.
8. **Scenario 8 (`T4-08`) — Birmingham Business Owner Litigation Victory**:
   Birmingham merchant embroiled in unfair commercial court case reads Maa Baglamukhi Shatru Nashak Sadhana, checks 6th house judicial transits, and contacts Pandith Vikram for legal hearing timing.
9. **Scenario 9 (`T4-09`) — Stratford Commercial Property Dispute Resolution**:
   Stratford property owner with frozen commercial sale reads Property & Land Disputes, inspects Mars Bhumi Karaka analysis and Lord Varaha prayers, and schedules a remote Vastu review.
10. **Scenario 10 (`T4-10`) — Southall Merchant Debt Clearance & Wealth Restoration**:
    Southall resident overwhelmed by debts navigates to Financial Problems, reviews Maha Lakshmi & Kuber Yantra Sthapana and Rin Mukti Homa, and requests wealth unblocking puja.
11. **Scenario 11 (`T4-11`) — Central London Separated Lover Urgent Reunion**:
    Client in Central London dealing with sudden breakup uses `#get-ex-love-back`, reads Satvik Vashikaran and Rinanubandha karma principles, verifies instant reassurance, and calls direct 24/7 phone number.
12. **Scenario 12 (`T4-12`) — Richmond Seeker Comprehensive Janam Kundali Reading**:
    Richmond seeker books a full Horoscope Reading, exploring 12 Bhavas, Vimshottari Dasha roadmap, natural gemstone recommendation, and Ishta Devata daily mantra prescription.

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
| **Tier 0** | Production Build & Static Asset Integrity | 8 | All core artifacts | **DEFINED & READY** |
| **Tier 1** | Feature Coverage (12 Services × 5 Core Pillars) | 60 | >= 60 tests | **DEFINED & READY** |
| **Tier 2** | Boundary & Corner Cases (12 Services × 5 Boundaries) | 60 | >= 60 tests | **DEFINED & READY** |
| **Tier 3** | Cross-Feature Interactions & Navigation Flows | 18 | Multi-feature coverage | **DEFINED & READY** |
| **Tier 4** | Real-World UK Client End-to-End Scenarios | 12 | Realistic user journeys | **DEFINED & READY** |
| **TOTAL** | **Full End-to-End Test Suite** | **158** | **>= 120 tests** | **100% COMPLETE** |

---

## 5. Authoritative Expected Output Derivation

All expected values in this test suite are derived strictly from:
1. `ORIGINAL_REQUEST.md`: User-specified planetary deities, color themes, 3-image concept requirements, square geometry, and navigation contracts.
2. `PROJECT.md`: Architecture diagrams, component contracts (`DetailedService`, `ServiceTheme`, `ServiceGalleryImage`), and feature inventory.
3. Codebase ground truth: `src/data/servicesData.ts`, `src/components/ServiceDetailView.tsx`, `src/App.tsx`, and `public/images/`.
