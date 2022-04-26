/*import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Applyform.css";
import { getDoc, doc } from "firebase/firestore";
import { storage } from "../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { db } from "../Firebase";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CalendarMonth } from "@mui/icons-material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useUserAuth } from "../context/UserAuthContext";
import { addDoc, collection } from "firebase/firestore";
const Applyform = () => {
  const { user } = useUserAuth();
  const { id } = useParams();
  const [apply, setApply] = useState([]);
  useEffect(() => {
    const docRef = doc(db, "jobs", id);
    getDoc(docRef).then((docRef) => {
      if (docRef.exists) {
        setApply(docRef.data());
      } else {
      }
    });
  }, [id]);
  const jobsApplicationRef = collection(db, "applications");
  const navigate = useNavigate();
  const [cvUrl, setCvUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const file = e.target[0]?.files[0];

    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(jobsApplicationRef, {
            cvUrl,
            jobtitle: apply.jobtitle,
            jobid: id,
            companyName: apply.companyName,
          });
          setCvUrl(downloadURL);
          
        });
      }
    );
    navigate = "/";
  };

  return (
    <div className="applicationarea">
      <div className="formarea">
        <div className="formtitle">
          <p> Apply Here</p>
        </div>
        <div className="jobcard">
          <div className="jobimg">
            <img src="" alt="" />
          </div>
          <div className="jobcarddetails">
            <h3 className="jobtitle">{apply.jobtitle}</h3>
            <div className="jobdetails">
              <h3 className="companytitle">
                {" "}
                <WorkIcon fontSize="small" />
                {apply.companyName}
              </h3>
              <h3 className="location">
                <LocationOnIcon fontSize="small" /> {apply.location}{" "}
              </h3>
              <h3 className="joblevel">
                {" "}
                <WorkHistoryIcon fontSize="small" /> {apply.workplacetype}{" "}
              </h3>
              <h3 className="jobtime">
                {" "}
                <AccessTimeFilledIcon fontSize="small" /> {apply.employmenttype}{" "}
              </h3>
              <h3 className="jobdate">
                <CalendarMonth fontSize="small" />
                One Month ago
              </h3>
            </div>
          </div>
        </div>

        <form className="applyform" onSubmit={handleSubmit}>
          <label for="cvfile" className="applylabelfile">
            Attach Resume
          </label>
          <input
            id="cvfile"
            className="applyforminputfile"
            type="file"
            name="cvfile"
          />

          <button className="applybtn" type="submit">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default Applyform;*/

import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./Applyform.css";
import { getDoc, doc } from "firebase/firestore";
import { storage } from "../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { db } from "../Firebase";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CalendarMonth } from "@mui/icons-material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useUserAuth } from "../context/UserAuthContext";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import sent from'../assets/images/sent.svg'

function Applyform() {
  const { user } = useUserAuth();
  const { id } = useParams();
  let navigate= useNavigate();
  const [apply, setApply] = useState([]);
  const [sentApplication,setSentApplication]=useState(false);
  useEffect(() => {
    const docRef = doc(db, "jobs", id);
    getDoc(docRef).then((docRef) => {
      if (docRef.exists) {
        setApply(docRef.data());
      } else {
      }
    });
  }, [id]);
  const [cvUrl, setCvUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const jobsApplicationRef = collection(db, "applications");
  const[error,setError]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    if ( file.type !== "application/pdf")
    return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         setCvUrl(downloadURL);
        
         
      
          

        });
      },


    );
     

  }
  const addcv = async()=>{
     await addDoc(jobsApplicationRef, {
      cvUrl,
      jobtitle: apply.jobtitle,
      jobid: id,
      companyName: apply.companyName,
    });
    setSentApplication(!sentApplication);

    
  }
 
 
    
    
   


  
  

  return (
    <div className="applicationarea">
    <div className="formarea">
      <div className="formtitle">
        <h3> Apply Here</h3>
      </div>
      <div className="jobcard">
        <div className="jobimg">
          <img src="" alt="" />
        </div>
        <div className="jobcarddetails">
          <h3 className="jobtitle">{apply.jobtitle}</h3>
          <div className="jobdetails">
            <h3 className="companytitle">
              {" "}
              <WorkIcon fontSize="small" />
              {apply.companyName}
            </h3>
            <h3 className="location">
              <LocationOnIcon fontSize="small" /> {apply.location}{" "}
            </h3>
            <h3 className="joblevel">
              {" "}
              <WorkHistoryIcon fontSize="small" /> {apply.workplacetype}{" "}
            </h3>
            <h3 className="jobtime">
              {" "}
              <AccessTimeFilledIcon fontSize="small" /> {apply.employmenttype}{" "}
            </h3>
            <h3 className="jobdate">
              <CalendarMonth fontSize="small" />
              {apply.date}
            </h3>
          </div>
        </div>
      </div>
      

       {sentApplication?(
       <div className="applicationsent">
         <img className="sent" src={sent} alt=""/>
         <h3>Application Sent</h3>
         
         </div>):
       <form className="applyform" onSubmit={handleSubmit}>
          <label for="cvfile" className="applylabelfile">
            Attach Resume
          </label>
          <input
            id="cvfile"
            className="applyforminputfile"
            type="file"
            
            name="cvfile"
          />
          {!cvUrl && 
          <p className="pdfformat">File needs to be in pdf format</p>
          }
          {!cvUrl &&
          <button  className="applybtn" type="submit">
            Add Attachment
          </button>
          }
          {cvUrl &&
          <button onClick={addcv} className="applybtn" >
            Send Application
          </button>
          }
        </form>
}
     {
        !cvUrl &&
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }
     
        
    </div>
    </div>
  );
}
export default Applyform;
