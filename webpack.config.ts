import path from 'path';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

export default (env?: BuildEnv) => {
  const mode = env.MODE ?? 'development';
  const isDev = mode === 'development';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    dotenv: path.resolve(__dirname, `.env.${isDev ? 'development' : 'production'}`)
  }

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
  });
}
