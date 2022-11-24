// 和数据表对应的一个实体
export class Food {
	// 数据传送的载体
	constructor(
		public foodid: string,
		public shop: string,
		public foodName: string
	) {}
}

export class Flower {
	constructor(public name: string, price: number) {}
}

export class Customer {
	constructor(public custName: string, public custAge: number) {}
}
