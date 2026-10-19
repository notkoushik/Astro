import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { detailedServicesData } from './src/data/servicesData'
import { locationsList } from './src/data/locationsData'

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

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// Every indexable page, built from the same data the app routes on, so new services
// and locations are added to the sitemap automatically.
function sitePaths(): string[] {
  return [
    '/',
    '/book-reading',
    ...Object.keys(detailedServicesData).map((id) => `/services/${id}`),
    ...locationsList.map((location) => `/${location.slug}`),
  ]
}

function buildSitemap(): string {
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = sitePaths().map(
    (pagePath) => `  <url>\n    <loc>${escapeXml(siteUrl + pagePath)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
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

// Generates sitemap.xml and robots.txt into the build output, and serves them in dev.
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
