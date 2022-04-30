import React, { useEffect, useState } from "react";
import "./Jobs.css";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CalendarMonth, Search } from "@mui/icons-material";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../Firebase";
import Jobdetails from "./Jobdetails";
import { useNavigate, Link } from "react-router-dom";
import Sidecard from "./Sidecard";
import { useUserAuth } from "../context/UserAuthContext";
import Recomendedjobs from "./Recomendedjobs";
import Minfooter from "./Minfooter";

const Jobs = () => {
  const { user } = useUserAuth();
  let navigate = useNavigate();
  const [joblist, setJobList] = useState([]);
  const[search,setSearch]=useState('');
  const[filterjob,setFilterJob]=useState([]);


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
  }, [search]);
  
 
      const handleSearch =(e)=>{
        e.preventDefault();
        setJobList(
          joblist.filter(
            (job)=>
            job.jobtitle.toLowerCase().includes(search.toLowerCase())
            )
            );
  
      };
    
    
        
 
  

  return (
    <div className="jobarea">
      {user ? <></> : <Sidecard />}
      <Recomendedjobs />
      <Minfooter />

      <form className="searchbox" onSubmit={handleSearch}>
        <input className="searchinput" type="text" placeholder="Search by Job title..." 
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button type="submit" className="searchicon"><Search  /></button>
      </form>
      <div className="joblistings">
        {joblist.map((job) => (
          <Link key={job.id} to={`/details/${job.id}`}>
            <div className="jobcard">
              <div className="jobimg">
                <img src="" alt="" />
              </div>
              <div className="jobcarddetails">
                <h3 className="jobtitle">{job.jobtitle}</h3>
                <div className="jobdetails">
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
                    <AccessTimeFilledIcon fontSize="small" />{" "}
                    {job.employmenttype}{" "}
                  </h3>
                  <h3 className="jobdate">
                    <CalendarMonth fontSize="small" />
                    {job.date}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
