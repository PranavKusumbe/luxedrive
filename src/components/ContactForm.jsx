import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    message: '',
  })

  const [focusedField, setFocusedField] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        model: '',
        message: '',
      })
    }, 3000)
  }

  const inputClasses = "w-full bg-transparent border-b-2 border-muted/30 py-3 px-1 text-text-primary focus:outline-none focus:border-accent-500 transition-all duration-300"

  return (
    <div className="relative">
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 left-0 right-0 p-4 bg-accent-500/20 border border-accent-500 rounded-md text-text-primary text-center mb-6"
        >
          Thank you for your inquiry! We'll be in touch soon.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name */}
        <div className="relative">
          <label
            htmlFor="name"
            className={`absolute left-1 transition-all duration-300 pointer-events-none ${
              focusedField === 'name' || formData.name
                ? 'text-xs text-accent-500 -top-4'
                : 'text-base text-muted top-3'
            }`}
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClasses}
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label
            htmlFor="email"
            className={`absolute left-1 transition-all duration-300 pointer-events-none ${
              focusedField === 'email' || formData.email
                ? 'text-xs text-accent-500 -top-4'
                : 'text-base text-muted top-3'
            }`}
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClasses}
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <label
            htmlFor="phone"
            className={`absolute left-1 transition-all duration-300 pointer-events-none ${
              focusedField === 'phone' || formData.phone
                ? 'text-xs text-accent-500 -top-4'
                : 'text-base text-muted top-3'
            }`}
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
            className={inputClasses}
          />
        </div>

        {/* Model Interest */}
        <div className="relative">
          <label
            htmlFor="model"
            className={`absolute left-1 transition-all duration-300 pointer-events-none ${
              focusedField === 'model' || formData.model
                ? 'text-xs text-accent-500 -top-4'
                : 'text-base text-muted top-3'
            }`}
          >
            Model of Interest
          </label>
          <select
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            onFocus={() => setFocusedField('model')}
            onBlur={() => setFocusedField(null)}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value=""></option>
            <option value="luxury-sedan">Luxury Sedan</option>
            <option value="luxury-suv">Luxury SUV</option>
            <option value="sports-roadster">Sports Roadster</option>
          </select>
        </div>

        {/* Message */}
        <div className="relative">
          <label
            htmlFor="message"
            className={`absolute left-1 transition-all duration-300 pointer-events-none ${
              focusedField === 'message' || formData.message
                ? 'text-xs text-accent-500 -top-4'
                : 'text-base text-muted top-3'
            }`}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            rows="4"
            className={`${inputClasses} resize-none`}
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-8 py-4 gradient-accent text-white rounded-md font-medium text-base focus-ring"
        >
          Submit Inquiry
        </motion.button>
      </form>
    </div>
  )
}

export default ContactForm
