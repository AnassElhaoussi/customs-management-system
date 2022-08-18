import React from 'react'
import { auth } from '../../services/firebase'
import ProfileSidebar from '../../layouts/Navigation/Dashboards/Client/ProfileSidebar'
import ClientBody from '../../layouts/body/Dashboards/Client/ClientBody'

const ClientDashboard = () => {

    return (
        <div className='flex'>
            <ProfileSidebar />
            <ClientBody />
        </div>
    )
}

export default ClientDashboard