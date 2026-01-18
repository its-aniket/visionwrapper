import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
// @ts-ignore
import ParticleBackground from './ParticleBackground.jsx'
export default function Hero() {
  return (
    <section className="relative z-10 px-6 md:px-12 min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-background">
    <ParticleBackground />
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="relative z-10 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-6 py-2 mb-8 border border-border rounded-full bg-secondary/50 backdrop-blur-sm">
            <span className="text-xs font-semibold tracking-wider uppercase">Clearity over complexity</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-8 tracking-tight">
            Bring Order<br />
            <span className="text-muted-foreground">To Digital Chaos.</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md mb-12 leading-relaxed">
            As businesses grow, tools fragment and systems break. VisionWrapper designs cohesive digital systems that scale without complexity.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:opacity-90 bg-primary text-primary-foreground border border-primary-border min-h-10 rounded-full px-8 text-base h-12"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Start Project
            </motion.button>
            <motion.button 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:opacity-90 border border-border shadow-xs min-h-10 rounded-full px-8 text-base h-12 group"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              View Case Studies
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="relative rounded-2xl h-150 w-full hidden lg:block rounded-3xl overflow-hidden p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute rounded-2xl inset-0 bg-linear-to-tr from-background via-transparent to-transparent z-10 opacity-40"></div>
          <motion.img 
            alt="Abstract Architecture" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100" 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-foreground/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      </div>
    </section>
  )
}
