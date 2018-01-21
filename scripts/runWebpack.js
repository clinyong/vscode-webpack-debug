const webpack = require("webpack");
const config = require("./webpack.config");

webpack(config, (err, stats) => {
	if (!err) {
		console.log("webpack build success");
	}
});
