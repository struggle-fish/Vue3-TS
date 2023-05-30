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
function transformFunctionComponent(
  pure: FunctionComponent
): VantComponentOptions {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: (h, context): any => {
      console.log('组件渲染一下------')
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
