import React, { useEffect, useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CalendarMonth } from "@mui/icons-material";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../Firebase";
import { Link } from "react-router-dom";
import './Recomendedjobs.css';

const Recomendedjobs = (deletejob) => {
  const [joblist, setJobList] = useState([]);

  const jobsCollectionRef = collection(db, "jobs");

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
  }, [deletejob]);

  return (
    <div className="recomended">
      <h3 className="recomendedjobs">Recomended Jobs</h3>
      {joblist.map((job) => (
        <Link key={job.id} to={`/details/${job.id}`} >
          <div className="recomendedcard">
            <div className="recomendedjobcard">
              <div className="logotitle">
                <div className="recomendedicon">
                  <img src="" alt="" />
                </div>
                <h3 className="recomendedtitle">{job.jobtitle}</h3>
              </div>
              <div className="recomendeddetails">
                <h3 className="companytitle"> {job.companyName}</h3>
                <h3 className="location">{job.location} </h3>
                <h3 className="joblevel"> {job.workplacetype} </h3>
                <h3 className="jobtime"> {job.employmenttype} </h3>
                
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recomendedjobs;
