// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
// import path from 'path';

export default {
  input: './src/index.jsx',
  output: {
    file: './lib/bundle.js',
    format: 'cjs'
  },
  sourceMap: 'inline',
  // sourceMap: true,
  plugins: [
    resolve({ extensions: ['.jsx', '.js','.json', '.ts'] }),
    terser(),
    postcss({
      modules : {
          globalModulePaths : [
              'node_modules/semantic-ui-css/semantic.min.css'
          ]
      }
  }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: "ES2015",
          target: "ES2015"
        }
      }
    }),
    commonjs({
      include : 'node_modules/**',
      extensions: ['.js', '.ts']
    }),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.jsx', '.ts'],
      exclude: 'node_modules/**'
    })
  ],
  external: [
    'react',
    /@babel\/runtime/,
    '@dfinity/agent',
    '@emotion/react',
    'moment',
    'semantic-ui-css',
    'semantic-ui-react',
    'styled-components'
  ]
};