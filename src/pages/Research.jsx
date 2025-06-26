import React from 'react'

export default function Research() {
  const caseStudies = [
    { title: 'Case Study One', summary: 'Brief summary of case study one.' },
    { title: 'Case Study Two', summary: 'Brief summary of case study two.' },
    { title: 'Case Study Three', summary: 'Brief summary of case study three.' }
  ]

  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Research</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title">{study.title}</h2>
                <p>{study.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
