import React, {useState, useEffect} from 'react'
import {Flex, Heading, Text, VStack, Divider, InputGroup, Input, Textarea, Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const CreateDocument = ({id}) => {
    useEffect(() => {

    }, [])


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
            width='50%'
            className='bg-gray-100 text-gray-800' >
                <Heading fontFamily='Inter' as='h1' size='xl' fontWeight='800' color='blue.600'>Create a document</Heading>
                <Heading fontFamily='Inter' as='p' size='xs' fontWeight='400' className='border-b-[1px] border-gray-300 pb-4 text-gray-400'>Create a document and make it easy for declarants to know your product details</Heading>
                <Flex direction='column' gap='1.5rem' marginTop='1.5rem' minWidth='40%'>
                    <InputGroup display='flex' flexDirection='column' alignItems='start' gap='0.5rem'>
                        <Text>Collection name : </Text>
                        <Input
                            placeholder='Enter your collection name'
                            />
                    </InputGroup>
                    <InputGroup display='flex' flexDirection='column' alignItems='start' gap='0.5rem'>
                        <Text>Collection name : </Text>
                        <Input
                            placeholder='Enter your collection name'
                            />
                    </InputGroup>
                    <InputGroup display='flex' flexDirection='column' alignItems='start' gap='0.5rem'>
                        <Text>Collection name : </Text>
                        <Input
                            placeholder='Enter your collection name'
                            />
                    </InputGroup>
                    <InputGroup display='flex' flexDirection='column' alignItems='start' gap='0.5rem'>
                        <Text>Collection name : </Text>
                        <Input
                            placeholder='Enter your collection name'
                            />
                    </InputGroup>
                    <InputGroup display='flex' flexDirection='column' alignItems='start' gap='0.5rem'>
                        <Text>Collection name : </Text>
                        <Input
                            placeholder='Enter your collection name'
                            />
                    </InputGroup>
                    <InputGroup display='flex' flexDirection='column' alignItems='start' gap='0.5rem'>
                        <Text>Collection name : </Text>
                        <Input
                            placeholder='Enter your collection name'
                            />
                    </InputGroup>
                    <InputGroup display='flex' flexDirection='column' alignItems='start' gap='0.5rem'>
                        <Text>Description : </Text>
                        <Textarea
                                name="" id="" 
                                cols="30" rows="1" 
                                placeholder='Describe your product' 
                                className='py-2 w-72 pl-4 outline-none md:rounded-r-md rounded-b-md'
                
                        ></Textarea>
                    </InputGroup>
                    <Flex justifyContent='space-between'>
                        <Button colorScheme='blue'>Submit</Button>
                        <Link to='/client-dashboard'>
                            <Button colorScheme='blue'>Cancel</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <Flex direction='column' 
            postion='relative' 
            width='50%' 
            height='100vh' 
            alignItems='center' 
            justifyContent='center' >
                <Flex position='fixed'>
                    <Heading>Heading 1</Heading>
                    <Heading>Heading 2</Heading>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CreateDocument