import {
  formatDistanceToNow,
  differenceInMinutes,
  differenceInHours,
} from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { IService } from '../../entities/IService'
import { Badge, ServiceCardContainer } from './styles'

interface IServiceProps extends IService {}

function generateBadge(createdAt: string) {
  const date = new Date(createdAt)
  const now = new Date()

  if (differenceInMinutes(now, date) < 15) {
    return <Badge className="novo">Novo</Badge>
  }

  if (differenceInHours(now, date) < 3) {
    return <Badge className="andamento">Em andamento</Badge>
  }

  return <Badge className="atrasado">Atrasado</Badge>
}

export function ServiceCard(props: IServiceProps) {
  return (
    <ServiceCardContainer>
      {generateBadge(props.createdAt)}
      <h4>{props.pet.name}</h4>

      <div className="card-header">
        <h5>{props.tutor.name}</h5>
        <time dateTime={props.createdAt}>
          {formatDistanceToNow(new Date(props.createdAt), { locale: ptBR })}
        </time>
      </div>

      <hr />

      <div className="body">
        <h6>Características</h6>
        <ul>
          {props.pet.breed ? <li>{props.pet.breed}</li> : null}
          {props.pet.color ? <li>{props.pet.color}</li> : null}
        </ul>

        <hr />

        <h6>Serviços</h6>
        <ul>
          {props.services.map((service) => (
            <li key={service.id}>{service.name}</li>
          ))}
        </ul>
      </div>
    </ServiceCardContainer>
  )
}
