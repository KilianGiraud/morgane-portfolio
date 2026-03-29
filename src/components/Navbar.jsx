import { NavLink } from 'react-router-dom'
import { playHover } from '../utils/audio'

const links = [
  { to: '/', label: 'Accueil', emoji: '🏠' },
  { to: '/about', label: 'À Propos', emoji: '👤' },
  { to: '/blog', label: 'Blog', emoji: '📝' },
  { to: '/guestbook', label: "Livre d'Or", emoji: '📖' },
  { to: '/contact', label: 'Contact', emoji: '📧' },
]

export default function Navbar() {
  return (
    <nav className="bg-black/70 backdrop-blur-sm border-b-4 border-dashed border-cyan-400 sticky top-10 z-40">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-1 p-1 md:p-2">
        {links.map(({ to, label, emoji }) => (
          <NavLink
            key={to}
            to={to}
            onMouseEnter={playHover}
            className={({ isActive }) =>
              `px-2 py-1.5 md:px-4 md:py-2 font-bold text-xs md:text-base rounded-lg transition-all duration-200 
              border-2 border-transparent hover:scale-110 hover:rotate-2
              ${isActive
                ? 'bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white border-white animate-pulse-cursed shadow-lg shadow-yellow-500/50'
                : 'bg-gray-900/80 text-lime-300 hover:bg-fuchsia-700 hover:text-yellow-300 hover:border-lime-400'
              }`
            }
          >
            <span>{emoji}</span>
            <span className="hidden sm:inline ml-1">{label}</span>
          </NavLink>
        ))}
      </div>
      {/* Visitor counter */}
      <div className="text-center py-1 text-xs md:text-sm text-cyan-300 border-t border-cyan-800">
        🔥 Visiteur n° <strong className="text-yellow-300">{(Math.floor(Math.random() * 900000) + 100000).toLocaleString('fr-FR')}</strong> 🔥
        <span className="hidden sm:inline ml-3 text-gray-500">⚠️ Optimisé pour Internet Explorer 6 ⚠️</span>
      </div>
    </nav>
  )
}
