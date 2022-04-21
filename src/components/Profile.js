import { Edit, Email, LocationCityOutlined, NoteAdd, Phone } from "@mui/icons-material";
import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import "./Profile.css";
import prflebg from '../assets/images/profilebg.jpg'
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useUserAuth();
  console.log(user);
  return (
    <div key={user.id} className="profile">
      <div className="profilebanner">
        <div className="banner">
         
         
          <div className="profilecircle">
            
            <img className="profileimg" src={user.photoURL?user.photoURL:null} alt="" />
          </div>
        </div>
        <div className="profiledetails">
          <h3 className="profilename"> {user.displayName} </h3>
          <h3 className="profiletitle">FrontEnd Developer</h3>
          <a href={user.email} className="profileemail"><Email fontSize="small"/>{user.email} </a>
          <a href="tel:+254743713416" className="profilephone"><Phone fontSize="small"/> +254743713416</a>
          <h3 className="profilelocation"><LocationCityOutlined fontSize="small"/> Nairobi,Kenya</h3>
        </div>
        <div className="profileediticon"><Edit/></div>
        <Link to='/createjob'>
        <button className="pcreatejobbtn"><NoteAdd className="addjobicon"/> Post a Job</button>
        </Link>
        <img className="bannerimg" src={prflebg} alt="" />
      </div>
      <div className="experience">
        <h3> Experience</h3>
        <div className="editicon"><Edit/></div>
        <div className="experiencedetails">
          <h3 className="experienceposition">Intern Software Developer</h3>
          <h3 className="experiencecompany">ALAN DICK COMMUNICATIONS LIMITED</h3>
          <h3 className="experiencedate">May 2021 - Sep 2021 · 5 mos</h3>
          <h3 className="experiencelocation">Nairobi ,Kenya</h3>
          <p className="experiencework">
          Designing User interface for Monitoring systems. 
Collaborated effectively with members of software development team and personnel in
other departments.
Developed processes to automate tasks, resulting in 50% increase in efficiency.
Designed and developed reports using SQL server reporting services.
Produced clean, validation-ready code for project needs.
          </p>
        </div>
      </div>
      <div className="skills">
      <h3> Skills</h3>
      <div className="editicon"><Edit/></div>
        <div className="skilllist">
        <p className="proffskils">Web App Development</p>
        <p className="proffskils">FrontEnd Development</p>
        <p className="proffskils">Responsive Design</p>
        <p className="proffskils">Information Technology</p>
        <p className="proffskils">Reactjs</p>
        <p className="proffskils">Python(Django Framework)</p>
        </div>
      </div>
      <div className="education">
      <h3> Education</h3>
      <div className="editicon"><Edit/></div>
        <div className="educationdetails">
          <h3 className="institutionname">Meru University of Science and Technology</h3>
          <h3 className="achievment">Second Class Honors ,Lower Division</h3>
          <h3 className="eduperiod">Sep 2016 - Feb 2021</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
