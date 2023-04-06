import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { DataWrapper } from './styles'
import { useAuth } from '../../context/AuthContext'

function SelectedItemPage(props: any) {
  const { itemId } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    console.log('Page for item', itemId)

    if (!user) {
      console.info('User is not authenticated!')
      return navigate('/auth')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container" style={{ padding: 0 }}>
      <h1>Maia Pinscher</h1>
      <small>Criado por Indy Santos</small>

      <div className="row mt-4">
        <div className="col-6 col-md-12">
          <DataWrapper>
            <h4>Tutor:</h4>
            <span>Gabriel de Oliveira Lopes</span>
          </DataWrapper>
        </div>
        <div className="col-6 col-md-12">
          <DataWrapper>
            <h4>Telefone:</h4>
            <span>(61) 9 8235-2349</span>
          </DataWrapper>
        </div>
      </div>
    </div>
  )
}

export { SelectedItemPage }
