
import { useTheme } from '../context/ThemeContext'  
export default function Footer() {
  const { isDark } = useTheme()
  return (
    <footer className="bg-background border-t border-border pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-12">
      <div className="container mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20 p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="text-lg sm:text-2xl font-bold font-heading tracking-tighter mb-4 sm:mb-6">
            <a href="#home" className="text-lg sm:text-2xl font-bold font-heading tracking-tighter cursor-pointer inline-block">
            {isDark ? <img className="h-auto w-32 sm:w-48 md:w-60" src="/logos/White_HZ_FULL_LOGO_SVG.svg" alt="Logo" /> :  <img className="h-auto w-32 sm:w-48 md:w-60" src="/logos/Black_HZ_FULL_LOGO_SVG.svg" alt="Logo" />}
          </a>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed">Empowering businesses with cutting-edge technology solutions. Built for the future of enterprise.</p>
        </div>

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
