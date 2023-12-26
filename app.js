const express=require('express')
const mongoose=require('mongoose')
const router=require('./Router/router')
const cors =require('cors')

const app=express();

//middle were
app.use(cors())
app.use(express.json())
app.use("/book",router)


   
mongoose.connect("mongodb+srv://boopathih8:9894341061Aa%402@cluster0.vwpusmo.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(4000,()=>{
        console.log("Server Started and MOngoDb Connected")
    })
})
