import { IService } from './IService'
import { ITreatment } from './ITreatments'

/* eslint-disable no-unused-vars */
enum ServiceStatus {
  IN_PROGRESS = 0,
  COMPLETED = 1,
  CANCELED = 2,
}

interface IJob {
  id: string
  status: ServiceStatus
  createdAt: string
  createdBy: string
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
  services: IService[]
  treatments: ITreatment[]
}

export { ServiceStatus }
export type { IJob }
