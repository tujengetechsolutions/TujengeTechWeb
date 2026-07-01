'use client';

import { motion } from 'framer-motion';

const techItems = [
  { 
    name: 'Next.js', 
    logo: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' 
  },
  { 
    name: 'React', 
    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' 
  },
  { 
    name: 'Express', 
    logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg' 
  },
  
  { 
    name: 'Flask', 
    logo: 'https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon.svg' 
  },
  { 
    name: 'TypeScript', 
    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg' 
  },
  { 
    name: 'JavaScript', 
    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg' 
  },
  { 
    name: 'PostgreSQL', 
    logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' 
  },
];

export const TechStack = () => {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase mb-12 tracking-wider">OUR TECH STACK</p>
        
        {/* Tech logos grid */}
        <motion.div
          className="flex gap-12 justify-center items-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {techItems.map((tech, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                delay: index * 0.1,
                repeat: Infinity,
              }}
              className="h-20 w-20 flex items-center justify-center hover:scale-125 transition-all duration-300 cursor-pointer group"
              title={tech.name}
            >
              <img 
                src={tech.logo} 
                alt={tech.name}
                className="h-full w-full object-contain opacity-70 group-hover:opacity-100 filter group-hover:drop-shadow-lg transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};