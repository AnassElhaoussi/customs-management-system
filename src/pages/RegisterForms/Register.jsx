import React, {useState} from 'react'
import { image1 } from '../../assets/images'
import { facebookIcon, googleIcon } from '../../assets/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAt, faLock, faCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import { auth } from '../../services/firebase'
import SubmitClientRegister from '../../components/SubmitClientRegister'


const Register = () => {

  // Defining useState hooks

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [errMessage, setErrMessage] = useState('')


  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const facebookProvider = new firebase.auth.FacebookAuthProvider()

  // Facebook and Google login functions

  const googleLogin = () => auth.signInWithPopup(googleProvider)

  const facebookLogin = () => auth.signInWithPopup(facebookProvider)

  // Updating the states on change

  const firstNameChange = (e) => setFirstName(e.target.value)
  const lastNameChange = (e) => setLastName(e.target.value)
  const emailChange = (e) => setEmailValue(e.target.value)
  const passwordChange = (e) => setPassword(e.target.value)

  return (
    <div 
    className="client__bg-gradient">
      <div className='relative flex flex-col gap-6 items-center justify-center md:w-1/2 w-full h-screen'>
        <button>
          <Link to='/'>
            <FontAwesomeIcon 
            icon={faCircleLeft} 
            className='text-3xl absolute top-5 left-5 text-yellow-400 cursor-pointer' />
          </Link>
        </button>
        
        <h1 
        className='md:text-4xl lg:text-5xl text-3xl font-extrabold text-gray-800'>
          Signup as a 
          <span className='text-blue-600'> Client</span>
        </h1>
        <div className='flex gap-4 items-center'>
          <img 
          src={googleIcon} 
          alt='google_icon' 
          className='lg:w-16 w-12 hover:scale-110 transition all cursor-pointer' 
          onClick={googleLogin} />
          <img 
          src={facebookIcon} 
          alt='facebook_icon' 
          className='lg:w-16 w-12  hover:scale-110 transition-all cursor-pointer' 
          onClick={facebookLogin} />
        </div>
        <h1 className='lg:text-base text-sm text-gray-800'>Don't have an account ? Create one.</h1>
        {errMessage && (
          <h3 className='text-red-600 text-xs px-6 text-center'>{errMessage}</h3>
        )}
        <form action="" className='client__form'>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <input 
            type="text" 
            placeholder='First name' 
            value={firstName} 
            onChange={firstNameChange} />
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <input 
            type="text" 
            placeholder='Last name' 
            value={lastName} 
            onChange={lastNameChange} />
          </div>
          <div>
            <FontAwesomeIcon icon={faAt} />
            <input 
            type="email" 
            placeholder='Email' 
            value={emailValue} 
            onChange={emailChange} />
          </div>
          <div>
            <FontAwesomeIcon icon={faLock} />
            <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={passwordChange} />
          </div>

          <SubmitClientRegister 
            setErrMessage={setErrMessage}
            firstName={firstName}
            lastName={lastName}
            emailValue={emailValue}
            password={password} />
        </form>
      </div>
      <img 
      src={image1} 
      alt="sea_image" 
      className='md:flex hidden w-1/2 h-screen object-cover' />
    </div>
  )
}

export default Register