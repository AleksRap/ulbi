import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildResourceLoader } from './loaders/buildResourceLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const resourceLoader = buildResourceLoader();
  const svgLoader = buildSvgLoader();
  const cssLoader = buildCssLoader(isDev);
  const babelLoader = buildBabelLoader();

  return [resourceLoader, svgLoader, babelLoader, cssLoader];
}
