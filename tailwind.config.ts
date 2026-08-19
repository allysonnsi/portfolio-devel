import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif']
      },
      colors: {
        accent: {
          50: '#eff6ff',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb'
        }
      },
      boxShadow: {
        glow: '0 0 35px rgba(59, 130, 246, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
