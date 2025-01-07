import type { IEvent } from '@/services/models/EventsModel'

const BASE_URL = 'http://localhost:3000/api'

export async function fetchNewEvents(): Promise<IEvent[]> {
  const response = await fetch(`${BASE_URL}/events`)
  if (!response.ok) {
    throw new Error(`Failed to fetch events: ${response.statusText}`)
  }
  return response.json()
}
