import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/types'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: ['/Calendar_nutri'],
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: false,
    },
  }
}
