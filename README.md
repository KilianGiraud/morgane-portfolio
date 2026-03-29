# 🤡 Morgane — Professional Autistic Manager™

Le portfolio officiel de Morgane, N°1 mondial du management autistique.

## 🚀 Dev local

```bash
npm install
npm run dev
```

## 🌍 Déployer sur GitHub Pages

1. Crée un repo GitHub nommé `morgane-portfolio`
2. Dans `vite.config.js`, vérifie que `base` correspond au nom du repo :
   ```js
   base: '/morgane-portfolio/',
   ```
3. Push le code sur `main`
4. Va dans **Settings → Pages → Source : GitHub Actions**
5. Le workflow se lance automatiquement, le site sera dispo sur :
   `https://<ton-username>.github.io/morgane-portfolio/`

## 📁 Structure

```
src/
├── components/     # Composants réutilisables (Navbar, Clippy, etc.)
├── pages/          # Pages (Home, About, Blog, Guestbook, Contact)
├── utils/          # Audio cursed
├── App.jsx         # Routing + layout global
├── main.jsx        # Entry point
└── index.css       # Styles globaux + Tailwind
```

## ⚠️ Avertissement

Ce site peut provoquer : migraines, crises d'épilepsie, burn-out préventif, et un désir irrépressible de démissionner.
