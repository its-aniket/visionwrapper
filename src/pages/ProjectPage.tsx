'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

const projects = [
  {
    id: 1,
    slug: 'web-app-development',
    title: 'Web Application Development',
    description: 'Building scalable and high-performance web applications tailored to your needs.',
    image: '/projects/Screenshot 2026-01-17 010631.png',
    category: 'Development',
  },
  {
    id: 2,
    slug: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Streamlining operations with intelligent automation solutions.',
    image: '/projects/Screenshot 2026-01-17 010819.png',
    category: 'Automation',
  },
  {
    id: 3,
    slug: 'ai-ml-solutions',
    title: 'AI & ML Solutions',
    description: 'Custom AI models to unlock insights and drive smarter decisions.',
    image: '/projects/Screenshot 2026-01-17 010939.png',
    category: 'AI',
  },
  {
    id: 4,
    slug: 'chatbot-integration',
    title: 'Chatbot Integration',
    description: 'Enhancing customer interactions with advanced AI-driven chatbots.',
    image: '/projects/Screenshot 2026-01-17 011149.png',
    category: 'AI',
  },
  {
    id: 5,
    slug: 'cloud-deployment',
    title: 'Cloud Deployment',
    description: 'Deploying secure and scalable solutions on cloud platforms.',
    image: '/projects/Screenshot 2026-01-17 011244.png',
    category: 'Cloud',
  },
  {
    id: 6,
    slug: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights.',
    image: '/projects/Screenshot 2026-01-17 011340.png',
    category: 'Analytics',
  },
  {
    id: 7,
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile applications for iOS and Android.',
    image: '/projects/Screenshot 2026-01-17 011448.png',
    category: 'Development',
  },
  {
    id: 8,
    slug: 'cybersecurity-solutions',
    title: 'Cybersecurity Solutions',
    description: 'Ensuring robust security for your digital assets.',
    image: '/projects/Screenshot 2026-01-17 011448.png',
    category: 'Security',
  },
];

interface RoundedButtonProps {
  children: React.ReactNode
  isActive: boolean
  onClick: () => void
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ children, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm ${
        isActive
          ? 'bg-gray-900 text-white'
          : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  )
}

const Projects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [category, setCategory] = useState<string>('All')

  const filteredProjects =
    category === 'All'
      ? projects
      : projects.filter((project) => project.category === category)

  const categories = ['All', 'Development', 'Automation', 'AI', 'Cloud', 'Analytics', 'Security']

  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col mt-8 sm:mt-12 md:mt-40 gap-[3vw] relative bg-background z-10 font-heading">
        <div className="flex flex-col relative">
          {/* Category Header */}
          <div className="flex flex-col w-full px-4 sm:px-6 md:px-12 lg:px-40 py-8 sm:py-12 overflow-hidden">
            <motion.span 
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight"
            >
              Architecture that speaks
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="block mt-2 sm:mt-2.5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight"
            >
              beyond walls.
            </motion.span>

            <div className="flex w-full flex-wrap gap-2 sm:gap-3 md:gap-4 mt-8 sm:mt-12 md:mt-15 sm:justify-center md:justify-start ">
              {categories.map((cat, index) => (
                <RoundedButton
                  key={index}
                  isActive={category === cat}
                  onClick={() => setCategory(cat)}
                >
                  <p className="text-xs sm:text-sm">{cat}</p>
                </RoundedButton>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div
            className="columns-1 p-4 sm:p-6 md:p-8 sm:columns-2 md:columns-3 lg:columns-3 gap-4 sm:gap-6 [column-fill:balance] bg-background"
            style={{ columnFill: 'balance' }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="break-inside-avoid mb-4 sm:mb-6"
              >
                <a key={index} href={`/projects/${project.slug}`} >
                  <div className="relative group rounded-lg sm:rounded-xl overflow-hidden bg-secondary shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={500}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute w-full inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end justify-start">
                        <div className="flex w-full items-start flex-col p-3 sm:p-4 bg-linear-to-t from-black/70 to-transparent text-white">
                          <h3 className="text-white text-base sm:text-lg md:text-xl font-bold text-left line-clamp-2 font-heading">{project.title}</h3>
                          <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2 text-left">{project.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Projects;