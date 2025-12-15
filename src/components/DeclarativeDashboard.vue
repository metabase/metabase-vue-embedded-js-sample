<template>
  <div class="dashboard-container">
    <h2>Declarative Dashboard</h2>
    <p class="description">
      This dashboard uses Vue's template syntax to declaratively configure the Metabase dashboard component.
    </p>
    <metabase-dashboard
      :dashboard-id="dashboardId"
      :with-title="withTitle"
      :with-downloads="withDownloads"
      :drills="drills"
    />
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

interface Props {
  dashboardId?: number;
  withTitle?: boolean;
  withDownloads?: boolean;
  drills?: boolean;
}

withDefaults(defineProps<Props>(), {
  dashboardId: 1,
  withTitle: true,
  withDownloads: false,
  drills: true,
});
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

metabase-dashboard {
  display: block;
  width: 100%;
}
</style>
