/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 28,
      '3xl': 32,
      '4xl': 36,
      '5xl': 40,
      '6xl': 64,
      '7xl': 96
    },
    colors: {
      brandPrimary: {
        shine: '#C4DCFF',
        lightest: '#6EA1F7',
        light: '#4F97FF',
        default: '#3E82F4',
        medium: '#346DCC',
        dark: '#2957A3'
      },
      brandSecondary: {
        light: '#4DC48A',
        default: '#11B163',
        medium: '#0E8F50',
        dark: '#0A6639'
      },
      neutral: {
        shine: '#FFFFFF',
        lightest: '#F2F5F7',
        light: '#DBDBDB',
        medium: '#898B8F',
        dark: '#464E5C',
        darkest: '#1B2029'
      },
      feedbackNegative: {
        lightest: '#F6D0CD',
        light: '#E47369',
        default: '#DB4437',
        medium: '#B8392E',
        dark: '#8F2C24'
      },
      feedbackGoing: {
        default: '#FFBC00',
        medium: '#E0A600',
        dark: '#B88700'
      },
      feedbackPositive: {
        lightest: '#C4EBD8',
        light: '#4DC48A',
        default: '#11B163',
        medium: '#0E8F50',
        dark: '#0A6639'
      }
    },
    extend: {
      fontFamily: {
        sans: 'DM Sans, sans-serif'
      }
    },
  },
  plugins: [],
}
