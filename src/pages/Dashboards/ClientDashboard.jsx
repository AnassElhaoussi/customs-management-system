import React from 'react'
import { auth } from '../../services/firebase'

const ClientDashboard = () => {
    function logout(){
        auth.signOut()
    }
    return (
        <div onClick={logout}>logout</div>
    )
}

export default ClientDashboard