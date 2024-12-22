<script setup lang="ts"></script>

<template>
  <div class="event-filter-container">
    <BKDateSelector />
  </div>
</template>

<style lang="scss" scoped>
.event-filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: $surface-container;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 8px 16px;
}
</style>
