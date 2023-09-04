/**
 * Create a basic component with common options
 */
import '../../locale';
import { isFunction } from '..';
import { camelize } from '../format/string';
import { SlotsMixin } from '../../mixins/slots';
import Vue, {
  VNode,
  VueConstructor,
  ComponentOptions,
  RenderContext,
} from 'vue';
import { DefaultProps, FunctionComponent } from '../types';

export interface VantComponentOptions extends ComponentOptions<Vue> {
  functional?: boolean;
  install?: (Vue: VueConstructor) => void;
}

export type TsxBaseProps<Slots> = {
  key: string | number;
  // hack for jsx prop spread
  props: any;
  class: any;
  style: string | object[] | object;
  scopedSlots: Slots;
};

export type TsxComponent<Props, Events, Slots> = (
  props: Partial<Props & Events & TsxBaseProps<Slots>>
) => VNode;

// TODO: TS: 注解
//  vue 组件注册
function install(this: ComponentOptions<Vue>, Vue: VueConstructor) {
  const { name } = this;
  console.log('组件注册一下, 是给外界调用注册的，不是本站-------')
  Vue.component(name as string, this); // 注册 van-button 这种形式的组件
  Vue.component(camelize(`-${name}`), this); // 注册这种形式的 VanButton
}

// unify slots & scopedSlots
/*
在 Vue.js 中，插槽可以用于在组件中传递内容，从而实现更灵活的组件组合和复用。
插槽可以是具名插槽（named slots）或默认插槽（default slots）。
插槽可以通过 scopedSlots 属性或 $slots 对象访问。


首先，从 context 对象中获取 scopedSlots，如果不存在，则尝试从 context.data.scopedSlots 中获取。
这是为了兼容较旧版本的 Vue.js，因为在较新的版本中，插槽信息通常存储在 context.scopedSlots 中，
而在较旧的版本中，则存储在 context.data.scopedSlots 中。

然后，通过调用 context.slots() 函数获取所有的插槽内容。context.slots() 返回一个对象，包含了所有插槽的内容，以插槽名称作为键。

遍历插槽内容对象的键（即插槽名称），对于每个插槽名称：
如果在 scopedSlots 中不存在同名的插槽函数，则创建一个匿名函数，该函数返回对应插槽的内容。
这样做是为了将默认插槽转换为具名插槽，使得在使用组件时可以使用具名插槽来传递内容。
将新创建的插槽函数赋值给 scopedSlots 对象中的对应键。


最后，返回经过处理后的 scopedSlots 对象，作为统一处理后的插槽数据。

举例：
  const context = {
  scopedSlots: {
    // 已定义的具名插槽
    header: () => '<h1>Header</h1>',
  },
  slots: () => ({
    // 默认插槽
    default: '<p>Default Slot</p>',
    // 具名插槽
    body: '<div>Body Slot</div>',
  }),
};

const unifiedSlots = unifySlots(context);

console.log(unifiedSlots);

{
  header: () => '<h1>Header</h1>',
  default: () => '<p>Default Slot</p>',
  body: () => '<div>Body Slot</div>'
}

调用 unifySlots 函数，并将 context 对象作为参数传递给它。
函数会处理插槽数据，确保格式统一，并返回处理后的插槽对象。
* */
export function unifySlots(context: RenderContext) {
  // use data.scopedSlots in lower Vue version
  const scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  const slots = context.slots();

  Object.keys(slots).forEach((key) => {
    if (!scopedSlots[key]) {
      scopedSlots[key] = () => slots[key];
    }
  });

  return scopedSlots;
}

// TODO: TS: 注解
//  这个好像是把组件变相的转成函数了-为什么要这么做？
//  https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6
//  函数式组件-https://www.cnblogs.com/coder--wang/p/15079261.html
// should be removed after Vue 3
/*
 函数接受一个函数式组件 pure，并将其转换为 VantComponentOptions 类型的对象。
 具体来说，它将函数式组件转换为一个具有以下属性的对象：
  functional: true：表示组件是一个函数式组件。
  props: pure.props：将函数式组件的 props 属性赋值给新对象的 props 属性。
  model: pure.model：将函数式组件的 model 属性赋值给新对象的 model 属性。
  render: (h, context) => { ... }：定义了一个渲染函数，当组件需要渲染时会调用该函数。
  该函数内部调用原始的函数式组件 pure，并传递相应的参数。
* */
function transformFunctionComponent(
  pure: FunctionComponent
): VantComponentOptions {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: (h, context): any => {
      return pure(h, context.props, unifySlots(context), context)
    },
  };
}

// TODO: TS: 注解 创建组件的一个函数 这个函数返回格式是这个样式的
/*
  TODO: TS: 注解
  sfc的格式:
  {
    functional: true,
    install: f install(Vue),
    model: undefined,
    name: 'van-button',
    props: {}
    render: f render(h, context)
  }
 */
/*

  函数接受一个字符串参数 name，表示组件的名称。
  函数返回一个函数，该函数是一个泛型函数，接受类型参数 Props、Events 和 Slots，并返回一个 TsxComponent 类型的组件。
  实现逻辑如下：
     首先，判断传入的 sfc 参数是否为函数。如果是函数，则将其转换为函数式组件，通过调用 transformFunctionComponent 函数进行转换。
     接下来，如果 sfc 不是函数式组件（即具有 functional 属性为 false），则将 SlotsMixin 添加到 sfc.mixins 数组中。这是为了支持插槽功能。
     然后，将 name 赋值给 sfc.name，即将组件的名称设置为传入的 name。
     最后，将 sfc 强制转换为 TsxComponent<Props, Events, Slots> 类型，并返回。
* */
export function createComponent(name: string) {
  // TODO: TS: 注解 泛型语法: 名字<T1, T2, ...> 返回一个泛型函数
  return function <Props = DefaultProps, Events = {}, Slots = {}>(
    sfc: VantComponentOptions | FunctionComponent
  ): TsxComponent<Props, Events, Slots> {
    // debugger
    // 如果 sfc 是函数的话，就转成函数式组件
    if (isFunction(sfc)) {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      // debugger
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(SlotsMixin);
    }

    sfc.name = name;
    // TODO: TS: 不懂
    //  即使把这一行注释掉，组件也能渲染，那组件是怎么注册的呢
    //  还有就是，这个 install 是自动调用的吗
    // sfc.install = install;
    if(sfc.name == 'van-button') {
      console.log(sfc, '当前是什么函数')
    }
    return sfc as TsxComponent<Props, Events, Slots>;
  };
}
