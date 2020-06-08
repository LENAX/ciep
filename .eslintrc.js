module.exports = {
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ],

  'extends': 'plugin:vue/essential',

  rules: {
    'vue/attribute-hyphenation': 'warning',
    'vue/html-end-tags': 'warning'
  }
}
