import {Configuration} from "webpack";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  dotenv: string;
}

export interface BuildEnv {
  MODE: Configuration['mode']
}

export interface BuildOptions {
  mode: Configuration['mode'];
  paths: BuildPaths;
  isDev: boolean;
}
