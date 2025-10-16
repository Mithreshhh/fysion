"use client";

import { Navbar } from "@/components/Navbar";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { InfoCard } from "@/components/InfoCard";
import { TransitionLink } from "@/components/TransitionLink";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
          {/* Animated gradient background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
                  About
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mt-4">
                  Fysion
                </span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" scrub={1.2}>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Bridging the gap between creativity and business growth through storytelling, marketing, and automation.
              </p>
            </ScrollAnimation>

          </div>
        </section>

        {/* Brand Story Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-6xl mx-auto w-full">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Our Story
              </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
            </ScrollAnimation>

            <div className="space-y-12">
              <ScrollAnimation animation="fade-up" scrub={1.2}>
                <div className="max-w-4xl mx-auto">
                  <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8 text-center font-light">
                    Fysion was founded to bridge the gap between creativity and business growth.
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-center">
                    We combine storytelling, marketing, and automation to help brands grow faster. 
                    Our approach is simple: understand your vision, craft compelling narratives, 
                    and deploy smart strategies that deliver measurable results.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" scrub={1.4}>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
                  <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Empower brands with creative solutions that drive real business growth and lasting impact.
                    </p>
                  </div>

                  <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-4xl mb-4">💡</div>
                    <h3 className="text-xl font-bold text-white mb-3">Our Approach</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Blending creativity with data-driven strategies to create meaningful connections and measurable results.
                    </p>
                  </div>

                  <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-bold text-white mb-3">Our Promise</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Deliver exceptional work that exceeds expectations and helps your brand thrive in the digital world.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" scrub={1.6}>
                <div className="max-w-3xl mx-auto mt-16 p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent border border-white/10">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="text-3xl">📍</div>
                    <h3 className="text-2xl font-bold text-white">Based in Hyderabad, India</h3>
                  </div>
                  <p className="text-lg text-gray-300 text-center leading-relaxed mb-4">
                    Working with clients globally to transform digital experiences and drive business growth across industries.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <span className="text-2xl">🌍</span>
                    <p className="text-sm">Serving clients worldwide with local expertise and global perspective</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale" scrub={1.8}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                  <TransitionLink
                    href="/projects"
                    className="px-10 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-smooth text-center"
                  >
                    View Our Work
                  </TransitionLink>
                  <a
                    href="mailto:hello@fysion.com"
                    className="px-10 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/20 transition-smooth text-center"
                  >
                    Contact Us
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Stats & Impact Section */}
        <section className="relative py-32 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  By The Numbers
              </h2>
                <p className="text-xl text-gray-400">Our impact, measured in results</p>
              </div>
            </ScrollAnimation>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              <ScrollAnimation animation="fade-up" start="top 85%" end="top 40%">
                <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border border-white/10 hover:border-purple-500/30 transition-all duration-500">
                  <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                    50+
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Projects Delivered</p>
                  <p className="text-gray-500 text-sm">Across diverse industries</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" start="top 85%" end="top 40%">
                <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                  <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
                    30+
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Happy Clients</p>
                  <p className="text-gray-500 text-sm">Growing businesses</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" start="top 85%" end="top 40%">
                <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent border border-white/10 hover:border-orange-500/30 transition-all duration-500">
                  <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 mb-3">
                    3+
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Years Experience</p>
                  <p className="text-gray-500 text-sm">Building brands</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" start="top 85%" end="top 40%">
                <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent border border-white/10 hover:border-green-500/30 transition-all duration-500">
                  <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-3">
                    10x
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Average ROI</p>
                  <p className="text-gray-500 text-sm">For our clients</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                </div>
              </ScrollAnimation>
            </div>

            {/* What We Do Cards */}
            <ScrollAnimation animation="fade-up" scrub={1.2}>
              <div className="text-center mb-16 mt-24">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  What We Do Best
                </h2>
                <p className="text-xl text-gray-400">Three pillars of digital excellence</p>
              </div>
              </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <div className="group relative p-10 rounded-3xl bg-black border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="text-5xl mb-6">🎨</div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      Design
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      Crafting stunning visual identities and user experiences that captivate audiences and build lasting brand connections.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-500 border border-white/10">Brand Identity</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-500 border border-white/10">UI/UX</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-500 border border-white/10">Graphics</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <div className="group relative p-10 rounded-3xl bg-black border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="text-5xl mb-6">💻</div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                      Development
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      Building powerful, scalable web solutions with cutting-edge technologies that perform flawlessly and drive results.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-500 border border-white/10">Web Apps</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-500 border border-white/10">APIs</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-500 border border-white/10">E-commerce</span>
                    </div>
            </div>
          </div>
              </ScrollAnimation>

              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <div className="group relative p-10 rounded-3xl bg-black border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="text-5xl mb-6">📈</div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-orange-400 transition-all">
                      Marketing
                  </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      Strategic campaigns that amplify your brand, engage your audience, and deliver measurable growth and ROI.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-500 border border-white/10">Social Media</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-500 border border-white/10">SEO</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-500 border border-white/10">Content</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-black border-t border-white/10 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <span className="text-white text-xl font-bold">F</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-wider">FYSION</span>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Transforming visions into digital reality
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <TransitionLink href="/home" className="text-gray-400 hover:text-white transition-colors">
              Home
            </TransitionLink>
            <TransitionLink href="/projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </TransitionLink>
            <TransitionLink href="/pricing" className="text-gray-400 hover:text-white transition-colors">
              Pricing
            </TransitionLink>
            <TransitionLink href="/crew" className="text-gray-400 hover:text-white transition-colors">
              Crew
            </TransitionLink>
          </div>
          <p className="text-gray-600 text-sm">
            © 2025 Fysion. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

