/* eslint-disable prettier/prettier */
import { collection, onSnapshot } from 'firebase/firestore'
import { firestore } from '../../firebase/firestore'
import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../Loading'
import { ICustomer } from '../../entities/ICustomer'
import { format } from 'date-fns'

export function Customers() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [isLoading, setLoading] = useState(true)
  const [customers, setCustomers] = useState<ICustomer[] | null>(null)

  const customersCollection = collection(firestore, '/customers')

  useEffect(() => {
    if (!user) {
      return navigate('/auth')
    }

    const unsubscribe = onSnapshot(customersCollection, (querySnapshot) => {
      const newCustomers: ICustomer[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
      }))

      console.log('Customers', newCustomers)
      setCustomers(newCustomers)
      setLoading(false)
    })

    return unsubscribe
  }, [customers, isLoading])

  if (isLoading) return <Loading />

  return (
    <main>
      <div>
        <h2>Clientes cadastrados</h2>
        {customers !== null
          ? customers.map((customer) => (
            <div key={customer.id}>
              <p>
                <b>{customer.name}</b>
                <br />
                Criado em{' '}
                {format(
                  new Date(customer.createdAt),
                  "dd/MM/yyyy 'às' HH:mm",
                )}{' '}
                por {customer.createdBy}.
              </p>
              <p>
                Possuí um total de {customer.pets.length} animais cadastrados
                e um total de {customer.numJobs} atendimentos realizados.
              </p>
            </div>
          ))
          : null}
      </div>
    </main>
  )
}
