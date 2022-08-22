import React, {useEffect, useState, useContext} from 'react'
import { auth, db } from '../../../../services/firebase'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faLock } from '@fortawesome/free-solid-svg-icons'
import { ClientAuthContext } from '../../../../context/ClientAuthContext'
import { Avatar } from '@chakra-ui/react'


const ClientBody = () => {

    const [userCollections, setUserCollections] = useState([])
    const currUser = useContext(ClientAuthContext)

    useEffect(
        () => {
            const unsubscribe = 
            db.collection('collections')
            .orderBy('createdAt')
            .onSnapshot(
                snapshotQuery => {
                    setUserCollections(
                        snapshotQuery.docs.map(doc => ({
                            ...doc.data(),
                            id: doc.id
                        }))
                    )
                }
            )
            return () => {
                unsubscribe()
            }
        }, [])
        

        return (
        <div className='space-y-16 pl-28 py-5 w-full'>
            <input 
            type="text"
            placeholder='Filter by collection name..'
            className='py-2 px-10 outline-none rounded-full max-w-full' />
            <div className='flex gap-x-24 gap-y-10 items-center flex-wrap max-w-full'>
                <Link to='create-collection'>
                   <FontAwesomeIcon icon={faFolderPlus} className='text-7xl hover:scale-110 transition-all' />
                </Link>
                <div className='flex gap-x-4 flex-wrap gap-y-4 pr-5'>
                    {userCollections
                    .filter(({uid}) => auth.currentUser.uid === uid)
                    .map(({collectionName, collectionDescription, date, keywords}) => {
                        return (
                            <div className='bg-gray-200 p-6 md:w-80 w-full rounded-md text-gray-800 border-b-8 border-gray-500'>
                                <div className='flex flex-col gap-8'>
                                    <div className='flex gap-4 items-center'>
                                        <Avatar name={currUser.displayName} />
                                        <div>
                                            <h2>{currUser.displayName}</h2>
                                            <span className='text-xs text-blue-600'>Nobody can see your post <FontAwesomeIcon icon={faLock} /></span>
                                        </div>
                                    </div>
                                    <div className='space-y-4'>
                                        <h1 className='font-extrabold text-2xl'>{collectionName.charAt(0).toUpperCase() + collectionName.slice(1)} </h1>
                                        <div className='flex gap-1 flex-wrap'>
                                            {keywords.map(keyword => {
                                                return(
                                                    <span className='bg-gray-300 py-2 px-4 font-semibold rounded-full text-[10px]'>
                                                        {keyword}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                        <p className='text-sm'>{collectionDescription}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        
        </div>
    )
}   

export default ClientBody