import { Stack } from '@mui/material'
import { category } from '../../constants'
import { color } from '../../constants/color'

const Category = ({selectedCategoryHandler, selectedCategory}) => {
  return (
    <Stack direction={'row'} sx={{overflowX: 'scroll', cursor: 'pointer'}}>
      {category.map(item => (
        <button
          key={item.name}
          className='category-btn'
          style={{
            borderRadius: '0',
            background: item.name === selectedCategory && color.danger,
            color: item.name === selectedCategory && '#fff',
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCategory ? '#fff' :
              color.danger, marginRight: '15px'
            }}
          >
          {item.icon}
          </span>
          <span style={{opacity: '1'}}>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Category
