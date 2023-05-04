console.log('迭代器模式')

// 使用示例： 该模式在 TypeScript 代码中很常见。 许多框架和程序库都使用它来提供遍历其集合的标准方式。

// 识别方法： 迭代器可以通过导航方法 （例如 next和 previous等） 来轻松识别。 使用迭代器的客户端代码可能没有其所遍历的集合的直接访问权限。



interface Iterator<T> {
	current(): T
	next(): T
	key(): number
	valid(): boolean
	rewind(): void
}


interface Aggregator {
	getIterator(): Iterator<string>
}


class AlphabeticalOrderIterator implements Iterator<string> {
	private collection: WordsCollection
	private position: number = 0
	
	private reverse: boolean = false
	
	constructor(collection: WordsCollection, reverse: boolean = false) {
		this.collection = collection
		this.reverse = reverse
		if (reverse) {
			this.position = collection.getCount() - 1
		}
	}
	
	rewind() {
		this.position = this.reverse ? this.collection.getCount() - 1: 0
	}
	current(): string {
		return this.collection.getItems()[this.position]
	}
	key(): number {
		return this.position
	}
	next(): string {
		const item = this.collection.getItems()[this.position]
		this.position += this.reverse ? -1 : 1
		return item
	}
	valid(): boolean {
		if (this.reverse) {
			return this.position >= 0
		}
		return this.position < this.collection.getCount()
	}
}



class WordsCollection implements Aggregator {
	private items: string[] = []
	
	getItems(): string[] {
		return this.items
	}
	getCount(): number {
		return this.items.length
	}
	addItem(item: string) {
		this.items.push(item)
	}
	
	getIterator(): Iterator<string> {
		return new AlphabeticalOrderIterator(this, true)
	}
	getReverseIterator(): Iterator<string> {
		return new AlphabeticalOrderIterator(this, true)
	}
}

/**
 * The client code may or may not know about the Concrete Iterator or Collection
 * classes, depending on the level of indirection you want to keep in your
 * program.
 */

const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

const iterator = collection.getIterator();

console.log('Straight traversal:');
while (iterator.valid()) {
	console.log(iterator.next());
}

console.log('');
console.log('Reverse traversal:');
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
	console.log(reverseIterator.next());
}



export {}
