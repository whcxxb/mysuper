<template>
  <div class="detail">
    <NavBar @click.native="navbarclick" class="navbar">
      <div slot="left" class="back" @click="backclick">
        <img src="@/assets/img/detail/back.png" alt="" />
      </div>
      <div slot="center">
        <div class="titles">
          <div @click="titleClick(i)" :class="{ active: currentIndex === i }" class="item" v-for="(t, i) in titles" :key="i">{{ t }}</div>
        </div>
      </div>
    </NavBar>
    <Scroll class="content" ref="scroll" @scroll="scrollClick">
      <!-- 轮播图 -->
      <Swiper class="swiper-img">
        <SwiperItem v-for="(item, i) in banners" :key="i"><img :src="item" alt="" /></SwiperItem>
      </Swiper>
      <!-- 商品信息 -->
      <DetailInfo :resultInfo="resultInfo"></DetailInfo>
      <DetailShop :shopInfo="shopInfo"></DetailShop>
      <DetailImg @imgeload="imgeload" :shopImg="shopImg"></DetailImg>
      <DetailParams class="detailparams" ref="detailparams" :itemParams="itemParams"></DetailParams>
      <DetailComment class="DetailComment" :commentInfo="commentInfo"></DetailComment>
      <GoodsList class="detailrecommend" :goodslist="recommendList"></GoodsList>
    </Scroll>
    <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
    <BackTop v-show="isbackto" @click.native="backtopClick"></BackTop>
    <div ref="detailalter" v-show="isAlter" class="detail-alter">
      添加购物车成功😊
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/commone/navbar/NavBar'
import { Swiper, SwiperItem } from '@/components/commone/swiper/index'
import DetailInfo from './DetailInfo.vue'
import DetailShop from './DetailShop.vue'
import DetailImg from './DetailImg.vue'
import DetailParams from './DetailParams.vue'
import DetailComment from './DetailComment.vue'
import DetailBottomBar from './DetailBottomBar.vue'
import Scroll from '@/components/commone/scroll/Scroll'
import BackTop from '@/components/content/backtop/BackTop'
import GoodsList from '@/components/content/goods/GoodsList'
import { getDetailData, getRecommend, Goods, itemParams } from '@/network/detail.js'
export default {
  name: 'Detail',
  data() {
    return {
      iid: this.$route.query.id,
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
      banners: [],
      //商品详细信息
      resultInfo: {},
      shopInfo: {},
      shopImg: {},
      isbackto: false,
      itemParams: {},
      commentInfo: {},
      recommendList: [],
      themToEl: ['.swiper-img', '.detailparams', '.DetailComment', '.detailrecommend'],
      isAlter:false
    }
  },
  created() {
    getDetailData(this.iid).then((res) => {
      let data = res.result
      this.banners = res.result.itemInfo.topImages
      this.resultInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //获取店铺信息
      this.shopInfo = data.shopInfo
      //获取店铺商品的图片
      this.shopImg = data.detailInfo
      this.itemParams = new itemParams(data.itemParams.info, data.itemParams.rule)
      //获取评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0]
      }
    }),
      //获取推荐商品
      getRecommend().then((res) => {
        this.recommendList = res.data.list
      })
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    DetailInfo,
    DetailShop,
    Scroll,
    DetailImg,
    BackTop,
    DetailParams,
    DetailComment,
    GoodsList,
    DetailBottomBar,
  },
  methods: {
    titleClick(i) {
      this.currentIndex = i
    },
    backclick() {
      this.$router.back()
    },
    //返回顶部
    backtopClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    scrollClick(position) {
      this.isbackto = Math.abs(position) > 500
      this.istabcon = Math.abs(position) > 559
    },
    //监听子组件的 图片是否加载完成
    imgeload() {
      this.$refs.scroll.refresh()
    },
    navbarclick() {
      this.$refs.scroll.scroll.scrollToElement(this.themToEl[this.currentIndex])
    },
    addToCart() {
      // 1.创建对象
      const obj = {}
      // 2.对象信息
      obj.iid = this.iid
      obj.imgURL = this.banners[0]
      obj.title = this.resultInfo.title
      obj.desc = this.resultInfo.desc
      obj.newPrice = this.resultInfo.newPrice
      // 3.添加到Store中
      this.$store.commit('addCart', obj)
      this.isAlter = true
      setTimeout(() => {
        this.isAlter = false
      }, 1000);
    },
  },
  updated() {},
}
</script>

<style scoped>
.detail {
  height: 100vh;
}
.titles {
  display: flex;
  font-size: 16px;
  justify-content: space-evenly;
}
.navbar {
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3), 0 0 60px rgba(0, 0, 0, 0.1) inset;
}
.active {
  color: hotpink;
}
.back img {
  width: 50%;
  margin-top: 7px;
}
.swiper-img {
  height: 300px;
  overflow: hidden;
}
.content {
  height: calc(100% - 44px);
}
.detail-alter{
  background: #0a3d62;
  text-align: center;
  line-height: 100px;
  position: fixed;
  top: 550px;
  left: 120px;
  width: 150px;
  height: 100px;
  color: #fff;
}
</style>