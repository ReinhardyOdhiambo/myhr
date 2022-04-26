import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../Firebase";
import "./Experienceform.css";

const Experienceform = ({ setNewExperience }) => {

  const{user}=useUserAuth();
  const[jobtitle,setJobTitle]=useState();
  const[achievement,setAchievements]=useState();
  const[location,setLocation]=useState();
  const[address,setAddress]=useState();
  const[startdate,setStartDate]=useState();
  const[enddate,setEndDate]=useState();
  const[company,setCompany]=useState();

  let navigate = useNavigate();

  const experienceCollectionRef = collection(db, "experience");
  const createexperience = async (e) => {
    e.preventDefault();
    await addDoc(experienceCollectionRef, {
      jobtitle,
      company,
      location,
      enddate,
      startdate,
      address,
      achievement,
      user: user.email,
      userid: user.uid ,
    });
    navigate("/");
  };
  







  const close = (e) => {
    if (e.target.classList.contains('experienceform')){
      setNewExperience(null);

    }
    
  };
  return (
    <div className="experienceform" onClick={close}>
      <div className="experienceformtab">
        <form className="expform" onSubmit={createexperience}>
          <label className="expsubtitle" for="expjobtitle">
            {" "}
            Job Title{" "}
          </label>
          <input
            className="expinputs"
            required
            type="text"
            name="expjobtitle"
            id="expjobtitle"
            placeholder=""
             onChange={(e) => {
                setJobTitle(e.target.value);
              }}
          />
          <label className="expsubtitle" for="expcompanyname">
            {" "}
            Company/Organization{" "}
          </label>
          <input
            className="expinputs"
            required
            type="text"
            name="expcompanyname"
            id="expcompanyname"
            placeholder=""
             onChange={(e) => {
                setCompany(e.target.value);
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

          <label className="expsubtitle" for="expstartdate">
            {" "}
            Start Date{" "}
          </label>
          <input
            className="expinputs"
            required
            type="date"
            name="expstartdate"
            id="expstartdate"
            placeholder=""
            onChange={(e) => {
                setStartDate(e.target.value);
              }}
          />

          <label className="expsubtitle" for="expenddate">
            {" "}
            End Date{" "}
          </label>
          <input
            className="expinputs"
            required
            type="date"
            name="expenddate"
            id="expenddate"
            placeholder=""
            onChange={(e) => {
                setEndDate(e.target.value);
              }}
          />

          <label className="expsubtitle">Achievements </label>
          <textarea
            className="exptext"
            type="text"
            name="achievements"
            placeholder=""
            onChange={(e) => {
                setAchievements(e.target.value);
              }}
          />
          <button className="expbutton" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Experienceform;
