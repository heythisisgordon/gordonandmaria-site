import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic React Application</h1>
        <p>This is a simple React starter project ready for enhancement.</p>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>
            Click the button to see React state management in action.
          </p>
        </div>
        
        <div className="info">
          <h2>Ready for AI Enhancement</h2>
          <p>This basic React app can be transformed with AI assistance to:</p>
          <ul>
            <li>Add modern UI components</li>
            <li>Implement responsive design</li>
            <li>Create interactive features</li>
            <li>Integrate with APIs</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App
