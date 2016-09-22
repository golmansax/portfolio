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
    'import/prefer-default-export': [0],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'jsx-a11y/href-no-hash': [1],
    'jsx-a11y/no-static-element-interactions': [1],
    'react/forbid-prop-types': [0],
  },
};
