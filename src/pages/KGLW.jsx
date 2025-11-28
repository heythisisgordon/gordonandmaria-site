import React from 'react'

export default function KGLW() {
  return (
    <main id="kglw-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            King Gizzard and the Lizard Wizard 🎸
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Browse our collection of King Gizzard music
          </p>
        </div>
      </section>

      {/* OneDrive Embed Section */}
      <section className="py-8 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="bg-base-200 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://1drv.ms/f/c/bf7fcbdbb5f6344f/EkXxoTNG5TNBsbJNI8_lkvIBWQajLt0qvYY3xYtg6-tYYg?e=4a1D9d"
              width="100%"
              height="800"
              frameBorder="0"
              scrolling="yes"
              className="w-full"
              title="King Gizzard and the Lizard Wizard Collection"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
