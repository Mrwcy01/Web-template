<template>
  <div
    v-if="focusType"
    class="answer">
    <div class="box clearfix">
      <div class="left">
        <input
          v-focus="focusType"
          name="sendReport"
          :value="value"
          :placeholder="tips"
          @change="handleChange($event)"></div>
      <div class="right"><button @click="send()"><span>发送</span></button></div>
    </div>
    <div
      v-show="focusType"
      class="mask"
      @click="active()" />
  </div>
</template>
<script>
export default {
  name: 'SendReport',
  // 设置获取焦点
  directives: {
    // 自动获取焦点
    focus: {
      inserted: function(el, binding) {
        if (binding.value) {
          console.log(binding.value)
          el.focus()
          el.scrollIntoView()
        } else {
          el.blur()
        }
      },
      componentUpdated: function(el, binding) {
        if (binding.value) {
          console.log(binding.value)
          el.focus()
          el.scrollIntoView()
        } else {
          el.blur()
        }
      }
    }
  },
  props: {
    // input value值
    value: {
      type: String,
      default: null
    },
    // 是否展示和获取焦点
    focusType: {
      type: Boolean,
      default: false
    },
    // 输入框内 提示语
    tips: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      height: null
    }
  },
  computed: {
    status() {
      return !this.focusType
    }
  },
  watch: {
    // 发送完后 回到原始位置
    focusType() {
      this.focusType ? this.ios() : document.body.scrollTop = this.height
    }
  },
  mounted() {
    // 监听滚动条高度
    document.addEventListener('scroll', res => {
      if (this.status) {
        this.height = (document.documentElement.scrollTop || document.body.scrollTop)
      }
    })
  },
  methods: {
    // 隐藏组件
    active() {
      this.$parent._data.sendReportType = false
    },
    // 发送回调函数
    send() {
      this.$emit('send')
    },
    // 兼容ios手机 滚动
    ios() {
      setTimeout(function() {
        this.height = document.body.scrollTop
        document.body.scrollTop = document.body.scrollHeight / 2
      }, 500)
    },
    // 同步父级 input 输入 value值
    handleChange(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.answer{
  background-color: #f9f9f9;
  position:fixed;
  bottom: 0;
  right: 10px;
  width: 100%;
  height: 100px;
  z-index: 99999999999999;
  .box{
    position: relative;
    z-index: 99999999999999;
    .left{
        width: 82%;
        text-align: center;
        padding-top:8px;
      >input{
        padding-left:15px;
        width: 90%;
        height: 80px;
        border: 1px solid #e8e8e8
      }
    }
    .right{
        width: 18%;
        padding-top:10px;
        >button{
          border-radius:5px;
          width: 100%;
          height: 80px;
          text-align: center;
          background-color: #18b4ed;
        }
    }
  }
}
.mask{
    z-index: 99999999;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
}
</style>
