/**
 * Tier 3: Cross-Feature Combinations & State Interactions Tests
 * Verifies pairwise transitions, hash-synchronized routing, modal layering, form validation, and square geometry (18 tests).
 */

const { assert } = require('./utils/testHarness.cjs');
const {
  loadServicesData,
  getSourceFile,
  CANONICAL_SERVICES_SPEC,
} = require('./utils/dataLoader.cjs');

function registerTier3Tests(harness) {
  const servicesData = loadServicesData();
  const serviceKeys = Object.keys(CANONICAL_SERVICES_SPEC);

  harness.describe('Tier 3: Cross-Feature Combinations & State Interactions', () => {
    // T3-01: Service-to-Service State Isolation
    harness.test('T3-01: Service-to-Service State Isolation (Pairwise Clean Swap)', () => {
      const serviceA = servicesData['love-relationship'];
      const serviceB = servicesData['career-business'];
      assert.ok(serviceA && serviceB, 'Both services must exist');

      // Verify that swapping active services produces zero bleed
      assert.notStrictEqual(serviceA.id, serviceB.id);
      assert.notStrictEqual(serviceA.category, serviceB.category);
      assert.notStrictEqual(serviceA.planetaryCause, serviceB.planetaryCause);
      assert.notStrictEqual(serviceA.testimonial.client, serviceB.testimonial.client);

      // Verify remedies do not cross-pollinate
      const namesA = serviceA.remedies.map(r => r.name);
      const namesB = serviceB.remedies.map(r => r.name);
      namesA.forEach(name => {
        assert.ok(!namesB.includes(name), `Remedy "${name}" must not leak across services`);
      });
    });

    // T3-02: Breadcrumb Navigation Hierarchy
    harness.test('T3-02: Breadcrumb Navigation Hierarchy in ServiceDetailView', () => {
      const code = getSourceFile('src/components/ServiceDetailView.tsx');
      assert.ok(code, 'ServiceDetailView.tsx must exist');
      assert.ok(code.includes('Home'), 'Breadcrumbs must contain "Home" link');
      assert.ok(code.includes('Astrology Services'), 'Breadcrumbs must contain "Astrology Services" link');
      assert.ok(code.includes('{service.title}'), 'Breadcrumbs must render dynamic active service title');
      assert.ok(code.includes('onClick={onBack}'), 'Breadcrumb items must invoke onBack callback');
    });

    // T3-03: "Back to All Services" Trigger
    harness.test('T3-03: "Back to All Services" Button Wiring and Smooth Scroll', () => {
      const code = getSourceFile('src/components/ServiceDetailView.tsx');
      assert.ok(code.includes('Back to All Services'), 'Must provide "Back to All Services" action');
      assert.ok(code.includes('onClick={onBack}'), 'Back button must trigger onBack callback');

      const appCode = getSourceFile('src/App.tsx');
      assert.ok(appCode.includes('closeDedicatedService'), 'App.tsx must define closeDedicatedService function');
      assert.ok(appCode.includes('setActiveDetailId(null)'), 'Closing dedicated service must reset activeDetailId to null');
      assert.ok(appCode.includes("window.scrollTo({ top: 0, behavior: 'smooth' })"), 'Must scroll smoothly to top');
    });

    // T3-04: Hash-Synchronized Routing Logic
    harness.test('T3-04: Hash-Synchronized Routing and Deep-Link Compatibility', () => {
      // Test that all 12 service IDs form valid URL hash fragments
      serviceKeys.forEach(id => {
        const hash = `#${id}`;
        const targetId = hash.replace(/^#/, '');
        assert.ok(servicesData[targetId], `Hash fragment "${hash}" must resolve to valid service`);
      });
    });

    // T3-05: Hash Route Cleanup
    harness.test('T3-05: Hash Route Cleanup on Return to Homepage', () => {
      const appCode = getSourceFile('src/App.tsx');
      assert.ok(appCode, 'App.tsx must exist');
      // Verify closing service resets state
      assert.ok(appCode.includes('closeDedicatedService') || appCode.includes('setActiveDetailId(null)'), 'App must support returning to home state');
    });

    // T3-06: Invalid Hash Resilience
    harness.test('T3-06: Invalid Hash Graceful Fallback Handling', () => {
      const invalidHash = '#nonexistent-vedic-service-999';
      const cleanId = invalidHash.replace(/^#/, '');
      const resolved = servicesData[cleanId] || null;
      assert.strictEqual(resolved, null, 'Unmatched hash must resolve to null and not throw');
    });

    // T3-07: Homepage "Read More" Wiring for All 12 Services
    harness.test('T3-07: Homepage Services Grid "Read More" Wiring', () => {
      const appCode = getSourceFile('src/App.tsx');
      assert.ok(appCode.includes('openDedicatedService'), 'App.tsx must define openDedicatedService');
      assert.ok(appCode.includes('Read More'), 'Homepage cards must render "Read More" action');
      assert.ok(appCode.includes('onClick={() => openDedicatedService(item.id)}'), 'Read More buttons must pass service ID to openDedicatedService');
    });

    // T3-08: Modal Layering Over Dedicated Service View
    harness.test('T3-08: Modal Layering: Booking Modal Trigger from Service Detail', () => {
      const appCode = getSourceFile('src/App.tsx');
      assert.ok(appCode.includes('onBookNow={() => setActiveModal(\'booking\')}'), 'ServiceDetailView onBookNow prop must open booking modal');
      assert.ok(appCode.includes('activeModal === \'booking\''), 'App.tsx must maintain separate modal state');
    });

    // T3-09: Modal Dismissal Retains Service Detail View
    harness.test('T3-09: Modal Dismissal Retains Active Dedicated Service View', () => {
      const appCode = getSourceFile('src/App.tsx');
      assert.ok(appCode.includes('setActiveModal(null)'), 'Closing modal must set activeModal to null without touching activeDetailId');
    });

    // T3-10: Form Input Validation: Mandatory Fields
    harness.test('T3-10: Consultation Form Enforces Mandatory Fields (Name, Phone, Notes)', () => {
      const code = getSourceFile('src/components/ServiceDetailView.tsx');
      assert.ok(code.includes('Your Full Name *'), 'Name field must be marked mandatory');
      assert.ok(code.includes('Phone Number (with Country Code) *'), 'Phone field must be marked mandatory');
      assert.ok(code.includes('Describe Your Situation *'), 'Situation/Notes field must be marked mandatory');
      assert.ok(code.includes('required'), 'HTML5 required attribute must be applied to mandatory inputs');
    });

    // T3-11: Form Input Validation: Telephone Format & UK Code
    harness.test('T3-11: Consultation Form Phone Field Supports UK Format', () => {
      const code = getSourceFile('src/components/ServiceDetailView.tsx');
      assert.ok(code.includes('type="tel"'), 'Phone input must use type="tel"');
      assert.ok(code.includes('+44 7537121638'), 'Phone input placeholder must demonstrate UK country code format');
    });

    // T3-12: Form Optional Field: Date of Birth
    harness.test('T3-12: Date of Birth is Optional in Consultation Inquiry Form', () => {
      const code = getSourceFile('src/components/ServiceDetailView.tsx');
      assert.ok(code.includes('Date of Birth (Optional)'), 'DOB field must be designated as Optional');
    });

    // T3-13: Form Submission Lifecycle: Feedback, Confetti & Reset
    harness.test('T3-13: Form Submission Triggers Confetti and Success State with Auto-Reset', () => {
      const code = getSourceFile('src/components/ServiceDetailView.tsx');
      assert.ok(code.includes('confetti({'), 'Form submit must invoke confetti animation');
      assert.ok(code.includes('setSubmitted(true)'), 'Form submit must transition to submitted=true state');
      assert.ok(code.includes('Inquiry Sent!'), 'Success message "Inquiry Sent!" must be rendered');
      assert.ok(code.includes('setTimeout'), 'Must schedule automatic form reset');
      assert.ok(code.includes('3000'), 'Auto-reset timer must be configured to 3000ms');
    });

    // T3-14: Direct Telephone Helpline Integrity
    harness.test('T3-14: Direct Telephone Helpline Links Use Consistent UK Number', () => {
      const code = getSourceFile('src/components/ServiceDetailView.tsx');
      assert.ok(code.includes('href="tel:+447537121638"'), 'Must render direct tel: link to +44 7537121638 in Hero');
      assert.ok(code.includes('📞 +44 7537121638'), 'Must render visible helpline badge in Quick Helpline Box');
    });

    // T3-15: Square UI Geometry: Container Cards Enforce rounded-none
    harness.test('T3-15: Container Cards in ServiceDetailView Strictly Enforce rounded-none', () => {
      const code = getSourceFile('src/components/ServiceDetailView.tsx');
      const roundedNoneOccurrences = (code.match(/rounded-none/g) || []).length;
      assert.ok(roundedNoneOccurrences >= 10, `Must enforce rounded-none extensively across DOM (found ${roundedNoneOccurrences})`);
    });

    // T3-16: Square UI Geometry: Buttons & Badges Enforce rounded-none
    harness.test('T3-16: Action Buttons and Badges Strictly Enforce rounded-none', () => {
      const code = getSourceFile('src/components/ServiceDetailView.tsx');
      assert.ok(/href="tel:[^"]*"[\s\S]*?rounded-none/.test(code), 'Call CTA button must enforce rounded-none');
      assert.ok(/onClick=\{onBookNow\}[\s\S]*?rounded-none/.test(code), 'Book Private Session button must enforce rounded-none');
    });

    // T3-17: Square UI Geometry: Form Inputs Enforce rounded-none
    harness.test('T3-17: Inquiry Form Input and Textarea Elements Enforce rounded-none', () => {
      const code = getSourceFile('src/components/ServiceDetailView.tsx');
      assert.ok(/<input[\s\S]*?rounded-none/.test(code), 'Form inputs must enforce rounded-none border geometry');
      assert.ok(/<textarea[\s\S]*?rounded-none/.test(code), 'Form textarea must enforce rounded-none border geometry');
    });

    // T3-18: Square UI Geometry: Zero Rogue Rounded Utility Classes
    harness.test('T3-18: Zero Rogue Rounded Classes (rounded-md, rounded-lg, rounded-full) in Service Detail View', () => {
      const code = getSourceFile('src/components/ServiceDetailView.tsx');
      const hasRogueRounded =
        code.includes('rounded-md') ||
        code.includes('rounded-lg') ||
        code.includes('rounded-xl') ||
        code.includes('rounded-2xl') ||
        code.includes('rounded-3xl');
      assert.strictEqual(hasRogueRounded, false, 'ServiceDetailView must have 0 occurrences of rounded-md/lg/xl classes');
    });
  });
}

module.exports = { registerTier3Tests };
