'use strict';

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: __dirname,
	entry: './src/app.js',
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: "babel-loader",
					options: { presets: ["es2015"]  }

				}],
			},
			{
				test: /\.css/,
				use: [
					ExtractTextPlugin.extract("css"),
					"css-loader",
				]
			},
			{
				test: /.scss/,
				use: [
					ExtractTextPlugin.extract("css"),
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				loaders: [
					'file?name=[name].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
				],
			},
			{
				test: /\.html$/,
				use: [
					'file-loader?name=[path]../[name].[ext]',
					'extract-loader',
					'html-loader'
				]
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({
			filename: "/css/rapidspare.css",
			allChunks: true,
		}),
	],
	devServer: {
		//contentBase: '/assets',
	},
};
