import { useEffect } from 'react'
import Navbar from '../../components/navbar'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'
import { useSEO } from '../../utils/seo'

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    useSEO({
      title: 'VisionWrapper - Website Creation & AI-Powered Business Solutions',
      description: 'Professional website creation, custom web development, AI solutions, workflow automation, and cloud deployment services. Transform your business with VisionWrapper.',
      keywords: ['website creation', 'web development', 'AI solutions', 'web design', 'automation', 'cloud services', 'business technology', 'custom websites'],
      ogTitle: 'VisionWrapper - Website Creation & AI-Powered Business Solutions',
      ogDescription: 'Professional website creation and AI-powered business solutions to transform your company.',
      ogImage: 'https://visionwrapper.com/og-image.png',
      ogUrl: 'https://visionwrapper.com',
      twitterCard: 'summary_large_image',
      twitterTitle: 'VisionWrapper - Website Creation & AI Solutions',
      twitterDescription: 'Transform your business with professional website creation and AI solutions.',
      canonical: 'https://visionwrapper.com',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LocalBusiness',
            '@id': 'https://visionwrapper.com/#business',
            name: 'VisionWrapper',
            image: 'https://visionwrapper.com/logos/hz_full_logo_no_bg.png',
            description: 'Professional website creation, web development, and AI-powered business solutions',
            url: 'https://visionwrapper.com',
            telephone: '+91-7249634834',
            email: 'visionwrapper@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Kothrud',
              addressLocality: 'Pune',
              addressRegion: 'Maharashtra',
              postalCode: '411038',
              addressCountry: 'IN'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '18.5357',
              longitude: '73.8207'
            },
            sameAs: [
              'https://www.instagram.com/visionwrapper',
              'https://www.linkedin.com/company/visionwrapper',
              'https://www.facebook.com/visionwrapper'
            ],
            priceRange: '₹₹₹'
          },
          {
            '@type': 'Organization',
            '@id': 'https://visionwrapper.com/#organization',
            name: 'VisionWrapper',
            url: 'https://visionwrapper.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://visionwrapper.com/logos/hz_full_logo_no_bg.png',
              width: 250,
              height: 60
            },
            description: 'Professional website creation and AI-powered business solutions company',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              telephone: '+91-7249634834',
              email: 'visionwrapper@gmail.com',
              url: 'https://visionwrapper.com/#contact-page'
            },
            sameAs: [
              'https://www.instagram.com/visionwrapper',
              'https://www.linkedin.com/company/visionwrapper'
            ]
          },
          {
            '@type': 'WebSite',
            '@id': 'https://visionwrapper.com/#website',
            url: 'https://visionwrapper.com',
            name: 'VisionWrapper - Website Creation & AI Solutions',
            description: 'Professional website creation and AI-powered business solutions',
            publisher: {
              '@id': 'https://visionwrapper.com/#organization'
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://visionwrapper.com/search?q={search_term_string}'
              },
              'query-input': 'required name=search_term_string'
            }
          },
          {
            '@type': 'Service',
            '@id': 'https://visionwrapper.com/#service-website-creation',
            name: 'Website Creation',
            description: 'Professional website creation and custom web design services. We create modern, responsive websites tailored to your business needs.',
            provider: {
              '@id': 'https://visionwrapper.com/#organization'
            },
            serviceType: 'Web Design & Development',
            areaServed: {
              '@type': 'Country',
              name: 'Worldwide'
            },
            priceRange: '₹₹₹'
          },
          {
            '@type': 'Service',
            '@id': 'https://visionwrapper.com/#service-web-development',
            name: 'Web Application Development',
            description: 'Scalable and high-performance web applications using latest technologies and best practices.',
            provider: {
              '@id': 'https://visionwrapper.com/#organization'
            },
            serviceType: 'Software Development',
            areaServed: {
              '@type': 'Country',
              name: 'Worldwide'
            },
            priceRange: '₹₹₹'
          },
          {
            '@type': 'Service',
            '@id': 'https://visionwrapper.com/#service-ai-solutions',
            name: 'AI & ML Solutions',
            description: 'Custom AI and machine learning solutions to unlock insights and drive smarter business decisions.',
            provider: {
              '@id': 'https://visionwrapper.com/#organization'
            },
            serviceType: 'Artificial Intelligence',
            areaServed: {
              '@type': 'Country',
              name: 'Worldwide'
            },
            priceRange: '₹₹₹'
          },
          {
            '@type': 'Service',
            '@id': 'https://visionwrapper.com/#service-automation',
            name: 'Workflow Automation',
            description: 'Streamline operations with intelligent automation solutions to increase efficiency and reduce costs.',
            provider: {
              '@id': 'https://visionwrapper.com/#organization'
            },
            serviceType: 'Business Process Automation',
            areaServed: {
              '@type': 'Country',
              name: 'Worldwide'
            },
            priceRange: '₹₹₹'
          },
          {
            '@type': 'Service',
            '@id': 'https://visionwrapper.com/#service-cloud-deployment',
            name: 'Cloud Deployment',
            description: 'Deploy secure and scalable solutions on leading cloud platforms with expert guidance.',
            provider: {
              '@id': 'https://visionwrapper.com/#organization'
            },
            serviceType: 'Cloud Services',
            areaServed: {
              '@type': 'Country',
              name: 'Worldwide'
            },
            priceRange: '₹₹₹'
          }
        ]
      }
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
