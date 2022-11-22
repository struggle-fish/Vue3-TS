// typeof 用来检测一个变量或一个对象的数据类型。
// typeof 检测变量的类型范围包括：  
// “string" | "number" | "bigint" | "boolean" | "symbol" 
// | "undefined" | "object" | "function" 等数据类型。



// typeof 的局限性
/*

typeof 检测变量并不完全准确，
例如 typeof null 结果为 object，
这其实设计者的一个 bug， 但后来一直没有被改过来，
于是就此传下来了，但把 null 当成 object 的理由说成是 
未来可能会拥有一个对象空间，这个理由很牵强【我们检测的是对象变量此刻的类型】，
null 本来即是数据类型，也是值。所以 typeof null 直接显示 null 最合适了。 

再例如：使用 typeof 来检测一个数组变量，
typeof [ ]  结果显示的是 object,  
从 Array 创建的本质上来说确实是 object，
正如我们在 2-29-1中所讲，但开发者期待看到的是 
Array，这更符合预期。 Array 和我们定义的普通函数一样，
具有双重性，当成函数类型时用来创建数组对象，
但也是一个构造函数对象，拥有静态成员和prototype原型对象属性。
【这一点我们在 TS 继承 课题已经讲过】

再比如：使用 typeof 来检测一个 Set 变量，Map 变量，结果显示的是依然是 object。

*/

