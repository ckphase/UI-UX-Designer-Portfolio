import { ExternalLink } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import projectFour from '../assets/projectfour.png';
import projectOne from '../assets/projectone.png';
import projectThree from '../assets/projectthree.png';
import projectTwo from '../assets/projecttwo.png';

const projects = [
  {
    id: 1,
    title: 'FemoraAI App Launch',
    category: 'UI/UX Design • Product Support',
    year: '2024',
    image: projectOne,
    description:
      'Contributed to the launch of the FemoraAI application by supporting UI/UX design decisions and improving overall product usability.',
  },
  {
    id: 2,
    title: 'FemoraAI Brand Assets',
    category: 'Branding • Print & Visual Design',
    year: '2024',
    image: projectTwo,
    description:
      'Designed standees, pamphlets, and supporting brand assets to maintain consistent visual identity across marketing materials.',
  },
  {
    id: 3,
    title: 'AI Platform Website',
    category: 'UI/UX Design • Web Design',
    year: '2024',
    image: projectFour,
    description:
      'Designed a clean and modern website interface for an AI-focused platform, emphasizing clarity, structure, and usability.',
  },
  {
    id: 4,
    title: 'RISE Website',
    category: 'UI/UX Design • Full Website Development',
    year: '2023',
    image: projectThree,
    description:
      'Designed and developed the RISE website independently, handling UI/UX, layout, responsiveness, and complete implementation.',
  },
];

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className='relative w-full h-full flex items-center justify-center overflow-hidden bg-neutral-900'>
      {/* Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-bl from-neutral-900 via-neutral-900 to-neutral-800' />

      {/* Main Content */}
      <div className='relative z-10 w-full h-full max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-8 md:mb-12'
        >
          <span className='text-xs md:text-sm tracking-[0.3em] uppercase text-white/50 mb-4 block'>
            Selected Works
          </span>
          <h2 className='text-4xl md:text-6xl lg:text-7xl tracking-tight'>
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 overflow-y-auto max-h-[calc(100vh-16rem)] pr-2 custom-scrollbar'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className='group relative cursor-pointer'
            >
              {/* Image Container */}
              <div className='relative aspect-[4/3] rounded-xl overflow-hidden mb-4'>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className='w-full h-full'
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover'
                  />
                </motion.div>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className='absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center'
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{
                      scale: hoveredProject === project.id ? 1 : 0,
                      rotate: hoveredProject === project.id ? 0 : -180,
                    }}
                    transition={{
                      duration: 0.4,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    className='w-16 h-16 rounded-full bg-white flex items-center justify-center'
                  >
                    <ExternalLink className='w-8 h-8 text-black' />
                  </motion.div>
                </motion.div>

                {/* Year Badge */}
                <div className='absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs tracking-wider'>
                  {project.year}
                </div>
              </div>

              {/* Project Info */}
              <div className='space-y-2'>
                <div className='flex items-start justify-between gap-4'>
                  <h3 className='text-xl md:text-2xl tracking-wide group-hover:text-white/80 transition-colors'>
                    {project.title}
                  </h3>
                  <motion.div
                    animate={{ x: hoveredProject === project.id ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className='w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors' />
                  </motion.div>
                </div>
                <p className='text-sm text-white/50 tracking-wide'>
                  {project.category}
                </p>
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className='text-sm text-white/70 leading-relaxed'
                    >
                      {project.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className='mt-8 text-center'
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='text-sm tracking-wider border-b border-white/30 pb-1 hover:border-white transition-colors inline-flex items-center gap-2'
          >
            View All Projects
            <ExternalLink className='w-4 h-4' />
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
