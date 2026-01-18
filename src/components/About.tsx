import { motion } from 'framer-motion'

export default function About() {
  const sections = [
    {
      title: "The Challenge",
      content: "Today, companies rely on many tools, apps, and data systems, yet most of them fail to work well together. VisionWrapper exists to connect these pieces and turn complexity into systems that actually function."
    },
    {
      title: "Our Approach",
      content: "We take powerful technologies, web platforms, automation, and artificial intelligence, and wrap them into simple, reliable solutions. Instead of building isolated tools, we create complete systems where everything fits, works together, and scales naturally."
    },
    {
      title: "What We Build",
      content: "From websites and workflow automation to custom AI models and intelligent agents, every solution is designed end to end. Our focus is not just building technology, but building it the right way, clear, stable, and ready for growth."
    },
    {
      title: "Our Philosophy",
      content: "We believe technology should simplify work, not complicate it. VisionWrapper is built to deliver clarity, real outcomes, and future-ready digital systems businesses can trust."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section id="about" className="pt-32 pb-24 bg-background">
      {/* Hero Section */}
      <motion.div 
        className="container mx-auto px-6 mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Clarity Over<span className="text-muted-foreground"> Complexity.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            VisionWrapper helps businesses bring order to digital chaos. We connect the pieces that don't work together and turn complexity into systems that actually function.
          </motion.p>

          <motion.div 
            className="h-1 w-20 bg-primary mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ originX: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Content Sections */}
      <motion.div 
        className="container mx-auto px-6 space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {idx % 2 === 0 ? (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.span 
                    className="text-6xl md:text-7xl font-bold font-heading text-muted-foreground/20 block mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    0{idx + 1}
                  </motion.span>
                  <motion.h2 
                    className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tighter"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {section.title}
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {section.content}
                  </motion.p>
                </motion.div>

                <motion.div
                  className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent"></div>
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-7xl font-bold font-heading text-foreground/5">
                      {idx + 1}
                    </div>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent"></div>
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-7xl font-bold font-heading text-foreground/5">
                      {idx + 1}
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.span 
                    className="text-6xl md:text-7xl font-bold font-heading text-muted-foreground/20 block mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    0{idx + 1}
                  </motion.span>
                  <motion.h2 
                    className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tighter"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {section.title}
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {section.content}
                  </motion.p>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="container mx-auto px-6 mt-32 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold font-heading mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ready to turn your chaos into clarity?
        </motion.h2>
        <motion.button 
          className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let's Work Together
        </motion.button>
      </motion.div>
    </section>
  )
}
