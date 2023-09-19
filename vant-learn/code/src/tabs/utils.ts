import { raf } from '../utils/dom/raf';
import { getScrollTop, setScrollTop } from '../utils/dom/scroll';

export function scrollLeftTo(
  scroller: HTMLElement, // 要进行水平滚动的元素
  to: number, // 目标滚动位置的像素值
  duration: number // 滚动的持续时间（以毫秒为单位）
) {
  let count = 0; // 用于跟踪动画帧的计数。
  const from = scroller.scrollLeft; // 当前元素的水平滚动位置。
  // 动画的总帧数，根据指定的持续时间计算得出
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);

  /*
    在 animate 函数中，通过每一帧将 scroller 的水平滚动位置逐渐调整到目标位置 to，从而实现平滑的滚动效果。
    每次执行 animate 函数时，计数器 count 会递增，直到达到总帧数 frames。


    那么 怎么判断是向左还是向右呢？
    并没有明确判断滚动方向是向左还是向右移动。
    它仅通过逐渐调整元素的 scrollLeft 属性来实现平滑滚动效果，而不关心滚动的方向。

    正值表示向右滚动，负值表示向左滚动

    通过计算目标位置 to 与当前位置 from 的差值，并除以总帧数 frames，得到每一帧需要滚动的距离。
    然后将这个距离累加到 scroller 元素的 scrollLeft 属性上，从而实现逐渐滚动到目标位置的效果。

    这种实现方式并不关心滚动的方向，而是根据目标位置和当前位置之间的差值来确定每一帧的滚动距离。
    正值表示向右滚动，负值表示向左滚动。
    因此，无论是向左还是向右滚动，scrollLeftTo 函数都可以适用。

    举例说明：
    假设当前元素的 scrollLeft 属性为 100，目标位置 to 为 300，并且总帧数 frames 为 60。
    那么每一帧的滚动距离就是 (to - from) / frames，即 (300 - 100) / 60 = 3。
    由于目标位置大于当前位置，差值为正值，因此每一帧都会向右滚动 3 个单位的距离。
    通过连续的帧动画，元素的 scrollLeft 属性会逐渐增加，直到达到目标位置 300

    如果我们将目标位置 to 改为 50，那么差值就为负值，即 (50 - 100) / 60 = -0.8333。
    在这种情况下，每一帧都会向左滚动 0.8333 个单位的距离，直到元素的 scrollLeft 属性逐渐减小到目标位置 50。

  * */
  function animate() {
    scroller.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      raf(animate);
    }
  }

  animate();
}

export function scrollTopTo(
  scroller: HTMLElement,
  to: number,
  duration: number,
  callback: Function
) {
  let current = getScrollTop(scroller);

  const isDown = current < to;
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);
  const step = (to - current) / frames;

  function animate() {
    current += step;

    if ((isDown && current > to) || (!isDown && current < to)) {
      current = to;
    }

    setScrollTop(scroller, current);

    if ((isDown && current < to) || (!isDown && current > to)) {
      raf(animate);
    } else if (callback) {
      raf(callback as FrameRequestCallback);
    }
  }

  animate();
}
