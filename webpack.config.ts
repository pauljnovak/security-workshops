// @ts-ignore
import path from 'path';

import { Configuration, optimize } from 'webpack';
// @ts-ignore
import CopyPlugin from 'copy-webpack-plugin';

// @ts-ignore
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const baseConfig: Configuration = {
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(process.cwd(), 'public/'),
        filename: 'secure-workshops.min.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            path.resolve(process.cwd(), 'src'),
            path.resolve(process.cwd(), 'node_modules'),
            path.resolve(process.cwd(), '../node_modules'),
            path.resolve(process.cwd(), '../../node_modules'),
            path.resolve(process.cwd(), '../../../node_modules'),
        ],
        fallback: {
            crypto: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            happyPackMode: true,
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(woff(2)?|otf|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'resources/fonts/',
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'resources/',
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: '@svgr/webpack',
                        options: { babel: false },
                    }
                ],
            },
        ],
    },
    plugins: [
        new optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
        new MiniCssExtractPlugin({
            filename: "secure-workshops.css",
            insert: 'head',
        }),
    ],
};

export default baseConfig;
