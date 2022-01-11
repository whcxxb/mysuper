<template>
  <div class="wrapper">
    <div class="content">
      <ul>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
        <li>分类1</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  mounted() {
    const bscroll = new BScroll('.wrapper', {
      probeType: 3,
      pullUpLoad:true
    })
    bscroll.on('scroll', (position) => {
      //console.log(position)
    })
    bscroll.on('pullingUp', () => {
      console.log('到底了')

      setTimeout(() => {
        bscroll.finishPullUp()
      }, 2000);
    })
  },
}
</script>

<style scoped>
.wrapper {
  height: 300px;
  background-color: orange;
}
</style>