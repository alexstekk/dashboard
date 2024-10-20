import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: {
            loader: '@svgr/webpack',
            options: {
                // dimensions: false,
                icon: '1.2em',
            },

        },

    };

    const babelLoader = {
        test: /\.(m?jsx?|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = {
        test: /\.(sa|sc|c)ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            // "style-loader",
            // Replace with miniCssExtractPlugin
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\./,
                        localIdentName:
                            isDev
                                ? '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]',
                        exportLocalsConvention: 'camelCase',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        babelLoader,
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];
}
