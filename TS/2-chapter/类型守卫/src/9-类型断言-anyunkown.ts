// 任何数据类型都可以转换成 any 或 unknown 类型
// any 或 unknown 类型也可以转换成任何其他数据类型。


function add(one: string | number, two: string | number) {
  return one as any + two as any
}

console.log(add(3, 5))
console.log(add("3", 5))