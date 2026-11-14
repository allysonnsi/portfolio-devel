import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        accent: {
          50: '#f7fbe7',
          400: '#c3e41d',
          500: '#acc91a',
          600: '#526400'
        }
      },
      boxShadow: {
        glow: '0 0 35px rgba(195, 228, 29, 0.2)'
      }
    }
  },
  plugins: []
};

export default config;

