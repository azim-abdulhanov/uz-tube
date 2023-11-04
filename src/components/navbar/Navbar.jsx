import { Stack, Box } from '@mui/material'
import { YouTube } from '../../constants/index'
import { Link } from 'react-router-dom'
import { color } from '../../constants/color'
import { SearchBar } from '..'

const Navbar = () => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      padding={2}
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        background: color.primary,
      }}
    >
      <Link to={'/'}>
        <div className='youtube'>
          <YouTube style={{color: '#ff0000', width: '40px', height: '40px'}}/>
          <h4>Uztube</h4>
        </div>
      </Link>
      <SearchBar/>
      <Box/>
    </Stack>
  )
}

export default Navbar
