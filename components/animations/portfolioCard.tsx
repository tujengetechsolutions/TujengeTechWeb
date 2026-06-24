'use client';

import { motion } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  description: string;
  category: string;
  onViewClick?: () => void;
  tech?: string[];
  gradient?: string;
}

export const PortfolioCard = ({
  title,
  description,
  category,
  onViewClick,
  tech = [],
  gradient = 'from-blue-600 to-teal-500',
}: PortfolioCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-white"
    >
      {/* Gradient Header Section */}
      <div className={`relative w-full h-64 bg-linear-to-br ${gradient} overflow-hidden flex items-center justify-center`}>
        <div className="text-center px-6">
          <h2 className="text-5xl font-bold text-white mb-4">{title}</h2>
        </div>

        {/* Arrow Icon */}
        <motion.div
          className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l10 10M7 17L17 7" />
          </svg>
        </motion.div>

        {/* Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onViewClick}
            className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Project
          </motion.button>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-6 bg-white">
        {/* Category */}
        <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-bold mt-3 text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-3 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};