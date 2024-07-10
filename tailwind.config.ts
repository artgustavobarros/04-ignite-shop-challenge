import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#fff',
        overlay: 'rgba(0,0,0,0.7)',
        base: {
          background: '#121214',
          elements: '#202024',
          icon: '#8d8d99',
          text: '#c4c4cc',
          title: '#e1e1e6',
        },
        product: {
          principal: '#00875f',
          light: '#00b37e',
        },
      },
      fontSize: { md: '1.125rem', lg: '1.25rem', xl: '1.5rem', '2xl': '2rem' },
    },
    fontFamily: {
      sans: 'var(--font-roboto)',
    },
    width: {
      calc: 'calc(100vw - ((100vw - 1180px)/2))',
    },
    backgroundImage: {
      'hero-gradient': 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    },
    gridTemplateColumns: {
      layout: 'repeat(2, 576px)',
    },
  },
  plugins: [],
}
export default config
