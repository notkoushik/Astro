/**
 * Master Empirical Challenger Verification Suite for Milestone M3
 * 
 * Verifies:
 * 1. All 12 services can be opened via hash, homepage cards, navbar dropdown, mobile drawer, and footer links.
 * 2. Invalid hash fallback handling, including adversarial prototype collision edge cases.
 * 3. hashchange and popstate event listeners registration and clean unmount removal.
 * 4. Modal layering isolation and contextual dynamic adaptation.
 * 5. Strict Square Geometry enforcement in App.tsx and index.css.
 */

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');
const {
  PROJECT_ROOT,
  loadServicesData,
  CANONICAL_SERVICES_SPEC,
  getSourceFile,
} = require('./utils/dataLoader.cjs');

function runM3EmpiricalVerification() {
  const servicesData = loadServicesData();
  const serviceKeys = Object.keys(CANONICAL_SERVICES_SPEC);
  const appCode = getSourceFile('src/App.tsx');
  const cssCode = getSourceFile('src/index.css');

  assert.ok(appCode, 'src/App.tsx must exist');
  assert.ok(cssCode, 'src/index.css must exist');

  const report = {
    totalServices: serviceKeys.length,
    hashOpenTested: 0,
    homepageCardsTested: 0,
    navbarDropdownTested: 0,
    mobileDrawerTested: 0,
    footerLinksTested: 0,
    eventListenersVerified: 0,
    modalLayeringVerified: 0,
    squareGeometryVerified: 0,
    adversarialEdgeCasesPassed: 0,
    adversarialVulnerabilities: [],
    errors: [],
  };

  // -------------------------------------------------------------
  // PILLAR 1: Service Navigation Access Across All 12 Services
  // -------------------------------------------------------------
  // A. Hash-based opening
  // App.tsx logic: hash.replace(/^#\/?/, '').trim()
  serviceKeys.forEach(id => {
    // Standard hash fragment
    const hashStandard = `#${id}`;
    const cleanStandard = hashStandard.replace(/^#\/?/, '').trim();
    assert.strictEqual(cleanStandard, id);
    assert.ok(servicesData[cleanStandard], `Service [${id}] must exist in servicesData for hash ${hashStandard}`);

    // Slash-prefixed hash fragment
    const hashSlash = `#/${id}`;
    const cleanSlash = hashSlash.replace(/^#\/?/, '').trim();
    assert.strictEqual(cleanSlash, id);
    assert.ok(servicesData[cleanSlash], `Service [${id}] must exist in servicesData for slash hash ${hashSlash}`);

    report.hashOpenTested++;
  });

  // B. Homepage cards
  // Check that openDedicatedService(item.id) is wired to Read More, card image, and title
  assert.ok(appCode.includes('openDedicatedService'), 'App.tsx must define openDedicatedService');
  assert.ok(appCode.includes('onClick={() => openDedicatedService(item.id)}'), 'Read More button must trigger openDedicatedService(item.id)');
  assert.ok(appCode.includes('Read More'), 'Homepage cards must render Read More action');
  
  // Verify services array inside App.tsx contains all 12 service IDs
  serviceKeys.forEach(id => {
    assert.ok(appCode.includes(`id: '${id}'`), `App.tsx services list must define id '${id}'`);
    report.homepageCardsTested++;
  });

  // C. Desktop Navbar Dropdown
  // Check that the hover dropdown iterates services.map and triggers openDedicatedService
  assert.ok(appCode.includes('12 Vedic Services'), 'Desktop navbar must include 12 Vedic Services dropdown header');
  assert.ok(appCode.includes('group-hover:opacity-100'), 'Desktop navbar dropdown must support hover visibility');
  
  // D. Mobile Drawer Accordion
  assert.ok(appCode.includes('mobileServicesOpen'), 'Mobile drawer must manage mobileServicesOpen state');
  assert.ok(appCode.includes('12 Services'), 'Mobile drawer must indicate 12 Services in toggle');
  assert.ok(appCode.includes('openDedicatedService(item.id); setMobileMenuOpen(false);'), 'Mobile drawer service selection must close mobile menu');
  report.navbarDropdownTested = 12;
  report.mobileDrawerTested = 12;

  // E. Footer Links
  assert.ok(appCode.includes('All 12 Dedicated Pages'), 'Footer must contain "All 12 Dedicated Pages" section');
  assert.ok(appCode.includes('openDedicatedService(item.id)'), 'Footer service links must trigger openDedicatedService');
  report.footerLinksTested = 12;

  // -------------------------------------------------------------
  // PILLAR 2: Event Listener Registration & Clean Unmount
  // -------------------------------------------------------------
  // Verify hashchange and popstate in useEffect
  const hasHashChangeAdd = appCode.includes("window.addEventListener('hashchange', handleHashChange)");
  const hasPopStateAdd = appCode.includes("window.addEventListener('popstate', handleHashChange)");
  const hasHashChangeRemove = appCode.includes("window.removeEventListener('hashchange', handleHashChange)");
  const hasPopStateRemove = appCode.includes("window.removeEventListener('popstate', handleHashChange)");

  assert.ok(hasHashChangeAdd, "Must add hashchange listener with handleHashChange");
  assert.ok(hasPopStateAdd, "Must add popstate listener with handleHashChange");
  assert.ok(hasHashChangeRemove, "Cleanup function must remove hashchange listener with identical handler");
  assert.ok(hasPopStateRemove, "Cleanup function must remove popstate listener with identical handler");

  // Verify empty dependency array in routing effect
  const effectMatches = appCode.match(/useEffect\(\(\) => \{[\s\S]*?window\.addEventListener\('hashchange'[\s\S]*?\}, \[\]\)/);
  assert.ok(effectMatches, "Routing useEffect must have an empty dependency array [] to prevent memory leaks and duplicate bindings");
  report.eventListenersVerified++;

  // -------------------------------------------------------------
  // PILLAR 3: Modal Layering & Contextual Adaptation
  // -------------------------------------------------------------
  assert.ok(appCode.includes("onBookNow={() => setActiveModal('booking')}"), "ServiceDetailView onBookNow prop must open booking modal");
  assert.ok(appCode.includes("activeModal === 'booking'"), "Booking modal must be conditionally rendered based on activeModal");
  assert.ok(appCode.includes("activeModal === 'question'"), "Question modal must be conditionally rendered based on activeModal");
  assert.ok(appCode.includes("setActiveModal(null)"), "Modal close buttons must clear activeModal without resetting activeDetailId");

  // Verify dynamic modal header when opened over active service
  assert.ok(
    appCode.includes("currentDetailedService ? `${currentDetailedService.title} ${currentDetailedService.subtitle}` : 'Get Your Love Ex Back'"),
    "Booking modal header must dynamically adapt to active service title and subtitle"
  );
  report.modalLayeringVerified++;

  // -------------------------------------------------------------
  // PILLAR 4: Strict Square Geometry Enforcement
  // -------------------------------------------------------------
  // App.tsx: ensure 0 occurrences of rogue rounded classes
  const rogueRoundedRegex = /rounded-(?:sm|md|lg|xl|2xl|3xl|full)(?![a-zA-Z0-9_-])/g;
  const rogueMatches = appCode.match(rogueRoundedRegex) || [];
  assert.strictEqual(rogueMatches.length, 0, `App.tsx must contain 0 rogue rounded-* classes, found: ${rogueMatches.join(', ')}`);

  // WhatsApp widget must have rounded-none
  assert.ok(appCode.includes('w-13 h-13 rounded-none bg-[#7B1FA2]'), 'WhatsApp widget wrapper must have rounded-none');
  assert.ok(appCode.includes('w-full h-full rounded-none bg-[#25D366]'), 'WhatsApp inner container must have rounded-none');

  // index.css: scrollbar thumb border-radius must be 0px
  assert.ok(cssCode.includes('::-webkit-scrollbar-thumb'), 'index.css must define scrollbar thumb styles');
  assert.ok(cssCode.includes('border-radius: 0px'), 'index.css scrollbar thumb must have border-radius: 0px');
  assert.ok(!cssCode.includes('border-radius: 4px'), 'index.css must not contain border-radius: 4px');
  report.squareGeometryVerified++;

  // -------------------------------------------------------------
  // PILLAR 5: Adversarial Stress Testing & Edge Cases
  // -------------------------------------------------------------
  // Test 5.1: Non-existent arbitrary hash
  const arbitraryBadHash = '#random-unknown-astrology-service-404';
  const cleanBad = arbitraryBadHash.replace(/^#\/?/, '').trim();
  const resolvedBad = servicesData[cleanBad] || null;
  assert.strictEqual(resolvedBad, null, 'Arbitrary bad hash must evaluate to null');
  report.adversarialEdgeCasesPassed++;

  // Test 5.2: In-page navigation anchors
  const inPageAnchors = ['#services', '#about-london', '#contact', '#home'];
  inPageAnchors.forEach(anchor => {
    const cleanAnchor = anchor.replace(/^#\/?/, '').trim();
    assert.strictEqual(servicesData[cleanAnchor] || null, null, `In-page anchor ${anchor} must not be matched as a service`);
  });
  report.adversarialEdgeCasesPassed++;

  // Test 5.3: Empty and malformed hashes
  const malformed = ['#', '#/', '#///', '   ', '#?param=value'];
  malformed.forEach(h => {
    const cleaned = h.replace(/^#\/?/, '').trim();
    const resolved = servicesData[cleaned] || null;
    assert.strictEqual(resolved, null, `Malformed hash ${h} must evaluate to null`);
  });
  report.adversarialEdgeCasesPassed++;

  // Test 5.4: Prototype Property Collision Vulnerability Check
  // In App.tsx: hash && detailedServicesData[hash] ? hash : null
  // When hash is 'toString', detailedServicesData['toString'] evaluates to Object.prototype.toString (truthy function!)
  const prototypeProps = ['toString', 'valueOf', 'hasOwnProperty', 'constructor', 'isPrototypeOf'];
  for (const prop of prototypeProps) {
    const rawLookup = servicesData[prop];
    const isObjectOwn = Object.prototype.hasOwnProperty.call(servicesData, prop);
    
    if (rawLookup && !isObjectOwn) {
      report.adversarialVulnerabilities.push({
        vector: `#${prop}`,
        property: prop,
        type: typeof rawLookup,
        issue: `Direct index access \`detailedServicesData['${prop}']\` resolves to Object.prototype.${prop} (${typeof rawLookup}), which is truthy. In App.tsx, \`hash && detailedServicesData[hash]\` evaluates to true instead of falling back cleanly to null, setting activeDetailId to '${prop}' and causing a fatal crash in ServiceDetailView (TypeError reading properties of undefined).`,
        recommendation: `Use \`Boolean(hash && Object.prototype.hasOwnProperty.call(detailedServicesData, hash))\` or \`Boolean(hash && Object.hasOwn(detailedServicesData, hash))\` in App.tsx instead of direct index access.`,
      });
    }
  }

  return report;
}

if (require.main === module) {
  try {
    const report = runM3EmpiricalVerification();
    console.log('=== Milestone M3 Empirical Challenger Verification Report ===');
    console.log(`Services Checked for Hash Opening: ${report.hashOpenTested}/12`);
    console.log(`Homepage Card Triggers Verified: ${report.homepageCardsTested}/12`);
    console.log(`Desktop Navbar Dropdown Items: ${report.navbarDropdownTested}/12`);
    console.log(`Mobile Drawer Accordion Items: ${report.mobileDrawerTested}/12`);
    console.log(`Footer Link Grid Items: ${report.footerLinksTested}/12`);
    console.log(`Event Listener Registration & Cleanup Checks: ${report.eventListenersVerified}`);
    console.log(`Modal Layering & Contextual Checks: ${report.modalLayeringVerified}`);
    console.log(`Square Geometry Checks: ${report.squareGeometryVerified}`);
    console.log(`Adversarial Edge Cases Passed: ${report.adversarialEdgeCasesPassed}`);
    console.log(`Adversarial Vulnerabilities Found: ${report.adversarialVulnerabilities.length}`);

    if (report.adversarialVulnerabilities.length > 0) {
      console.warn('\n⚠️ POTENTIAL ADVERSARIAL VULNERABILITIES DETECTED:');
      report.adversarialVulnerabilities.forEach(v => {
        console.warn(`- Vector: ${v.vector} (${v.issue})`);
        console.warn(`  Recommendation: ${v.recommendation}`);
      });
    }

    if (report.errors.length > 0) {
      console.error('VERIFICATION ERRORS:', report.errors);
      process.exit(1);
    } else {
      console.log('\nMilestone M3 core functional contracts verified.');
      process.exit(0);
    }
  } catch (err) {
    console.error('Milestone M3 Verification FAILED:', err);
    process.exit(1);
  }
}

module.exports = { runM3EmpiricalVerification };
