import React from 'react'

export default function Portfolio() {
  const projects = [
    { title: 'Project One', description: 'Description for project one.' },
    { title: 'Project Two', description: 'Description for project two.' },
    { title: 'Project Three', description: 'Description for project three.' }
  ]

  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Portfolio</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <div key={idx} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <div className="h-40 bg-gray-200 rounded-md" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{proj.title}</h2>
                <p>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
