import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env?: BuildEnv) => {
  const mode = env?.MODE ?? 'development';
  const isDev = mode === 'development';
  const isAnalyze = !!env?.ANALYZE;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    dotenv: path.resolve(__dirname, `.env.${isDev ? 'development' : 'production'}`),
    src: path.resolve(__dirname, 'src'),
  };

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    isAnalyze,
  });
};
