/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production';
    readonly PUBLIC_URL: string;
    readonly HOST: string;
    readonly REACT_APP_PERSONAL_TOKEN: string;
  }
}
