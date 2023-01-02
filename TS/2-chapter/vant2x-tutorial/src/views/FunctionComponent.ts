import { VNode, CreateElement, RenderContext } from 'vue';
import { InjectOptions, PropsDefinition } from 'vue/types/options';

export type EventHandler = (event: Event) => void;

// TODO: TS: 注解 定义一个字典类型
export type ObjectIndex = Record<string, any>;

// TODO: TS: 不懂 这个是一个函数？然后返回的是VNode 做啥用的？
export type ScopedSlot<Props = any> = (
  props?: Props
) => VNode[] | VNode | undefined;

export type DefaultSlots = {
  default?: ScopedSlot;
};

export type ScopedSlots = DefaultSlots & {
  [key: string]: ScopedSlot | undefined;
};

export type ModelOptions = {
  prop?: string;
  event?: string;
};
// 字典类型的一个属性
export type DefaultProps = ObjectIndex;

export type FunctionComponent<
  Props = DefaultProps,
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



// ------------------------------------------------------------------
export type ButtonProps = {
  tag?: keyof HTMLElementTagNameMap | string; // 可以自定义标签
  text?: string;
  icon?: string;
  color?: string;
  iconPosition?: 'left' | 'right';
};
export type ButtonSlots = DefaultSlots & {
  icon?: ScopedSlot;
  loading?: ScopedSlot;
};

function Button(
  h: CreateElement,
  props: ButtonProps,
  slots: ButtonSlots,
  ctx: RenderContext<ButtonProps>
) {
  return undefined
}

function test(sfc: FunctionComponent) {

}
/*
type FunctionComponent<Props = ObjectIndex, PropDefs = PropsDefinition<Props>> = {
  (h: CreateElement, props: Props, slots: ScopedSlots, context: RenderContext<Props>): VNode | undefined;
  props?: PropDefs | undefined;
  model?: ModelOptions | undefined;
  inject?: InjectOptions | undefined;
}
*/
test(Button)




console.log(Config)

type a = {
  [key: string]: ScopedSlot | undefined;
}