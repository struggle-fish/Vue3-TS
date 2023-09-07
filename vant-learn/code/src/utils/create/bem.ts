/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 * -  中划线：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号
 * __ 双下划线：双下划线用来连接块和块的子元素
 * __ 双下划线：单下划线用来描述一个块或者块的子元素的一种状态
 * BEM的命名规矩很容易记：block-name__element-name--modifier-name，也就是模块名 + 元素名 + 修饰器名。
 * block-name__element-name--modifier-name，也就是模块名+ 元素名+ 修饰器名
 *
 * var test = createBEM('vant1-button');
 * console.log(test('text'), '---98A');
 * console.log(test({ disabled : 'disabled' }), '---98B');
 * console.log(test('text', { disabled : 'disabled' }), '---98C');
 * console.log(test(['disabled', 'primary']), '---98D');
 * vant1-button__text ---98A
 * vant1-button vant1-button--disabled ---98B
 * vant1-button__text vant1-button__text--disabled ---98C
 * vant1-button vant1-button--disabled vant1-button--primary ---98D
 */

export type Mod = string | { [key: string]: any };
export type Mods = Mod | Mod[];

/*
  gen 函数，根据传入的 el 和 mods 生成修饰符的类名，并将其拼接到元素类名后面

  name：表示块（block）名称，即基础的类名。
  mods：可选参数，表示元素（element）名称、修饰符（modifier）名称或它们的组合。可以是字符串、字符串数组，或是一个包含布尔值的对象。

* */
function gen(name: string, mods?: Mods): string {
  if (!mods) {
    return '';
  }

  // 如果 mods 的类型是字符串，说明只有一个修饰符
  if (typeof mods === 'string') {
    return ` ${name}--${mods}`;
  }
  // 如果 mods 是一个数组，表明有多个修饰符。这里使用 reduce 方法对数组进行遍历，递归调用 gen 函数并将每个修饰符拼接到 name 后面，
  // 最终返回拼接好的类名字符串。
  if (Array.isArray(mods)) {
    // TODO: TS: 注解
    // 递归调用 拼接class van-button--primary
    // @ts-ignore
    return mods.reduce<string>((ret, item) => ret + gen(name, item), '');
  }

  // 如果 mods 是一个对象，会遍历对象的键（即修饰符名称）。
  // 对于每个键，如果对应的值是真值（例如布尔值为 true），则递归调用 gen 函数并将修饰符拼接到 name 后面
  // ，否则忽略该修饰符。最终返回拼接好的类名字符串。
  return Object.keys(mods).reduce(
    // ret 是累积的值，key 是当前遍历到的键。
    (ret, key) => ret + (mods[key] ? gen(name, key) : ''),
    ''
  );
}

/*
它接受一个参数 name，表示命名空间的名称。
在函数内部，会通过拼接 'van-' 前缀来创建完整的命名空间名。

它接受一个参数 name，表示 BEM 命名规范中的块（block）名称
然后返回一个函数，该函数用于根据给定的元素（element）和修饰符（modifier），生成对应的 CSS 类名。

块名：van-icon
块+元素：van-icon__image
块+元素+修饰符：van-icon__image--active

el: 表示元素
mods: 表示修饰符  可以是数组，也可以是对象

/// 对象情况 ------------------------------------------------
const mods = {
  primary: true,
  large: false,
  bold: true,
};
/// 数组情况 ------------------------------------------------
const mods = ['primary', 'large'];

一些示例：
示例 1: 只传入块（block）名称，不带元素和修饰符：
const bem = createBEM('button');
const className = bem(); // 生成类名 'button'
console.log(className); // 输出 'button'

示例 2: 传入块（block）名称和元素（element）名称：
const bem = createBEM('button');
const className = bem('icon'); // 生成类名 'button__icon'
console.log(className); // 输出 'button__icon'

示例 3: 传入块（block）名称和修饰符（modifier）名称：
const bem = createBEM('button');
const className = bem('', 'primary'); // 生成类名 'button--primary'
console.log(className); // 输出 'button--primary'

示例 4: 传入块（block）名称、元素（element）名称和修饰符（modifier）名称：
const bem = createBEM('button');
const className = bem('icon', 'active'); // 生成类名 'button__icon--active'
console.log(className); // 输出 'button__icon--active'

示例 5: 传入块（block）名称和修饰符（modifier）数组：
const bem = createBEM('button');
const className = bem(['primary', 'large']); // 生成类名 'button--primary button--large'
console.log(className); // 输出 'button--primary button--large'

示例 6: 传入块（block）名称和元素（element）名称的数组：
const bem = createBEM('button');
const className = bem('icon', ['active', 'large']); // 生成类名 'button__icon--active button__icon--large'
console.log(className); // 输出 'button__icon--active button__icon--large'


* */
export function createBEM(name: string) {
  return function (el?: Mods, mods?: Mods): Mods {
    // TODO: TS: 注解
    // 这个不就是参数各种判断 字符串 ，对象, 字符的数组 对象的数组，各种移动
    // 非字符串，就要吧el 置空 得到这样的 => button__
    if (el && typeof el !== 'string') {
      // 判断 el 是否存在且类型不是字符串。如果条件成立，说明 el 的类型不是字符串，而是一个对象或其他类型。
      mods = el;
      el = '';
    }

    // name 是个这样的格式：van-icon

    // 根据传入的 el（元素）拼接出对应的 BEM 类名。如果 el 存在，将其添加到 name 后面，用双下划线 __ 连接；
    // 否则，直接使用 name。
    el = el ? `${name}__${el}` : name;
    return `${el}${gen(el, mods)}`;
  };
}

// TODO: TS注解
// TS 高级类型 ReturnType - 条件类型 ReturnType<T> -- 获取函数返回值类型。
export type BEM = ReturnType<typeof createBEM>;


