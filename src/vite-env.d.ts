/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public site URL without a trailing slash, resolved in vite.config.ts */
  readonly VITE_SITE_URL: string
}
