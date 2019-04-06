import bucklescript from 'rollup-plugin-bucklescript';

export default {
  input: './src/Index.re',
  output: {
    file: './dist/main.js',
    format: 'cjs'
  },
  plugins: [
    bucklescript({
      module: 'es6',
      showWarnings: true
    })
  ]
};
