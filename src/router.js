import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/home',
      meta:{
        required:true
      },
      component: ()=>import('./pages/Home.vue')
    },
    {
        path:'/dongtai',
        component:()=>import('./pages/dongtai.vue')
    },
    {
      path:'/ziliao',
      component:()=>import('./pages/ziliao.vue')
    },
    {
      path:'/liuyan',
      component:()=>import('./pages/liuyan.vue')
    },
    {
      path:'/mine',
      component:()=>import('./pages/mine.vue')
    },
    {
      path:'/login',
      component:()=>import('./pages/login.vue')
    },
    {
      path:'/register',
      component:()=>import('./pages/register.vue')
    },
    {
      path:'/toupiao',
      component:()=>import('./pages/toupiao.vue')
    },
    {
      path:'/toupiaoDetail',
      component:()=>import('./pages/toupiaoDetail.vue')
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})
  router.beforeEach((to,from,next)=>{
    if(to.matched.some(item=>item.meta.required)){
      let token =window.localStorage.getItem("token")
      console.log(token) 
      if(token){
        next()
      }else{
        next({
          path:'/login',
          query:{
            redirect:to.fullPath
          }
        })
      }
    }else{
      next()
    }
  })
export default router
