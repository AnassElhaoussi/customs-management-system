import React from 'react'
import { declarantAuth } from '../services/declarantAuth/auth'

const SubmitDeclarantLogin = ({setErrMessage, firstName, lastName, email, password}) => {
    // Create user with email and password function
  
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if(firstName && lastName){
      try {
          const userCredentials = await declarantAuth
          .signInWithEmailAndPassword(email, password)
              
          userCredentials
          .user
          .updateProfile({
              displayName: `${firstName}${lastName}${Math.random() * 90 + 10}`
          })
              
          setErrMessage('')
      } catch (error) {
          setErrMessage(error.message)
      }
    } else {
      setErrMessage('First name or Last name are missing, try again!')
    }   
}
  return (
      <button 
          type='submit' 
          className='bg-blue-600 text-white py-1 mt-3 rounded-full font-semibold hover:border-b-8 hover:border-yellow-400 transition-all'
          onClick={handleFormSubmit}>Submit</button>

  )
}

export default SubmitDeclarantLogin