import List from './List';

class Node<T> {
  currentValue!: T;
  next!: Node<T>;
  prev!: Node<T>;

  constructor(
    prev: Node<T>,
    currentValue: T,
    next: Node<T>
  ) {
    this.prev = prev
    this.currentValue = currentValue
    this.next = next
  }
}


// LinkedList 具体实现同学们先不管，重心先放到TS泛型和多态，泛型约束上
export default class LinkedList<T> implements List<T> {
  has(value: T): boolean {
    throw new Error('Method not implemented.');
  }

  first!: Node<T>;
  currentOrLast!: Node<T>;
  index: number = 0;

  addFirst(newVal: T): void {}
  
  add(index: number, newValue: T):void
  add(newValue: T):void
  add(indexornewvalue: any, newValue: any = 0): void {
    
  }

  checkIndex(index: number) {
    if (index >= this.index) {
      throw new Error(`提供的索引值大于元素个数:"this.size`);
    }
  }

  get(index: number): T {
    let t: any
    return t
  }

  size(): number {
    return this.index ? this.index : 0
  }

  node(index: number) : Node<T> {
    let t: any
    return t
  }

  remove(indexOrnodeobj: number): number
  remove(indexOrnodeobj: T): T
  remove(indexOrnodeobj: any): any {
    
  }

  unlink(nodeRemoved: Node<T>) {

    return nodeRemoved;
  }
  
}



export {}













