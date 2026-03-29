import { useState } from 'react'
import { playSuccess, playError, playEarrape } from '../utils/audio'

const INITIAL_ENTRIES = [
  {
    id: 1,
    name: 'xXx_DarkManager_xXx',
    date: '14/02/2024',
    message: 'Super site Morgane !!! Trop beau les couleurs 🌈🌈🌈 bisous',
    avatar: '🧑‍💻',
  },
  {
    id: 2,
    name: 'Morgane (admin)',
    date: '14/02/2024',
    message: 'Merci c\'est moi qui l\'ai fait avec FrontPage 😎 N\'oubliez pas de mettre dans vos favoris !!',
    avatar: '👑',
    isAdmin: true,
  },
  {
    id: 3,
    name: 'employé_anonyme_42',
    date: '15/02/2024',
    message: 'aidez moi svp il m\'a mis un objectif de 300% ce trimestre. je dors plus. mes cheveux tombent.',
    avatar: '😰',
  },
  {
    id: 4,
    name: 'InspectionDuTravail',
    date: '16/02/2024',
    message: 'Madame, veuillez nous recontacter d\'urgence. Cordialement.',
    avatar: '⚖️',
  },
  {
    id: 5,
    name: 'jean-mich_du_38',
    date: '20/03/2024',
    message: 'je sui le cousin de morgane et je confirme il été déjà comme ça à 6 ans. il avait fait un organigramme de la famille. avec des objectifs trimestriels.',
    avatar: '🤠',
  },
  {
    id: 6,
    name: 'Morgane (admin)',
    date: '20/03/2024',
    message: 'Jean-Michel, on en a déjà parlé en entretien familial. Merci de supprimer ce commentaire. C\'est un ordre.',
    avatar: '👑',
    isAdmin: true,
  },
  {
    id: 7,
    name: 'stagiaireNonPayé2024',
    date: '02/04/2024',
    message: 'il m a fait faire 847 photocopies. en recto simple. pour "tester mon engagement". je suis en L3.',
    avatar: '😭',
  },
  {
    id: 8,
    name: 'PsychologueDuTravail',
    date: '15/04/2024',
    message: 'J\'ai dû recruter 3 collègues supplémentaires rien que pour gérer les patients envoyés par l\'entreprise de Morgane. Mon cabinet est plein jusqu\'en 2027.',
    avatar: '🧠',
  },
  {
    id: 9,
    name: 'ex_CTO_de_morgane',
    date: '01/05/2024',
    message: 'je me suis reconverti en berger dans le Larzac. j ai jamais été aussi heureux. merci morgane, ironiquement tu m as sauvé la vie.',
    avatar: '🐑',
  },
  {
    id: 10,
    name: 'Morgane (admin)',
    date: '01/05/2024',
    message: 'Tu vois, mon management transforme les vies ! ✨ Je mets ça dans mon portfolio.',
    avatar: '👑',
    isAdmin: true,
  },
  {
    id: 11,
    name: 'AvocatPrudhommes',
    date: '18/06/2024',
    message: 'Merci pour ce site, c\'est une mine d\'or pour nos dossiers. Cordialement, Maître Dupont.',
    avatar: '⚖️',
  },
  {
    id: 12,
    name: 'bot_linkedin_2847',
    date: '25/08/2024',
    message: 'Belle initiative ! J\'aimerais ajouter Morgane à mon réseau professionnel. #Leadership #Inspiration #DisruptiveManagement',
    avatar: '🤖',
  },
]

const TROLL_RESPONSES = [
  "Votre message a été transmis directement à Morgane. Il l'a lu. Il est déçue. Pas surprise, mais déçue.",
  "Message enregistré ! Morgane vous a ajouté à sa liste de 'gens à convoquer pour une réunion de 4h lundi à 7h'.",
  "Merci pour votre contribution ! En échange, Morgane vous offre une session gratuite de micromanagement.",
  "⚠️ ATTENTION : Ce message sera utilisé contre vous lors de votre prochain entretien annuel.",
  "Message reçu ! Morgane a automatiquement CC tout le monde dans l'entreprise. Oui, tout le monde.",
  "Félicitations ! Votre message vous qualifie pour le prix 'Employé Qui Ose S'Exprimer'. Le prix : un avertissement.",
]

