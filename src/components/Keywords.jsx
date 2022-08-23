import React, {useEffect, useState} from 'react'
import {
  Input, 
  Text, 
  Stack, 
  InputGroup, 
  HStack, 
  Tag, 
  TagLabel, 
  TagCloseButton
} from '@chakra-ui/react'



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

  const removeKeyword = (index) => {
    const filteredKeywordsArr = keywords.filter((keyword, id) => id !== index)
    setKeywords(filteredKeywordsArr)
  }

  useEffect(() => {
    addKeyword()
  }, [keyword])

  return (
        <Stack spacing={5}>
          <InputGroup display='flex' flexDirection='column' alignItems='start' gap='1rem'>
              <Text>Keywords : </Text>
              <Input
              placeholder='4 keywords are required (SPACE KEY TO SUBMIT)'
              value={keyword}
              onChange={e => setKeyword(e.target.value)} 
              />
          </InputGroup>
          <HStack spacing={4}>
            {keywords.map((keyword, index) => (
             <Tag
              size='lg'
              borderRadius='full'
              variant='solid'
              backgroundColor='gray.300'
              borderBottomColor='gray.500'
              borderBottomWidth='2px'
              textColor='black'
             >
                <TagLabel>{keyword}</TagLabel>
                <TagCloseButton
                  onClick={() => removeKeyword(index)}
                 />
              </Tag>
            ))}
          </HStack>
        </Stack>
  )
}

export default Keywords