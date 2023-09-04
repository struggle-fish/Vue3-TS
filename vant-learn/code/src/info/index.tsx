// Utils
import { createNamespace, isDef } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type InfoProps = {
  dot?: boolean;
  info?: string | number;
  badge?: string | number;
};

const [createComponent, bem] = createNamespace('info');

// 无状态组件
// 函数式组件通常用于无状态的展示型组件，它不需要维护内部状态。
function Info(
  h: CreateElement,
  props: InfoProps,
  slots: DefaultSlots,
  ctx: RenderContext<InfoProps>
) {
  const { dot, info } = props;
  const showInfo = isDef(info) && info !== '';

  if (!dot && !showInfo) {
    return;
  }

  return (
    <div class={bem({ dot })} {...inherit(ctx, true)} >
      {dot ? '' : props.info}
    </div>
  );

}

Info.props = {
  dot: Boolean,
  info: [Number, String],
};

export default createComponent<InfoProps>(Info);
