/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        cursed: ['"Comic Neue"', '"Comic Sans MS"', 'cursive'],
        papyrus: ['Papyrus', 'fantasy'],
      },
      animation: {
        'rainbow': 'rainbow 3s ease infinite',
        'shake': 'shake 0.3s infinite',
        'blink': 'blink 0.5s step-end infinite',
        'pulse-cursed': 'pulse-cursed 0.8s ease-in-out infinite alternate',
        'wobble': 'wobble 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 3s linear infinite',
        'hue-rotate': 'hue-rotate 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'marquee-left': 'marquee-left 12s linear infinite',
        'marquee-right': 'marquee-right 15s linear infinite',
        'glitch': 'glitch 0.3s infinite',
        'zoom-in-out': 'zoom-in-out 1s ease-in-out infinite',
      },
      keyframes: {
        rainbow: {
          '0%, 100%': { backgroundPosition: '0% 82%' },
          '50%': { backgroundPosition: '100% 19%' },
        },
        shake: {
          '0%, 100%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-5px, 5px) rotate(-1deg)' },
          '50%': { transform: 'translate(5px, -5px) rotate(1deg)' },
          '75%': { transform: 'translate(-3px, -3px) rotate(-0.5deg)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        'pulse-cursed': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        wobble: {
          '0%': { transform: 'rotate(-1deg)' },
          '100%': { transform: 'rotate(1deg)' },
        },
        'hue-rotate': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)', textShadow: '2px 0 red, -2px 0 cyan' },
          '25%': { transform: 'translate(-3px, 2px)', textShadow: '-2px 0 red, 2px 0 cyan' },
          '50%': { transform: 'translate(3px, -2px)', textShadow: '2px 0 red, -2px 0 cyan' },
          '75%': { transform: 'translate(-1px, -1px)', textShadow: '-2px 0 red, 2px 0 cyan' },
          '100%': { transform: 'translate(0)', textShadow: '2px 0 red, -2px 0 cyan' },
        },
        'zoom-in-out': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
