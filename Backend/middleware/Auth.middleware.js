const jwt=require('jsonwebtoken')


// finding which user done the request
async function Authmiddleware(req,res, next) {
    const token=req.cookies.token
    if(!token){
res.status(401).json({
    message:"token not found"
})

    }
    try{
const decode= jwt.verify(token,process.env.JWT_Secret)
req.user(decode)
next()
    }catch(err){
return res. status(401).json({
    message:"invalid token"
})
    }
   
    
}

module.exports={Authmiddleware}