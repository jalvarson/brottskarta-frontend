<script setup lang="ts">
import type { IEvent } from '@/services/models/EventsModel'
import { formatSwedishDate } from '@/utils/dateUtils'

const props = defineProps<{
  event: IEvent
}>()
</script>

<template>
  <div class="event-card-container">
    <div class="event-card-wrapper">
      <div class="event-card">
        <div class="event-card-header">
          <div class="event-card-title">
            {{ props.event.type }} i {{ props.event.location.name }}
          </div>
          <div class="event-card-type">
            <font-awesome-icon icon="fire" class="event-card-type-icon" />
            <div class="event-card-type-label">{{ props.event.type }}</div>
          </div>
        </div>
        <div class="event-card-divider"></div>
        <div class="event-card-publication">
          <div class="event-card-publication-label">ID: {{ props.event.id }}</div>
          <div class="event-card-publication-label">
            Inträffade: {{ formatSwedishDate(props.event.occurred) }}
          </div>
          <div class="event-card-publication-label">
            Publicerades: {{ formatSwedishDate(props.event.published) }}
          </div>
        </div>
        <div class="event-card-divider"></div>
        <div class="event-card-summary">
          {{ props.event.summary }}
        </div>
        <div class="event-card-description">
          {{ props.event.body ?? 'Ingen beskrivning' }}
        </div>
        <!-- <div class="event-update-separator">
          <BKBadge label="Updatering #1" color="secondary" :rounded="true" />
        </div>
        <div class="event-card-description">
          SOS larmas om en brand i ett flerfamiljshus på Ekgatan. Rökutvecklingen ska vara kraftig
          och koncentrerad till en trappuppgång. Lägenheterna i trappuppgången uppges vara tomma,
          inga uppgifter om att någon person kommit till fysisk skada. Polis är på plats tillsammans
          med andra blåljusresurser.
        </div> -->
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
  min-height: 1px;
  background-color: $outline-variant;
  opacity: 0.5;
}

.event-update-separator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px;
  padding: 8px 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: $outline-variant;
    opacity: 0.5;
  }

  &::before,
  ::after {
    margin-right: 8px;
  }
}

.event-card-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.event-card-title {
  @include titleLarge;
  color: $on-surface;
}

.event-card-type {
  display: flex;
  align-items: center;
  gap: 6px;
  &-label {
    @include labelLarge;
    color: $primary;
  }
  &-icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $primary;
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

.event-card-summary {
  @include titleMedium;
  color: $on-surface;
}
</style>
