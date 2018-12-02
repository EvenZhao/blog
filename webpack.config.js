'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const rm = require('rimraf');
const merge = require('webpack-merge');

const distDir = path.join(__dirname, 'dist');
const postCssConfig = {
<<<<<<< HEAD
 loader: 'postcss-loader',
 options: {
  plugins: [
   require('postcss-preset-env')(),
  ],
 }, 
};
const baseConfig = {
 entry: {
  app: ['@babel/polyfill', './src/index.js'],
 },
 output: {
  path: distDir,
  // filename: '[name]_[hash:5].js',
  publicPath: '/',
 },
 resolve: {
  extensions: ['.js', '.jsx', '.json'],
 },
 performance: { 
  hints: false,
 },
 module: {
  rules: [
   {
                test: /\.(js|jsx)?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
   },
   {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
     limit: 1024,
     // name: '[name]_[hash:5].[ext]',
    },
   },
  ],
 },
 plugins: [
  new webpack.ProvidePlugin({
   React: 'react',
  }),
  new HtmlWebpackPlugin({
   template: './index.html',
  }),
 ],
};

const devConfig = {
 devServer: {
  contentBase: distDir,
  noInfo: true,
  overlay: true,
  historyApiFallback: true,
 },
 devtool: 'eval-source-map',
 module: {
  rules: [
   {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
   },
  ],
 },
};

const proConfig = {
 devtool: 'source-map',
 module: {
  rules: [
   {
    test: /\.css$/,
    use: [
     MiniCssExtractPlugin.loader,
     { loader: 'css-loader', options: { importLoaders: 1 } },
     postCssConfig,
    ],
   },
  ],
 },
 optimization: {
  splitChunks: {
   automaticNameDelimiter: '_',
   chunks: 'all',
  },
 },
 plugins: [
  new MiniCssExtractPlugin({
   // filename: '[name]_[hash:5].css',
  }),
  new OptimizeCSSAssetsPlugin(),
 ],
 stats: {
  children: false,
  modules: false,
 },
};

module.exports = env => {
 let webpackConfig = null;
 if (env === 'production') {
  webpackConfig = merge(baseConfig, proConfig);
  rm.sync(path.join(distDir));
 } else {
  webpackConfig = merge(baseConfig, devConfig);
 }
 return webpackConfig;
=======
    loader: 'postcss-loader',
    options: {
        plugins: [
            require('postcss-preset-env')(),
        ],
    },
};
const baseConfig = {
    entry: {
        app: ['@babel/polyfill', './src/index.js'],
    },
    output: {
        path: distDir,
        // filename: '[name]_[hash:5].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    // name: '[name]_[hash:5].[ext]',
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};

const devConfig = {
    devServer: {
        contentBase: distDir,
        noInfo: true,
        overlay: true,
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

const proConfig = {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    postCssConfig,
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            automaticNameDelimiter: '_',
            chunks: 'all',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            // filename: '[name]_[hash:5].css',
        }),
        new OptimizeCSSAssetsPlugin(),
    ],
    stats: {
        children: false,
        modules: false,
    },
};

module.exports = env => {
    let webpackConfig = null;
    if (env === 'production') {
        webpackConfig = merge(baseConfig, proConfig);
        rm.sync(path.join(distDir));
    } else {
        webpackConfig = merge(baseConfig, devConfig);
    }
    return webpackConfig;
>>>>>>> master
};