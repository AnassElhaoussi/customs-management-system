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
import React from 'react'
import { EventPopupProvider } from '../context/EventPopupContext'

const AppRoutes = () => {

  const currUser = useContext(ClientAuthContext)

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

    }
  ]

  return (
      <ChakraProvider>
        <EventPopupProvider>
          <div className='font-body'>
            <Routes>
              {RoutesArr.map(({path, element}) => ( 
                // mapping through the routes array
                <Route path={path} element={element} />
              ))}
            </Routes>
          </div>
        </EventPopupProvider>
      </ChakraProvider>
  )
}

export default AppRoutes