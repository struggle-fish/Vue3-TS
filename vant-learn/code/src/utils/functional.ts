import Vue, { RenderContext, VNodeData } from 'vue';
import { ObjectIndex } from './types';

type Context = RenderContext & { data: VNodeData & ObjectIndex };

// TODO: TS: 注解
//  Partial 可选类型接口
//  InheritContext 最终是一个可选属性的对象
type InheritContext = Partial<VNodeData> & ObjectIndex;

const inheritKey = [
  'ref',
  'key',
  'style',
  'class',
  'attrs',
  'refInFor',
  'nativeOn',
  'directives',
  'staticClass',
  'staticStyle',
];

const mapInheritKey: ObjectIndex = { nativeOn: 'on' };

// inherit partial context, map nativeOn to on
// 继承部分上下文，将nativeOn映射为on
/*

该函数用于从上下文对象中继承一些属性，并返回一个新的继承上下文对象。
context: Context：上下文对象，包含一些数据和事件监听器。
inheritListeners?: boolean：一个可选的布尔值参数，表示是否继承事件监听器。

函数的返回类型为 InheritContext，表示继承后的上下文对象。

总体来说，该函数的作用是从给定的上下文对象中继承指定的属性并返回一个新的对象。
这个函数通常用于组件开发中，在组件内部需要继承外部传入的一些属性和事件监听器。



这个函数的作用：
函数内部首先定义了一个空对象 result，然后使用 inheritKey 数组遍历，
将上下文对象中的特定属性拷贝到 result 对象中。
这些特定属性是通过 inheritKey 数组定义的，通常是一些 DOM 元素的属性，
如 ref、style、attrs、class 等。拷贝时，
使用 mapInheritKey 对象将属性名进行了映射，然后将属性的值复制到 result 对象中。
如果 inheritListeners 参数为 true，则表示需要继承事件监听器。
在这种情况下，会先创建一个空的 result.on 对象，
然后使用 Object.assign 方法将上下文对象中的事件监听器复制到 result.on 对象中。

最后，函数返回 result 对象作为继承后的上下文对象。
*/
export function inherit(
  context: Context,
  inheritListeners?: boolean
): InheritContext {
  // TODO: TS: 注解
  //  这里的key 都是 DOM 上的属性比如  ref style attrs  class
  const result = inheritKey.reduce((obj, key) => {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }
    return obj;
  }, {} as InheritContext);
  // TODO: TS: 不懂
  //  不是很懂这里哎，从上下文的data里 把数据拷贝出来了，最后就渲染到DOM上了
  if (inheritListeners) {
    // TODO: TS: 不懂
    //  这里是做什么用的-button里暂时没用到
    result.on = result.on || {};
    Object.assign(result.on, context.data.on);
  }

  return result;
}

// TODO: TS: 注解
//  给组件绑定点击事件- v-on @xxx
//  listeners: 组件上监听的事件对象，在组件上监听 `event-name`，
//  listeners 对象就有 `event-name` 属性，值为函数，数据可通过该函数的参数抛到父组件。
//  listeners 是 `data.on` 的别名。
// emit event
export function emit(context: Context, eventName: string, ...args: any[]) {
  const listeners = context.listeners[eventName];
  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach((listener) => {
        listener(...args);
      });
    } else {
      listeners(...args);
    }
  }
}

// mount functional component 安装功能部件
export function mount(Component: any, data?: VNodeData) {
  const instance = new Vue({
    el: document.createElement('div'),
    props: Component.props,
    render(h) {
      return h(Component, {
        props: this.$props,
        ...data,
      });
    },
  });

  document.body.appendChild(instance.$el);

  return instance;
}
