/**
 * Test Utility: Minimal Native Test Harness
 * Provides describe, test, assertions, ANSI color formatting, and execution reporting.
 */

const assert = require('node:assert');

const ANSI = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
};

class TestHarness {
  constructor() {
    this.suites = [];
    this.currentSuite = null;
    this.stats = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      durationMs: 0,
    };
    this.failures = [];
  }

  describe(name, fn) {
    const suite = {
      name,
      tests: [],
      stats: { total: 0, passed: 0, failed: 0 },
    };
    this.suites.push(suite);
    const prevSuite = this.currentSuite;
    this.currentSuite = suite;
    try {
      fn();
    } finally {
      this.currentSuite = prevSuite;
    }
  }

  test(name, fn) {
    if (!this.currentSuite) {
      this.describe('Default Suite', () => {
        this.currentSuite.tests.push({ name, fn });
      });
      return;
    }
    this.currentSuite.tests.push({ name, fn });
  }

  async run() {
    const startTime = Date.now();
    this.stats = { total: 0, passed: 0, failed: 0, skipped: 0, durationMs: 0 };
    this.failures = [];

    for (const suite of this.suites) {
      console.log(`\n${ANSI.bold}${ANSI.cyan}▶ Suite: ${suite.name}${ANSI.reset}`);
      for (const t of suite.tests) {
        this.stats.total++;
        suite.stats.total++;
        const testStart = Date.now();
        try {
          await t.fn();
          const elapsed = Date.now() - testStart;
          this.stats.passed++;
          suite.stats.passed++;
          console.log(`  ${ANSI.green}✓ PASS${ANSI.reset} ${t.name} ${ANSI.white}(${elapsed}ms)${ANSI.reset}`);
        } catch (err) {
          const elapsed = Date.now() - testStart;
          this.stats.failed++;
          suite.stats.failed++;
          this.failures.push({
            suite: suite.name,
            test: t.name,
            error: err,
          });
          console.log(`  ${ANSI.red}✗ FAIL${ANSI.reset} ${t.name} ${ANSI.white}(${elapsed}ms)${ANSI.reset}`);
          console.log(`    ${ANSI.red}Error: ${err.message}${ANSI.reset}`);
        }
      }
    }

    this.stats.durationMs = Date.now() - startTime;
    return {
      stats: this.stats,
      failures: this.failures,
      suites: this.suites,
    };
  }

  printSummary() {
    console.log('\n' + '═'.repeat(72));
    console.log(`${ANSI.bold}VEDIC SERVICES EXPANSION — E2E TEST SUMMARY${ANSI.reset}`);
    console.log('═'.repeat(72));

    for (const suite of this.suites) {
      const color = suite.stats.failed === 0 ? ANSI.green : ANSI.red;
      const icon = suite.stats.failed === 0 ? '✓' : '✗';
      console.log(` ${color}${icon}${ANSI.reset} ${suite.name.padEnd(52)} ${suite.stats.passed}/${suite.stats.total} passed`);
    }

    console.log('─'.repeat(72));
    const finalColor = this.stats.failed === 0 ? ANSI.green : ANSI.red;
    console.log(
      `${ANSI.bold}Total Tests: ${this.stats.total} | ${ANSI.green}Passed: ${this.stats.passed}${ANSI.reset} | ${ANSI.red}Failed: ${this.stats.failed}${ANSI.reset} | Duration: ${this.stats.durationMs}ms${ANSI.reset}`
    );

    if (this.stats.failed > 0) {
      console.log('\n' + ANSI.bgRed + ANSI.bold + ' FAILURES ' + ANSI.reset);
      this.failures.forEach((f, idx) => {
        console.log(`\n[${idx + 1}] ${f.suite} > ${f.test}`);
        console.log(`    ${f.error.stack || f.error.message}`);
      });
      console.log('');
    } else {
      console.log(`\n${ANSI.bgGreen}${ANSI.bold} ALL E2E TIERS PASSED PERFECTLY (100% SUCCESS) ${ANSI.reset}\n`);
    }

    console.log('═'.repeat(72));
  }
}

module.exports = {
  TestHarness,
  assert,
  ANSI,
};
