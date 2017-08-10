var webpack = require('webpack');
var path = require('path');

// Resolve paths
var BUILD_DIR  = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

//config object

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module : {
		loaders: [
			{
				//Babel loader for React's JSX
				test : /\.jsx?/,
				include : APP_DIR,
				loader : 'babel-loader'
			}
		]
	}
};

module.exports = config;