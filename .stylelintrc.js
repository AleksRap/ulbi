module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  rules: {},
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: require('postcss-scss'),
      extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
      rules: {
        'declaration-empty-line-before': null,
        'selector-class-pattern': null,
      },
    },
  ],
};
