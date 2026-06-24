'use client';

import { HeroSection } from '@/components/animations/heroSection';
import { ScrollReveal } from '@/components/animations/scrollReveal';
import { TextAnimation } from '@/components/animations/textAnimation';
import { ButtonAnimation } from '@/components/animations/buttonAnimation';
import { PortfolioCard } from '@/components/animations/portfolioCard';
import { ServiceCard } from '@/components/animations/serviceCard';

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
    <>
     <h1 className="flex justify-center items-center min-h-screen bg-background">Hello Team</h1>
    </>
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
        <section className="py-20 px-8 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              <TextAnimation text="Let's build something great" />
            </h2>
            <p className="text-lg mb-8">Tell us about your project</p>
            <ButtonAnimation 
              variant="primary"
              onClick={() => console.log('start project')}
            >
              Start a Project
            </ButtonAnimation>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}