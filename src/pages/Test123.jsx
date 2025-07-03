import React from 'react'

export default function Test123() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-engineering-50 via-white to-tech-50">
        <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-engineering-900 mb-6 animate-slide-up">
              Test 123
            </h1>
            <p className="text-xl text-tech-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
              This is a test page demonstrating the professional design system and component architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Visual Element */}
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-engineering-100 to-tech-100 rounded-2xl flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-engineering-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-4xl">123</span>
                      </div>
                      <p className="text-tech-500 font-medium">Test Page Element</p>
                    </div>
                  </div>
                  {/* Floating accent elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-200 rounded-full opacity-60 animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-engineering-200 rounded-full opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 md:order-2">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-display font-bold text-engineering-900 mb-6">
                      Test Page Features
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-engineering-500 to-accent-500 rounded-full mb-8"></div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-tech-700 leading-relaxed mb-6">
                      This test page demonstrates the <strong className="text-engineering-900">professional design system</strong> used throughout the Human-Centered Systems LLC website. It showcases consistent typography, color schemes, and component patterns.
                    </p>

                    <p className="text-tech-700 leading-relaxed mb-6">
                      The page includes responsive design elements, gradient backgrounds, and the same <strong className="text-engineering-900">engineering-focused aesthetic</strong> found across all site pages.
                    </p>

                    <p className="text-tech-700 leading-relaxed">
                      Built with <strong className="text-engineering-900">React</strong>, <strong className="text-engineering-900">Tailwind CSS</strong>, and <strong className="text-engineering-900">DaisyUI</strong> components for a cohesive user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 bg-gradient-to-br from-base-100 to-tech-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-engineering-900 mb-6">
                Design Elements
              </h2>
              <p className="text-xl text-tech-600 max-w-2xl mx-auto">
                Key components of the professional design system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎨",
                  title: "Visual Design",
                  description: "Consistent color palette and typography throughout the site.",
                  gradient: "from-engineering-500 to-engineering-600"
                },
                {
                  icon: "📱",
                  title: "Responsive Layout",
                  description: "Optimized for mobile, tablet, and desktop viewing experiences.",
                  gradient: "from-accent-500 to-accent-600"
                },
                {
                  icon: "⚡",
                  title: "Performance",
                  description: "Fast loading times with modern React and Vite architecture.",
                  gradient: "from-tech-500 to-tech-600"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-tech-100"
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-display font-bold text-engineering-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-tech-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
