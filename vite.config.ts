import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { indexablePages } from './src/seo'
import type { PageSeo } from './src/seo'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Public site URL used by the sitemap, robots.txt, canonical links and structured data.
// Order: an explicit VITE_SITE_URL, then Vercel's production domain (which switches to the
// custom domain automatically once one is connected), then the vercel.app address.
const siteUrl = (
  process.env.VITE_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://pandith-vikram.vercel.app')
).replace(/\/+$/, '')
// Exposed to index.html as %VITE_SITE_URL% and to the app as import.meta.env.VITE_SITE_URL
process.env.VITE_SITE_URL = siteUrl

const escapeMarkup = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// The sitemap lists every page from src/seo.ts (home, booking, all services and locations),
// so new services and locations are added automatically.
function buildSitemap(): string {
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = indexablePages().map(
    (page) => `  <url>\n    <loc>${escapeMarkup(siteUrl + page.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
  )
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

function buildRobots(): string {
  return `# robots.txt for Indian Astrologer Pandith Vikram
# Official Website: ${siteUrl}

User-agent: *
Allow: /
Allow: /services/
Allow: /images/
Disallow: /private/
Disallow: /admin/

# Googlebot & Googlebot-Image full access
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /images/

# XML Sitemap Location
Sitemap: ${siteUrl}/sitemap.xml
`
}

// Fills a page's title, description, canonical and Open Graph tags into the built index.html.
// Fails the build if a tag is missing, so a renamed tag in index.html can't silently break SEO.
function renderPageHtml(template: string, page: PageSeo): string {
  const url = siteUrl + page.path
  // [tag pattern, new value]; patterns capture the text before and after the value being replaced
  const replacements: [RegExp, string][] = [
    [/(<title>)[^<]*(<\/title>)/, page.title],
    [/(<meta\b[^>]*\bid="meta-description"[^>]*\bcontent=")[^"]*(")/, page.description],
    [/(<link\b[^>]*\bid="canonical-link"[^>]*\bhref=")[^"]*(")/, url],
    [/(<meta\b[^>]*\bid="og-title"[^>]*\bcontent=")[^"]*(")/, page.ogTitle ?? page.title],
    [/(<meta\b[^>]*\bid="og-description"[^>]*\bcontent=")[^"]*(")/, page.ogDescription ?? page.description],
    [/(<meta\b[^>]*\bid="og-url"[^>]*\bcontent=")[^"]*(")/, url],
  ]
  return replacements.reduce((html, [pattern, value]) => {
    if (!pattern.test(html)) throw new Error(`index.html is missing the tag matched by ${pattern}`)
    // A replacer function inserts the value literally (no special handling of "$" in page text)
    return html.replace(pattern, (_match, before: string, after: string) => before + escapeMarkup(value) + after)
  }, template)
}

// Generates sitemap.xml and robots.txt, and writes a copy of index.html for every page with that
// page's own SEO tags (e.g. dist/services/tarot-reading/index.html), so search engines and link
// previews get the right tags without running JavaScript. Also serves the two files in dev.
function siteFiles(): Plugin {
  return {
    name: 'site-files',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0]
        if (url === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8')
          res.end(buildSitemap())
        } else if (url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end(buildRobots())
        } else {
          next()
        }
      })
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: buildSitemap() })
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: buildRobots() })
    },
    writeBundle(options) {
      const outDir = options.dir ?? path.resolve(__dirname, 'dist')
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8')
      for (const page of indexablePages()) {
        const file = page.path === '/' ? path.join(outDir, 'index.html') : path.join(outDir, page.path, 'index.html')
        fs.mkdirSync(path.dirname(file), { recursive: true })
        fs.writeFileSync(file, renderPageHtml(template, page))
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    siteFiles()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
})
