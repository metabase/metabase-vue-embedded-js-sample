/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Declare custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'metabase-dashboard': any;
    }
  }
}

export {}
