import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../Firebase";
import "./Education.css";

const Education = ({ setNewEducation }) => {
  const { user } = useUserAuth();
  const close = (e) => {
    if (e.target.classList.contains("educationform")) {
      setNewEducation(null);
    }
  };
  const [institution, setInstitution] = useState();
  const [achievement, setAchievement] = useState();
  const [location, setLocation] = useState();
  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();
  let navigate = useNavigate();
  const educationCollectionRef = collection(db, "education");
  const createeducation = async (e) => {
    e.preventDefault();
    await addDoc(educationCollectionRef, {
      institution,
      achievement,
      location,
      startdate,
      enddate,
      name: user.email,
      userid: user.uid,
    });
    setNewEducation(null);

    navigate("/");
  };

 

  return (
    <div className="educationform" onClick={close}>
      <div className="educationformtab">
        <form className="edcaform" onSubmit={createeducation}>
          <label className="expsubtitle" for="expjobtitle">
            {" "}
            Institution Name{" "}
          </label>
          <input
            className="expinputs"
            required
            type="text"
            name="expjobtitle"
            id="expjobtitle"
            placeholder=""
            onChange={(e) => {
              setInstitution(e.target.value);
            }}
          />
          <label className="expsubtitle" for="expcompanyname">
            {" "}
            Achievement{" "}
          </label>
          <input
            className="expinputs"
            required
            type="text"
            name="expcompanyname"
            id="expcompanyname"
            placeholder=""
            onChange={(e) => {
              setAchievement(e.target.value);
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
              setStartdate(e.target.value);
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
              setEnddate(e.target.value);
            }}
          />

          <button  className="expbutton" type="submit" >Add</button>
        </form>
      </div>
    </div>
  );
};

export default Education;
