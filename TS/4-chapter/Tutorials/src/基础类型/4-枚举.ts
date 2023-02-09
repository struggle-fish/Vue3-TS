// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

// >> 默认
enum Color { Red, Green, Blue }

let c: Color = Color.Green;
console.log(c, 'c')

// >> 1、指定下标, 自动排序

enum Color2 { Red = 1, Green, Blue }

let c2: Color2 = Color2.Green;
console.log(c2, 'c2')



// >> 2、全部都采用手动赋值：

enum Color3 {Red = 1, Green = 'three', Blue = 4}
let c3: Color3 = Color3.Green;
console.log(c3, 'c3')


// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字
enum Color4 {Red = 1, Green, Blue}
let colorName: string = Color4[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

export {}