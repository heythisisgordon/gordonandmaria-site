import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="hero-content text-center text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Our Family! 👨‍👩‍👧‍👦
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Hey there! We're Gordon and Maria, and this is our little corner of the internet.
              Whether you're part of our family or just stopping by - we're so glad you're here!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Say Hello! 💌
              </Link>
              <Link to="/portal" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-blue-700">
                Family Portal 🔗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              A Little About Us
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              We believe in the power of family, connection, and sharing life's moments together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">👨‍💼</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Gordon
                </h3>
                <p>
                  Tech enthusiast, foster dad, and someone who believes in building connections 
                  that last. You might catch my latest projects and thoughts on my YouTube channel!
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">👩‍🎨</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Maria
                </h3>
                <p>
                  Creative soul, loving mom, and the heart of our home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Stay Connected With Us! 📱
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Follow our adventures, projects, and daily life across our social media channels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card bg-white bg-opacity-10 shadow-lg">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">📺</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Gordon's YouTube
                </h3>
                <p className="mb-6">
                  Tech tutorials, project builds, and behind-the-scenes content
                </p>
                <div className="card-actions justify-center">
                  <a 
                    href="#" 
                    className="btn btn-outline text-white border-white hover:bg-white hover:text-purple-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Latest Videos
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-white bg-opacity-10 shadow-lg">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">🎵</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Maria's TikTok
                </h3>
                <p className="mb-6">
                  Family moments, creative projects, and daily life snippets
                </p>
                <div className="card-actions justify-center">
                  <a 
                    href="#" 
                    className="btn btn-outline text-white border-white hover:bg-white hover:text-purple-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow Our Journey
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-white bg-opacity-10 shadow-lg">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">🌤️</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Our BlueSky
                </h3>
                <p className="mb-6">
                  Thoughts, updates, and conversations with our community
                </p>
                <div className="card-actions justify-center">
                  <a 
                    href="#" 
                    className="btn btn-outline text-white border-white hover:bg-white hover:text-purple-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join the Conversation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Latest From Our Feeds
            </h2>
            <p className="text-xl">
              Catch up on what we've been sharing lately
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">YT</span>
                  </div>
                  <h3 className="card-title text-lg">Latest YouTube Video</h3>
                </div>
                <div className="bg-base-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-base-content opacity-50">Video Preview Coming Soon</span>
                </div>
                <p className="text-sm opacity-75">
                  We're working on integrating live video feeds here!
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">TT</span>
                  </div>
                  <h3 className="card-title text-lg">Recent TikTok</h3>
                </div>
                <div className="bg-base-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-base-content opacity-50">TikTok Preview Coming Soon</span>
                </div>
                <p className="text-sm opacity-75">
                  Live TikTok feed integration coming soon!
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">BS</span>
                  </div>
                  <h3 className="card-title text-lg">BlueSky Update</h3>
                </div>
                <div className="bg-base-200 h-32 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-base-content opacity-50">BlueSky Feed Coming Soon</span>
                </div>
                <p className="text-sm opacity-75">
                  BlueSky integration in development!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            We'd Love to Hear From You! 💕
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you want to catch up, share what's new in your life, or just say hello - 
            our inbox is always open for family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Send Us a Message 📩
            </Link>
            <Link to="/portal" className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary">
              Check Out the Portal 🚀
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
