import React from 'react'
import { auth } from '../services/firebase'

const SubmitClientRegister = ({setErrMessage, firstName, lastName, email, password}) => {
  

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if(firstName && lastName){
      try {
        const userCredentials = await auth
        .createUserWithEmailAndPassword(email, password)

        const usernameRandomId = Math.floor(Math.random() * 90 + 10)

        userCredentials.user.updateProfile({
          displayName: `${firstName}${lastName}${usernameRandomId}`
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