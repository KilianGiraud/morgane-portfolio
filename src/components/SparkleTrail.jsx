import { useState, useEffect } from 'react'

const SPARKLES = ['✨', '⭐', '💫', '🌟', '✴️', '🤡']

export default function SparkleTrail() {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    let lastTime = 0
    const handler = (e) => {
      if (Date.now() - lastTime < 80) return
      lastTime = Date.now()
      const id = Date.now() + Math.random()
      // Support both mouse and touch
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      setSparkles(prev => [...prev.slice(-15), {
        id,
        x: clientX,
        y: clientY,
        emoji: SPARKLES[Math.floor(Math.random() * SPARKLES.length)],
      }])
    }
    document.addEventListener('mousemove', handler)
    document.addEventListener('touchmove', handler, { passive: true })
    return () => {
      document.removeEventListener('mousemove', handler)
      document.removeEventListener('touchmove', handler)
    }
  }, [])

  useEffect(() => {
    const cleanup = setInterval(() => {
      setSparkles(prev => prev.filter(s => Date.now() - s.id < 800))
    }, 500)
    return () => clearInterval(cleanup)
  }, [])

  return (
    <>
      {sparkles.map(s => (
        <span
          key={s.id}
          className="fixed pointer-events-none text-xl z-[9998]"
          style={{
            left: s.x,
            top: s.y,
            animation: 'sparkle-fade 0.8s forwards',
          }}
        >
          {s.emoji}
        </span>
      ))}
      <style>{`
        @keyframes sparkle-fade {
          0% { opacity: 1; transform: scale(1) translateY(0); }
          100% { opacity: 0; transform: scale(0) translateY(-30px); }
        }
      `}</style>
    </>
  )
}
