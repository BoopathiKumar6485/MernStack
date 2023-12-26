import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
    
   <Box display={'flex'} flexDirection={'column'} alignItems={'center'}
   marginTop={20} sx={{background:"linear-gradient(176deg, rgba(34,193,195,1) 61%, rgba(58,182,50,0) 93%)",borderRadius:10}}>
    <Typography color={'blue'} variant='h4'>This is a About Page</Typography>
    <p> WE complete a Frontend and Backend to the project as a Mern Stack</p>
   </Box>
    </div>
  )
}

export default About
