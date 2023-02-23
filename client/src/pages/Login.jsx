import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  })

  const [err, setError] = useState(null);
  
  const navigate = useNavigate();

  const {currentUser, login} = useContext(AuthContext);
  

  const handleChange = (e) => {
    setInputs(prev =>({ ...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate("/")
    }
    catch (err) {
      setError(err.response.data)
    }
  }
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input required onChange={handleChange} type="text" name='username' placeholder="Username" />
            <input required onChange={handleChange} type="password" name='password' placeholder="Password" />
            <button onClick={handleSubmit} className='button' type="submit">Login</button>
            {err & <p>{err}</p>}
            <span>Don't you have an account? <Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login