import React, {useState, useEffect} from 'react'
import {Flex, Heading, Text, VStack, Divider, InputGroup, Input, Textarea, Button, Stack, Spinner} from '@chakra-ui/react'
import {Link, useNavigate} from 'react-router-dom'
import {db} from '../services/firebase'
import {useSelector, useDispatch} from 'react-redux'
import { getDocumentsData } from '../redux/slices/collectionsSlice'
import {getLoading, getSuccess, getError} from '../redux/slices/asyncEvents'



const CreateDocument = ({id}) => {
    const [firstValue, setFirstValue] = useState('')
    const [secondValue, setSecondValue] = useState('')
    const [thirdValue, setThirdValue] = useState('')
    const documentsData = useSelector((state) => state.collections.data.documentsData)
    const loading = useSelector((state) => state.asyncEvents.responses.loading)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        db.collection('collections')
        .doc(id)
        .collection('documents')
        .onSnapshot(snapshotQuery => {
            const documents = snapshotQuery.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))

            dispatch(getDocumentsData(documents))
        })
    }, [])

    const addDocument = async () => {
        if(firstValue.trim().length !== 0 
        && secondValue.trim().length !== 0 
        && thirdValue.trim().length !== 0){

            try {
                dispatch(getLoading(true))
                await db.collection('collections')
                .doc(id)
                .collection('documents')
                .add({
                    firstValue,
                    secondValue,
                    thirdValue
                })
    
                dispatch(getLoading(false))
                dispatch(getSuccess('This document was successfuly created'))
                navigate('/client-dashboard')
            } catch {
                dispatch(getLoading(false))
                dispatch(getError('There was an error processing your request!'))
            }
        }
    }


    return (
        <Flex>
            <Flex
            direction='column'
            alignItems='center'
            justifyContent='center'
            gap='1rem'
            paddingY='2.5rem'
            paddingX='4rem'
            textAlign='center'
            className='md:w-1/2 w-full bg-gray-100 text-gray-800' >
                <Heading fontFamily='Inter' as='h1' size='xl' fontWeight='800' color='blue.600'>Create a document</Heading>
                <Heading fontFamily='Inter' as='p' size='xs' fontWeight='400' className='border-b-[1px] border-gray-300 pb-4 text-gray-400'>Create a document and make it easy for declarants to know your product details</Heading>
                <Flex direction='column' gap='1.5rem' marginTop='1.5rem' minWidth='40%'>
                    <InputGroup display='flex' flexDirection='column' alignItems='start' gap='0.5rem'>
                        <Text>Collection name : </Text>
                        <Input
                            placeholder='Enter your collection name'
                            value={firstValue}
                            onChange={e => setFirstValue(e.target.value)}
                            />

                    </InputGroup>
                    <InputGroup display='flex' flexDirection='column' alignItems='start' gap='0.5rem'>
                        <Text>Collection name : </Text>
                        <Input
                            placeholder='Enter your collection name'
                            value={secondValue}
                            onChange={e => setSecondValue(e.target.value)}
                            />
                    </InputGroup>
                    <InputGroup display='flex' flexDirection='column' alignItems='start' gap='0.5rem'>
                        <Text>Description : </Text>
                        <Textarea
                                name="" id="" 
                                cols="30" rows="1" 
                                placeholder='Describe your product' 
                                className='py-2 w-72 pl-4 outline-none md:rounded-r-md rounded-b-md'
                                value={thirdValue}
                                onChange={e => setThirdValue(e.target.value)}
                        ></Textarea>
                    </InputGroup>
                    <Flex justifyContent='space-between'>
                        <Button colorScheme='blue' onClick={addDocument}>{!loading ? 'Submit' : <Spinner color='white' />} </Button>
                        <Link to='/client-dashboard'>
                            <Button colorScheme='blue'>Cancel</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <div className='relative md:flex hidden items-center justify-center h-screen text-center w-1/2'>
                <Flex position='fixed'>
                    <Heading fontFamily='Inter' fontWeight='800'>Current documents : </Heading>
                </Flex>
            </div>
        </Flex>
    )
}

export default CreateDocument