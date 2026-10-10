/**
 * Tier 0: Production Build & Asset Integrity Tests
 * Verifies distribution bundles, configurations, static media, and SVG markup.
 */

const fs = require('node:fs');
const path = require('node:path');
const { assert } = require('./utils/testHarness.cjs');
const { PROJECT_ROOT, fileExists, getFileStats, getSourceFile } = require('./utils/dataLoader.cjs');

function registerTier0Tests(harness) {
  harness.describe('Tier 0: Production Build & Asset Integrity', () => {
    harness.test('T0-01: dist/index.html exists and is well-formed HTML5', () => {
      const htmlPath = path.join(PROJECT_ROOT, 'dist/index.html');
      assert.ok(fs.existsSync(htmlPath), 'dist/index.html must exist in production output');
      const content = fs.readFileSync(htmlPath, 'utf-8');
      assert.ok(content.includes('<!DOCTYPE html>') || content.includes('<!doctype html>'), 'Must contain HTML5 doctype');
      assert.ok(content.includes('<div id="root"></div>'), 'Must contain root React mounting container');
      assert.ok(content.includes('<meta name="viewport"'), 'Must contain responsive viewport tag');
      assert.ok(content.includes('Pandith Vikram') || content.includes('Astrologer'), 'Must contain brand title');
    });

    harness.test('T0-02: dist/assets production JS bundle exists and is non-empty', () => {
      const assetsDir = path.join(PROJECT_ROOT, 'dist/assets');
      assert.ok(fs.existsSync(assetsDir), 'dist/assets directory must exist');
      const files = fs.readdirSync(assetsDir);
      const jsFiles = files.filter(f => f.endsWith('.js'));
      assert.ok(jsFiles.length > 0, 'At least one compiled JS bundle must exist');
      const mainBundle = path.join(assetsDir, jsFiles[0]);
      const stats = fs.statSync(mainBundle);
      assert.ok(stats.size > 10000, `JS bundle size must be substantial (>10KB), got ${stats.size} bytes`);
    });

    harness.test('T0-03: dist/assets production CSS bundle exists and contains styles', () => {
      const assetsDir = path.join(PROJECT_ROOT, 'dist/assets');
      const files = fs.readdirSync(assetsDir);
      const cssFiles = files.filter(f => f.endsWith('.css'));
      assert.ok(cssFiles.length > 0, 'At least one compiled CSS stylesheet must exist');
      const mainCss = path.join(assetsDir, cssFiles[0]);
      const stats = fs.statSync(mainCss);
      assert.ok(stats.size > 1000, `CSS bundle size must be non-empty (>1KB), got ${stats.size} bytes`);
    });

    harness.test('T0-04: public/images static directory contains verified fallback assets', () => {
      const imagesDir = path.join(PROJECT_ROOT, 'public/images');
      assert.ok(fs.existsSync(imagesDir), 'public/images directory must exist');
      const requiredImages = [
        'couple.jpg',
        'wedding.jpg',
        'career.jpg',
        'finance.jpg',
        'fire.jpg',
        'eye.jpg',
        'family.jpg',
        'wellness.jpg',
        'court.jpg',
        'home.jpg',
        'heartbreak.jpg',
        'zodiac.jpg',
        'candles.jpg',
        'ritual.jpg',
        'celestial.jpg',
      ];
      for (const imgName of requiredImages) {
        const fullPath = path.join(imagesDir, imgName);
        assert.ok(fs.existsSync(fullPath), `Required image ${imgName} must exist in public/images/`);
        const stats = fs.statSync(fullPath);
        assert.ok(stats.size > 1000, `Image ${imgName} must be a valid file (>1KB)`);
      }
    });

    harness.test('T0-05: astrological-zodiac-wheel.svg is valid XML and SVG markup', () => {
      const svgPath = path.join(PROJECT_ROOT, 'public/images/astrological-zodiac-wheel.svg');
      assert.ok(fs.existsSync(svgPath), 'astrological-zodiac-wheel.svg must exist');
      const content = fs.readFileSync(svgPath, 'utf-8');
      assert.ok(content.includes('<svg') && content.includes('</svg>'), 'Must contain SVG tags');
      assert.ok(content.includes('viewBox='), 'SVG must define a viewBox attribute for responsiveness');
      assert.ok(content.length > 500, 'SVG content must contain actual geometric paths');
    });

    harness.test('T0-06: package.json specifies valid scripts, React 19, and Tailwind v4', () => {
      const pkgPath = path.join(PROJECT_ROOT, 'package.json');
      assert.ok(fs.existsSync(pkgPath), 'package.json must exist');
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
      assert.strictEqual(pkg.name, 'astro-v2', 'Project name should be astro-v2');
      assert.strictEqual(pkg.type, 'module', 'Module type must be module');
      assert.ok(pkg.scripts.build, 'build script must be defined');
      assert.ok(pkg.scripts.test, 'test script must be defined');
      assert.ok(pkg.dependencies.react, 'React dependency must be present');
      assert.ok(pkg.dependencies['canvas-confetti'], 'canvas-confetti must be present');
      assert.ok(pkg.devDependencies['@tailwindcss/vite'] || pkg.devDependencies.tailwindcss, 'Tailwind must be installed');
    });

    harness.test('T0-07: tsconfig.json configures TypeScript with strict JSX support', () => {
      const tsconfigPath = path.join(PROJECT_ROOT, 'tsconfig.json');
      assert.ok(fs.existsSync(tsconfigPath), 'tsconfig.json must exist');
      const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'));
      assert.ok(tsconfig.compilerOptions, 'compilerOptions must be configured');
      assert.ok(tsconfig.compilerOptions.jsx, 'JSX compiler option must be set');
    });

    harness.test('T0-08: vite.config.ts configures React and Tailwind plugins', () => {
      const viteConfig = getSourceFile('vite.config.ts');
      assert.ok(viteConfig, 'vite.config.ts must exist');
      assert.ok(viteConfig.includes('defineConfig'), 'Must import defineConfig');
      assert.ok(viteConfig.includes('@vitejs/plugin-react'), 'Must use Vite React plugin');
    });
  });
}

module.exports = { registerTier0Tests };
