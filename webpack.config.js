const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    entry: ['babel-polyfill', './src/index.js'],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'env', 'stage-1'],
                            plugins: ['react-hot-loader/babel']
                        }
                    }
                ]
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'static/index.html'),
        hash: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        },
    })]
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    return config;
};
