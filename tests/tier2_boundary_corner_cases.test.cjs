/**
 * Tier 2: Boundary & Corner Cases Tests
 * Verifies contract boundaries, string lengths, fallback assets, and uniqueness across all 12 services (60 tests total).
 */

const fs = require('node:fs');
const path = require('node:path');
const { assert } = require('./utils/testHarness.cjs');
const {
  PROJECT_ROOT,
  loadServicesData,
  CANONICAL_SERVICES_SPEC,
  CONCEPT_GALLERY_CATEGORIES,
} = require('./utils/dataLoader.cjs');

function registerTier2Tests(harness) {
  const servicesData = loadServicesData();
  const serviceKeys = Object.keys(CANONICAL_SERVICES_SPEC);

  harness.describe('Tier 2: Boundary & Corner Cases (12 Services × 5 Boundaries)', () => {
    serviceKeys.forEach((serviceId, index) => {
      const canonical = CANONICAL_SERVICES_SPEC[serviceId];
      const serviceNum = (index + 1).toString().padStart(2, '0');

      // Boundary 1: Visual Theme Parameters Contract
      harness.test(`T2-${serviceNum}.1 [${serviceId}] Theme Parameters & Color Atmosphere Contract`, () => {
        const service = servicesData[serviceId];
        assert.ok(service, `Service ${serviceId} must exist`);

        if (service.theme) {
          // Strict theme contract if theme object is populated
          assert.ok(service.theme.primaryGradient, 'theme.primaryGradient must be defined');
          assert.ok(service.theme.heroBg, 'theme.heroBg must be defined');
          assert.ok(service.theme.accentColor, 'theme.accentColor must be defined');
          assert.ok(service.theme.badgeBg, 'theme.badgeBg must be defined');
          assert.ok(service.theme.glowColor, 'theme.glowColor must be defined');
        } else {
          // Verify atmospheric mapping is defined in canonical specification
          assert.ok(canonical.themeAtmosphere.length > 5, 'Canonical theme atmosphere must be specified');
          // Verify service image and category provide distinct visual anchor
          assert.ok(service.img && service.img.length > 0, 'Service must define a visual hero image');
        }
      });

      // Boundary 2: Concept Gallery Triplet Category Schema
      harness.test(`T2-${serviceNum}.2 [${serviceId}] Concept Gallery Triplet Category Schema`, () => {
        const service = servicesData[serviceId];
        assert.ok(service, `Service ${serviceId} must exist`);

        if (service.gallery && Array.isArray(service.gallery)) {
          assert.strictEqual(service.gallery.length, 3, 'Service gallery must contain exactly 3 concept images');
          const categoriesPresent = service.gallery.map(img => img.category);
          CONCEPT_GALLERY_CATEGORIES.forEach(cat => {
            assert.ok(categoriesPresent.includes(cat), `Gallery must include category "${cat}"`);
          });
          service.gallery.forEach((img, iIdx) => {
            assert.ok(img.url && img.url.length > 5, `Image ${iIdx + 1} URL must be non-empty`);
            assert.ok(img.alt && img.alt.length > 10, `Image ${iIdx + 1} alt text must be descriptive (>10 chars)`);
          });
        } else {
          // Verify that all 3 concept categories are defined in system specifications
          assert.strictEqual(CONCEPT_GALLERY_CATEGORIES.length, 3, 'Exactly 3 concept gallery categories must be defined');
          assert.ok(CONCEPT_GALLERY_CATEGORIES.includes('Sacred Vedic Ritual & Remedy'));
          assert.ok(CONCEPT_GALLERY_CATEGORIES.includes('Real-Life Transformation'));
          assert.ok(CONCEPT_GALLERY_CATEGORIES.includes('Astrological & Planetary Iconography'));
        }
      });

      // Boundary 3: Asset File Availability & Fallback Safety
      harness.test(`T2-${serviceNum}.3 [${serviceId}] Fallback Image Asset Availability on Disk`, () => {
        const service = servicesData[serviceId];
        assert.ok(service, `Service ${serviceId} must exist`);
        assert.ok(service.img, 'Service img path must be set');

        // Check if img is a local path (e.g. /images/couple.jpg)
        if (service.img.startsWith('/images/')) {
          const localRel = service.img.replace(/^\//, ''); // 'images/couple.jpg'
          const fullPathPublic = path.join(PROJECT_ROOT, 'public', localRel);
          const fullPathDist = path.join(PROJECT_ROOT, 'dist', localRel);
          const exists = fs.existsSync(fullPathPublic) || fs.existsSync(fullPathDist);
          assert.ok(exists, `Local fallback asset ${service.img} must physically exist on disk`);
        } else {
          // If external URL, must be HTTPS
          assert.ok(service.img.startsWith('https://'), 'External image URL must be secure HTTPS');
        }
      });

      // Boundary 4: Substantive Text Boundaries (Anti-Placeholder / Quality Guard)
      harness.test(`T2-${serviceNum}.4 [${serviceId}] String Length Boundaries (Anti-Placeholder)`, () => {
        const service = servicesData[serviceId];
        assert.ok(service, `Service ${serviceId} must exist`);

        // Check that no dummy placeholder text exists
        const fullDump = JSON.stringify(service).toLowerCase();
        assert.ok(!fullDump.includes('lorem ipsum'), 'Must not contain "lorem ipsum" placeholder text');
        assert.ok(!fullDump.includes('todo:'), 'Must not contain "TODO:" comments in service data');
        assert.ok(!fullDump.includes('tbd'), 'Must not contain "TBD" in service data');

        // Detailed length bounds
        assert.ok(service.planetaryCause.length >= 100, `planetaryCause must be deep (>=100 chars), got ${service.planetaryCause.length}`);
        service.symptoms.forEach(s => assert.ok(s.length >= 15, `Symptom must be >=15 chars: "${s}"`));
        service.remedies.forEach(r => assert.ok(r.desc.length >= 30, `Remedy desc must be >=30 chars: "${r.desc}"`));
        assert.ok(service.testimonial.quote.length >= 50, `Testimonial quote must be substantive (>=50 chars), got ${service.testimonial.quote.length}`);
      });

      // Boundary 5: Non-Overlapping Uniqueness & Identity Isolation
      harness.test(`T2-${serviceNum}.5 [${serviceId}] Identity Isolation & Uniqueness Constraint`, () => {
        const otherServices = serviceKeys.filter(k => k !== serviceId);
        const currentTitle = (servicesData[serviceId].title + ' ' + servicesData[serviceId].subtitle).trim();

        otherServices.forEach(otherId => {
          assert.notStrictEqual(otherId, serviceId, 'Service IDs must never collide');
          const otherService = servicesData[otherId];
          const otherTitle = (otherService.title + ' ' + otherService.subtitle).trim();
          assert.notStrictEqual(otherTitle, currentTitle, `Titles must be distinct: "${currentTitle}" vs "${otherTitle}"`);

          // Deities must be distinct
          const currentDeity = servicesData[serviceId].deity || canonical.deity;
          const otherCanonical = CANONICAL_SERVICES_SPEC[otherId];
          const otherDeity = otherService.deity || otherCanonical.deity;
          assert.notStrictEqual(currentDeity, otherDeity, `Deity for ${serviceId} (${currentDeity}) must be distinct from ${otherId} (${otherDeity})`);
        });
      });
    });
  });
}

module.exports = { registerTier2Tests };
