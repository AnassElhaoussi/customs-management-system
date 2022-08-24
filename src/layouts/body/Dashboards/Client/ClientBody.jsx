import React, {useEffect, useState, useContext} from 'react'
import { auth, db } from '../../../../services/firebase'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faLock, faTrashCan, faFile } from '@fortawesome/free-solid-svg-icons'
import { ClientAuthContext } from '../../../../context/ClientAuthContext'
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import FilterCollections from '../../../../components/FilterCollections'
import { errorImage } from '../../../../assets/images'
import { useEventPopupContext } from '../../../../context/EventPopupContext'
import {AddIcon} from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import { getLoading, getSuccess, getError } from '../../../../redux/slices/collectionsSlice'


const ClientBody = () => {

    const [filteredCollections, setFilteredCollections] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const currUser = useContext(ClientAuthContext)
    const {message, setMessage, errorStatus, setErrorStatus} = useEventPopupContext()
    const loading = useSelector((state) => state.collections.responses.loading)
    const userCollections = useSelector((state) => state.collections.responses.success)
    const error = useSelector((state) => state.collections.responses.error)
    const dispatch = useDispatch()


    useEffect(
        () => {
        const unsubscribe = db
        .collection('collections')
        .orderBy('createdAt')
        .onSnapshot(snapshotQuery => {
            const collectionsData = 
            snapshotQuery
            .docs
            .map
            (doc => ({
                ...doc.data(),
                id: doc.id
            }))

            dispatch(getSuccess(collectionsData))
        })

        return () => unsubscribe

    }, [])

        const deleteCollection = (id, name) => {
            db
            .collection('collections')
            .doc(id)
            .delete()
            .then((res) => {
                setMessage(`Collection with the name ${name} was successfuly deleted!`)
            })
            .catch(err => {
                setErrorStatus('There was an error processing your request!')
            })
        }


        return (
        <div className='space-y-16 pl-28 py-5 w-full'>
            <FilterCollections 
                userCollections={userCollections} 
                setFilteredCollections={setFilteredCollections}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <div className='relative flex flex-col items-start gap-y-10'>
                <Link to='create-collection'>
                   <FontAwesomeIcon icon={faFolderPlus} className='text-7xl hover:scale-110 transition-all' />
                </Link>
                <div className='flex gap-x-4 flex-wrap gap-y-4 pr-5'>
                    {searchValue.length > 1 ? 
                        filteredCollections.length > 0 ?
                        filteredCollections
                        ?.filter(({uid}) => auth.currentUser.uid === uid)
                        ?.map(({collectionName, collectionDescription, date, keywords, id}) => {
                            return (
                                <div className='bg-gray-200 p-6 md:w-80 w-full h-fit rounded-md text-gray-800 border-b-8 border-gray-500'>
                                    <div className='flex flex-col gap-8 relative'>
                                        <div className='flex gap-4 items-center'>
                                            <Avatar name={currUser.displayName} />
                                            <div>
                                                <h2>{currUser.displayName}</h2>
                                                <span className='text-xs text-blue-600'>This collection is now private <FontAwesomeIcon icon={faLock} /></span>
                                            </div>
                                            <div className='absolute -right-3 -top-3 cursor-pointer'>
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
                        })?.reverse() : <div className='w-56'>
                        <img src={errorImage} alt="" />
                    </div>
                        : 
                        userCollections
                        ?.filter(({uid}) => auth.currentUser.uid === uid)
                        ?.map(({collectionName, collectionDescription, date, keywords, id}) => {
                            return (
                                <div className='relative bg-gray-200 p-6 md:w-80 w-full h-fit rounded-md text-gray-800 border-b-8 border-gray-500'>
                                    <div className='flex flex-col gap-8 relative'>
                                        <div className='relative flex gap-4 items-center'>
                                            <Avatar name={currUser.displayName} />
                                            <div>
                                                <h2>{currUser.displayName}</h2>
                                                <span className='text-xs text-blue-600'>This collection is now private  <FontAwesomeIcon icon={faLock} /></span>
                                            </div>
                                            <div className='absolute -right-3 -top-3 cursor-pointer'>
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