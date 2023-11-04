import { useState, useEffect } from 'react'
import { Box, Container, Stack, Typography} from '@mui/material'
import { color } from '../../constants/color'
import { Category, Videos } from '..'
import { ApiService } from '../../service/api.service'

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  const selectedCategoryHandler = (category) => setSelectedCategory(category)

  useEffect(() => {
    const getData = async () => {
      const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
      setVideos(data.items)
    }

    getData()
  }, [selectedCategory])

  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={0} sx={{height: '1200px', marginTop: '15px'}}>
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
            {selectedCategory}
          <span style={{color: color.danger}}>videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Container>
      </Box>
    </Stack>
  )
}

export default Main
