import React, {useContext, useState} from 'react'
import { db } from '../services/firebase'
import {memo} from 'react'
import { ClientAuthContext } from '../context/ClientAuthContext'
import { useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import moment from 'moment'
import { Button } from '@chakra-ui/react'

const SubmitCreateCollection = ({colName, colDescription, keywords, setErrorMessage}) => {
    const currUser = useContext(ClientAuthContext)
    const navigate = useNavigate()

    const submitCollection = async () => {
        const { uid, displayName } = currUser
        if(
            colName.trim().length !== 0
            && colDescription.trim().length !== 0
            && keywords.length === 4
        ) {
            await db
            .collection('collections')
            .add({
                collectionName: colName,
                collectionDescription: colDescription,
                keywords: keywords,
                displayName,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            })
            
            setErrorMessage('')           
            navigate('/client-dashboard')
        }
        
        setErrorMessage('Oups, something is missing!')
    }
    
        return <Button
        colorScheme='blue'
        onClick={submitCollection}
        >Submit</Button>
}

export default memo(SubmitCreateCollection)