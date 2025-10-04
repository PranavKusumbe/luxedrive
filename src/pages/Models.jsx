import { useState } from 'react'
import { motion } from 'framer-motion'
import ModelCard from '../components/ModelCard'
import ModelModal from '../components/ModelModal'

const Models = () => {
  const [selectedModel, setSelectedModel] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState('all')

  const models = [
    {
      id: 1,
      name: 'Luxury Sedan',
      category: 'Sedan',
      image: '/assets/Luxury Sedan.png',
      description: 'The perfect blend of performance and sophistication. Experience unparalleled comfort with cutting-edge technology and refined craftsmanship in every journey.',
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
      description: 'Commanding presence meets refined elegance. Conquer any terrain with confidence and style, backed by advanced all-wheel drive and intelligent suspension.',
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
      description: 'Pure exhilaration in motion. Precision engineering meets aerodynamic excellence for the ultimate open-top driving experience that thrills on every curve.',
      power: 600,
      speed: 2.9,
      topSpeed: 205,
      price: 145,
    },
  ]

  const handleModelClick = (model) => {
    setSelectedModel(model)
    setIsModalOpen(true)
  }

  const filteredModels = filter === 'all' 
    ? models 
    : models.filter(model => model.category.toLowerCase() === filter.toLowerCase())

  const categories = ['all', 'sedan', 'suv', 'sports']

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/HEROSECTION.png"
            alt="Our Models"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-900 via-bg-900/70 to-bg-900/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent-500 text-sm font-medium tracking-widest uppercase"
          >
            Our Collection
          </motion.span>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-primary mt-6 mb-8"
          >
            Discover Your
          <span 
  className="block bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
              Perfect Vehicle
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Explore our meticulously crafted collection of luxury vehicles,
            each designed to deliver an extraordinary driving experience.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 bg-surface-100 border-b border-accent-500/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-md font-medium text-sm tracking-wide uppercase transition-all duration-300 ${
                  filter === category
                    ? 'gradient-accent text-white scale-105'
                    : 'bg-transparent border border-accent-500/30 text-muted hover:border-accent-500 hover:text-accent-500'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-24 px-6 bg-bg-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ModelCard
                  model={model}
                  onClick={() => handleModelClick(model)}
                />
              </motion.div>
            ))}
          </div>

          {filteredModels.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-muted text-lg">No models found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose LuxeDrive
            </span>
            <h2 className="text-text-primary mt-4">
              Unmatched
            <span 
  className="block bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
                Excellence
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Bespoke Design',
                description: 'Customize every detail to match your unique vision and style.',
                icon: '✨',
              },
              {
                title: 'Performance',
                description: 'Cutting-edge engineering delivering unparalleled power and precision.',
                icon: '⚡',
              },
              {
                title: 'Luxury Interiors',
                description: 'Hand-crafted with the finest materials for ultimate comfort.',
                icon: '💎',
              },
              {
                title: 'Technology',
                description: 'Advanced systems seamlessly integrated for intuitive control.',
                icon: '🔧',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-bg-900 rounded-md border border-accent-500/20 hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-text-primary text-xl mb-4">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
              Experience Luxury
            <span 
  className="block bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
                First-Hand
              </span>
            </h2>
            <p className="text-muted text-lg mb-12">
              Schedule a test drive or private consultation to experience the
              LuxeDrive difference for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact">
                <button className="px-8 py-4 gradient-accent text-white rounded-md font-medium hover:scale-105 transition-transform duration-300 focus-ring">
                  Book Test Drive
                </button>
              </a>
              <a href="/gallery">
                <button className="px-8 py-4 bg-transparent border border-accent-500 text-accent-500 rounded-md font-medium hover:bg-accent-500 hover:text-white transition-all duration-300 focus-ring">
                  View Gallery
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

export default Models
