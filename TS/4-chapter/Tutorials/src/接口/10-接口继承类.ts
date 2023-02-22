// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现
// 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的 private 和 protected 成员。
// 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。



// TODO: 不是很懂
// 当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。 这个子类除了继承至基类外与基类没有任何关系


class Control {
	private state: any
}

interface SelectableControl extends Control {
	select(): void
}

// 这个接口 SelectableControl 被 Control 的子类 Button 实现了
class Button extends  Control implements SelectableControl {
	select() {
	}
}

// SelectableControl 包含了Control的所有成员，包括私有成员state。 因为 state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口
// 因为只有 Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。

// 类和类继承为什么不用实现select ？
class TextBox extends Control {

}


// Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法）

// 错误：“Image”类型缺少“state”属性。
// 接口 SelectableControl 是继承 类 Control 的
// 接口同样会继承到类的 private 和 protected 成员
// // 由于 Image 只实现了这个接口，并不是 Control 的子类，隐藏没有私有属性 state
// class Image implements SelectableControl {
// 	// state: ''; // TODO: Image不是 Control 的子类 直接写一个state 就不报错了。。奇怪
// 	select() {
// 	}
// }

// 虽然子类可以实现 ISelectableControl 接口，但是 私有属性 state 只能 Control 类才能访问.
let button = new Button()
button.state // error
// TODO: state 属性咋访问？？？









export {}
