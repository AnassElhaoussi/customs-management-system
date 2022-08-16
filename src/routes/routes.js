import '../styles/index.css'
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Register from '../pages/RegisterForms/Register'
import Declarant from '../pages/RegisterForms/Declarant'
import ClientDashboard from '../pages/Dashboards/ClientDashboard'
import DeclarantDashboard from '../pages/Dashboards/DeclarantDashboard'



const AppRoutes = () => {
  return (
    <div className='font-body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup-as-a-client' element={<Register />} />
          <Route path='/login-as-a-declarant' element={<Declarant />} />
          <Route path='/declarant-dashboard' element={
            <DeclarantDashboard />} />
          <Route path='/client-dashboard' element={<ClientDashboard /> } />
        </Routes>
    </div>
  )
}

export default AppRoutes