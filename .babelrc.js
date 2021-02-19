module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-typescript', '@zeit/next-typescript/babel'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-inline-react-svg',
    ['styled-jsx/babel', { optimizeForSpeed: true }],
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './src',
          '@': './public',
        },
      },
    ],
  ],
}
