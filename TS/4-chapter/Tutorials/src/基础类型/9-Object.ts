// object表示非原始类型，也就是除 number，string，boolean，symbol，null或undefined之外的类型。

// 使用object类型，就可以更好的表示像Object.create这样的API




declare function ojbCreate(o: object | null): void

ojbCreate({ name: '张三' })

ojbCreate(null)

// ojbCreate(1) 报错
// ojbCreate('string') 报错

// ojbCreate(undefined) 报错



export {}

