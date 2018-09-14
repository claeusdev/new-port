const path = require('path')

module.exports = {
    entry: 'index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
            
        ]
    },
    stats: {
        colors: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    devtool: 'source-map'
}