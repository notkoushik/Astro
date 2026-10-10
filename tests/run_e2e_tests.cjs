#!/usr/bin/env node
/**
 * Master E2E Automated Test Runner
 * Indian Astrologer Pandith Vikram Vedic Services Expansion
 *
 * Usage:
 *   node tests/run_e2e_tests.cjs
 *   npm test
 */

const { TestHarness, ANSI } = require('./utils/testHarness.cjs');
const { registerTier0Tests } = require('./tier0_build_integrity.test.cjs');
const { registerTier1Tests } = require('./tier1_feature_coverage.test.cjs');
const { registerTier2Tests } = require('./tier2_boundary_corner_cases.test.cjs');
const { registerTier3Tests } = require('./tier3_cross_feature_combinations.test.cjs');
const { registerTier4Tests } = require('./tier4_real_world_scenarios.test.cjs');

async function main() {
  console.log(`${ANSI.bold}${ANSI.yellow}`);
  console.log('╔══════════════════════════════════════════════════════════════════════╗');
  console.log('║       PANDITH VIKRAM VEDIC SERVICES EXPANSION — E2E TEST RUNNER      ║');
  console.log('║             4-Tier Requirement-Driven Verification Suite             ║');
  console.log('╚══════════════════════════════════════════════════════════════════════╝');
  console.log(`${ANSI.reset}`);

  const harness = new TestHarness();

  // Register all tiers
  registerTier0Tests(harness);
  registerTier1Tests(harness);
  registerTier2Tests(harness);
  registerTier3Tests(harness);
  registerTier4Tests(harness);

  const results = await harness.run();
  harness.printSummary();

  if (results.stats.failed > 0) {
    process.exitCode = 1;
  } else {
    process.exitCode = 0;
  }
}

main().catch(err => {
  console.error(`${ANSI.red}FATAL TEST RUNNER ERROR: ${err.message}${ANSI.reset}`);
  console.error(err.stack);
  process.exit(1);
});
