import React, {useEffect, useState} from 'react'

const Keywords = ({keywords, setKeywords}) => {
  const [keyword, setKeyword] = useState('')

  const addKeyword = () => {
    if(keyword.includes(' ') ) {
      if(keywords.length <= 3 
        && keyword.slice(0, keyword.indexOf(' ')) !== '') 
        
        setKeywords(prevKeywords => 
        [...prevKeywords, keyword.slice(0, keyword.indexOf(' '))])
        setKeyword('')
    }
  }

  useEffect(() => {
    addKeyword()
  }, [keyword])

  return (
        <div className='flex flex-col gap-8 items-center'>
          <form action="" className='flex md:flex-row flex-col items-start pl-4'>
              <label htmlFor="" 
              className='bg-gray-500 py-2 md:rounded-l-md rounded-t-md text-gray-300 md:w-44 w-full'>Keywords</label>
              <input 
              type='text' 
              placeholder='Space key to submit a keyword'
              value={keyword}
              onChange={e => setKeyword(e.target.value)} 
              className='py-2 pl-4 outline-none md:rounded-r-md rounded-b-md w-72'
              id='keywords-input' />
          </form>
          <div className='flex gap-2 flex-wrap w-full justify-center'>
            {keywords.map(keyword => (
              <span className='bg-gray-200 py-2 px-8 rounded-full'>{keyword}</span>
            ))}
          </div>
        </div>
  )
}

export default Keywords