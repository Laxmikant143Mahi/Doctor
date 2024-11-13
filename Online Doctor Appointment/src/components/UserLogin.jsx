import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './UserLogin.css'

const UserLogin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Get stored user data
    const storedUserData = JSON.parse(localStorage.getItem('userData'))
    
    if (storedUserData && 
        storedUserData.userId === formData.userId && 
        storedUserData.password === formData.password) {
      // Successful login
      setError('')
      // Store login status
      localStorage.setItem('isLoggedIn', 'true')
      // Navigate to home page
      navigate('/home')
    } else {
      setError('Invalid credentials. Please try again.')
    }
  }

  return (
    <div className="container">
      <h2>User Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default UserLogin
