import React from 'react'

const HomeCard = () => {
    return (
        <div className='body__card'>
            <h1 className='card__title'>Assistance Numerique Automatisée Suivie</h1>
            <div className='card__buttons'>
                <button>Connecter-vous en tant que déclarant</button>
                <button>Inscrivez-vous en tant que client</button>
            </div>
            <div className='card__circle'></div>
        </div>
    )
}

export default HomeCard