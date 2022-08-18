import React from 'react'
import HomeCard from '../../../components/HomeCard'
import { goalImage } from '../../../assets/images'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const HomeBody = () => {
    return (
            <div className='flex md:flex-row flex-col-reverse gap-y-8 items-center'>
                <div className='flex flex-col gap-4 md:w-2/3 w-1/2 relative'>
                    <motion.div initial={{x: -180}} animate={{x: 0}} transition={{duration: 0.8}}>
                        <FontAwesomeIcon icon={faPlane} className='absolute sm:text-4xl md:text-3xl text-2xl text-gray-800 top-0' />
                    </motion.div>
                    <h1 className='sm:text-6xl md:text-8xl text-4xl font-extrabold text-gray-800'>
                    <i><span className='text-blue-600'>Fast</span>Import</i> 
                    </h1>
                    <p className='text-gray-600 md:text-base text-sm font-normal leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='relative'>
                        <div className='absolute flex items-center md:flex-nowrap flex-wrap gap-x-10 gap-y-2 sm:text-base text-xs'>
                            <button className='py-1 px-6 bg-yellow-400  font-bold rounded transition-all hover:border-b-8 hover:border-blue-600'>
                                <Link to='/login-as-a-declarant' className='text-gray-800'>
                                    Sign in as a declarant
                                </Link>
                            </button>
                            <button className='py-1 px-6 bg-yellow-400 font-bold rounded transition-all hover:border-b-8 hover:border-blue-600'>
                                <Link to='/signup-as-a-client' className='text-gray-800'>
                                    Sign up as client
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 w-1/2'>
                    <img src={goalImage} alt='goal_image' className='' />
                </div>
            </div>
    )
} 

export default HomeBody