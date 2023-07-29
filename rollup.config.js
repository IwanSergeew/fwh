import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/fe/index.tsx',
    output: {
      file: './public/js/app.js',
      format: 'es',
    },
    plugins: [typescript(), resolve(), commonjs()],
  },
  {
    input: 'src/router/index.ts',
    output: {
      file: './build/index.js',
      format: 'es',
    },
    plugins: [typescript()],
  },
];
