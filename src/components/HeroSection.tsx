import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <div className='relative w-full h-screen overflow-hidden bg-neutral-950'>
      {/* ================= GRAPHIC BACKGROUND ================= */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Animated SVG lines */}
        <motion.svg
          className='absolute inset-0 w-full h-full opacity-[0.06]'
          viewBox='0 0 1200 700'
          preserveAspectRatio='xMidYMid slice'
          animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Top-right construction circles */}
          <g
            stroke='white'
            strokeWidth='1'
            fill='none'
          >
            <circle
              cx='980'
              cy='120'
              r='90'
            />
            <circle
              cx='1040'
              cy='120'
              r='90'
            />
            <circle
              cx='1010'
              cy='70'
              r='90'
            />
          </g>

          {/* Bottom-left geometry */}
          <g
            stroke='white'
            strokeWidth='1'
            fill='none'
          >
            <rect
              x='80'
              y='480'
              width='140'
              height='140'
            />
            <circle
              cx='150'
              cy='550'
              r='70'
            />
          </g>

          {/* Bottom-right grid */}
          <g
            stroke='white'
            strokeWidth='0.8'
          >
            {Array.from({ length: 7 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={760 + i * 28}
                y1={460}
                x2={760 + i * 28}
                y2={620}
              />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1={760}
                y1={460 + i * 28}
                x2={940}
                y2={460 + i * 28}
              />
            ))}
          </g>

          {/* Center guide circles */}
          <g
            stroke='white'
            strokeWidth='0.6'
            fill='none'
          >
            <circle
              cx='600'
              cy='350'
              r='220'
            />
            <circle
              cx='600'
              cy='350'
              r='140'
            />
          </g>

          {/* Diagonal guide lines */}
          <g
            stroke='white'
            strokeWidth='0.6'
          >
            <line
              x1='0'
              y1='0'
              x2='340'
              y2='220'
            />
            <line
              x1='1200'
              y1='0'
              x2='860'
              y2='260'
            />
          </g>
        </motion.svg>

        {/* Moving grid overlay */}
        <motion.div
          className='absolute inset-0 opacity-[0.035]'
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '160px 160px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '160px 160px'] }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Center clarity mask (opacity almost zero at center) */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 85%)',
          }}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className='relative z-10 flex h-full items-center justify-center px-6 text-center'>
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='block text-xs md:text-sm tracking-[0.35em] uppercase text-white/50 mb-6'
          >
            Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight'
          >
            UI/UX & Digital Work
            <br />
            <span className='italic text-white/60'>Chandanpreet Kaur</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-8 max-w-xl mx-auto text-white/50 text-sm md:text-base leading-relaxed'
          >
            There is a difference between making a design and creating an
            experience.
          </motion.p>
        </div>
      </div>

      {/* Slide indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10'
      >
        <span className='w-6 h-[2px] bg-white' />
        <span className='w-4 h-[2px] bg-white/30' />
        <span className='w-4 h-[2px] bg-white/30' />
      </motion.div>
    </div>
  );
}
