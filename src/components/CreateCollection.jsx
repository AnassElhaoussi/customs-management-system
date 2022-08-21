import React, { useState, useCallback, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import SubmitCreateCollection from './SubmitCreateCollection'
import Keywords from './Keywords'
import { ClientAuthContext } from '../context/ClientAuthContext'
import Loader from './Loader'


const CreateCollection = () => {
    const currUser = useContext(ClientAuthContext)
    const [collectionForm, setCollectionForm] = useState(false)
    const [colName, setColName] = useState('')
    const [colDescription, setColDescription] = useState('')
    const [keywords, setKeywords] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const colNameChange = (e) => setColName(e.target.value)

    const colDescriptionChange = (e) => setColDescription(e.target.value)

    return (
        <div className='bg-gray-100 h-screen text-gray-800 py-10'>
                <div className='flex flex-col items-center text-center space-y-8'>
                    <div className='space-y-2 pb-5 border-b-[1px] border-gray-300'>
                        <h1 className='text-4xl font-extrabold'>Create a Collection</h1>
                        <p className='text-sm'>Describe your product to the declarants by creating a collection.</p>
                    </div>
                    {!collectionForm ? (
                        <button className='bg-gray-200 py-3 px-8 rounded-md hover:border-b-8 border-gray-500 transition-all'
                        onClick={() => setCollectionForm(true)}
                        >
                            <FontAwesomeIcon 
                            icon={faCirclePlus} 
                            className='text-6xl cursor-pointer' />
                        </button>
                    ) : (
                        <div className='flex flex-col items-center gap-6'>
                            {errorMessage && (
                                <span className='text-red-600'>{errorMessage}</span>
                            )}
                            
                            <form action="" 
                            className='flex items-center pl-4 rounded-md'>
                                <h3 className='text-gray-300 bg-gray-500 py-2 w-44 rounded-l-md'>Collection name</h3>
                                <input 
                                type="text" 
                                placeholder='Enter your collection name' 
                                className='py-2 w-72 pl-4 outline-none rounded-r-md'
                                value={colName}
                                onChange={colNameChange} />
                            </form>
                            <form action="" className='flex items-start pl-4 rounded-md'>
                                <h3 className='bg-gray-500 py-2 rounded-l-md text-gray-300 w-44'>Description</h3>
                                <textarea 
                                name="" id="" 
                                cols="30" rows="1" 
                                placeholder='Describe your product' 
                                className='py-2 w-72 pl-4 outline-none rounded-r-md '
                                value={colDescription}
                                onChange={colDescriptionChange}
                                ></textarea>
                            </form>
                           <Keywords
                            keywords={keywords} 
                            setKeywords={setKeywords} />
                            <div className='flex gap-44 text-gray-800 font-bold'>
                                <SubmitCreateCollection 
                                    colName={colName}
                                    colDescription={colDescription}
                                    keywords={keywords}
                                    setKeywords={setKeywords}
                                    setErrorMessage={setErrorMessage}
                                />
                                <button 
                                className='bg-yellow-500 py-2 px-8 rounded-md hover:border-b-4 border-gray-600 shadow-md'
                                onClick={() => setCollectionForm(false)}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>
        </div>
    )
}

export default CreateCollection