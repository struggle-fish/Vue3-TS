console.log('组合模式')

// 组合模式在 TypeScript 代码中很常见， 常用于表示与图形打交道的用户界面组件或代码的层次结构。
// 识别方法： 组合可以通过将同一抽象或接口类型的实例放入树状结构的行为方法来轻松识别。


abstract class Component {
	protected parent!: Component | null
	
	setParent(parent: Component | null) {
		this.parent = parent
	}
	
	getParent(): Component | null {
		return this.parent
	}
	
	add(component: Component): void {}
	
	remove(component: Component): void {}
	
	isComposite(): boolean {
		return false
	}
	
	abstract operation(): string
}

class Leaf extends Component {
	operation(): string {
		return 'Leaf'
	}
}

class Composite extends Component {
	protected children: Component[] = []
	
	add(component: Component): void {
		this.children.push(component)
		component.setParent(this)
	}
	
	remove(component: Component) {
		const componentIndex = this.children.indexOf(component)
		this.children.splice(componentIndex, 1)
		component.setParent(null)
	}
	
	isComposite(): boolean {
		return true
	}
	
	operation(): string {
		const results = []
		for (const child of this.children) {
			results.push(child.operation())
		}
		return `Branch(${results.join('+')})`;
	}
}


function clientCode(component: Component){
	// ...
	
	console.log(`RESULT: ${component.operation()}`);
	
	// ...
}

const simple = new Leaf();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree);
console.log('');



function clientCode2(component1: Component, component2: Component) {
	// ...
	
	if (component1.isComposite()) {
		component1.add(component2);
	}
	console.log(`RESULT: ${component1.operation()}`);
	
	// ...
}

console.log('Client: I don\'t need to check the components classes even when managing the tree:');
clientCode2(tree, simple);

export {}
