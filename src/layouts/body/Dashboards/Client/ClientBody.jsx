import React, {useEffect, useState, useContext} from 'react'
import { auth, db } from '../../../../services/firebase'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faLock, faTrashCan, faFile } from '@fortawesome/free-solid-svg-icons'
import { ClientAuthContext } from '../../../../context/ClientAuthContext'
import { Avatar, Menu, MenuButton, MenuItem, MenuList, Stack, Skeleton } from '@chakra-ui/react'
import FilterCollections from '../../../../components/FilterCollections'
import {AddIcon} from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { getCollectionsData } from '../../../../redux/slices/collectionsSlice'
import { getLoading, getSuccess, getError } from '../../../../redux/slices/asyncEvents'
import SendCollection from '../../../../components/SendCollection'


const ClientBody = () => {

    const [filteredCollections, setFilteredCollections] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const currUser = useContext(ClientAuthContext)
    const currUserCollections = 
    useSelector((state) => state.collections.data.collectionsData)
    ?.filter(({uid}) => auth.currentUser.uid === uid)
    const loading = useSelector((state) => state.asyncEvents.responses.loading)
    const dispatch = useDispatch()

    useEffect(
        () => {
            const unsubscribe = db.collection('collections')
            .orderBy('createdAt')
            .onSnapshot(snapshotQuery => {
                const collectionsData = snapshotQuery.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }))

                dispatch(getCollectionsData(collectionsData))
                dispatch(getLoading(false))
            })

            return () => unsubscribe
    }, [])

        const deleteCollection = (id, name) => {
            db
            .collection('collections')
            .doc(id)
            .delete()
            .then((res) => {
                dispatch(getSuccess(`Collection with the name ${name} was successfuly deleted!`))
            })
            .catch(err => {
                dispatch(getError('There was an error processing your request!'))
            })
        }


        return (
        <div className='space-y-16 pl-28 py-5 w-full'>
            <FilterCollections 
                currUserCollections={currUserCollections} 
                setFilteredCollections={setFilteredCollections}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <div className='relative space-y-10'>
                <Link to='create-collection'>
                   <FontAwesomeIcon icon={faFolderPlus} className='text-7xl hover:scale-110 transition-all' />
                </Link>
                {loading && (     
                        <Stack display='flex' flexDirection='column' maxWidth='70%'>
                            <Skeleton height='90px' startColor='gray.200' endColor='gray.300' />
                            <Skeleton height='90px' startColor='gray.200' endColor='gray.300' />
                            <Skeleton height='90px' startColor='gray.200' endColor='gray.300' />
                        </Stack>

                )}
                <div className='flex gap-x-4 flex-wrap gap-y-4 pr-5'>
                    {searchValue.length > 0 ? 
                        filteredCollections
                        ?.map(({collectionName, collectionDescription, date, keywords, id}) => {
                            return (
                                <div className='bg-gray-200 p-6 md:w-80 w-full h-fit rounded-md text-gray-800 border-b-8 border-gray-500'>
                                    <div className='flex flex-col gap-8 relative'>
                                        
                                        <div className='flex justify-between items-start flex-wrap-reverse gap-y-3'>
                                            <div className='flex gap-4'>
                                                <Link to={`account/${currUser.displayName}`}>
                                                    <Avatar name={currUser.displayName} className=' bg-blue-300' />
                                                </Link>
                                                <div className=' '>
                                                    <h2>{currUser.displayName}</h2>
                                                    <span className='text-xs text-blue-600'>This collection is now private <FontAwesomeIcon icon={faLock} /></span>
                                                </div>
                                            </div>
                                            <div className='flex gap-1 items-center'>
                                                <FontAwesomeIcon 
                                                icon={faTrashCan}                          
                                                onClick={() => deleteCollection(id, collectionName)}
                                                />
                                                <Menu>
                                                    <MenuButton>
                                                        <FontAwesomeIcon icon={faFile}
                                                        className='ml-4'
                                                        />
                                                    </MenuButton>
                                                    <MenuList>
                                                        <MenuItem icon={<AddIcon />}>
                                                            Add a file
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                            <SendCollection collectionName={collectionName} />
                                        </div>
                                        <div className='space-y-4'>
                                            <h1 className='font-extrabold text-2xl'>{collectionName}</h1>
                                            <div className='flex gap-1 flex-wrap'>
                                                {keywords.map(keyword => {
                                                    return(
                                                        <span className='bg-gray-300 border-b-2 border-gray-500 py-2 px-4 font-semibold rounded-full text-[10px]'>
                                                            {keyword}
                                                        </span>
                                                    )
                                                })}
                                            </div>
                                            <p className='text-base text-gray-700'>{collectionDescription}</p>
                                        </div>
                                        <span className='text-end text-gray-400 text-sm'>Creation : {date}</span>
                                    </div>
                                </div>
                            )
                        })?.reverse()
                        : 
                        currUserCollections
                        ?.map(({collectionName, collectionDescription, date, keywords, id}) => {
                            return (
                                <div className='relative bg-gray-200 p-6 md:w-80 w-full h-fit rounded-md text-gray-800 border-b-8 border-gray-500'>
                                    <div className='flex flex-col gap-8 relative'>
                                        <div className='relative flex justify-between items-start flex-wrap-reverse gap-y-3'>
                                            <div className="flex gap-4">
                                                <Link to={`account/${currUser.displayName}`}>
                                                    <Avatar name={currUser.displayName} />
                                                </Link>
                                                <div>
                                                    <h2>{currUser.displayName}</h2>
                                                    <span className='text-xs text-blue-600'>This collection is now private  <FontAwesomeIcon icon={faLock} /></span>
                                                </div>
                                            </div>
                                            <div className='flex gap-1 items-center'>
                                                <FontAwesomeIcon 
                                                icon={faTrashCan}                          
                                                onClick={() => deleteCollection(id, collectionName)}
                                                />
                                                <Menu>
                                                    <MenuButton>
                                                        <FontAwesomeIcon icon={faFile}
                                                        className='ml-4'
                                                        />
                                                    </MenuButton>
                                                    <MenuList>
                                                        <MenuItem icon={<AddIcon />}>
                                                            Add a file
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                                <SendCollection collectionName={collectionName} />
                                            </div>
                                        </div>
                                        <div className='space-y-4'>
                                            <h1 className='font-extrabold text-2xl'>{collectionName} </h1>
                                            <div className='flex gap-1 flex-wrap'>
                                                {keywords.map(keyword => {
                                                    return(
                                                        <span className='bg-gray-300 border-b-2 border-gray-500 py-2 px-4 font-semibold rounded-full text-[10px]'>
                                                            {keyword}
                                                        </span>
                                                    )
                                                })}
                                            </div>
                                            <p className='text-base text-gray-600'>{collectionDescription}</p>
                                        </div>
                                        <span className='text-end text-gray-400 text-sm'>Creation : {date}</span>
                                    </div>
                                </div>
                            )
                        })?.reverse()
                    } 
                        
                </div>
            </div>
        
        </div>
    )
}   

export default ClientBody