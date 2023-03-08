interface INewServiceFormInput {
  tutor: string
  phone: string
  petName: string
  breed: string
  color: string
  services: string[]
  treatments: string[]
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
