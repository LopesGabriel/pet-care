import { ServiceCardContainer } from './styles'

export function ServiceCard() {
  return (
    <ServiceCardContainer>
      <div className="card-header">
        <h4>Maia Pinscher</h4>
        <time dateTime="2023-03-04T23:59:30">04/03/2023</time>
      </div>
      <h5>Gabriel Lopes</h5>

			<hr />

			<div className="body">
				<div className="base-box pet-info">
					<ul>
						<li>Pinscher</li>
						<li>Marrom</li>
					</ul>
				</div>

				<div className="vr">
					<div />
				</div>

				<div className="base-box services">
					<ul>
						<li>Pinscher</li>
						<li>Marrom</li>
					</ul>
				</div>
			</div>
    </ServiceCardContainer>
  )
}
