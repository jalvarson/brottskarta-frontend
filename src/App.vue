<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <NavMenu />
  <FlashBanner />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 16px;
  width: 100%;
}
</style>
