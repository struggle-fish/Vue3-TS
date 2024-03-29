interface Button {
  btntype: string
  text: string
}
interface Link {
  alt: string
  href: string
}
interface Href {
  linktype: string
  target: Openlocation
}
enum Openlocation {
  self = 0,
  _blank,
  parent
}
let button: Button = {
  btntype: 'normal',
  text: '跳转到百度',
}
let link: Link = {
  alt: 'goto baidu',
  href: 'http://www.baidu.com'
}
let href: Href = {
  linktype: "外网",
  target: Openlocation._blank
}

type union<T = any> = Extract<T, object>
// TS泛型函数重载+交叉类型+泛型约束真实应用场景代码片段
function cross<T, U>(objOne: union<T>, objTwo: union<U>): T & U
function cross<T, U>(objOne: union<T>, objTwo: union<U>): T & U
function cross<T, U, V>(objOne: union<T>, objTwo: union<U>,
  objThree: union<V>): T & U & V
function cross<T, U, V>(objOne: union<T>, objTwo: union<U>, objThree?: union<V>) {
  let obj = {}
  let combine = obj as T & U

  Object.keys(objOne).forEach((key) => {
    combine[key] = objOne[key]
  })
  Object.keys(objTwo).forEach((key) => {
    if (!combine.hasOwnProperty(key)) {
      combine[key] = objTwo[key]
    }
  })
  if (objThree) {//如果有第三个对象传递进来实现交叉
    //let obj = {}
    //let combine2 = obj as T & U & V
    //let combine2=combine as T & U & V
    let combine2 = combine as typeof combine & V
    Object.keys(objThree).forEach((key) => {
      if (!combine2.hasOwnProperty(key)) {
        combine2[key] = objThree[key]
      }
    })
    return combine2// 三个对象交叉结果
  }
  return combine;// 两个对象交叉结果
}
let combine = cross(button, link)
console.log(combine)
//let combine2 = cross(combine, href)
//console.log(combine);
let combine2 = cross(button, link, href)
console.log(combine2);
export { }
//9交叉类型加泛型函数重载再度加深.ts