import React, { useState } from 'react'
import '../Pages/Authform.scss'

function Register() {
  const[data,setData]=useState({
    userName:"",
    email:"",
    password:""
  })

  

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
  }
  return (
    <main>
      <div className='form-container'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          {/*  */}
          <div className="input-grp">
            <label >Username:</label>
            <input type="text" onChange={handleChange} value={data.userName} id='userName' placeholder='enter userName' name='userName' />
            
          </div>

          <div className="input-grp">
            <label >Email:</label>
            <input type="email" onChange={handleChange} value={data.email} id='email' placeholder='enter email' name='email' />
            
          </div>
          <div className="input-grp">
            <label >Password:</label>
            <input type="password" onChange={handleChange} value={data.password} id='password' placeholder='enter password' name='password' />
            
          </div>
          <button>Register</button>
          <p>{JSON.stringify(data,null,2)}</p>
        </form>
      </div>
   </main>
  )
}

export default Register