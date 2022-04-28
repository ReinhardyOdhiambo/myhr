import React from 'react'
import  './Topbar.css'
import { useNavigate, Link } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { AddBox, Bookmark, CorporateFare, Save, SaveAlt, Work, WorkHistory } from '@mui/icons-material';

const Topbar = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='nav'>
        <Link  to='/' className='logolink'>
        <div className='logoarea'>
            <h3 className='logoname'>CONNECTION<span className='logo254'>.254</span></h3>
        </div>
        </Link>
        <div className='menuitems'>
        

            
              
            { user?
            <div className='menuitems'>
            <Link to='/' className='navitems'>Home</Link>
            <Link to='/myjobs' className='navitems'> My Jobs</Link>
            <Link to='/' className='navitems'>Saved</Link>
            <div className='responsiveicons'>
              <Link to='/jobs'><Work  className='responsiveicon'/> </Link>
              <Link to='/myjobs'><CorporateFare  className='responsiveicon'/></Link>
              <Link to='/createjob'><AddBox   className='responsiveicon'/></Link>
              <Link to='/'><Bookmark   className='responsiveicon'/></Link>
            </div>
            <Link to= '/profile'><img  className='profileicon' src={user.photoURL} alt=''/></Link> 
            

            <button onClick={handleLogout} className='logoutbtn'>Logout</button>
            </div>:
            <div className='menuitems'>
            <Link to='/signup'><button className='joinbttn'>Join now</button></Link>
            <Link to='/login'><button className='loginbttn'>Login</button></Link>

            </div>
            
           
           
             }
        </div>

    </div>
  )
}

export default Topbar