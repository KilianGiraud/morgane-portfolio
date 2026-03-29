import { useState } from 'react'

const ARTICLES = [
  {
    id: 1,
    date: '15 mars 2026',
    title: '🔥 Comment j\'ai fait démissionner 12 personnes en une seule réunion',
    tags: ['#Management', '#Record', '#Fière'],
    preview: 'C\'était un mardi. La salle de réunion sentait le café froid et la résignation...',
    content: `C'était un mardi. La salle de réunion sentait le café froid et la résignation. J'ai commencé par un PowerPoint de 347 slides intitulé "Roadmap Q2 : L'Excellence ou la Porte".

Slide 1 : "Si vous n'êtes pas passionnés, partez."
Slide 2 : Photo de moi avec la citation "Winners never quit, quitters are fired."
Slide 3-346 : Des tableaux Excel que personne ne comprend.
Slide 347 : "Des questions ?"

À la slide 47, Jean-Michel a commencé à pleurer. À la slide 128, Sandrine a envoyé un SMS à un cabinet de recrutement. À la slide 250, 8 personnes étaient déjà parties sans rien dire.

Record battu. La précédente manager n'en avait fait démissionner que 7. Amateur.

Conseil pro : pour maximiser les démissions, faites la réunion un vendredi à 18h. Le weekend leur donne le temps de mettre à jour leur CV.`,
    reactions: { '💀': 847, '😂': 1203, '😱': 564, '🏃': 2891 },
  },
  {
    id: 2,
    date: '8 mars 2026',
    title: '📧 Guide : Comment écrire un mail de 3000 mots pour dire "OK"',
    tags: ['#Communication', '#Expertise', '#Inbox'],
    preview: 'L\'art du mail corporate est un art subtil que peu maîtrisent...',
    content: `L'art du mail corporate est un art subtil que peu maîtrisent. Voici ma méthode éprouvée :

ÉTAPE 1 : L'objet
Jamais "OK" ou "Réponse". Toujours : "RE:RE:RE:RE:FW:RE: Point de suivi sur la synergie des livrables transversaux - ACTION REQUIRED - URGENT - V3 FINAL FINAL FINAL (2)"

ÉTAPE 2 : Les destinataires
CC : Tout le monde. Absolument tout le monde. Le stagiaire, le PDG, la femme de ménage. Si vous pouvez CC des gens d'autres entreprises, faites-le.

ÉTAPE 3 : Le corps
Commencez par "Suite à notre échange verbal de ce jour..." même si vous n'avez parlé à personne. Ajoutez 14 paragraphes de contexte. Citez 3 réunions qui n'ont pas eu lieu. Terminez par "N'hésitez pas à me faire un retour sur ce point dans les plus brefs délais" alors que la seule réponse attendue est "OK".

ÉTAPE 4 : La signature
Minimum 47 lignes. Incluez votre titre complet ("Professional Autistic Manager™ | Head of Synergy | Chief Disruption Officer"), 3 numéros de téléphone, un lien vers votre LinkedIn, et une citation inspirante de vous-même.

Résultat : personne ne lira votre mail, mais tout le monde saura que vous existez.`,
    reactions: { '💀': 421, '📧': 2100, '😭': 876, '🤡': 1547 },
  },
  {
    id: 3,
    date: '28 février 2026',
    title: '🧘 Le Mindfulness au travail : comment méditer pendant que vos employés pleurent',
    tags: ['#Wellbeing', '#Leadership', '#Zen'],
    preview: 'Le bien-être au travail, c\'est important. Le mien, pas le vôtre...',
    content: `Le bien-être au travail, c'est important. Le mien, pas le vôtre.

Voici ma routine matinale de manager bienveillante :

6h00 - Réveil. Méditation de 5 minutes sur mes KPIs.
6h05 - Envoi de 47 mails urgents avec "ASAP" en objet.
6h30 - Yoga. Position du guerrier. J'imagine que je licencie quelqu'un.
7h00 - Arrivée au bureau 2h avant tout le monde pour envoyer des messages passifs-agressifs ("Je vois que je suis la première à arriver... encore une fois").
7h02 - Meditation sur la souffrance des autres. Très relaxant.
8h00 - Daily standup. Minimum 45 minutes. Personne ne peut s'asseoir.

Mon conseil : installez une fontaine à eau au bureau. Pas pour l'hydratation — pour que les employés aient un endroit pour pleurer discrètement.

Namaste. 🙏`,
    reactions: { '🧘': 234, '💀': 1893, '😭': 3201, '🏃': 987 },
  },
  {
    id: 4,
    date: '14 février 2026',
    title: '❤️ Saint-Valentin : comment j\'ai organisé un team building obligatoire',
    tags: ['#TeamBuilding', '#Amour', '#Obligatoire'],
    preview: 'La Saint-Valentin, c\'est le jour parfait pour rappeler aux employés...',
    content: `La Saint-Valentin, c'est le jour parfait pour rappeler aux employés qu'ils sont mariés... à l'entreprise.

Programme du Team Building Obligatoire de la Saint-Valentin :

14h00 - Atelier "Speed Networking" entre collègues qui se détestent déjà.
15h00 - Karaoké sur "We Are Family" (participation obligatoire, sourire obligatoire).
16h00 - Exercice de confiance : tomber en arrière. Personne ne vous rattrapera, comme dans la vraie vie au bureau.
17h00 - Tour de table : "Dites une chose que vous aimez chez votre manager." Silence gênant de 45 minutes.
17h45 - Discours de Morgane : "Vous êtes tous remplaçables, mais en attendant, je vous aime. Enfin, je vous tolère."
18h00 - Afterwork obligatoire. Ceux qui partent avant 22h auront un entretien lundi.

Bilan : 3 arrêts maladie, 2 démissions, 1 plainte aux prud'hommes.
Un succès ! 🎉`,
    reactions: { '❤️': 12, '💔': 4502, '😱': 1287, '🤮': 2341 },
  },
  {
    id: 5,
    date: '1 janvier 2026',
    title: '🎆 Mes bonnes résolutions de manager pour 2026',
    tags: ['#NouvelAn', '#Objectifs', '#Souffrance'],
    preview: 'Nouvelle année, nouvelles victimes. Voici mon plan...',
    content: `Nouvelle année, nouvelles victimes. Voici mon plan pour 2026 :

1. Augmenter le nombre de réunions de 200%. On est actuellement à 6h de réunion par jour, l'objectif est 12h. Le temps restant servira à préparer les réunions.

2. Implémenter le "Management par la Peur 2.0". La version 1.0 était trop douce. Les employés souriaient encore parfois.

3. Supprimer les pauses café. Le café sera désormais servi pendant les réunions. Deux oiseaux, un pierre.

4. Créer un KPI pour mesurer le bonheur des employés. L'objectif sera de le faire baisser trimestriellement.

5. Remplacer les évaluations annuelles par des "sessions de déconstruction émotionnelle quotidiennes".

6. Atteindre 100% de turnover. Actuellement à 87%, il reste une marge de progression.

Ensemble, faisons de 2026 l'année la plus productive (pour moi) et la plus traumatisante (pour vous) de l'histoire ! 💪`,
    reactions: { '🎆': 45, '💀': 5678, '😭': 3456, '🆘': 8901 },
  },
]

