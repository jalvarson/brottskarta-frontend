import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchNewEvents } from '@/services/EventsApi'
import type { IEvent } from '@/services/models/EventsModel'

export const useEventsStore = defineStore('events', () => {
  const events = ref<IEvent[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchEvents = async () => {
    isLoading.value = true
    error.value = null

    try {
      const data = await fetchNewEvents()
      events.value = data
    } catch (err) {
      error.value = (err as Error).message || 'Failed to fetch events'
    } finally {
      isLoading.value = false
    }
  }

  return { events, fetchEvents, isLoading, error }
})
