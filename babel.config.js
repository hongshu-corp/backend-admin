module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@vue/app',
      {
        'useBuiltIns': 'entry'
      }
    ],
    ['env', {
      modules: false,
      targets: {
        browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
      }
    }],
    'stage-2'
  ],
  plugins: ['transform-vue-jsx', 'transform-runtime'],
  env: {
    development: {
      plugins: ['dynamic-import-node']
    }
  }
}