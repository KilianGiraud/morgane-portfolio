import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import EmojiRain from './components/EmojiRain'
import SparkleTrail from './components/SparkleTrail'
import Clippy from './components/Clippy'
import MarqueeBar from './components/MarqueeBar'
import Footer from './components/Footer'
import FakePopup from './components/FakePopup'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Guestbook from './pages/Guestbook'
import Contact from './pages/Contact'
import { playEarrape, playClick, startCursedMusic } from './utils/audio'

export default function App() {
  const [initialized, setInitialized] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const location = useLocation()

  // First click: earrape + start music
  const handleFirstClick = useCallback(() => {
    if (initialized) return
    setInitialized(true)
    playEarrape()
    setTimeout(startCursedMusic, 800)
  }, [initialized])

  useEffect(() => {
    if (!initialized) {
      document.addEventListener('click', handleFirstClick, { once: true })
      return () => document.removeEventListener('click', handleFirstClick)
    }
  }, [initialized, handleFirstClick])

  // Random popup on page change
  useEffect(() => {
    if (Math.random() < 0.3) {
      setTimeout(() => setShowPopup(true), 2000)
    }
  }, [location])

  // Cursed title animation
  useEffect(() => {
    const titles = [
      '✨🌟 Morgane | Professional Autistic Manager™ 🌟✨',
      '🚨🚨 MORGANE ARRIVE 🚨🚨',
      '💀 Vous ne pouvez plus fuir 💀',
      '📎 Clippy approuve ce site 📎',
      '🏆 Site de l\'année 2003 🏆',
      '⚠️ ALERTE MANAGEMENT ⚠️',
      '🔥 CE SITE GÉNÈRE DU BURN-OUT 🔥',
    ]
    let idx = 0
    const interval = setInterval(() => {
      idx = (idx + 1) % titles.length
      document.title = titles[idx]
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Click sound on all clicks
  useEffect(() => {
    const handler = () => { if (initialized) playClick() }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [initialized])

  return (
    <div className="min-h-screen relative font-cursed">
      {/* Rainbow BG */}
      <div className="fixed inset-0 rainbow-bg animate-rainbow -z-20" />

      {/* Global effects */}
      <EmojiRain />
      <SparkleTrail />

      {/* Top marquee */}
      <MarqueeBar
        direction="left"
        className="bg-red-600 text-yellow-300 border-b-4 border-dashed border-lime-400 sticky top-0 z-50"
        text="🚨🚨🚨 BIENVENUE SUR LE SITE OFFICIEL DE MORGANE — PROFESSIONAL AUTISTIC MANAGER™ — TARIF : 500€/h (résultats non garantis) — ÉLUE PIRE MANAGER 2024 PAR SES PROPRES EMPLOYÉS 🚨🚨🚨"
      />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main className="relative z-10 pb-20">
        <div className="page-enter" key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/guestbook" element={<Guestbook />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Clippy */}
      <Clippy />

      {/* Bottom marquee */}
      <MarqueeBar
        direction="right"
        className="bg-blue-700 text-pink-400 border-t-4 border-dashed border-fuchsia-500 fixed bottom-0 z-50"
        text="⚠️ ATTENTION : Morgane ne rembourse pas. Morgane ne s'excuse pas. Morgane manage. ⚠️ | 📞 APPELEZ LE 0 800 SOUFFRANCE | 💼 Votre burn-out est notre passion ⚠️"
      />

      {/* Random fake popup */}
      {showPopup && <FakePopup onClose={() => setShowPopup(false)} />}
    </div>
  )
}
