import { createContext, useState } from "react";


export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    //there is no userLoggedin
const [first, setfirst] = useState(null)
//there is no loading
const [loading, setloading] = useState(false)
return (
    <AuthContext.Provider value={{first,setfirst,loading,setloading}}>{children}</AuthContext.Provider>
)
}


