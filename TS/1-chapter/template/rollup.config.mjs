import ts from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import serve from "rollup-plugin-serve";
import path from "path";

export default  {
	input: './src/index.ts',
	output: {
		file: path.resolve('./dist/bundle.js'),
		format: 'iife', // 打包出来的是一个自执行函数
		sourcemap: true
	},
	plugins: [
		nodeResolve({
			extensions: ['.js', '.ts'] // 解析文件的格式
		}),
		ts({
			tsconfig: 'tsconfig.json' // 配置文件 不能采用 __dirname 因为mjs里没有 __dirname
		}),
		serve({
			open: true,
			openPage: '/public/index.html',
			port: 3333
		})
	]

}

