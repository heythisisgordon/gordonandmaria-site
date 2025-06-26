import React from 'react'

export default function Contact() {
  return (
    <section className="hero bg-base-200 min-h-screen py-12">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="py-6">Reach out to discuss projects or collaborations.</p>
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form action="https://example.com/contact-submit" method="POST">
              <div className="form-control">
                <label htmlFor="name" className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="message" className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="textarea textarea-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
