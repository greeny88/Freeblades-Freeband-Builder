const path = require('path');
const webpack = require('webpack');

const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageInfo = require('./package.json');

const dist = path.resolve(__dirname, 'dist');
const root = path.resolve(__dirname, 'src');
const paths = {
	app: path.resolve(root, 'app'),
	index: path.resolve(root, 'index.html'),
	entry: path.resolve(root, 'app/main.ts'),
	output: {
		css: 'assets/styles/[name].[chunkhash].css',
		js: 'assets/js/[name].[chunkhash].js'
	}
};

const extractSassPlugin = new MiniCssExtractPlugin({
	filename: paths.output.css
});
const htmlPlugin = new HtmlWebpackPlugin({
	template: paths.index
});
const cleanDistPlugin = new CleanPlugin([
    dist
], {
    exclude: ['.git']
});
const definePlugin = new webpack.DefinePlugin({
	VERSION: JSON.stringify(packageInfo.version)
});

const scripts = {
	test: /\.ts$/,
	exclude: /node_modules/,
	use: [
		'babel-loader',
		'ts-loader'
	]
};
const htmlLoader = {
	loader: 'html-loader',
	options: {
		collapseWhitespace: true,
		removeComments: true,
		attrs: [
			'img:src'
		]
	}
};
const markup = {
	test: /\.html$/,
	exclude: /index\.html$/,
	use: [
		htmlLoader
	]
};
const cssLoader = {
	loader: 'css-loader',
	options: {
		//minimize: true,
		importLoaders: 1
	}
};
const postcssLoader = {
	loader: 'postcss-loader'
};
const sassLoader = {
	loader: 'sass-loader',
	options: {
		includePaths: ['./node_modules']
	}
};
const styles = {
	test: /\.scss$/,
	use: [
		MiniCssExtractPlugin.loader,
		cssLoader,
		postcssLoader,
		sassLoader
	]
};
const imageFileLoader = {
	loader: 'file-loader',
	options: {
		name: '[name].[ext]',
		outputPath: 'assets/images/'
	}
};
const images = {
	test: /\.(png|svg|jpg|gif)$/,
	use: [
		imageFileLoader
	]
};
const fontFileLoader = {
	loader: 'file-loader',
	options: {
		name: '[name].[ext]',
		outputPath: 'assets/font/'
	}
};
const fonts = {
	test: /\.(woff2?|eot|ttf|otf|svg)$/,
	use: [
		fontFileLoader
	]
};

let config = {
	entry: {
		ffb: paths.entry
	},
	module: {
		rules: [
			scripts,
			markup,
			styles,
			images,
			fonts
		]
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	plugins: [
		cleanDistPlugin,
		htmlPlugin,
		extractSassPlugin,
		definePlugin
	],
	resolve: {
		extensions: ['.ts', '.js', '*']
	},
	output: {
		filename: paths.output.js,
		path: dist,
		publicPath: ''
	},
	devServer: {
		contentBase: dist,
		port: 8090,
		publicPath: '',
		historyApiFallback: true,
		watchOptions: {
			aggregateTimeout: 3000
		}
	},
	mode: 'development'
};

module.exports = (env, argv) => {
	if (argv.mode !== 'production') {
		config.devtool = 'source-map'
	}
	config.plugins.push(new webpack.DefinePlugin({
		PRODUCTION: (argv.mode === 'production') ? true : false
	}));
	// TODO: make devServer.port configurable
	return config;
};
