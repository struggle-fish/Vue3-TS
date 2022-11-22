/*
格式：
function  函数名( 形参：参数类型【参数类型大多为any】)  : 形参 is A类型 = boolean+类型守卫能力 {

	return  true or false

}

理解：返回布尔值的条件表达式赋予类型守卫的能力，
只有当函数返回 true 时，形参被确定为 A 类型
*/



interface TestInter {
  username: string,
  age: number,
  eat(): void,
  allowinput?: 1
}

class StringUtil {
  public static trimSpace(str: string): string {
    return str.replace(/\s+/g, '')
  }
}


let testobj: TestInter = {
  username: " wan  g wu",
  age: 23,
  eat() {
    console.log(StringUtil.trimSpace(this.username) + " 吃饭")
  },
  allowinput: 1
}

// 判断是否是字符串的自定义守卫
function isString(str: any): str is string {
  return typeof str === 'string'
}

function isFunction(data: any): data is Function {
  return typeof data === 'function'
}

function processObjOutput(obj: any) {
  if (obj && 'allowinput' in obj) {
    let value: unknown
    Object.keys(obj).forEach((key) => {
      value = obj[key]
      //if (typeof value === "string") {//把变量的范围缩小为string类型在语句块内使用该数据类型
      if (isString(value)) {
        console.log(key + ':', StringUtil.trimSpace(value))
      }
      
      // } else if (typeof value === "function") {
      // console.log("value:", value)
      //obj[key]();
      // if (typeof value === "function") {
      
      if (isFunction(value)) {
        value()
      }

      //console.log(value.name)
      // } else {
      //   console.log(key + ":", +value)
      // }
      // console.log(key + ":" + obj[key]);
    })
  } else {
    console.log("不是一个合法的对象。")
  }

}

processObjOutput(testobj)


export { }

