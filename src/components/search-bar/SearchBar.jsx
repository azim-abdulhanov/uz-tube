import { Paper, IconButton } from '@mui/material'
import { color } from '../../constants/color'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    if (value) {
      navigate(`/search/${value}`)
      setValue('')
    }
  }

  return (
    <Paper
      component={'form'}
      onSubmit={submitHandler}
      sx={{
        border: `1px solid ${color.secondary}`,
        pl: 2,
        boxShadow: 'none',
        mr: 5,
      }}
    >
      <input
        type="text"
        placeholder='Search...'
        className='search-bar'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <IconButton>
        <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar
