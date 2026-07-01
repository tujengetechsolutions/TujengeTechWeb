'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/animations/heroSection';
import { ScrollReveal } from '@/components/animations/scrollReveal';
import { TextAnimation } from '@/components/animations/textAnimation';
import { TechStack } from "@/components/animations/techStack";
import { ArrowRight, Code, Smartphone, Brain, Cloud, Zap } from 'lucide-react';


export default function Home() {
  const router = useRouter();

  const handleStartProject = () => {
    router.push('/projects');
  };

  const handleExploreWork = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      title: 'Software Development',
      description: 'Scalable websites, platforms, and enterprise applications.',
      icon: <Code size={32} />,
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Powerful native and cross-platform mobile experiences.',
      icon: <Smartphone size={32} />,
    },
    {
      id: 3,
      title: 'Artificial Intelligence',
      description: 'Intelligent automation systems that scale with your needs.',
      icon: <Brain size={32} />,
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Secure, resilient, and scalable cloud infrastructure.',
      icon: <Cloud size={32} />,
    },
    {
      id: 5,
      title: 'Digital Transformation',
      description: 'Modernize your stack, processes, and customer experience.',
      icon: <Zap size={32} />,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        imageSrc="/images/developer.png"
        onStartProject={handleStartProject}
        onExploreWork={handleExploreWork}
      />

      {/* Tech Stack */}
      <TechStack />

      {/* Services Section */}
      <ScrollReveal variant="slideUp">
        <section className="py-20 px-8 bg-white" id="services-section">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
                WHAT WE DO
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Technology <span className="text-gradient-accent">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                End-to-end engineering, design, and intelligence services to take your idea from concept to global scale.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ScrollReveal key={service.id} variant="slideUp">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                    {/* Icon */}
                    <div className="mb-6 text-blue-600">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Global Impact Section */}
      <ScrollReveal variant="slideUp">
        <section className="relative py-24 px-8 overflow-hidden">
          <div className="bg-gradient-hero shadow-glow relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-8 py-24 text-center text-white md:px-16">
            <div className="absolute inset-0 grid-bg opacity-25"></div>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Label */}
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-6">
                GLOBAL IMPACT
              </p>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Creating impact through <br /> technology
              </h2>

              {/* Description */}
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-16">
                Technology connects people, improves businesses, and creates opportunities. We build solutions that contribute to a smarter digital future.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Stat 1 */}
                <motion.div
                  whileHover={{ scale: 1.05, translateY: -8 }}
                  transition={{ duration: 0.3 }}
                  className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-8 hover:border-accent/50 transition-all duration-300"
                >
                  <p className="text-5xl font-bold text-accent mb-3">5+</p>
                  <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                    Projects Delivered
                  </p>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                  whileHover={{ scale: 1.05, translateY: -8 }}
                  transition={{ duration: 0.3 }}
                  className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-8 hover:border-accent/50 transition-all duration-300"
                >
                  <p className="text-5xl font-bold text-accent mb-3">4</p>
                  <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                    Happy Clients
                  </p>
                </motion.div>

                {/* Stat 3 */}
                <motion.div
                  whileHover={{ scale: 1.05, translateY: -8 }}
                  transition={{ duration: 0.3 }}
                  className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-8 hover:border-accent/50 transition-all duration-300"
                >
                  <p className="text-5xl font-bold text-accent mb-3">2</p>
                  <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                    Countries Reached
                  </p>
                </motion.div>

                {/* Stat 4 */}
                <motion.div
                  whileHover={{ scale: 1.05, translateY: -8 }}
                  transition={{ duration: 0.3 }}
                  className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-8 hover:border-accent/50 transition-all duration-300"
                >
                  <p className="text-5xl font-bold text-accent mb-3">100%</p>
                  <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                    Commitment
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal variant="slideUp">
        <section className="py-24 px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            {/* Label */}
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-6">
              TESTIMONIALS
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Words from <span className="text-gradient-accent">our partners</span>
            </h2>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100"
            >
              {/* Quote Icon */}
              <p className="text-6xl font-bold text-accent mb-6">&quot;</p>

              {/* Quote Text */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Be one of our first partners.
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                We&apos;re a young studio just getting started — partner stories will live here soon. Want to be the first to share yours? Let&apos;s build something worth talking about.
              </p>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal variant="slideUp">
        <section className="px-5 py-20 md:px-8 md:py-28" id="cta-section">
          <div className="bg-gradient-hero shadow-glow relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-16 text-center text-white md:px-16 md:py-24">
            <div className="absolute inset-0 grid-bg opacity-25"></div>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl font-bold md:text-6xl">
                Ready to Build <span className="text-gradient-accent">the Future?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 md:text-lg">
                Partner with TujengeTech and transform your ideas into powerful digital solutions that scale.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => console.log('work together')}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm cursor-pointer font-semibold h-12 rounded-lg px-8 bg-accent text-accent-foreground hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300 shadow-accent"
                >
                  Let&apos;s Work Together <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => console.log('explore')}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer h-12 rounded-lg px-8 border border-white/30 bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
                >
                  Explore Our Work
                </button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="bg-gradient-hero text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
            
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-accent text-2xl">✦</div>
                <span className="text-xl font-bold">TujengeTech</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Building tomorrow today through innovative technology solutions.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.74c0-.85.63-1.63 1.54-1.63.91 0 1.63.78 1.63 1.63v4.74h2.5M6.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 9.5v-5.5h-3v5.5h3"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 11.37A4 4 0 1112 8m.5 4v3m-3 0v3"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    Global Impact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    AI Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white">
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8">
            <p className="text-white/60 text-sm">
              © 2026 TujengeTech. All Rights Reserved.
            </p>
            <p className="text-white/60 text-sm mt-4 md:mt-0">
              Building Tomorrow Today.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}