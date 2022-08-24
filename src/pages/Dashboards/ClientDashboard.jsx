import React, {useContext, useState, useEffect, useRef} from 'react'
import { auth, db } from '../../services/firebase'
import { ClientAuthContext } from '../../context/ClientAuthContext'
import { useEventPopupContext } from '../../context/EventPopupContext'
import ProfileSidebar from '../../layouts/Navigation/Dashboards/Client/ProfileSidebar'
import ClientBody from '../../layouts/body/Dashboards/Client/ClientBody'
import {Alert, AlertIcon, Text} from '@chakra-ui/react'
import {getSuccess, getError} from '../../redux/slices/collectionsSlice'
import { useSelector, useDispatch } from 'react-redux'


const ClientDashboard = () => {
    const currUser = useContext(ClientAuthContext)
    const dispatch = useDispatch()
    const success = useSelector((state) => state.collections.responses.success)
    const error = useSelector((state) => state.collections.responses.error)


    useEffect(() => {
        if(success){
            setTimeout(() => dispatch(getSuccess('')), 2000)
        } else if(error){
            setTimeout(() => dispatch(getError('')), 2000)
        }
    }, [success, error])

    return (

            <div className='bg-gray-100 overflow-x-hidden'>
                <div className='h-screen'>
                    <div className={success || error ? 'bg-gray-100 flex opacity-25' : 'bg-gray-100 flex'}>
                        <ProfileSidebar />
                        <ClientBody />
                    </div>
                    {success && (
                        <div className='fixed left-1/2 top-1/2 md:w-1/2 w-4/5'>
                            <Alert 
                                status='success' 
                                height='fit-content' 
                                borderRadius='md' 
                                position='relative' 
                                left='-50%' 
                                borderBottom='4px' 
                                borderBottomColor='gray.500' >
                                <AlertIcon />
                                <Text className='md:text-base text-sm'>
                                    {success}
                                </Text>
                            </Alert>
                        </div>
                    )}
                    

                    {error && (
                        <div className='fixed left-1/2 top-1/2 md:w-1/2 w-4/5'>
                            <Alert 
                                status='error' 
                                height='fit-content' 
                                borderRadius='full' 
                                position='relative' 
                                left='-50%' 
                                borderBottom='4px' 
                                borderBottomColor='gray.500'> 
                                <AlertIcon />                                
                                {error}
                            </Alert>
                        </div>
                    )}
                </div>
            </div>
        
    )
}

export default ClientDashboard