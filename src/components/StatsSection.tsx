import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

function Counter({
  value,
  suffix = '',
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: 'easeOut',
    });

    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, duration, rounded, count]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 150,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Across diverse industries',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Worldwide partnerships',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Awards Won',
    description: 'International recognition',
  },
  {
    value: 3,
    suffix: '+',
    label: 'Years Experience',
    description: 'Design excellence',
  },
];

export function StatsSection() {
  return (
    <div className='relative w-full h-full flex items-center justify-center overflow-hidden bg-neutral-900'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Large Background Number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='absolute inset-0 flex items-center justify-center pointer-events-none select-none'
      >
        <div className='text-[50vw] leading-none font-bold text-white'>∞</div>
      </motion.div>

      {/* Main Content */}
      <div className='relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-center mb-12 md:mb-20'
        >
          <span className='text-xs md:text-sm tracking-[0.3em] uppercase text-white/50 mb-4 block'>
            Impact
          </span>
          <h2 className='text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6'>
            By the Numbers
          </h2>
          <p className='text-lg md:text-xl text-white/60 max-w-2xl mx-auto'>
            Creating measurable impact through thoughtful design and creative
            excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className='group text-center'
            >
              {/* Number */}
              <div className='relative mb-4'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className='text-6xl md:text-7xl lg:text-8xl tracking-tight mb-2 group-hover:text-white/90 transition-colors'
                >
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2 + index * 0.2}
                  />
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '50%' }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  className='h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto group-hover:via-white/60 transition-colors'
                />
              </div>

              {/* Label */}
              <h3 className='text-lg md:text-xl mb-2 tracking-wide'>
                {stat.label}
              </h3>

              {/* Description */}
              <p className='text-sm text-white/50 group-hover:text-white/70 transition-colors'>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className='text-center mt-16 md:mt-24'
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='px-8 py-4 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300 tracking-wide'
          >
            Let's Create Together
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
