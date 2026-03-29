export default function MarqueeBar({ text, direction = 'left', className = '' }) {
  return (
    <div className={`marquee-container py-2 font-bold text-lg ${className}`}
         style={{ textShadow: '2px 2px 0 #000' }}>
      <span className={`inline-block ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}>
        {text}
      </span>
    </div>
  )
}
