import React,{useEffect, useState} from 'react'
import './Login.css'
import google from '../assets/images/google.png'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase.js'




const Login = () => {
  
  const[loginEmail,setLoginEmail]=useState("")
  const[loginPass,setLoginPass]=useState("")
  
  const login= async()=>{
    const user=await signInWithEmailAndPassword(auth,loginEmail,loginPass);


  }
  const home =() =>{
    navigate("/home");
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    login();
    home();
  }




  let navigate=useNavigate();
  const signup =() =>{
    navigate("/signup");
  };
  
  return (
    <div className='login'>
      <div className='logindesc'>
          <p>Make the Most of Your Professional Life</p>

        </div>
       <div className='login-signup'>
        <div className='logincard'>
          <p>Login To Your Account</p>
          <div>
          <form className='emaillogin' onSubmit={handleSubmit}>
            <label className='label'  >Email</label>
            <input className='input'
            type='email'
             required id='email' 
             name='email' 
             onChange={(e)=>{
              setLoginEmail(e.target.value);
            }}
             />
            <label className='label' >Password</label>
            <input
             className='input'
             type='password' 
             required id='Password'
             name='password'
             onChange={(e)=>{
              setLoginPass(e.target.value);
            }}
              />
            <button className='loginbtn' type='submit'>Login</button>
          </form>
        </div>
        <p className='or'>or</p>
        <div className='logincard1'>
          <button className='googlebtn'><img  className='googleicon' src={google}/>Login with Google</button>
        </div>
       <p>New to Myhr? <span onClick={signup} className='signlink'>SignUp</span></p>
        </div>
       </div>

    </div>
  )
}

export default Login