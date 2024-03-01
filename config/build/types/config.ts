import { Configuration } from 'webpack';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  dotenv: string;
  src: string;
}

export interface BuildEnv {
  MODE: Configuration['mode'];
  ANALYZE: boolean;
  API_URL: string;
}

export interface BuildOptions {
  mode: BuildEnv['MODE'];
  paths: BuildPaths;
  isDev: boolean;
  isAnalyze: BuildEnv['ANALYZE'];
}
