import React from 'react'
import { declarantAuth } from '../../services/declarantAuth/auth'

const DeclarantDashboard = () => {
    const signout = () => {
        declarantAuth.signOut()
    }
    return (
        <div onClick={signout}>signout</div>
    )
}

export default DeclarantDashboard