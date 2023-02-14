import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const resourceLoader = {
    test: /\.(ttf|woff|woff2|eot|png|jpg|gif)$/,
    type: 'asset/resource',
  };

  const svgLoader = buildSvgLoader();

  const cssLoader = buildCssLoader(isDev);

  const babelLoader = {
    test: /\.(jsx?|tsx?)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  };

  return [resourceLoader, svgLoader, babelLoader, cssLoader];
}
