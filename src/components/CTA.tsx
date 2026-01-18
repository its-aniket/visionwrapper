import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, ArrowRight, User, Building2, Mail } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function CTA() {
  const { isDark } = useTheme()
  const [formData, setFormData] = useState({
    contactName: '',
    companyName: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ contactName: '', companyName: '', email: '' })
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }, 800)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const fields = [
    {
      id: 'contactName',
      label: 'Contact Person Name',
      placeholder: 'John Doe',
      icon: User,
      type: 'text'
    },
    {
      id: 'companyName',
      label: 'Company Name',
      placeholder: 'Your Company',
      icon: Building2,
      type: 'text'
    },
    {
      id: 'email',
      label: 'Email Address',
      placeholder: 'john@company.com',
      icon: Mail,
      type: 'email'
    },
  ]

  return (
    <section id="contact" className="py-20 sm:py-32 md:py-40 container mx-auto px-4 sm:px-6 md:px-12">
      <motion.div 
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Gradient backgrounds */}
        <div className="absolute inset-0 hidden sm:block bg-linear-to-br from-foreground via-foreground to-black rounded-2xl sm:rounded-3xl"></div>
        <div className="absolute inset-0 sm:hidden bg-white rounded-2xl sm:rounded-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto p-6 sm:p-12 md:p-16 lg:p-24">
          <motion.div
            className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left side - Content */}
            <motion.div className={isDark ? "text-white" : "text-foreground"}>
              <motion.h2 
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 sm:mb-6 leading-tight ${isDark ?"text-black": "text-white"}`}
                variants={itemVariants}
              >
                Ready to scale?
              </motion.h2>
              <motion.p 
                className={`text-sm sm:text-base md:text-lg opacity-95 mb-8 sm:mb-10 leading-relaxed ${isDark ?  "text-black": "text-white/90"}`}
                variants={itemVariants}
              >
                Join over 500+ enterprise companies transforming their operations with Nexus.
              </motion.p>

              <motion.div
                className="space-y-4 sm:space-y-5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "24/7 Premium Support",
                  "Custom Integration Solutions",
                  "Dedicated Account Manager"
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 sm:gap-4 group"
                    variants={itemVariants}
                  >
                    <motion.div
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center border border-green-400/40"
                      whileHover={{ scale: 1.1 }}
                    >
                        <CheckCircle className="w-4 h-4 text-green-600 sm:text-green-300" />
                    </motion.div>
                    <span className={`text-sm sm:text-base font-medium opacity-95 group-hover:opacity-100 transition-opacity ${isDark ?  "text-black": "text-white/90"}`}>
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              {!submitted ? (
                <motion.div
                  className="relative group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Form glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Form container */}
                  <div className="relative bg-background/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      {fields.map((field, idx) => {
                        const IconComponent = field.icon
                        const value = formData[field.id as keyof typeof formData]
                        const isFilled = value !== ''

                        return (
                          <motion.div
                            key={field.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.05 + idx * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="relative group/field"
                              animate={{ y: focusedField === field.id ? -4 : 0 }}
                            >
                              {/* Label */}
                              <motion.label
                                htmlFor={field.id}
                                className={`text-xs sm:text-sm font-semibold mb-2 sm:mb-3 flex items-center gap-2 ${isDark ?  "text-black": "text-white/90"}`}
                              >
                                <motion.div
                                  animate={{
                                    color: focusedField === field.id ? '#60a5fa' : isDark ? '#ffffff' : '#000000'
                                  }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <IconComponent className={`w-4 h-4 ${isDark ?  "black": "text-white/90"}`} />
                                </motion.div>
                                {field.label}
                              </motion.label>

                              {/* Input wrapper with animated border */}
                              <div className="relative">
                                {/* Input field */}
                                <motion.input
                                  id={field.id}
                                  type={field.type}
                                  name={field.id}
                                  value={value}
                                  onChange={handleChange}
                                  onFocus={() => setFocusedField(field.id)}
                                  onBlur={() => setFocusedField(null)}
                                  required
                                  placeholder={field.placeholder}
                                  className={`relative w-full px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-xl ${isDark ? "bg-white/0 sm:bg-white/25 border border-gray-300 sm:border-white/50 text-foreground sm:text-background placeholder:text-gray-500 sm:placeholder:text-white/70 hover:bg-white/0 sm:hover:bg-white/30 hover:border-gray-400 sm:hover:border-white/60 focus:bg-white/0 sm:focus:bg-white/35 focus:border-gray-500 sm:focus:border-white/70" : "bg-gray-100 border border-gray-300 text-foreground placeholder:text-gray-400 hover:bg-gray-50 hover:border-gray-400 focus:bg-white focus:border-primary"} text-sm sm:text-base focus:outline-none transition-all duration-300 backdrop-blur-sm`}
                                  whileFocus={{
                                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                                  }}
                                />

                                {/* Animated bottom border */}
                                <motion.div
                                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full"
                                  animate={{
                                    width: focusedField === field.id ? '100%' : '0%',
                                    opacity: focusedField === field.id ? 1 : 0
                                  }}
                                  transition={{ duration: 0.3 }}
                                ></motion.div>

                                {/* Check icon when filled */}
                                <motion.div
                                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                                  animate={{
                                    opacity: isFilled && focusedField !== field.id ? 1 : 0,
                                    scale: isFilled && focusedField !== field.id ? 1 : 0.8
                                  }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <motion.div
                                    className="w-5 h-5 rounded-full bg-green-400/20 border border-green-400 flex items-center justify-center"
                                  >
                                    <CheckCircle className="w-3.5 h-3.5 text-green-300" />
                                  </motion.div>
                                </motion.div>
                              </div>

                              {/* Helper text */}
                              <motion.p
                                className={`text-xs mt-2 ${isDark ?  "text-black": "text-white/90"}`}
                                animate={{
                                  opacity: focusedField === field.id ? 0.8 : 0.6
                                }}
                              >
                                {field.id === 'email' ? 'We\'ll never share your email' : 'This helps us serve you better'}
                              </motion.p>
                            </motion.div>
                          </motion.div>
                        )
                      })}

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                        viewport={{ once: true }}
                        className="pt-2 sm:pt-4"
                      >
                        <motion.button
                          type="submit"
                          disabled={loading}
                          className="w-full relative group/btn overflow-hidden"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Animated button background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-xl"
                            animate={{
                              backgroundPosition: ['0% center', '100% center', '0% center']
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            style={{ backgroundSize: '200% 200%' }}
                          ></motion.div>

                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover/btn:opacity-100 blur-lg transition-opacity duration-300"></div>
                          
                          {/* Button content */}
                          <div className={`relative ${isDark ? "bg-background text-foreground" : "bg-primary text-white"} px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 ${isDark ? "group-hover/btn:bg-background/95" : "group-hover/btn:bg-primary/90"} transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed`}>
                            <span>{loading ? 'Submitting...' : 'Get Started Now'}</span>
                            {!loading && (
                              <motion.div
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <ArrowRight className="w-4 h-4" />
                              </motion.div>
                            )}
                            {loading && (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                <CheckCircle className="w-4 h-4" />
                              </motion.div>
                            )}
                          </div>
                        </motion.button>
                      </motion.div>

                      {/* Helper text */}
                      <motion.p
                        className={`text-xs text-center font-medium ${isDark ? "text-white/80" : "text-foreground"}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        ✓ We'll be in touch within 24 hours
                      </motion.p>
                    </form>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                >
                  {/* Success glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-2xl blur-xl"></div>
                  
                  <div className="relative bg-background/10 backdrop-blur-xl rounded-2xl p-12 border border-green-400/30 text-center">
                    <motion.div
                      className="flex justify-center mb-6"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                    >
                      <div className="relative">
                        <motion.div
                          className="absolute inset-0 bg-green-400/30 rounded-full blur-lg"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        ></motion.div>
                        <CheckCircle className="w-20 h-20 text-green-400 relative" />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h3 className={`text-3xl font-bold font-heading mb-3 ${isDark ? "text-white" : "text-foreground"}`}>
                        Thank You!
                      </h3>
                      <p className={`text-base leading-relaxed ${isDark ? "text-white/90" : "text-foreground/80"}`}>
                        We've received your information and will contact you shortly. Get ready to transform your business!
                      </p>
                    </motion.div>

                    {/* Animated checkmarks */}
                    <motion.div
                      className="flex gap-2 justify-center mt-6 opacity-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
