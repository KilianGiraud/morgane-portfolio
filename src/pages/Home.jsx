import { useState } from 'react'

const SKILLS = [
  { name: 'Management Autistique', width: '147%', color: 'from-red-500 to-fuchsia-500' },
  { name: 'Réunions Inutiles', width: '98%', color: 'from-orange-500 to-yellow-500' },
  { name: 'CC tout le monde dans les mails', width: '102%', color: 'from-lime-400 to-cyan-400' },
  { name: 'PowerPoint avec 200 slides', width: '95%', color: 'from-cyan-400 to-blue-500' },
  { name: 'Dire "on est une famille"', width: '120%', color: 'from-blue-500 to-fuchsia-500' },
  { name: 'Micromanagement Extrême', width: '110%', color: 'from-pink-500 to-red-500' },
  { name: 'Promettre des augmentations', width: '99%', color: 'from-yellow-500 to-amber-500' },
  { name: 'Donner les augmentations', width: '0.5%', color: 'from-red-800 to-red-900' },
  { name: 'Compétences techniques réelles', width: '3%', color: 'from-red-600 to-red-700' },
]

const CERTIFICATIONS = [
  { icon: '🏆', title: 'Manager de l\'Année', org: 'Association des Victimes du Management', year: '2024' },
  { icon: '💀', title: 'Record de Turnover', org: '47 démissions en 1 mois', year: '2023' },
  { icon: '📊', title: 'Roi du PowerPoint', org: '12 000 slides en un trimestre', year: '2024' },
  { icon: '😱', title: 'Plus Grand Nombre de CC', org: '847 personnes sur un seul mail', year: '2023' },
  { icon: '🤡', title: 'Certifiée ISO 9001 du Bullshit', org: 'Institut International du Pipeau', year: '2024' },
]

export default function Home() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <div>
      {/* HERO */}
      <section className="text-center py-16 px-4">
        <h1
          className="text-5xl md:text-7xl font-bold animate-shake"
          style={{ textShadow: '4px 4px 0 red, -4px -4px 0 blue, 4px -4px 0 lime, -4px 4px 0 yellow' }}
        >
          ✨ MORGANE ✨
        </h1>
        <h2 className="text-2xl md:text-4xl text-yellow-300 font-bold italic mt-4 animate-pulse-cursed"
            style={{ textShadow: '3px 3px 0 #000' }}>
          ~ Professional Autistic Manager™ ~
        </h2>
        <p className="mt-4 text-xl" style={{ textShadow: '2px 2px 0 #000' }}>
          🏆 N°1 mondial du management autistique depuis 2024 🏆
        </p>

        {/* Stats ticker */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 md:gap-4 mt-8">
          {[
            { label: 'Employés traumatisés', value: '2 847' },
            { label: 'Réunions inutiles', value: '∞' },
            { label: 'Projets détruits', value: '156' },
            { label: 'Arrêts maladie causés', value: '1 203' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-black/60 border-2 border-cyan-400 rounded-xl p-3 md:p-4 md:min-w-[150px]">
              <div className="text-xl md:text-3xl font-bold text-cyan-300 animate-zoom-in-out">{value}</div>
              <div className="text-xs md:text-sm text-gray-300 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PHOTO */}
      <section className="text-center py-8 px-4">
        <div className="inline-block rounded-full p-2 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 animate-hue-rotate"
             style={{ boxShadow: '0 0 30px magenta, 0 0 60px cyan, 0 0 90px yellow' }}>
          <div className="rounded-full border-4 border-white overflow-hidden w-40 h-40 md:w-56 md:h-56">
            {photoError ? (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-6xl">🤡</div>
            ) : (
              <img
                src="https://thispersondoesnotexist.com"
                alt="Morgane"
                className="w-full h-full object-cover"
                onError={() => setPhotoError(true)}
              />
            )}
          </div>
        </div>
        <div className="mt-4 inline-block bg-black/60 px-6 py-2 border-2 border-dashed border-pink-400 animate-blink text-lg">
          📸 Photo prise lors du Gala du Management Autistique 2024 📸
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h3 className="text-center text-3xl font-bold text-lime-400 animate-shake mb-8"
            style={{ textShadow: '3px 3px 0 #000' }}>
          🎯 COMPÉTENCES CERTIFIÉES 🎯
        </h3>
        {SKILLS.map(({ name, width, color }) => (
          <div key={name} className="mb-3 md:mb-4 bg-black/50 border-2 border-white rounded-xl overflow-hidden relative h-8 md:h-10">
            <span className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 font-bold text-[10px] md:text-sm z-10"
                  style={{ textShadow: '1px 1px 0 #000' }}>
              {name}
            </span>
            <div
              className={`h-full bg-gradient-to-r ${color} skill-bar-fill rounded-lg`}
              style={{ width }}
            />
          </div>
        ))}
      </section>

      {/* CERTIFICATIONS */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h3 className="text-center text-3xl font-bold text-yellow-400 mb-8"
            style={{ textShadow: '3px 3px 0 #000' }}>
          🏅 PRIX & DISTINCTIONS 🏅
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {CERTIFICATIONS.map(({ icon, title, org, year }) => (
            <div key={title}
                 className="bg-black/60 rainbow-border rounded-xl p-5 hover:scale-105 transition-transform animate-wobble">
              <div className="text-4xl mb-2">{icon}</div>
              <div className="font-bold text-lg text-yellow-300">{title}</div>
              <div className="text-sm text-gray-300">{org}</div>
              <div className="text-xs text-gray-500 mt-1">{year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-12 px-4 text-center">
        <h3 className="text-2xl font-bold text-gray-400 mb-6">🤝 ILS NOUS FONT (plus) CONFIANCE 🤝</h3>
        <div className="flex flex-wrap justify-center gap-6 opacity-50">
          {['Pôle Emploi', 'URSSAF', 'Tribunal des Prud\'hommes', 'Médecine du Travail', 'CPAM', 'SOS Burn-out'].map(name => (
            <span key={name} className="bg-black/40 px-4 py-2 rounded border border-gray-700 text-gray-400 line-through">
              {name}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
