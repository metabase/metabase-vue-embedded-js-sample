<script setup lang="ts">
import { ref } from 'vue'

const dashboardId = ref('1')
</script>

<template>
  <input v-model="dashboardId" placeholder="Dashboard ID" />
  <h1>hello</h1>
  <metabase-dashboard
    :dashboard-id="dashboardId"
    with-title="true"
    with-downloads="false"
    with-subscriptions="false"
    drills="true"
  />
</template>

<style>
metabase-dashboard {
  width: 500px;
}
</style>
