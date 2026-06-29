
'use client';

import { ScrollReveal } from '@/components/animations/scrollReveal';
import { TextAnimation } from '@/components/animations/textAnimation';
import { Briefcase, Users, Globe, TrendingUp } from 'lucide-react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

// Public TopoJSON world map data (loaded client-side)
const GEO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

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

  const countries = [
    'Kenya',
    'Nigeria',
    'USA',
    'UK',
    'Germany',
    'Brazil',
    'India',
    'Japan',
    'Canada',
  ];

  // [longitude, latitude] for the Kenya pin
  const kenyaCoords: [number, number] = [37.9062, -0.0236];

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

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Borderless Section */}
      <ScrollReveal variant="slideUp">
        <section className="relative bg-linear-to-br from-blue-700 via-blue-800 to-blue-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text + Country Pills */}
            <div>
              <span className="text-yellow-400 text-sm font-bold tracking-widest mb-4 block">
                BORDERLESS
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                A network that spans continents
              </h2>

              <p className="text-blue-100 text-lg mb-10 max-w-xl">
                From Nairobi to New York, from Lagos to London — our distributed
                team partners with founders and enterprises shipping meaningful
                products at every scale.
              </p>

              <div className="grid grid-cols-3 gap-3 max-w-xl">
                {countries.map((country) => (
                  <span
                    key={country}
                    className="px-4 py-3 rounded-full bg-white/10 border border-white/15 text-white text-sm font-semibold text-center backdrop-blur-sm hover:bg-white/15 transition-colors"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Real World Map with Kenya Pin */}
            <div className="relative flex items-center justify-center min-h-[420px]">
              <ComposableMap
                projectionConfig={{ scale: 140 }}
                className="w-full max-w-2xl opacity-40"
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#FFFFFF"
                        stroke="#1e3a8a"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: 'none' },
                          hover: { outline: 'none' },
                          pressed: { outline: 'none' },
                        }}
                      />
                    ))
                  }
                </Geographies>

                <Marker coordinates={kenyaCoords}>
                  <circle r={5} fill="#facc15" stroke="#fff" strokeWidth={1.5} />
                  <circle r={12} fill="#facc15" opacity={0.3} />
                </Marker>
              </ComposableMap>

              {/* Kenya label */}
              <div className="absolute" style={{ top: '52%', left: '60%' }}>
                <div className="bg-white rounded-md px-3 py-1.5 shadow-lg whitespace-nowrap">
                  <span className="text-blue-900 font-bold text-sm">Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}