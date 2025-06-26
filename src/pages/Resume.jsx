import React from 'react'

export default function Resume() {
  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <div className="card bg-base-100 shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-center">Resume</h1>
          <p className="mb-4">
            Placeholder for downloadable resume or embedded resume sections.
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Experience:</strong> [Your experience here]</li>
            <li><strong>Education:</strong> [Your education here]</li>
            <li><strong>Skills:</strong> [Your skills here]</li>
          </ul>
          <div className="text-center mt-6">
            <a 
              href="/resume.pdf" 
              className="btn btn-primary"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
