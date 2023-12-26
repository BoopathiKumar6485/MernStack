const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const bookSchema=new Schema({
    title:{
        require:true,
        type:String
    },
    name:{
        require:true,
        type:String
    },
    image:{
        require:true,
        type:String
    },
    description:{
        require:true,
        type:String
    },
    price:{
        require:true,
        type:Number
    },
})
module.exports=mongoose.model("Book",bookSchema)