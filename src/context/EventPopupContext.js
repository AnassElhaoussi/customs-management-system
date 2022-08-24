import React, { useState, useContext, createContext } from 'react'

const EventPopupContext = createContext()

export const useEventPopupContext = () => useContext(EventPopupContext)

export const EventPopupProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [errorStatus, setErrorStatus] = useState('')
    return ( 
        <EventPopupContext.Provider value={{message, setMessage, errorStatus, setErrorStatus}}>
            {children}
        </EventPopupContext.Provider>
    )
}