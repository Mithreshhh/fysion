"use client";

import { Navbar } from "@/components/Navbar";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { TransitionLink } from "@/components/TransitionLink";

const services = [
  {
    id: 1,
    icon: "📱",
    title: "Social Media Management",
    description: "Full Instagram handling with content strategy, captions, engagement & analytics.",
    features: [
      "Content Strategy & Planning",
      "Professional Caption Writing",
      "Active Community Engagement",
      "Detailed Analytics & Reporting"
    ],
    gradient: "from-purple-500 via-pink-500 to-purple-500"
  },
  {
    id: 2,
    icon: "🎬",
    title: "Content Creation",
    description: "15+ reels per month filmed and edited for viral reach.",
    features: [
      "Professional Filming",
      "Expert Video Editing",
      "Viral-Worthy Content",
      "Consistent Monthly Output"
    ],
    gradient: "from-blue-500 via-cyan-500 to-blue-500"
  },
  {
    id: 3,
    icon: "📸",
    title: "Media Production",
    description: "Professional video & photo shoots for products, services & brand image.",
    features: [
      "Product Photography",
      "Brand Video Production",
      "Service Showcases",
      "Professional Equipment"
    ],
    gradient: "from-orange-500 via-red-500 to-orange-500"
  },
  {
    id: 4,
    icon: "🌐",
    title: "Websites",
    description: "Design, redesign, and monthly maintenance with SEO optimization.",
    features: [
      "Custom Website Design",
      "Complete Redesign Services",
      "Monthly Maintenance",
      "SEO Optimization"
    ],
    gradient: "from-green-500 via-emerald-500 to-green-500"
  },
  {
    id: 5,
    icon: "🎯",
    title: "Meta Ads & SEO",
    description: "Run ad campaigns and improve visibility.",
    features: [
      "Facebook & Instagram Ads",
      "Ad Campaign Management",
      "Search Engine Optimization",
      "Visibility Improvement"
    ],
    gradient: "from-indigo-500 via-blue-500 to-indigo-500"
  },
  {
    id: 6,
    icon: "💼",
    title: "Lead Funnel & Nurturing",
    description: "Automated DMs, call follow-ups, and conversion tracking.",
    features: [
      "Automated DM Sequences",
      "Strategic Call Follow-ups",
      "Conversion Tracking",
      "Lead Nurturing System"
    ],
    gradient: "from-yellow-500 via-orange-500 to-yellow-500"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20">
          {/* Animated gradient background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
                  Our
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mt-4">
                  Services
                </span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" scrub={1.2}>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Complete digital growth solutions to help your brand thrive in the modern landscape.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="relative px-6 py-20 bg-black">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Fysion provides complete digital growth solutions including:
                </h2>
                <p className="text-lg text-gray-400">
                  Everything you need to build, grow, and scale your brand online
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative px-6 py-20 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation 
                  key={service.id}
                  animation="fade-up"
                  start="top 85%"
                  end="top 40%"
                >
                  <div className="group relative h-full">
                    <div className="relative overflow-hidden rounded-3xl transition-all duration-500 h-full hover:scale-[1.02]">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Border */}
                      <div className="absolute inset-0 rounded-3xl transition-all duration-500 border border-white/10 group-hover:border-white/20" />

                      {/* Content */}
                      <div className="relative p-8 h-full flex flex-col bg-black/40 backdrop-blur-sm min-h-[400px]">
                        {/* Icon */}
                        <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-110">
                          {service.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-base mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <div className="mt-auto space-y-2">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`} />
                              <span className="text-sm text-gray-500">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent transition-all duration-700 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:translate-x-full -translate-x-full" />
                    </div>

                    {/* Shadow */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl -z-10 transition-opacity duration-500 rounded-3xl`} />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services Section */}
        <section className="relative px-6 py-32 bg-black">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose Fysion?
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  We don't just deliver services—we build partnerships that drive real growth
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-3">Fast Execution</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Quick turnaround times without compromising on quality. Your campaigns launch on schedule.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-white mb-3">Data-Driven Results</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Every decision backed by analytics. Track progress with transparent reporting and measurable outcomes.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-white mb-3">Dedicated Support</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Your success is our priority. Direct communication and personalized service every step of the way.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-6 py-32 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <div className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent border border-white/10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Grow Your Brand?
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Explore our pricing plans and find the perfect solution for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <TransitionLink
                    href="/pricing"
                    className="px-10 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-smooth text-center"
                  >
                    Explore Pricing
                  </TransitionLink>
                  <a
                    href="mailto:hello@fysion.com"
                    className="px-10 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/20 transition-smooth text-center"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-black border-t border-white/10 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Fysion. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

