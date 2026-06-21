'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonAnimationProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const ButtonAnimation = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  type = 'button',
}: ButtonAnimationProps) => {
  const variantStyles = {
    primary:
      'bg-yellow-400 hover:bg-yellow-500 text-black font-bold shadow-lg hover:shadow-xl',
    secondary:
      'bg-white border-2 border-gray-300 hover:border-gray-400 text-black font-semibold',
    ghost: 'text-blue-600 hover:text-blue-700 font-semibold',
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
      className={`
        px-8 py-4 rounded-lg
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};