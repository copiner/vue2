// router.js
import Router from 'vue-router'

// 懒加载，需要webpack里的插件dynamic-import-webpack配置动态import，以后的es几也会写入
const login = () => import('./views/login/login.vue')
const findPwd = () => import('./views/login/pwd.vue')
const toDo = () => import('./views/todo/todo.vue')

const routes = [
{
  path: '/',
  component: login,
  name: '用户登陆'
},
{
  path: '/pwd',
  component: findPwd,
  name: '找回密码'
},
{
  path: '/todo',
  component: toDo,
  name: '主页'
}
]



export default new Router({
  routes
})
