import { Configuration } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    build: '',
    html: '',
    entry: '',
    dotenv: '',
  };

  config.resolve?.modules?.push(paths.src);

  config.resolve = {
    ...config.resolve,
    alias: {
      entities: path.resolve(__dirname, '..', '..', 'src', 'entities'),
    },
  };

  config.resolve?.extensions?.push('.ts', '.tsx');

  config.module = {
    ...config.module,
    rules: config.module?.rules?.map((rule) => {
      if (!!rule && rule !== '...' && /svg/.test(rule.test as string))
        return { ...rule, exclude: /\.svg$/i };

      return rule;
    }),
  };

  config.module?.rules?.push(buildSvgLoader(), buildCssLoader(true));

  return config;
};
