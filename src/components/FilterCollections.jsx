import React, {useState, useEffect, memo} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const FilterCollections = ({currUserCollections, setFilteredCollections, searchValue, setSearchValue}) => {

  
  useEffect(() => {
    if(searchValue !== ""){
        const filteredCollectionsArr = currUserCollections.filter(
        ({collectionName}) => 
            collectionName.toLowerCase().includes(searchValue.toLowerCase())
        )
        setFilteredCollections(filteredCollectionsArr)
    } else {
        setFilteredCollections(currUserCollections)
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