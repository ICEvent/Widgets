// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/index.jsx',
  output: {
    file: './lib/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve({ extensions: ['.jsx', '.js', '.tsx', '.ts'] }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: "ES2015",
          target: "ES2015"
        }
      }
    }),
    commonjs({
      extensions: ['.js', '.ts', 'tsx']
    }),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.jsx', '.ts', '.tsx'],
      exclude: 'node_modules/**'
    })
  ],
  external: [
    'react',
    /@babel\/runtime/,
    'styled-components',
    '@emotion/react',
    'moment',
    'moment-timezone',
    '@dfinity/agent',
    '@dfinity/principal',
    'semantic-ui-react',
    'antd',
    'react-markdown',
    'remark-gfm',
    'remark-breaks',
    'remark-gemoji',
    'react-router-dom'
  ]
};