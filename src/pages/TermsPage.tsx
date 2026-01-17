import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
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
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">Terms of Service</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Last updated: January 2026
            </p>

            <motion.div variants={itemVariants} className="space-y-12">
              {/* Agreement Acceptance */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and VisionWrapper Inc. ("Company," "we," "us," or "our"). By accessing and using our website, applications, and services (collectively, "Services"), you agree to be bound by these Terms. If you do not agree to any part of these Terms, you may not use our Services.
                </p>
              </section>

              {/* Eligibility */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">2. Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You must be at least 18 years of age to use our Services. By using our Services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into binding agreements. If you are under 18, you may only use our Services under the supervision of a parent or legal guardian who agrees to be bound by these Terms.
                </p>
              </section>

              {/* User Accounts */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">3. User Accounts and Registration</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To access certain features of our Services, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access to your account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Not share your account with other individuals</li>
                </ul>
              </section>

              {/* Acceptable Use */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">4. Acceptable Use Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree not to use our Services for any unlawful purposes or in any way that violates these Terms. Prohibited activities include, but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Engaging in illegal activities or violating any applicable laws</li>
                  <li>Harassing, threatening, or abusing other users</li>
                  <li>Uploading viruses, malware, or harmful code</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Reverse engineering or attempting to discover source code</li>
                  <li>Collecting or harvesting personal information without consent</li>
                  <li>Spamming or sending unsolicited communications</li>
                  <li>Interfering with the normal operation of our Services</li>
                  <li>Creating multiple accounts to circumvent restrictions</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">5. Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality of our Services, including but not limited to text, graphics, logos, images, and software, are the exclusive property of VisionWrapper Inc. or its content suppliers and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You are granted a limited, non-exclusive, non-transferable license to access and use our Services for personal, non-commercial purposes only. You may not reproduce, distribute, modify, or transmit any content without our prior written consent.
                </p>
              </section>

              {/* User Content */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">6. User-Generated Content</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you submit any content to our Services ("User Content"), you grant VisionWrapper Inc. a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your User Content in connection with our Services. You represent and warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>You own or have the right to submit the User Content</li>
                  <li>Your User Content does not violate any third-party rights</li>
                  <li>Your User Content is not illegal, defamatory, or offensive</li>
                </ul>
              </section>

              {/* Limitation of Liability */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, VISIONWRAPPER INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, REVENUE, OR PROFITS, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE OUR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </section>

              {/* Disclaimers */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">8. Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. VISIONWRAPPER INC. DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
                </p>
              </section>

              {/* Indemnification */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">9. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless VisionWrapper Inc. and its officers, directors, employees, and agents from any claims, damages, losses, and expenses arising from your violation of these Terms, your use of our Services, or any infringement of third-party rights.
                </p>
              </section>

              {/* Payment Terms */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">10. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If our Services include paid features, you agree to pay all applicable fees and charges. You authorize us to charge your payment method for any fees incurred. All fees are exclusive of applicable taxes unless otherwise stated. We reserve the right to change pricing with 30 days' notice.
                </p>
              </section>

              {/* Termination */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">11. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account and access to our Services immediately, without notice or liability, if you violate these Terms or engage in conduct we deem harmful. You may terminate your account at any time by contacting us. Upon termination, your right to use our Services will cease immediately.
                </p>
              </section>

              {/* Governing Law */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">12. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be exclusively brought in the state and federal courts located in California.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">13. Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Before initiating litigation, we encourage you to attempt to resolve disputes through informal negotiation. If a dispute cannot be resolved informally, you agree to submit to binding arbitration or pursue claims in small claims court, as applicable.
                </p>
              </section>

              {/* Modifications */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">14. Modifications to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our Services following the posting of modified Terms constitutes your acceptance of the changes. We encourage you to review these Terms periodically.
                </p>
              </section>

              {/* Contact Us */}
              <section className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">15. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms of Service or our practices, please contact us at:
                </p>
                <div className="bg-secondary rounded-lg p-6 mt-4 space-y-2">
                  <p className="text-foreground"><strong>Email:</strong> legal@visionwrapper.com</p>
                  <p className="text-foreground"><strong>Address:</strong> VisionWrapper Inc., 123 Tech Street, San Francisco, CA 94105</p>
                  <p className="text-foreground"><strong>Phone:</strong> 1-800-VISION-1</p>
                </div>
              </section>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
