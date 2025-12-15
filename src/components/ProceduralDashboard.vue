<template>
  <div class="dashboard-container">
    <h2>Procedural Dashboard</h2>
    <p class="description">
      This dashboard uses Vue's lifecycle hooks and direct DOM manipulation to programmatically create the Metabase dashboard component.
    </p>
    <div ref="dashboardRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, withDefaults } from 'vue';

interface Props {
  dashboardId?: number;
  withTitle?: boolean;
  withDownloads?: boolean;
  drills?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  dashboardId: 1,
  withTitle: true,
  withDownloads: false,
  drills: true,
});

const dashboardRef = ref<HTMLElement | null>(null);
let dashboardElement: HTMLElement | null = null;

function createDashboard() {
  if (!dashboardRef.value) return;

  // Remove existing dashboard if any
  if (dashboardElement) {
    dashboardElement.remove();
  }

  // Create new dashboard element
  dashboardElement = document.createElement('metabase-dashboard');
  dashboardElement.setAttribute('dashboard-id', String(props.dashboardId));
  dashboardElement.setAttribute('with-title', String(props.withTitle));
  dashboardElement.setAttribute('with-downloads', String(props.withDownloads));
  dashboardElement.setAttribute('drills', String(props.drills));

  dashboardRef.value.appendChild(dashboardElement);
}

onMounted(() => {
  createDashboard();
});

// Watch for prop changes and recreate dashboard
watch(
  () => [props.dashboardId, props.withTitle, props.withDownloads, props.drills],
  () => {
    createDashboard();
  }
);
</script>

<style scoped>
.dashboard-container {
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  margin: 1rem 0;
}

h2 {
  color: var(--brand-color, #8e44ad);
  margin-top: 0;
}

.description {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}
</style>
