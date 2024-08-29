/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: ['14px', '160%'],
      md: ['16px', '130%'],
      lg: ['24px', '130%'],
      'title-sm': ['18px', '160%'],
      'title-md': ['20px', '160%'],
      'title-lg': ['24px', '130%'],
      link: ['12px', '160%'],
    },
    fontFamily: {
      sans: ['Nunito'],
    },
    extend: {
      colors: {
        base: {
          input: '#040F1A',
          background: '#071422',
          profile: '#0B1B2B',
          post: '#112131',
          border: '#1C2F41',
          label: '#3A536B',
          span: '#7B96B2',
          text: '#AFC2D4',
          subtitle: '#C4D4E3',
          title: '#E7EDF4',
        },
        brand: {
          blue: '#3294F8',
          testOne: '#1562AF',
          testtwo: '#14589C',
        },
      },
      backgroundImage: {
        'header-cover': "url('/assets/cover.png')",
      },
    },
  },
  plugins: [],
}
