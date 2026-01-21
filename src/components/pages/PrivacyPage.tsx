import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import { useSEO } from '../../utils/seo'

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    useSEO({
      title: 'Privacy Policy - VisionWrapper',
      description: 'Read VisionWrapper\'s privacy policy to understand how we collect, use, and protect your personal information.',
      keywords: ['privacy policy', 'data protection', 'privacy', 'terms'],
      ogTitle: 'Privacy Policy - VisionWrapper',
      ogDescription: 'Learn about our privacy practices and data protection policies.',
      ogImage: 'https://visionwrapper.com/og-image.png',
      ogUrl: 'https://visionwrapper.com/#/privacy',
      canonical: 'https://visionwrapper.com/#/privacy',
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <motion.div
          className="container mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Last updated: January 2026
            </p>

            <motion.div variants={itemVariants} className="space-y-12">
              {/* Introduction */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  VisionWrapper ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Services. Your use of our Services signifies that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect information about you in various ways, including when you provide it directly to us, when third parties provide it to us, and when it is collected automatically through your use of our Services.
                </p>
                
                <h3 className="text-xl font-semibold font-heading mt-6">Personal Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company information and business details</li>
                  <li>Account information and login credentials</li>
                  <li>Payment and billing information</li>
                  <li>Communications you send us</li>
                  <li>Information provided through forms and surveys</li>
                </ul>

                <h3 className="text-xl font-semibold font-heading mt-6">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you access our Services, we automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage information (pages viewed, links clicked, time spent)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Geolocation data</li>
                  <li>Log data and analytics</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Providing and maintaining our Services</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Sending promotional communications and updates</li>
                  <li>Responding to your inquiries and customer support requests</li>
                  <li>Analyzing usage patterns to improve our Services</li>
                  <li>Detecting and preventing fraud and security incidents</li>
                  <li>Complying with legal obligations</li>
                  <li>Personalizing your experience</li>
                </ul>
              </section>

              {/* Data Security */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure socket layer (SSL) technology, and access controls.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                </p>
              </section>

              {/* Cookies */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our Services. These may include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Session cookies for navigation and functionality</li>
                  <li>Persistent cookies for preferences and personalization</li>
                  <li>Analytics cookies to understand usage patterns</li>
                  <li>Marketing cookies for targeted advertising</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You can control cookie preferences through your browser settings. However, disabling cookies may limit your ability to use certain features of our Services.
                </p>
              </section>

              {/* Third-Party Links */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Services may contain links to third-party websites and services that are not operated by us. This Privacy Policy applies only to information collected through our Services. We are not responsible for the privacy practices of third-party websites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              {/* Your Rights */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">Your Privacy Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Right to access and obtain a copy of your personal information</li>
                  <li>Right to rectify inaccurate or incomplete information</li>
                  <li>Right to erasure or deletion of your information</li>
                  <li>Right to restrict processing of your information</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent at any time</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </section>

              {/* Contact Us */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-secondary rounded-lg p-6 mt-4 space-y-2">
                  <p className="text-foreground"><strong>Email:</strong> visionwrapper@gmail.com</p>
                  <p className="text-foreground"><strong>Address:</strong> Kothrud, Pune, India</p>
                  <p className="text-foreground"><strong>Phone:</strong> +91 7249634834</p>
                </div>
              </section>

              {/* Changes to Policy */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, and other factors. We will notify you of any material changes by updating the "Last updated" date at the top of this policy. Your continued use of our Services after any modifications indicates your acceptance of the updated Privacy Policy.
                </p>
              </section>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
