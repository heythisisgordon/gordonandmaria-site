import React from 'react'

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-engineering-50 via-white to-tech-50">
        <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-engineering-900 mb-6 animate-slide-up">
              About Human-Centered Systems LLC
            </h1>
            <p className="text-xl text-tech-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
              Bridging advanced engineering with human-centered design to create solutions that truly work for people.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo Placeholder */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-engineering-100 to-tech-100 rounded-2xl flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-engineering-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-4xl">GB</span>
                      </div>
                      <p className="text-tech-500 font-medium">Professional photo coming soon</p>
                    </div>
                  </div>
                  {/* Floating accent elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-200 rounded-full opacity-60 animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-engineering-200 rounded-full opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-display font-bold text-engineering-900 mb-6">
                      Founder & Principal Engineer
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-engineering-500 to-accent-500 rounded-full mb-8"></div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-tech-700 leading-relaxed mb-6">
                      <strong className="text-engineering-900">Gordon Banks</strong> founded Human-Centered Systems LLC to bridge the gap between advanced engineering solutions and human-centered design principles. As a systems engineer with extensive experience addressing complex global challenges, Gordon brings a unique perspective that combines technical rigor with empathy-driven innovation.
                    </p>

                    <p className="text-tech-700 leading-relaxed mb-6">
                      Gordon's career spans critical roles in defense technology and research, including his recent work developing advanced technologies at the <strong className="text-engineering-900">Counter-WMD Technologies Research Division, Defense Threat Reduction Agency</strong>. His leadership experience includes serving as Counter-UAS Test & Evaluation Lead for the Joint Improvised-Threat Defeat Organization and Branch Chief for Concept Realization, Innovation, and Prototyping at the Naval Explosive Ordnance Disposal Technology Division.
                    </p>

                    <p className="text-tech-700 leading-relaxed">
                      With a mechanical engineering degree from <strong className="text-engineering-900">Virginia Tech</strong> and pursuing a master's in systems engineering at <strong className="text-engineering-900">George Mason University</strong>, Gordon applies rigorous engineering methodology while maintaining focus on end-user needs and human factors.
                    </p>
                  </div>

                  {/* Credentials */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-engineering-50 rounded-lg p-4 border border-engineering-100">
                      <div className="text-engineering-600 text-sm font-medium">Education</div>
                      <div className="text-engineering-900 font-semibold">Virginia Tech</div>
                      <div className="text-engineering-700 text-sm">Mechanical Engineering</div>
                    </div>
                    <div className="bg-tech-50 rounded-lg p-4 border border-tech-100">
                      <div className="text-tech-600 text-sm font-medium">Pursuing</div>
                      <div className="text-tech-900 font-semibold">George Mason</div>
                      <div className="text-tech-700 text-sm">Systems Engineering</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-engineering-600 to-tech-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-accent-300 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-engineering-100 leading-relaxed max-w-3xl mx-auto">
              Human-Centered Systems LLC specializes in engineering solutions that prioritize people alongside technical excellence, ensuring that complex systems remain intuitive, reliable, and aligned with human needs.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-base-100 to-tech-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-engineering-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-tech-600 max-w-2xl mx-auto">
                The principles that guide our approach to engineering and design.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Human-Centered",
                  description: "Every solution starts with understanding the people who will use it.",
                  gradient: "from-engineering-500 to-engineering-600"
                },
                {
                  icon: "🔬",
                  title: "Technical Excellence",
                  description: "Rigorous engineering methodology combined with innovative thinking.",
                  gradient: "from-accent-500 to-accent-600"
                },
                {
                  icon: "🤝",
                  title: "Collaborative",
                  description: "Working closely with clients to understand their unique challenges.",
                  gradient: "from-tech-500 to-tech-600"
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-tech-100"
                >
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-display font-bold text-engineering-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-tech-600 leading-relaxed mb-6">
                    {value.description}
                  </p>
                  <div className={`h-1 bg-gradient-to-r ${value.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