export default function Guestbook() {
  const [entries, setEntries] = useState(INITIAL_ENTRIES)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [showResponse, setShowResponse] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) {
      playError()
      return
    }

    const newEntry = {
      id: Date.now(),
      name: name.trim(),
      date: new Date().toLocaleDateString('fr-FR'),
      message: message.trim(),
      avatar: ['🤡', '💀', '😱', '🤮', '🫠', '😭'][Math.floor(Math.random() * 6)],
    }

    // Add user entry
    setEntries(prev => [...prev, newEntry])
    playSuccess()

    // Add Morgane's response after a delay
    setTimeout(() => {
      const response = TROLL_RESPONSES[Math.floor(Math.random() * TROLL_RESPONSES.length)]
      setShowResponse(response)
      playEarrape()

      const morganeReply = {
        id: Date.now() + 1,
        name: 'Morgane (admin)',
        date: new Date().toLocaleDateString('fr-FR'),
        message: response,
        avatar: '👑',
        isAdmin: true,
      }
      setEntries(prev => [...prev, morganeReply])

      setTimeout(() => setShowResponse(null), 4000)
    }, 1500)

    setName('')
    setMessage('')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-yellow-400 mb-4 animate-glitch"
          style={{ textShadow: '3px 3px 0 #000' }}>
        📖 LIVRE D'OR 📖
      </h2>
      <p className="text-center text-gray-300 mb-8 text-sm md:text-lg">
        Laissez un message ! (Morgane lit tout et juge tout)
      </p>

      {/* Response popup */}
      {showResponse && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 border-4 border-yellow-400 rounded-xl p-5 md:p-8 z-[9999] max-w-xs md:max-w-md text-center animate-zoom-in-out">
          <div className="text-4xl md:text-5xl mb-3 md:mb-4">👑</div>
          <p className="text-yellow-300 font-bold text-sm md:text-lg">{showResponse}</p>
        </div>
      )}

      {/* Entries */}
      <div className="space-y-4 mb-12">
        {entries.map(entry => (
          <div key={entry.id}
               className={`bg-black/60 rounded-xl p-4 border-l-4 ${entry.isAdmin ? 'border-yellow-400' : 'border-fuchsia-500'} hover:translate-x-1 transition-transform`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{entry.avatar}</span>
              <div>
                <span className={`font-bold ${entry.isAdmin ? 'text-yellow-400' : 'text-lime-400'}`}>
                  {entry.name}
                  {entry.isAdmin && <span className="ml-2 bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full">ADMIN</span>}
                </span>
                <span className="text-gray-500 text-sm ml-3">{entry.date}</span>
              </div>
            </div>
            <p className="text-gray-200 ml-12">{entry.message}</p>
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="bg-black/70 rainbow-border rounded-xl p-8">
        <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">
          ✍️ SIGNER LE LIVRE D'OR ✍️
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-yellow-400 font-bold mb-1">👤 Votre pseudo :</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Ex: victime_du_management_42"
              className="w-full bg-gray-900 border-2 border-fuchsia-500 rounded-lg px-4 py-3 text-white font-cursed focus:border-cyan-400 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-yellow-400 font-bold mb-1">💬 Votre message :</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Racontez votre expérience avec Morgane... (thérapie gratuite incluse)"
              rows={4}
              className="w-full bg-gray-900 border-2 border-fuchsia-500 rounded-lg px-4 py-3 text-white font-cursed focus:border-cyan-400 focus:outline-none transition-colors resize-vertical"
            />
          </div>
          <button type="submit"
                  className="w-full py-4 font-bold text-xl rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-lime-500 text-white hover:scale-105 transition-transform animate-rainbow rainbow-bg bg-[length:400%_400%]"
                  style={{ textShadow: '2px 2px 0 #000' }}>
            📨 ENVOYER MON TÉMOIGNAGE 📨
          </button>
        </form>
        <p className="text-center text-gray-500 text-xs mt-4">
          ⚠️ En soumettant ce formulaire, vous acceptez que Morgane utilise votre message contre vous lors de votre prochain entretien annuel.
        </p>
      </div>
    </div>
  )
}
