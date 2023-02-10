import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {

  const resourceLoader = {
    test: /\.(ttf|woff|woff2|eot|png|jpg|gif)$/,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'removeAttrs',
                params: {
                  attrs: '(fill|stroke)'
                }
              }
            ]
          }
        },
      }
    ]
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        }
      },
      'sass-loader',
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    resourceLoader,
    svgLoader,
    tsLoader,
    cssLoader,
  ]
}
