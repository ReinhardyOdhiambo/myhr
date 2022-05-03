import { async } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../Firebase";
import "./Createjob.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const Createjob = ({closemenu}) => {
  const [websiteaddress, setWebsiteAddress] = useState(false);
  const [emailaddress, setEmailAddress] = useState(false);
  const { user } = useUserAuth();
  const [jobtitle, setJobTitle] = useState();
  const [companyName, setCompanyName] = useState();
  const [location, setLocation] = useState();
  const [workplacetype, setWorkplace] = useState();
  const [employmenttype, setEmployment] = useState();
  const [jobdescription, setDescription] = useState();
  //const [sendEmail, setSendEmail] = useState();
  const [responsibility, setResponsibility] = useState();
  const [qualification, setQualifications] = useState();
  const [externalAddress, setExternalAddress] = useState("");

  const date = firebase.firestore.Timestamp.now()
    .toDate()
    .toString()
    .slice(4, 15);
  console.log(date);

  let navigate = useNavigate();

  const jobsCollectionRef = collection(db, "jobs");
  const createJob = async (e) => {
    e.preventDefault();
    await addDoc(jobsCollectionRef, {
      jobtitle,
      companyName,
      location,
      workplacetype,
      employmenttype,
      jobdescription,
      responsibility,
      externalAddress,
      qualification,
      date,
     // sendEmail,
      creator: { name: user.email, id: user.uid },
    });
    navigate("/");
  };

  return (
    <div className="creationarea" onClick={()=>{closemenu();}}>
      <div className="jobssformarea">
        <div className="formarea">
          <div className="createformtitle">
            <p>Create Job</p>
          </div>
          <form className="applyform" onSubmit={createJob}>
            <label className="applylabel" for="firstname">
              {" "}
              Job Title{" "}
            </label>
            <input
              className="applyforminput"
              required
              type="text"
              name="firstname"
              id="firstname"
              placeholder=""
              onChange={(e) => {
                setJobTitle(e.target.value);
              }}
            />
            <label className="applylabel" for="firstname">
              {" "}
              Company Name{" "}
            </label>
            <input
              className="applyforminput"
              required
              type="text"
              name="companyname"
              id="companyname"
              placeholder=""
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />

            <label className="applylabel">Location </label>
            <input
              className="applyforminput"
              required
              type="text"
              name="location"
              placeholder=""
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />

            <label className="applylabel">Workplace Type </label>
            <select
              className="applyformselect"
              name="workplacetype"
              onChange={(e) => {
                setWorkplace(e.target.value);
              }}
            >
              <option value="0">Select One</option>
              <option value="Onsite">Onsite</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </select>
            <label className="applylabel">Employment Type </label>
            <select
              className="applyformselect"
              required
              name="employmentype"
              onChange={(e) => {
                setEmployment(e.target.value);
              }}
            >
              <option value="0">Select One</option>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Attachment">Attachment</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Part-time">Part-time</option>
            </select>
            <label className="applylabel">Job Description </label>
            <textarea
              className="createforminput"
              required
              type="text"
              name="description"
              placeholder=""
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />

            <label className="applylabel">Job Responsibility </label>
            <textarea
              className="createforminput"
              type="text"
              name="responsibility"
              placeholder=""
              onChange={(e) => {
                setResponsibility(e.target.value);
              }}
            />

            <label className="applylabel">Qualifications </label>
            <textarea
              className="createforminput"
              required
              type="text"
              name="qualification"
              placeholder=""
              onChange={(e) => {
                setQualifications(e.target.value);
              }}
            />

            <div className="applicantstyle">
              <h3>For External Application Add Website Url</h3>

                <div>
                  <label className="applylabel" for="urlsite">
                    {" "}
                    Website Address{" "}
                  </label>
                  <input
                    className="applyforminput"
                    value={externalAddress}
                    type="url"
                    name="urlsite"
                    id="urlsite"
                    placeholder=""
                    onChange={(e) => {
                      setExternalAddress(e.target.value);
                    }}
                  />
                </div>
             
            </div>

            <button className="applybtn" type="submit">
              Create Job{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createjob;
