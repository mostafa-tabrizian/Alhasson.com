module.exports = {
  content: [
    "./frontend/src/components/*.js",
    
    "./frontend/src/pages/*.js",

    './shop/src/components/*.js',
    './shop/src/components/order/*.js',
    './shop/src/components/profile/*.js',

    './shop/src/pages/*.js',
    './shop/src/pages/order/*.js',
    './shop/src/pages/user/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
