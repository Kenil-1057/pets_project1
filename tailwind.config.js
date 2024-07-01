/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*"
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1180px'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xsm:'480px',
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1180px'
      },
    },
    extend: {
      fontFamily :{ 
        gilroy : ["Gilroy","sans-serif"]  
      },
      colors:{
        'primary':'#003459',
        'secondary':'#F7DBA7',
        'state-red':'#FF564F',
        'state-green':'#34C759',
        'state-orange':'#FF912C',
        'state-blue':'#00A7E7',
        'neutral__100':'#00171F',
        'neutral__80':'#242B33',
        'neutral__60':'#667479',
        'neutral__40':'#99A2A5',
        'neutral__20':'#CCD1D2',
        'neutral__10':'#EBEEEF',
        'neutral__00':'#FDFDFD'
      },
      padding:{
        '60':'60px'
      },
      margin:{
        'two':'2px',
        '10px': '10px'
      },
      borderRadius:{
        '58':'58px'
      },
      gap:{
        '6':'6px'
      },
      lineHeight:{
        '18px':'18px'
      },
    },
  },
  plugins: [],
}

