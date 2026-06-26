'use client';

import { ScrollReveal } from '@/components/animations/scrollReveal';
import { TextAnimation } from '@/components/animations/textAnimation';
import { Briefcase, Users, Globe, TrendingUp } from 'lucide-react';

export default function GlobalImpact() {
  const stats = [
    {
      id: 1,
      icon: Briefcase,
      value: '5+',
      label: 'PROJECTS DELIVERED',
    },
    {
      id: 2,
      icon: Users,
      value: '4',
      label: 'HAPPY CLIENTS',
    },
    {
      id: 3,
      icon: Globe,
      value: '2',
      label: 'COUNTRIES REACHED',
    },
    {
      id: 4,
      icon: TrendingUp,
      value: '5/5',
      label: 'CLIENT SATISFACTION',
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
              GLOBAL IMPACT
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              <TextAnimation text="Creating impact through technology" />
            </h1>

            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Technology connects people, improves businesses, and creates opportunities.
              We build solutions that contribute to a smarter digital future.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats Grid */}
      <ScrollReveal variant="slideUp">
        <section className="pb-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <ScrollReveal key={stat.id} variant="slideUp" delay={index * 0.15}>
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 text-center">
                      <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-blue-50 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-4xl font-extrabold text-gray-800 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold tracking-wide text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}