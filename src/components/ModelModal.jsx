import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ModelModal = ({ model, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    '/assets/HEADLIGHT.png',
    '/assets/Interior Stitching.png',
    '/assets/Wheel & Brake.png',
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!model) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-bg-900/95 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 0.9, 0.36, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto"
          >
            <div className="glass-morphism rounded-md p-6 md:p-12 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-text-primary hover:text-accent-500 transition-colors duration-300 focus-ring p-2 rounded-md"
                aria-label="Close modal"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                {/* Image Carousel */}
                <div className="relative">
                  <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-surface-100">
                    <img
                      src={images[currentImageIndex]}
                      alt={`${model.name} detail ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={prevImage}
                      className="p-3 glass-morphism rounded-md hover:bg-accent-500/20 transition-colors duration-300 focus-ring"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <div className="flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-accent-500 w-8' : 'bg-muted/30'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextImage}
                      className="p-3 glass-morphism rounded-md hover:bg-accent-500/20 transition-colors duration-300 focus-ring"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <span className="text-accent-500 text-sm font-medium tracking-widest uppercase">
                    {model.category}
                  </span>
                  <h2 className="text-text-primary mt-4 mb-6">{model.name}</h2>
                  <p className="text-muted text-lg leading-relaxed mb-8">
                    {model.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-surface-100/50 rounded-md border border-accent-500/20">
                      <p className="text-muted text-sm mb-2">Power</p>
                      <p className="text-accent-500 text-2xl font-semibold">{model.power} HP</p>
                    </div>
                    <div className="p-6 bg-surface-100/50 rounded-md border border-accent-500/20">
                      <p className="text-muted text-sm mb-2">0-60 mph</p>
                      <p className="text-accent-500 text-2xl font-semibold">{model.speed}s</p>
                    </div>
                    <div className="p-6 bg-surface-100/50 rounded-md border border-accent-500/20">
                      <p className="text-muted text-sm mb-2">Top Speed</p>
                      <p className="text-accent-500 text-2xl font-semibold">{model.topSpeed} mph</p>
                    </div>
                    <div className="p-6 bg-surface-100/50 rounded-md border border-accent-500/20">
                      <p className="text-muted text-sm mb-2">Price</p>
                      <p className="text-accent-500 text-2xl font-semibold">${model.price}k</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 px-8 py-4 gradient-accent text-white rounded-md font-medium hover:scale-105 transition-transform duration-300 focus-ring">
                      Configure Your Own
                    </button>
                    <button className="flex-1 px-8 py-4 bg-transparent border border-accent-500 text-accent-500 rounded-md font-medium hover:bg-accent-500 hover:text-white transition-all duration-300 focus-ring">
                      Book Test Drive
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ModelModal
