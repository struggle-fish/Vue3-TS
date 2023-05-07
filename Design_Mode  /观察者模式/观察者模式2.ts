abstract class Student {
	constructor(public teacher: Teacher) {
	}
	
	// 每个观察者都有一个 update 方法，用来在被观察对象更新的时候进行自我更新
	abstract update():void
}



class Xueba extends Student {
	update() {
		if (this.teacher.getState() == '老师提问') {
			console.log(`${this.teacher.getState()} 学霸抬头举手`)
		}
	}
}

class XueZha extends Student {
	update() {
		if (this.teacher.getState() == '老师提问') {
			console.log(`${this.teacher.getState()} 学渣低头看脚`)
		}
	}
}

class Teacher {
	private students: Student[] = []
	private state: string = '讲课'
	
	askQuestion() {
		this.state = '老师提问'
		this.notifyAllStudents()
	}
	
	getState() {
		return this.state
	}
	attach(student: Student) {
		this.students.push(student)
	}
	
	notifyAllStudents() {
		this.students.forEach(student => student.update())
	}
}
let teacher = new Teacher()
teacher.attach(new Xueba(teacher))
teacher.attach(new XueZha(teacher))
teacher.askQuestion()



// ====================================================================

class Promise {
	successes: Array<Function> = []
	constructor(task: Function) {
		const resolve = () => {
			this.successes.forEach(success => success())
		}
		task(resolve)
	}
	
	then(success: Function) {
		this.successes.push(success)
	}
}

let promise = new Promise((resolve: Function) => {
	setTimeout(() => {
		resolve()
	}, 1000)
})
promise.then(() => console.log('你好'))





















export {}



