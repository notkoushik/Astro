/**
 * Test Utility: Data & Codebase Loader
 * Safely parses TypeScript service data, component code, stylesheets, and assets.
 */

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const PROJECT_ROOT = path.resolve(__dirname, '../..');

/**
 * Authoritative Canonical Specifications from ORIGINAL_REQUEST.md & PROJECT.md
 */
const CANONICAL_SERVICES_SPEC = {
  'love-relationship': {
    id: 'love-relationship',
    title: 'Love & Relationship',
    subtitle: 'Problems',
    deity: 'Shukra (Venus) & Kamadeva',
    category: 'Vedic Relationship Healing',
    themeAtmosphere: 'Rose-gold / wine / romantic hues',
    primaryHouses: ['7th house (Kalatra Bhava)'],
    expectedSymptomsCount: 5,
    expectedRemediesCount: 4,
    expectedStepsCount: 4,
    ukLocationKeyword: 'London',
  },
  'marriage-compatibility': {
    id: 'marriage-compatibility',
    title: 'Marriage &',
    subtitle: 'Compatibility',
    deity: 'Jupiter (Brihaspati) & Vivaha',
    category: 'Vedic Kundali Milan',
    themeAtmosphere: 'Saffron / sacred gold',
    primaryHouses: ['2nd (Kutumba)', '7th (Kalatra)', '8th (Mangalya)'],
    expectedSymptomsCount: 5,
    expectedRemediesCount: 4,
    expectedStepsCount: 4,
    ukLocationKeyword: 'London',
  },
  'career-business': {
    id: 'career-business',
    title: 'Career &',
    subtitle: 'Business',
    deity: '10th House Karma & Surya/Mercury',
    category: 'Astrological Career Guidance',
    themeAtmosphere: 'Royal amber / solar radiance',
    primaryHouses: ['10th House (Karma Bhava)'],
    expectedSymptomsCount: 5,
    expectedRemediesCount: 4,
    expectedStepsCount: 4,
    ukLocationKeyword: 'London',
  },
  'financial-problems': {
    id: 'financial-problems',
    title: 'Financial',
    subtitle: 'Problems',
    deity: 'Maha Lakshmi & Kuber',
    category: 'Vedic Wealth & Prosperity',
    themeAtmosphere: 'Emerald-gold / prosperity',
    primaryHouses: ['2nd house (Dhana Bhava)', '11th house (Labha Bhava)'],
    expectedSymptomsCount: 5,
    expectedRemediesCount: 4,
    expectedStepsCount: 4,
    ukLocationKeyword: 'London',
  },
  'black-magic-removal': {
    id: 'black-magic-removal',
    title: 'Black Magic',
    subtitle: 'Removal',
    deity: 'Maha Sudarshana & Pratyangira Devi',
    category: 'Tantrik & Vedic Cleansing',
    themeAtmosphere: 'Mystic crimson / obsidian dark',
    primaryHouses: ['8th house', '12th house'],
    expectedSymptomsCount: 5,
    expectedRemediesCount: 4,
    expectedStepsCount: 4,
    ukLocationKeyword: 'UK',
  },
  'evil-eye-protection': {
    id: 'evil-eye-protection',
    title: 'Evil Eye',
    subtitle: 'Protection',
    deity: 'Drishti Ganesha & Lord Hanuman',
    category: 'Nazar Dosha Shielding',
    themeAtmosphere: 'Indigo / turquoise / cobalt',
    primaryHouses: ['Moon (Chandra)', 'Lagna'],
    expectedSymptomsCount: 5,
    expectedRemediesCount: 4,
    expectedStepsCount: 4,
    ukLocationKeyword: 'London',
  },
  'family-child-problems': {
    id: 'family-child-problems',
    title: 'Family &',
    subtitle: 'Child Problems',
    deity: 'Santana Gopala & Matru Bhava',
    category: 'Domestic Peace & Santan Yoga',
    themeAtmosphere: 'Warm saffron / peach / harmony',
    primaryHouses: ['4th house (Matru Bhava)', '5th house (Putra Bhava)'],
    expectedSymptomsCount: 5,
    expectedRemediesCount: 4,
    expectedStepsCount: 4,
    ukLocationKeyword: 'London',
  },
  'health-wellness': {
    id: 'health-wellness',
    title: 'Health &',
    subtitle: 'Wellness',
    deity: 'Ayur-Jyotish & Maha Mrityunjaya',
    category: 'Vedic Health & Ayur-Jyotish',
    themeAtmosphere: 'Lunar silver / jade green / herbs',
    primaryHouses: ['6th house (Roga Bhava)', '8th house'],
    expectedSymptomsCount: 5,
    expectedRemediesCount: 4,
    expectedStepsCount: 4,
    ukLocationKeyword: 'London',
  },
  'court-case-problems': {
    id: 'court-case-problems',
    title: 'Court Case',
    subtitle: 'Problems',
    deity: 'Maa Baglamukhi',
    category: 'Legal Protection & Baglamukhi Sadhana',
    themeAtmosphere: 'Victorious haldi-yellow / justice',
    primaryHouses: ['6th house (Shatru Bhava)', '8th house', '12th house'],
    expectedSymptomsCount: 5,
    expectedRemediesCount: 4,
    expectedStepsCount: 4,
    ukLocationKeyword: 'UK',
  },
  'property-land-disputes': {
    id: 'property-land-disputes',
    title: 'Property &',
    subtitle: 'Land Disputes',
    deity: 'Bhumi & Mars (Mangal)',
    category: 'Bhumi Dosha & Vastu Astrology',
    themeAtmosphere: 'Terracotta / Vastu Purusha mandala',
    primaryHouses: ['4th house (Sukha Bhava)', 'Mars (Bhumi Karaka)'],
    expectedSymptomsCount: 5,
    expectedRemediesCount: 4,
    expectedStepsCount: 4,
    ukLocationKeyword: 'London',
  },
  'get-ex-love-back': {
    id: 'get-ex-love-back',
    title: 'Get Ex Love',
    subtitle: 'Back',
    deity: 'Kamadeva & Satvik Vashikaran',
    category: 'Vedic Love Reunion',
    themeAtmosphere: 'Ruby velvet / crimson',
    primaryHouses: ['Venus', '7th house lord', 'Rinanubandha'],
    expectedSymptomsCount: 5,
    expectedRemediesCount: 4,
    expectedStepsCount: 4,
    ukLocationKeyword: 'London',
  },
  'horoscope-reading': {
    id: 'horoscope-reading',
    title: 'Horoscope',
    subtitle: 'Reading',
    deity: 'Deep celestial cosmic & Navagraha',
    category: 'Complete Janam Kundali',
    themeAtmosphere: 'Midnight indigo / astral gold',
    primaryHouses: ['12 Bhavas', '9 Grahas', '27 Nakshatras'],
    expectedSymptomsCount: 5,
    expectedRemediesCount: 4,
    expectedStepsCount: 4,
    ukLocationKeyword: 'London',
  },
};

