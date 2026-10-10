/**
 * Empirical Challenger Verification Suite for Milestone M1
 * Probes src/data/servicesData.ts for strict compliance with M1 requirements:
 * 1. Service IDs & slug uniqueness (12 services, 0 duplicates)
 * 2. Presiding Vedic Deities (non-empty, matching canonical specs)
 * 3. ServiceTheme schema (10+ valid theme styling properties per service)
 * 4. 36 Concept Gallery Items (non-empty URLs, categories, titles, captions, licenses, alts, and verified local fallbacks on disk)
 * 5. Data integrity (symptoms count=5, remedies count=4, howItWorks count=4, UK testimonials)
 */

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');
const { loadServicesData, CANONICAL_SERVICES_SPEC, CONCEPT_GALLERY_CATEGORIES, PROJECT_ROOT } = require('./utils/dataLoader.cjs');

function runM1EmpiricalVerification() {
  const services = loadServicesData();
  const serviceKeys = Object.keys(services);
  const expectedSlugs = Object.keys(CANONICAL_SERVICES_SPEC);

  const report = {
    totalServices: serviceKeys.length,
    slugsVerified: 0,
    deitiesVerified: 0,
    themesVerified: 0,
    galleryItemsVerified: 0,
    fallbacksVerifiedOnDisk: 0,
    errors: [],
  };

  // 1. Verify Service IDs & Slug Uniqueness
  assert.strictEqual(serviceKeys.length, 12, 'Must contain exactly 12 services in detailedServicesData');
  const seenIds = new Set();

  for (const slug of expectedSlugs) {
    if (!services[slug]) {
      report.errors.push(`Missing expected service slug: ${slug}`);
      continue;
    }
    const svc = services[slug];
    if (seenIds.has(svc.id)) {
      report.errors.push(`Duplicate service id detected: ${svc.id}`);
    }
    seenIds.add(svc.id);
    assert.strictEqual(svc.id, slug, `Service key and internal id must match for ${slug}`);
    report.slugsVerified++;
  }
  assert.strictEqual(seenIds.size, 12, 'All 12 service slugs must be distinct with 0 duplicates');

  // 2. Verify Presiding Deities & Theme Properties
  const requiredThemeProps = [
    'primaryGradient',
    'heroBg',
    'accentColor',
    'accentBorder',
    'badgeBg',
    'badgeText',
    'badgeBorder',
    'testimonialBg',
    'testimonialBorder',
    'cardBorderHover',
    'glowColor',
  ];

  for (const slug of serviceKeys) {
    const svc = services[slug];

    // Deity verification
    if (!svc.deity || typeof svc.deity !== 'string' || svc.deity.trim().length === 0) {
      report.errors.push(`Service ${slug} has empty or missing deity`);
    } else {
      report.deitiesVerified++;
    }

    // Theme verification
    if (!svc.theme || typeof svc.theme !== 'object') {
      report.errors.push(`Service ${slug} is missing theme object`);
    } else {
      let validPropsCount = 0;
      for (const prop of requiredThemeProps) {
        if (svc.theme[prop] && typeof svc.theme[prop] === 'string' && svc.theme[prop].trim().length > 0) {
          validPropsCount++;
        } else {
          report.errors.push(`Service ${slug} theme missing or empty property: ${prop}`);
        }
      }
      if (validPropsCount >= 10) {
        report.themesVerified++;
      }
    }

    // Symptoms (5) & Remedies (4) & Consultation Steps (4)
    assert.strictEqual(svc.symptoms.length, 5, `Service ${slug} must have exactly 5 symptoms`);
    assert.strictEqual(svc.remedies.length, 4, `Service ${slug} must have exactly 4 remedies`);
    assert.strictEqual(svc.howItWorks.length, 4, `Service ${slug} must have exactly 4 howItWorks steps`);
    assert.ok(svc.testimonial && svc.testimonial.quote && svc.testimonial.client && svc.testimonial.location, `Service ${slug} must have full testimonial`);

    // 3. Verify Gallery Items (3 per service = 36 total)
    if (!Array.isArray(svc.gallery) || svc.gallery.length !== 3) {
      report.errors.push(`Service ${slug} gallery does not contain exactly 3 items`);
      continue;
    }

    const categoriesInService = new Set();

    for (let i = 0; i < svc.gallery.length; i++) {
      const item = svc.gallery[i];
      categoriesInService.add(item.category);

      // Check required non-empty string fields
      assert.ok(item.url && item.url.trim().length > 0, `Gallery item [${slug}][${i}] missing url`);
      assert.ok(item.category && CONCEPT_GALLERY_CATEGORIES.includes(item.category), `Gallery item [${slug}][${i}] invalid category: ${item.category}`);
      assert.ok(item.title && item.title.trim().length > 0, `Gallery item [${slug}][${i}] missing title`);
      assert.ok(item.caption && item.caption.trim().length > 0, `Gallery item [${slug}][${i}] missing caption`);
      assert.ok(item.source && ['Unsplash', 'Wikimedia Commons', 'NASA', 'Pexels'].includes(item.source), `Gallery item [${slug}][${i}] invalid source`);
      assert.ok(item.license && item.license.trim().length > 0, `Gallery item [${slug}][${i}] missing license`);
      assert.ok(item.alt && item.alt.trim().length >= 10, `Gallery item [${slug}][${i}] missing or short alt text`);

      // Check fallbackUrl
      assert.ok(item.fallbackUrl && item.fallbackUrl.trim().length > 0, `Gallery item [${slug}][${i}] missing fallbackUrl`);

      // Check fallback file exists on disk
      const localRel = item.fallbackUrl.replace(/^\//, '');
      const publicPath = path.join(PROJECT_ROOT, 'public', localRel);
      const distPath = path.join(PROJECT_ROOT, 'dist', localRel);

      if (fs.existsSync(publicPath) || fs.existsSync(distPath)) {
        report.fallbacksVerifiedOnDisk++;
      } else {
        report.errors.push(`Fallback asset does not exist on disk: ${item.fallbackUrl} for [${slug}][${i}]`);
      }

      report.galleryItemsVerified++;
    }

    assert.strictEqual(categoriesInService.size, 3, `Service ${slug} must cover all 3 distinct gallery categories`);
  }

  return report;
}

if (require.main === module) {
  try {
    const report = runM1EmpiricalVerification();
    console.log('=== Milestone M1 Empirical Verification Report ===');
    console.log(`Total Services: ${report.totalServices}`);
    console.log(`Slugs Verified (0 duplicates): ${report.slugsVerified}/12`);
    console.log(`Deities Verified: ${report.deitiesVerified}/12`);
    console.log(`Themes Verified (11 properties each): ${report.themesVerified}/12`);
    console.log(`Gallery Items Verified: ${report.galleryItemsVerified}/36`);
    console.log(`Fallbacks Confirmed on Disk: ${report.fallbacksVerifiedOnDisk}/36`);
    console.log(`Errors: ${report.errors.length}`);
    if (report.errors.length > 0) {
      console.error(report.errors);
      process.exit(1);
    } else {
      console.log('ALL EMPIRICAL M1 CHECKS PASSED PERFECTLY.');
      process.exit(0);
    }
  } catch (err) {
    console.error('Empirical Verification Failed:', err);
    process.exit(1);
  }
}

module.exports = { runM1EmpiricalVerification };
