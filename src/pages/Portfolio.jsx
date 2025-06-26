import React from 'react'

export default function Portfolio() {
  const projects = [
    { title: 'Project One', description: 'Description for project one.' },
    { title: 'Project Two', description: 'Description for project two.' },
    { title: 'Project Three', description: 'Description for project three.' }
  ]

  return (
    <div className="max-w-5xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Portfolio</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{proj.title}</h2>
            <p className="mt-2 text-gray-600">{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
