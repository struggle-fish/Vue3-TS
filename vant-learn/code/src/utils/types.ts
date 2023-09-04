import { VNode, CreateElement, RenderContext } from 'vue';
import { InjectOptions, PropsDefinition } from 'vue/types/options';
/*
* 这里放了很多 自定义的类型，统一管理
*
* */
// TODO: TS: 注解
//  type 是什么呢 类型别名
//  类型别名用来给一个类型起个新名字，使用 type 创建类型别名，
//  类型别名不仅可以用来表示基本类型，还可以用来表示对象类型、联合类型、元组和交集。
//    1、官方推荐用 interface，其他无法满足需求的情况下用 type
//    2、如果想保持代码统一，还是可选择使用 type。通过上面的对比，类型别名 其实可涵盖 interface 的大部分场景。
//    3、对于 React 组件中 props及 state，使用 type ，这样能够保证使用组件的地方不能随意在上面添加属性。如果有自定义需求，可通过 HOC二次封装。
//    4、编写三方库时使用interface，其更加灵活自动的类型合并可应对未知的复杂使用场景。

export type EventHandler = (event: Event) => void;

// TODO: TS: 注解 定义一个字典类型 就是一个 key是 string 值是any的对象
/*
type ObjectIndex = {
    [x: string]: any;
}
*/
export type ObjectIndex = Record<string, any>;

// TODO: TS: 注解
//  定义一个 ScopedSlot 的函数类型别名
export type ScopedSlot<Props = any> = (
  props?: Props
) => VNode[] | VNode | undefined;

// 这玩意是个名为 DefaultSlots的 对象别名 也不能叫对象吧，反正就是有个default 的函数
export type DefaultSlots = {
  default?: ScopedSlot;
};

// TODO: TS: 注解 注意这里为什么要定义成交叉类型
//  这玩意是个对象，对象的属性是个函数
export type ScopedSlots = DefaultSlots & {
  [key: string]: ScopedSlot | undefined;
};

export type ModelOptions = {
  prop?: string;
  event?: string;
};
// 字典类型的一个属性
export type DefaultProps = ObjectIndex;

/*
* TODO: TS: 注解 泛型默认值
*  FunctionComponent 这个类型是个对象，对象里有函数，和属性，属性可选
*
*  FunctionComponent<ObjectIndex, PropsDefinition<ObjectIndex>>
*
* */
// TODO: TS: 注解
//  注意这个不是定义了一个对象，这个是函数调用签名
//  调用签名描述了一种函数类型，包含了函数的属性、调用函数时应传递的参数以及返回值
//  理解起来也简单，就是说首先的是个函数，其次可以有一些可选的属性
/*
 重点：
  FunctionComponent 是一个类型别名（type alias），用于表示函数式组件的函数签名。
  在 Vue.js 中，组件可以使用对象形式或函数形式进行定义。
  函数式组件是一种特殊类型的组件，它是一个函数，接受一些参数并返回一个渲染结果。

  函数式组件通常用于无状态的展示型组件，它不需要维护内部状态。


  它表示一个函数式组件的函数签名，具有以下特点：

  函数接受四个参数：
    h: CreateElement：渲染函数，用于创建 VNode。
    props: Props：组件的属性对象。
    slots: ScopedSlots：插槽对象。
    context: RenderContext<Props>：渲染上下文对象。
  函数返回一个 VNode 对象或 undefined。
  可以定义 props、model 和 inject 属性，用于指定组件的属性定义、双向绑定选项和注入选项。


*/
export type FunctionComponent<
  Props = DefaultProps, // 这玩意就是个对象
  PropDefs = PropsDefinition<Props>
> = {
  (
    h: CreateElement,
    props: Props,
    slots: ScopedSlots,
    context: RenderContext<Props>
  ): VNode | undefined;
  // TODO: TS: 不懂 既然有 Props 了为什么还有在定义一个 PropDefs
  props?: PropDefs;
  model?: ModelOptions;
  inject?: InjectOptions;
};
