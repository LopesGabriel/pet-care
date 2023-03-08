import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
import { ServiceCard } from '../../components/ServiceCard'
import {
  INewServiceFormInput,
  initialState,
} from '../../entities/INewServiceForm'
import { sampleServiceItems } from '../../entities/IServiceItem'
import { Row, TextArea, TextInput, FormContainer } from './styles'

export function Services() {
  const [formData, setFormData] = useState<INewServiceFormInput>(initialState)

  const updateField = (
    data: string | string[],
    field: keyof INewServiceFormInput,
  ) => {
    const newForm = { ...formData, [field]: data }
    setFormData(newForm)
  }

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const {
    breed,
    color,
    observation,
    petName,
    phone,
    // services,
    // treatments,
    tutor,
  } = formData

  return (
    <main className="row">
      <div className="col-12 col-md-6 col-lg-3">
        <div className="form-wrapper">
          <FormContainer onSubmit={handleForm}>
            <h3>Adicionar um novo pet</h3>

            <div className="input-wrapper">
              <TextInput
                placeholder="Tutor"
                value={tutor}
                onChange={(e) => updateField(e.target.value, 'tutor')}
              />
              <TextInput
                placeholder="Telefone"
                value={phone}
                onChange={(e) => updateField(e.target.value, 'phone')}
              />
              <TextInput
                placeholder="Nome do pet"
                value={petName}
                onChange={(e) => updateField(e.target.value, 'petName')}
              />

              <Row>
                <TextInput
                  placeholder="Raça"
                  value={breed}
                  onChange={(e) => updateField(e.target.value, 'breed')}
                />
                <TextInput
                  placeholder="Cor"
                  value={color}
                  onChange={(e) => updateField(e.target.value, 'color')}
                />
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

            <TextArea
              placeholder="Observações"
              value={observation}
              onChange={(e) => updateField(e.target.value, 'observation')}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '1rem 0',
              }}
            >
              <Button text="Salvar" onClick={() => console.log(formData)} />
            </div>
          </FormContainer>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-9">
        <div className="row gy-5">
          {sampleServiceItems.map((item) => (
            <div key={item.id} className="col-6 col-md-4 col-lg-3">
              <ServiceCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
