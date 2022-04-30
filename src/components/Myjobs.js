import React, { useEffect, useState } from "react";
import "./Myjobs.css";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CalendarMonth, Delete, NoteAdd, Search } from "@mui/icons-material";
import { doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase";
import Jobdetails from "./Jobdetails";
import { useNavigate, Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Sidenav from "./Sidenav";
import { async } from "@firebase/util";
import Recomendedjobs from "./Recomendedjobs";
import Minfooter from "./Minfooter";

const Myjobs = () => {
  const { user } = useUserAuth();
  let navigate = useNavigate();
  const [joblist, setJobList] = useState([]);
  const[search,setSearch]=useState('');

  const jobsCollectionRef = collection(db, "jobs");
  const deleteJob = async (id) => {
    await deleteDoc(doc(db, "jobs", id));
  };

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
  }, [deleteJob]);
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
      <Sidenav />
      <Recomendedjobs deletejob={deleteJob} />
      <Minfooter />
      <form className="searchbox" onSubmit={handleSearch}>
        <input className="searchinput" type="text" placeholder="Search by Job title..." 
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button type="submit" className="searchicon"><Search  /></button>
      </form>

      <div className="joblistings">
        {joblist &&
          joblist.map((job) => (
            <>
              {job.creator.id === user.uid ? (
                <div key={job.id} className="jobcard">
                  <div className="jobimg">
                    <img src="" alt="" />
                  </div>
                  <div className="jobcarddetails">
                    <h3 className="jobtitle">{job.jobtitle}</h3>
                    <div
                      onClick={() => {
                        deleteJob(job.id);
                      }}
                      className="deletejob"
                    >
                      <Delete fontSize="small"/>
                    </div>
                    <Link to={`/applications/${job.id}`}>
                      <button className="applicationbtn">Applications</button>
                    </Link>
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
              ) : null}
            </>
          ))}

        {joblist &&
        <div className="postjobcard">
        <h3 className="postjobtag">Post a Job for People to See</h3>
        <Link to="/createjob">
          <button className="createjobcardbtn">
            <NoteAdd className="addjobcardicon" /> Post a Job
          </button>
        </Link>
      </div>

        }
      </div>
    </div>
  );
};

export default Myjobs;
