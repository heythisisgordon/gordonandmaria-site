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

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info-session" element={<InfoSession />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
