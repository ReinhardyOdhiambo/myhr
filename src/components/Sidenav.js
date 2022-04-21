import { Email, LocationCityOutlined, NoteAdd, Phone } from "@mui/icons-material";
import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import "./Sidenav.css";
import prflebg from '../assets/images/profilebg.jpg'
import { Link } from "react-router-dom";


  

const Sidenav = () => {
    const { user } = useUserAuth();
  return (
    <div className='sidenav'>
      <Link className="profilelinkhome" to='/profile'>
      <div className="profilebanner">
        <div className="banner">
         
         
          <div className="profilecircle">
            
            <img className="profileimg" src={user.photoURL} alt="" />
          </div>
        </div>
        <div className="profiledetails">
          <h3 className="profilename"> {user.displayName} </h3>
          <h3 className="profiletitle">FrontEnd Developer</h3>
          <a href={user.email} className="profileemail"><Email fontSize="small"/>{user.email} </a>
          <a href="tel:+254743713416" className="profilephone"><Phone fontSize="small"/> +254743713416</a>
          <h3 className="profilelocation"><LocationCityOutlined fontSize="small"/> Nairobi,Kenya</h3>
        </div>
        <img className="bannerimg" src={prflebg} alt="" />
      </div>
      </Link>
      <Link to='/createjob'>
          <button className="createjobbtn"><NoteAdd className="addjobicon"/> Post a Job</button>
      </Link>
    </div>
  )
}

export default Sidenav