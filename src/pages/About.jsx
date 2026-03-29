const TIMELINE = [
  {
    year: '1998',
    title: '👶 Naissance',
    desc: 'Morgane naît en criant. Il n\'a jamais arrêté depuis.',
    icon: '🍼',
  },
  {
    year: '2004',
    title: '🏫 Première expérience de management',
    desc: 'Morgane organise la cour de récré. 3 enfants pleurent. La directrice convoque ses parents.',
    icon: '🏫',
  },
  {
    year: '2010',
    title: '📊 Collège - Déléguée de classe',
    desc: 'Élu par défaut car personne d\'autre ne voulait. Met en place un "système de reporting hebdomadaire" pour les devoirs. Ses camarades la détestent.',
    icon: '📋',
  },
  {
    year: '2016',
    title: '🎓 Bac obtenu (de justesse)',
    desc: 'Mention "Peut mieux faire, surtout si il arrêtait de manager les profs". Spécialité : Donner des ordres.',
    icon: '🎓',
  },
  {
    year: '2017',
    title: '📈 École de Commerce',
    desc: 'Intègre une école de commerce dont personne n\'a entendu parler. Se spécialise en "Leadership Disruptif" et "Synergies Transversales Augmentées".',
    icon: '🏛️',
  },
  {
    year: '2019',
    title: '💼 Premier stage',
    desc: 'Stage chez TotalémentPaumée SARL. Réorganise tout le service en 2 semaines. Le service ferme en 3.',
    icon: '💼',
  },
  {
    year: '2020',
    title: '🏠 COVID - Télétravail',
    desc: 'Impose des daily standups de 2h sur Zoom. Demande aux employés de garder la caméra allumée même aux toilettes. "La transparence c\'est important."',
    icon: '🦠',
  },
  {
    year: '2021',
    title: '🚀 Première entreprise détruite',
    desc: 'Nommée Head of Synergy chez StartupQuiVaMourir. L\'entreprise fait faillite 4 mois plus tard. Morgane met "Transformation Réussie" sur LinkedIn.',
    icon: '💥',
  },
  {
    year: '2022',
    title: '📉 Deuxième entreprise détruite',
    desc: 'Consultante chez OnVaLeRegretter Inc. Propose de "pivoter la culture d\'entreprise". 60% de turnover en 6 mois. Morgane demande une augmentation.',
    icon: '📉',
  },
  {
    year: '2023',
    title: '🏆 Record du monde',
    desc: 'Bat le record mondial du nombre de buzzwords dans une seule phrase : "Il faut leverager nos assets cross-fonctionnels pour disruter le paradigme agile de la scalabilité holistique." (47 mots, 0 sens.)',
    icon: '🏆',
  },
  {
    year: '2024',
    title: '👑 Professional Autistic Manager™',
    desc: 'Crée sa propre certification. Se l\'attribue. Ouvre son cabinet de conseil. Tarif : 500€/h. Résultats : non garantis. Remboursements : lol.',
    icon: '👑',
  },
  {
    year: '2025',
    title: '🌍 Expansion Mondiale',
    desc: 'Morgane lance sa franchise internationale. Des entreprises du monde entier regrettent déjà.',
    icon: '🌍',
  },
]

