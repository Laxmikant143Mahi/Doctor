import React, { useState } from 'react'
import './UserRegistration.css'
import { Route, useNavigate } from 'react-router-dom'
import UserLogin from './UserLogin'

const UserRegistration = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    idProof: '',
    address: '', 
    userId: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'idProof' ? value.replace(/[^0-9]/g, '').slice(0, 12) : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      localStorage.setItem('userData', JSON.stringify(formData))
      setSuccess('Registration successful!')
      alert('Registration successful!')
      
      navigate('/user-login')
    
      setError('')
      setFormData({
        fullName: '',
        mobile: '',
        idProof: '',
        address: '',
        userId: '',
        password: ''
      })
    } catch (err) {

      setSuccess('')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Registration</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Aadhar Card Number:</label>
          <input
            type="text"
            name="idProof"
            value={formData.idProof}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            pattern="[0-9]{12}"
            maxLength="12"
            placeholder="Enter 12 digit Aadhar number"
            title="Please enter valid 12 digit Aadhar number"
            required
          />
          {formData.idProof && formData.idProof.length !== 12 && (
            <p className="text-red-500 text-sm mt-1">Please enter 12 digits Aadhar number</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default UserRegistration
