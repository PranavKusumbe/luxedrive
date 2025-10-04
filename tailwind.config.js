/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          900: '#070708',
        },
        surface: {
          100: '#0f1113',
        },
        text: {
          primary: '#F5F5F7',
        },
        muted: '#AFAFAF',
        accent: {
          200: '#F2E6C5',
          500: '#C9A14B',
        },
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
      },
      borderRadius: {
        'md': '12px',
      },
      fontFamily: {
        heading: ['GT Super Display', 'serif'],
        body: ['Calibre', 'sans-serif'],
      },
      transitionTimingFunction: {
        'fast': 'cubic-bezier(.36,.66,.04,1)',
        'medium': 'cubic-bezier(.22,.9,.36,1)',
        'slow': 'cubic-bezier(.19,.73,.34,1)',
      },
    },
  },
  plugins: [],
}
