import React from 'react'
import { Box, Button, Typography }from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div> 
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}
    >
      <Button LinkComponent={Link} to="/book" sx={{mt:10,background:"blue", color:"white"}}> 
        <Typography variant='h3'>View All Product</Typography>
      </Button>
    </Box>
    </div>
  )
}

export default Home
