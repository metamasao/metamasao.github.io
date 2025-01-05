/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_RAW_URL: string
  readonly VITE_BIO_IMAGE_PATH: string
  readonly BLOG_DATA_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}