import React from 'react'
import { auth } from '../../../../services/firebase'

const ClientBody = () => {

    return (
        <div className='flex flex-col gap-10 pl-28 py-5'>
            <input 
            type="text"
            placeholder='Filter by collection name..'
            className='py-2 px-10 outline-none bg-gray-50 rounded-full' />
            <div className=''>
                <div className='flex items-center justify-center text-7xl 
                text-white w-44 h-44 bg-blue-700 rounded-3xl cursor-pointer shadow-lg hover:scale-105 transition-all'>+</div>
            </div>
        </div>
    )
}   

export default ClientBody