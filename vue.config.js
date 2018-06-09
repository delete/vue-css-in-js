module.exports = {
  configureWebpack: {
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"],
      symlinks: true,
    },
    devtool: "inline-source-map",
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          test: /\.ts|\.tsx$/,
          loader: [
            'babel-loader',
            {
              loader: 'awesome-typescript-loader',
              options: {
                useBabel: true,
                useCache: true,
                appendTsxSuffixTo: [
                  /\.vue$/
                ]
              }
            }
          ],
        }
      ]
    }
  }
}