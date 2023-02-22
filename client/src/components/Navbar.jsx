import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Service_mark.svg/2560px-Service_mark.svg.png" alt="" />
        </div>
        <div className='links'>
          <Link className='link' to="/?cat=art"><h6>Art</h6></Link>
          <Link className='link' to="/?cat=cinema"><h6>Cinema</h6></Link>
          <Link className='link' to="/?cat=technology"><h6>Technology</h6></Link>
          <span>John</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar