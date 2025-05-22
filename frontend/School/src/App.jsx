import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx' 
import Login from './pages/login.jsx'
import Dashboard from './pages/dashboard.jsx'
import Students from './pages/Students.jsx'
import Teachers from './pages/teachers.jsx'
import Courses from './pages/courses.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Hello School Management System
        </h1>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
