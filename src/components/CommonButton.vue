<template>
  <button class="custom-button" @click="themeStore.toggleTheme">
    Switch to {{ themeStore.isDarkMode ? 'Light' : 'Dark' }} Mode
  </button>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>
.custom-button {
  background-color: $primary;
  color: $on-primary;
  border: 1px solid $outline;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: $outline-variant;
    color: $primary;
  }
}
</style>
