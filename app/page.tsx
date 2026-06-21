'use client';
import Image from "next/image";
import { HeroSection } from '@/components/animations/heroSection';
import { ScrollReveal } from '@/components/animations/scrollReveal';
import { TextAnimation } from '@/components/animations/textAnimation';
import { ButtonAnimation } from '@/components/animations/buttonAnimation';
import { PortfolioCard } from '@/components/animations/portfolioCard';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Yana',
      category: 'Digital Product',
      description: 'A modern platform delivering seamless experience',
      image: '/images/yana.jpg',
    },
    {
      id: 2,
      title: 'LegalEase',
      category: 'Legal Tech',
      description: 'Next-gen legal workflow tool',
      image: '/images/legal.jpg',
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
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Software Development</h3>
                <p className="text-gray-600">Scalable web platforms and enterprise applications</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Mobile Apps</h3>
                <p className="text-gray-600">iOS and Android experiences built with React Native</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
                <p className="text-gray-600">Intelligent automation and AI-powered features</p>
              </div>
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
                    image={project.image}
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