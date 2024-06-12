module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-parsing-error': [
      2,
      {
        'invalid-first-character-of-tag-name': false
      }
    ]
  }
}
