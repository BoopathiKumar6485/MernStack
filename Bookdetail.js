import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate }from 'react-router-dom'
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'



const Bookdetail = () => {
  const history=useNavigate()
  const id=useParams().id;
  

 
  useEffect(()=>{
    const fetchHandler=async()=>{
     await axios.get(`http://localhost:4000/book/${id}`).catch((err=>console.log(err)))
     .then((res)=>console.log(res.data))
       }
    
    fetchHandler()
  },[id])
  const[value,setInputs]=useState({
    title:"",name:"",description:"",image:"",price:""
  })
  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))}
    const sendRequest=async()=>{
      const res=await axios.put(`http://localhost:4000/book/add/${id}`,{
        title:String(value.title),
        name:String(value.name),
        description:String(value.description),
        image:String(value.image),
        price:String(value.price)
  
      }).catch(err=>
        console.log(err))
  
        const data=res.data;
        return data;
      }
  

  const handleSubmit=(e)=>{
    e.preventDefault()
    sendRequest().then(()=>history("/book"))
    .then(()=>history("/book"))
    console.log(value);
}
  
  return (
    <div> <form onSubmit={handleSubmit}>
    <Box display={'flex'} flexDirection={'column'}
    justifyContent={'center'} alignContent={'center'} maxWidth={400} marginLeft={'auto'}
    marginRight={'auto'} boxShadow={"5px 5px 20px #ccc"} mt={4} mb={4} borderRadius={5}>
      <Typography variant='h4' marginLeft={'auto'} marginRight={'auto'}
      color={'#FF69B4'}>Update Book</Typography>
      
      <FormLabel>Title</FormLabel>
      <TextField value={value.title} onChange={handleChange} name='title' margin='normal' variant='outlined'/>
      <FormLabel>Name</FormLabel>
      <TextField value={value.name} onChange={handleChange} name='name' margin='normal'/>
      <FormLabel>Description</FormLabel>
      <TextField  value={value.description} onChange={handleChange}name='description' margin='normal'/>
      <FormLabel>Image</FormLabel>
      <TextField value={value.image} onChange={handleChange} name='image' margin='normal'/>
      <FormLabel>Price</FormLabel>
      <TextField value={value.price} onChange={handleChange} name='price' margin='normal'/>
      <Button type="submit"variant='contained' color='warning'>Update Book</Button>
     
    </Box>
  </form>
      
    </div>
  )
}

export default Bookdetail
