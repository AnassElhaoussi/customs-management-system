import React, {useContext, useState, useEffect, useRef} from 'react'
import { auth, db } from '../../services/firebase'
import ProfileSidebar from '../../layouts/Navigation/Dashboards/Client/ProfileSidebar'
import ClientBody from '../../layouts/body/Dashboards/Client/ClientBody'
import { ClientAuthContext } from '../../context/ClientAuthContext'

const ClientDashboard = () => {
    const currUser = useContext(ClientAuthContext)
    

    return (
        <div className='bg-gray-50'>
            <div className='h-screen'>
                <div className='bg-gray-50 flex'>
                    <ProfileSidebar />
                    <ClientBody />
                </div>
            </div>
        </div>
    )
}

export default ClientDashboard