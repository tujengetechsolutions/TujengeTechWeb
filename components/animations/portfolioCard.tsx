'use client';

import { motion } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  onViewClick?: () => void;
}

export const PortfolioCard = ({
  title,
  description,
  image,
  category,
  onViewClick,
}: PortfolioCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

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

      <div className="p-6 bg-white">
        <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
          {category}
        </span>

        <h3 className="text-xl font-bold mt-3 text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};