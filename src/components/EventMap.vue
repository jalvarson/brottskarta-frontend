<script setup lang="ts">
import { GoogleMap } from 'vue3-google-map'

const defaultCenter = { lat: 62.2724038, lng: 14.8042141 }
</script>

<template>
  <div class="event-map-container">
    <EventCard />
    <GoogleMap
      api-key="AIzaSyDeWFYlg796lkBGlnPku6Waa2g8dKnYPoA"
      class="event-map"
      :center="defaultCenter"
      :zoom="4.8"
      :disable-default-ui="true"
      v-bind:disable-double-click-zoom="false"
    />
  </div>
</template>

<style lang="scss">
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
