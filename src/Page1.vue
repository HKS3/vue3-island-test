<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const props = defineProps(["globalConfig", "customValue"])
</script>

<template>
  <header>
    <h2>Vue Page1 App</h2>

    <ul>
      <li>Per-App Config: {{ customValue }}</li>
      <li>Gobal: {{ JSON.stringify(globalConfig) }}</li>
    </ul>

    <nav>
      <ul>
        <li><RouterLink to="/page1">Home</RouterLink></li>
        <li><RouterLink to="/page1/hase">Hase</RouterLink></li>
      </ul>
    </nav>
  </header>

  <h2>Vue Page1 Router View</h2>
  <RouterView />
</template>

