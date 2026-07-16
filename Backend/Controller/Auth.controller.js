const userModel=require('../Model/User.model')
const blacklistModel=require('../Model/Blacklistmodel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

/** @Route POST /api/auth */
/** @description --expect username,email, password */
/** @access public */
async function RegisterController(req,res){

const {userName, Email, password}=req.body
if(!userName|| !Email|| !password){
    return res.status(400).json({
        message:"All fields required"
    })
}

// checking user should not exist already
const isUserAlreadyExist=await userModel.findOne({
    $or:[{Email}]
})
if(isUserAlreadyExist){
    return res.json({
        message:"user Already exist"
    })
}
// hash the password while store in db
const hash=await bcrypt.hash(password,10)
// then create new user
const newUser=await new userModel({
    userName,
    Email,
    password:hash
})
await newUser.save();

const token=jwt.sign(
    /** with this data we want to set token */
    {id:newUser._id, username:newUser.userName},
    process.env.JWT_Secret,
    {expiresIn:"1d"}

)
// create cookie with token
res.cookie("token",token)

res.json({
    message:"user created successfully",
    user:{
        id:newUser._id,
        userName:newUser.userName,
        email:newUser.Email
    }
})


}

// login user expecting password, email

async function LoginController(req,res){
    const {password,Email}=req.body
    if(!password || !Email){
        return res.json({
            message:"All fields required"
        })
    }
    const user=await userModel.findOne({Email})
    if(!user){
        res.json({
            message:"user not found"
        })
    }
    const ispasswordValid=await bcrypt.compare(password,user.password)

    if(!ispasswordValid){
        return res.status(400).json({
            message:"password is not valid"
        })
    }
    const token=jwt.sign(
        {id:user._id, username:user.userName},
    process.env.JWT_Secret,
    {expiresIn:"1d"}
    )

    res.cookie("token",token)
    res.status(201).json({
        message:"sigin successfully",
        user:{
            id:user._id,
            userName:user.userName,
            email:user.Email

        }
    })
}

// logout user expecting token
async function LogoutUser(req,res){
    const token=req.cookies.token
    if(token){
        await blacklistModel.create({token})
    }
    res.clearCookie("token")
    res.status(200).json({
        message:"Logout successfully"
    })

}

async function GetmeController(req,res){
    //getting user
const gettinguserdetails=await userModel.findById(req.user.id)
res.status(200).json({
    message:"user details fetched successfully",
    user:{
        id:user._id,
        username:user.userName,

    }
})
}






module.exports={RegisterController, LoginController,LogoutUser, GetmeController}