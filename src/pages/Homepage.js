import React, { useState } from 'react'
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth'
import { auth } from '../Firebase.js'
import { async } from '@firebase/util'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {

    const[user,setUser]=useState({});
    onAuthStateChanged(auth ,(currentUser)=>{
        setUser(currentUser);
    });
    const logout= async()=>{
        await signOut(auth);

    }
    let navigate=useNavigate();
    const home =() =>{
        navigate("/");
      };
    const signout=()=>{
        logout();
        home();


    }

    
  return (
    <div>Homepage
        <p>{user?.email}</p>
        <button onClick={signout}>Logout</button>
    </div>
    
    
  )
}

export default Homepage