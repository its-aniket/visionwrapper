
export default function WhatsAppButton() {
  const phoneNumber = '7249634834'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20VisionWrapper!`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 shadow-lg transition-all duration-300 hover:scale-110"
      title="Chat with us on WhatsApp"
      aria-label="WhatsApp Business"
    >
      <img 
        src="/whatsapp.png" 
        alt="WhatsApp" 
        className="w-16 h-16 rounded-full"
      />
    </a>
  )
}
