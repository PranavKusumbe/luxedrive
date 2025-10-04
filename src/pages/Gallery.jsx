import { motion } from 'framer-motion'
import GalleryGrid from '../components/GalleryGrid'

const Gallery = () => {
  const images = [
    {
      src: '/assets/Coastal Drive.png',
      alt: 'Coastal Drive',
      title: 'Coastal Drive',
      location: 'Pacific Coast Highway',
    },
    {
      src: '/assets/Urban Night.png',
      alt: 'Urban Night',
      title: 'Urban Night',
      location: 'Downtown Metropolitan',
    },
    {
      src: '/assets/Architectural.png',
      alt: 'Architectural Beauty',
      title: 'Architectural Beauty',
      location: 'Modern Design District',
    },
    {
      src: '/assets/About Page.png',
      alt: 'Luxury Showcase',
      title: 'Luxury Showcase',
      location: 'Private Collection',
    },
    {
      src: '/assets/Luxury Sedan.png',
      alt: 'Luxury Sedan',
      title: 'Luxury Sedan',
      location: 'Studio Photoshoot',
    },
    {
      src: '/assets/Luxury SUV.png',
      alt: 'Luxury SUV',
      title: 'Luxury SUV',
      location: 'Mountain Terrain',
    },
    {
      src: '/assets/Sports Roadster.png',
      alt: 'Sports Roadster',
      title: 'Sports Roadster',
      location: 'Racing Circuit',
    },
    {
      src: '/assets/HEADLIGHT.png',
      alt: 'Headlight Detail',
      title: 'Headlight Detail',
      location: 'Design Studio',
    },
    {
      src: '/assets/Interior Stitching.png',
      alt: 'Interior Stitching',
      title: 'Interior Stitching',
      location: 'Craftsmanship Close-up',
    },
  ]

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
            src="/assets/Architectural.png"
            alt="Gallery"
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
            Visual Journey
          </motion.span>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-primary mt-6 mb-8"
          >
            Captured
          <span 
  className="block bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
              Moments
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Explore our collection of stunning imagery showcasing the beauty,
            craftsmanship, and artistry of LuxeDrive vehicles.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 bg-bg-900">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid images={images} />
        </div>
      </section>

      {/* Detail Showcase */}
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
              Attention to Detail
            </span>
            <h2 className="text-text-primary mt-4">
              Craftsmanship
            <span 
  className="block bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
                Close-Up
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                image: '/assets/HEADLIGHT.png',
                title: 'Precision Lighting',
                description: 'Advanced LED technology meets sculptural design.',
              },
              {
                image: '/assets/Interior Stitching.png',
                title: 'Hand-Stitched Interiors',
                description: 'Every stitch a testament to our commitment to perfection.',
              },
              {
                image: '/assets/Wheel & Brake.png',
                title: 'Performance Engineering',
                description: 'Carbon ceramic brakes for uncompromising stopping power.',
              },
            ].map((detail, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-md aspect-square bg-bg-900 mb-6">
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-text-primary text-xl mb-3">{detail.title}</h3>
                <p className="text-muted leading-relaxed">{detail.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
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
              The LuxeDrive Lifestyle
            </span>
            <h2 className="text-text-primary mt-4">
              Beyond
            <span 
  className="block bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
                Transportation
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image: '/assets/Coastal Drive.png',
                title: 'Endless Horizons',
                description: 'Where the journey becomes the destination.',
              },
              {
                image: '/assets/Urban Night.png',
                title: 'City Sophistication',
                description: 'Commanding presence in any environment.',
              },
            ].map((lifestyle, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-md aspect-[16/9] cursor-pointer"
              >
                <img
                  src={lifestyle.image}
                  alt={lifestyle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-900 via-bg-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-text-primary text-2xl mb-3">{lifestyle.title}</h3>
                    <p className="text-muted text-lg">{lifestyle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-surface-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-text-primary mb-6">
              Ready to Create
            <span 
  className="block bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
                Your Story?
              </span>
            </h2>
            <p className="text-muted text-lg mb-12">
              Experience the artistry and craftsmanship in person. Visit our showroom
              or schedule a private viewing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact">
                <button className="px-8 py-4 gradient-accent text-white rounded-md font-medium hover:scale-105 transition-transform duration-300 focus-ring">
                  Visit Showroom
                </button>
              </a>
              <a href="/models">
                <button className="px-8 py-4 bg-transparent border border-accent-500 text-accent-500 rounded-md font-medium hover:bg-accent-500 hover:text-white transition-all duration-300 focus-ring">
                  View Models
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Gallery
