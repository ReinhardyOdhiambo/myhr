import React from 'react'
import { Link } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';

const Topmenubar = ({setNavMenu,navMenu}) => {
const close = (e) => {
   
      setNavMenu(false);
    

  };
  const {user}=useUserAuth();

  return (
    <>
    {user && navMenu?
    <div className='topmenubar'>
    <Link to='/' className='navmenubaritems' onClick={close}>Home</Link>
    <Link to='/' className='navmenubaritems'  onClick={close}>Jobs</Link>
    <Link to='/myjobs' className='navmenubaritems'  onClick={close}>My Jobs</Link>
    <Link to='/createjob' className='navmenubaritems'  onClick={close}>Post Job</Link>
    <Link to='/' className='navmenubaritems '  onClick={close}>Saved</Link>
    


</div>:null

    }
    </>
    
  )
}

export default Topmenubar