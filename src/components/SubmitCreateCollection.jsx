import React, {useContext, useState} from 'react'
import { db } from '../services/firebase'
import {memo} from 'react'
import { ClientAuthContext } from '../context/ClientAuthContext'
import { useNavigate } from 'react-router-dom'

const SubmitCreateCollection = ({colName, colDescription, keywords, setErrorMessage}) => {
    const currUser = useContext(ClientAuthContext)
    const navigate = useNavigate()

    const submitCollection = async () => {
        const { uid } = currUser
        if(
            colName.trim().length !== 0
            && colDescription.trim().length !== 0
            && keywords.length === 4
        ) {
        w
            await db
            .collection('collections')
            .add({
                collectionName: colName,
                collectionDescription: colDescription,
                keywords: keywords,
                user: currUser.displayName,
                uid
            })
            
            setErrorMessage('')           
            navigate('/client-dashboard')
        }
        
        setErrorMessage('Oups, something is missing!')
    }
    
    
        return <button 
        className='bg-yellow-500 py-2 px-8 rounded-md hover:border-b-4 border-gray-600 shadow-md'
        onClick={submitCollection}
        >Submit</button>
                
    
    
}

export default memo(SubmitCreateCollection)