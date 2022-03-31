import {createContext, useContext, useEffect} from 'react'
import { auth } from '../Firebase.js'
import React, { useState } from 'react'
import {onAuthStateChanged,signOut} from 'firebase/auth'



 const userAuthContext = createContext();


 export function UserAuthContextProvider({children}) {
    const[user,setUser]=useState({});


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth ,(currentUser) => {
            setUser(currentUser);
        });
        return ()=> {
            unsubscribe();
        }

    }, []);

    return <userAuthContext.Provider value={user} >{children} </userAuthContext.Provider>

 }

 export function useUserAuth(){
     return useContext(userAuthContext);
 }