// Utils
import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import { BORDER_SURROUND } from '../utils/constant';
import { routeProps, RouteProps, functionalRoute } from '../utils/router';

// Components
import Icon from '../icon';
import Loading, { LoadingType } from '../loading';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot, DefaultSlots } from '../utils/types';

// 按钮的类型
export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

// TODO: TS: 注解
/*
* A & B  交叉类型，包含了 A 和 B 的所有类型
* keyof 操作符 用于获取某种类型的所有键，其返回类型是联合类型。
* */
export type ButtonProps = RouteProps & {
  tag: keyof HTMLElementTagNameMap | string; // 可以自定义标签
  type: ButtonType;
  size: ButtonSize;
  text?: string;
  icon?: string;
  color?: string;
  block?: boolean;
  plain?: boolean;
  round?: boolean;
  square?: boolean;
  loading?: boolean;
  hairline?: boolean;
  disabled?: boolean;
  nativeType?: string;
  iconPrefix?: string;
  loadingSize: string;
  loadingType?: LoadingType;
  loadingText?: string;
  iconPosition: 'left' | 'right';
};

export type ButtonEvents = {
  onClick?(event: Event): void;
};
// TODO: TS: 不懂
// 不懂这个是做什么的
// 定义了一个交叉类型，反正就这些个属性和合集 icon  loading default 的交叉类型
export type ButtonSlots = DefaultSlots & {
  icon?: ScopedSlot;
  loading?: ScopedSlot;
};
// TODO: TS: 注解
//  先准备好了 ButtonProps ButtonEvents ButtonSlots 给创建组件使用

const [createComponent, bem] = createNamespace('button');

// 这里是函数的定义，那么他在哪儿调用的呢
function Button(
  h: CreateElement,
  props: ButtonProps,
  slots: ButtonSlots,
  ctx: RenderContext<ButtonProps>
) {
  const {
    tag,
    icon,
    type,
    color,
    plain,
    disabled,
    loading,
    hairline,
    loadingText,
    iconPosition,
  } = props;

  const style: Record<string, string | number> = {};
  if (color) {
    style.color = plain ? color : 'white';
    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    }

    // hide border when color is linear-gradient
    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }

  function onClick(event: Event) {
    if (props.loading) {
      event.preventDefault();
    }
    if (!loading && !disabled) {
      console.log('点击按钮')
      emit(ctx, 'click', event);
      functionalRoute(ctx);
    }
  }

  function onTouchstart(event: TouchEvent) {
    emit(ctx, 'touchstart', event);
  }

  const classes = [
    bem([
      type,
      props.size,
      {
        plain,
        loading,
        disabled,
        hairline,
        block: props.block,
        round: props.round,
        square: props.square,
      },
    ]),
    { [BORDER_SURROUND]: hairline },
  ];
  function renderIcon() {
    if (loading) {
      return slots.loading ? (
        slots.loading()
      ) : (
        <Loading
          class={bem('loading')}
          size={props.loadingSize}
          type={props.loadingType}
          color="currentColor"
        />
      );
    }

    if (slots.icon) {
      return <div class={bem('icon')}>{slots.icon()}</div>;
    }

    if (icon) {
      return (
        <Icon name={icon} class={bem('icon')} classPrefix={props.iconPrefix} />
      );
    }
  }

  function renderContent() {
    const content = [];

    if (iconPosition === 'left') {
      content.push(renderIcon());
    }

    let text;
    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(<span class={bem('text')}>{text}</span>);
    }

    if (iconPosition === 'right') {
      content.push(renderIcon());
    }

    return content;
  }

  return (
    <tag
      style={style}
      class={classes}
      type={props.nativeType}
      disabled={disabled}
      onClick={onClick}
      onTouchstart={onTouchstart}
      {...inherit(ctx)}
    >
      <div class={bem('content')}>{renderContent()}</div>
    </tag>
  );
}

Button.props = {
  ...routeProps,
  text: String,
  icon: String,
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button',
  },
  type: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'normal',
  },
  loadingSize: {
    type: String,
    default: '20px',
  },
  iconPosition: {
    type: String,
    default: 'left',
  },
};


// console.log(createComponent<ButtonProps, ButtonEvents, ButtonSlots>(Button), '返回值是什么')
/*
{
  functional: true,
  install: ƒ install(Vue),
  model: undefined,
  name: "van-button",
  props: {to: Array(2), url: ƒ, replace: ƒ, text: ƒ, icon: ƒ, …},
  render: ƒ render(h, context),

}
*/

// TODO: TS: 注解
//  导出函数后，就能注册成组件，是vant-cli 做的事情，可以研究下工程化或者脚手架相关的
export default createComponent<ButtonProps, ButtonEvents, ButtonSlots>(Button);
