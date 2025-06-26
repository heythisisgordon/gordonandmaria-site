import React from 'react'

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title">Human-Centered Systems LLC</span>
        <a href="/" className="link link-hover">Home</a>
        <a href="/about" className="link link-hover">About</a>
        <a href="/research" className="link link-hover">Research</a>
        <a href="/portfolio" className="link link-hover">Portfolio</a>
        <a href="/resume" className="link link-hover">Resume</a>
        <a href="/contact" className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <a href="#" className="link link-hover">Twitter</a>
        <a href="#" className="link link-hover">LinkedIn</a>
        <a href="#" className="link link-hover">GitHub</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="#" className="link link-hover">Privacy Policy</a>
        <a href="#" className="link link-hover">Terms of Service</a>
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <a href="mailto:info@humancenteredsystems.io" className="link link-hover">
          info@humancenteredsystems.io
        </a>
      </div>
    </footer>
  )
}