const SOFT_SKILLS = [
  { skill: 'Empathie', level: '2%', comment: 'A dit "je comprends" une fois. C\'était un mensonge.' },
  { skill: 'Communication', level: '∞%', comment: 'Personne ne comprend ce qu\'il dit, mais il le dit FORT.' },
  { skill: 'Écoute Active', level: '0%', comment: 'Morgane écoute uniquement le son de sa propre voix.' },
  { skill: 'Résolution de Conflits', level: '150%', comment: 'Crée les conflits puis se propose de les résoudre. Génie.' },
  { skill: 'Gestion du Stress', level: '100%', comment: 'Le stress des autres. Il adore le générer.' },
  { skill: 'Humilité', level: '-3%', comment: 'A mis "Humble" sur son LinkedIn. Non ironiquement.' },
]

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* INTRO */}
      <section className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-cyan-300 animate-glitch mb-4"
            style={{ textShadow: '3px 3px 0 #000' }}>
          👤 À PROPOS DE MORGANE 👤
        </h2>
        <p className="text-base md:text-xl text-yellow-200 max-w-2xl mx-auto leading-relaxed"
           style={{ textShadow: '2px 2px 0 #000' }}>
          Visionnaire. Leader. Légende. Morgane est le manager que personne n'a demandée,
          mais que tout le monde a eue. Son parcours est un mélange unique de
          <span className="text-lime-400 font-bold"> destruction d'entreprises</span>,
          <span className="text-pink-400 font-bold"> de réunions inutiles</span>, et
          <span className="text-cyan-400 font-bold"> de PowerPoints incompréhensibles</span>.
        </p>
      </section>

      {/* CITATION */}
      <section className="text-center mb-16 py-8">
        <blockquote className="text-xl md:text-3xl italic text-white/90 max-w-xl mx-auto"
                    style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}>
          "Le management, c'est comme la cuisine : même quand c'est dégueulasse, il faut forcer les gens à manger."
        </blockquote>
        <p className="mt-4 text-yellow-400 font-bold">— Morgane, TEDx refusé 2024</p>
      </section>

      {/* TIMELINE */}
      <section className="mb-16">
        <h3 className="text-center text-3xl font-bold text-fuchsia-400 mb-10 animate-shake"
            style={{ textShadow: '3px 3px 0 #000' }}>
          📅 PARCOURS LÉGENDAIRE 📅
        </h3>
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500" />

          {TIMELINE.map((item, idx) => (
            <div key={item.year}
                 className={`relative flex items-start mb-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-yellow-400 border-2 border-white z-10 animate-pulse-cursed" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-5/12 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} bg-black/60 rainbow-border rounded-xl p-3 md:p-5 hover:scale-105 transition-transform`}>
                <div className="text-2xl md:text-3xl mb-1 md:mb-2">{item.icon}</div>
                <div className="text-yellow-400 font-bold text-xs md:text-sm">{item.year}</div>
                <div className="text-sm md:text-lg font-bold text-white mt-1">{item.title}</div>
                <p className="text-gray-300 text-xs md:text-sm mt-1 md:mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section className="mb-16">
        <h3 className="text-center text-3xl font-bold text-lime-400 mb-8"
            style={{ textShadow: '3px 3px 0 #000' }}>
          🧠 SOFT SKILLS (LOL) 🧠
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {SOFT_SKILLS.map(({ skill, level, comment }) => (
            <div key={skill} className="bg-black/60 border-2 border-fuchsia-500 rounded-xl p-4 hover:rotate-1 transition-transform">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-white">{skill}</span>
                <span className="text-yellow-400 font-bold text-xl animate-blink">{level}</span>
              </div>
              <p className="text-sm text-gray-400 italic">"{comment}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOBBIES */}
      <section className="text-center mb-16">
        <h3 className="text-3xl font-bold text-orange-400 mb-8"
            style={{ textShadow: '3px 3px 0 #000' }}>
          🎨 LOISIRS & PASSIONS 🎨
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            '📊 Faire des tableaux Excel', '📧 Envoyer des mails à 23h',
            '📋 Créer des process', '🎤 Parler sans dire', '💼 LinkedIn',
            '📱 Lire des livres de dev perso', '🧘 Méditer sur les KPIs',
            '🏃 Fuir ses responsabilités', '🍷 Afterworks obligatoires',
            '📈 Mentir sur les résultats', '🤝 Networking toxique',
            '📝 Réécrire les fiches de poste',
          ].map(hobby => (
            <span key={hobby}
                  className="bg-black/50 border border-orange-500/50 px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-black transition-colors animate-wobble">
              {hobby}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
