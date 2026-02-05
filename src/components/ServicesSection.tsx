import React from 'react';
import { motion } from 'motion/react';
import { Palette, Layout, Sparkles, Camera } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Crafting unique visual identities that capture the essence of your brand and resonate with your audience.',
    tags: ['Logo Design', 'Brand Guidelines', 'Visual Systems']
  },
  {
    icon: Layout,
    title: 'Digital Design',
    description: 'Creating beautiful, intuitive interfaces that provide seamless user experiences across all platforms.',
    tags: ['UI/UX Design', 'Web Design', 'Mobile Apps']
  },
  {
    icon: Sparkles,
    title: 'Creative Direction',
    description: 'Leading creative vision from concept to execution, ensuring consistency and excellence in every detail.',
    tags: ['Art Direction', 'Campaign Strategy', 'Visual Storytelling']
  },
  {
    icon: Camera,
    title: 'Content Creation',
    description: 'Producing compelling visual content that engages audiences and elevates your brand presence.',
    tags: ['Photography', 'Video', 'Motion Graphics']
  }
];

export function ServicesSection() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800" />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/50 mb-4 block">
            Services
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
            What I Do
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 overflow-y-auto max-h-[calc(100vh-16rem)] pr-2 custom-scrollbar">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors"
              >
                <service.icon className="w-6 h-6 md:w-8 md:h-8" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl mb-4 tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 group-hover:bg-white/10 group-hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Indicator */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/50 to-white/20 rounded-full"
              />
            </motion.div>
          ))}
        </div>
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
