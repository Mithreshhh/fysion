"use client";

import { Navbar } from "@/components/Navbar";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Dezyn.iq",
    category: "Web Development",
    tags: ["Next.js", "Branding", "UI/UX", "Social Media"],
    gradient: "from-violet-500 via-purple-500 to-pink-500",
    icon: "🎨",
    description: "Complete brand transformation and web revamp for a creative design agency. Developed modern website with enhanced user experience and strategic social media positioning.",
    features: ["Website Redesign", "Brand Identity", "Social Strategy", "SEO Optimization"],
    results: "150% increase in web traffic, strong social presence",
    year: "2024"
  },
  {
    id: 2,
    title: "Muscle Tech Gym",
    category: "Marketing",
    tags: ["Content Strategy", "Lead Generation", "Social Media", "Fitness"],
    gradient: "from-orange-500 via-red-500 to-pink-500",
    icon: "💪",
    description: "Comprehensive fitness brand content strategy focused on lead generation and brand growth. Created engaging fitness content and implemented multi-channel marketing campaigns.",
    features: ["Content Strategy", "Lead Generation", "Social Media Growth", "Brand Positioning"],
    results: "300% increase in qualified leads, doubled membership",
    year: "2024"
  },
  {
    id: 3,
    title: "3M Car Care",
    category: "Marketing",
    tags: ["Video Production", "Social Media", "Content", "Automotive"],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    icon: "🚗",
    description: "Cinematic car detailing visuals and social media growth campaign for premium automotive care brand. High-quality video content driving engagement and brand awareness.",
    features: ["Cinematic Visuals", "Social Growth", "Video Content", "Brand Storytelling"],
    results: "500% social media growth, viral content reach 2M+",
    year: "2024"
  },
  {
    id: 4,
    title: "UrbanFit Studio",
    category: "Design",
    tags: ["Branding", "UI/UX", "Print", "Digital"],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    icon: "🏋️",
    description: "Modern fitness studio branding with complete visual identity including logo design, marketing materials, and digital presence for boutique fitness brand.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Collateral", "Digital Assets"],
    results: "Strong brand recognition, successful launch campaign",
    year: "2023"
  },
  {
    id: 5,
    title: "AutoLux Detailing",
    category: "Design",
    tags: ["Branding", "Visual Identity", "Photography", "Social"],
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    icon: "✨",
    description: "Premium automotive detailing brand identity with focus on luxury aesthetics, professional photography, and cohesive visual system across all touchpoints.",
    features: ["Brand Identity", "Visual System", "Photography Direction", "Packaging Design"],
    results: "Premium positioning achieved, 200% client growth",
    year: "2023"
  },
  {
    id: 6,
    title: "NutriFlow Wellness",
    category: "Web Development",
    tags: ["React", "E-commerce", "UI/UX", "SEO"],
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    icon: "🥗",
    description: "Health and wellness e-commerce platform with custom nutrition plans, blog system, and seamless shopping experience. Built for scale and performance.",
    features: ["E-commerce Platform", "Custom CMS", "Payment Integration", "Mobile Responsive"],
    results: "Launch success, 5k+ active users in 3 months",
    year: "2024"
  },
  {
    id: 7,
    title: "Elite Performance Gym",
    category: "Marketing",
    tags: ["Social Media", "Content", "Ads", "Lead Gen"],
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
    icon: "🎯",
    description: "Full-service digital marketing campaign for high-performance gym including social media management, paid advertising, and lead generation strategy.",
    features: ["Social Media Ads", "Content Creation", "Lead Funnels", "Community Building"],
    results: "400% ROI, 50+ new members monthly",
    year: "2023"
  },
  {
    id: 8,
    title: "DriveStyle Garage",
    category: "Design",
    tags: ["Web Design", "UI/UX", "Branding", "Automotive"],
    gradient: "from-purple-500 via-pink-500 to-red-500",
    icon: "🏁",
    description: "Custom automotive garage website design with booking system, gallery showcase, and service catalog. Modern, bold design reflecting premium car culture.",
    features: ["Responsive Design", "Booking System", "Portfolio Gallery", "Service Pages"],
    results: "95% positive feedback, 60% online booking increase",
    year: "2024"
  }
];

