import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './pages/Main'
import About from './pages/About'
import Research from './pages/Research'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import InfoSession from './pages/InfoSession'
import StudentShowcase from './pages/StudentShowcase'
import VibeCoding101 from './pages/VibeCoding101'
import VibeCoding101Register from './pages/VibeCoding101Register'
import Test123 from './pages/Test123'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/test123" element={<Test123 />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info-session" element={<InfoSession />} />
          <Route path="/showcase/:studentId" element={<StudentShowcase />} />
          
          {/* Workshop Routes */}
          <Route path="/vibecoding101" element={<VibeCoding101 />} />
          <Route path="/vibe-coding-101" element={<VibeCoding101 />} />
          <Route path="/vibecoding101/register" element={<VibeCoding101Register />} />
          <Route path="/vibe-coding-101/register" element={<VibeCoding101Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
