import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [err, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev =>({ ...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login")
    }
    catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
          <input required type="text" name='username' onChange={handleChange} placeholder="Username" />
          <input required type="email" name='email'  onChange={handleChange} placeholder="Email" />
          <input required type="password" name='password' onChange={handleChange} placeholder="Password" />
          <button onClick={handleSubmit} className='button' type="submit">Register</button>
          {err & <p>{err}</p>}
          <span>Don't you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register