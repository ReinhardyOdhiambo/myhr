import React from 'react'
import { Link } from 'react-router-dom'

const Topmenubar = ({setNavMenu,navMenu}) => {
const close = (e) => {
   
      setNavMenu(false);
    

  };

  return (
    <>
    {navMenu?
    <div className='topmenubar'>
    <Link to='/' className='navmenubaritems' onClick={close}>Home</Link>
    <Link to='/' className='navmenubaritems'  onClick={close}>Jobs</Link>
    <Link to='/createjob' className='navmenubaritems'  onClick={close}>Post Job</Link>
    <Link to='/' className='navmenubaritems '  onClick={close}>Saved</Link>
    


</div>:null

    }
    </>
    
  )
}

export default Topmenubar