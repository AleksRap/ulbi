import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(): DevServerConfiguration {

  return {
    port: process.env.PORT,
    open: true,
    historyApiFallback: true,
  }
}
