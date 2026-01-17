import { Shield, Zap, TrendingUp, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Shield,
    title: 'End-to-End Solutions',
    description: 'We manage every step, ensuring a smooth journey from start to finish.',
    highlight: 'Reliable & seamless.'
  },
  {
    icon: Zap,
    title: 'Built to Scale',
    description: 'Our solutions grow with your business, adapting to your needs.',
    highlight: 'Future-ready.'
  },
  {
    icon: TrendingUp,
    title: 'AI-Driven',
    description: 'We embed intelligence into workflows for smarter outcomes.',
    highlight: 'Innovative edge.'
  }
]

export default function Features() {
  return (
    <section id="expertise" className="py-32 md:py-40 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-32 items-center p-8 md:p-12">
<motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="p-6 md:p-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-16 tracking-tighter">
            Why Partner <br /> With Us?
          </h2>
          <div className="space-y-16">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-2xl font-bold font-heading">{feature.title}</h4>
                </div>
                <p className="text-muted-foreground mb-2 text-lg leading-relaxed">{feature.description}</p>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest">{feature.highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

          <div className="relative p-6 md:p-12">
            <motion.div 
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-6 pt-12">
                <motion.div 
                  className="bg-secondary/50 backdrop-blur-sm p-8 h-64 rounded-[2rem] border border-border flex flex-col justify-end"
                  whileHover={{ y: -5 }}
                >
                  <span className="text-5xl font-bold font-heading mb-2 tracking-tighter">99%</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">Uptime</span>
                </motion.div>
                <motion.div 
                  className="bg-foreground text-background p-8 h-80 rounded-[2rem] flex flex-col justify-between"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md"></div>
                  <div>
                    <span className="block text-4xl font-bold font-heading mb-2 tracking-tighter">24/7</span>
                    <span className="text-sm opacity-60 uppercase tracking-widest">Global Support</span>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-6">
                <motion.div 
                  className="bg-background p-8 h-80 rounded-[2rem] border border-border flex flex-col justify-between relative overflow-hidden group"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                  <div className="relative z-10">
                    <CheckCircle className="w-8 h-8 mb-6" />
                    <span className="block text-xl font-bold font-heading mb-2">Security First</span>
                    <span className="text-sm text-muted-foreground">Bank-grade encryption protocols across all layers.</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-secondary/50 backdrop-blur-sm p-8 h-64 rounded-[2rem] border border-border flex flex-col justify-end"
                  whileHover={{ y: -5 }}
                >
                  <span className="text-5xl font-bold font-heading mb-2 tracking-tighter">AI/ML</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">Modern Solutions</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
