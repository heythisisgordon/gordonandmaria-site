import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <main id="main-content" className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen hero-pattern text-white overflow-hidden">
        {/* Background Pattern is now built into hero-pattern class */}
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-500/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-engineering-500/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent-400/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative z-10 hero min-h-screen">
          <div className="hero-content text-center animate-fade-in">
            <div className="max-w-5xl">
              <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight animate-slide-up">
                <span className="bg-gradient-to-r from-white via-engineering-200 to-accent-300 bg-clip-text text-transparent">
                  Advanced Engineering.
                </span>
                <br />
                <span className="text-white">Human-Centered Design.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-engineering-100 py-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                Bridging complex technical challenges with intuitive, people-first solutions. 
                We deliver engineering excellence that puts human needs at the center of innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
                <Link 
                  to="/portfolio" 
                  className="btn btn-primary btn-lg px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  aria-label="View our portfolio of engineering projects"
                >
                  <span>View Our Work</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  to="/contact" 
                  className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-engineering-900 btn-lg px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                  aria-label="Contact us to start your project"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-to-r from-base-100 to-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-engineering-900 mb-6">
              Engineering Excellence
            </h2>
            <p className="text-xl text-tech-600 max-w-3xl mx-auto">
              We combine advanced technical expertise with human-centered design principles to deliver solutions that work for people.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Systems Engineering",
                description: "Complex system design and integration with focus on reliability and performance.",
                icon: "⚙️",
                color: "engineering"
              },
              {
                title: "Human-Centered Design",
                description: "User research and design thinking applied to technical challenges.",
                icon: "👥",
                color: "accent"
              },
              {
                title: "Innovation & Prototyping",
                description: "Rapid prototyping and concept realization for breakthrough solutions.",
                icon: "🚀",
                color: "secondary"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-tech-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-display font-semibold text-engineering-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-tech-600 leading-relaxed">
                  {service.description}
                </p>
                <div className={`mt-6 h-1 bg-gradient-to-r from-${service.color}-500 to-${service.color}-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-engineering-600 to-tech-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-engineering-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help solve your complex engineering challenges with human-centered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn btn-secondary btn-lg px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Started Today
            </Link>
            <Link 
              to="/info-session" 
              className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-engineering-900 btn-lg px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Join Vibe Coding 101
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
