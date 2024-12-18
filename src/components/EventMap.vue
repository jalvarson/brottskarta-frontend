<script setup lang="ts">
import { GoogleMap } from 'vue3-google-map'

const defaultCenter = { lat: 40.689247, lng: -74.044502 }
</script>

<template>
  <div class="event-map-container">
    <div class="event-card-holder">
      <EventCard />
    </div>
    <GoogleMap
      api-key="AIzaSyDeWFYlg796lkBGlnPku6Waa2g8dKnYPoA"
      class="event-map"
      :center="defaultCenter"
      :zoom="8"
    />
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
  overflow: hidden !important;

  .mapdiv {
    flex: 1 !important;
  }
}
</style>
