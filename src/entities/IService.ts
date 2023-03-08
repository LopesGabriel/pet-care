/* eslint-disable no-unused-vars */
enum ServiceStatus {
  IN_PROGRESS = 0,
  COMPLETED = 1,
  CANCELED = 2,
}

interface IService {
  id: string
  status: ServiceStatus
  createdAt: string
  updatedAt: string
  observation: string
  pet: {
    name: string
    breed?: string
    color?: string
  }
  tutor: {
    name: string
    phone: string
  }
  services: {
    id: string
    name: string
    value: string
  }[]
  other: {
    id: string
    name: string
    value: string
  }[]
}

export { ServiceStatus }
export type { IService }
