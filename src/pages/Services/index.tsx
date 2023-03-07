import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
import { ServiceCard } from '../../components/ServiceCard'
import { Row, TextArea, TextInput, FormContainer } from './styles'

export function Services() {
  // const services = [
  //   {
  //     id: 'egfsgthg',
  //     name: 'Banho',
  //     value: 'banho',
  //   },
  //   {
  //     id: 'egfshtgg',
  //     name: 'Corte de unha',
  //     value: 'corte-de-unha',
  //   },
  //   {
  //     id: 'cHfEhhkg',
  //     name: 'Tosa higiênica',
  //     value: 'tosa-higienica',
  //   },
  //   {
  //     id: 'cHgEchGy',
  //     name: 'Tosa completa',
  //     value: 'tosa-completa',
  //   },
  //   {
  //     id: 'TrhjbKky',
  //     name: 'Patinha de Poodle',
  //     value: 'patinha-de-poodle',
  //   },
  //   {
  //     id: 'DfhhlYku',
  //     name: 'Transporte',
  //     value: 'transporte',
  //   },
  // ]

  // const other = [
  //   {
  //     id: 'ggthfsegh',
  //     name: 'Tem alergia',
  //     value: 'alergy',
  //   },
  //   {
  //     id: 'dCjtfyekh',
  //     name: 'Está fazendo tratamento',
  //     value: 'in-treatment',
  //   },
  //   {
  //     id: 'hYjmfheCh',
  //     name: 'Tem lesão na pele',
  //     value: 'skin-hurted',
  //   },
  // ]

  const serviceItems = [
    {
      id: 'rgfsdgdh',
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
          value: 'banho',
        },
        {
          id: 'egfshtgg',
          name: 'Corte de unha',
          value: 'corte-de-unha',
        },
      ],
      other: [],
      observations: 'Cuidado para não machucar minha cachorra',
    },
    {
      id: 'adfwrgtht',
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
          value: 'banho',
        },
        {
          id: 'egfshtgg',
          name: 'Corte de unha',
          value: 'corte-de-unha',
        },
        {
          id: 'DfhhlYku',
          name: 'Transporte',
          value: 'transporte',
        },
      ],
      other: [],
      observations: '',
    },
    {
      id: 'rgfhgthrrg',
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
          value: 'banho',
        },
      ],
      other: [
        {
          id: 'dCjtfyekh',
          name: 'Está fazendo tratamento',
          value: 'in-treatment',
        },
      ],
      observations: 'Cuidado com essa gata, ela é meio doida',
    },
    {
      id: 'rth54egthy',
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
          value: 'banho',
        },
        {
          id: 'cHfEhhkg',
          name: 'Tosa higiênica',
          value: 'tosa-higienica',
        },
      ],
      other: [],
      observations: '',
    },
    {
      id: 'rg1fd4gr4gbrtg',
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
          value: 'banho',
        },
        {
          id: 'cHgEchGy',
          name: 'Tosa completa',
          value: 'tosa-completa',
        },
        {
          id: 'DfhhlYku',
          name: 'Transporte',
          value: 'transporte',
        },
      ],
      other: [
        {
          id: 'hYjmfheCh',
          name: 'Tem lesão na pele',
          value: 'skin-hurted',
        },
      ],
      observations: 'Não tosar a orelha',
    },
  ]

  return (
    <main className="row">
      <div className="col-12 col-md-6 col-lg-3">
        <div className="form-wrapper">
          <FormContainer action="">
            <h3>Adicionar um novo pet</h3>

            <div className="input-wrapper">
              <TextInput placeholder="Tutor" />
              <TextInput placeholder="Telefone" />
              <TextInput placeholder="Nome do pet" />

              <Row>
                <TextInput placeholder="Raça" />
                <TextInput placeholder="Cor" />
              </Row>
            </div>

            <div className="input-wrapper">
              <h4>Serviços</h4>

              <Row gap="0.5rem">
                <Checkbox text="Banho" value="banho" />
                <Checkbox text="Corte de unha" value="corte-unha" />

                <Checkbox text="Tosa higiênica" value="tosa-higienica" />
                <Checkbox text="Tosa completa" value="tosa-completa" />

                <Checkbox text="Patinha de Poodle" value="patinha-de-poodle" />
                <Checkbox text="Transporte" value="tosa-completa" />
              </Row>
            </div>

            <div className="input-wrapper">
              <h4>Outros</h4>

              <Row gap="0.5rem">
                <Checkbox text="Tem alergia" value="alergy" />
                <Checkbox text="Está fazendo tratamento" value="treatment" />
                <Checkbox text="Tem lesão na pele" value="skin-hurted" />
              </Row>
            </div>

            <TextArea placeholder="Observações" />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '1rem 0',
              }}
            >
              <Button text="Salvar" />
            </div>
          </FormContainer>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-9">
        <div className="row gy-5">
          {serviceItems.map((item) => (
            <div key={item.id} className="col-6 col-md-4 col-lg-3">
              <ServiceCard />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
