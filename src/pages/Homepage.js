import React, { useState } from 'react'
import './Homepage.css'
import { useNavigate,useParams } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext.js'
import Jobs from '../components/Jobs.js'
import Applyform from '../components/Applyform.js';
import Createjob from '../components/Createjob.js';
import Jobdetails from '../components/Jobdetails.js';
import Sidenav from '../components/Sidenav'
import Recomendedjobs from '../components/Recomendedjobs'

const Homepage = () => {
 

  
  return (
    <div className='homepage'>
      <Jobs/>
      <Sidenav/>
      
    
    </div>
  );
};

export default Homepage

/*<div className="">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div>
        <button  onClick={handleLogout}> LogOut</button>
      </div>*/