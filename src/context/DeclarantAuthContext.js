import React, {useState, useEffect, createContext} from 'react'
import { declarantAuth } from '../services/declarantAuth/auth'
import {useNavigate} from 'react-router-dom'
import Loader from '../components/Loader'

export const DeclarantAuthContext = createContext()

export const DeclarantAuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [decUser, setDecUser] = useState(null)
    const navigateDec = useNavigate()

    useEffect(() => {
        declarantAuth.onAuthStateChanged(user => {
            if(user){
                setLoading(false)
                setDecUser(user)
                navigateDec('/declarant-dashboard')
                
            } else {
                navigateDec('/')
                setLoading(false)
            }
        })
    }, [])

    if(loading) return <Loader />

    return (
        <DeclarantAuthContext.Provider value={decUser}>
            {!loading && children}
        </DeclarantAuthContext.Provider>
    )
}
