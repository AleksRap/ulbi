import HTMLWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import webpack, { WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { paths, isAnalyze, isDev } = options;

  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new Dotenv({ path: paths.dotenv }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
    isAnalyze && new BundleAnalyzerPlugin(),
  ].filter(Boolean);
}
