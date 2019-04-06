import bucklescript from 'rollup-plugin-bucklescript';
import html from 'rollup-plugin-bundle-html';
import serve from 'rollup-plugin-serve';

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
    }),
    html({
      template: 'public/index.html',
      dest: "dist",
      filename: 'index.html',
      inject: 'body',
    }),
    serve({
      open: true,
      contentBase: 'dist',
      port: 7771
    })
  ]
};
