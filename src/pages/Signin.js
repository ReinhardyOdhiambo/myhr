import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import google from '../assets/images/google.png'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth  } from '../Firebase.js'
import {SigninWithGoogle} from '../Firebase'
import { useUserAuth } from '../context/UserAuthContext';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Signin = () => {

  const[signEmail,setSignupEmail]=useState("")
  const[signPass,setSignupPass]=useState("")
  const {signUp,googleSignIn} = useUserAuth();
  const[showpass,setShowPass]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(signEmail, signPass);
      navigate("/");
    } catch (err) {
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      
    }
  };

  


  let navigate=useNavigate();
  const login =() =>{
    navigate("/login");
  };
  const jobs =() =>{
    navigate("/jobs");
  };

  return (
    <div className='login'>
    <div className='logindesc'>
        <p>Join your colleagues, classmates, and friends on Connection.254. </p>
        <button onClick={jobs} className='findjob'> Jobs </button>
        <button onClick={login}  className='findjob'> Login To Account </button>
        <div className='followsocials'>
          <h3>Find Us :</h3>
          <div className='socials'>
            <Facebook className='fb'/>
            <Twitter className='tw'/>
            <LinkedIn className='ln'/>
            <Instagram className='insta'/>

          </div>
        </div>

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
          type={showpass?'text':'password'}
           required id='Password'
          name='password'
          onChange={(e)=>{
            setSignupPass(e.target.value);
          }}
          />
          <div className='passwordarea'>
           <div className='showpass'><input type='checkbox' checked={showpass} onChange={(e)=>{setShowPass(e.target.checked)}}/>
           <p>Show Password</p></div>
           </div>
          <button className='loginbtn' type='submit'>SignUp</button>
        </form>
      </div>
      <p className='or'>or</p>
      <div className='logincard1'>
        <button onClick={handleGoogleSignIn} className='googlebtn'><img  className='googleicon' src={google} alt='' />Sign with Google</button>
      </div>
     <p>Already on  Connection.254? <span onClick={login} className='signlink'>Login</span></p>
      </div>
     </div>

  </div>
  )
}

export default Signin