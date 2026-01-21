import { useState, useEffect } from 'react'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import PrivacyPage from './components/pages/PrivacyPage'
import TermsPage from './components/pages/TermsPage'
import ContactPage from './components/pages/ContactPage'
import { ThemeProvider } from './context/ThemeContext'
import ProjectPage from './components/pages/ProjectPage'
import WhatsAppButton from './components/WhatsAppButton'

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      setCurrentPage(hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  switch (currentPage) {
    case 'about':
      return <AboutPage />
    case 'product':
      return <ProjectPage />
    case 'privacy':
      return <PrivacyPage />
    case 'terms':
      return <TermsPage />
    case 'contact-page':
      return <ContactPage />
    default:
      return <HomePage />
  }
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
      <WhatsAppButton />
    </ThemeProvider>
  )
}

export default App
