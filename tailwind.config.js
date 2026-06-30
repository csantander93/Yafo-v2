/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"Geist"', '"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['"Geist"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee':              'marquee 80s linear infinite',
        'marquee-slow':         'marquee 110s linear infinite',
        'marquee-reverse':      'marquee-reverse 90s linear infinite',
        'marquee-reverse-slow': 'marquee-reverse 120s linear infinite',
        'float':                'float 6s ease-in-out infinite',
        'fade-up':              'fadeUp 0.6s ease-out forwards',
        'pulse-slow':           'pulse 3s ease-in-out infinite',
        'livepulse':            'livepulse 1.6s ease-in-out infinite',
        'blink':                'blink 1.1s steps(2, start) infinite',
        'logo-glow':            'logo-glow 2.4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'marquee-reverse': {
          '0%':   { transform: 'translateX(-33.333%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        livepulse: {
          '0%, 100%': { transform: 'scale(1)',   opacity: '1'   },
          '50%':      { transform: 'scale(0.6)', opacity: '0.4' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        'logo-glow': {
          '0%, 100%': { boxShadow: '0 2px 10px 0 rgba(59,130,246,0.18)' },
          '50%':      { boxShadow: '0 4px 24px 6px rgba(59,130,246,0.42)' },
        },
      },
    },
  },
  plugins: [],
}
