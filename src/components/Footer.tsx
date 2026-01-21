
import { useTheme } from '../context/ThemeContext'
import { MapPin, Phone, Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react'

export default function Footer() {
  const { isDark } = useTheme()
  return (
    <footer className="bg-background border-t border-border pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-12">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* Company Info */}
          <div className="p-4 sm:p-6">
            <div className="text-lg sm:text-2xl font-bold font-heading tracking-tighter mb-4 sm:mb-6">
              <a href="#home" className="text-lg sm:text-2xl font-bold font-heading tracking-tighter cursor-pointer inline-block">
                <img className="h-auto w-32 sm:w-48 md:w-60" src="/logos/hz_full_logo_no_bg.png" alt="VisionWrapper Logo" />
              </a>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed">Empowering businesses with cutting-edge technology solutions. Built for the future of enterprise.</p>
          </div>

          {/* Contact Information */}
          <div className="p-4 sm:p-6">
            <h3 className="font-bold font-heading text-lg sm:text-xl mb-6 text-foreground">Contact Us</h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm sm:text-base font-medium text-foreground">Kothrud</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Pune, India</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-foreground flex-shrink-0" />
                <a href="tel:+917249634834" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +91 7249634834
                </a>
              </div>
              
              {/* Email */}
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-foreground flex-shrink-0" />
                <a href="mailto:visionwrapper@gmail.com" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  visionwrapper@gmail.com
                </a>
              </div>
              
              {/* Social Media */}
              <div className="flex gap-4 mt-6 pt-4 border-t border-border/30">
                <a
                  href="https://wa.me/7249634834?text=Hello%20VisionWrapper!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-green-500 transition-colors"
                  title="Chat with us on WhatsApp"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/visionwrapper?igsh=cHAwaDM2bHJ5MmZ0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title="Follow us on Instagram"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/visionwrapper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  title="Follow us on LinkedIn"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="p-4 sm:p-6">
            <h3 className="font-bold font-heading text-lg sm:text-xl mb-4 text-foreground">Location</h3>
            <div className="rounded-lg overflow-hidden h-48 sm:h-56 border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4845!2d73.8207!3d18.5357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8e5e5e5e5e5%3A0x5c5c5c5c5c5c5c5c!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VisionWrapper Office Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 pt-6 sm:pt-8 border-t border-border/50 text-xs sm:text-sm text-muted-foreground">
          <p>© 2026 VisionWrapper All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6 md:gap-8 flex-col sm:flex-row">
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
