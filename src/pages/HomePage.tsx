import { useEffect } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />

        <CTA />
      </main>
      <Footer />
    </div>
  )
}
