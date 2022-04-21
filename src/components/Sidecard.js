import React from 'react'
import './Sidecard.css'
import { Link, useNavigate } from 'react-router-dom'

const Sidecard = () => {
    let navigate=useNavigate();

  return (
    <div>
        <div className='sidecard'>
            <h3>You're Signed out</h3>
            <p>Sign in for the full experience</p>
            <Link to='/login'><button className='sbttn'>Sign In</button></Link>
            <Link to='/signup'><button className='lbttn'>Join now</button></Link>

        </div>
    </div>
  )
}

export default Sidecard