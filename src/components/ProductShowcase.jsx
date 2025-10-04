import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    const container = containerRef.current

    if (!section || !video || !container) return

    // Ensure video loads and plays
    video.load()
    video.play().catch(err => console.log('Video play failed:', err))

    // Create horizontal scroll effect
    const panels = gsap.utils.toArray('.showcase-panel')
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => '+=' + container.offsetWidth,
        anticipatePin: 1,
      },
    })

    tl.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth),
      ease: 'none',
    })

    // Video playback synced with scroll
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        if (video.duration) {
          video.currentTime = video.duration * self.progress
        }
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  const features = [
    {
      title: 'Performance',
      description: 'Unleash unparalleled power with precision-engineered motors and adaptive dynamics.',
      stat: '0-60 mph in 2.9s',
      image: '/assets/performance.png',
    },
    {
      title: 'Luxury',
      description: 'Hand-crafted interiors with the finest materials and meticulous attention to detail.',
      stat: 'Bespoke Customization',
      image: '/assets/luxury.png',
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology seamlessly integrated for an intuitive driving experience.',
      stat: 'AI-Powered Systems',
      image: '/assets/innovation.png',
    },
    {
      title: 'Sustainability',
      description: 'Leading the charge towards a sustainable future without compromising performance.',
      stat: 'Zero Emissions',
      image: '/assets/sustainability.png',
    },
  ]

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-surface-100">
      <div ref={containerRef} className="flex h-full">
        {/* Video Panel */}
        <div className="showcase-panel flex-shrink-0 w-screen h-full relative flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/product-poster.jpg"
          >
            <source src="/assets/PRODUCT.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-bg-900/80 to-transparent" />
          <div className="absolute left-12 md:left-24 max-w-xl">
            <h2 className="text-text-primary mb-6">
              Engineering
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-muted text-lg">
              Every detail meticulously crafted to deliver an unmatched driving experience.
            </p>
          </div>
        </div>

        {/* Feature Panels */}
        {features.map((feature, index) => (
          <div
            key={index}
            className="showcase-panel flex-shrink-0 w-screen h-full relative flex items-center justify-center px-12 md:px-24"
          >
            {/* Background Image */}
            <img 
              src={feature.image} 
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-bg-900/90 to-bg-900/50" />
            
            {/* Content */}
            <div className="relative z-10 max-w-2xl">
              <span className="text-accent-500 text-sm font-medium tracking-widest uppercase mb-4 block">
                Feature {index + 1}
              </span>
              <h3 className="text-text-primary mb-6">{feature.title}</h3>
              <p className="text-muted text-xl mb-8 leading-relaxed">
                {feature.description}
              </p>
              <div className="inline-block px-8 py-4 border border-accent-500/30 rounded-md backdrop-blur-sm bg-bg-900/30">
                <p className="text-accent-500 text-2xl font-semibold">{feature.stat}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-12 h-1 bg-surface-100 border border-accent-500/30 rounded-full overflow-hidden"
          >
            <div className="h-full bg-accent-500 showcase-progress" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductShowcase
