// router.js
import Router from 'vue-router'

// 懒加载，需要webpack里的插件dynamic-import-webpack配置动态import，以后的es几也会写入
const home = () => import('./views/home/home.vue')
const pont = () => import('./views/home/pont.vue')
const bel = () => import('./views/home/bel.vue')
const login = () => import('./views/login/login.vue')
const findPwd = () => import('./views/login/pwd.vue')
const toDo = () => import('./views/todo/todo.vue')

const action = () => import('./views/home/action.vue')
const form = () => import('./views/home/form.vue')

const routes = [
{
  id:1,
  path: '/',
  component: home,
  title:"home",
  name: '首页'
},
{
  id:2,
  path: '/pont',
  component: pont,
  title:"pont",
  name: '组件'
},
{
  id:3,
  path: '/bel',
  component: bel,
  title:"bel",
  name: '渲染'
},
{
  id:4,
  path: '/login',
  component: login,
  title:"login",
  name: '用户登陆'
},
{
  id:5,
  path: '/pwd',
  component: findPwd,
  title:"pwd",
  name: '找回密码'
},
{
  id:6,
  path: '/todo',
  component: toDo,
  title:"todo",
  name: '记事本'
},
{
  id:7,
  path: '/action',
  component: action,
  title:"action",
  name: '事件'
},
{
  id:8,
  path: '/form',
  component: form,
  title:"form",
  name: '表单'
}
]

let router = new Router({
  routes
})

export {
  routes,
  router
}
