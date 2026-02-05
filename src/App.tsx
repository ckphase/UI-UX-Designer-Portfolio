import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';
import { StatsSection } from './components/StatsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

import bgMusic from './assets/audio/bg-music.mp3';

const sections = [
  { id: 'hero', component: HeroSection, label: 'Home' },
  { id: 'philosophy', component: PhilosophySection, label: 'Philosophy' },
  { id: 'services', component: ServicesSection, label: 'Services' },
  { id: 'stats', component: StatsSection, label: 'Impact' },
  { id: 'projects', component: ProjectsSection, label: 'Projects' },
  { id: 'contact', component: ContactSection, label: 'Contact' },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* 🎵 Background music */
  useEffect(() => {
    audioRef.current = new Audio(bgMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const startMusic = () => {
      audioRef.current?.play().catch(() => {});
      window.removeEventListener('click', startMusic);
      window.removeEventListener('keydown', startMusic);
    };

    window.addEventListener('click', startMusic);
    window.addEventListener('keydown', startMusic);

    return () => audioRef.current?.pause();
  }, []);

  /* ⏱ Auto slide */
  /* ⏱ Auto slide */
  useEffect(() => {
    if (!autoPlay) return;

    intervalRef.current = setInterval(() => {
      setDirection(1);

      setCurrentSlide((prev) => {
        // If last slide, stop auto-play
        if (prev === sections.length - 1) {
          clearInterval(intervalRef.current!);
          return prev; // stay on last slide
        }
        return prev + 1;
      });
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay]);

  const stopAuto = () => setAutoPlay(false);

  const nextSlide = () => {
    stopAuto();
    if (currentSlide < sections.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    stopAuto();
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    stopAuto();
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const CurrentComponent = sections[currentSlide].component;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div className='relative w-full h-screen overflow-hidden bg-neutral-900 text-white'>
      <AnimatePresence
        initial={false}
        custom={direction}
        mode='wait'
      >
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className='absolute inset-0'
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>

      {/* ⬅️ LEFT ARROW — UNCHANGED DESIGN */}
      {currentSlide > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='fixed left-8 top-1/2 -translate-y-1/2 z-50 group'
          onClick={prevSlide}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='w-14 h-14 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/40'
          >
            <ChevronLeft className='w-6 h-6' />
          </motion.div>
        </motion.button>
      )}

      {/* ➡️ RIGHT ARROW — UNCHANGED DESIGN */}
      {currentSlide < sections.length - 1 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='fixed right-8 top-1/2 -translate-y-1/2 z-50 group'
          onClick={nextSlide}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='w-14 h-14 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/40'
          >
            <ChevronRight className='w-6 h-6' />
          </motion.div>
        </motion.button>
      )}

      {/* Progress */}
      <div className='fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3'>
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-12 bg-white' : 'w-8 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
