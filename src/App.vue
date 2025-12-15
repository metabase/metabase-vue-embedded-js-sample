<template>
  <div id="app">
    <header>
      <h1>Metabase Vue Embedded JS Sample</h1>
      <p class="subtitle">
        Demonstrating two approaches to embedding Metabase dashboards in Vue 3
      </p>
    </header>

    <nav>
      <button
        :class="{ active: currentView === 'declarative' }"
        @click="currentView = 'declarative'"
      >
        Declarative Approach
      </button>
      <button
        :class="{ active: currentView === 'procedural' }"
        @click="currentView = 'procedural'"
      >
        Procedural Approach
      </button>
    </nav>

    <main>
      <DeclarativeDashboard
        v-if="currentView === 'declarative'"
        :dashboard-id="1"
        :with-title="true"
        :with-downloads="false"
        :drills="true"
      />

      <ProceduralDashboard
        v-if="currentView === 'procedural'"
        :dashboard-id="1"
        :with-title="true"
        :with-downloads="false"
        :drills="true"
      />

      <section class="info-section">
        <h3>About This Sample</h3>
        <div class="info-content">
          <div class="approach-info">
            <h4>Declarative Approach</h4>
            <p>
              Uses Vue's template syntax to bind properties directly to the custom element.
              This is the recommended approach as it's more idiomatic to Vue and easier to maintain.
            </p>
          </div>
          <div class="approach-info">
            <h4>Procedural Approach</h4>
            <p>
              Demonstrates programmatic DOM manipulation using Vue's composition API and refs.
              Useful when you need more control over the element lifecycle or complex dynamic behavior.
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>
        Learn more about
        <a href="https://www.metabase.com/docs/latest/embedding/sdk" target="_blank">
          Metabase Embedded Analytics SDK
        </a>
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DeclarativeDashboard from './components/DeclarativeDashboard.vue';
import ProceduralDashboard from './components/ProceduralDashboard.vue';

const currentView = ref<'declarative' | 'procedural'>('declarative');
</script>

<style>
:root {
  --brand-color: #8e44ad;
  --brand-hover: #71368a;
  --text-primary: #333;
  --text-secondary: #666;
  --border-color: #e0e0e0;
  --bg-light: #fafafa;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-primary);
  line-height: 1.6;
}

#app {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
}

header {
  text-align: center;
  padding: 2rem 0;
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 2rem;
}

header h1 {
  color: var(--brand-color);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

nav button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: 2px solid var(--brand-color);
  background-color: white;
  color: var(--brand-color);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

nav button:hover {
  background-color: var(--brand-color);
  color: white;
}

nav button.active {
  background-color: var(--brand-color);
  color: white;
}

main {
  min-height: 400px;
}

.info-section {
  margin-top: 3rem;
  padding: 2rem;
  background-color: var(--bg-light);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.info-section h3 {
  color: var(--brand-color);
  margin-bottom: 1.5rem;
  text-align: center;
}

.info-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.approach-info h4 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.approach-info p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

footer {
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 2px solid var(--border-color);
  color: var(--text-secondary);
}

footer a {
  color: var(--brand-color);
  text-decoration: none;
  font-weight: 500;
}

footer a:hover {
  text-decoration: underline;
}
</style>
