import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faQuestion, faMessage, faComments } from '@fortawesome/free-solid-svg-icons'
import { shakingImage } from '../../../assets/images'

const Sidebar = () => {
    return (
        <div className='home__sidebar'>
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