import React, {useContext, useState} from 'react'
import { db } from '../services/firebase'
import {memo} from 'react'
import { ClientAuthContext } from '../context/ClientAuthContext'
import { useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import moment from 'moment'
import { Button } from '@chakra-ui/react'
import {getSuccess, getError, getLoading} from '../redux/slices/asyncEvents'
import { useDispatch } from 'react-redux'

const SubmitCreateCollection = ({colName, colDescription, keywords, setErrorMessage}) => {
    const currUser = useContext(ClientAuthContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const submitCollection = async () => {
        const { uid, displayName } = currUser
        if(
            colName.trim().length !== 0
            && colDescription.trim().length !== 0
            && keywords.length === 4
            ) {
                dispatch(getLoading(true))
                try {
                    
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
                dispatch(getSuccess('This collection has been created'))
                setErrorMessage('')           
                navigate('/client-dashboard')
                
            } catch {
                dispatch(getError('There was an error processing your request!'))
            }
            dispatch(getLoading(false))
        }
        
        setErrorMessage('Oups, something is missing!')
    }
    
        return <Button
        colorScheme='blue'
        onClick={submitCollection}
        >Submit</Button>
}

export default memo(SubmitCreateCollection)