import {
  Add,
  Delete,
  Edit,
  EditAttributes,
  Email,
  LocationCityOutlined,
  NoteAdd,
  Phone,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import "./Profile.css";
import prflebg from "../assets/images/profilebg.jpg";
import { Link, useNavigate } from "react-router-dom";
import Experienceform from "./Experienceform";
import Education from "./Education";
import Skills from "./Skills";
import { db } from "../Firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import Editprofile from "./Editprofile";

const Profile = () => {
  const { user } = useUserAuth();
  let navigate = useNavigate();
  const [newexperience, setNewExperience] = useState(null);
  const [editProfile, setEditProfile] = useState(null);
  const [neweducation, setNewEducation] = useState(null);
  const [newskill, setNewSkill] = useState(null);
  const [skillist, setSkillList] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "users");

  const skillsCollectionRef = collection(db, "skills");
  const educationCollectionRef = collection(db, "education");
  const experienceCollectionRef = collection(db, "experience");

  const deleteexp = async (id) => {
    await deleteDoc(doc(db, "experience", id));
  };
  const deleteskill = async (id) => {
    await deleteDoc(doc(db, "skills", id));
  };
  const deletedu = async (id) => {
    await deleteDoc(doc(db, "education", id));
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getUsers();
  }, [deleteskill]);
  useEffect(() => {
    const getExperience = async () => {
      const data = await getDocs(experienceCollectionRef);
      setExperience(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    const getSkills = async () => {
      const data = await getDocs(skillsCollectionRef);
      setSkillList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    const getEducation = async () => {
      const data = await getDocs(educationCollectionRef);
      setEducation(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getSkills();
    getEducation();
    getExperience();
  }, []);

  return (
    <div className="profilepage">
      <div className="profile">
      {users.map((users) => (
          
            <>
              { users.userid === user.uid &&
                (
                  <div key={user.id} className="profilebanner">

              <div className="banner">
                <div className="profilecircle">
                  <img
                    className="profileimg"
                    src={user.photoURL ? user.photoURL : null}
                    alt=""
                  />
                </div>
              </div>
              <div className="profiledetails">
                <h3 className="profilename">
                  {" "}
                  { users.name}{" "}
                </h3>
                <h3 className="profiletitle">
                  {" "}
                  { users.title}{" "}
                </h3>
                <a
                  href={ user.email}
                  className="profileemail"
                >
                  <Email fontSize="small" />
                  {user.email}{" "}
                </a>
                <a href="tel:+254743713416" className="profilephone">
                  <Phone fontSize="small" />{" "}
                  {  users.tel}
                </a>
                <h3 className="profilelocation">
                  <LocationCityOutlined fontSize="small" />{" "}
                  { users.location}
                </h3>
              </div>
              <div className="profileediticon" onClick={setEditProfile}>
                <Edit />
              </div>
              <Link to="/createjob">
                <button className="pcreatejobbtn">
                  <NoteAdd className="addjobicon" /> Post a Job
                </button>
              </Link>
              <img className="bannerimg" src={prflebg} alt="" />
              </div>
                )
              }
            </>
          
        
        ))}
      </div>

      <div className="experience">
        <h3> Experience</h3>
        <div className="editicon" onClick={setNewExperience}>
          <Add className="editicon1" />
        </div>
        {experience.map((experience) => (
          <>
            {experience.userid === user.uid && (
              <div key={experience.id} className="experiencedetails">
                <div
                  className="expdelete"
                  onClick={() => {
                    deleteexp(experience.id);
                  }}
                >
                  <Delete fontSize="small" />
                </div>
                <h3 className="experienceposition"> {experience.jobtitle} </h3>
                <h3 className="experiencecompany">{experience.company}</h3>
                <h3 className="experiencedate">
                  {" "}
                  {experience.startdate}-{experience.enddate}
                </h3>
                <h3 className="experiencelocation"> {experience.location} </h3>
                <p className="experiencework">{experience.achievement}</p>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="skills">
        <h3> Skills</h3>
        <div className="editicon" onClick={setNewSkill}>
          <Edit className="editicon1" />
        </div>
        {skillist.map((skill) => (
          <>
            {skill.userid === user.uid && (
              <div key={skill.id} className="skilllist">
                <div
                  onClick={() => {
                    deleteskill(skill.id);
                  }}
                  className="skilldelete"
                >
                  <Delete fontSize="small" />
                </div>
                <p className="proffskils"> {skill.skill1} </p>
                <p className="proffskils">{skill.skill2}</p>
                <p className="proffskils">{skill.skill3}</p>
                <p className="proffskils">{skill.skill4}</p>
                <p className="proffskils">{skill.skill5}</p>
                <p className="proffskils">{skill.skill6}</p>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="education">
        <h3> Education</h3>
        <div className="editicon" onClick={setNewEducation}>
          <Add className="editicon1" />
        </div>
        {education.map((education) => (
          <>
            {education.userid === user.uid && (
              <div key={education.id} className="educationdetails">
                <div
                  onClick={() => {
                    deletedu(education.id);
                  }}
                  className="edudelete"
                >
                  <Delete fontSize="small" />
                </div>
                <h3 className="institutionname">{education.institution}</h3>
                <h3 className="achievment"> {education.achievement} </h3>
                <h3 className="eduperiod">
                  {" "}
                  {education.startdate} - {education.enddate}{" "}
                </h3>
              </div>
            )}
          </>
        ))}
      </div>

      {newexperience && <Experienceform setNewExperience={setNewExperience} />}
      {editProfile && <Editprofile setEditProfile={setEditProfile} />}
      {neweducation && <Education setNewEducation={setNewEducation} />}
      {newskill && <Skills setNewSkill={setNewSkill} />}
    </div>
  );
};

export default Profile;
