import React, { useState, useCallback, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faPlane } from '@fortawesome/free-solid-svg-icons'
import SubmitCreateCollection from './SubmitCreateCollection'
import Keywords from './Keywords'
import { Input, Text, Textarea, Stack, InputGroup, Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import {motion} from 'framer-motion'


const CreateCollection = () => {
    const [collectionForm, setCollectionForm] = useState(false)
    const [colName, setColName] = useState('')
    const [colDescription, setColDescription] = useState('')
    const [keywords, setKeywords] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const loading = useSelector((state) => state.asyncEvents.responses.loading)

    const colNameChange = (e) => setColName(e.target.value)

    const colDescriptionChange = (e) => setColDescription(e.target.value)

    return (
        <div className='bg-gray-100 h-screen text-gray-800 py-10'>
                <div className='flex flex-col items-center text-center space-y-8'>
                    <div className='space-y-2 pb-5 border-b-[1px] border-gray-300'>
                        <h1 className='md:text-4xl text-2xl font-extrabold'>Create a Collection</h1>
                        <p className='md:text-sm text-xs'>Describe your product to the declarants by creating a collection.</p>
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
                        <Stack spacing={5} minWidth='40%'>
                            {errorMessage && (
                                <span className='text-red-600'>{errorMessage}</span>
                            )}
                            {loading && (
                                <motion.div animate={{rotate: [0, 360, 360, 0]}} transition={{duration: 0.9, repeat: Infinity}}>
                                    <FontAwesomeIcon icon={faPlane} className='text-xl' />
                                </motion.div>
                                
                            )}
                            <InputGroup display='flex' flexDirection='column' alignItems='start' gap='1rem'>
                                <Text>Collection name : </Text>
                                <Input
                                placeholder='Enter your collection name'
                                value={colName}
                                onChange={colNameChange} />
                            </InputGroup>
                            <InputGroup display='flex' flexDirection='column' alignItems='start' gap='1rem'>
                                <Text>Description : </Text>
                                <Textarea
                                name="" id="" 
                                cols="30" rows="1" 
                                placeholder='Describe your product' 
                                className='py-2 w-72 pl-4 outline-none md:rounded-r-md rounded-b-md'
                                value={colDescription}
                                onChange={colDescriptionChange}
                                
                                ></Textarea>
                            </InputGroup>
                           <Keywords
                            keywords={keywords} 
                            setKeywords={setKeywords} />
                            <Stack direction='row' display='flex' justifyContent='space-between'>
                                <SubmitCreateCollection 
                                    colName={colName}
                                    colDescription={colDescription}
                                    keywords={keywords}
                                    setKeywords={setKeywords}
                                    setErrorMessage={setErrorMessage}
                                />
                                <Button
                                colorScheme='blue' variant='solid'
                                onClick={() => setCollectionForm(false)}>Cancel</Button>
                            </Stack>
                        </Stack>
                    )}
                </div>
        </div>
    )
}

export default CreateCollection