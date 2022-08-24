import React, {useContext, useState, useEffect, useRef} from 'react'
import { auth, db } from '../../services/firebase'
import { ClientAuthContext } from '../../context/ClientAuthContext'
import { useEventPopupContext } from '../../context/EventPopupContext'
import ProfileSidebar from '../../layouts/Navigation/Dashboards/Client/ProfileSidebar'
import ClientBody from '../../layouts/body/Dashboards/Client/ClientBody'
import {Alert, AlertIcon} from '@chakra-ui/react'


const ClientDashboard = () => {
    const currUser = useContext(ClientAuthContext)
    const {message, setMessage, errorStatus, setErrorStatus} = useEventPopupContext()

    useEffect(() => {
        if(message){
            setTimeout(() => setMessage(''), 2000)
        } else if(errorStatus){
            setTimeout(() => setErrorStatus(''), 2000)
        }
    }, [message, errorStatus])

    return (

            <div className='bg-gray-100 '>
                <div className='h-screen'>
                    <div className='bg-gray-100 flex'>
                        <ProfileSidebar />
                        <ClientBody />
                    </div>
                    {message && (
                        <div className='fixed left-1/2 top-1/2'>
                            <Alert 
                                status='success' 
                                height='fit-content' 
                                borderRadius='full' 
                                position='relative' 
                                left='-50%' 
                                borderBottom='4px' 
                                borderBottomColor='gray.500' >
                                <AlertIcon />
                                {message}
                            </Alert>
                        </div>
                    )}
                    

                    {errorStatus && (
                        <div className='fixed left-1/2'>
                            <Alert 
                                status='error' 
                                height='fit-content' 
                                borderRadius='full' 
                                position='relative' 
                                left='-50%' 
                                borderBottom='4px' 
                                borderBottomColor='gray.500'> 
                                <AlertIcon />                                
                                {errorStatus}
                            </Alert>
                        </div>
                    )}
                </div>
            </div>
        
    )
}

export default ClientDashboard