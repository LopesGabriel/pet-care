import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import {
  collection,
  onSnapshot,
  setDoc,
  query,
  where,
  getDocs,
  doc,
} from 'firebase/firestore'
import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
import { ServiceCard } from '../../components/ServiceCard'
import {
  INewServiceFormInput,
  initialState as formInitialState,
} from '../../entities/INewServiceForm'
import { IJob, ServiceStatus } from '../../entities/IJob'
import { Row, TextArea, TextInput, FormContainer } from './styles'
import { IService } from '../../entities/IService'
import { ITreatment } from '../../entities/ITreatments'
import { firestore } from '../../firebase/firestore'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export function Services() {
  const { user } = useAuth()
  const servicesCollection = collection(firestore, '/services')
  const treatmentsCollection = collection(firestore, '/treatments')
  const jobsCollection = collection(firestore, '/jobs')
  const [formData, setFormData] =
    useState<INewServiceFormInput>(formInitialState)
  const [jobs, setJobs] = useState<IJob[]>([])
  const [services, setServices] = useState<IService[]>([])
  const [treatments, setTreatments] = useState<ITreatment[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      return navigate('/auth')
    }

    getDocs(servicesCollection).then((snapshot) => {
      const servicesArray: IService[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }))

      setServices(servicesArray)
    })

    getDocs(treatmentsCollection).then((snapshot) => {
      const treatmentsArray: ITreatment[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }))

      setTreatments(treatmentsArray)
    })

    const q = query(jobsCollection, where('status', '==', 0))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newJobs: IJob[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
      }))

      console.log('Jobs', newJobs)
      setJobs(newJobs)
    })

    return unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateField = (
    data: string | string[],
    field: keyof INewServiceFormInput,
  ) => {
    const newForm = { ...formData, [field]: data }
    setFormData(newForm)
  }

  const handleCheckbox = (event: { value: IService; checked: boolean }) => {
    const { checked, value } = event
    const isService = !!services.find((s) => s.id === value.id)

    if (checked) {
      if (isService) {
        const newServices = formData.services.filter(
          (service) => service.id !== value.id,
        )
        newServices.push(value)
        setFormData({ ...formData, services: newServices })
      } else {
        const newTreatments = formData.treatments.filter(
          (treatment) => treatment.id !== value.id,
        )
        newTreatments.push(value)
        setFormData({ ...formData, treatments: newTreatments })
      }

      return
    }

    if (isService) {
      const newServices = formData.services.filter(
        (service) => service.id !== value.id,
      )
      setFormData({ ...formData, services: newServices })
    } else {
      const newTreatments = formData.treatments.filter(
        (treatment) => treatment.id !== value.id,
      )
      setFormData({ ...formData, treatments: newTreatments })
    }
  }

  const saveNewJob = async (job: IJob) => {
    await setDoc(doc(firestore, 'jobs', job.id), {
      createdAt: job.createdAt,
      createdBy: job.createdBy,
      observation: job.observation,
      pet: job.pet,
      services: job.services,
      status: job.status,
      treatments: job.treatments,
      tutor: job.tutor,
      updatedAt: job.updatedAt,
    })
  }

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const now = new Date().toISOString()
    const {
      breed,
      color,
      observation,
      petName,
      phone,
      services,
      treatments,
      tutor,
    } = formData

    const newJob: IJob = {
      createdAt: now,
      createdBy: user?.uid!,
      observation,
      id: uuid(),
      pet: {
        name: petName,
        breed,
        color,
      },
      services,
      status: ServiceStatus.IN_PROGRESS,
      treatments,
      tutor: {
        name: tutor,
        phone,
      },
      updatedAt: now,
    }

    try {
      await saveNewJob(newJob)
      const newJobs = [...jobs, newJob]
      setJobs(newJobs)
      setFormData(formInitialState)
    } catch (err) {
      console.error(err)
      alert('Não foi possível adicionar o novo serviço, tente novamente.')
    }
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

  const isSaveDisabled = !petName || !tutor || !phone || !breed || !color

  return (
    <main className="row">
      <div className="col-12 col-md-5 col-xl-4 mb-4 mb-sm-0">
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
                {services.map((service) => (
                  <Checkbox
                    key={service.id}
                    text={service.name}
                    value={service}
                    onChange={handleCheckbox}
                  />
                ))}
              </Row>
            </div>

            <div className="input-wrapper">
              <h4>Outros</h4>

              <Row gap="0.5rem">
                {treatments.map((treatment) => (
                  <Checkbox
                    key={treatment.id}
                    text={treatment.name}
                    value={treatment}
                    onChange={handleCheckbox}
                  />
                ))}
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
              <Button
                disabled={isSaveDisabled}
                disabledText="Preencha todos os campos"
                text="Salvar"
              />
            </div>
          </FormContainer>
        </div>
      </div>

      <div className="col-12 col-md-7 col-xl-8">
        <div className="row gy-5">
          {jobs.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-xl-4">
              <NavLink
                to={`/${item.id}`}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <ServiceCard {...item} />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
