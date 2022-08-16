import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faQuestion, faMessage, faComments } from '@fortawesome/free-solid-svg-icons'
import { shakingImage } from '../../../assets/images'

const Sidebar = () => {
    return (
        <div className='fixed z-10 top-0 bottom-0 left-0 bg-blue-600 flex flex-col items-center justify-evenly h-screen gap-10 text-xl px-6 w-28'>
                <a href="">
                    <FontAwesomeIcon icon={faHouse} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faQuestion} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faComments} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faMessage} />
                </a>
        </div>
    )
}

export default Sidebar