/**
 * Tier 4: Real-World UK Client Application Scenarios Tests
 * Simulates 12 realistic end-to-end user journeys from UK metropolitan regions.
 */

const { assert } = require('./utils/testHarness.cjs');
const { loadServicesData, CANONICAL_SERVICES_SPEC } = require('./utils/dataLoader.cjs');

function registerTier4Tests(harness) {
  const servicesData = loadServicesData();

  harness.describe('Tier 4: Real-World UK Client Application Scenarios', () => {
    // Scenario 1: London Canary Wharf Executive Career Journey
    harness.test('T4-01: Canary Wharf Executive Career Growth & 10th House Karma Journey', () => {
      const service = servicesData['career-business'];
      assert.ok(service, 'Career service must be accessible');

      // 1. Executive identifies career stagnation symptom
      const stagnationSymptom = service.symptoms.find(s => s.toLowerCase().includes('stagnation'));
      assert.ok(stagnationSymptom, 'Must address chronic career stagnation');

      // 2. Executive checks 10th house planetary explanation
      assert.ok(service.planetaryCause.includes('10th House') || service.planetaryCause.includes('Karma Bhava'));

      // 3. Selects Vyapar Vriddhi / Surya remedy
      const remedy = service.remedies.find(r => r.name.toLowerCase().includes('vyapar') || r.name.toLowerCase().includes('surya'));
      assert.ok(remedy, 'Must provide Surya or business growth remedy');

      // 4. Verifies Canary Wharf client case study
      assert.strictEqual(service.testimonial.client, 'Amit Patel');
      assert.ok(service.testimonial.location.includes('Canary Wharf'));
    });

    // Scenario 2: Wembley Couple Love Reconciliation Journey
    harness.test('T4-02: Wembley Couple Venus (Shukra) Relationship Reconciliation Journey', () => {
      const service = servicesData['love-relationship'];
      assert.ok(service, 'Love relationship service must be accessible');

      // 1. Couple identifies emotional coldness and communication breakdown
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('coldness') || s.toLowerCase().includes('grievances'));
      assert.ok(symptom, 'Must address emotional coldness');

      // 2. Explores Shukra Graha Shanti Puja
      const remedy = service.remedies.find(r => r.name.includes('Shukra'));
      assert.ok(remedy, 'Must offer Shukra Graha Shanti remedy');

      // 3. Verifies Wembley local testimonial
      assert.strictEqual(service.testimonial.client, 'Sunita & Raj');
      assert.ok(service.testimonial.location.includes('Wembley'));
    });

    // Scenario 3: Hounslow Family Marriage & Manglik Dosha Journey
    harness.test('T4-03: Hounslow Family Marriage Compatibility & Manglik Dosha Journey', () => {
      const service = servicesData['marriage-compatibility'];
      assert.ok(service, 'Marriage service must be accessible');

      // 1. Family reviews Mangal Dosha obstacles
      const manglikSymptom = service.symptoms.find(s => s.toLowerCase().includes('mangal') || s.toLowerCase().includes('manglik'));
      assert.ok(manglikSymptom, 'Must address Mangal/Manglik dosha in symptoms');

      // 2. Identifies Ashtakoota Milan and Kumbh Vivah remedies
      const remedy = service.remedies.find(r => r.name.toLowerCase().includes('mangal') || r.name.toLowerCase().includes('gauri'));
      assert.ok(remedy, 'Must provide Mangal Dosha or Gauri Shankar remedy');

      // 3. Verifies Hounslow local testimonial
      assert.strictEqual(service.testimonial.client, 'Pooja & Harpreet');
      assert.ok(service.testimonial.location.includes('Hounslow'));
    });

    // Scenario 4: Slough Household Black Magic Removal Journey
    harness.test('T4-04: Slough Household Confidential Spiritual Cleansing Journey', () => {
      const service = servicesData['black-magic-removal'];
      assert.ok(service, 'Black magic service must be accessible');

      // 1. Identifies severe simultaneous misfortune and nightmares
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('nightmares') || s.toLowerCase().includes('misfortune'));
      assert.ok(symptom, 'Must address dark nightmares or misfortune');

      // 2. Inspects Maha Sudarshana & Narasimha Homa
      const remedy = service.remedies.find(r => r.name.includes('Sudarshana'));
      assert.ok(remedy, 'Must provide Maha Sudarshana fire homa');

      // 3. Checks 100% confidential diagnosis in consultation steps
      assert.ok(service.howItWorks[0].toLowerCase().includes('confidential'));

      // 4. Verifies Slough testimonial
      assert.ok(service.testimonial.location.includes('Slough'));
    });

    // Scenario 5: Ealing Boutique Owner Evil Eye Protection Journey
    harness.test('T4-05: Ealing Boutique Owner Evil Eye & Nazar Shielding Journey', () => {
      const service = servicesData['evil-eye-protection'];
      assert.ok(service, 'Evil eye service must be accessible');

      // 1. Identifies sudden customer/sales drop from jealousy
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('customers') || s.toLowerCase().includes('footfall'));
      assert.ok(symptom, 'Must address dropped customers or footfall');

      // 2. Explores Hanuman Chalisa & Drishti Ganesha protection
      const remedy = service.remedies.find(r => r.name.toLowerCase().includes('hanuman') || r.name.toLowerCase().includes('ganesha'));
      assert.ok(remedy, 'Must provide Hanuman or Drishti Ganesha talisman');

      // 3. Verifies Ealing boutique testimonial
      assert.strictEqual(service.testimonial.client, 'Priya Mehta');
      assert.ok(service.testimonial.location.includes('Ealing'));
    });

    // Scenario 6: Croydon Parents Family & Child Harmony Journey
    harness.test('T4-06: Croydon Parents Domestic Harmony & Child Focus Journey', () => {
      const service = servicesData['family-child-problems'];
      assert.ok(service, 'Family service must be accessible');

      // 1. Identifies child concentration and study defiance
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('focus') || s.toLowerCase().includes('defiance'));
      assert.ok(symptom, 'Must address child focus and defiance');

      // 2. Selects Saraswati & Budha Medha Suktam
      const remedy = service.remedies.find(r => r.name.includes('Saraswati'));
      assert.ok(remedy, 'Must provide Saraswati prayer remedy');

      // 3. Verifies Croydon client testimonial
      assert.strictEqual(service.testimonial.client, 'Deepa Verma');
      assert.ok(service.testimonial.location.includes('Croydon'));
    });

    // Scenario 7: Ilford Resident Health & Ayur-Jyotish Journey
    harness.test('T4-07: Ilford Resident Chronic Insomnia & Ayur-Jyotish Healing Journey', () => {
      const service = servicesData['health-wellness'];
      assert.ok(service, 'Health service must be accessible');

      // 1. Identifies chronic insomnia and cyclic illness
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('sleep') || s.toLowerCase().includes('insomnia'));
      assert.ok(symptom, 'Must address sleep disorders and insomnia');

      // 2. Selects Maha Mrityunjaya Japa
      const remedy = service.remedies.find(r => r.name.includes('Mrityunjaya'));
      assert.ok(remedy, 'Must provide Maha Mrityunjaya japa');

      // 3. Verifies Ilford client testimonial
      assert.strictEqual(service.testimonial.client, 'Meera K.');
      assert.ok(service.testimonial.location.includes('Ilford'));
    });

    // Scenario 8: Birmingham Merchant Court Case Victory Journey
    harness.test('T4-08: Birmingham Merchant Maa Baglamukhi Court Case Victory Journey', () => {
      const service = servicesData['court-case-problems'];
      assert.ok(service, 'Court case service must be accessible');

      // 1. Identifies false allegations and prolonged lawsuit
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('legal') || s.toLowerCase().includes('allegations'));
      assert.ok(symptom, 'Must address false allegations and litigation');

      // 2. Selects Maa Baglamukhi Shatru Nashak Puja
      const remedy = service.remedies.find(r => r.name.includes('Baglamukhi'));
      assert.ok(remedy, 'Must provide Maa Baglamukhi litigation puja');

      // 3. Verifies Birmingham client testimonial
      assert.strictEqual(service.testimonial.client, 'Vikramjit Singh');
      assert.ok(service.testimonial.location.includes('Birmingham'));
    });

    // Scenario 9: Stratford Landowner Property Dispute Resolution Journey
    harness.test('T4-09: Stratford Landowner Commercial Property Sale Resolution Journey', () => {
      const service = servicesData['property-land-disputes'];
      assert.ok(service, 'Property service must be accessible');

      // 1. Identifies unsold property on market for months
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('market') || s.toLowerCase().includes('buyers'));
      assert.ok(symptom, 'Must address stalled property sales');

      // 2. Explores Bhumi & Mars (Mangal) Shanti Homa
      const remedy = service.remedies.find(r => r.name.includes('Bhumi') || r.name.includes('Vastu'));
      assert.ok(remedy, 'Must provide Bhumi Shanti or Vastu remedy');

      // 3. Verifies Stratford client testimonial
      assert.strictEqual(service.testimonial.client, 'Tariq & Shreya');
      assert.ok(service.testimonial.location.includes('Stratford'));
    });

    // Scenario 10: Southall Business Owner Debt Clearance Journey
    harness.test('T4-10: Southall Business Owner Rin Mukti Debt Relief Journey', () => {
      const service = servicesData['financial-problems'];
      assert.ok(service, 'Financial service must be accessible');

      // 1. Identifies mounting debt cycles and difficulty clearing loans
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('debt'));
      assert.ok(symptom, 'Must address debt cycles');

      // 2. Explores Rin Mukti (Debt Relief) Homa
      const remedy = service.remedies.find(r => r.name.includes('Rin Mukti') || r.name.includes('Lakshmi'));
      assert.ok(remedy, 'Must provide Rin Mukti or Lakshmi remedy');

      // 3. Verifies Southall client testimonial
      assert.strictEqual(service.testimonial.client, 'Ramesh K.');
      assert.ok(service.testimonial.location.includes('Southall'));
    });

    // Scenario 11: Central London Separated Lover Ex Love Back Journey
    harness.test('T4-11: Central London Separated Lover Satvik Vashikaran Reunion Journey', () => {
      const service = servicesData['get-ex-love-back'];
      assert.ok(service, 'Get Ex Love Back service must be accessible');

      // 1. Identifies complete communication blackout (blocked on phone/social media)
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('blackout') || s.toLowerCase().includes('blocked'));
      assert.ok(symptom, 'Must address partner communication blackout');

      // 2. Explores Satvik Vashikaran & Mohini Mantra Sadhana
      const remedy = service.remedies.find(r => r.name.includes('Vashikaran') || r.name.includes('Mohini'));
      assert.ok(remedy, 'Must provide pure Satvik Vashikaran remedy');

      // 3. Verifies Central London testimonial
      assert.strictEqual(service.testimonial.client, 'Chloe & Arjun');
      assert.ok(service.testimonial.location.includes('Central London'));
    });

    // Scenario 12: Richmond Seeker Comprehensive Janam Kundali Journey
    harness.test('T4-12: Richmond Seeker Comprehensive Janam Kundali Reading Journey', () => {
      const service = servicesData['horoscope-reading'];
      assert.ok(service, 'Horoscope reading service must be accessible');

      // 1. Identifies major life indecision and Dasha curiosity
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('indecisive') || s.toLowerCase().includes('sade sati'));
      assert.ok(symptom, 'Must address life indecision or Sade Sati');

      // 2. Selects 12-House Astrological Breakdown & Dasha Timeline
      const remedy = service.remedies.find(r => r.name.includes('12-House') || r.name.includes('Dasha'));
      assert.ok(remedy, 'Must provide 12-House breakdown or Dasha timeline');

      // 3. Verifies Richmond client testimonial
      assert.strictEqual(service.testimonial.client, 'Kavita Sharma');
      assert.ok(service.testimonial.location.includes('Richmond'));
    });
  });
}

module.exports = { registerTier4Tests };
