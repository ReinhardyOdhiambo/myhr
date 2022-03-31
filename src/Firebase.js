import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyBdEDop3fxiT1WTsxaCwoconZ-R6MmonhM",
  
    authDomain: "hr-project-ae711.firebaseapp.com",
  
    databaseURL: "https://hr-project-ae711-default-rtdb.firebaseio.com",
  
    projectId: "hr-project-ae711",
  
    storageBucket: "hr-project-ae711.appspot.com",
  
    messagingSenderId: "828378801842",
  
    appId: "1:828378801842:web:df0c17e77879d113a74bab",
  
    measurementId: "G-Z3TNK9WS7X"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app)
  