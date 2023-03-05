import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
import { ServiceCard } from '../../components/ServiceCard'
import { MainContainer, Row, TextArea, TextInput } from './styles'

export function Services() {
  return (
    <MainContainer>
      <div className="form-wrapper">
        <form action="">
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
        </form>
      </div>

      <div className="list-wrapper">
        <ServiceCard />
      </div>
    </MainContainer>
  )
}
