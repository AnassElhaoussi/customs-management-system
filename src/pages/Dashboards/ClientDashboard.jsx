import React, {useContext, useState, useEffect, useRef} from 'react'
import { auth, db } from '../../services/firebase'
import ProfileSidebar from '../../layouts/Navigation/Dashboards/Client/ProfileSidebar'
import ClientBody from '../../layouts/body/Dashboards/Client/ClientBody'
import { ClientAuthContext } from '../../context/ClientAuthContext'

const ClientDashboard = () => {
    const currUser = useContext(ClientAuthContext)
    

    return (
        <div className='flex'>
            <ProfileSidebar />
            <ClientBody />
    
        </div>
    )
}

export default ClientDashboard