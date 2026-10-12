/**
 * Tier 4: Real-World California Client Application Scenarios Tests
 * Simulates 12 realistic end-to-end user journeys from California communities.
 */

const { assert } = require('./utils/testHarness.cjs');
const { loadServicesData } = require('./utils/dataLoader.cjs');

function registerTier4Tests(harness) {
  const servicesData = loadServicesData();

  harness.describe('Tier 4: Real-World California Client Application Scenarios', () => {
    // Scenario 1: San Jose Tech Professional Career Journey
    harness.test('T4-01: San Jose Tech Professional Career Growth & 10th House Karma Journey', () => {
      const service = servicesData['career-business'];
      assert.ok(service, 'Career service must be accessible');

      // 1. Professional identifies career stagnation symptom
      const stagnationSymptom = service.symptoms.find(s => s.toLowerCase().includes('stagnation'));
      assert.ok(stagnationSymptom, 'Must address career stagnation');

      // 2. Professional checks 10th house planetary explanation
      assert.ok(service.planetaryCause.includes('10th House') || service.planetaryCause.includes('Karma Bhava'));

      // 3. Selects Surya / Mercury business remedy
      const remedy = service.remedies.find(r => r.name.toLowerCase().includes('surya') || r.name.toLowerCase().includes('mercury'));
      assert.ok(remedy, 'Must provide Surya or Mercury business growth remedy');

      // 4. Verifies San Jose example client journey
      assert.strictEqual(service.testimonial.client, 'Rahul V.');
      assert.ok(service.testimonial.location.includes('San Jose'));
    });

    // Scenario 2: Irvine Couple Love Reconciliation Journey
    harness.test('T4-02: Irvine Couple Venus (Shukra) Relationship Healing Journey', () => {
      const service = servicesData['love-relationship'];
      assert.ok(service, 'Love relationship service must be accessible');

      // 1. Couple identifies tension and silence in conversation
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('silence') || s.toLowerCase().includes('argument'));
      assert.ok(symptom, 'Must address tension, silence or repeated arguments');

      // 2. Explores Venus Strengthening Puja
      const remedy = service.remedies.find(r => r.name.includes('Venus'));
      assert.ok(remedy, 'Must offer a Venus (Shukra) remedy');

      // 3. Verifies Irvine example client journey
      assert.strictEqual(service.testimonial.client, 'Neha & Arjun S.');
      assert.ok(service.testimonial.location.includes('Irvine'));
    });

    // Scenario 3: Fremont Family Marriage & Manglik Dosha Journey
    harness.test('T4-03: Fremont Family Kundali Matching & Manglik Dosha Journey', () => {
      const service = servicesData['marriage-compatibility'];
      assert.ok(service, 'Marriage service must be accessible');

      // 1. Family reviews Manglik Dosha concerns
      const manglikSymptom = service.symptoms.find(s => s.toLowerCase().includes('mangal') || s.toLowerCase().includes('manglik'));
      assert.ok(manglikSymptom, 'Must address Mangal/Manglik dosha in symptoms');

      // 2. Identifies Manglik shanti and Uma-Maheshwar remedies
      const remedy = service.remedies.find(r => r.name.toLowerCase().includes('manglik') || r.name.toLowerCase().includes('uma-maheshwar'));
      assert.ok(remedy, 'Must provide Manglik Dosha or Uma-Maheshwar remedy');

      // 3. Verifies Fremont example client journey
      assert.strictEqual(service.testimonial.client, 'Riya & Karan M.');
      assert.ok(service.testimonial.location.includes('Fremont'));
    });

    // Scenario 4: Cerritos Household Black Magic Cleansing Journey
    harness.test('T4-04: Cerritos Household Confidential Spiritual Cleansing Journey', () => {
      const service = servicesData['black-magic-removal'];
      assert.ok(service, 'Black magic service must be accessible');

      // 1. Identifies nightmares and simultaneous setbacks
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('nightmares') || s.toLowerCase().includes('wrong at once'));
      assert.ok(symptom, 'Must address nightmares or simultaneous misfortune');

      // 2. Inspects Sudarshana & Narasimha Protection Homa
      const remedy = service.remedies.find(r => r.name.includes('Sudarshana'));
      assert.ok(remedy, 'Must provide Sudarshana protection homa');

      // 3. Checks confidential diagnosis in consultation steps
      assert.ok(service.howItWorks[0].toLowerCase().includes('confidential'));

      // 4. Verifies Cerritos example client journey
      assert.ok(service.testimonial.location.includes('Cerritos'));
    });

    // Scenario 5: Artesia Boutique Owner Evil Eye Protection Journey
    harness.test('T4-05: Artesia Boutique Owner Evil Eye & Nazar Shielding Journey', () => {
      const service = servicesData['evil-eye-protection'];
      assert.ok(service, 'Evil eye service must be accessible');

      // 1. Identifies sudden customer drop after success
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('customers'));
      assert.ok(symptom, 'Must address a sudden loss of customers');

      // 2. Explores Hanuman & Drishti Ganapati protection
      const remedy = service.remedies.find(r => r.name.toLowerCase().includes('hanuman') || r.name.toLowerCase().includes('ganapati'));
      assert.ok(remedy, 'Must provide Hanuman or Drishti Ganapati protection');

      // 3. Verifies Artesia example client journey
      assert.strictEqual(service.testimonial.client, 'Pooja D.');
      assert.ok(service.testimonial.location.includes('Artesia'));
    });

    // Scenario 6: Sacramento Parents Family & Child Harmony Journey
    harness.test('T4-06: Sacramento Parents Domestic Harmony & Child Focus Journey', () => {
      const service = servicesData['family-child-problems'];
      assert.ok(service, 'Family service must be accessible');

      // 1. Identifies child concentration difficulties
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('focus') || s.toLowerCase().includes('rebels'));
      assert.ok(symptom, 'Must address child focus and rebellion');

      // 2. Selects Saraswati prayers
      const remedy = service.remedies.find(r => r.name.includes('Saraswati'));
      assert.ok(remedy, 'Must provide Saraswati prayer remedy');

      // 3. Verifies Sacramento example client journey
      assert.strictEqual(service.testimonial.client, 'Anjali R.');
      assert.ok(service.testimonial.location.includes('Sacramento'));
    });

    // Scenario 7: Pasadena Resident Wellness & Ayur-Jyotish Journey
    harness.test('T4-07: Pasadena Resident Restless Sleep & Ayur-Jyotish Wellbeing Journey', () => {
      const service = servicesData['health-wellness'];
      assert.ok(service, 'Wellness service must be accessible');

      // 1. Identifies sleep difficulties
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('sleep') || s.toLowerCase().includes('anxious'));
      assert.ok(symptom, 'Must address sleep difficulties and anxiety');

      // 2. Selects Mrityunjaya Japa
      const remedy = service.remedies.find(r => r.name.includes('Mrityunjaya'));
      assert.ok(remedy, 'Must provide Mrityunjaya japa');

      // 3. Remedies must be framed as complementary to medical care
      assert.ok(service.howItWorks.some(step => step.toLowerCase().includes('medical')), 'Must work alongside medical care');

      // 4. Verifies Pasadena example client journey
      assert.strictEqual(service.testimonial.client, 'Meera J.');
      assert.ok(service.testimonial.location.includes('Pasadena'));
    });

    // Scenario 8: Riverside Business Owner Court Case Journey
    harness.test('T4-08: Riverside Business Owner Baglamukhi Legal Guidance Journey', () => {
      const service = servicesData['court-case-problems'];
      assert.ok(service, 'Court case service must be accessible');

      // 1. Identifies false claims and prolonged legal fight
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('legal') || s.toLowerCase().includes('false claims'));
      assert.ok(symptom, 'Must address false claims and litigation');

      // 2. Selects Baglamukhi Victory Puja
      const remedy = service.remedies.find(r => r.name.includes('Baglamukhi'));
      assert.ok(remedy, 'Must provide Baglamukhi puja');

      // 3. Verifies Riverside example client journey
      assert.strictEqual(service.testimonial.client, 'Harjit S.');
      assert.ok(service.testimonial.location.includes('Riverside'));
    });

    // Scenario 9: Northridge Owners Stalled Property Sale Journey
    harness.test('T4-09: Northridge Owners Stalled Property Sale Resolution Journey', () => {
      const service = servicesData['property-land-disputes'];
      assert.ok(service, 'Property service must be accessible');

      // 1. Identifies a listing with no serious offers
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('listing') || s.toLowerCase().includes('offers'));
      assert.ok(symptom, 'Must address stalled property sales');

      // 2. Explores Bhumi Puja or Vastu correction
      const remedy = service.remedies.find(r => r.name.includes('Bhumi') || r.name.includes('Vastu'));
      assert.ok(remedy, 'Must provide Bhumi Puja or Vastu remedy');

      // 3. Verifies Northridge example client journey
      assert.strictEqual(service.testimonial.client, 'Tarun & Shreya B.');
      assert.ok(service.testimonial.location.includes('Northridge'));
    });

    // Scenario 10: Bakersfield Restaurant Owner Debt Relief Journey
    harness.test('T4-10: Bakersfield Restaurant Owner Debt-Relief Homa Journey', () => {
      const service = servicesData['financial-problems'];
      assert.ok(service, 'Financial service must be accessible');

      // 1. Identifies growing loans and card balances
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('loans') || s.toLowerCase().includes('debt'));
      assert.ok(symptom, 'Must address growing debt');

      // 2. Explores Debt-Relief Homa or Lakshmi yantra
      const remedy = service.remedies.find(r => r.name.includes('Debt-Relief') || r.name.includes('Lakshmi'));
      assert.ok(remedy, 'Must provide debt-relief or Lakshmi remedy');

      // 3. Verifies Bakersfield example client journey
      assert.strictEqual(service.testimonial.client, 'Sunil P.');
      assert.ok(service.testimonial.location.includes('Bakersfield'));
    });

    // Scenario 11: Los Angeles Separated Partner Love Reunion Journey
    harness.test('T4-11: Los Angeles Separated Partner Sattvic Love Reunion Journey', () => {
      const service = servicesData['get-ex-love-back'];
      assert.ok(service, 'Love reunion service must be accessible');

      // 1. Identifies being blocked on phone and social media
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('blocked'));
      assert.ok(symptom, 'Must address being blocked by a partner');

      // 2. Explores Sattvic love mantras or Radha-Krishna puja
      const remedy = service.remedies.find(r => r.name.includes('Sattvic') || r.name.includes('Radha-Krishna'));
      assert.ok(remedy, 'Must provide a Sattvic love reunion remedy');

      // 3. Verifies Los Angeles example client journey
      assert.strictEqual(service.testimonial.client, 'Vikas T.');
      assert.ok(service.testimonial.location.includes('Los Angeles'));
    });

    // Scenario 12: San Diego Seeker Complete Janam Kundali Journey
    harness.test('T4-12: San Diego Seeker Complete Janam Kundali Reading Journey', () => {
      const service = servicesData['horoscope-reading'];
      assert.ok(service, 'Horoscope reading service must be accessible');

      // 1. Identifies life direction uncertainty or Sade Sati
      const symptom = service.symptoms.find(s => s.toLowerCase().includes('unsure') || s.toLowerCase().includes('sade sati'));
      assert.ok(symptom, 'Must address life uncertainty or Sade Sati');

      // 2. Selects 12-House analysis or Dasha timeline
      const remedy = service.remedies.find(r => r.name.includes('12-House') || r.name.includes('Dasha'));
      assert.ok(remedy, 'Must provide 12-House analysis or Dasha timeline');

      // 3. Verifies San Diego example client journey
      assert.strictEqual(service.testimonial.client, 'Kavya N.');
      assert.ok(service.testimonial.location.includes('San Diego'));
    });
  });
}

module.exports = { registerTier4Tests };
