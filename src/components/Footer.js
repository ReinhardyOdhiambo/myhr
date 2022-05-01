import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Footer = () => {
    let navigate=useNavigate();
    const {logOut,user}=useUserAuth();
    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/login");
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    <div className="footer">
      <div className="footerarea">
        
        <div className="footerlinks">
          <div className="footermenu">
            <h3>Quick Links</h3>
           <Link to='/jobs'><h3 className="footerlink">Jobs</h3></Link> 
           <Link to='/myjobs'><h3 className="footerlink">My Jobs</h3></Link> 
           <Link to='/createjob'><h3 className="footerlink">Post Job</h3></Link> 
           <Link to='/saved'><h3 className="footerlink">Saved</h3></Link>
            
          </div>

          <div className="footercontacts">
            <h3>Stay In Contract</h3>
            <p className="footercontact">info@Connection.254.com</p>
            <p className="footercontact">+254743713416</p>
            <p className="footercontact">Nairobi,Kenya</p>
          </div>
        </div>
      </div>
      {user && <button onClick={handleLogout} className="footerlogout">Logout</button>}
      <div className="footerlogotitle">
          <h3 className="">
            Connection<span className="logospan">.254</span>
          </h3>
        </div>
      
      <div className="footersocials">
        <Link to="">
          <Facebook className="footersocial" />
        </Link>
        <Link to="">
          <Twitter className="footersocial" />
        </Link>
        <Link to="">
          <Instagram className="footersocial" />
        </Link>
        <Link to="">
          <LinkedIn className="footersocial" />
        </Link>
        <Link to="">
          <GitHub className="footersocial" />
        </Link>
      </div>
      
    </div>
  );
};

export default Footer;
