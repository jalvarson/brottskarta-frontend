<script setup lang="ts"></script>

<template>
  <div class="event-card-container">
    <div class="event-card-wrapper">
      <div class="event-card">
        <div class="event-card-header">
          <div class="event-card-title">Brand på Ekerö</div>
          <div class="event-card-type">
            <div class="event-card-type-icon"></div>
            <div class="event-card-type-label">Brand</div>
          </div>
        </div>
        <div class="event-card-divider"></div>
        <div class="event-card-publication">
          <div class="event-card-publication-label">Inträffade 18:30</div>
          <div class="event-card-publication-label">Publicerades 19:44</div>
        </div>
        <div class="event-card-divider"></div>
        <div class="event-card-description">
          SOS larmas om en brand i ett flerfamiljshus på Ekgatan. Rökutvecklingen ska vara kraftig
          och koncentrerad till en trappuppgång. Lägenheterna i trappuppgången uppges vara tomma,
          inga uppgifter om att någon person kommit till fysisk skada. Polis är på plats tillsammans
          med andra blåljusresurser.
        </div>
        <div class="event-card-divider"></div>
        <div class="event-card-description">
          SOS larmas om en brand i ett flerfamiljshus på Ekgatan. Rökutvecklingen ska vara kraftig
          och koncentrerad till en trappuppgång. Lägenheterna i trappuppgången uppges vara tomma,
          inga uppgifter om att någon person kommit till fysisk skada. Polis är på plats tillsammans
          med andra blåljusresurser.
        </div>
        <div class="event-card-divider"></div>
        <div class="event-card-description">
          SOS larmas om en brand i ett flerfamiljshus på Ekgatan. Rökutvecklingen ska vara kraftig
          och koncentrerad till en trappuppgång. Lägenheterna i trappuppgången uppges vara tomma,
          inga uppgifter om att någon person kommit till fysisk skada. Polis är på plats tillsammans
          med andra blåljusresurser.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.event-card-container {
  position: absolute;
  top: 16px;
  bottom: 16px;
  left: 16px;
  z-index: 1;
  overflow: hidden;
  border-radius: 8px;
}

.event-card-wrapper {
  padding: 20px 10px 20px 16px;
  background-color: $surface-container;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  width: 320px;
  flex: 1;
  align-self: stretch;
  height: 100%;
}

.event-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  height: 100%;
  padding-right: 12px;
}

.event-card-footer-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, $surface-container 100%);
}

.event-card-divider {
  width: 100%;
  height: 1px;
  background-color: $outline-variant;
  opacity: 0.5;
}

.event-card-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.event-card-title {
  @include titleLarge;
  color: $on-surface;
}

.event-card-type {
  display: flex;
  align-items: center;
  gap: 8px;
  &-label {
    @include labelMedium;
    color: $primary;
  }
  &-icon {
    width: 12px;
    height: 12px;
    background-color: $primary;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.event-card-publication {
  display: flex;
  flex-direction: column;
  gap: 4px;
  &-label {
    @include bodyMedium;
    color: $on-surface-variant;
  }
}

.event-card-description {
  @include bodyLarge;
  color: $on-surface;
}
</style>
