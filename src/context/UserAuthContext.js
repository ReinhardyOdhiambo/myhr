import {createContext, useContext, useEffect} from 'react'
import { auth } from '../Firebase.js'
import React, { useState } from 'react'
import {onAuthStateChanged,
    signOut
    ,signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithPopup} from 'firebase/auth'



 const userAuthContext = createContext();


 export function UserAuthContextProvider({children}) {
    const[user,setUser]=useState({});

    function signUp(signPass, signEmail) {
        return createUserWithEmailAndPassword(auth, signEmail, signPass);
      }

    function logIn(loginPass, loginEmail) {
        return signInWithEmailAndPassword(auth, loginPass, loginEmail);
      }
    function logOut() {
        return signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
      }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth ,(currentUser) => {
            setUser(currentUser);
        });
        return ()=> {
            unsubscribe();
        }

    }, []);

    return <userAuthContext.Provider value={{user,logIn,signUp,googleSignIn,logOut}} >{children} </userAuthContext.Provider>

 }

 export function useUserAuth(){
     return useContext(userAuthContext);
 }