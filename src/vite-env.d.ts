/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vitest" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_ENDPOINT: string;
  readonly VITE_SUPABASE_KEY: string; // Local variable
  readonly VITE_USER_EMAIL: string; // Local variable
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
