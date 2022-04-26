import React, { useEffect } from 'react'
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../Firebase";
import './Editprofile.css';
import { updateProfile } from 'firebase/auth';

const Editprofile = ({setEditProfile}) => {
    const{user}=useUserAuth();
    const[title,setTitle]=useState();
    const[name,setName]=useState();
    const[location,setLocation]=useState();
    const[address,setAddress]=useState();
    const[tel,setTel]=useState();
  
    let navigate = useNavigate();
    
    

    const close = (e) => {
        if (e.target.classList.contains('experienceeditform')){
          setEditProfile(null);
    
        }
    }; 
    
    const editprofile = async (e) => {
      e.preventDefault();
      await setDoc(doc(db,"users",user.uid), {
        name,
        title,
        location,
        address,
        tel,
        userid:user.uid,

      });
      navigate("/profile");
      setEditProfile(null);
    };  
  return (
    <div className="experienceeditform" onClick={close}>
      <div className="experienceformtab">
      
        <form className="expform" onSubmit={editprofile}>
          <label className="expsubtitle" for="name">
            {" "}
            Name{" "}
          </label>
          <input
            className="expinputs"
            required
            type="text"
            name="name"
            
            id="name"
            placeholder=""
             onChange={(e) => {
                setName(e.target.value);
              }}
          />
          <label className="expsubtitle" for="title">
            {" "}
            Title{" "}
          </label>
          <input
            className="expinputs"
            
            required
            type="text"
            name="title"
            id="title"
            placeholder=""
             onChange={(e) => {
                setTitle(e.target.value);
              }}
          />
          <label className="expsubtitle" for="tel">
            {" "}
            Phone Number{" "}
          </label>
          <input
            className="expinputs"
            
            required
            type='tel'
            name="tel"
            id="tel"
            placeholder=""
             onChange={(e) => {
                setTel(e.target.value);
              }}
          />
          <label className="expsubtitle" for="explocation">
            {" "}
            Location{" "}
          </label>
          <input
            className="expinputs"
            
            required
            type="text"
            name="explocation"
            id="explocation"
            placeholder=""
            onChange={(e) => {
                setLocation(e.target.value);
              }}
          />
          <label className="expsubtitle" for="expaddress">
            {" "}
            Address{" "}
          </label>
          <input
            className="expinputs"
            
            required
            type="text"
            name="expaddress"
            id="expaddress"
            placeholder=""
             onChange={(e) => {
                setAddress(e.target.value);
              }}
          />
          

          <button className="expbutton" type="submit">Add</button>
        </form>
        
        
      </div>
    </div>
  )
}

export default Editprofile