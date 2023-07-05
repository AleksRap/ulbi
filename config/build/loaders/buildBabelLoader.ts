export const buildBabelLoader = () => ({
  test: /\.(jsx?|tsx?)$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
});
