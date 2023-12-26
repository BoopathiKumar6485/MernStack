import { Button } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../components/Book.css'

const Book = (props) => {
  const handleDelete=async()=>{
    const res=axios.delete(`http://localhost:4000/book/${_id}`).catch((err=>console.log(err)))
    const data=res.data;
    return data;
  }
  const{_id,title,name,description,image,price}=props.book
  
  return (
    <div className='book'>
      <img src={image}alt={name}/>
      <article><b>Title : {title}</b></article>
      <p><b> Author : </b>{name}</p>
      <article><b>Description : </b>{description}</article>
      <h4>Price: {price}</h4>
      <Button color='warning'variant='contained' sx={{borderRadius:4}} LinkComponent={Link} to={`/book/${_id}`}>Update</Button>
      <Button className='button' color='warning'variant='contained' sx={{borderRadius:4}} onClick={handleDelete} >Delete</Button>
     
      
    </div>
  )
}

export default Book
