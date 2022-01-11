import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=> import('@/views/home/Home')
const Cate = ()=> import('@/views/cate/Cate')
const Cart = ()=> import('@/views/cart/Cart')
const Profile = ()=> import('@/views/profile/Profile')
const Detail = ()=> import('@/views/detail/Detail')
const routes = [
 {path:'/home',component:Home,meta:{footShow:true}},
 {path:'/cate',component:Cate,meta:{footShow:true}},
 {path:'/cart',component:Cart,meta:{footShow:true}},
 {path:'/profile',component:Profile,meta:{footShow:true}},
 {path:'/detail',component:Detail},
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
