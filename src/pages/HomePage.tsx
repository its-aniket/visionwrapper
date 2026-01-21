import { useEffect } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { useSEO } from '../utils/seo'

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    useSEO({
      title: 'VisionWrapper - AI-Powered Business Solutions',
      description: 'Transform your business with our cutting-edge AI solutions, web development, workflow automation, and cloud deployment services.',
      keywords: ['AI solutions', 'web development', 'automation', 'cloud services', 'business technology'],
      ogTitle: 'VisionWrapper - AI-Powered Business Solutions',
      ogDescription: 'Transform your business with our cutting-edge AI solutions, web development, workflow automation, and cloud deployment services.',
      ogImage: 'https://visionwrapper.com/og-image.png',
      ogUrl: 'https://visionwrapper.com',
      twitterCard: 'summary_large_image',
      twitterTitle: 'VisionWrapper - AI-Powered Business Solutions',
      twitterDescription: 'Transform your business with our cutting-edge AI solutions and services.',
      canonical: 'https://visionwrapper.com',
    })
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
