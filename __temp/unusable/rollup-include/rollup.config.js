import include from 'rollup-plugin-include';

export default {
  input: 'src/input.js',
  plugins: [
    include({ include: 'src/mod/*.js' }),
  ],
  output: {
    file: 'bundle.js',
    format: 'cjs',
    strict: false,
  },
};