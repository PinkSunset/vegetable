module.exports = {
  content: ['./src/**/*.{htm,md,njk}'],
  theme: {
    screens: {
      '2xs': '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        body: ['body'],
      },
      letterSpacing: {
        normal:'0.145em',
      },
      borderRadius: {
        '1.5xl' : '10px',
        '4xl' : '32px', 
      },
      backgroundSize: {
        '1/2': '50%',
      },
      width: {
        '15': '60px',
      },
      height: {
        '15': '60px',
      },
      maxWidth: {
        '1/2': '50%',
      },
      colors: {
        inherit: 'inherit',
        'mercury':'#E5E5E5',
        'shark':'#191B20',
        'tree-poppy':'#F69020',
        'shuttle-gray' : '#606571'
      },
      gridTemplateRows: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        '1aa': '1fr repeat(2, auto)',
      },
      gridTemplateColumns: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        '1aa': '1fr repeat(2, auto)',
      },
      textShadow: {
        'base' : '0px 0px 4px rgba(255, 255, 255, 0.25)'
      },
      boxShadow: {
        'purp': '0px 0px 3px rgb(120, 20, 147)',
        'fiol': '0px 0px 6px rgb(107, 104, 224)',
        'puk': '0px 0px 13px rgb(0, 0, 0)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwindcss-textshadow')
  ],
}
