import React, {useContext} from 'react'
import { Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ClientAuthContext } from '../../../../context/ClientAuthContext'

const ProfileSidebar = () => {

    const currUser = useContext(ClientAuthContext)

    return (
        
        <div className='fixed flex justify-center shadow-lg px-2 py-5 h-screen w-20'>
            
            <Link to={`account/${currUser.displayName}`}>
                <Avatar 
                name={currUser.displayName} 
                src='https://bit.ly/broken-link' 
                className='cursor-pointer hover:scale-110 transition-all'
                />
            </Link>
        </div>
    )
}

export default ProfileSidebar