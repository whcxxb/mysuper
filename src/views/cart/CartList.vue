<template>
  <div class="cartlist">
    <Scroll class="content">
      <CartListItem v-for="(item, index) in CartList" :key="index" :itemInfo="item"></CartListItem>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/commone/scroll/Scroll'
import CartListItem from './CartListItem.vue'
export default {
  data() {
    return {
      CartList: [],
    }
  },
  created() {
    this.CartList = this.$store.getters.getCartList
  },
  components: {
    Scroll,CartListItem
  },
}
</script>

<style scoped>
.cartlist {
  height: 100vh;
  overflow: hidden;
}
.content {
  height: calc(100% - 44px);
}
</style>