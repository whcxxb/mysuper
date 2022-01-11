import { Promise } from "core-js";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    //购物车商品列表
    cartList: []
  },
  mutations: {
    addCart(state, obj) {
      //查找之前的数组中是否包含该商品
      let oldcart = state.cartList.find(item => item.iid === obj.iid)
      //如果包含该商品就让数量+1
      if (oldcart) {
        oldcart.count += 1
      } else {
        obj.count = 1
        obj.checked = true
        state.cartList.push(obj)
      }
    }
  },
  actions: {

  },
  getters: {
    getCarCount(context) {
      return context.cartList.length
    },
    getCartList(context) {
      return context.cartList
    }
  },
  modules: {}
})

export default store