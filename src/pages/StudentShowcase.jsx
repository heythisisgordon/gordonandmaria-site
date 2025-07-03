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
    description: 'This is a sample project showcasing basic programming concepts and nostalgic language resurrections.',
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
    ],
    resurrections: [
      {
        title: 'QBasic Starfield Animation',
        description: '1990s graphics code running at 60fps in modern browsers',
        sourceLanguage: 'QBasic',
        targetTech: 'HTML5 Canvas + JavaScript',
        nostalgicAppeal: 'high',
        aiGenerated: true,
        demoUrl: 'https://vibe-container-1-demos.onrender.com/qbasic-starfield.html',
        before: `' QBasic Starfield Program
SCREEN 13
DIM stars(100, 2)

' Initialize stars
FOR i = 1 TO 100
    stars(i, 0) = RND * 320
    stars(i, 1) = RND * 200
NEXT i

DO
    CLS
    FOR i = 1 TO 100
        PSET (stars(i, 0), stars(i, 1)), 15
        stars(i, 0) = stars(i, 0) + 2
        IF stars(i, 0) > 320 THEN
            stars(i, 0) = 0
            stars(i, 1) = RND * 200
        END IF
    NEXT i
    SLEEP 1
LOOP UNTIL INKEY$ <> ""`,
        after: `// Modern JavaScript equivalent
class StarfieldAnimation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.stars = [];
    this.initStars();
    this.animate();
  }

  initStars() {
    for (let i = 0; i < 100; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        speed: Math.random() * 3 + 1
      });
    }
  }

  animate() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.stars.forEach(star => {
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(star.x, star.y, 2, 2);
      
      star.x += star.speed;
      if (star.x > this.canvas.width) {
        star.x = 0;
        star.y = Math.random() * this.canvas.height;
      }
    });
    
    requestAnimationFrame(() => this.animate());
  }
}`
      },
      {
        title: 'Pascal Fire Effect',
        description: 'Classic demo scene fire animation brought to HTML5 Canvas',
        sourceLanguage: 'Pascal',
        targetTech: 'HTML5 Canvas + JavaScript',
        nostalgicAppeal: 'high',
        aiGenerated: true,
        demoUrl: 'https://vibe-container-2-demos.onrender.com/pascal-fire.html',
        before: `{ Pascal Fire Effect }
program FireEffect;
uses crt, dos;

var
  Fire: array[0..199, 0..319] of byte;
  x, y: integer;

procedure InitFire;
begin
  for x := 0 to 319 do
    Fire[199, x] := random(256);
end;

procedure UpdateFire;
begin
  for y := 0 to 198 do
    for x := 0 to 319 do
      Fire[y, x] := (Fire[y+1, x] + 
                     Fire[y+1, (x-1) and 319] + 
                     Fire[y+1, (x+1) and 319]) div 3;
end;

begin
  InitGraph;
  repeat
    InitFire;
    UpdateFire;
    DrawFire;
  until keypressed;
end.`,
        after: `// Modern JavaScript Fire Effect
class FireEffect {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.fire = new Array(this.height);
    
    for (let i = 0; i < this.height; i++) {
      this.fire[i] = new Array(this.width).fill(0);
    }
    
    this.palette = this.createFirePalette();
    this.animate();
  }

  createFirePalette() {
    const palette = [];
    for (let i = 0; i < 256; i++) {
      const r = Math.min(255, i * 3);
      const g = Math.min(255, Math.max(0, i * 3 - 128));
      const b = Math.max(0, i - 192);
      palette[i] = \`rgb(\${r},\${g},\${b})\`;
    }
    return palette;
  }

  updateFire() {
    // Initialize bottom row with random values
    for (let x = 0; x < this.width; x++) {
      this.fire[this.height - 1][x] = Math.floor(Math.random() * 256);
    }
    
    // Update fire effect
    for (let y = 0; y < this.height - 1; y++) {
      for (let x = 0; x < this.width; x++) {
        const left = (x - 1 + this.width) % this.width;
        const right = (x + 1) % this.width;
        
        this.fire[y][x] = Math.floor(
          (this.fire[y + 1][x] + 
           this.fire[y + 1][left] + 
           this.fire[y + 1][right]) / 3
        );
      }
    }
  }

  render() {
    const imageData = this.ctx.createImageData(this.width, this.height);
    
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const intensity = this.fire[y][x];
        const index = (y * this.width + x) * 4;
        
        const r = Math.min(255, intensity * 3);
        const g = Math.min(255, Math.max(0, intensity * 3 - 128));
        const b = Math.max(0, intensity - 192);
        
        imageData.data[index] = r;     // Red
        imageData.data[index + 1] = g; // Green
        imageData.data[index + 2] = b; // Blue
        imageData.data[index + 3] = 255; // Alpha
      }
    }
    
    this.ctx.putImageData(imageData, 0, 0);
  }

  animate() {
    this.updateFire();
    this.render();
    requestAnimationFrame(() => this.animate());
  }
}`
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

        {/* Resurrect-a-Dead-Language Showcase */}
        {student.resurrections && student.resurrections.length > 0 && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              🎮 Nostalgic Programming Resurrections
            </h2>
            <p className="text-center text-base-content/70 mb-8 max-w-2xl mx-auto">
              Dead languages brought back to life with AI-assisted transpilation
            </p>

            <div className="space-y-8">
              {student.resurrections.map((resurrection, index) => (
                <div key={index} className="card bg-gradient-to-br from-secondary to-accent text-white shadow-2xl">
                  <div className="card-body">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">
                        <span className="text-3xl mr-2">
                          {resurrection.sourceLanguage === 'QBasic' ? '💾' :
                           resurrection.sourceLanguage === 'Pascal' ? '🔥' :
                           resurrection.sourceLanguage === 'Flash' ? '⚡' : '💻'}
                        </span>
                        {resurrection.title}
                      </h3>
                      <p className="text-lg opacity-90 mb-4">{resurrection.description}</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <div className="badge badge-lg bg-white bg-opacity-20 border-white border-opacity-30">
                          {resurrection.sourceLanguage} → {resurrection.targetTech}
                        </div>
                        {resurrection.aiGenerated && (
                          <div className="badge badge-lg bg-white bg-opacity-20 border-white border-opacity-30">
                            AI-Generated Transpiler
                          </div>
                        )}
                        <div className="badge badge-lg bg-white bg-opacity-20 border-white border-opacity-30">
                          {resurrection.nostalgicAppeal === 'high' ? 'High Nostalgia' : 'Classic Appeal'}
                        </div>
                      </div>
                    </div>

                    {/* Before/After Code Comparison */}
                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Before (Original) */}
                      <div className="card bg-base-100 text-base-content shadow-lg">
                        <div className="card-body">
                          <h4 className="card-title text-lg mb-4">
                            <span className="text-xl mr-2">📜</span>
                            Original {resurrection.sourceLanguage}
                          </h4>
                          <div className="mockup-code">
                            <pre className="px-4 py-2 text-sm">
                              <code>
                                {resurrection.before}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>

                      {/* After (Modern) */}
                      <div className="card bg-base-100 text-base-content shadow-lg">
                        <div className="card-body">
                          <h4 className="card-title text-lg mb-4">
                            <span className="text-xl mr-2">⚡</span>
                            Modern JavaScript
                          </h4>
                          <div className="mockup-code">
                            <pre className="px-4 py-2 text-sm">
                              <code className="language-javascript">
                                {resurrection.after}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Demo Link */}
                    <div className="text-center mt-6">
                      <a 
                        href={resurrection.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline text-white border-white border-opacity-50 hover:bg-white hover:text-primary"
                      >
                        🚀 View Live Demo
                      </a>
                    </div>

                    {/* Technical Achievement */}
                    <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg">
                      <h5 className="font-bold mb-2">Technical Achievement:</h5>
                      <p className="text-sm opacity-90">
                        This {resurrection.sourceLanguage} program from the {resurrection.sourceLanguage === 'QBasic' ? '1990s' : '1980s-1990s'} 
                        has been successfully transpiled to modern JavaScript using AI-assisted code transformation. 
                        The original logic and visual effects are preserved while leveraging modern browser capabilities 
                        like HTML5 Canvas and requestAnimationFrame for smooth 60fps performance.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
