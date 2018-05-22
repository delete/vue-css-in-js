module.exports = {
    lintOnSave: true,
    configureWebpack: {
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: [".ts", ".tsx", ".js"],
            symlinks: true,
            alias: {
                '@': '/home/delete/Desenvolvimento/github_projects/vue-css-in-js/src',
                vue$: 'vue/dist/vue.runtime.esm.js'
            },
        },
        module: {
            rules: [
                // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                {
                    test: /\.ts|\.tsx$/,
                    loader: ['babel-loader', 'awesome-typescript-loader'],
                }
            ]
        }
    }
}