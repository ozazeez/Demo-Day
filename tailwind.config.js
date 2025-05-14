//tailwind.config.js
// module.exports = {
//   content: ["./views/**/*.ejs", "./public/**/*.js"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// }
module.exports = {
  content: ['./src/**/*.{js,jsx,ejs,html}'], // adjust as needed
  theme: {
    extend: {
      colors: {
        primary: '#0A2463',
        secondary: '#FF6B6B',
        accent: '#F5F0E6',
        sea: '#88C9BF',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0A2463',
          secondary: '#FF6B6B',
          accent: '#F5F0E6',
          sea: '#88C9BF',
        },
      },
    ],
  },
}
