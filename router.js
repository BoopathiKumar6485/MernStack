const express=require('express')
const{getallbooks, addbook, getsinglebook, updatebooks, deletebooks}=require('../controller/controller')
const router=express.Router()

router.get("/",getallbooks)//
router.post("/add",addbook)//
router.get("/:id",getsinglebook)//
router.put("/add/:id",updatebooks)//
router.delete("/:id",deletebooks)


module.exports=router