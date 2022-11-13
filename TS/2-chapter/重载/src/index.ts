// 函数重载适用于项目中某些相同功能但细节又不同的应用场景
// 比如，吃饭是个函数，表示吃饭功能
// 西方人用叉子，中国人用筷子，印度人用手，这就是细节不同


// 非重载方式

type MessageType = 'image' | 'audio' | string

type Message = {
  id: number,
  type: MessageType,
  sendmessage: string
}

let messages: Message[] = [
  //let messages: Array<Message> = [
  {
    id: 1, type: 'image', sendmessage: "你好啊,今晚咱们一起去三里屯吧",
  },
  {
    id: 2, type: 'audio', sendmessage: "朝辞白帝彩云间，千里江陵一日还"
  },
  {
    id: 3, type: 'audio', sendmessage: "你好！张无忌"
  },
  {
    id: 4, type: 'image', sendmessage: "刘老根苦练舞台绝技！"
  },
  {
    id: 5, type: 'image', sendmessage: "今晚王牌对王牌节目咋样?"
  }
]

/*
//不用函数重载来实现2-12的功能
// 1.函数结构不分明,可读性，可维护性变差

function getMessage(value: number | MessageType): Message | undefined | Array<Message> {
  if (typeof value === 'number') {
    return messages.find((msg) => {
      return value === msg.id
    })
  } else {
    return messages.filter((msg) => {
      return value === msg.type
    })
  }

}



console.log(getMessage("audio"));
// TS没有办法运行之前根据传递的值来推导方法最终返回的数据的数据类型
// 只可以根据方法定义的类型展现
let msg = getMessage(1) 
// 错误 类型“Message | Message[]”上不存在属性“sendMessage”。
// console.log(msg.sendMessage)

let msg2 = (<Message>getMessage(1)).sendmessage
console.log("msg2:", msg2)// msg: 你好啊,今晚咱们一起去三里屯吧

*/

// 函数重载方式
// 函数签名 = 函数名称 + 函数参数 + 函数参数类型 + 返回值类型
/*
函数重载定义：
**规则1：**由一个实现签名+ 一个或多个重载签名合成。

**规则2：** 但外部调用函数重载定义的函数时，只能调用重载签名，不能调用实现签名，这看似矛盾的规则，其实 是TS 的规定：实现签名下的函数体是给重载签名编写的，实现签名只是在定义时起到了统领所有重载签名的作用，在执行调用时就看不到实现签名了。

**规则3：**调用重载函数时，会根据传递的参数来判断你调用的是哪一个函数 

**规则4:**  只有一个函数体，只有实现签名配备了函数体，所有的重载签名都只有签名，没有配备函数体。

**规则5:  关于参数类型规则完整总结如下：**

实现签名参数个数可以少于重载签名的参数个数，但实现签名如果准备包含重载签名的某个位置的参数 ，那实现签名就必须兼容所有重载签名该位置的参数类型【联合类型或 any 或 unknown 类型的一种】。

**规则6： 关于重载签名和实现签名的返回值类型规则完整总结如下：**

必须给重载签名提供返回值类型，TS 无法默认推导。

提供给重载签名的返回值类型不一定为其执行时的真实返回值类型，可以为重载签名提供真实返回值类型，也可以提供  void 或 unknown 或 any 类型，如果重载签名的返回值类型是 void 或 unknown 或 any 类型，那么将由实现签名来决定重载签名执行时的真实返回值类型。 当然为了调用时能有自动提示+可读性更好+避免可能出现了类型强制转换，强烈建议为重载签名提供真实返回值类型。

不管重载签名返回值类型是何种类型【包括后面讲的泛型类型】，实现签名都可以返回 any 类型 或 unknown类型，当然一般我们两者都不选择，让 TS 默认为实现签名自动推导返回值类型。

*/






function getMessage(id: number, myname: string): Message // 重载签名
function getMessage(msgType: MessageType, readRecordCount: number): Message[] // 重载签名
// 实现签名函数，只有实现签名才有函数体，实现签名只能有一个
function getMessage(value: number | MessageType, valu2: any = 1): Message | undefined | Array<Message> {
  // valu2 需要添加默认值
  if (typeof value === 'number') {
    return messages.find((msg) => {
      return value === msg.id
    })
  } else {
    return messages.filter((msg) => {
      return value === msg.type
    }).splice(0, valu2)
  }

}

// unknown 可以作为父类，但不能作为子类
let msg = getMessage(1, 'df') 
let msg2 = getMessage('audio', 2)
console.log(msg, 'msg')
console.log(msg2, 'msg2')
export {}
