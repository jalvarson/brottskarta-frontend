<script setup lang="ts">
import { useEventsStore } from '@/stores/eventsStore'

const store = useEventsStore()

onMounted(() => {
  store.fetchEvents()
})
</script>

<template>
  <EventFilter />
  <EventMap />
</template>

<style lang="scss" scoped></style>
