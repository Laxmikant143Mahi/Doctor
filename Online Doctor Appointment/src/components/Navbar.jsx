import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Doctor Appointment
        </Link>
        
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">
            Register
          </Link>
          <Link to="/user-login" className="text-white hover:text-blue-200">
            Login
          </Link>
          <Link to="/home" className="text-white hover:text-blue-200">
            Home
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
