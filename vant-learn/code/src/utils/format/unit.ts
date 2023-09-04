import { isDef, inBrowser } from '..';
import { isNumeric } from '../validate/number';

// 添加单位
// 用于将值转换为带有单位的字符串形式。
/*
作用是将传入的值转换为带有单位的字符串形式，常用于处理需要加单位的 CSS 属性值。
例如，如果传入 100，则返回 '100px'；如果传入 '50%'，则返回 '50%'；
如果传入 undefined，则返回 undefined
*/
export function addUnit(value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
}

// cache
let rootFontSize: number;

function getRootFontSize() {
  if (!rootFontSize) {
    const doc = document.documentElement;
    const fontSize =
      doc.style.fontSize || window.getComputedStyle(doc).fontSize;

    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}
// 转成rem
/*
  用于将传入的带有 rem 单位的值转换为像素值。
*/
function convertRem(value: string) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}
// 转成Vw
function convertVw(value: string) {
  value = value.replace(/vw/g, '');
  return (+value * window.innerWidth) / 100;
}
// 转成Vh
function convertVh(value: string) {
  value = value.replace(/vh/g, '');
  return (+value * window.innerHeight) / 100;
}

export function unitToPx(value: string | number): number {
  if (typeof value === 'number') {
    return value;
  }

  if (inBrowser) {
    if (value.indexOf('rem') !== -1) {
      return convertRem(value);
    }
    if (value.indexOf('vw') !== -1) {
      return convertVw(value);
    }
    if (value.indexOf('vh') !== -1) {
      return convertVh(value);
    }
  }

  return parseFloat(value);
}
