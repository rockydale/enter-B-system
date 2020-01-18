import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome.vue'
import Login from '@/components/Login.vue'
import User from '@/components/user/User.vue'

//门店管理
import Delivery from '@/components/store/Delivery.vue'
import Service from '@/components/store/Service.vue'
import Storelist from '@/components/store/Storelist.vue'

//广告管理
import Carousel from '@/components/advertise/Carousel.vue'
import Article from '@/components/advertise/Article.vue'
import Poster from '@/components/advertise/Poster.vue'

//广告管理 -- 新建
import CreateArt from '@/components/advertise/CreateArt.vue'
import CreateCar from '@/components/advertise/CreateCar.vue'
import CreatePos from '@/components/advertise/CreatePos.vue'

//门店管理 -- 新建
import CreateDel from '@/components/store/CreateDel.vue'
import CreateSer from '@/components/store/CreateSer.vue'
import CreateSto from '@/components/store/CreateSto.vue'
Vue.use(Router)

export default new Router({
  routes: [
    
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', 
      component: Home,
      redirect:'/welcome',
      children : [
        { path: '/welcome', component: Welcome },
        { path: '/user', component: User },
        //门店管理的路由地址
        { path: '/service', component: Service },
        { path: '/storelist', component: Storelist },
        { path: '/delivery', component: Delivery },
        //广告管理的路由地址
        { path: '/carousel', component: Carousel },
        { path: '/article', component: Article },
        { path: '/poster', component: Poster },
        //广告新建 的路由地址
        { path :'/createArt', component:CreateArt},
        { path :'/createCar', component:CreateCar},
        { path :'/createPos', component:CreatePos},
        //门店新建的路由地址
        {path :'/createDel', component:CreateDel},
        {path :'/createSer', component:CreateSer},
        {path :'/createSto', component:CreateSto}
      ]
    },
  ]
})
