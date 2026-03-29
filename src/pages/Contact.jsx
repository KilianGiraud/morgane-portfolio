import { useState } from 'react'
import { playEarrape, playSuccess, playError } from '../utils/audio'

const RESPONSES = [
  { title: '✅ MESSAGE ENVOYÉ !', text: 'Morgane a bien reçu votre demande. Il l\'a immédiatement classée dans la corbeille. Temps de réponse estimé : ∞', icon: '🗑️' },
  { title: '⚠️ ERREUR 420', text: 'Votre message était trop sensé. Morgane ne traite que les demandes absurdes. Réessayez avec moins de logique.', icon: '🧠' },
  { title: '🎉 FÉLICITATIONS !', text: 'Vous êtes le 1 000 000ème visiteur ! Votre prix : une réunion de 4h avec Morgane sur "la synergie des synergies".', icon: '🎰' },
  { title: '📋 EN COURS...', text: 'Morgane a ajouté votre demande à son backlog. Position actuelle dans la file : 847 392. Merci de votre patience.', icon: '📊' },
  { title: '🚨 ALERTE MANAGEMENT', text: 'Votre demande a déclenché le protocole MORGANE-5. Veuillez évacuer le bâtiment. Ce n\'est pas un exercice.', icon: '🚨' },
  { title: '💸 FACTURE ENVOYÉE', text: 'Le simple fait de remplir ce formulaire coûte 250€. La facture a été envoyée à votre employeur. Merci.', icon: '💸' },
  { title: '📎 CLIPPY DIT :', text: 'Il semblerait que vous essayez de contacter Morgane. Morgane ne veut pas être contactée. Morgane vous contactera quand IL le décidera.', icon: '📎' },
]

