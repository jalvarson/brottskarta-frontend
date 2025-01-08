export interface IEvent {
  id: number
  published: Date
  occurred: Date
  location: {
    name: string
    coordinates: [number, number]
    type: string
  }
  name: string
  summary: string
  type: string
  url: string
  body: string
}
