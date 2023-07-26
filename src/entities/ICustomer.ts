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
    id: 'e6e0c90e-5349-44cb-8621-c4cd7adc3df4',
    phoneNumber: '(61) 9 96057142',
    numJobs: 1,
    name: 'Carmem Sales ',
    pets: [
      {
        color: ' Cramelo com branco',
        name: 'Barney',
        breed: 'Shih-Tzu',
      },
    ],
    updatedAt: '2023-07-19T14:52:49.963Z',
    createdAt: '2023-07-19T14:52:49.963Z',
    createdBy: 'GnEf7o3GHVfzhZRvHPGO6swTSJf1',
  },
  {
    id: '6c4ed043-56ef-432b-9a6e-79c5f967479a',
    numJobs: 1,
    updatedAt: '2023-07-18T17:14:39.660Z',
    createdBy: 'GnEf7o3GHVfzhZRvHPGO6swTSJf1',
    phoneNumber: '(33) 9 9934-8598',
    name: 'Jonatas Antonio Soares ',
    createdAt: '2023-07-18T17:14:39.660Z',
    pets: [
      {
        color: 'Branco',
        name: ' Castiel',
        breed: 'Maltês ',
      },
    ],
  },
  {
    id: 'a04e34eb-4a2f-4125-8e5f-878abed24399',
    createdBy: 'GnEf7o3GHVfzhZRvHPGO6swTSJf1',
    pets: [
      {
        color: 'Branco e Cinza ',
        name: 'Tody',
        breed: 'Misturado Com Shih-Tzu ',
      },
    ],
    numJobs: 1,
    updatedAt: '2023-07-18T13:16:12.215Z',
    name: 'Joaquim  Alves ',
    phoneNumber: '(61) 9 9353-1517',
    createdAt: '2023-07-18T13:16:12.215Z',
  },
  {
    id: '4e9493b5-0111-45a3-8593-09d62b19e364',
    phoneNumber: '(61) 9 9116-1818',
    updatedAt: '2023-07-15T14:05:50.707Z',
    createdAt: '2023-07-15T14:05:50.707Z',
    name: 'Cleide Oliveira',
    numJobs: 1,
    pets: [
      {
        color: 'Branca e Cinza',
        name: 'Luna Oliveira ',
        breed: 'Shih-Tzu',
      },
    ],
    createdBy: 'GnEf7o3GHVfzhZRvHPGO6swTSJf1',
  },
  {
    id: '84acfb71-3938-46ac-9639-39b1ae87f54d',
    createdAt: '2023-07-15T13:33:21.680Z',
    phoneNumber: '(61) 9 8453-3956',
    createdBy: 'GnEf7o3GHVfzhZRvHPGO6swTSJf1',
    pets: [
      {
        color: 'Branco e Marrom',
        name: 'Bruce',
        breed: 'Shih-Tzu ',
      },
    ],
    name: 'Marlene Alves de Souza',
    numJobs: 1,
    updatedAt: '2023-07-15T13:33:21.680Z',
  },
  {
    id: '906cf869-6218-426a-ab7f-e9cfe7b2807d',
    phoneNumber: '(61) 9 9869-5790',
    numJobs: 1,
    name: 'Larisse ',
    createdBy: 'GnEf7o3GHVfzhZRvHPGO6swTSJf1',
    updatedAt: '2023-07-15T13:23:08.122Z',
    pets: [
      {
        color: 'Caramelo ',
        name: 'Luna ',
        breed: 'Shih-Tzu',
      },
    ],
    createdAt: '2023-07-15T13:23:08.122Z',
  },
  {
    id: 'b0ef1aa4-7de4-4c6c-9698-7815d57adcfb',
    numJobs: 1,
    updatedAt: '2023-07-14T13:42:13.594Z',
    createdBy: 'GnEf7o3GHVfzhZRvHPGO6swTSJf1',
    pets: [
      {
        color: 'Branco e Cinza ',
        name: 'Tino',
        breed: 'Shih-Tzu',
      },
    ],
    createdAt: '2023-07-14T13:42:13.594Z',
    name: 'Ciane dos Santos ',
    phoneNumber: '(61) 9 9505-1831',
  },
  {
    id: '8949835f-95dc-4e7b-a079-dc749ed7f1da',
    numJobs: 1,
    phoneNumber: '(61) 9 9427-7343',
    updatedAt: '2023-07-13T12:33:01.321Z',
    pets: [
      {
        color: 'Marrom',
        name: ' Mel Cachorro Florzinha ',
        breed: 'Pinscher ',
      },
    ],
    name: 'Maria da Conceição ',
    createdAt: '2023-07-13T12:33:01.321Z',
    createdBy: 'GnEf7o3GHVfzhZRvHPGO6swTSJf1',
  },
  {
    id: '5f2fcbb4-3dbe-4011-80dc-7f6b0c46b589',
    updatedAt: '2023-07-12T18:30:44.346Z',
    createdAt: '2023-07-12T18:30:44.346Z',
    pets: [
      {
        color: 'Bege ',
        name: 'Mel ',
        breed: 'SRD',
      },
    ],
    numJobs: 1,
    createdBy: 'GnEf7o3GHVfzhZRvHPGO6swTSJf1',
    phoneNumber: '(61) 99188-4882',
    name: 'Gizeli Souza ',
  },
  {
    id: '45f214e1-8f3b-41a3-a113-491375ed7f25',
    name: 'Joice Cardoso ',
    numJobs: 1,
    createdAt: '2023-07-11T17:42:07.618Z',
    phoneNumber: '(61) 9 9936-2999',
    createdBy: 'GnEf7o3GHVfzhZRvHPGO6swTSJf1',
    updatedAt: '2023-07-11T17:42:07.618Z',
    pets: [
      {
        color: 'Branca ',
        name: 'Fofinha ',
        breed: 'Shih-Tzu ',
      },
    ],
  },
]

export { mockedCustomers }
export type { ICustomer }
