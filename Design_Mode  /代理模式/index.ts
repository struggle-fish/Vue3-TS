console.log('代理模式')

/*
使用示例： 尽管代理模式在绝大多数 TypeScript 程序中并不常见， 但它在一些特殊情况下仍然非常方便。
当你希望在无需修改客户代码的前提下于已有类的对象上增加额外行为时， 该模式是无可替代的。

识别方法： 代理模式会将所有实际工作委派给一些其他对象。 除非代理是某个服务的子类， 否则每个代理方法最后都应该引用一个服务对象。


*/


interface Subject {
	request(): void
}

class RealSubject implements Subject {
	request(): void {
		console.log('RealSubject: Handling request.');
	}
}



class Proxy implements Subject {
	private realSubject: RealSubject
	
	constructor(realSubject: RealSubject) {
		this.realSubject = realSubject
	}
	
	request(): void {
		if (this.checkAccess()) {
			this.realSubject.request()
			this.logAccess()
		}
	}
	private checkAccess(): boolean {
		console.log('Proxy: Checking access prior to firing a real request.');
		
		return true;
	}
	
	private logAccess(): void {
		console.log('Proxy: Logging the time of request.');
	}
}



function clientCode(subject: Subject) {
	// ...
	
	subject.request();
	
	// ...
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
clientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy(realSubject);
clientCode(proxy);








export {}
