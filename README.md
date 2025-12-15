# Metabase Vue Embedded JS Sample

Simple example of embedding Metabase dashboards in Vue 3.

## Important Notes

**`<metabase-dashboard>` is a native HTML custom element, NOT a Vue component:**
- It's loaded from the Metabase SDK script in `index.html`
- Attribute values must be **strings** (e.g., `with-downloads="false"` not `:with-downloads="false"`)
- The SDK `<script>` tags must go in `index.html`, not in Vue templates

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update Metabase URL in `index.html`:
```javascript
"instanceUrl": "http://localhost:3000"
```

3. Run:
```bash
npm run dev
```

## Project Structure

```
├── src/
│   ├── App.vue       # Main component with dashboard
│   └── main.ts       # Entry point
├── index.html        # Metabase SDK config and <script> tags
└── vite.config.ts    # Vite config (registers custom element)
```

## How It Works

1. **index.html** - Metabase SDK is loaded here:
   ```html
   <script>
     function defineMetabaseConfig(config) {
       window.metabaseConfig = config;
     }
   </script>
   <script>
     defineMetabaseConfig({ ... });
   </script>
   <script defer src="http://localhost:3000/app/embed.js"></script>
   ```

2. **vite.config.ts** - Tells Vue to treat `<metabase-dashboard>` as a custom element:
   ```ts
   isCustomElement: (tag) => tag === 'metabase-dashboard'
   ```

3. **App.vue** - Use the custom element in your template:
   ```vue
   <metabase-dashboard
     :dashboard-id="dashboardId"
     with-title="true"
     with-downloads="false"
   />
   ```

## Learn More

- [Metabase SDK Docs](https://www.metabase.com/docs/latest/embedding/sdk)
- [Vue 3 Docs](https://vuejs.org/)
