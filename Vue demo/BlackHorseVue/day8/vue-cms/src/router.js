import VueRouter from 'vue-router'

import HomeContainer from './component/tabbar/Homecontainer.vue'
import MemberContainer from './component/tabbar/membercontainer.vue'
import ShopcarContainer from './component/tabbar/Shopcarcontainer.vue'
import SearchContainer from './component/tabbar/Searchcontainer.vue'
import NewsLIst from './component/news/newslist.vue'
import NewsInfo from './component/news/newsInfo.vue'
import photoList from './component/photo/photolist.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newslist',component:NewsLIst},
    {path:'/home/newsinfo/:id',component:NewsInfo},
    {path:'/home/photolist',component:photoList},
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router