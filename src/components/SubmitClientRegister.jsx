import React, { useState } from 'react'
import { auth, db } from '../services/firebase'

const SubmitClientRegister = ({setErrMessage, firstName, lastName, emailValue, password}) => {

  const usernameRandomId = Math.floor(Math.random() * 90 + 10)
  const newDisplayName = `${firstName}${lastName}${usernameRandomId}`
  

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if(firstName && lastName){
      try {
        const userCredentials = await auth
        .createUserWithEmailAndPassword(emailValue, password)
        
        const { uid, email } = userCredentials.user
        await userCredentials.user.updateProfile({
          displayName: newDisplayName
        })
        await db.collection('clients').add({
          displayName: newDisplayName,
          uid,
          email
        })
    
        setErrMessage('')
      } catch (error) {
        setErrMessage(error.message)
      }
    } else {
      setErrMessage('First name or Last name is missing, try again!')
    }
    
  }
  return (
      <button
        className='bg-yellow-400 py-1 mt-2 rounded-full font-semibold hover:border-b-8 hover:border-blue-600 transition-all' 
        onClick={handleFormSubmit}>Register</button>

  )
}

export default SubmitClientRegister