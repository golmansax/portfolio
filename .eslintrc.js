module.exports = {
  extends: 'golmansax',

  settings: {
    'import/resolver': {
      'node': {
        extensions: ['.js', '.jsx'],
      },
    },
  },

  rules: {
    'global-require': [1],
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    'react/prefer-stateless-function': [1],
  },
};
