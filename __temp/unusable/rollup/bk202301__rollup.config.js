import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/input.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    strict: false,
  },
  plugins: [
    commonjs({
      transformMixedEsModules: true,
    }),
  ],
};