import React,{ useState} from 'react'
import './Login.css'
import google from '../assets/images/google.png'
import {  useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';




const Login = () => {
  
  const[loginEmail,setLoginEmail]=useState("")
  const[loginPass,setLoginPass]=useState("")
  const {logIn,googleSignIn,forgotpassword} = useUserAuth();
  const[showpass,setShowPass]=useState(false);
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(loginEmail, loginPass)
      .then(()=>navigate("/"))
      .catch(error => {   
        alert(error.message.slice(9,60));
     })
    } catch (error) {
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
      
    } catch (error) {
      alert(error.message);
    
    }
  };
  const forgotPassword= async(e) =>{
    if(loginEmail)try{
      await forgotpassword(loginEmail)
      .then(()=>navigate('/resetpassword'))
      .catch(error => {   
        alert(error.message);
     })
    }catch (error) {
    }  
  };

  let navigate=useNavigate();
  const signup =() =>{
    navigate("/signup");
  };
  const jobs =() =>{
    navigate("/jobs");
  };
  
  return (
    <div className='login'>
      <div className='logindesc'>
        <p>Make the Most of Your Professional Life</p>
        <button onClick={jobs}  className='findjob'> Jobs </button>
        <button onClick={signup} className='findjob'> Get A Free  Account </button>
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
             type={showpass?'text':'password'}
             required id='Password'
             name='password'
             onChange={(e)=>{
              setLoginPass(e.target.value);
            }}
              />
           <div className='passwordarea'>
           <div className='showpass'><input type='checkbox' checked={showpass} onChange={(e)=>{setShowPass(e.target.checked)}}/>
           <p>Show Password</p></div>
           <p className='forgotpass' onClick={forgotPassword} >Forgot Password?</p>
           </div> 

            <button className='loginbtn' type='submit'>Login</button>
          </form>
        </div>
        <p className='or'>or</p>
        <div className='logincard1'>
          <button onClick={handleGoogleSignIn} className='googlebtn'><img  className='googleicon' src={google} alt=''/>Login with Google</button>
        </div>
       <p>New to Connection.254? <span onClick={signup} className='signlink'>SignUp</span></p>
        </div>
       </div>

    </div>
  )
}

export default Login