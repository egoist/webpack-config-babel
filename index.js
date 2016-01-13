const safetify = require('webpack-config-safetify')

module.exports = function (config) {
	config = safetify(config)
	config.module.loaders.push({
		test: /\.jsx?$/,
		loaders: ['babel'],
		exclude: [/node_modules/]
	})
	config.babel = {
		presets: [
			require('babel-preset-es2015'),
			require('babel-preset-stage-0'),
			require('babel-preset-react')
		],
		plugins: [
			require('babel-plugin-transform-runtime')
		]
	}
	return config
}
