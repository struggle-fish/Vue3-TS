export default class ArrayList<T = any> {
	element: Array<T>;
	index: number = 0;

	constructor() {
		this.element = [];
	}

	add(ele: T) {
		this.checkIndex();
		this.element[this.index++] = ele;
	}

	checkIndex() {
		if (this.index < 0) {
			throw new Error("数组下标不能为0");
		}
	}

	size() {
		return this.element ? this.element.length : 0;
	}

	get(index: number): T {
		return this.element[index];
	}

	show() {
		this.element.forEach((ele) => {
			console.log(ele);
		});
	}

	remove(value: number): number;
	remove(value: object): object;
	remove(value: any): any {
		this.element = this.element.filter((ele, index) => {
			// 如果是根据数字【元素索引】去删除元素，remove方法返回的是一个数字
			if (typeof value === "number") {
				return value !== index;
			} else {
				// 如果是根据对象去删除元素，remove方法返回的是一个对象
				return value !== ele;
			}
		});
		return value;
	}
}

export {};
