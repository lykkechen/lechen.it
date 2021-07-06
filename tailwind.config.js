module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: '"IBM Plex Sans", sans-serif',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
