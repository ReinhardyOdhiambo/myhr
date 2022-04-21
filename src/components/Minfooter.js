import React from 'react'
import './Minfooter.css'
import { Link } from 'react-router-dom'

const Minfooter = () => {
  return (
    <div className='minifooter'>
        <div className='minfooterlink'>
            <Link to='/' className='minfooterlinks'><h5>About Us</h5></Link>
            <Link to='/' className='minfooterlinks'><h5>Contact Us</h5></Link>
            <Link to='/' className='minfooterlinks'><h5>Advertisment</h5></Link>
            <Link to='/' className='minfooterlinks'><h5>Privacy&Terms</h5></Link>
        </div>
        <div className='miniligo'>
            <h3>Connection<span className='minilogospan'>.254</span></h3>
        </div>
    </div>
  )
}

export default Minfooter