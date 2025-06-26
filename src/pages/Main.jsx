import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className="text-center py-12">
      <h1 className="text-5xl font-bold">Welcome to Vibe Coding 101</h1>
      <p className="mt-4 text-lg text-gray-700">
        A short introduction to our session goals.
      </p>
      <Link to="/info-session">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Go to Info Session
        </button>
      </Link>
    </div>
  )
}
