import React, {useRef, memo} from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader, ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Text,
    Flex,
    VStack,
    Heading,
    Avatar} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const SendCollection = ({collectionName}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef(null)
    return (
        <>
            <div ref={btnRef} onClick={onOpen} className='ml-3 cursor-pointer'>
                <FontAwesomeIcon icon={faPaperPlane}  />
            </div>
            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior='inside'
            >
                <ModalOverlay />
                <ModalContent boxShadow='none' backgroundColor='gray.100'>
                    <ModalHeader fontWeight='800'>Send a collection</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' flexDirection='column' gap='1rem' alignItems='start' >
                        <Heading color='blue.600'>Send to a declarant : </Heading>
                        <VStack width='full' backgroundColor='gray.200' padding={4} borderRadius='md'>
                            <Flex alignItems='center' justifyContent='space-between' width='full'>
                                <Flex alignItems='center' gap='3' backgroundColor='gray.300' paddingX={4} paddingY={2} borderRadius='full'>
                                    <Avatar name='KhalidElhaoussi11' />
                                    <Text>KhalidELhaoussi11</Text>
                                    <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                                </Flex>
                                <Button colorScheme='blue'>Send</Button>
                            </Flex>
                            <Flex alignItems='center' justifyContent='space-between' width='full'>
                                <Flex alignItems='center' gap='3' backgroundColor='gray.300' paddingX={4} paddingY={2} borderRadius='full'>
                                    <Avatar name='KhalidElhaoussi11' />
                                    <Text>KhalidELhaoussi11</Text>
                                    <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                                </Flex>
                                <Button colorScheme='blue'>Send</Button>
                            </Flex>
                            <Flex alignItems='center' justifyContent='space-between' width='full'>
                                <Flex alignItems='center' gap='3' backgroundColor='gray.300' paddingX={4} paddingY={2} borderRadius='full'>
                                    <Avatar name='KhalidElhaoussi11' />
                                    <Text>KhalidELhaoussi11</Text>
                                    <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                                </Flex>
                                <Button colorScheme='blue'>Send</Button>
                            </Flex>
                            <Flex alignItems='center' justifyContent='space-between' width='full'>
                                <Flex alignItems='center' gap='3' backgroundColor='gray.300' paddingX={4} paddingY={2} borderRadius='full'>
                                    <Avatar name='KhalidElhaoussi11' />
                                    <Text>KhalidELhaoussi11</Text>
                                    <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                                </Flex>
                                <Button colorScheme='blue'>Send</Button>
                            </Flex>
                            <Flex alignItems='center' justifyContent='space-between' width='full'>
                                <Flex alignItems='center' gap='3' backgroundColor='gray.300' paddingX={4} paddingY={2} borderRadius='full'>
                                    <Avatar name='KhalidElhaoussi11' />
                                    <Text>KhalidELhaoussi11</Text>
                                    <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                                </Flex>
                                <Button colorScheme='blue'>Send</Button>
                            </Flex>
                            <Flex alignItems='center' justifyContent='space-between' width='full'>
                                <Flex alignItems='center' gap='3' backgroundColor='gray.300' paddingX={4} paddingY={2} borderRadius='full'>
                                    <Avatar name='KhalidElhaoussi11' />
                                    <Text>KhalidELhaoussi11</Text>
                                    <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600' />
                                </Flex>
                                <Button colorScheme='blue'>Send</Button>
                            </Flex>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default memo(SendCollection)