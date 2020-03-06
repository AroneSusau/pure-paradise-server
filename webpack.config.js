const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    mode: 'production',
    entry: 'src/server/server.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                exclude: /tests/
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, './build')
    },
    externals: [nodeExternals()]
}
