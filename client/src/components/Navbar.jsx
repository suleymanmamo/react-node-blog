import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

function Navbar() {

  const {login, logout, currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Service_mark.svg/2560px-Service_mark.svg.png" alt="" />
          </Link>
        </div>
        <div className='links'>
          <Link className='link' to="/?cat=art"><h6>Art</h6></Link>
          <Link className='link' to="/?cat=cinema"><h6>Cinema</h6></Link>
          <Link className='link' to="/?cat=technology"><h6>Technology</h6></Link>
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar