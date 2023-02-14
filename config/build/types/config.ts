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
}

export interface BuildOptions {
  mode: Configuration['mode'];
  paths: BuildPaths;
  isDev: boolean;
  isAnalyze: boolean;
}
