interface ICustomer {
  id: string
  name: string
  numJobs: number
  phoneNumber: string
  pets: {
    name: string
    breed?: string
    color?: string
  }[]
  createdAt: string
  updatedAt: string
  createdBy: string
}

const mockedCustomers: ICustomer[] = [
  {
    id: 'dsgsgsg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: 'Gabriel Lopes',
    numJobs: 1,
    pets: [
      {
        name: 'Maia',
        breed: 'Pinscher',
        color: 'Marrom',
      },
      {
        name: 'Lizza',
        breed: 'Dobermann',
        color: 'Preto',
      },
    ],
    phoneNumber: '61982352349',
    createdBy: 'Admin',
  },
  {
    id: 'afsgtedhth',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: 'Matheus Lopes',
    numJobs: 3,
    pets: [
      {
        name: 'Lucy',
        breed: 'Beagle',
        color: 'Marrom e branco',
      },
    ],
    phoneNumber: '61981510636',
    createdBy: 'Admin',
  },
  {
    id: 'hthdewregarg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: 'Paulo Lopes',
    numJobs: 1,
    pets: [
      {
        name: 'Maia',
        breed: 'Pinscher',
        color: 'Marrom',
      },
    ],
    phoneNumber: '61981031618',
    createdBy: 'Admin',
  },
  {
    id: 'agfhgetht',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: 'Ivaneide Lopes de Oliveira',
    numJobs: 1,
    pets: [
      {
        name: 'Maia',
        breed: 'Pinscher',
        color: 'Marrom',
      },
    ],
    phoneNumber: '61981031618',
    createdBy: 'Admin',
  },
]

export { mockedCustomers }
export type { ICustomer }
