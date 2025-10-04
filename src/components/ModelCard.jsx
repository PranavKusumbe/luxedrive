import { motion } from 'framer-motion'

const ModelCard = ({ model, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 0.9, 0.36, 1] }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-md bg-surface-100 aspect-[4/3]">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-900 via-bg-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Badge */}
        <div className="absolute top-6 right-6 px-4 py-2 glass-morphism rounded-md">
          <span className="text-accent-500 text-xs font-medium tracking-wide uppercase">
            {model.category}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-text-primary mb-2 group-hover:text-accent-500 transition-colors duration-300">
          {model.name}
        </h3>
        <p className="text-muted text-sm mb-4 line-clamp-2">{model.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-muted">
              <span className="text-accent-500 font-semibold">{model.power}</span> HP
            </span>
            <span className="text-muted">•</span>
            <span className="text-muted">
              <span className="text-accent-500 font-semibold">{model.speed}</span>s 0-60
            </span>
          </div>
          
          <motion.div
            whileHover={{ x: 5 }}
            className="text-accent-500 text-sm font-medium flex items-center space-x-2"
          >
            <span>Explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ModelCard