const CONCEPT_GALLERY_CATEGORIES = [
  'Sacred Vedic Ritual & Remedy',
  'Real-Life Transformation',
  'Astrological & Planetary Iconography',
];

/**
 * Loads and parses `src/data/servicesData.ts` into a JavaScript object.
 */
function loadServicesData() {
  const filePath = path.join(PROJECT_ROOT, 'src/data/servicesData.ts');
  const rawCode = fs.readFileSync(filePath, 'utf-8');

  // Strip TypeScript interfaces, type imports, and annotations
  let jsCode = rawCode
    .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '')
    .replace(/export\s+interface\s+[\s\S]*?\n\}/g, '')
    .replace(/export\s+const\s+detailedServicesData\s*(?::\s*[^=]+)?=/, 'const detailedServicesData =');

  jsCode += '\n;module.exports = { detailedServicesData };';

  const sandbox = {
    module: { exports: {} },
    exports: {},
    console,
  };

  try {
    const context = vm.createContext(sandbox);
    const script = new vm.Script(jsCode);
    script.runInContext(context);
    return sandbox.module.exports.detailedServicesData || {};
  } catch (err) {
    throw new Error(`Failed to parse servicesData.ts: ${err.message}`);
  }
}

/**
 * Returns raw source code of component or css files
 */
function getSourceFile(relativePath) {
  const fullPath = path.join(PROJECT_ROOT, relativePath);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  return fs.readFileSync(fullPath, 'utf-8');
}

/**
 * Checks if a file exists on disk
 */
function fileExists(relativePath) {
  return fs.existsSync(path.join(PROJECT_ROOT, relativePath));
}

/**
 * Returns stats or null for a file
 */
function getFileStats(relativePath) {
  const fullPath = path.join(PROJECT_ROOT, relativePath);
  if (!fs.existsSync(fullPath)) return null;
  return fs.statSync(fullPath);
}

module.exports = {
  PROJECT_ROOT,
  CANONICAL_SERVICES_SPEC,
  CONCEPT_GALLERY_CATEGORIES,
  loadServicesData,
  getSourceFile,
  fileExists,
  getFileStats,
};
