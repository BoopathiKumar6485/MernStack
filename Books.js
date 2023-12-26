import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from'../components/Book'
import './Book.css'


const SendRequest=async()=>{
    const res=await axios.get("http://localhost:4000/book")
    .catch((err=>console.log(err)))
    const data=res.data;
    return data;

}
const Books = () => {
    const[books,setbooks]=useState()
    useEffect(()=>{
        SendRequest().then((data)=>setbooks(data.books))

    },[])
    console.log(books);
  return (
    <div className='alllist'><li className='card'>
        {books&&books.map((book,i)=>(
            <Book book={book}/>
        ))}
    </li>
      
    </div>
  )
}

export default Books
