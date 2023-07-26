/* eslint-disable prettier/prettier */
import { useEffect, useState, FormEvent } from 'react'
import { format } from 'date-fns'
import { collection, getDocs, limit, orderBy, query, startAfter, startAt, where } from 'firebase/firestore'
import { Loading } from '../Loading'
import { Pagination } from './styles'
import { firestore } from '../../firebase/firestore'
import { TextInput } from '../../components/TextInput'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ICustomer } from '../../entities/ICustomer'

const customersCollection = collection(firestore, '/customers')

export function Customers() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [filter, setFilter] = useState<any[]>([])
  const [isLoading, setLoading] = useState(true)
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [pastClients, setPastClients] = useState<any[]>([])
  const [clientName, setClientName] = useState('')
  const [reset, setReset] = useState(false)

  const onFilterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)

    if (clientName) {
      const newFilter = [where('name', '>=', clientName), where('name', '<=', clientName + '\uf8ff')]

      const q = query(
        customersCollection,
        orderBy("updatedAt", "desc"),
        ...newFilter,
        limit(10)
      )

      try {
        const docSnapshot = await getDocs(q)
        if (docSnapshot.empty) {
          alert("Sem resultados para esse filtro")
          return
        }

        const newCustomers: ICustomer[] = docSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as any)
        }))

        setCustomers(newCustomers)
        setFilter(newFilter)
        setPastClients([newCustomers[newCustomers.length - 1]])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }

      return
    }

    setFilter([])
    setReset(!reset)
  }

  const onNextPage = async (event: any) => {
    event.preventDefault()
    setLoading(true)

    const q = query(
      customersCollection,
      orderBy("updatedAt", "desc"),
      ...filter,
      limit(10),
      startAfter(pastClients[pastClients.length - 1])
    )

    try {
      const docSnapshots = await getDocs(q)
      if (docSnapshots.empty) {
        alert('Não existem mais registros')
        setLoading(false)
        return
      }

      const newCustomers: ICustomer[] = docSnapshots.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any)
      }))

      setPastClients([...pastClients, newCustomers[newCustomers.length - 1]])
      setCustomers(newCustomers)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const onPreviousPage = async (event: any) => {
    event.preventDefault()
    setLoading(true)
    const previous = [...pastClients]
    previous.pop()

    const q = query(
      customersCollection,
      orderBy("updatedAt", "desc"),
      ...filter,
      limit(10),
      startAt(previous[previous.length - 1])
    )

    try {
      const docSnapshots = await getDocs(q)
      if (docSnapshots.empty) {
        alert('Não existem mais registros')
        setLoading(false)
        return
      }

      const newCustomers: ICustomer[] = docSnapshots.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any)
      }))

      setPastClients(previous)
      setCustomers(newCustomers)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!user) {
      return navigate('/auth')
    }

    const q = query(customersCollection, orderBy("updatedAt", "desc"), limit(10))

    getDocs(q).then((documentSnapshots) => {
      const newCustomers: ICustomer[] = documentSnapshots.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
      }))

      setPastClients([newCustomers[newCustomers.length - 1]])
      setCustomers(newCustomers)
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset])

  if (isLoading) return <Loading />

  return (
    <main>
      <form className='row' onSubmit={onFilterSubmit}>
        <div className="col-12 col-md-6">
          <h2 className='mb-4'>Clientes cadastrados</h2>
        </div>
        <div className="col-12 col-md">
          <TextInput
            placeholder="Nome do cliente"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
      </form>
      <table className='table table-dark table-hover'>
        <thead>
          <tr>
            <th scope='col'>Nome</th>
            <th scope='col'>Número</th>
            <th scope='col'>Qtd. Animais</th>
            <th scope='col'>Qtd. Atendimentos</th>
            <th scope='col'>Dt. Criação</th>
          </tr>
        </thead>
        <tbody>
          {
            customers !== null
              ? customers.map((customer) => (
                <tr key={customer.id}>
                  <th scope='row'>{customer.name}</th>
                  <th>{customer.phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})$/g, '+55 ($1) $2-$3')}</th>
                  <th>{customer.pets.length}</th>
                  <th>{customer.numJobs}</th>
                  <th>{format(new Date(customer.createdAt), "dd/MM/yyyy 'às' HH:mm")}</th>
                </tr>
              ))
              : null
          }
        </tbody>
      </table>

      <Pagination aria-label="Page navigation">
        <ul className="pagination justify-content-end">
          <li className={`page-item ${pastClients.length < 2 ? 'disabled' : ''}`}>
            <a className="page-link" onClick={onPreviousPage}>Previous</a>
          </li>
          <li className={`page-item ${customers.length < 10 ? 'disabled' : ''}`}>
            <a className='page-link' href="#" onClick={onNextPage}>Next</a>
          </li>
        </ul>
      </Pagination>
    </main>
  )
}
