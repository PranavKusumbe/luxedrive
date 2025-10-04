import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

const Hero = () => {
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('loadeddata', () => {
        setVideoLoaded(true)
      })
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 0.9, 0.36, 1] }}
        className="absolute inset-0"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/HEROSECTION.png"
          preload="auto"
        >
          <source src="/assets/HERO.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-900 via-bg-900/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 0.9, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-accent-500 text-sm md:text-base font-medium tracking-widest uppercase mb-6"
            >
              Redefining Luxury
            </motion.p>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-text-primary mb-6"
            >
              Experience The
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Art of Motion
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-muted text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
            >
              Where engineering excellence meets timeless design. Discover a collection
              of vehicles that transcend ordinary expectations.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <MagneticButton href="/models">
                <button className="px-8 py-4 gradient-accent text-white rounded-md font-medium text-base hover:scale-105 transition-transform duration-300 focus-ring">
                  Explore Collection
                </button>
              </MagneticButton>

              <MagneticButton href="/contact">
                <button className="px-8 py-4 bg-transparent border border-accent-500 text-accent-500 rounded-md font-medium text-base hover:bg-accent-500 hover:text-white transition-all duration-300 focus-ring">
                  Book Test Drive
                </button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-muted text-xs uppercase tracking-widest mb-2">Scroll</span>
          <svg
            className="w-6 h-6 text-accent-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
