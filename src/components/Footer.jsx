export default function Footer() {
  return (
    <footer className="text-center py-8 pb-26 text-sm text-gray-400 bg-black/50 border-t-4 border-dashed border-yellow-500 relative z-10">
      <p>© 2003-2026 Morgane Corp™ — Tous droits réservés (surtout le droit de souffrir)</p>
      <p className="mt-2">
        Fait avec 💔 sur <span className="text-cyan-400">FrontPage Express</span> |
        Hébergé sur <span className="text-cyan-400">Lycos</span> |
        Meilleure résolution : 800x600
      </p>
      <p className="mt-2 text-gray-600">
        <span className="animate-blink">🔨 Webmaster : Morgane (ne lui envoyez pas de mails, elle ne répond qu'aux fax) 🔨</span>
      </p>
      <div className="mt-4 flex justify-center gap-3">
        <img src="https://web.archive.org/web/20090830082529/http://geocities.com/SiliconValley/Haven/1397/built_ns.gif" alt="badge" className="h-8" onError={e => e.target.style.display='none'} />
        <span className="bg-lime-600 text-black px-3 py-1 rounded text-xs font-bold animate-pulse-cursed">
          ✓ Certifié ANTI-PRODUCTIVITÉ
        </span>
        <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold animate-blink">
          ⚠ HTML VALIDÉ PAR MORGANE
        </span>
      </div>
    </footer>
  )
}
