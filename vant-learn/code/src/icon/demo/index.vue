<template>
  <demo-section>
    <van-tabs v-model="tab" sticky>
      <van-tab :title="t('demo')">
        <demo-block :title="t('basicUsage')">
          <van-col span="6" @click="copy(demoIcon)">
            <van-icon :name="demoIcon"  @click="handleTest"/>
          </van-col>
          <van-col span="6" @click="copy(demoImage)">
            <van-icon :name="demoImage" />
          </van-col>
        </demo-block>

        <demo-block :title="t('badge')">
          <van-col span="6" @click="copy(demoIcon, { dot: true })">
            <van-icon :name="demoIcon" dot />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { badge: '9' })">
            <van-icon :name="demoIcon" badge="9" />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { badge: '99+' })">
            <van-icon :name="demoIcon" badge="99+" />
          </van-col>
        </demo-block>

        <demo-block :title="t('color')">
          <van-col span="6" @click="copy(demoIcon, { color: '#1989fa' })">
            <van-icon name="cart-o" color="#1989fa" />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { color: RED })">
            <van-icon name="fire-o" :color="RED" />
          </van-col>
        </demo-block>

        <demo-block :title="t('size')">
          <van-col span="6" @click="copy(demoIcon, { size: '40' })">
            <van-icon :name="demoIcon" size="40" />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { size: '3rem' })">
            <van-icon :name="demoIcon" size="3rem" />
          </van-col>
        </demo-block>
      </van-tab>

      <van-tab :title="t('basic')">
        <van-col
          v-for="icon in icons.basic"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>

      <van-tab :title="t('outline')">
        <van-col
          v-for="icon in icons.outline"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>

      <van-tab :title="t('filled')">
        <van-col
          v-for="icon in icons.filled"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>

    </van-tabs>
  </demo-section>
</template>

<script>
import icons from '@vant/icons';
import { RED } from '../../utils/constant';

// from https://30secondsofcode.org
/*
  用于将指定的字符串复制到剪贴板。
  1、创建一个<textarea>元素，并将要复制的字符串赋值给它的value属性。
  2、通过设置readonly属性，确保<textarea>元素只读。
  3、设置<textarea>元素的样式，将其定位到屏幕外的位置，使其不可见。
  4、将<textarea>元素添加到document.body中。
  5、检查是否有已选中的文本范围（range），如果有，则将其保存在selected变量中。
  6、选中<textarea>元素中的文本内容。
  7、使用document.execCommand('copy')命令将选中的内容复制到剪贴板。
  8、从document.body中移除<textarea>元素。
  9、如果之前存在已选中的文本范围，则将其重新选中。

* */
function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  // getSelection 表示用户选择的文本范围或光标的当前位置
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  console.log(selected, 'selected');
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

export default {
  i18n: {
    'zh-CN': {
      title: '图标列表',
      badge: '徽标提示',
      basic: '基础图标',
      copied: '复制成功',
      outline: '线框风格',
      filled: '实底风格',
      demo: '用法示例',
      color: '图标颜色',
      size: '图标大小',
    },
    'en-US': {
      title: 'Icon List',
      badge: 'Show Badge',
      basic: 'Basic',
      copied: 'Copied',
      outline: 'Outline',
      filled: 'Filled',
      demo: 'Demo',
      color: 'Icon Color',
      size: 'Icon Size',
    },
  },

  data() {
    this.RED = RED;
    this.icons = icons;
    return {
      tab: 0,
      demoIcon: 'chat-o',
      demoImage: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
    };
  },

  methods: {
    // 用户点击，提示复制成功
    copy(icon, option = {}) {
      let tag = `<van-icon name="${icon}"`;
      if ('dot' in option) {
        tag = `${tag} ${option.dot ? 'dot' : ''}`;
      }
      if ('badge' in option) {
        tag = `${tag} badge="${option.badge}"`;
      }
      if ('color' in option) {
        tag = `${tag} color="${option.color}"`;
      }
      if ('size' in option) {
        tag = `${tag} size="${option.size}"`;
      }
      tag = `${tag} />`;
      copyToClipboard(tag);

      this.$notify({
        type: 'success',
        duration: 1500,
        className: 'demo-icon-notify',
        message: `${this.t('copied')}：${tag}`,
      });
    },
    handleTest(){
      console.log('测试');
    }
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-icon {
  font-size: 0;

  &-notify {
    font-size: 13px;
  }

  .van-col {
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    span {
      display: block;
      height: 36px;
      margin: -4px 0 4px;
      padding: 0 5px;
      color: @gray-7;
      font-size: 12px;
      line-height: 18px;
    }

    &:active {
      background-color: @active-color;
    }
  }

  .van-icon {
    margin: 16px 0 16px;
    color: @text-color;
    font-size: 32px;
  }

  .van-tab__pane {
    width: auto;
    margin: 20px;
    background-color: #fff;
    border-radius: 12px;
  }
}
</style>
