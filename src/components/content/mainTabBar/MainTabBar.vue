<template>
  <div>
    <TabBar>
      <TabBarItem path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_ac.png" alt="" />
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/cate">
        <img slot="item-icon" src="@/assets/img/tabbar/cate.png" alt="" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/cate_ac.png" alt="" />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/car.png" alt="" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/car_ac.png" alt="" />
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/pr.png" alt="" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/pr_ac.png" alt="" />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/commone/tabbar/TabBar'
import TabBarItem from '@/components/commone/tabbar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>