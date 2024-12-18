<script setup lang="ts"></script>

<template>
  <div class="event-map-container">
    <div class="event-card-holder">
      <EventCard />
    </div>
    <div class="event-map"></div>
  </div>
</template>

<style lang="scss" scoped>
.event-map-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  align-self: stretch;
  width: 100%;
  min-height: 100%;
  background-color: $surface-container;
  border-radius: 12px;
}

.event-card-holder {
  position: absolute;
  top: 16px;
  bottom: 16px;
  left: 16px;
  z-index: 1;
  overflow: auto;
  border-radius: 8px;
}

.event-map {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  align-self: stretch;
  width: 100%;
  min-height: 100%;
  background-color: $surface-container-high;
  border-radius: 12px;
  background-image: url('@/assets/map-placeholder.png');
  background-size: cover;
  background-position: center;
}
</style>
