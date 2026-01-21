import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '7249634834'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20VisionWrapper!`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      title="Chat with us on WhatsApp"
      aria-label="WhatsApp Business"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  )
}
