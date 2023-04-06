/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { onSnapshot, doc } from 'firebase/firestore'

import { DataWrapper, ServicesList, Title } from './styles'
import { useAuth } from '../../context/AuthContext'
import { firestore } from '../../firebase/firestore'
import { IJob } from '../../entities/IJob'
import { Loading } from '../Loading'
import { format } from 'date-fns'

function SelectedItemPage(props: any) {
  const { itemId } = useParams()
  const { user } = useAuth()
  const [job, setJob] = useState<IJob>({} as IJob)
  const [isLoading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      console.info('User is not authenticated!')
      return navigate('/auth')
    }

    const unsubscribe = onSnapshot(doc(firestore, 'jobs', itemId!), (doc) => {
      const newJob: IJob = {
        id: doc.id,
        ...(doc.data() as any),
      }

      setJob(newJob)
      setLoading(false)
    })

    return unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [job])

  if (isLoading) return <Loading />

  return (
    <div className="container" style={{ padding: 0 }}>
      <Title>{job.pet.name}{job.pet.breed ? <small> ({job.pet.breed})</small> : null}</Title>
      <small>
        {user?.displayName
          ? `Criado por ${user?.displayName} em ${format(new Date(job.createdAt), "dd/MM/yyyy 'às' HH:mm")}`
          : `Criado em ${format(new Date(job.createdAt), "dd/MM/yyyy 'às' HH:mm")}`}
      </small>

      <div className="row mt-2 gy-3">
        <div className="col-6 col-md-12">
          <DataWrapper>
            <h4>Tutor:</h4>
            <span>{job.tutor.name}</span>
          </DataWrapper>
        </div>
        <div className="col-6 col-md-12">
          <DataWrapper>
            <h4>Telefone:</h4>
            <span>{job.tutor.phone.replace(/^(\d{2})(\d{5})(\d{4})$/g, '+55 ($1) $2-$3')}</span>
          </DataWrapper>
        </div>
        {
          job.observation
            ? <div className="col-12">
              <DataWrapper>
                <h4 className='text-warning'>Observação:</h4>
                <p>{job.observation}</p>
              </DataWrapper>
            </div>
            : null
        }
        <div className="col-12">
          <h4>Serviços:</h4>
          <ServicesList>
            {
              job.services.map(service => (
                <li key={service.id}>{service.name}</li>
              ))
            }
          </ServicesList>
        </div>
        {
          job.treatments.length > 0
            ? <div className="col-12">
              <h4>Tratamentos:</h4>
              <ServicesList>
                {
                  job.treatments.map(treatment => (
                    <li key={treatment.id}>{treatment.name}</li>
                  ))
                }
              </ServicesList>
            </div>
            : null
        }
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-4 col-lg-2">
          <div className="d-grid">
            <button className='btn btn-success'>
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SelectedItemPage }
