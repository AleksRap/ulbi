module.exports = {
  '*.{ts,tsx}': ['npm run tsc', 'npm run eslint'],
  '*.test.{ts,tsx}': ['npm run test:unit'],
  '*.{scss,sass}': ['npm run stylelint'],
};
