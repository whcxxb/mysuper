<template>
  <div id="home">
    <NavBar class="home-nav">
      <span slot="center">购物街</span>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommend :recommend="recommend"></HomeRecommend>
    <HomePopular :recommend="recommend"></HomePopular>
    <TabControl  @tabclick='tabclick' class="home-control" :title="['流行', '新款', '精选']"></TabControl>
    <GoodsList :goodslist="goods[currentType].list"></GoodsList>
  </div>
</template>

<script>
import NavBar from '@/components/commone/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomePopular from './childComps/HomePopular'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

import { getHomeList, getHomeData } from '@/network/home'
export default {
  data() {
    return {
      //轮播图数据
      banners: [],
      //推荐数据
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType:'pop'
    }
  },
  created() {
    this.getHomeList()
    
    //一次请求三个商品数据
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    GoodsList
  },
  methods: {

    //标签栏切换事件 动态切换
    tabclick(index){
      this.currentType = index === 0 ? 'pop':index === 1 ? 'new':'sell'
    },

    //请求轮播图数据
    getHomeList() {
      getHomeList().then((res) => {
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    //请求首页商品数据
    getHomeData(type) {
      const page = this.goods[type].page + 1
      getHomeData(type, page).then((res) => {
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
  },
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: aliceblue;
  position: sticky;
  top: 0;
  z-index: 9;
}
.home-control {
  /* 吸顶效果 */
  background-color: #fff;
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>