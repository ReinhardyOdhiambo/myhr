import { doc,  setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../Firebase";
import "./Skills.css";

const Skills = ({ setNewSkill }) => {
  const close = (e) => {
    if (e.target.classList.contains("skillformarea")) {
      setNewSkill(null);
    }

  };
 


  let navigate = useNavigate();
  const {user}=useUserAuth();
  const[skill1,setSkill1]=useState();
  const[skill2,setSkill2]=useState();
  const[skill3,setSkill3]=useState();
  const[skill4,setSkill4]=useState();
  const[skill5,setSkill5]=useState();
  const[skill6,setSkill6]=useState();
  

  
  const createSkills = async (e) => {
    e.preventDefault();
    await  setDoc(doc(db,"skills",user.uid), {
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      userid: user.uid ,
    });
    navigate('/')
    
    
    
  };
  console.log(createSkills);
  
  return (
    <div className="skillformarea" onClick={close}>
      <div className="skillformtab">
        <h3>Add Your Skills</h3>
      
              <form className="skillform" onSubmit={createSkills}>
         
          <input
            className="skillsinput"
            required
            type="text"
            name="skill"
            id="skill"
            placeholder="1"
            onChange={(e) => {
                setSkill1(e.target.value);
              }}
          />
          <input
            className="skillsinput"
            required
            type="text"
            name="skill"
            id="skill"
            placeholder="2"
            onChange={(e) => {
                setSkill2(e.target.value);
              }}
          />
          <input
            className="skillsinput"
            required
            type="text"
            name="skill"
            id="skill"
            placeholder="3"
            onChange={(e) => {
                setSkill3(e.target.value);
              }}
          />
          <input
            className="skillsinput"
            required
            type="text"
            name="skill"
            id="skill"
            placeholder="4"
            onChange={(e) => {
                setSkill4(e.target.value);
              }}
          />
          <input
            className="skillsinput"
            required
            type="text"
            name="skill"
            id="skill"
            placeholder="5"
            onChange={(e) => {
                setSkill5(e.target.value);
              }}
          />
          <input
            className="skillsinput"
            required
            type="text"
            name="skill"
            id="skill"
            placeholder="6"
             onChange={(e) => {
                setSkill6(e.target.value);
              }}
          />
          

          <button type="submit" className="expbutton">Add</button>
        </form>
              
         
        
      </div>
    </div>
  );
};

export default Skills;
