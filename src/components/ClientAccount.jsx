import React, {useContext, useState} from 'react'
import {Avatar} from '@chakra-ui/react'
import { ClientAuthContext } from '../context/ClientAuthContext'
import { auth } from '../services/firebase'


const ClientAccount = () => {
    const currUser = useContext(ClientAuthContext)

    const handleSignOut = () => auth.signOut()

    return (
        <div className='h-screen'>
        <div
            className='flex md:flex-row flex-col gap-5 items-center shadow-lg justify-center h-1/2 w-full bg-gradient-to-b from-gray-50 via-gray-50 to-white '>
                <Avatar name={currUser.displayName} size='2xl' />
                <div className='flex flex-col gap-5 md:items-start items-center'>
                    <div className='text-gray-800'>
                        <h1 className='md:text-5xl text-3xl font-extrabold'>{currUser.displayName}</h1>
                        <p className=' font-semibold md:text-sm text-sm'>{currUser.email}</p>
                    </div>
                    <button 
                    className='py-2 px-10 font-bold bg-gray-500 text-gray-100 transition-all rounded-md'
                    onClick={handleSignOut}>Logout</button>
                </div>
            </div>
            <div className='p-10 h-1/2 flex items-center justify-center gap-x-20 gap-y-5 flex-wrap py-28'>
                <div className='space-y-2 bg-gray-50 rounded-md p-5 border-b-[5px] border-gray-500'>
                    <h2 className='text-gray-600'>Total Collections</h2>
                    <h1 className='text-4xl'>0</h1>
                </div>
                <div className='space-y-2 bg-gray-50 rounded-md p-5 border-b-[5px] border-gray-500'>
                    <h2 className='text-gray-600'>Total Documents</h2>
                    <h1 className='text-4xl'>0</h1>
                </div>
                <div className='space-y-2 bg-gray-50 rounded-md p-5 border-b-[5px] border-gray-500'>
                    <h2 className='text-gray-600'>Sent Collections</h2>
                    <h1 className='text-4xl'>0</h1>
                </div>
            </div>
        </div>
    )
}

export default ClientAccount