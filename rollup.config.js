// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from "rollup-plugin-terser";

export default {
  input: './src/index.jsx',
  output: {
    file: './bundle.js',
    format: 'cjs'
  },
  sourceMap: 'inline',
  defaultIsModuleExports: true,
  plugins: [
    resolve({ extensions: ['.jsx', '.js', '.json', '.ts'] }),
    terser(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: "ES2015",
          target: "ES2015"
        }
      }
    }),
    commonjs({
      include: 'node_modules/**',
      extensions: ['.js', '.ts']
    }),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.jsx', '.ts'],
      exclude: 'node_modules/**'
    })
  ],
  external: [
    // /@babel\/runtime/,
    '@babel/runtime',
    '@dfinity/agent',
    '@emotion/react',
    '@emotion/styled',
    '@mui/icons-material',
    '@mui/material',
    'moment',
    'react',
    'react/jsx-runtime'
  ]
};