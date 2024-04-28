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
  plugins: [require('@tailwindcss/line-clamp')],  // line-clamp plugin to truncate text (It end with ...) - https://tailwindcss.com/docs/plugins - npm install -D @tailwindcss/line-clamp
  // Now line-clamp is already included in the framework. We don't need to use a plugin any more - https://tailwindcss.com/docs/line-clamp - Utilities for clamping text to a specific number of lines.
}
