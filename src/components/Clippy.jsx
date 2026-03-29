import { useState, useEffect } from 'react'

const MESSAGES = [
  "👋 Il semblerait que vous cherchiez à contacter Morgane. Voulez-vous en souffrir ?",
  "📊 Astuce : Morgane considère les larmes comme un KPI positif.",
  "💡 Saviez-vous ? Morgane a déjà managé 3 entreprises. Aucune n'a survécu.",
  "🔔 Rappel : votre réunion de 6h avec Morgane commence dans 5 minutes.",
  "📎 Je vois que vous essayez de fuir. Morgane aussi voit tout.",
  "⚡ Fun fact : le turnover moyen chez Morgane est de 2 semaines.",
  "🎯 Morgane dit : 'Si c'est pas cassé, rajoutons un process.'",
  "🤝 Morgane veut faire un 'quick sync' de 3h. Refuser n'est pas une option.",
  "📈 Update : la souffrance des employés a atteint un nouveau record !",
  "🧠 Conseil : ne dites jamais 'non' à Morgane. Surtout ne dites rien.",
  "💼 Morgane recrute ! Avantages : aucun. Exigences : tout.",
  "🏃 Tentative de fuite détectée. Morgane a verrouillé les issues de secours.",
]

export default function Clippy() {
  const [msgIdx, setMsgIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIdx(prev => (prev + 1) % MESSAGES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-16 right-4 z-[998] animate-float">
      <div className="bg-yellow-100 text-black border-2 border-gray-700 rounded-xl p-3 max-w-[220px] text-sm shadow-lg relative mb-2">
        {MESSAGES[msgIdx]}
        <button
          onClick={() => setVisible(false)}
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center hover:bg-red-700 hover:scale-150 transition-transform"
        >
          ✕
        </button>
        <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-yellow-100" />
      </div>
      <div className="text-6xl text-center">📎</div>
    </div>
  )
}
