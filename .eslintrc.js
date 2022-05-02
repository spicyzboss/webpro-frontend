module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'airbnb'],
  plugins: [],
  rules: {
    quotes: ['error', 'single'],
    'max-len': 'off',
    'vue/multi-word-component-names': ['error', {
      ignores: ['index', 'login', 'register', 'eiei'],
    }],
    'vue/require-prop-types': 'off',
  },
};
