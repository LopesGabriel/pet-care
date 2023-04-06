import { LoadingContainer } from './styles'

function Loading() {
  return (
    <LoadingContainer>
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Carregando...</span>
      </div>
    </LoadingContainer>
  )
}

export { Loading }
