type type_ChartParam = {
  width?: number,
  height?: number,
  radius?: number,
  // ...
}

class Square {

  public width!: number;
  public height!: number;

  constructor(width: number, height: number) // 重载签名
  constructor(paramObj: type_ChartParam) // 重载签名
  // constructor(value: any, height?: number)
  constructor(value: any, height: number = 0) // 实现签名 1、给默认值 2、变成可选参数
  {
    if (typeof value === 'object') {
      this.width = value.width
      this.height = value.height
    } else {
      this.width = value
      this.height = height
    }
  }
  

  getArea(): number {
    return this.width * this.height
  }

}

let square = new Square(10, 20)
console.log(square.getArea(), '第一个')
let chartParamObj: type_ChartParam = {
  width: 20,
  height: 30
}

let square2 = new Square(chartParamObj)

console.log(square2.getArea(), '第一2个')

