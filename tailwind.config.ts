import type { Config } from 'tailwindcss';

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
        neutral: {
          10: '#FCFCFC',
          50: '#f5f6f6',
          100: '#e5e7e8',
          200: '#E5E5E5',
          300: '#ABB0B5',
          400: '#798089',
          500: '#656b75',
          600: '#575c63',
          700: '#404040',
          800: '#414349',
          900: '#3a3c3f',
          950: '#242528',
        },
        primary: {
          200: '#EEEEEE',
          300: '#8F8F8F',
          400: '#585660',
          500: '#3B3B3B',
        },
        'alert-error': {
          50: '#fef4f2',
          100: '#ffe6e1',
          200: '#ffd1c8',
          300: '#ffb1a2',
          400: '#fc856d',
          500: '#f55c3e',
          600: '#e44d2f',
          700: '#bf3216',
          800: '#9d2d17',
          900: '#822b1a',
          950: '#471208',
        },
      },
    },
  },
  plugins: [],
};
export default config;
