import React, {useContext, useState} from 'react'
import { db } from '../services/firebase'
import {memo} from 'react'
import { ClientAuthContext } from '../context/ClientAuthContext'
import { useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import moment from 'moment'
import { Button } from '@chakra-ui/react'
import {getSuccess, getError} from '../redux/slices/asyncEvents'
import { useDispatch } from 'react-redux'
import {Spinner} from '@chakra-ui/react'

const SubmitCreateCollection = ({colName, colDescription, keywords, setErrorMessage}) => {
    const currUser = useContext(ClientAuthContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    
    const submitCollection = async () => {
        const { uid, displayName } = currUser
        if(
            colName.trim().length !== 0
            && colDescription.trim().length !== 0
            && keywords.length === 4
            ) {
                try {
                    setLoading(true)
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
                   
                    console.log('collection added')
                    setLoading(false)
                    setErrorMessage('')
                    navigate('/client-dashboard')
                    dispatch(getSuccess('This collection has been created'))
                } catch {
                    setLoading(false)
                    setErrorMessage('')
                    dispatch(getError('There was an error processing your request!'))
                }                   

        } else {
            setErrorMessage('Oups, it seems like you are missing a field!')
        }
        
    }
    
        return <Button
        colorScheme='blue'
        onClick={submitCollection}
        >{!loading ? 'Submit' : <Spinner color='white' />}</Button>
}

export default SubmitCreateCollection