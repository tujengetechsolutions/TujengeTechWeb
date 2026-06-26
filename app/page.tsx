
import Image from "next/image";
'use client';

import { HeroSection } from '@/components/animations/heroSection';
import { ScrollReveal } from '@/components/animations/scrollReveal';
import { TextAnimation } from '@/components/animations/textAnimation';
import { ButtonAnimation } from '@/components/animations/buttonAnimation';
import { PortfolioCard } from '@/components/animations/portfolioCard';
import { ServiceCard } from '@/components/animations/serviceCard';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Yana',
      category: 'Digital Product',
      description: 'A modern platform delivering a seamless, intuitive experience for users — built for scale from day one.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      id: 2,
      title: 'LegalEase 2',
      category: 'Legal Tech Platform',
      description: 'A next-generation legal workflow tool that simplifies document handling, case tracking, and client collaboration.',
      tech: ['React', 'FastAPI', 'PostgreSQL'],
      gradient: 'from-yellow-400 to-teal-500',
    },
  ];

  const services = [
  {
    id: 1,
    title: 'Software Development',
    description: 'Scalable web platforms and enterprise applications',
    image: 'https://cdn.pixabay.com/photo/2024/05/21/19/57/computer-8779039_1280.jpg',
    
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'iOS and Android experiences built with React Native',
    image: 'https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_1280.jpg',
    
  },
  {id: 3,
    title: 'AI Solutions',
    description: 'Intelligent automation and AI-powered features',
    image: 'https://cdn.pixabay.com/photo/2024/12/24/19/13/technology-9289238_1280.jpg',
    
  },
];
  return (
  
    
    <main>
      {/* Hero Section */}
      <HeroSection
        imageSrc="/images/hero-team.jpg"
        onStartProject={() => console.log('start project')}
        onExploreWork={() => console.log('explore work')}
      />

      {/* About Section */}
      <ScrollReveal variant="slideUp">
        <section className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              <TextAnimation text="About Us" />
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              A distributed team of engineers, designers, and product thinkers — 
              united by craft and curiosity.
            </p>
          </div>
        </section>
      </ScrollReveal>

     
      {/* Services Section */}
      <ScrollReveal variant="slideInLeft">
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <TextAnimation text="Our Services" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.id} variant="slideUp" delay={index * 0.2}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Projects Section */}
      <ScrollReveal variant="slideUp">
        <section className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <TextAnimation text="Projects we're proud of" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} variant="slideUp" delay={index * 0.2}>
                  <PortfolioCard
                    title={project.title}
                    description={project.description}
                    category={project.category}
                    tech={project.tech}
                    gradient={project.gradient}
                    onViewClick={() => console.log(`Viewing ${project.title}`)}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal variant="slideUp">
        <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="bg-gradient-hero shadow-glow relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-16 text-center text-white 
        md:px-16 md:py-24">
          <div className="absolute inset-0 grid-bg opacity-25"></div>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl"></div>
          <div className="relative">
            <h2 className="font-display text-4xl font-bold md:text-6xl">Ready to Build <span className="text-gradient-accent">the Future?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 md:text-lg">Partner with TujengeTech and transform your ideas into powerful digital solutions that scale.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-1
               focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
               bg-accent text-accent-foreground shadow-accent hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300 font-semibold h-10 rounded-md px-8">Let's Work Together <ArrowRight/></a>
              <a href="/projects" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1
               focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm h-10 rounded-md px-8 border/white/30 gb/white/5
                text/white hover:gb-white/10 rounded-md px-8 border-white/30 bg-white/5 text/white hover:bg-white/10 hover:text-white">Explore Our Work</a>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </main>
  );
}