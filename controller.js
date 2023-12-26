const Book=require("../Model/model")
const express=require('express')

const getallbooks=async(req,res,next)=>{
    let books;
    try{
        books=await Book.find()
    }catch(err){
        console.log(err)}
    if(!books){
        return res.status(404).json({message:"does not find a book"})
    }
    return res.status(200).json({books})
}
const addbook=async(req,res,next)=>{
    const{title,name,image,description,price}=req.body
    let book;
    
    try{
        book=new Book({title,name,image,description,price})
       await book.save()
        
    }catch(err){
        console.log(err)
    }
    if(!book){
        return res.status(400).json({message:"does not add a book"})
    }
    return res.status(200).json({book})
}
const getsinglebook=async(req,res,next)=>{
    const id=req.params.id;
    let books
    try{
        books=await Book.findById(id)
    }
    catch(err){
        console.log(err)
    }
    if(!books){
        return res.status(404).json({message:"does not get asigle books"})
    }
    return res.status(200).json({books})
}
const updatebooks=async(req,res,next)=>{
    let books;
    const{title,name,image,description,price}=req.body
    const id=req.params.id;
    try{
        books=await Book.findByIdAndUpdate(id,{title,name,image,description,price})
    }catch(err){
        console.log(err)
    }
    if(!books){
        return res.status(404).json({message:"does not update a books"})
    }
    return res.status(200).json({books})
}
const deletebooks=async(req,res,next)=>{
    let books;
    const id=req.params.id;
    try{
        books=await Book.findByIdAndDelete(id)
    }
    catch(err){
        console.log(err)

    }
    if(!books){
        return res.status(404).json({message:"does not delete"})
    }
    return res.status(200).json({books,mesage:"Sucessfully deleted"})
}


module.exports={getallbooks,addbook,getsinglebook,updatebooks,deletebooks}