module.exports = {
  content: ['./*.html'],
  screens: {  // To change the breakpoints
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      fontFamily: { // To add custom fonts
        sans: ['Barlow Semi Condensed', 'sans-serif'],  // A Google font
      },
    },
  },
  plugins: [],
}