const categories = ["All", "Web Development", "Design", "Marketing"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <Navbar />
      
      <main className="relative min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20">
          {/* Animated gradient background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
                  Our
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mt-2">
            Projects
                </span>
          </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" scrub={1.2}>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Discover our portfolio of successful projects that have helped businesses transform their digital presence and achieve remarkable results.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Filter Section */}
        <section className="relative px-6 py-12 bg-black">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <div className="flex flex-wrap justify-center gap-3 mb-16">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-white text-black scale-105"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ScrollAnimation>

            {/* Projects Count */}
            <div className="text-center mb-12">
              <p className="text-gray-500 text-sm">
                Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="relative px-6 py-12 bg-black pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => {
                const isHovered = hoveredId === project.id;
                
                return (
                  <ScrollAnimation 
                    key={project.id} 
                    animation="fade-up" 
                    start="top 85%" 
                    end="top 40%"
                  >
                    <div
                      className="group relative h-full"
                      onMouseEnter={() => setHoveredId(project.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div
                        className={`relative overflow-hidden rounded-3xl transition-all duration-700 h-full ${
                          isHovered ? "scale-[1.02] -rotate-1" : "scale-100 rotate-0"
                        }`}
                        style={{
                          transformStyle: "preserve-3d",
                          perspective: "1000px"
                        }}
                      >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                        
                        {/* Border */}
                        <div className={`absolute inset-0 rounded-3xl transition-all duration-500 border ${
                          isHovered 
                            ? "border-white/30 shadow-2xl shadow-white/10" 
                            : "border-white/10"
                        }`} />

                        {/* Content */}
                        <div className="relative p-8 md:p-10 h-full flex flex-col justify-between min-h-[550px] bg-black/40 backdrop-blur-sm">
                          {/* Top Section */}
                          <div>
                            {/* Icon & Year */}
                            <div className="flex items-start justify-between mb-6">
                              <div className={`text-5xl transition-all duration-500 ${
                                isHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"
                              }`}>
                                {project.icon}
                              </div>
                              <span className="text-xs text-gray-600 font-mono">{project.year}</span>
                            </div>
                            
                            {/* Category Badge */}
                            <div className="mb-4">
                              <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs text-white/70 backdrop-blur-sm border border-white/10">
                                {project.category}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className={`text-3xl font-bold mb-4 transition-all duration-500 ${
                              isHovered 
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400" 
                                : "text-white"
                            }`}>
                              {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-base mb-6 group-hover:text-gray-300 transition-colors leading-relaxed">
                              {project.description}
                            </p>

                            {/* Features */}
                            <div className="mb-6">
                              <p className="text-xs text-gray-600 mb-3 uppercase tracking-wider">Key Features</p>
                              <div className="grid grid-cols-2 gap-2">
                                {project.features.map((feature, i) => (
                                  <div key={i} className="flex items-center gap-2">
                                    <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient}`} />
                                    <span className="text-xs text-gray-500">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Bottom Section */}
                          <div>
                            {/* Results */}
                            <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                              <p className="text-xs text-gray-600 mb-1 uppercase tracking-wider">Results</p>
                              <p className="text-sm text-white font-semibold">{project.results}</p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 hover:bg-white/10 hover:border-white/20 transition-all"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* CTA */}
                            <div className={`flex items-center gap-2 text-white transition-all duration-300 ${
                              isHovered ? "translate-x-2" : "translate-x-0"
                            }`}>
                              <span className="font-semibold">View Case Study</span>
                              <span className={`transition-transform duration-300 ${
                                isHovered ? "translate-x-2" : "translate-x-0"
                              }`}>→</span>
                            </div>
                          </div>

                          {/* Glow effect */}
                          {isHovered && (
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 blur-2xl transition-opacity duration-500 pointer-events-none`} />
                          )}
                        </div>

                        {/* Shine effect on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent transition-all duration-700 pointer-events-none ${
                          isHovered ? "translate-x-full" : "-translate-x-full"
                        }`} />
                      </div>

                      {/* Shadow */}
                      <div 
                        className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 blur-2xl -z-10 transition-opacity duration-500 rounded-3xl`}
                      />
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-6 py-32 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Let's work together to bring your vision to life and create something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/pricing"
                  className="px-10 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-smooth"
                >
                  View Pricing
                </a>
                <a
                  href="mailto:hello@fysion.com"
                  className="px-10 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/20 transition-smooth"
                >
                  Get in Touch
                </a>
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






