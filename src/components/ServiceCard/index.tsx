import { Badge, ServiceCardContainer } from './styles'

export function ServiceCard() {
  return (
    <ServiceCardContainer>
      <Badge className="andamento">Em andamento</Badge>
      <h4>Maia Pinscher</h4>

      <div className="card-header">
        <h5>Gabriel Lopes</h5>
        <time dateTime="2023-03-04T23:59:30">04/03/2023</time>
      </div>

      <hr />

      <div className="body">
        <h6>Características</h6>
        <ul>
          <li>Pinscher</li>
          <li>Marrom</li>
        </ul>

        <hr />

        <h6>Serviços</h6>
        <ul>
          <li>Banho</li>
          <li>Corte de unha</li>
          <li>Desembolo</li>
          <li>Tosa completa</li>
        </ul>
      </div>
    </ServiceCardContainer>
  )
}
