module.exports = {
  '*.{ts,tsx}': ['npm run tsc', 'npm run eslint', 'npm run prettier'],
  '*.test.{ts,tsx}': ['npm run test:unit'],
  '*.{scss,sass}': ['npm run stylelint'],
};
