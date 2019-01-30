const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = (env, {mode}) => ({
    mode: 'none',

    entry: mode === 'production' ? {
        'angularjs-value-editor.min': ['./src/value-editor/value-editor.module.ts']
    } : {
        'angularjs-value-editor': ['./src/value-editor/value-editor.module.ts']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'angularjs-value-editor',
        libraryTarget: 'umd'
    },

    externals: {
        angular: {
            commonjs: 'angular',
            commonjs2: 'angular',
            amd: 'angular',
            root: 'angular'
        },
        'angularjs-register': {
            commonjs: 'angularjs-register',
            commonjs2: 'angularjs-register',
            amd: 'angularjs-register',
            root: 'angularjs-register'
        },
        '@kpsys/angular-ui-bootstrap': {
            commonjs: '@kpsys/angular-ui-bootstrap',
            commonjs2: '@kpsys/angular-ui-bootstrap',
            amd: '@kpsys/angular-ui-bootstrap',
            root: '@kpsys/angular-ui-bootstrap'
        }
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.ts$/,
                include: [/src/],
                loader: 'tslint-loader'
            },
            {
                test: /\.ts$/,
                include: [/src/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                'angularjs-annotate'
                            ],
                            presets: [
                                [
                                    'env',
                                    {
                                        'targets': {
                                            'browsers': [
                                                'last 2 versions',
                                                'not ie < 11 '
                                            ]
                                        }
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            onlyCompileBundledFiles: true
                        }
                    }
                ]
            },
            {
                test: /(\.less$)|(\.css$)/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.tpl.pug/,
                use: [
                    {
                        loader: 'ngtemplate-loader',
                        options: {
                            relativeTo: path.resolve(__dirname, 'src')
                        }
                    },
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'pug-html-loader'
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: isVendor,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

    devtool: 'source-map',

    plugins: (function () {
        const plugins = [new ExtractTextPlugin({filename: '[name].css', disable: false, allChunks: true}),
            new CleanWebpackPlugin(
                ['dist/*.*'],
                {
                    root: path.resolve(__dirname),
                    verbose: true,
                    exclude: ['.gitkeep']
                }
            )];
        if (mode === 'production') {
            plugins.push(new UnminifiedWebpackPlugin());
        }

        return plugins;
    })()
});

function isVendor({resource}) {
    return resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/.js$/);
}