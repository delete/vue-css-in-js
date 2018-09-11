const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = {
  ...isDevMode ? {} : { parallel: false },
  configureWebpack: {
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      symlinks: true,
    },
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'awesome-typescript-loader',
              options: {
                useCache: true,
                useBabel: true,
                reportFiles: [
                  "src/**/*.{ts,tsx}"
                ],
                appendTsxSuffixTo: [
                  /\.vue$/
                ]
              },
            }
          ],
        }
      ]
    },
    plugins: [
      new HardSourceWebpackPlugin()
    ]
  }
}