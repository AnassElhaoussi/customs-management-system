import '../styles/index.css'
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Home from '../pages/Home/Home'
import Register from '../pages/RegisterForms/Register'
import Declarant from '../pages/RegisterForms/Declarant'
import ClientDashboard from '../pages/Dashboards/ClientDashboard'
import DeclarantDashboard from '../pages/Dashboards/DeclarantDashboard'
import { ClientAuthContext } from '../context/ClientAuthContext'
import ClientAccount from '../components/ClientAccount'
import CreateCollection from '../components/CreateCollection'
import { EventPopupProvider } from '../context/EventPopupContext'
import CreateDocument from '../components/CreateDocument'
import {useSelector} from 'react-redux'
import {auth} from '../services/firebase'

const AppRoutes = () => {

  const currUser = useContext(ClientAuthContext)
  const currUserCollections = useSelector((state) => state.collections.data.collectionsData)
  ?.filter(({uid}) => auth.currentUser.uid === uid)

  const createDocumentRoutes = currUserCollections?.map(collection => {
      return {
        path: `/client-dashboard/collection/${collection?.id}/create-document`,
        element: <CreateDocument />
      }
  })
  
  
  const RoutesArr = [
    {
      path: '/',
      element: <Home /> 
    },
    {
      path: '/signup-as-a-client',
      element: <Register />
    },
    {
      path: '/login-as-a-declarant',
      element: <Declarant />
    },
    {
      path: '/client-dashboard',
      element: <ClientDashboard />

    },
    {
      path: '/declarant-dashboard',
      element: <DeclarantDashboard />
    },
    {
      path: `/client-dashboard/account/${currUser?.displayName}`,
      element: <ClientAccount />
    },
    {
      path: '/client-dashboard/create-collection',
      element: <CreateCollection />
    },
    
  ]
  
  const NewRoutes = currUserCollections 
  ? [...RoutesArr, ...createDocumentRoutes]
  : RoutesArr

  return (
      <ChakraProvider>
        <EventPopupProvider>
          <div className='font-body'>
            <Routes>
              {NewRoutes?.map((route) => ( 
                // mapping through the routes array
                <Route path={route?.path} element={route?.element} />
              ))}
            </Routes>
          </div>
        </EventPopupProvider>
      </ChakraProvider>
  )
}

export default AppRoutes