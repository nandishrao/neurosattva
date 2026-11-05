/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          darkest: '#06141B',
          dark: '#11212D',
          petrol: '#253745',
          steel: '#4A5C6A',
          mist: '#9BA8AB',
          pearl: '#CCD0CF',
        },
        // Mapped design tokens
        mist: '#F2F5F5',
        cloud: '#E5EAEA',
        porcelain: '#FFFFFF',
        ink: {
          DEFAULT: '#06141B',
          soft: '#4A5C6A',
          deep: '#11212D',
        },
        line: 'rgba(74, 92, 106, 0.2)',
        brand: {
          DEFAULT: '#253745',
          dark: '#11212D',
          darkest: '#06141B',
          steel: '#4A5C6A',
          mist: '#9BA8AB',
          pearl: '#CCD0CF',
        },
        amb: {
          wash: 'var(--amb-wash)',
          accent: 'var(--amb-accent)',
          glow: 'var(--amb-glow)',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 40px rgba(6, 20, 27, 0.06)',
        card: '0 6px 24px rgba(6, 20, 27, 0.05)',
        glow: '0 12px 48px var(--amb-glow)',
        brand: '0 10px 30px rgba(17, 33, 45, 0.25)',
      },
      borderRadius: {
        '24': '24px',
      },
      animation: {
        'drift-1': 'drift1 40s infinite ease-in-out',
        'drift-2': 'drift2 48s infinite ease-in-out',
        'drift-3': 'drift3 36s infinite ease-in-out',
        'breathe-slow': 'breathe 6s infinite ease-in-out',
        'pulse-gamma': 'breathe 3s infinite ease-in-out',
        'pulse-alpha': 'breathe 4.5s infinite ease-in-out',
        'pulse-theta': 'breathe 6s infinite ease-in-out',
      },
      keyframes: {
        drift1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(50px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-30px, 40px) scale(0.96)' },
        },
        drift2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-40px, 50px) scale(1.04)' },
          '66%': { transform: 'translate(40px, -20px) scale(0.94)' },
        },
        drift3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(30px, 30px) scale(1.08)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
