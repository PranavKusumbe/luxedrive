import { useState } from 'react'
import { motion } from 'framer-motion'

const GalleryGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 0.9, 0.36, 1] }}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedImage(image)}
            className="group cursor-pointer relative overflow-hidden rounded-md aspect-[4/3] bg-surface-100"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-text-primary text-lg font-semibold">{image.title}</p>
                {image.location && (
                  <p className="text-muted text-sm mt-1">{image.location}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-bg-900/98 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-text-primary hover:text-accent-500 transition-colors duration-300 focus-ring p-2 rounded-md"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-md"
            />
            <div className="mt-6 text-center">
              <p className="text-text-primary text-xl font-semibold">{selectedImage.title}</p>
              {selectedImage.location && (
                <p className="text-muted mt-2">{selectedImage.location}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default GalleryGrid
