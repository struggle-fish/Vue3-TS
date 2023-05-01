/*
	命令模式：
		执行命令时，发布者和执行者分开 （发布者不知道谁去执行，执行者也不知道谁发布的，双方不认识）
		中间加入了命令对象，作为中转站


		3种角色
			Invoker 调用者角色：发布命令的
			Command 命令角色(中间人)：需要执行的所有命令都在这里声明
			Receiver 接受者角色(执行方)：该角色就是干活儿角色，命令传递到这里应该被执行的


发布者   invoker (发出命令，调用命令对象，不知道如何执行与谁执行)
命令对象  command (接收命令，调用接收者对应接口处理发布者的请求)
接收者   receiver (提供对应接口处理请求，不知道谁发布请求)




*/




class Cooker {
	cook() {
		console.log('做饭')
	}
}

class Cleaner {
	clean() {
		console.log('保洁')
	}
}

class CookCommand {
	constructor(receiver) {
		this.receiver = receiver
	}
	execute() {
		this.receiver.cook()
	}
}




class CleanCommand {
	constructor(receiver) {
		this.receiver = receiver
	}
	execute() {
		this.receiver.clean()
	}
}



class Customer {
	constructor(command) {
		this.command = command
	}
	setCommand(command) {
		this.command = command
	}
	clean() {
		this.command.clean()
	}
	cook() {
		this.command.cook()
	}
}

let cooker = new Cooker()
let cleaner = new Cleaner()

let cookcommand = new CookCommand(cooker)
let cleancommand = new CleanCommand(cleaner)

let customer = new Customer(cookcommand)
customer.cook()
customer.setCommand(cleancommand)
customer.clean()



// ============================













