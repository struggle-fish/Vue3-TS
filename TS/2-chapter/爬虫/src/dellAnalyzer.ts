 // 分析器 具体来说就是分析DOM 并组装数据
 
import cheerio from "cheerio";
import fs from "fs";
import { Analyzer } from './crowller'

 interface Course {
	 title: string;
	 count: number
 }

 interface CourseResult {
	 time: number;
	 data: Course[]
 }

 interface Countent {
	 [propName: string]: Course[]
 }
 
 export default class DellAnalyzer implements Analyzer {
	 
	 private getCourseInfo(html: string) {
		 const $ = cheerio.load(html);
		 const curseItems = $(".course-item");
		 const courseInfos: Course[] = []
		 curseItems.map((index, element) => {
			 const descs = $(element).find('.course-desc')
			 const title = descs.eq(0).text()
			 const count = parseInt(descs.eq(1).text().split('：')[1])
			 courseInfos.push(
				 {
				  title,
				  count
				 }
			 )
		 })
		 const result = {
			 time: (new Date()).getTime(),
			 data: courseInfos
		 }
		 return result
	 }
	 
	 // 转成 json 并存储数据
	 generateJsonContent(courseInfo: CourseResult, filePath: string) {
		
		 let fileContent: Countent = {}
		 if (fs.existsSync(filePath)) {
			 // 判断文件是否存在
			 fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
		 }
		 fileContent[courseInfo.time] = courseInfo.data
		 return fileContent
	 }
	 
	 
	 analyze(html: string, filePath: string) {
		 const courseInfo =  this.getCourseInfo(html);
		 const fileContent = this.generateJsonContent(courseInfo, filePath)
		 return JSON.stringify(fileContent)
	 }
}
