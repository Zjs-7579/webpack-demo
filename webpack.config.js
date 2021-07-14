
const { resolve } = require('path');
/*
	html-webpack-plugin　配置html　重新加载html 重新编辑其内容
 */
const htmlPlugin = require('html-webpack-plugin');
/*
	MiniCssExtractPlugin　配置css　把所有css文件合并到一个css文件中，可配置文件名
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/*
	OptimizECssAssetsWebpackPlugin　配置css　把所有css文件压缩到一行
 */
const OptimizECssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {

	entry: './src/js/main.js',

	output: {
		filename: 'js/built.js',
		path: resolve(__dirname, 'build')
	},

	module: {
		rules: [

			{
				test: /\.(jpg|png|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 8 * 1024,
					name: '[name]_[hash:10].[ext]',
					esModule: false,
					outputPath: 'images/' 
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../'
						}
					},
					'css-loader',
				],
				
			},
			
			{
				test: /\.html$/,
				loader: 'html-loader',
				options: {
					esModule: false
				}
			}
		]
	},

	plugins: [
		new htmlPlugin({
			template: './src/index.html'
		}),

		new MiniCssExtractPlugin({
			filename: 'css/index.css'
		}),

		new OptimizECssAssetsWebpackPlugin()
	],

	mode: 'development'

}





