import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function HeroSection() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-neutral-950">

      {/* ================= CLICK TO ENTER OVERLAY ================= */}
      <AnimatePresence>
        {!entered && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-neutral-950 cursor-pointer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            onClick={() => setEntered(true)}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <p className="text-xs tracking-[0.4em] uppercase text-white/50 mb-4">
                Welcome
              </p>
              <p className="text-2xl md:text-3xl font-light text-white">
                Click to Enter
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO CONTENT (ONLY AFTER ENTER) ================= */}
      {entered && (
        <>
          {/* ================= BACKGROUND ================= */}
          <div className="absolute inset-0 pointer-events-none">

            {/* ===== BLACK HOLE PARTICLES ===== */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(28)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: Math.random() > 0.7 ? 3 : 2,
                    height: Math.random() > 0.7 ? 3 : 2,
                    opacity: 0.14,
                  }}
                  initial={{
                    rotate: Math.random() * 360,
                    x: Math.random() * 500 - 250,
                    y: Math.random() * 500 - 250,
                    scale: Math.random() * 0.6 + 0.4,
                  }}
                  animate={{
                    rotate: 360,
                    x: 0,
                    y: 0,
                    opacity: [0.05, 0.18, 0.05],
                  }}
                  transition={{
                    rotate: {
                      duration: 60 + Math.random() * 40,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    x: {
                      duration: 28 + Math.random() * 20,
                      repeat: Infinity,
                      ease: 'easeIn',
                    },
                    y: {
                      duration: 28 + Math.random() * 20,
                      repeat: Infinity,
                      ease: 'easeIn',
                    },
                    opacity: {
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                />
              ))}
            </div>

            {/* ===== ORBIT RINGS ===== */}
            <motion.svg
              className="absolute inset-0 w-full h-full opacity-[0.05]"
              viewBox="0 0 1200 700"
              preserveAspectRatio="xMidYMid slice"
            >
              <motion.g
                stroke="white"
                strokeWidth="0.8"
                fill="none"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 180,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ transformOrigin: '600px 350px' }}
              >
                <circle cx="600" cy="350" r="260" />
                <circle cx="600" cy="350" r="180" />
                <circle cx="600" cy="350" r="110" />
              </motion.g>

              <motion.g
                stroke="white"
                strokeWidth="0.6"
                fill="none"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 240,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ transformOrigin: '600px 350px' }}
              >
                <circle cx="600" cy="350" r="320" />
              </motion.g>
            </motion.svg>

            {/* ===== SUBTLE MOVING GRID ===== */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '160px 160px',
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.03,
                backgroundPosition: ['0px 0px', '160px 160px'],
              }}
              transition={{
                opacity: { duration: 1.2 },
                backgroundPosition: {
                  duration: 50,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            />

            {/* ===== CENTER MASK ===== */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.35) 75%, rgba(0,0,0,0) 88%)',
              }}
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="block text-xs tracking-[0.35em] uppercase text-white/50 mb-6"
              >
                Portfolio
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight"
              >
                UI/UX & Digital Work
                <br />
                <span className="italic text-white/60">
                  Chandanpreet Kaur
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 max-w-xl mx-auto text-white/50 text-sm md:text-base leading-relaxed"
              >
                There is a difference between making a design and creating an experience.
              </motion.p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
