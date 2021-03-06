const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    },
    mode: 'production',
    watch: true,
    devtool: 'source-map',

    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets':[
                            [
                                "@babel/preset-env",
                                {
                                    "targets":{
                                        "browsers": ['last 2 versions', "ie >= 11"]
                                    }
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
}