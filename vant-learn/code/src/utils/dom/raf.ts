/**
 * requestAnimationFrame polyfill
 */

import { isServer } from '..';

let prev = Date.now();

/* istanbul ignore next */
// requestAnimationFrame 的兼容模式
function fallback(fn: FrameRequestCallback): number {
  const curr = Date.now(); // 获取当前时间的时间戳，表示当前的执行时间。
  /*
    计算从上一帧到当前帧之间的时间差，并将其与 16 毫秒进行比较。
    由于每秒钟大约有 60 帧，因此每帧的时间间隔应该约为 16.67 毫秒（1 秒 / 60 帧 ≈ 16.67 毫秒）。
    如果时间差小于 16 毫秒，则说明当前帧执行得太快，需要等待一段时间，以使帧率接近 60 帧/秒。
    如果时间差大于等于 16 毫秒，则说明当前帧执行得太慢，可以立即执行下一帧。
  * */
  const ms = Math.max(0, 16 - (curr - prev));
  /*
    使用 setTimeout 函数在经过等待时间 ms 后调用传入的回调函数 fn。
    这样可以确保在等待适当时间后执行下一帧的动画效果。
  * */
  const id = setTimeout(fn, ms);
  // 将当前时间加上等待时间，得到下一帧的预期执行时间。
  prev = curr + ms;
  return id;
}

/* istanbul ignore next */
const root = (isServer ? global : window) as Window;

/* istanbul ignore next */
const iRaf = root.requestAnimationFrame || fallback;

/* istanbul ignore next */
const iCancel = root.cancelAnimationFrame || root.clearTimeout;

export function raf(fn: FrameRequestCallback): number {
  return iRaf.call(root, fn);
}

// double raf for animation
export function doubleRaf(fn: FrameRequestCallback): void {
  raf(() => {
    raf(fn);
  });
}

export function cancelRaf(id: number) {
  iCancel.call(root, id);
}
