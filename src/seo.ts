// Per-page SEO tags (title, description, canonical path, Open Graph), shared by the app at
// runtime and by vite.config.ts, which writes each page's tags into its own HTML file at build
// time. Keeping both on these values means the HTML Google first receives and the tags the app
// sets after loading are always identical.
import { detailedServicesData } from './data/servicesData'
import type { DetailedService } from './data/servicesData'
import { locationsList } from './data/locationsData'
import type { LocationData } from './data/locationsData'

export interface PageSeo {
  /** Path on the site, starting with "/" */
  path: string
  title: string
  description: string
  /** Social preview text; defaults to title / description */
  ogTitle?: string
  ogDescription?: string
}

export const homeSeo: PageSeo = {
  path: '/',
  title: 'Indian Astrologer Pandith Vikram | Vedic Astrologer in Los Angeles, CA',
  description:
    'Indian Vedic astrologer Pandith Vikram, 7001 Hollywood Blvd, Los Angeles, CA 90028. 35+ years of horoscope, psychic and tarot readings, love spells, marriage matching, career and family guidance. In person, by phone or video. Call +1 510-371-4626.',
  ogTitle: 'Indian Astrologer Pandith Vikram | Vedic Astrology in Los Angeles',
  ogDescription:
    'Honest Vedic astrology readings on Hollywood Blvd, Los Angeles. Birth charts, psychic and tarot readings, love spells, Kundali matching, career timing and spiritual protection, in person or by phone.',
}

export const bookingSeo: PageSeo = {
  path: '/book-reading',
  title: 'Book a Session & Contact Pandith Vikram | Indian Astrologer in Los Angeles',
  description:
    'Book a private, 100% confidential Vedic astrology reading with Pandith Vikram. In person on Hollywood Blvd, Los Angeles, or via phone and WhatsApp. Call +1 510-371-4626.',
}

export const notFoundSeo: PageSeo = {
  path: '/404',
  title: 'Page Not Found (404) | Pandith Vikram, Vedic Astrologer in Los Angeles',
  description: homeSeo.description,
}

export function serviceSeo(service: DetailedService): PageSeo {
  return {
    path: `/services/${service.id}`,
    title: `${service.title} ${service.subtitle} | Pandith Vikram, Vedic Astrologer in Los Angeles`,
    description: `${service.desc} Book a private reading with Pandith Vikram on Hollywood Blvd, Los Angeles. Call +1 510-371-4626.`,
  }
}

export function locationSeo(location: LocationData): PageSeo {
  return {
    path: `/${location.slug}`,
    title: location.metaTitle,
    description: location.metaDescription,
  }
}

/** Every page listed in the sitemap and pre-rendered with its own tags. */
export function indexablePages(): PageSeo[] {
  return [
    homeSeo,
    bookingSeo,
    ...Object.values(detailedServicesData).map(serviceSeo),
    ...locationsList.map(locationSeo),
  ]
}

/** Updates the document head to match a page (used by the app on every route change). */
export function applyPageSeo(page: PageSeo, siteUrl: string): void {
  const url = siteUrl + page.path
  document.title = page.title
  document.getElementById('meta-description')?.setAttribute('content', page.description)
  document.getElementById('canonical-link')?.setAttribute('href', url)
  document.getElementById('og-title')?.setAttribute('content', page.ogTitle ?? page.title)
  document.getElementById('og-description')?.setAttribute('content', page.ogDescription ?? page.description)
  document.getElementById('og-url')?.setAttribute('content', url)
}
