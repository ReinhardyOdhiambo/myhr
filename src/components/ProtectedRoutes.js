
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../Firebase.js'
import {onAuthStateChanged} from 'firebase/auth'
import Login from '../pages/Login.js';




const ProtectedRoutes = ({children}) => {

    const[user,setUser]=useState({});


    useEffect(()=>{
        let abortController = new AbortController();
        
        const unsubscribe = onAuthStateChanged(auth ,(currentUser) => {
            
                setUser(currentUser);
              
           
            
        });
        unsubscribe();
        return ()=> {
            abortController.abort();
        }

    }, []);
    const useron=user;

    console.log(useron) ;
  return useron?<Outlet/>:<Login/>
  
};

export default ProtectedRoutes;