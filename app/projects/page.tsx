'use client';
import Link from 'next/link';

import { ScrollReveal } from '@/components/animations/scrollReveal';
import { TextAnimation } from '@/components/animations/textAnimation';
import { PortfolioCard } from '@/components/animations/portfolioCard';

export default function Projects() {
  const projects = [
    {
      id: 1,
      slug: 'yana',
      title: 'Yana',
      category: 'Digital Product',
      description:
        'A modern platform delivering a seamless, intuitive experience for users — built for scale from day one.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      id: 2,
      slug: 'legalease-2',
      title: 'LegalEase 2',
      category: 'Legal Tech Platform',
      description:
        'A next-generation legal workflow tool that simplifies document handling, case tracking, and client collaboration.',
      tech: ['React', 'FastAPI', 'PostgreSQL'],
      gradient: 'from-yellow-400 to-teal-500',
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <ScrollReveal variant="slideUp">
        <section className="pt-32 pb-16 px-8 bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              SELECTED WORK
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              <TextAnimation text="Projects we're proud of" />
            </h1>

            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A glimpse into platforms, apps, and intelligent systems we&apos;ve shipped
              with partners around the world.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Projects Grid */}
      <ScrollReveal variant="slideUp">
        <section className="py-12 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} variant="slideUp" delay={index * 0.2}>
                  <Link href={`/projects/${project.slug}`}>
                    <PortfolioCard
                      title={project.title}
                      description={project.description}
                      category={project.category}
                      tech={project.tech}
                      gradient={project.gradient}
                      onViewClick={() => console.log(`Viewing ${project.title}`)}
                    />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}