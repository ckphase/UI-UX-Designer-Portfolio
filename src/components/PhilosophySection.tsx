import { motion } from 'motion/react';

export function PhilosophySection() {
  return (
    <div className='relative w-full h-full flex items-center justify-center overflow-hidden bg-neutral-900'>
      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 1 }}
        className='absolute inset-0 flex items-center justify-center pointer-events-none select-none'
      >
        <div className='text-[25vw] leading-none font-bold text-white whitespace-nowrap'>
          DESIGN
        </div>
      </motion.div>

      {/* Main Content */}
      <div className='relative z-10 max-w-5xl mx-auto px-8 md:px-16 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-6 md:mb-8'
        >
          <span className='text-xs md:text-sm tracking-[0.3em] uppercase text-white/50'>
            Philosophy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-4xl md:text-6xl lg:text-7xl mb-8 md:mb-12 leading-tight tracking-tight'
        >
          Design is not just what it looks like.
          <br />
          <span className='italic text-white/70'>Design is how it works.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-20'
        >
          {[
            {
              title: 'Intentional',
              description:
                'Every element serves a purpose. Every choice tells a story.',
            },
            {
              title: 'Timeless',
              description:
                'Creating work that transcends trends and stands the test of time.',
            },
            {
              title: 'Human-Centered',
              description:
                'Designing experiences that connect, resonate, and inspire.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
              whileHover={{ y: -5 }}
              className='group'
            >
              <div className='h-px w-12 bg-white/30 mb-6 mx-auto transition-all group-hover:w-20 group-hover:bg-white' />
              <h3 className='text-xl md:text-2xl mb-3 tracking-wide'>
                {item.title}
              </h3>
              <p className='text-white/60 text-sm md:text-base leading-relaxed'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className='mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/10'
        >
          <p className='text-lg md:text-xl text-white/50 italic'>
            "Simplicity is the ultimate sophistication."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