export default function Blog() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-fuchsia-400 mb-4 animate-glitch"
          style={{ textShadow: '3px 3px 0 #000' }}>
        📝 LE BLOG DE MORGANE 📝
      </h2>
      <p className="text-center text-gray-300 mb-8 md:mb-12 text-sm md:text-lg">
        Pensées, conseils et traumatismes — par le manager que personne n'a demandé
      </p>

      {ARTICLES.map(article => {
        const isExpanded = expandedId === article.id
        return (
          <article key={article.id}
                   className="mb-6 md:mb-8 bg-black/60 rainbow-border rounded-xl overflow-hidden hover:scale-[1.02] transition-transform">
            {/* Header */}
            <div className="p-4 md:p-6">
              <div className="text-xs md:text-sm text-gray-400 mb-2">{article.date}</div>
              <h3 className="text-base md:text-xl font-bold text-yellow-300 mb-3 hover:animate-shake cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : article.id)}>
                {article.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map(tag => (
                  <span key={tag} className="bg-fuchsia-900/50 text-fuchsia-300 text-xs px-3 py-1 rounded-full border border-fuchsia-700">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              {isExpanded ? (
                <div className="text-gray-200 text-sm md:text-base whitespace-pre-line leading-relaxed border-t border-gray-700 pt-4 mt-4">
                  {article.content}
                </div>
              ) : (
                <p className="text-gray-400 italic text-sm">{article.preview}</p>
              )}

              <button
                onClick={() => setExpandedId(isExpanded ? null : article.id)}
                className="mt-3 md:mt-4 text-cyan-400 font-bold hover:text-cyan-300 transition-colors text-sm md:text-base"
              >
                {isExpanded ? '🔼 Replier (trop tard, vous avez lu)' : '🔽 Lire la suite (à vos risques et périls)'}
              </button>
            </div>

            {/* Reactions */}
            <div className="bg-black/40 px-3 md:px-6 py-2 md:py-3 flex flex-wrap gap-2 md:gap-3 border-t border-gray-800">
              {Object.entries(article.reactions).map(([emoji, count]) => (
                <button key={emoji}
                        className="bg-gray-800 hover:bg-gray-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm transition-colors hover:scale-110">
                  {emoji} <span className="text-gray-300">{count.toLocaleString('fr-FR')}</span>
                </button>
              ))}
            </div>
          </article>
        )
      })}

      {/* Newsletter */}
      <div className="text-center mt-12 bg-black/60 rainbow-border rounded-xl p-8">
        <h4 className="text-2xl font-bold text-lime-400 mb-2 animate-pulse-cursed">📬 NEWSLETTER</h4>
        <p className="text-gray-300 mb-4">Recevez les dernières nouvelles de Morgane directement dans votre boîte mail (désinscription impossible)</p>
        <div className="flex max-w-md mx-auto gap-2">
          <input type="email" placeholder="votre@email.com" className="flex-1 bg-gray-900 border-2 border-fuchsia-500 rounded-lg px-4 py-2 text-white font-cursed" />
          <button className="bg-gradient-to-r from-red-500 to-fuchsia-500 px-6 py-2 rounded-lg font-bold hover:scale-110 transition-transform"
                  onClick={() => alert('✅ Félicitations ! Vous recevrez 847 mails par jour. Désinscription : impossible. Bonne chance.')}>
            S'ABONNER
          </button>
        </div>
      </div>
    </div>
  )
}
