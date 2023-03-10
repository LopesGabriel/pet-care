import { IService } from './IService'
import { ITreatment } from './ITreatments'

/* eslint-disable no-unused-vars */
enum ServiceStatus {
  IN_PROGRESS = 0,
  COMPLETED = 1,
  CANCELED = 2,
}

interface IServiceItem {
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
  services: IService[]
  treatments: ITreatment[]
}

const sampleServiceItems: IServiceItem[] = [
  {
    id: 'rgfsdgdh',
    status: ServiceStatus.IN_PROGRESS,
    createdAt: '2023-03-08T11:22:43.595Z',
    updatedAt: '2023-03-08T11:22:43.595Z',
    tutor: {
      name: 'Gabriel Lopes',
      phone: '5561982352349',
    },
    pet: {
      name: 'Maia Pinscher',
      breed: 'Pinscher',
      color: 'Marrom',
    },
    services: [
      {
        id: 'egfsgthg',
        name: 'Banho',
      },
      {
        id: 'egfshtgg',
        name: 'Corte de unha',
      },
    ],
    treatments: [],
    observation: 'Cuidado para não machucar minha cachorra',
  },
  {
    id: 'adfwrgtht',
    status: ServiceStatus.IN_PROGRESS,
    createdAt: '2023-03-08T10:22:43.595Z',
    updatedAt: '2023-03-08T10:22:43.595Z',
    tutor: {
      name: 'Matheus Lopes',
      phone: '5561981510636',
    },
    pet: {
      name: 'Lucy Beagle',
      breed: 'Beagle',
      color: 'Branco e marrom',
    },
    services: [
      {
        id: 'egfsgthg',
        name: 'Banho',
      },
      {
        id: 'egfshtgg',
        name: 'Corte de unha',
      },
      {
        id: 'DfhhlYku',
        name: 'Transporte',
      },
    ],
    treatments: [],
    observation: '',
  },
  {
    id: 'rgfhgthrrg',
    status: ServiceStatus.IN_PROGRESS,
    createdAt: '2023-03-08T10:10:43.595Z',
    updatedAt: '2023-03-08T10:10:43.595Z',
    tutor: {
      name: 'Indinária Santos',
      phone: '5561998791147',
    },
    pet: {
      name: 'Bellatrix',
      breed: 'SRD',
      color: 'Preto',
    },
    services: [
      {
        id: 'egfsgthg',
        name: 'Banho',
      },
    ],
    treatments: [
      {
        id: 'dCjtfyekh',
        name: 'Está fazendo tratamento',
      },
    ],
    observation: 'Cuidado com essa gata, ela é meio doida',
  },
  {
    id: 'rth54egthy',
    status: ServiceStatus.IN_PROGRESS,
    createdAt: '2023-03-08T09:05:43.595Z',
    updatedAt: '2023-03-08T09:05:43.595Z',
    tutor: {
      name: 'Luciano Junior',
      phone: '5561988015245',
    },
    pet: {
      name: 'Brutos',
      breed: 'Pastor Alemão',
      color: 'Marrom e preto',
    },
    services: [
      {
        id: 'egfsgthg',
        name: 'Banho',
      },
      {
        id: 'cHfEhhkg',
        name: 'Tosa higiênica',
      },
    ],
    treatments: [],
    observation: '',
  },
  {
    id: 'rg1fd4gr4gbrtg',
    status: ServiceStatus.IN_PROGRESS,
    createdAt: '2023-03-08T07:40:43.595Z',
    updatedAt: '2023-03-08T07:40:43.595Z',
    tutor: {
      name: 'Carolina Dieckman',
      phone: '5561989844356',
    },
    pet: {
      name: 'Marilú',
      breed: 'Shih-Tzu',
      color: 'Branco e marrom',
    },
    services: [
      {
        id: 'egfsgthg',
        name: 'Banho',
      },
      {
        id: 'cHgEchGy',
        name: 'Tosa completa',
      },
      {
        id: 'DfhhlYku',
        name: 'Transporte',
      },
    ],
    treatments: [
      {
        id: 'hYjmfheCh',
        name: 'Tem lesão na pele',
      },
    ],
    observation: 'Não tosar a orelha',
  },
]

export { ServiceStatus, sampleServiceItems }
export type { IServiceItem }
