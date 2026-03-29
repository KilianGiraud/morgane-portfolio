import { useState } from 'react'
import { playError, playEarrape } from '../utils/audio'

const POPUPS = [
  {
    title: '⚠️ ALERTE VIRUS DÉTECTÉ ⚠️',
    text: 'Le virus MORGANE_MANAGEMENT.exe a été détecté sur votre machine. Votre productivité a été réduite de 200%. Cliquez OK pour accepter votre sort.',
    icon: '🦠',
  },
  {
    title: '🔒 MISE À JOUR OBLIGATOIRE',
    text: 'Windows a détecté que vous n\'avez pas assez souffert aujourd\'hui. Installation de RÉUNION_INUTILE_v3.exe en cours...',
    icon: '💻',
  },
  {
    title: '📧 NOUVEAU MESSAGE DE MORGANE',
    text: 'Objet: RE:RE:RE:RE:RE:RE: Quick question\n\n"Pouvez-vous faire ce truc que je suis incapable de décrire ? C\'est urgent. Merci de le faire avant hier."',
    icon: '📧',
  },
  {
    title: '🎰 FÉLICITATIONS !!!',
    text: 'Vous avez gagné une RÉUNION GRATUITE de 4 heures avec Morgane sur le thème "Optimiser la synergie des synergies transversales" ! Impossible de refuser.',
    icon: '🎉',
  },
  {
    title: '💀 ERREUR FATALE',
    text: 'MANAGEMENT_OVERFLOW: Stack de processus inutiles dépassé. Veuillez redémarrer votre carrière. Code erreur: 0xMORGANE',
    icon: '☠️',
  },
]

export default function FakePopup({ onClose }) {
  const [popup] = useState(() => POPUPS[Math.floor(Math.random() * POPUPS.length)])
  const [closing, setClosing] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  useState(() => {
    playError()
  })

  const handleClose = () => {
    if (clickCount < 2) {
      // First 2 clicks: popup dodges
      setClickCount(prev => prev + 1)
      playError()
    } else {
      playEarrape()
      setClosing(true)
      setTimeout(onClose, 500)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center" onClick={handleClose}>
      <div
        className={`bg-gray-200 border-2 border-gray-600 rounded-lg shadow-2xl max-w-md w-full mx-4 ${closing ? 'animate-spin' : ''}`}
        style={{
          transform: clickCount === 1 ? 'translate(50px, -30px) rotate(5deg)' : clickCount === 2 ? 'translate(-80px, 40px) rotate(-8deg)' : '',
          transition: 'transform 0.3s',
          fontFamily: '"Segoe UI", Tahoma, sans-serif',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 rounded-t-lg flex justify-between items-center text-sm font-bold">
          <span>{popup.icon} {popup.title}</span>
          <button onClick={handleClose} className="hover:bg-red-500 px-2 rounded">✕</button>
        </div>
        {/* Content */}
        <div className="p-6 text-black">
          <div className="flex gap-4 items-start">
            <span className="text-5xl">{popup.icon}</span>
            <p className="text-sm whitespace-pre-line">{popup.text}</p>
          </div>
          <div className="flex gap-3 justify-center mt-6">
            <button onClick={handleClose} className="bg-gray-300 border border-gray-500 px-6 py-1.5 rounded text-sm hover:bg-gray-400 font-bold">
              OK (je souffre)
            </button>
            <button onClick={handleClose} className="bg-gray-300 border border-gray-500 px-6 py-1.5 rounded text-sm hover:bg-gray-400 font-bold">
              Annuler (je souffre aussi)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
