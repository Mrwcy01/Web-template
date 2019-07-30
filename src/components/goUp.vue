<template>
  <div
    v-if="show"
    class="up iconfont iconicon_fanhuihei"
    @click.stop="goUp()" />
</template>
<script>
export default {
  name: 'GoUp',
  props: {
    // 可设置 达到滚动条距离底部值 为scroll 时展示回到顶部按钮
    scroll: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    // 监听 滚动条长度
    document.addEventListener('scroll', res => {
      this.show = (document.documentElement.scrollTop || document.body.scrollTop) > this.scroll
    })
  },
  methods: {
    // 回到顶部
    goUp() {
      if (document.documentElement.scrollTop || document.body.scrollTop > 0) {
        document.body.scrollTop = 0 // 移动
        document.documentElement.scrollTop = 0 // web
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.up{
    position: fixed;
    right: 30px;
    bottom: 237px;
    z-index: 99999;
    width:61px;
    height:61px;
    background:rgba(229,229,229,1);
    border:1px solid rgba(214,214,214,1);
    opacity:1;
    border-radius:5px;
    text-align: center;
    line-height: 60px;
    transform: rotate(90deg);
  }
</style>

