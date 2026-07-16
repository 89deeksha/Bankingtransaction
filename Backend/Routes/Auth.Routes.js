const express=require('express')
const router=express.Router()
const registeruser=require('../Controller/Auth.controller')

/** @route POST /api/auth/register */
/** @description creating new user */



router.post("/register",registeruser.RegisterController)

// login user

router.post("/login",registeruser.LoginController)

// blacklisttoken api

router.get("/logout",registeruser.LogoutUser)






module.exports=router