'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'zoomIn';
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.8,
  className = '',
}: ScrollRevealProps) => {
  const ref = useRef(null);
  
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const animationVariants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    slideInRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animationVariants[variant]}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};