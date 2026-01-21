import { useState, useEffect } from 'react'
import { Sun, Moon, Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [, setCurrentPage] = useState('home')
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      setCurrentPage(hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / totalHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    // Navigate to the hash
    window.location.hash = href
    
    // If on the same page, scroll to the element
    setTimeout(() => {
      const elementId = href.replace('#', '')
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-foreground z-100 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#home" className="text-xl md:text-2xl font-bold font-heading tracking-tighter cursor-pointer shrink-0 flex items-center">
            <img className="h-16 md:h-20 w-auto" src="/logos/hz_full_logo_no_bg.png" alt="VisionWrapper Logo" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact-page" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <button 
              onClick={toggleTheme}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 w-9 rounded-full border border-transparent hover:bg-secondary"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="h-5 w-5 rotate-90 scale-0 transition-all absolute dark:rotate-0 dark:scale-100" />
            </button>
            <a href="#contact-page" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-transparent h-9 px-6 rounded-full min-h-9 bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={toggleTheme}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 w-9 rounded-full border border-transparent hover:bg-secondary"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="h-5 w-5 rotate-90 scale-0 transition-all absolute dark:rotate-0 dark:scale-100" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-background border-t border-border/40"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Contact
            </button>
            <a 
              href="#contact-page" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-transparent h-9 px-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </nav>
    </>
  )
}
