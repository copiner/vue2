// router.js
import Router from 'vue-router'

// 懒加载，需要webpack里的插件dynamic-import-webpack配置动态import，以后的es几也会写入
const home = () => import('./base/home/home.vue')
const prop = () => import('./base/home/prop.vue')
const bel = () => import('./base/home/bel.vue')
const login = () => import('./base/login/login.vue')
const findPwd = () => import('./base/login/pwd.vue')
const toDo = () => import(/* webpackChunkName: "toDo" */'./base/todo/todo.vue')

const action = () => import('./base/home/action.vue')
const form = () => import('./base/home/form.vue')

const user = () => import('./base/vuerouter/user.vue')
const one = () => import('./base/vuerouter/one.vue')
const posts = () => import('./base/vuerouter/posts.vue')
const profile = () => import('./base/vuerouter/profile.vue')
const comments = () => import('./base/vuerouter/comments.vue')

const vx = () => import('./base/vuex/vx.vue')


const le = () => import('./base/life/life.vue')

const routes = [
{
  id:1,
  path: '/',
  component: home,
  name:"home",
  title: '首页'
},
{
  id:2,
  path: '/prop',
  component: prop,
  name:"prop",
  title: '参数'
},
{
  id:3,
  path: '/bel',
  component: bel,
  name:"bel",
  title: '渲染'
},
{
  id:4,
  path: '/login',
  component: login,
  name:"login",
  title: '用户登陆'
},
{
  id:5,
  path: '/pwd',
  component: findPwd,
  name:"pwd",
  title: '找回密码'
},
{
  id:6,
  path: '/todo',
  component: toDo,
  name:"todo",
  title: '记事本'
},
{
  id:7,
  path: '/action',
  component: action,
  name:"action",
  title: '事件'
},
{
  id:8,
  path: '/form',
  component: form,
  name:"form",
  title: '表单'
},
{
  id:9,
  path: '/user/:id',
  component: user,
  // name:"user",
  props: true,
  title: '用户',
  children: [
    {
      path: '',
      component: one
    },
   {
     path: 'profile',
     component: profile
   },
   {
     path: 'posts',
     component: posts
   }
 ]
},
{
  id:10,
  path: '/comments/:id',
  component: comments,
  props: true,
  // name:"comments",
  title: '评论',
  beforeEnter: (to, from, next) => {
    // ...
  }
},
{
  id:11,
  path: '/vx',
  component: vx,
  props: true,
  name:"vx",
  title: '状态'
},
{
  id:12,
  path: '/le',
  component: le,
  props: true,
  name:"le",
  title: '生命'
},

]

let router = new Router({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   // ...
// })
//
// router.afterEach((to, from) => {
//   // ...
// })

export {
  routes,
  router
}
