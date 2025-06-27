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
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info-session" element={<InfoSession />} />
          <Route path="/showcase/:studentId" element={<StudentShowcase />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
