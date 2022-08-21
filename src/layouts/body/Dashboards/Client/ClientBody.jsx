import React from 'react'
import { auth } from '../../../../services/firebase'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

const ClientBody = () => {

    return (
        <div className='flex flex-col gap-10 pl-28 py-5'>
            <input 
            type="text"
            placeholder='Filter by collection name..'
            className='py-2 px-10 outline-none rounded-full' />
            <div className=''>
                <Link to='create-collection'>
                   <FontAwesomeIcon icon={faFolderPlus} className='text-7xl hover:scale-110 transition-all' />
                </Link>
            </div>
        
        </div>
    )
}   

export default ClientBody