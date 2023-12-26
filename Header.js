import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography }from'@mui/material'
import{ Link, NavLink } from 'react-router-dom'

const Header = () => {
    const[value,usevalue]=useState()
  return (
    <div><AppBar position='fixed'sx={{background:"linear-gradient(176deg, rgba(34,193,195,1) 61%, rgba(58,182,50,0) 93%)"}}>
        <Toolbar>
          <NavLink to="/" sx={{color:"white"}}><Typography variant='h4' color={'#FF69B4'}>Book Store</Typography></NavLink>
        <Tabs sx={{ml:"auto"}}  textColor='inherit' value={value} onChange={(e,val)=>usevalue(val)}>
        
            <Tab LinkComponent={Link} to="/book" label="Books"/>
            <Tab LinkComponent={Link}  to="/add" label="Add-Book"/>
            <Tab LinkComponent={Link} to="/about" label="About"/>
        </Tabs>
        </Toolbar></AppBar>
      
    </div>
  )
}

export default Header
