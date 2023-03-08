interface IService {
  id: string
  name: string
  value: string
}

const sampleServices: IService[] = [
  {
    id: 'egfsgthg',
    name: 'Banho',
    value: 'banho',
  },
  {
    id: 'egfshtgg',
    name: 'Corte de unha',
    value: 'corte-de-unha',
  },
  {
    id: 'cHfEhhkg',
    name: 'Tosa higiênica',
    value: 'tosa-higienica',
  },
  {
    id: 'cHgEchGy',
    name: 'Tosa completa',
    value: 'tosa-completa',
  },
  {
    id: 'TrhjbKky',
    name: 'Patinha de Poodle',
    value: 'patinha-de-poodle',
  },
  {
    id: 'DfhhlYku',
    name: 'Transporte',
    value: 'transporte',
  },
]

export { sampleServices }
export type { IService }
