import { useState, useEffect } from 'react'

const EMOJIS = ['🤡','💀','🔥','✨','💩','🚀','👑','😂','🤮','💯','🎪','🤯','👻','🦄','🌈','📎','💼','📊','🏆','⚡']

export default function EmojiRain() {
  const [emojis, setEmojis] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now() + Math.random()
      setEmojis(prev => [...prev.slice(-30), {
        id,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        left: Math.random() * 100,
        duration: 2 + Math.random() * 4,
        size: 16 + Math.random() * 30,
      }])
    }, 250)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cleanup = setInterval(() => {
      setEmojis(prev => prev.filter(e => Date.now() - e.id < 6000))
    }, 2000)
    return () => clearInterval(cleanup)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {emojis.map(e => (
        <span
          key={e.id}
          className="absolute opacity-80"
          style={{
            left: `${e.left}vw`,
            fontSize: `${e.size}px`,
            animation: `fall ${e.duration}s linear forwards`,
            top: '-60px',
          }}
        >
          {e.emoji}
        </span>
      ))}
    </div>
  )
}
