interface ITreatment {
  id: string
  name: string
  value: string
}

const sampleTreatments: ITreatment[] = [
  {
    id: 'ggthfsegh',
    name: 'Tem alergia',
    value: 'alergy',
  },
  {
    id: 'dCjtfyekh',
    name: 'Está fazendo tratamento',
    value: 'in-treatment',
  },
  {
    id: 'hYjmfheCh',
    name: 'Tem lesão na pele',
    value: 'skin-hurted',
  },
]

export { sampleTreatments }
export type { ITreatment }
