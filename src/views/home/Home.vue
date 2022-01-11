<template>
  <div id="home">
    <NavBar class="home-nav"><span slot="center">购物街</span></NavBar>
    <TabControl v-show="istabcon" ref="tabcontrol1" @tabclick="tabclick" class="home-control" :title="['流行', '新款', '精选']"></TabControl>
    <Scroll class="content" ref="scroll" @scroll="scrollClick" @pullingUp="pullingUp">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommend :recommend="recommend"></HomeRecommend>
      <HomePopular :recommend="recommend"></HomePopular>
      <TabControl ref="tabcontrol2" @tabclick="tabclick" :title="['流行', '新款', '精选']"></TabControl>
      <GoodsList :goodslist="goods[currentType].list"></GoodsList>
    </Scroll>
    <BackTop v-show="isbackto" @click.native="backtopClick"></BackTop>
  </div>
</template>

<script>
import NavBar from '@/components/commone/navbar/NavBar'
import Scroll from '@/components/commone/scroll/Scroll'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomePopular from './childComps/HomePopular'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import BackTop from '@/components/content/backtop/BackTop'
//网络请求
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
      currentType: 'pop',
      isbackto: false,
      tabconHeight:0,
      istabcon:false,
      flag:true
    }
  },
  created() {
    //获取首页轮播图数据
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
    GoodsList,
    Scroll,
    BackTop,
  },
  methods: {
    //标签栏切换事件 动态切换
    tabclick(index) {
      this.currentType = index === 0 ? 'pop' : index === 1 ? 'new' : 'sell'
      this.$refs.tabcontrol1.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
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
        // console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
    //返回顶部
    backtopClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    //是否显示隐藏回到顶部
    scrollClick(position) {
      this.isbackto = Math.abs(position) > 500

      this.istabcon = Math.abs(position) > 559
    },
    //下载加载
    pullingUp() {
      this.getHomeData(this.currentType)
    },
  },
  mounted() {
    // console.log(this.$refs.tabcontrol.$el.offsetTop);
  },
  updated() {
     if(this.flag){
       this.tabconHeight = this.$refs.tabcontrol2.$el.offsetTop
       this.flag  = false
     }
  },
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: aliceblue;
  position: sticky;
  top: 0;
  z-index: 9;
}
.home-control {
  position: relative;
  z-index: 9;
}
.content {
  /* height:calc(100% - 49px); */
  /* height: 100%; */
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
}
.home-load {
  position: fixed;
  bottom: 55px;
  left: 195px;
  width: 30px;
  height: 30px;
}
</style>