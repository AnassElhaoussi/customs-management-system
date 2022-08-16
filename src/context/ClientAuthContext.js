import React, {useState, useEffect, useContext, createContext} from 'react'
import { auth } from '../services/firebase'
import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'


export const ClientAuthContext = createContext()

export const ClientAuthProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [currUser, setCurrUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                navigate('/client-dashboard')
                setLoading(false)
                setCurrUser(user)
            } else {
                navigate('/')
                setLoading(false)
                setCurrUser(user)
            }
        })
    }, [])

    if(loading) return <Loader />

    return (
        <ClientAuthContext.Provider value={currUser}>
            {!loading && children}
        </ClientAuthContext.Provider>
    )
}