const FAQ = [
  { q: 'Combien coûte une consultation ?', a: '500€/h. Le minimum est 8h. Le paiement est dû avant la consultation. Aucun résultat n\'est garanti. Aucun remboursement.' },
  { q: 'Morgane peut-il sauver mon entreprise ?', a: 'Non. Mais il peut accélérer sa chute pour que vous passiez à autre chose plus vite. C\'est un service, pas un bug.' },
  { q: 'Puis-je annuler un rendez-vous ?', a: 'Non. Les rendez-vous avec Morgane sont comme les réunions qu\'il organise : inévitables et plus longs que prévu.' },
  { q: 'Morgane a-t-il un diplôme ?', a: 'Morgane a une certification qu\'il s\'est il-même attribuée. C\'est mieux qu\'un diplôme : c\'est de l\'autopromotion.' },
  { q: 'Comment survivre à une réunion avec Morgane ?', a: 'Vous ne survivez pas. Vous vous adaptez. Comme les cafards après une apocalypse nucléaire.' },
  { q: 'Morgane accepte-t-il les critiques ?', a: 'Oui ! Il les collectionne dans un dossier intitulé "Prochains Licenciements".' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [response, setResponse] = useState(null)
  const [faqOpen, setFaqOpen] = useState(null)
  const [formShake, setFormShake] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    playEarrape()

    const r = RESPONSES[Math.floor(Math.random() * RESPONSES.length)]
    setResponse(r)
    setSubmitted(true)

    // Shake the page
    setFormShake(true)
    setTimeout(() => setFormShake(false), 1000)
  }

  const closeResponse = () => {
    setSubmitted(false)
    setResponse(null)
    playError()
  }

  return (
    <div className={`max-w-3xl mx-auto px-4 py-12 ${formShake ? 'animate-shake' : ''}`}>
      <h2 className="text-center text-2xl md:text-4xl font-bold text-pink-400 mb-4 animate-glitch"
          style={{ textShadow: '3px 3px 0 #000' }}>
        📧 CONTACTEZ MORGANE 📧
      </h2>
      <p className="text-center text-gray-300 mb-12 text-lg">
        ⚠️ Attention : contacter Morgane est irréversible ⚠️
      </p>

      {/* RESPONSE MODAL */}
      {submitted && response && (
        <div className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center" onClick={closeResponse}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rainbow-border rounded-2xl p-5 md:p-8 max-w-sm md:max-w-md mx-4 text-center"
               style={{ animation: 'page-slam 0.5s ease-out' }}
               onClick={e => e.stopPropagation()}>
            <div className="text-4xl md:text-6xl mb-3 md:mb-4">{response.icon}</div>
            <h3 className="text-lg md:text-2xl font-bold text-lime-400 mb-2 md:mb-3">{response.title}</h3>
            <p className="text-gray-200 text-sm md:text-lg mb-4 md:mb-6">{response.text}</p>
            <button onClick={closeResponse}
                    className="bg-black border-2 border-lime-400 text-lime-400 px-8 py-3 rounded-lg font-bold hover:bg-lime-400 hover:text-black transition-colors">
              OK (je regrette déjà)
            </button>
          </div>
        </div>
      )}

      {/* CONTACT INFO CARDS */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {[
          { icon: '📞', title: 'Téléphone', value: '0 800 SOUFFRANCE', sub: '(attente moyenne : 4h de musique cursed)' },
          { icon: '📧', title: 'Email', value: 'morgane@burn-out.fr', sub: '(temps de réponse : jamais)' },
          { icon: '📍', title: 'Adresse', value: 'Tour Morgane, Enfer', sub: '(3ème sous-sol, derrière la salle de réunion éternelle)' },
        ].map(({ icon, title, value, sub }) => (
          <div key={title} className="bg-black/60 rainbow-border rounded-xl p-5 text-center hover:scale-105 transition-transform">
            <div className="text-4xl mb-2">{icon}</div>
            <div className="font-bold text-white">{title}</div>
            <div className="text-cyan-300 font-bold mt-1">{value}</div>
            <div className="text-gray-500 text-xs mt-1">{sub}</div>
          </div>
        ))}
      </div>

      {/* HORAIRES */}
      <div className="bg-black/60 rainbow-border rounded-xl p-6 mb-12 text-center">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">🕐 HORAIRES D'OUVERTURE 🕐</h3>
        <div className="grid grid-cols-2 gap-1 md:gap-2 max-w-md mx-auto text-xs md:text-sm">
          {[
            ['Lundi', '5h00 - 23h59'],
            ['Mardi', '4h00 - 00h00'],
            ['Mercredi', '5h00 - 23h59'],
            ['Jeudi', '4h30 - 00h00'],
            ['Vendredi', '5h00 - 02h00 (afterwork obligatoire)'],
            ['Samedi', 'Team building surpriiise !'],
            ['Dimanche', '"Repos" (mais répondez aux mails)'],
          ].map(([day, hours]) => (
            <div key={day} className="contents">
              <span className="text-right text-white font-bold pr-3 border-r border-gray-700">{day}</span>
              <span className="text-left text-gray-300 pl-3">{hours}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FORM */}
      <div className="bg-black/70 border-4 border-dashed border-lime-400 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-lime-400 text-center mb-6">
          📝 FORMULAIRE DE SOUFFRANCE 📝
        </h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-yellow-400 font-bold mb-1">👤 Votre nom :</label>
            <input type="text" placeholder="Ex: Jean-Eudes de la Synergologie" required
                   className="w-full bg-gray-900 border-2 border-fuchsia-500 rounded-lg px-4 py-3 text-white font-cursed focus:border-cyan-400 focus:outline-none" />
          </div>

          <div>
            <label className="block text-yellow-400 font-bold mb-1">📧 Votre email :</label>
            <input type="email" placeholder="jean-eudes@disruption.io" required
                   className="w-full bg-gray-900 border-2 border-fuchsia-500 rounded-lg px-4 py-3 text-white font-cursed focus:border-cyan-400 focus:outline-none" />
          </div>

          <div>
            <label className="block text-yellow-400 font-bold mb-1">💰 Budget :</label>
            <select className="w-full bg-gray-900 border-2 border-fuchsia-500 rounded-lg px-4 py-3 text-white font-cursed focus:border-cyan-400 focus:outline-none">
              <option>💸 Infini (recommandé)</option>
              <option>🏦 Le PIB d'un petit pays</option>
              <option>🤡 J'ai pas de budget mais j'ai une super idée</option>
              <option>🆓 Gratuit (lol)</option>
              <option>💎 Votre rein gauche</option>
            </select>
          </div>

          <div>
            <label className="block text-yellow-400 font-bold mb-1">📝 Votre besoin :</label>
            <textarea placeholder="Décrivez votre problème pour que Morgane puisse l'empirer..."
                      rows={4} required
                      className="w-full bg-gray-900 border-2 border-fuchsia-500 rounded-lg px-4 py-3 text-white font-cursed focus:border-cyan-400 focus:outline-none resize-vertical" />
          </div>

          <div>
            <label className="block text-yellow-400 font-bold mb-1">⭐ Comment avez-vous connu Morgane ?</label>
            <select className="w-full bg-gray-900 border-2 border-fuchsia-500 rounded-lg px-4 py-3 text-white font-cursed focus:border-cyan-400 focus:outline-none">
              <option>📰 Article "Les 30 managers les plus redoutés"</option>
              <option>🏃 En fuyant une de ses conférences</option>
              <option>😱 Il m'a ajouté sur LinkedIn 47 fois</option>
              <option>🆘 Tribunal des prud'hommes</option>
              <option>🧠 Mon psychologue m'a parlé d'il (en tant que cas d'étude)</option>
              <option>📎 Clippy me l'a recommandée</option>
            </select>
          </div>

          <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-red-800">
            <input type="checkbox" required className="mt-1 w-5 h-5 accent-red-500" />
            <label className="text-sm text-gray-300">
              J'accepte que Morgane utilise mes données personnelles pour m'envoyer des mails à 3h du matin,
              m'ajouter en CC sur des chaînes de 47 mails, et me convoquer à des réunions surprises.
              <span className="text-red-400"> (Obligatoire, irrévocable, pour toujours)</span>
            </label>
          </div>

          <button type="submit"
                  className="w-full py-4 font-bold text-xl rounded-xl text-white rainbow-bg animate-rainbow bg-[length:400%_400%] border-4 border-white hover:scale-105 transition-transform"
                  style={{ textShadow: '2px 2px 0 #000' }}>
            🚀 ENVOYER MA DEMANDE DE SOUFFRANCE 🚀
          </button>
        </form>
      </div>

      {/* FAQ */}
      <section>
        <h3 className="text-center text-3xl font-bold text-orange-400 mb-8"
            style={{ textShadow: '3px 3px 0 #000' }}>
          ❓ FAQ (Foire Aux Questions inutiles) ❓
        </h3>
        <div className="space-y-3">
          {FAQ.map((item, idx) => (
            <div key={idx} className="bg-black/60 border border-orange-500/30 rounded-xl overflow-hidden">
              <button
                onClick={() => { setFaqOpen(faqOpen === idx ? null : idx); playSuccess() }}
                className="w-full text-left px-6 py-4 font-bold text-white hover:bg-orange-900/20 transition-colors flex justify-between items-center"
              >
                <span>{item.q}</span>
                <span className="text-2xl">{faqOpen === idx ? '🔼' : '🔽'}</span>
              </button>
              {faqOpen === idx && (
                <div className="px-6 pb-4 text-gray-300 border-t border-orange-800/30 pt-3 animate-pulse-cursed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE MAPS TROLL */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold text-gray-400 mb-4">📍 NOUS TROUVER 📍</h3>
        <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-12 text-center">
          <div className="text-6xl mb-4">🗺️</div>
          <p className="text-gray-500">Google Maps a refusé de référencer nos locaux.</p>
          <p className="text-gray-600 text-sm mt-2">"Pour raisons éthiques" — Google, 2024</p>
        </div>
      </div>
    </div>
  )
}
