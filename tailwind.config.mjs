/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette (from Nayla's swatch)
        brand: {
          50: '#eef3fc',
          100: '#d7e3f8',
          200: '#b0c7f1',
          300: '#89aaea',
          400: '#618ee2',
          500: '#396cda', // main
          600: '#2f57b0',
          700: '#244289',
          800: '#1a2f62',
          900: '#111f42',
        },
        coral: {
          50: '#fbeeed',
          100: '#f6d6d3',
          200: '#edaca6',
          300: '#e5837a',
          400: '#df6a5f',
          500: '#d9554a', // accent
          600: '#b8443b',
          700: '#93362f',
          800: '#6e2823',
          900: '#4a1b18',
        },
        sand: {
          50: '#fdf9ef',
          100: '#fbf1d9',
          200: '#f7e3b4',
          300: '#f4d79b',
          400: '#f1cc87', // soft accent
          500: '#e9b85f',
          600: '#d69c36',
          700: '#a9791f',
          800: '#7a561a',
          900: '#4f3812',
        },
        ink: {
          DEFAULT: '#16181d',
          soft: '#2a2e37',
          muted: '#5b6270',
          faint: '#8a909c',
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f5f6f8',
          sunken: '#eef0f4',
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
