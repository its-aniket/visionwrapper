import { useEffect } from 'react'
import Navbar from '../../components/navbar'
import About from '../../components/About'
import Footer from '../../components/Footer'
import Features from '../../components/Features'
import { useSEO } from '../../utils/seo'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    useSEO({
      title: 'About VisionWrapper - Our Mission & Expertise',
      description: 'Learn about VisionWrapper\'s mission to deliver innovative AI solutions and digital transformation services to businesses worldwide.',
      keywords: ['about us', 'company mission', 'expertise', 'AI innovation', 'business solutions'],
      ogTitle: 'About VisionWrapper - Our Mission & Expertise',
      ogDescription: 'Discover our mission to deliver innovative AI solutions and digital transformation services.',
      ogImage: 'https://visionwrapper.com/og-image.png',
      ogUrl: 'https://visionwrapper.com/#/about',
      twitterCard: 'summary_large_image',
      twitterTitle: 'About VisionWrapper',
      twitterDescription: 'Learn about our mission and expertise in AI solutions.',
      canonical: 'https://visionwrapper.com/#/about',
    })
  }, [])

  return (
    <div className="min-h-screen px-[4%] bg-background text-foreground">
      <Navbar />
      <main>
        <About />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
