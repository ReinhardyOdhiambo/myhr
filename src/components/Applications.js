import React, { useEffect, useState } from "react";
import "./Applications.css";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CalendarMonth } from "@mui/icons-material";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../Firebase";
import Jobdetails from "./Jobdetails";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Sidenav from "./Sidenav";

const Applications = () => {
  const { id } = useParams();
  const { user } = useUserAuth();
  let navigate = useNavigate();
  const [joblist, setJobList] = useState([]);

  const jobsCollectionRef = collection(db, "applications");

  useEffect(() => {
    const getJobs = async () => {
      const data = await getDocs(jobsCollectionRef);
      setJobList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getJobs();
  }, []);
  console.log(joblist);

  return (
    <div>
         <Sidenav/>
      <div className="applications">
     
      <h3> Applicants Documents </h3>
        
        {joblist.map((job) => (
          <>
            {job.jobid === id ? (
              
            <div>
              
                  <ul key={job.id}>
                  <a href={job.cvUrl}><li>Application Cvs</li></a>
                </ul>
            </div>
            
                
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
};

export default Applications;
