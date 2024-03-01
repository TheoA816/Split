import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        splitBlue: '#8BC3FE',
        splitDarkBlue: '#3F6AB7',
        splitWhite: '#3F6AB7',
        splitYellow: '#3F6AB7',
        splitBlue5: '#3F6AB7',
        splitBlack50: '#3F6AB7',
        splitBlue25: '#8BC3FE',
        splitPink: '#F88DAD',
        splitPink25: '#F88DAD',
        splitYellow25: '#F5EE9E',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
