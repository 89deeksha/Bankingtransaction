const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        unique:[true,"userName already exist"],
        required:true
    },
    Email:{
        type:String,
        unique:[true,"email already exist"],
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const model=mongoose.model("usertransaction",userSchema)

module.exports=model