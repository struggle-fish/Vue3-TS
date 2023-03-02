const path = require('path');

module.exports = {
	mode: 'development',
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/, //正则表达式
				// 1.loader的写法(语法糖)
				// loader: "css-loader"

				// 2.完整的写法
				use: [
					// {loader: "css-loader"}
					"style-loader",
					"css-loader",
					"postcss-loader",
					// {
					//   loader: "postcss-loader",
					//   options: {
					//     postcssOptions: {
					//       plugins: [
					//         require("autoprefixer")
					//       ]
					//     }
					//   }
					// }
				]
			},
			{
				test: /\.less$/,
				use: [
					// 执行是后往前执行
					"style-loader",
					"css-loader",
					"less-loader"
				]
			},
		]
	}
}
