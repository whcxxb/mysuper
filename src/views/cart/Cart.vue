<template>
  <div class="cart">
    <NavBar class="cart-nav">
      <div slot="center">购物车({{ 0 || $store.getters.getCarCount }})</div>
      <div slot="left" class="back" @click="backclick">
        <img src="@/assets/img/detail/back.png" alt="" />
      </div>
    </NavBar>
    <CartList></CartList>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/commone/navbar/NavBar'
import CartList from './CartList.vue'
import BottomBar from './BottomBar.vue'
export default {
  components: {
    NavBar,
    CartList,
    BottomBar
  },
  methods: {
    backclick() {
      this.$router.back()
    },
  },
}
</script>

<style scoped>
.cart-nav {
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: pink;
}
.back img {
  width: 50%;
  margin-top: 7px;
}
</style>