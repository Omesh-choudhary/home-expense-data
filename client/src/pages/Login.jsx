import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'

function Login() {

  const navigate = useNavigate()

  const [user, setuser] = useState({
    email:"",
    password:""
  })

  const {StoreTokenInLs}=useAuth()

  const handleChange = (e)=>{
 const name = e.target.name;
 const value = e.target.value;
 setuser({
  ...user,
  [name]:value
 })
  }

  const handleSubmit = async(e)=>{
  e.preventDefault()
 console.log(user);
 
  
  try {
    const response = await fetch("http://localhost:5000/api/auth/login",{
      method:"POST",
      headers :{
        "Content-Type":"application/json",
        
        },
      body:JSON.stringify(user)
     });

    
     if(response.ok){
      setuser({ email:"", password:""});
      let res_data = await response.json()
      StoreTokenInLs(res_data.token);
     
      navigate("/")
   
     
     
     }
     else{
      alert("invalid credentials")
     }
   } catch (error) {
     
    console.log("register",error);
    
   }


  
  }
  return (
    <main className='h-full '>
    <div className="registration-div">
      <div className="registration-container h-[100vh] w-full absolute top-0 z-20 flex justify-center items-center "  >
        <img className='h-full w-[100%] object-cover' src="background.jpg" alt="" />
        <div className="register-box bg-white/15 border-white border-2 rounded-xl backdrop-blur-sm pb-2 min-h-[30vh] w-[35vw] absolute z-10  flex flex-col items-center ">
        <h1 className='text-3xl text-center text-white mb-6'>Login</h1>
        <div className="google flex gap-2 text-center w-[50%] rounded-full px-4 py-2 font-semibold bg-white my-4">
          <img src="google.png" alt="" />
          <h4>Sign In with google</h4>
        </div>
        <div className="facebook flex gap-2 w-[50%] rounded-full px-4 py-2 font-semibold bg-white">
          <img src="facebook.png" alt="" />
          <h4>Sign In with facebook</h4>
        </div>
        <div className="or flex flex-row  w-full items-center">
          <div className='h-[2px] w-[50%] bg-white'></div>
        <h4 className='font-semibold text-center my-4 text-white'>OR</h4>
        <div className='h-[2px] w-[50%] bg-white'></div>
        </div>
        <form onSubmit={handleSubmit}  >
        
      
        <div className='flex flex-col m-2 '>
        <label className='text-white my-1' htmlFor="Email">Email</label>
        <input onChange={handleChange} spellCheck="false" className='rounded-full p-1 px-8 outline-none'value={user.email} required type="email" name='email' placeholder='email' />
        </div>
        
        <div className='flex flex-col m-2 '>
        <label className='text-white my-1' htmlFor="Password">Password</label>
        <input onChange={handleChange} className='rounded-full p-1 px-8 outline-none'value={user.password} required type="password" name='password' placeholder='password' />
        </div>
        <div className='text-center'>
        <input className='mt-6 bg-blue-500 rounded-full px-8 py-2 text-white font-semibold text-center cursor-pointer focus:bg-blue-600 ' type="submit" value="Login" />

        </div>
          
        </form>
        <div className='flex mt-2 text-center'>
          <h4>No Account ? </h4>
           <NavLink className="text-green-500 mx-1" to="/register">Register</NavLink>
        </div>
        </div>
        
      </div>
    </div>
    </main>
  )
}

export default Login