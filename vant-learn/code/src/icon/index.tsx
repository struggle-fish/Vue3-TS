// Utils
import { createNamespace, addUnit } from '../utils';
import { inherit } from '../utils/functional';

// Components
import Info from '../info';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type IconProps = {
  dot?: boolean;
  tag: keyof HTMLElementTagNameMap | string;
  name?: string;
  size?: string | number;
  info?: string | number;
  badge?: string | number;
  color?: string;
  classPrefix: string;
};

// 函数调用签名
export type IconEvents = {
  onClick?(event: Event): void;
};

const [createComponent, bem] = createNamespace('icon');

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false;
}

// compatible with legacy usage, should be removed in next major version
// 与传统的使用方式兼容，应该在下一个主要版本中删除。
const LEGACY_MAP: Record<string, string> = {
  medel: 'medal',
  'medel-o': 'medal-o',
  'calender-o': 'calendar-o',
};

function correctName(name?: string) {
  return (name && LEGACY_MAP[name]) || name;
}

function Icon(
  h: CreateElement,
  props: IconProps,
  slots: DefaultSlots,
  ctx: RenderContext<IconProps>
) {
  const name = correctName(props.name);
  const imageIcon = isImage(name);

  if (process.env.NODE_ENV === 'development' && props.info) {
    console.warn(
      '[Vant] Icon: "info" prop is deprecated, use "badge" prop instead.'
    );
  }
  return (
    <props.tag
      class={[
        props.classPrefix,
        imageIcon ? '' : `${props.classPrefix}-${name}`,
      ]}
      style={{
        color: props.color,
        fontSize: addUnit(props.size),
      }}
      {...inherit(ctx, true)}
    >
      {/*{slots.default && slots.default()}*/}
      {imageIcon && <img class={bem('image')} src={name} />}
      <Info dot={props.dot} info={props.badge ?? props.info} />
    </props.tag>
  );
}
console.log(bem('images', [{'aa': 1}, {'bb': 2}]), '没给你做')

Icon.props = {
  dot: Boolean,
  name: String,
  size: [Number, String],
  // @deprecated
  // should be removed in next major version
  info: [Number, String],
  badge: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i',
  },
  classPrefix: {
    type: String,
    default: bem(),
  },
};

export default createComponent<IconProps, IconEvents>(Icon);
