import React, { useState } from 'react'
import '../Pages/Authform.scss'
import {useAuth} from '../hooks/useAuth'
function Login() {
  const[data,setData]=useState({
    email:"",
    password:""
  })
  const {loading, handlelogin}=useAuth()

  

  const handleChange=(e)=>{
    const {name,value}=e.target
    console.log(name,value)
setData((prev)=>({
  ...prev,
[name]:value
})
  
)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    handlelogin({email, password})
  }
  if(loading){
    return <main><h1>loading...</h1></main>
  }
  return (
    <main>
      <div className='form-container'>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
          {/*  */}
          <div className="input-grp">
            <label >Email:</label>
            <input type="email" onChange={handleChange} value={data.email} id='email' placeholder='enter email' name='email' />
            
          </div>
          <div className="input-grp">
            <label >Password:</label>
            <input type="password" onChange={handleChange} value={data.password} id='password' placeholder='enter password' name='password' />
            
          </div>
          <button>Login</button>
          <p>{JSON.stringify(data,null,2)}</p>
        </form>
      </div>
   </main>
  )
}

export default Login