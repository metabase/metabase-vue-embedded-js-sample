# Metabase Vue Embedded JS Sample

Simple example of embedding Metabase dashboards in Vue 3.

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
├── index.html        # Metabase SDK config
└── vite.config.ts    # Vite config
```

## Learn More

- [Metabase SDK Docs](https://www.metabase.com/docs/latest/embedding/sdk)
- [Vue 3 Docs](https://vuejs.org/)
