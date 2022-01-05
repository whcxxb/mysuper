import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=> import('@/views/home/Home')
const Cate = ()=> import('@/views/cate/Cate')
const Cart = ()=> import('@/views/cart/Cart')
const Profile = ()=> import('@/views/profile/Profile')

const routes = [
 {path:'/home',component:Home},
 {path:'/cate',component:Cate},
 {path:'/cart',component:Cart},
 {path:'/profile',component:Profile},
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//解决路由重复点击报错问题
const originalPush = VueRouter.prototype.push
 
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
