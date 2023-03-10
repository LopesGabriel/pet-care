import {
  formatDistanceToNow,
  differenceInMinutes,
  differenceInHours,
} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'

import { IServiceItem } from '../../entities/IServiceItem'
import { Badge, ServiceCardContainer } from './styles'

interface IServiceProps extends IServiceItem {}
interface IUIElements {
  time: string
  badge: any
}

export function ServiceCard(props: IServiceProps) {
  const [timerId, setTimerId] = useState<number>(0)
  const [uiElements, setUiElements] = useState<IUIElements>({
    badge: generateBadge(),
    time: generateTime(),
  })

  function generateBadge() {
    const date = new Date(props.createdAt)
    const now = new Date()

    if (differenceInMinutes(now, date) < 10) {
      return <Badge className="novo">Novo</Badge>
    }

    if (differenceInHours(now, date) < 2) {
      return <Badge className="andamento">Em andamento</Badge>
    }

    return <Badge className="atrasado">Atrasado</Badge>
  }

  function generateTime() {
    return formatDistanceToNow(new Date(props.createdAt), { locale: ptBR })
  }

  function updateUI() {
    setUiElements({
      time: generateTime(),
      badge: generateBadge(),
    })
  }

  useEffect(() => {
    console.log('Acionou useEffect', timerId)
    if (!timerId) {
      clearInterval(timerId)
      const timer = setInterval(() => {
        console.log('Aqui updateUI')
        updateUI()
      }, 60000)

      setTimerId(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uiElements])

  const { badge, time } = uiElements

  return (
    <ServiceCardContainer>
      {badge}
      <h4>{props.pet.name}</h4>

      <div className="card-header">
        <h5>{props.tutor.name}</h5>
        <time dateTime={props.createdAt}>{time}</time>
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
