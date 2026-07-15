const express=require('express')
const app=express()


app.use(express.json())
const authRouter=require('./Routes/Auth.Routes')


app.use("/api/auth",authRouter)



module.exports=app