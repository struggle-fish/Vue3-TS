import ts from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import serve from "rollup-plugin-serve";
import path from "path";
import {fileURLToPath} from "url";

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
			// tsconfig: 'tsconfig.json' // 配置文件 不能采用 __dirname 因为mjs里没有 __dirname

			// 这里采用 url 的方式产生绝对路径
			// import.meta.url 指代的是当前运行命令的路径
			// filrURLToPath 用你的文件 + 运行命令的路径 = 绝对路径     这是 url 中的方法
			// path.resolve 是根据执行命令的位置解析出的绝对路径
			tsconfig: fileURLToPath(new URL('tsconfig.json', import.meta.url))
		}),
		serve({
			open: true,
			openPage: '/public/index.html',
			port: 3333
		})
	]

}

