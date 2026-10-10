/**
 * Tier 1: Feature Coverage Tests
 * Verifies all 12 Vedic astrology services against 5 core behavioral pillars (60 tests total).
 */

const { assert } = require('./utils/testHarness.cjs');
const { loadServicesData, CANONICAL_SERVICES_SPEC } = require('./utils/dataLoader.cjs');

function registerTier1Tests(harness) {
  const servicesData = loadServicesData();
  const serviceKeys = Object.keys(CANONICAL_SERVICES_SPEC);

  harness.describe('Tier 1: Feature Coverage (12 Services × 5 Core Pillars)', () => {
    serviceKeys.forEach((serviceId, index) => {
      const canonical = CANONICAL_SERVICES_SPEC[serviceId];
      const serviceNum = (index + 1).toString().padStart(2, '0');

      // Pillar 1: Identity & Metadata
      harness.test(`T1-${serviceNum}.1 [${serviceId}] Identity & Presiding Vedic Deity`, () => {
        const service = servicesData[serviceId];
        assert.ok(service, `Service ${serviceId} must exist in detailedServicesData`);
        assert.strictEqual(service.id, canonical.id, `Service id must match ${canonical.id}`);
        assert.ok(service.title && service.title.length > 0, 'Title must not be empty');
        assert.ok(service.subtitle !== undefined, 'Subtitle must be defined');
        assert.ok(service.category && service.category.length > 0, 'Category must not be empty');
        assert.ok(service.desc && service.desc.length > 20, 'Description must be substantive (>20 chars)');

        // Validate presiding Vedic deity
        if (service.deity) {
          assert.ok(service.deity.length > 0, 'Deity property must be non-empty');
        } else {
          // If deity is embedded in planetaryCause / desc
          const text = (service.planetaryCause + ' ' + service.desc).toLowerCase();
          const deityKeywords = canonical.deity.toLowerCase().split(/[\s&,/]+/);
          const hasKeyword = deityKeywords.some(kw => kw.length > 3 && text.includes(kw));
          assert.ok(hasKeyword, `Planetary context must identify presiding deity ${canonical.deity}`);
        }
      });

      // Pillar 2: Planetary Root Cause & Afflicted Bhavas
      harness.test(`T1-${serviceNum}.2 [${serviceId}] Vedic Planetary Root Cause & Bhavas`, () => {
        const service = servicesData[serviceId];
        assert.ok(service, `Service ${serviceId} must exist`);
        assert.ok(service.planetaryCause, 'planetaryCause must be defined');
        assert.ok(service.planetaryCause.length >= 80, `planetaryCause must be in-depth (>=80 chars), got ${service.planetaryCause.length}`);

        // Verify primary Vedic houses or astrological concepts are discussed
        const lowerCause = service.planetaryCause.toLowerCase();
        const mentionsHousesOrPlanets =
          lowerCause.includes('house') ||
          lowerCause.includes('bhava') ||
          lowerCause.includes('graha') ||
          lowerCause.includes('dosha') ||
          lowerCause.includes('transit') ||
          lowerCause.includes('rahu') ||
          lowerCause.includes('ketu') ||
          lowerCause.includes('saturn') ||
          lowerCause.includes('mars') ||
          lowerCause.includes('venus') ||
          lowerCause.includes('jupiter') ||
          lowerCause.includes('sun') ||
          lowerCause.includes('moon');
        assert.ok(mentionsHousesOrPlanets, 'planetaryCause must detail Vedic houses, doshas, or planetary movements');
      });

      // Pillar 3: Square Warning Signs & Symptoms (Exactly 5)
      harness.test(`T1-${serviceNum}.3 [${serviceId}] Warning Signs & Symptoms (Count: 5)`, () => {
        const service = servicesData[serviceId];
        assert.ok(service, `Service ${serviceId} must exist`);
        assert.ok(Array.isArray(service.symptoms), 'symptoms must be an array');
        assert.strictEqual(service.symptoms.length, canonical.expectedSymptomsCount, `Must provide exactly ${canonical.expectedSymptomsCount} symptoms`);

        service.symptoms.forEach((sym, sIdx) => {
          assert.strictEqual(typeof sym, 'string', `Symptom ${sIdx + 1} must be a string`);
          assert.ok(sym.trim().length >= 15, `Symptom ${sIdx + 1} must be substantive (>=15 chars): "${sym}"`);
        });
      });

      // Pillar 4: Customized Vedic Remedies (Exactly 4)
      harness.test(`T1-${serviceNum}.4 [${serviceId}] Customized Vedic Remedies (Count: 4)`, () => {
        const service = servicesData[serviceId];
        assert.ok(service, `Service ${serviceId} must exist`);
        assert.ok(Array.isArray(service.remedies), 'remedies must be an array');
        assert.strictEqual(service.remedies.length, canonical.expectedRemediesCount, `Must provide exactly ${canonical.expectedRemediesCount} remedies`);

        service.remedies.forEach((rem, rIdx) => {
          assert.ok(rem.name && rem.name.trim().length >= 5, `Remedy ${rIdx + 1} name must be >=5 chars: "${rem.name}"`);
          assert.ok(rem.desc && rem.desc.trim().length >= 25, `Remedy ${rIdx + 1} desc must be >=25 chars: "${rem.desc}"`);
        });
      });

      // Pillar 5: 4-Step Consultation Journey & UK Testimonial
      harness.test(`T1-${serviceNum}.5 [${serviceId}] Consultation Journey & UK Testimonial`, () => {
        const service = servicesData[serviceId];
        assert.ok(service, `Service ${serviceId} must exist`);
        assert.ok(Array.isArray(service.howItWorks), 'howItWorks must be an array');
        assert.strictEqual(service.howItWorks.length, canonical.expectedStepsCount, `Must provide exactly ${canonical.expectedStepsCount} consultation steps`);

        service.howItWorks.forEach((step, stIdx) => {
          assert.ok(typeof step === 'string' && step.trim().length >= 10, `Step ${stIdx + 1} must be substantive (>=10 chars)`);
        });

        assert.ok(service.testimonial, 'testimonial object must be defined');
        assert.ok(service.testimonial.quote && service.testimonial.quote.trim().length >= 40, 'Testimonial quote must be meaningful (>=40 chars)');
        assert.ok(service.testimonial.client && service.testimonial.client.trim().length >= 3, 'Client name must be valid');
        assert.ok(service.testimonial.location && service.testimonial.location.includes(canonical.ukLocationKeyword), `Location must be in UK (${canonical.ukLocationKeyword})`);
      });
    });
  });
}

module.exports = { registerTier1Tests };
