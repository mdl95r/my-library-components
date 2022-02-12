module.exports = {
	mode: 'production',
	output: {
		filename: '[name].js',
	},
	// performance: {
	// 	hints: false,
	// 	maxEntrypointSize: 512000,
	// 	maxAssetSize: 512000
	// },
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						]
					}
				}
			}
		]
	},
};