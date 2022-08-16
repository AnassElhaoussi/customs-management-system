import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faAt, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { image2 } from '../../assets/images'
import SubmitDeclarantLogin from '../../components/SubmitDeclarantLogin'


const Declarant = () => {

    // Defining useState hooks

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMessage, setErrMessage] = useState('')

  
    // Updating the states on change


    const firstNameChange = (e) => setFirstName(e.target.value)
    const lastNameChange = (e) => setLastName(e.target.value)
    const emailChange = (e) => setEmail(e.target.value)
    const passwordChange = (e) => setPassword(e.target.value)
  
    
  
  
    return (
      <div 
      className="declarant__bg-gradient">
        <div className='relative flex flex-col gap-10 items-center justify-center md:w-1/2 w-full h-screen'>
          <button>
            <Link to='/'>
              <FontAwesomeIcon 
              icon={faCircleLeft} 
              className='text-3xl absolute top-5 left-5 text-blue-600 cursor-pointer' />
            </Link>
          </button>
          
          <h1 
          className='md:text-4xl lg:text-5xl text-3xl font-extrabold text-gray-800'>
            Login as a
            <span className='text-blue-600'> Declarant</span>
          </h1>

          {errMessage && (
            <h3 className='text-red-600 text-xs px-6 w-1/2 text-center'>{errMessage}</h3>
          )}
          <form action="" className='declarant__form'>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <input 
                type="text" 
                placeholder='First Name' 
                value={firstName} 
                onChange={firstNameChange} />
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <input 
                type="text" 
                placeholder='Last Name' 
                value={lastName} 
                onChange={lastNameChange} />
            </div>
            <div>
              <FontAwesomeIcon icon={faAt} />
              <input 
                type="email" 
                placeholder='Email' 
                value={email} 
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

            <SubmitDeclarantLogin 
              setErrMessage={setErrMessage}
              firstName={firstName}
              lastName={lastName}
              email={email}
              password={password}
            />
          </form>
        </div>
        <img 
        src={image2} 
        alt="sea_image" 
        className='md:flex w-1/2 h-screen object-cover hidden ' />
      </div>
    )
  }
  

export default Declarant