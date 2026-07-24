import { useContext } from "react";
import { AuthContext } from "../Services/Auth.context";
import {login,register,logout,getme}from '../Services/Auth.api'

export const useAuth=()=>{
    const context=useContext(AuthContext)
        const {first,setFirt,loading,setLoading}=context


        const handleLogin=async({password,Email})=>{
            const data=await login({Email,password})
            setLoading(true)
            setFirt(data.user)
            setLoading(false)
        }

        const handleRegister=async({userName,password,Email})=>{
            const data=await register({userName,Email,password})
            setLoading(true)
            setFirt(data.user)
            setLoading(false)
        }
        const handleLogout=async()=>{
            const data=await logout()
            setLoading(true)
            setFirt(null)
            setLoading(false)
        }
        return {first,loading,handleLogin,handleLogout, handleRegister}
    
}
