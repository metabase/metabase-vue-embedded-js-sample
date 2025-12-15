# Metabase Vue Embedded JS Sample

This sample application demonstrates how to embed Metabase dashboards in a Vue 3 application using the Metabase Embedded Analytics SDK.

## Overview

This project showcases two different approaches to embedding Metabase dashboards:

1. **Declarative Approach** - Uses Vue's template syntax to bind properties to the custom element (recommended)
2. **Procedural Approach** - Uses Vue's Composition API and direct DOM manipulation for more control

## Prerequisites

- Node.js 18+ and npm
- A running Metabase instance (default: `http://localhost:3000`)
- At least one dashboard created in your Metabase instance

## Setup

1. Clone this repository:
```bash
git clone <repository-url>
cd metabase-vue-embedded-js-sample
```

2. Install dependencies:
```bash
npm install
```

3. Configure your Metabase instance URL in `index.html`:
```javascript
defineMetabaseConfig({
  "useExistingUserSession": true,
  "instanceUrl": "http://localhost:3000", // Update this to your Metabase URL
  "theme": {
    "colors": {
      "brand": "#8e44ad",
    },
  },
});
```

4. Update the dashboard ID in `src/App.vue` if needed (default is `1`):
```vue
<DeclarativeDashboard
  :dashboard-id="1"  <!-- Change to your dashboard ID -->
  :with-title="true"
  :with-downloads="false"
  :drills="true"
/>
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
metabase-vue-embedded-js-sample/
├── src/
│   ├── components/
│   │   ├── DeclarativeDashboard.vue  # Declarative approach component
│   │   └── ProceduralDashboard.vue   # Procedural approach component
│   ├── App.vue                        # Main application component
│   ├── main.ts                        # Application entry point
│   └── vite-env.d.ts                  # TypeScript declarations
├── index.html                         # HTML template with Metabase SDK config
├── vite.config.ts                     # Vite configuration
├── tsconfig.json                      # TypeScript configuration
└── package.json                       # Project dependencies
```

## Component Props

Both dashboard components accept the following props:

- `dashboardId` (number, default: 1) - The ID of the Metabase dashboard to display
- `withTitle` (boolean, default: true) - Show/hide the dashboard title
- `withDownloads` (boolean, default: false) - Enable/disable download functionality
- `drills` (boolean, default: true) - Enable/disable drill-down interactions

## Customization

### Changing Theme Colors

Modify the brand color in `index.html`:
```javascript
"theme": {
  "colors": {
    "brand": "#your-color-here",
  },
}
```

### Using a Remote Metabase Instance

If your Metabase instance is not on localhost, update the `instanceUrl` in `index.html`:
```javascript
defineMetabaseConfig({
  "useExistingUserSession": true,
  "instanceUrl": "https://your-metabase-instance.com",
  // ...
});
```

Also update the script source:
```html
<script defer src="https://your-metabase-instance.com/app/embed.js"></script>
```

## Key Differences from Angular Version

This Vue implementation differs from the Angular version in several ways:

1. **Custom Element Registration**: Vue requires custom elements to be registered in `vite.config.ts` using the `isCustomElement` option
2. **Component API**: Uses Vue's Composition API with `<script setup>` syntax instead of Angular's component decorators
3. **Property Binding**: Uses Vue's `:prop` syntax instead of Angular's `[attr.prop]`
4. **Lifecycle Hooks**: Uses Vue's `onMounted` instead of Angular's `ngOnInit`
5. **Build Tool**: Uses Vite instead of Angular CLI

## Learn More

- [Metabase Embedded Analytics SDK Documentation](https://www.metabase.com/docs/latest/embedding/sdk)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)

## License

MIT
