import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Main from './pages/Main'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import InfoSession from './pages/InfoSession'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-4 flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/portfolio" className="hover:underline">Portfolio</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/info-session" className="hover:underline">Info Session</Link>
        </div>
      </nav>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info-session" element={<InfoSession />} />
        </Routes>
      </main>
      <footer className="bg-gray-100 text-center py-4">
        &copy; {new Date().getFullYear()} Human-Centered Systems LLC
      </footer>
    </div>
  )
}

export default App
