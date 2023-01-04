// let obj = { username: "wangwu", age: 23 }

// TODO: username 的值是不固定的，只能写成常量才可以
// const username = "username"


// obj[username] // TODO: 此时会提示错误


let obj: object = { username: "wangwu", age: 23 }


const username = "username"


let result = (obj as any)[username]