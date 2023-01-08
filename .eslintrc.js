module.exports = {
  parser: '@typescript-eslint/parser', //to use `@typescript-eslint/parser` as esLint parser (we have installed `@typescript-eslint/parser` as devDependency)
  parserOptions: {
    ecmaVersion: 2020, // to use 2020 version of ecma-script
    sourceType: 'module', // it allow uses of `import` instead of require
  },
  settings: {
    react: {
      version: 'detect', // automatically detect the react version
    },
  },
  //extends => consider below rules too for linting
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    // "plugin:eslint-comments/recommended",
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off', //give error : if we have unused variable in any file
    '@typescript-eslint/no-unused-vars': ['error'], //same
    '@typescript-eslint/no-var-requires': 'off', // //no error : if require statement has been used in any file
    'react/prop-types': 'off', //no error : if prop type is not provided
    'react/jsx-uses-react': 'off', //no error : if react is not imported in a file
    'react/react-in-jsx-scope': 'off', //same
    '@typescript-eslint/explicit-module-boundary-types': 'off', //no error : when explicit return type is not mentioned
  },
}
