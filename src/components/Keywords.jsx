import React, {useEffect, useState} from 'react'

const Keywords = ({keywords, setKeywords}) => {
  const [keyword, setKeyword] = useState('')

  const addKeyword = () => {
    if(keyword.includes(' ') ) {
      if(keywords.length <= 3 && keyword.slice(0, keyword.indexOf(' ')) !== '') 
        setKeywords(prevKeywords => 
        [...prevKeywords, keyword.slice(0, keyword.indexOf(' '))])
        setKeyword('')
    }
  }

  useEffect(() => {
    addKeyword()
  }, [keyword])

  return (
        <div className='flex flex-col gap-8 items-center w-full'>
          <form action="" className='flex items-center pl-4 rounded-md'>
              <label htmlFor="" 
              className='bg-gray-500 py-2 rounded-l-md text-gray-300 w-44'>Keywords</label>
              <input 
              type='text' 
              placeholder='Space key to submit a keyword'
              value={keyword}
              onChange={e => setKeyword(e.target.value)} 
              className='py-2 pl-4 outline-none rounded-r-md w-72'
              id='keywords-input' />
          </form>
          <div className='flex gap-2 text-center'>
            {keywords.map(keyword => (
              <span className='bg-gray-200 py-2 px-8 rounded-full'>{keyword}</span>
            ))}
          </div>
        </div>
  )
}

export default Keywords