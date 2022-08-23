import React, {useEffect, useState} from 'react'
import {Input, Text, Stack, InputGroup} from '@chakra-ui/react'


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
        <Stack spacing={5}>
          <InputGroup display='flex' flexDirection='column' alignItems='start' gap='1rem'>
              <Text>Keywords : </Text>
              <Input
              placeholder='Space key to submit a keyword'
              value={keyword}
              onChange={e => setKeyword(e.target.value)} 
              />
          </InputGroup>
          <div className='flex gap-2 flex-wrap w-full justify-center'>
            {keywords.map(keyword => (
              <span className='bg-gray-200 py-2 px-8 rounded-full'>{keyword}</span>
            ))}
          </div>
        </Stack>
  )
}

export default Keywords