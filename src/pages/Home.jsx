import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ProductShowcase from '../components/ProductShowcase'
import ModelCard from '../components/ModelCard'
import { useState } from 'react'
import ModelModal from '../components/ModelModal'

const Home = () => {
  const [selectedModel, setSelectedModel] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const models = [
    {
      id: 1,
      name: 'Luxury Sedan',
      category: 'Sedan',
      image: '/assets/Luxury Sedan.png',
      description: 'The perfect blend of performance and sophistication. Experience unparalleled comfort in every journey.',
      power: 450,
      speed: 3.8,
      topSpeed: 180,
      price: 95,
    },
    {
      id: 2,
      name: 'Luxury SUV',
      category: 'SUV',
      image: '/assets/Luxury SUV.png',
      description: 'Commanding presence meets refined elegance. Conquer any terrain with confidence and style.',
      power: 500,
      speed: 4.2,
      topSpeed: 175,
      price: 110,
    },
    {
      id: 3,
      name: 'Sports Roadster',
      category: 'Sports',
      image: '/assets/Sports Roadster.png',
      description: 'Pure exhilaration in motion. Precision engineering for the ultimate driving experience.',
      power: 600,
      speed: 2.9,
      topSpeed: 205,
      price: 145,
    },
  ]

  const galleryPreview = [
    { src: '/assets/Coastal Drive.png', title: 'Coastal Drive' },
    { src: '/assets/Urban Night.png', title: 'Urban Night' },
    { src: '/assets/Architectural.png', title: 'Architectural Beauty' },
  ]

  const handleModelClick = (model) => {
    setSelectedModel(model)
    setIsModalOpen(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Models Section */}
      <section className="py-24 px-6 bg-bg-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent-500 text-sm font-medium tracking-widest uppercase">
              Our Collection
            </span>
            <h2 className="text-text-primary mt-4 mb-6">
              Discover Your
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Perfect Match
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Each vehicle in our collection represents the pinnacle of automotive excellence,
              meticulously crafted to exceed your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model) => (
              <ModelCard
                key={model.id}
                model={model}
                onClick={() => handleModelClick(model)}
              />
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a href="/models">
              <button className="px-8 py-4 bg-transparent border border-accent-500 text-accent-500 rounded-md font-medium hover:bg-accent-500 hover:text-white transition-all duration-300 focus-ring">
                View All Models
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 px-6 bg-surface-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent-500 text-sm font-medium tracking-widest uppercase">
              Gallery
            </span>
            <h2 className="text-text-primary mt-4">
              Captured
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Moments
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryPreview.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-md aspect-[4/3] cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6">
                    <p className="text-text-primary text-lg font-semibold">{image.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a href="/gallery">
              <button className="px-8 py-4 gradient-accent text-white rounded-md font-medium hover:scale-105 transition-transform duration-300 focus-ring">
                Explore Full Gallery
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-bg-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-text-primary mb-6">
              Ready to Experience
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Excellence?
              </span>
            </h2>
            <p className="text-muted text-lg mb-12 max-w-2xl mx-auto">
              Schedule a private consultation with our luxury automotive specialists
              and discover your perfect vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact">
                <button className="px-8 py-4 gradient-accent text-white rounded-md font-medium hover:scale-105 transition-transform duration-300 focus-ring">
                  Schedule Consultation
                </button>
              </a>
              <a href="/models">
                <button className="px-8 py-4 bg-transparent border border-accent-500 text-accent-500 rounded-md font-medium hover:bg-accent-500 hover:text-white transition-all duration-300 focus-ring">
                  Browse Collection
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Model Modal */}
      <ModelModal
        model={selectedModel}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.div>
  )
}

export default Home
