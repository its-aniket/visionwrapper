import { ChevronRight, Code, Workflow, Brain, Bot, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Full-Stack Web Development',
    subtitle: 'From Concept to Deployment',
    description: 'Transform your ideas into reality with high-performance, scalable web applications. Our end-to-end approach ensures a seamless journey from design to deployment.',
    points: [
      'Engaging UI/UX: Designs that captivate and convert.',
      'Robust Architecture: Modern frameworks for reliability.',
      'Effortless Scaling: Cloud-ready solutions with CI/CD.'
    ],
    icon: Code,
    image: '/services/web.png'
  },
  {
    number: '02',
    title: 'Intelligent Workflow Automation',
    subtitle: 'Eliminate Manual Bottlenecks',
    description: 'Optimize your operations by automating repetitive tasks. Free your team to focus on what truly matters.',
    points: [
      'Streamlined Processes: Identify and automate key workflows.',
      'Seamless Integration: Connect tools for unified operations.',
      'Custom Solutions: Tailored scripts for unique challenges.'
    ],
    icon: Workflow,
    image: '/services/automation.png'
  },
  {
    number: '03',
    title: 'Custom AI & ML Model Building',
    subtitle: 'Turn Data into Actionable Insights',
    description: 'Leverage the power of AI to unlock insights and drive smarter decisions. From predictive analytics to advanced recognition systems, we deliver tailored solutions.',
    points: [
      'Forecast Trends: Predictive models for future insights.',
      'Understand Language: NLP for smarter communication.',
      'Visual Intelligence: Advanced image recognition systems.'
    ],
    icon: Brain,
    image: '/services/neural_ai.png'
  },
  {
    number: '04',
    title: 'Agentic AI & Chatbot Integration',
    subtitle: 'The Next Generation of Interaction',
    description: 'Empower your business with AI-driven agents that go beyond chat. Automate actions, navigate data, and execute workflows effortlessly.',
    points: [
      'Human-Like Conversations: Advanced AI for natural interactions.',
      'Actionable Intelligence: Agents that perform tasks autonomously.',
      'Data-Driven Answers: AI grounded in your private data.'
    ],
    icon: Bot,
    image: '/services/agentic_ai.png'
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              className="min-h-screen flex items-center py-24 border-b border-border/50 last:border-0 sticky top-0 bg-background"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ margin: "-100px" }}
            >
              <motion.div 
                className="grid lg:grid-cols-2 gap-16 items-center w-full p-8 md:p-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="p-6 md:p-8">
                  <span className="text-6xl font-heading font-bold text-muted-foreground/20 block mb-6">{service.number}</span>
                  <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4 tracking-tighter">{service.title}</h2>
                  <p className="text-sm font-medium text-foreground/60 mb-8 uppercase tracking-widest">{service.subtitle}</p>
                  <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl">{service.description}</p>
                  
                  <div className="space-y-4">
                    {service.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-3 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-square  lg:aspect-auto lg:h-140 bg-secondary/30 rounded-3xl overflow-hidden border border-border group cursor-crosshair p-6 md:p-8">
                  <motion.div 
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <img 
                      alt={service.title} 
                      className="w-full h-full object-cover  transition-all duration-1000" 
                      src={service.image}
                    />
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <service.icon className="w-32 h-32 text-foreground/20 group-hover:text-foreground/40 transition-all duration-700 scale-100 group-hover:scale-110" />
                    </motion.div>
                  </div>
                  <motion.div 
                    className="absolute bottom-12 left-12 z-20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <button className="bg-foreground text-background w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-6 h-6" />
                    </button>
                  </motion.div>
                  
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
