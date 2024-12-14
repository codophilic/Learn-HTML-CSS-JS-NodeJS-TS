import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser, // Use browser-specific global variables
    },
  },
  {
    ignores: [
      'node_modules', // Ignore the node_modules directory
      'src/*.js',         // Ignore *.js under src folder (temporary)
      '*.config.mjs',     // Ignore eslint config mjs file
      'webpack.config.js',
      "assets/scripts/*.js"
    ],
  },
  pluginJs.configs.recommended, // Use recommended settings for JavaScript
  {
    rules: {
      'no-console': 'warn', // Warn when console statements are used
      'quotes': ['error', 'single'], // Enforce single quotes
      'indent': ['error', 4], // Enforce 4-space indentation
      'semi': ['error', 'always'], // Require semicolons
      'no-unused-vars': 'warn', // Disallow unused variables
      'max-len': ['error', { code: 80 }], // Enforce 80-character line length
      'id-match': ['error', '^[a-z][a-zA-Z0-9]*$'],    // Variables/functions must start with lowercase
    },
  },
];
