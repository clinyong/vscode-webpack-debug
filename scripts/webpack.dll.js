var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: {
		vendor: [path.resolve(__dirname, "../src/dll.js")]
	},
	output: {
		filename: "vendor.bundle.js",
		path: path.resolve(__dirname, "../dist"),
		library: "vendor_lib"
	},
	plugins: [
		new webpack.DllPlugin({
			name: "vendor_lib",
			path: path.resolve(__dirname, "../dist/vendor-manifest.json")
		})
	]
};
