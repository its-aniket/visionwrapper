
import { useTheme } from '../context/ThemeContext'  
export default function Footer() {
  const { isDark } = useTheme()
  return (
    <footer className="bg-background border-t border-border pt-32 pb-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="mb-20 p-8 md:p-12">
          <div className="text-2xl font-bold font-heading tracking-tighter mb-6">
            <a href="#home" className="text-2xl font-bold font-heading tracking-tighter cursor-pointer">
            {isDark ? <img className="h-auto w-60" src="/logos/White_HZ_FULL_LOGO_SVG.svg" alt="Logo" /> :  <img className="h-auto w-60" src="/logos/Black_HZ_FULL_LOGO_SVG.svg" alt="Logo" />}
          </a>
          </div>
          <p className="text-muted-foreground max-w-sm text-base leading-relaxed">Empowering businesses with cutting-edge technology solutions. Built for the future of enterprise.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <p>© 2026 VisionWrapper All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
