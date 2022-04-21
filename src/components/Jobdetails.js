import React, { useEffect, useState } from "react";
import "./Jobdetails.css";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CalendarMonth, SaveAlt } from "@mui/icons-material";
import { useNavigate, useParams,Link } from "react-router-dom";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../Firebase";
import Jobs from "./Jobs";
import Applyform from "./Applyform";


const Jobdetails = () => {
  
  const { id } = useParams();

  const [job, setJobList] = useState([]);
  useEffect(() => {
    const docRef = doc(db, "jobs", id);
    getDoc(docRef).then((docRef) => {
      if (docRef.exists) {
        setJobList(docRef.data());
      } else {
      }
    });
  }, []);
  

  let navigate=useNavigate();

  
  return (
    <div className="details">
     <div className="detailscover">
     <div className="topdetails">
          <img className="jobimg" src="" alt="" />
          <h3 className="jobtitle"> {job.jobtitle} </h3>

      </div>
      <div className="companydetails">
        <h3 className="companytitle">
          {" "}
          <WorkIcon fontSize="small" />
          {job.companyName}
        </h3>
        <h3 className="location">
          <LocationOnIcon fontSize="small" /> {job.location}{" "}
        </h3>
        <h3 className="joblevel">
          {" "}
          <WorkHistoryIcon fontSize="small" /> {job.workplacetype}{" "}
        </h3>
        <h3 className="jobtime">
          {" "}
          <AccessTimeFilledIcon fontSize="small" /> {job.employmenttype}{" "}
        </h3>
        <h3 className="jobdate">
          <CalendarMonth fontSize="small" />
          {job.date}
        </h3>
      </div>
      <div className="applysave">
          {job.sendEmail?
      <Link to={`/apply/${id}`}><button  className="applybttn">Apply</button></Link>  :
        <button className="applybttn">External</button>

        }

      
      <button className="savebttn"><SaveAlt fontSize="small"/> Save</button>
      </div>
      <div className="descresqua">
        <div >
          <h3 className="jobdesc">DESCRIPTION</h3>
          <p>{job.jobdescription}</p>
        </div>
        <div className="jobresp">
          <h3>RESPONSIBILITY</h3>
          <p> {job.responsibility} </p>
        </div>
        <div className="jobqua">
          <h3>QALIFICATIONS</h3>
          <p> {job.qualification} </p>
        </div>
      </div>
     </div>
      
      
    </div>
 
  );
};

export default Jobdetails;
