import { IService } from './IService'
import { ITreatment } from './ITreatments'

interface INewServiceFormInput {
  tutor: string
  phone: string
  petName: string
  breed: string
  color: string
  services: IService[]
  treatments: ITreatment[]
  observation: string
}

const initialState: INewServiceFormInput = {
  breed: '',
  color: '',
  observation: '',
  petName: '',
  phone: '',
  services: [],
  treatments: [],
  tutor: '',
}

export { initialState }
export type { INewServiceFormInput }
