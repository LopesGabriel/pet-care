import styled from 'styled-components'

export const ServiceCardContainer = styled.div`
  background-color: ${(props) => props.theme['black-400']};
  border-radius: 4px;
	display: inline-block;
  padding: 0.5rem 1rem;
	min-width: 280px;

	time {
		font-size: 0.8rem;
	}

	hr {
		width: 75%;
		margin: 1rem auto;
	}

	div.card-header {
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	div.body {
		display: flex;
		justify-content: space-between;
		align-items: stretch;

		.vr {
			align-items: center;
			display: flex;
			height: 100%;
			margin: 0 .5rem;

			div {
				height: 75%;
				border: 1px solid ${(props) => props.theme['black-600']};
			}
		}

		.base-box {
			border-radius: 2px;
			flex: 1;
			padding: 0.5rem 1rem;

			ul {
				list-style: none;
			}
		}

		.pet-info {
			
		}
	}
`
