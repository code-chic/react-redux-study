const plugins = [
  [
    '@babel/plugin-transform-react-jsx',
    { pragma: 'React.createElement' }
  ]
]

module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    ...plugins
  ]
}
