import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { CheckCircle, Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
      
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@visionwrapper.com',
      link: 'mailto:hello@visionwrapper.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (800) VISION-1',
      link: 'tel:+18004874466'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Tech Street, San Francisco, CA 94105',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '24 hours on business days',
      link: '#'
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <motion.div
          className="container mx-auto px-6 mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="max-w-3xl">
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-primary">We're here to help</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
              Let's Build Something <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about VisionWrapper? Our team is ready to discuss how we can help transform your business. Reach out and let's start a conversation.
            </p>
          </motion.div>
        </motion.div>

        <div className="container mx-auto px-6">
          {/* Contact Info Cards */}
          

          {/* Form and Info Split Layout */}
          <div className="grid lg:grid-cols-3 gap-12 mb-24 items-start">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1  to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Form container */}
                <div className="relative bg-secondary rounded-3xl p-10 md:p-12 border border-border group-hover:border-primary/40 transition-all duration-300 backdrop-blur-sm">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="text-2xl font-bold font-heading mb-8">Send us a Message</h3>

                      <motion.div
                        className="grid md:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {/* Name */}
                        <motion.div variants={itemVariants}>
                          <label htmlFor="name" className="block text-sm font-semibold mb-3">
                            Full Name *
                          </label>
                          <motion.div
                            className="relative"
                            animate={{ y: focusedField === 'name' ? -2 : 0 }}
                          >
                            <input
                              id="name"
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                              required
                              placeholder="John Doe"
                              className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:bg-background/80"
                            />
                            <motion.div
                              className="absolute bottom-0 left-0 h-0.5  rounded-full"
                              animate={{
                                width: focusedField === 'name' ? '100%' : '0%',
                                opacity: focusedField === 'name' ? 1 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            ></motion.div>
                          </motion.div>
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={itemVariants}>
                          <label htmlFor="email" className="block text-sm font-semibold mb-3">
                            Email Address *
                          </label>
                          <motion.div
                            className="relative"
                            animate={{ y: focusedField === 'email' ? -2 : 0 }}
                          >
                            <input
                              id="email"
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                              required
                              placeholder="john@company.com"
                              className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:bg-background/80"
                            />
                            <motion.div
                              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full"
                              animate={{
                                width: focusedField === 'email' ? '100%' : '0%',
                                opacity: focusedField === 'email' ? 1 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            ></motion.div>
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      {/* Company */}
                      <motion.div variants={itemVariants}>
                        <label htmlFor="company" className="block text-sm font-semibold mb-3">
                          Company Name
                        </label>
                        <motion.div
                          className="relative"
                          animate={{ y: focusedField === 'company' ? -2 : 0 }}
                        >
                          <input
                            id="company"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('company')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Your Company"
                            className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:bg-background/80"
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full"
                            animate={{
                              width: focusedField === 'company' ? '100%' : '0%',
                              opacity: focusedField === 'company' ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                          ></motion.div>
                        </motion.div>
                      </motion.div>

                      {/* Message */}
                      <motion.div variants={itemVariants}>
                        <label htmlFor="message" className="block text-sm font-semibold mb-3">
                          Message *
                        </label>
                        <motion.div
                          className="relative"
                          animate={{ y: focusedField === 'message' ? -2 : 0 }}
                        >
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            required
                            placeholder="Tell us more about your inquiry..."
                            rows={5}
                            className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none hover:bg-background/80"
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full"
                            animate={{
                              width: focusedField === 'message' ? '100%' : '0%',
                              opacity: focusedField === 'message' ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                          ></motion.div>
                        </motion.div>
                      </motion.div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full relative group/btn overflow-hidden mt-8"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-xl opacity-0 group-hover/btn:opacity-100 blur-lg transition-opacity duration-300"></div>
                        <div className="relative bg-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed group-hover/btn:shadow-lg">
                          <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                          {!loading && (
                            <motion.div
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="w-4 h-4" />
                            </motion.div>
                          )}
                        </div>
                      </motion.button>
                    </form>
                  ) : (
                    <motion.div
                      className="flex flex-col items-center justify-center py-12 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                        className="mb-6"
                      >
                        <div className="relative">
                          <motion.div
                            className="absolute inset-0 bg-green-400/30 rounded-full blur-lg"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          ></motion.div>
                          <CheckCircle className="w-20 h-20 text-green-500 relative" />
                        </div>
                      </motion.div>
                      <h3 className="text-3xl font-bold font-heading mb-3">Message Sent!</h3>
                      <p className="text-muted-foreground mb-2">
                        Thank you for reaching out. We'll respond within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Why Contact Us */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">Why Choose Us?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to understanding your unique needs and delivering solutions that drive real results.
                </p>
              </div>

              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { title: 'Expert Team', desc: 'Decades of combined experience in digital transformation' },
                  { title: 'Fast Response', desc: 'Get answers within 24 hours on business days' },
                  { title: 'Custom Solutions', desc: 'Tailored approaches for your specific challenges' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/40 transition-all duration-300 hover:bg-secondary"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-12 max-w-7xl mx-auto px-6">
              <h2 className="text-4xl font-bold font-heading mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Can't find what you're looking for? Check our FAQs below.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  q: 'What is your typical response time?',
                  a: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, call us directly.'
                },
                {
                  q: 'Do you offer free consultations?',
                  a: 'Yes! We provide a complimentary initial consultation to understand your needs and discuss potential solutions.'
                },
                {
                  q: 'What is your service area?',
                  a: 'We work with clients worldwide. Our digital-first approach means location is not a barrier to our services.'
                },
                {
                  q: 'How do I get started?',
                  a: 'Simply fill out the contact form above or reach out directly. Our team will guide you through the process.'
                },
                {
                  q: 'What industries do you serve?',
                  a: 'We have experience across various sectors including finance, healthcare, retail, and technology companies.'
                },
                {
                  q: 'Do you provide support after implementation?',
                  a: 'Absolutely! We provide comprehensive support and maintenance packages tailored to your needs.'
                },
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="bg-secondary rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  <h4 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{faq.q}</h4>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
