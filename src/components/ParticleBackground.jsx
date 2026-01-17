import { useRef, useEffect } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef(null)
    
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let w, h
    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const mouse = { x: -9999, y: -9999 }
    window.addEventListener("mousemove", e => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    const particles = Array.from({ length: 900 }, () => {
      const x = Math.random() * w
      const y = Math.random() * h
      return { x, y, ox: x, oy: y, vx: 0, vy: 0 }
    })

    const animate = () => {
      ctx.clearRect(0, 0, w, h)

      particles.forEach(p => {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.hypot(dx, dy)
        const force = Math.max(120 - dist, 0)

        if (force) {
          p.vx += (dx / dist) * force * 0.02
          p.vy += (dy / dist) * force * 0.02
        }

        p.vx += (p.ox - p.x) * 0.008
        p.vy += (p.oy - p.y) * 0.008
        p.vx *= 0.9
        p.vy *= 0.9

        p.x += p.vx
        p.y += p.vy

        ctx.fillStyle = "rgba(255,255,255,0.6)"
        ctx.fillRect(p.x, p.y, 1.4, 1.4)
      })

      requestAnimationFrame(animate)
    }

    animate()
    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-20 pointer-events-none"
    />
  )
}

