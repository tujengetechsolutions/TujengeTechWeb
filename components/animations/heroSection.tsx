'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  imageSrc?: string;
  onStartProject?: () => void;
  onExploreWork?: () => void;
}

export const HeroSection = ({
  imageSrc = '/images/hero-team.jpg',
  onStartProject,
  onExploreWork,
}: HeroSectionProps) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-linear-to-br from-white via-blue-50 to-yellow-50 pt-20 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-8 py-20 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full border border-yellow-300">
              <span className="text-yellow-600 text-sm font-semibold">
                ✨ INNOVATING WITH PURPOSE
              </span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Building
            <span className="text-blue-600"> Tomorrow</span>
            <span className="text-gray-400"> Today.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed"
          >
            We create innovative digital solutions that help businesses grow, scale, and transform through technology.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartProject}
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start a Project →
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onExploreWork}
              className="px-8 py-4 bg-white border-2 border-gray-300 hover:border-gray-400 text-black font-semibold rounded-lg transition-all duration-300"
            >
              Explore Our Work
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <motion.div
            ref={imageContainerRef}
            style={{
              y: scrollY * 0.5,
            }}
            className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={imageSrc}
              alt="Team working on projects"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-8 right-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-md border border-blue-400"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-blue-300 rounded-full"
              />
              <span className="font-semibold">AI Engine</span>
            </div>
            <div className="text-sm text-blue-100">99.2% accuracy</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 right-8 bg-yellow-400 text-black px-6 py-3 rounded-full shadow-lg font-semibold"
          >
            🚀 Deploy Ready
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};