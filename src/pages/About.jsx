import { useRef } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const timelineRef = useRef(null)
  const heroImageRef = useRef(null)

  const milestones = [
    {
      year: '1985',
      title: 'The Beginning',
      description: 'Founded with a vision to redefine automotive luxury and performance.',
      image: '/assets/1985.jpeg',
    },
    {
      year: '1995',
      title: 'Global Expansion',
      description: 'Opened flagship showrooms in major cities worldwide, bringing luxury closer to enthusiasts.',
      image: '/assets/1995.jpeg',
    },
    {
      year: '2010',
      title: 'Innovation Era',
      description: 'Pioneered hybrid luxury technology, setting new standards for sustainable performance.',
      image: '/assets/2010.jpeg',
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Leading the electric revolution while maintaining our commitment to uncompromising luxury.',
      image: '/assets/2025.jpeg',
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          ref={heroImageRef}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 0.9, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src="/assets/About Page.png"
            alt="About LuxeDrive"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-900 via-bg-900/60 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent-500 text-sm font-medium tracking-widest uppercase"
          >
            Our Story
          </motion.span>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-primary mt-6 mb-8"
          >
            Crafting Automotive
            <span 
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
>
              Excellence Since 1985
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted text-xl leading-relaxed max-w-3xl mx-auto"
          >
            For nearly four decades, we've been pushing the boundaries of what's possible
            in luxury automotive design and engineering, creating vehicles that inspire and excite.
          </motion.p>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-24 px-6 bg-surface-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent-500 text-sm font-medium tracking-widest uppercase">
                Our Philosophy
              </span>
              <h2 className="text-text-primary mt-4 mb-6">
                Where Passion Meets
              <span 
  className="block bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
                  Precision
                </span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Every vehicle we create is a masterpiece of engineering and design. We believe
                that luxury isn't just about opulence—it's about the perfect harmony of form,
                function, and feeling.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Our commitment to excellence drives us to constantly innovate, ensuring that
                each journey in a LuxeDrive vehicle is an unforgettable experience that
                engages all the senses.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/assets/Architectural.png"
                alt="LuxeDrive Philosophy"
                className="w-full rounded-md shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </span>
            <h2 className="text-text-primary mt-4">
              Principles That
            <span 
  className="block bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
                Drive Us
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'Uncompromising quality in every detail, from design to delivery.',
                icon: '⭐',
              },
              {
                title: 'Innovation',
                description: 'Pioneering technology that enhances the driving experience.',
                icon: '🚀',
              },
              {
                title: 'Sustainability',
                description: 'Building a greener future without sacrificing performance.',
                icon: '🌱',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 glass-morphism rounded-md hover:border-accent-500 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-text-primary mb-4">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </span>
            <h2 className="text-text-primary mt-4">
              Milestones of
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
          
          {/* Recrafted Timeline */}
          <div className="relative">
            {/* Central timeline bar */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent-500/20 transform -translate-x-1/2 hidden lg:block" />

            <div className="space-y-16 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center"
                >
                  {/* Content */}
                  <div className={`p-8 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:order-2 lg:text-left lg:pl-16'}`}>
                    <span className="text-accent-500 text-4xl font-bold">{milestone.year}</span>
                    <h3 className="text-text-primary mt-4 mb-4">{milestone.title}</h3>
                    <p className="text-muted text-lg leading-relaxed">{milestone.description}</p>
                  </div>

                  {/* Image */}
                  <div className={`p-8 ${index % 2 === 0 ? 'lg:pl-16' : 'lg:order-1 lg:pr-16'}`}>
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full rounded-md shadow-xl"
                    />
                  </div>

                  {/* Timeline point */}
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-surface-100 border-2 border-accent-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center">
                    <div className="w-3 h-3 bg-accent-500 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-bg-900">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-text-primary mb-6">
              Join Us on
            <span 
  className="block bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
                This Journey
              </span>
            </h2>
            <p className="text-muted text-lg mb-12">
              Experience the LuxeDrive difference. Visit our showroom or schedule a
              private consultation with our specialists.
            </p>
            <a href="/contact">
              <button className="px-8 py-4 gradient-accent text-white rounded-md font-medium hover:scale-105 transition-transform duration-300 focus-ring">
                Get in Touch
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
