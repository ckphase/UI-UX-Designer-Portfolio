import { ArrowUpRight, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chandanpreetkaursandhu/',
  },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export function ContactSection() {
  return (
    <div className='relative w-full h-full flex items-center justify-center overflow-hidden bg-neutral-900'>
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1.5 }}
        className='absolute inset-0 flex items-center justify-center pointer-events-none select-none'
      >
        <div className='text-[40vw] leading-none font-bold text-white'>@</div>
      </motion.div>

      {/* Radial Gradient */}
      <div className='absolute inset-0 bg-radial-gradient from-white/5 via-transparent to-transparent' />

      {/* Main Content */}
      <div className='relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16 text-center'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-8 md:mb-12'
        >
          <span className='text-xs md:text-sm tracking-[0.3em] uppercase text-white/50 mb-4 block'>
            Get In Touch
          </span>
          <h2 className='text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 md:mb-8'>
            Let's Create
            <br />
            <span className='italic text-white/80'>Something Amazing</span>
          </h2>
          <p className='text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed'>
            Have a project in mind? I'd love to hear about it. Let's collaborate
            and bring your vision to life.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb-12 md:mb-16'
        >
          <motion.a
            href='mailto:chandanpreetkaur1317@gmail.com'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-flex items-center gap-4 text-3xl md:text-5xl lg:text-6xl tracking-tight group'
          >
            <Mail className='w-8 h-8 md:w-12 md:h-12 text-white/60 group-hover:text-white transition-colors' />
            <span className='border-b-2 border-white/20 group-hover:border-white transition-colors pb-2'>
              chandanpreetkaur1317@gmail.com
            </span>
            <motion.div
              animate={{ x: 0, y: 0 }}
              whileHover={{ x: 5, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ArrowUpRight className='w-8 h-8 md:w-12 md:h-12 text-white/60 group-hover:text-white transition-colors' />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex justify-center gap-6 md:gap-8 mb-12 md:mb-16'
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + index * 0.1,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className='w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all group'
              aria-label={social.label}
            >
              <social.icon className='w-6 h-6 md:w-7 md:h-7 text-white/70 group-hover:text-white transition-colors' />
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-12 md:pt-16 border-t border-white/10'
        >
          <div className='space-y-2'>
            <h3 className='text-sm tracking-wider text-white/50 uppercase'>
              Location
            </h3>
            <p className='text-base md:text-lg'>Remote</p>
          </div>
          <div className='space-y-2'>
            <h3 className='text-sm tracking-wider text-white/50 uppercase'>
              Availability
            </h3>
            <p className='text-base md:text-lg'>Open for projects</p>
          </div>
          <div className='space-y-2'>
            <h3 className='text-sm tracking-wider text-white/50 uppercase'>
              Response Time
            </h3>
            <p className='text-base md:text-lg'>Within 24 hours</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className='mt-12 md:mt-16 pt-8 border-t border-white/10'
        >
          <p className='text-sm text-white/40'>
            © 2024 Creative Designer. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
