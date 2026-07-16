const app=require('./App')
const env=require('dotenv').config()
const PORT=process.env.PORT || 4000
const {ConnectiontoDB}=require('./Config/Database')

ConnectiontoDB()


app.listen(PORT,()=>{
    console.log(`server is started at port ${PORT}`)
})
