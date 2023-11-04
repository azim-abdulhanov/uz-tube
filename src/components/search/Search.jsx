import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/api.service'
import { Box, Container, Typography } from '@mui/material'
import { color } from '../../constants/color'
import { Videos } from '..'

const Search = () => {
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        setVideos(data.items)
      } catch (e) {
        console.log(e)
      }
    }

    getData()
  }, [id])

  return (
    <Box p={0} sx={{height: '90vh',}}>
      <Container maxWidth={'90%'}>
        <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
          Search results for
        <span style={{color: color.danger}}>{id}</span>
          videos
        </Typography>
        <Videos videos={videos}/>
      </Container>
    </Box>
  )
}

export default Search
