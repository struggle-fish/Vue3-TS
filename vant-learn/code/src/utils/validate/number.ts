// 函数用于判断一个字符串是否为数值类型。
export function isNumeric(val: string): boolean {
  /*
  使用正则表达式 ^\d+(\.\d+)?$ 对传入的字符串 val 进行匹配。
    ^ 表示匹配字符串的开头。
    \d+ 表示匹配一个或多个数字。
    (\.\d+)? 表示可选的小数部分，其中 \. 表示匹配小数点，\d+ 表示匹配一个或多个数字。
    $ 表示匹配字符串的结尾。
  */
  return /^\d+(\.\d+)?$/.test(val);
}

export function isNaN(val: number): val is typeof NaN {
  if (Number.isNaN) {
    return Number.isNaN(val);
  }

  // eslint-disable-next-line no-self-compare
  return val !== val;
}
