/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette (from Nayla's swatch)
        // 50/100/600 are CSS-variable driven (soft tinted badges + their
        // text) since those are the shades that need a dark-navy-safe
        // repaint; the rest stay fixed — they already read fine on navy.
        brand: {
          50: 'rgb(var(--brand-50) / <alpha-value>)',
          100: 'rgb(var(--brand-100) / <alpha-value>)',
          200: '#b0c7f1',
          300: '#89aaea',
          400: '#618ee2',
          500: '#396cda', // main
          600: 'rgb(var(--brand-600) / <alpha-value>)',
          700: '#244289',
          800: '#1a2f62',
          900: '#111f42',
        },
        coral: {
          50: 'rgb(var(--coral-50) / <alpha-value>)',
          100: 'rgb(var(--coral-100) / <alpha-value>)',
          200: '#edaca6',
          300: '#e5837a',
          400: '#df6a5f',
          500: '#d9554a', // accent
          600: 'rgb(var(--coral-600) / <alpha-value>)',
          700: '#93362f',
          800: '#6e2823',
          900: '#4a1b18',
        },
        sand: {
          50: '#fdf9ef',
          100: 'rgb(var(--sand-100) / <alpha-value>)',
          200: 'rgb(var(--sand-200) / <alpha-value>)',
          300: '#f4d79b',
          400: '#f1cc87', // soft accent
          500: '#e9b85f',
          600: '#d69c36',
          700: 'rgb(var(--sand-700) / <alpha-value>)',
          800: '#7a561a',
          900: '#4f3812',
        },
        // ink/surface are CSS-variable driven so they can repaint for dark
        // mode (navy) without touching every component — see global.css.
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          soft: 'rgb(var(--ink-soft) / <alpha-value>)',
          muted: 'rgb(var(--ink-muted) / <alpha-value>)',
          faint: 'rgb(var(--ink-faint) / <alpha-value>)',
        },
        whatsapp: {
          DEFAULT: '#2fa361',
          dark: '#268b52',
        },
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          alt: 'rgb(var(--surface-alt) / <alpha-value>)',
          sunken: 'rgb(var(--surface-sunken) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,0.04), 0 12px 32px -12px rgba(57,108,218,0.18)',
        'card-hover': '0 2px 4px rgba(16,24,40,0.06), 0 24px 48px -16px rgba(57,108,218,0.30)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'blob-drift': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(24px,-16px) scale(1.06)' },
          '66%': { transform: 'translate(-18px,12px) scale(0.96)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        float: 'float 7s ease-in-out infinite',
        'blob-drift': 'blob-drift 18s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};
