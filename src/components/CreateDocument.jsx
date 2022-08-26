import React from 'react'
import {Flex, Heading, Text, VStack, Divider, InputGroup, Input, Textarea} from '@chakra-ui/react'

const CreateDocument = ({id}) => {
    return (
        <Flex
        direction='column'
        alignItems='center'
        justifyContent='center'
        gap='1rem'
        paddingY='2.5rem' 
        height='100vh' 
        className='bg-gray-100 text-gray-800' >
            <Heading fontFamily='Inter' as='h1' size='xl' fontWeight='800' color='blue.600'>Create a document</Heading>
            <Heading fontFamily='Inter' as='p' size='xs' fontWeight='400' className='border-b-[1px] border-gray-300 pb-4'>Create a document and make it easy for declarants to know your product details</Heading>
            <Flex direction='column' gap='1.5rem' marginTop='1.5rem' >
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
            </Flex>
        </Flex>
    )
}

export default CreateDocument