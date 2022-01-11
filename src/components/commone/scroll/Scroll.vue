<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    //创建srcoll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      mouseWheel: true,
      // probeType: 3,
      pullUpLoad: true,
      //图片加载完自动调用  refresh方法
      observeImage: true
    })
    //监听滚动事件
    this.scroll.on('scroll', (position) => {
      // console.log(position.y);
      this.$emit('scroll', Math.abs(position.y))
    })
    //上拉加载
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
      setTimeout(() => {
        this.scroll.finishPullUp()
      }, 1000)
    })
  },
  methods: {
    refresh(){
      this.scroll.refresh()
    }
  },
  updated() {},
}
</script>

<style scoped>
</style>