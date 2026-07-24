import axios from 'axios'





export async function register({userName, Email, password}){
//instance for api
const api=axios.create('http://localhost:3000',{
    Credential:true
})



    try{
const res=api.post('/api/auth/register',{
        userName,Email,password}

        )
        return res.data
    }
    catch(err){
        console.log("you have an arr")

    }
    
    
}

export async function login({password, Email}){
    try{
const res=api.post('http://localhost:3000/api/auth/login',{
    password, Email
})
      return  res.data




    }
    catch(err){
console.log('error')
    }
}


export async function logout(){
    try{
        const res=api.get('http://localhost:3000/api/auth/logout')
         return res.data
    }
    catch(err){
        console.log('err in logout')
    }
   
}

export async function getme(){
    try{
const res=api.get('http://localhost:3000/api/auth/get-me')
return res.data
    }
    catch(err){
console.log('err in getme')
    }
}