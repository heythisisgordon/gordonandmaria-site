import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function StudentShowcase() {
  const { studentId } = useParams()
  const [student, setStudent] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Mock data - in production this would come from a backend
  const mockStudentData = {
    name: 'Sample Student',
    description: 'This is a sample project showcasing basic programming concepts.',
    submissionDate: '2025-06-26',
    files: [
      {
        name: 'hello_world.py',
        content: `# My first Python program
print("Hello, World!")
print("Welcome to Vibe Coding 101!")

# Simple calculation
x = 10
y = 20
result = x + y
print(f"The sum of {x} and {y} is {result}")`,
        language: 'python'
      },
      {
        name: 'styles.css',
        content: `/* Basic styling for my webpage */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
    color: #333;
    text-align: center;
}`,
        language: 'css'
      }
    ]
  }

  useEffect(() => {
    // Simulate loading student data
    setTimeout(() => {
      setStudent(mockStudentData)
      setLoading(false)
    }, 1000)
  }, [studentId])

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    // In production, this would verify against the stored password
    if (password === 'demo123') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password. Try "demo123" for this demo.')
    }
  }

  const getLanguageClass = (language) => {
    const languageMap = {
      python: 'language-python',
      javascript: 'language-javascript',
      html: 'language-html',
      css: 'language-css',
      java: 'language-java',
      cpp: 'language-cpp'
    }
    return languageMap[language] || 'language-text'
  }

  if (loading) {
    return (
      <section className="bg-base-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="loading loading-spinner loading-lg"></div>
          <p className="mt-4">Loading showcase...</p>
        </div>
      </section>
    )
  }

  if (!student) {
    return (
      <section className="bg-base-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="card bg-base-100 shadow-lg max-w-md mx-auto">
            <div className="card-body">
              <h2 className="card-title">Student Not Found</h2>
              <p>The requested student showcase could not be found.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (!isAuthenticated) {
    return (
      <section className="bg-base-200 py-12">
        <div className="container mx-auto px-4">
          <div className="card bg-base-100 shadow-lg max-w-md mx-auto">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Access Protected Showcase</h2>
              <p className="text-center mb-6">Enter the password to view this student's code showcase.</p>
              
              {error && (
                <div className="alert alert-error mb-4">
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handlePasswordSubmit}>
                <div className="form-control mb-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Access Showcase
                </button>
              </form>
              
              <div className="text-center mt-4 text-sm text-base-content/60">
                <p>Demo password: demo123</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Student Header */}
        <div className="card bg-base-100 shadow-lg mb-8">
          <div className="card-body">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">{student.name}'s Code Showcase</h1>
              <div className="badge badge-primary">Vibe Coding 101</div>
            </div>
            <p className="text-base-content/70 mb-4">{student.description}</p>
            <div className="text-sm text-base-content/60">
              Submitted: {new Date(student.submissionDate).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Code Files */}
        <div className="space-y-6">
          {student.files.map((file, index) => (
            <div key={index} className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{file.name}</h3>
                  <div className="badge badge-outline">{file.language}</div>
                </div>
                
                <div className="mockup-code">
                  <pre className="px-4 py-2">
                    <code className={getLanguageClass(file.language)}>
                      {file.content}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="card bg-base-100 shadow-lg mt-8">
          <div className="card-body">
            <h3 className="card-title mb-4">Share This Showcase</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="btn btn-outline"
                onClick={() => navigator.clipboard.writeText(window.location.href)}
              >
                Copy Link
              </button>
              <button className="btn btn-primary">
                Download Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
