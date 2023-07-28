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
  orderBy,
  limit,
  updateDoc,
} from 'firebase/firestore'
import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
import { ServiceCard } from '../../components/ServiceCard'
import {
  INewServiceFormInput,
  initialState as formInitialState,
} from '../../entities/INewServiceForm'
import { IJob, ServiceStatus } from '../../entities/IJob'
import { Row, TextArea, FormContainer } from './styles'
import { IService } from '../../entities/IService'
import { ITreatment } from '../../entities/ITreatments'
import { firestore } from '../../firebase/firestore'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { ICustomer } from '../../entities/ICustomer'
import { TextInput } from '../../components/TextInput'

interface IPet {
  name: string
  breed?: string
  color?: string
}

const servicesCollection = collection(firestore, '/services')
const treatmentsCollection = collection(firestore, '/treatments')
const jobsCollection = collection(firestore, '/jobs')
const customersCollection = collection(firestore, '/customers')

export function Services() {
  const { user } = useAuth()
  const [formData, setFormData] =
    useState<INewServiceFormInput>(formInitialState)
  const [jobs, setJobs] = useState<IJob[]>([])
  const [services, setServices] = useState<IService[]>([])
  const [treatments, setTreatments] = useState<ITreatment[]>([])
  const navigate = useNavigate()
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [tutorTimeout, setTutorTimeout] = useState(0)
  const [petsSuggestion, setPetsSuggestion] = useState<IPet[]>([])

  useEffect(() => {
    console.log('Running useEffect')
    if (!user) {
      return navigate('/auth')
    }

    getDocs(servicesCollection).then((snapshot) => {
      console.log('Available services received, size:', snapshot.size)
      const servicesArray: IService[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }))

      setServices(servicesArray)
    })

    getDocs(treatmentsCollection).then((snapshot) => {
      console.log('Available treatments received, size:', snapshot.size)
      const treatmentsArray: ITreatment[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }))

      setTreatments(treatmentsArray)
    })

    const customerQuery = query(
      customersCollection,
      orderBy('numJobs', 'desc'),
      limit(5),
    )
    getDocs(customerQuery).then((snapshot) => {
      console.log('Initial customers received, size:', snapshot.size)
      const customersArray: ICustomer[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
      }))

      setCustomers(customersArray)
    })

    const q = query(jobsCollection, where('status', '==', 0))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log('Jobs subscription result:', querySnapshot.size)
      const added: IJob[] = []
      const removed: string[] = []

      querySnapshot.docChanges().forEach((event) => {
        if (event.type === 'added') {
          added.push({
            id: event.doc.id,
            ...(event.doc.data() as any),
          })
          return
        }

        if (event.type === 'removed') {
          removed.push(event.doc.id)
          return
        }

        alert('Unhandled event received!')
        console.log(event.type, event.doc.id)
      })

      let newJobs = [...jobs]
      if (added) {
        newJobs.push(...added)
      }
      if (removed) {
        newJobs = newJobs.filter((job) => !removed.includes(job.id))
      }

      setJobs(newJobs)
    })

    return unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateField = (
    data: string | string[],
    field: keyof INewServiceFormInput,
  ) => {
    if (field === 'tutor') {
      if (tutorTimeout) {
        clearTimeout(tutorTimeout)
      }

      setTutorTimeout(
        setTimeout(() => {
          const strFrontCode = tutor.slice(0, tutor.length - 1)
          const strEndCode = tutor.slice(tutor.length - 1, tutor.length)

          const startcode = tutor
          const endcode =
            strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1)
          const q = query(
            customersCollection,
            where('name', '>=', startcode),
            where('name', '<', endcode),
            limit(5),
          )

          getDocs(q)
            .then((snapshot) => {
              console.log(
                'Customers auto-completion result size:',
                snapshot.size,
              )
              const customersArray: ICustomer[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...(doc.data() as any),
              }))

              console.log(customersArray)
              setCustomers(customersArray)
            })
            .catch((err) => console.error(err))
        }, 2000) as any,
      )
    }

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

    try {
      const customerQuery = query(
        customersCollection,
        where('name', '==', job.tutor.name),
        where('phoneNumber', '==', job.tutor.phone),
      )
      const customerSnapshot = await getDocs(customerQuery)
      if (!customerSnapshot.empty) {
        const customerRef = customerSnapshot.docs[0]
        const customer: ICustomer = {
          id: customerRef.id,
          ...(customerRef.data() as any),
        }

        if (!customer.pets.find((pet) => pet.name === job.pet.name)) {
          customer.pets.push(job.pet)
        }

        await updateDoc(customerRef.ref, {
          numJobs: customer.numJobs + 1,
          updatedAt: new Date().toISOString(),
          pets: customer.pets,
        })
      } else {
        const newCustomer = {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          createdBy: user?.uid!,
          name: job.tutor.name,
          numJobs: 1,
          pets: [job.pet],
          phoneNumber: job.tutor.phone,
        }
        await setDoc(doc(firestore, 'customers', uuid()), newCustomer)
      }
    } catch (err) {
      console.error(err)
    }
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

  const handleTutorAutocompleteClick = (customer: ICustomer) => {
    setFormData({
      ...formData,
      tutor: customer.name,
      phone: customer.phoneNumber,
    })
    setPetsSuggestion(customer.pets)
  }

  const handlePetSuggestionClick = (pet: IPet) => {
    setFormData({
      ...formData,
      petName: pet.name,
      breed: pet.breed ?? '',
      color: pet.color ?? '',
    })
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

            <div className="row gy-3">
              <div className="col-12">
                <TextInput
                  placeholder="Tutor"
                  value={tutor}
                  onChange={(e) => updateField(e.target.value, 'tutor')}
                  options={customers.map((contact) => ({
                    ...contact,
                    label: contact.name,
                  }))}
                  onSelectAutocompleteOption={handleTutorAutocompleteClick}
                />
              </div>
              <div className="col-12">
                <TextInput
                  placeholder="Telefone"
                  value={phone}
                  onChange={(e) => updateField(e.target.value, 'phone')}
                />
              </div>
              <div className="col-12">
                <TextInput
                  placeholder="Nome do pet"
                  value={petName}
                  onChange={(e) => updateField(e.target.value, 'petName')}
                  options={petsSuggestion.map((pet) => ({
                    ...pet,
                    id: pet.name.trim(),
                    label: pet.name,
                  }))}
                  onSelectAutocompleteOption={handlePetSuggestionClick}
                />
              </div>

              <div className="col-6">
                <TextInput
                  placeholder="Raça"
                  value={breed}
                  onChange={(e) => updateField(e.target.value, 'breed')}
                />
              </div>
              <div className="col-6">
                <TextInput
                  placeholder="Cor"
                  value={color}
                  onChange={(e) => updateField(e.target.value, 'color')}
                />
              </div>
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
