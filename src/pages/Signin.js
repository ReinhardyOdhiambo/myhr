import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import google from '../assets/images/google.png'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../Firebase.js'

const Signin = () => {

  const[signupEmail,setSignupEmail]=useState("")
  const[signupPass,setSignupPass]=useState("")
  const signup= async()=>{
    const user=await createUserWithEmailAndPassword(auth,signupEmail,signupPass);
    console.log(user);

  }
  const home =() =>{
    navigate("/home");
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    signup();
    home();
    
  


  }


  let navigate=useNavigate();
  const login =() =>{
    navigate("/login");
  };

  return (
    <div className='login'>
    <div className='logindesc'>
        <p>Make the Most of Your Professional Life</p>

      </div>
     <div className='login-signup'>
      <div className='logincard'>
        <p>Sign To Your Account</p>
        <div>
        <form className='emaillogin' onSubmit={handleSubmit}>
          <label className='label'  >Email</label>
          <input className='input' 
          type='email' 
          required id='email'
           name='email'
          onChange={(e)=>{
              setSignupEmail(e.target.value);
            }}
            />
          <label className='label' >Password</label>
          <input className='input' 
          type='password'
           required id='Password'
          name='password'
          onChange={(e)=>{
            setSignupPass(e.target.value);
          }}
          />
          <button className='loginbtn' type='submit'>SignUp</button>
        </form>
      </div>
      <p className='or'>or</p>
      <div className='logincard1'>
        <button className='googlebtn'><img  className='googleicon' src={google}/>Sign with Google</button>
      </div>
     <p>Already on  Myhr? <span onClick={login} className='signlink'>Login</span></p>
      </div>
     </div>

  </div>
  )
}

export default Signin