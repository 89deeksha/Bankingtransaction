const express=require('express')
const router=express.Router()
const registeruser=require('../Controller/Auth.controller')
const Authmidd=require('../middleware/Auth.middleware')

/** @route POST /api/auth/register */
/** @description creating new user */



router.post("/register",registeruser.RegisterController)

// login user

router.post("/login",registeruser.LoginController)

// blacklisttoken api

router.get("/logout",registeruser.LogoutUser)

// get the current loggedin user detail

router.get('/get-me',Authmidd.Authmiddleware,registeruser.GetmeController)






module.exports=router