import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import UserRegistration from './components/UserRegistration'
import HomePage from './components/HomePage'
import UserLogin from './components/UserLogin'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<UserRegistration />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
