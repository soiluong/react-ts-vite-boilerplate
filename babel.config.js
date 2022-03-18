module.exports = {
  presets: [
    [require('@babel/preset-env').default, { targets: { node: 'current' } }],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ],
    [require('@babel/preset-typescript').default]
  ]
}
