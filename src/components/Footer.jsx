import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Human-Centered Systems LLC</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-gray-800">Twitter</a>
          <a href="#" className="hover:text-gray-800">LinkedIn</a>
          <a href="#" className="hover:text-gray-800">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
