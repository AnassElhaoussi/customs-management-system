import React, {useState, useEffect, memo} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const FilterCollections = ({userCollections, setUserCollections, setFilteredCollections, searchValue, setSearchValue}) => {

console.log('filter re-rendered')
  
  useEffect(() => {
    if(searchValue !== ""){
        const filteredCollectionsArr = userCollections.filter(
        ({collectionName}) => 
            collectionName.toLowerCase().includes(searchValue.toLowerCase())
        )
        setFilteredCollections(filteredCollectionsArr)
    } else {
        setFilteredCollections(userCollections)
    }
  }, [searchValue])
  

  return <div className='relative'>
    <input 
        type="text"
        placeholder='Filter by collection name..'
        className='py-2 px-10 outline-none rounded-full max-w-full'
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
    />
  </div>
    

}

export default FilterCollections