// main.js
import Vue from 'vue'
//import Vue from 'vue/dist/vue.esm.js'
import App from './app.vue'

import VueRouter from 'vue-router'
import { router } from './router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

//最好提前在你的 store 中初始化好所有所需属性
// Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、
// 甚至是嵌套子模块——从上至下进行同样方式的分割
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'abc', done: true },
      { id: 2, text: 'xyz', done: false }
    ]
  },
  mutations: {
    increment (state, payload) {
       state.count += payload.amount
    },
    decrement (state, payload) {
       state.count -= payload.amount
    },
    incrementonebyone (state) {
       state.count++
    },
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    increment ({ commit }) {
      commit('increment')
    },
    incrementAsync ({commit},payload) {
      setTimeout(() => {
        commit({...payload, type: 'increment'})
      }, 1000)
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})

console.log("service at ", process.env.BASE_API_GM)
new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')


// if (module.hot) {
//  module.hot.accept('./print.js', function() {
//    console.log('Accepting the updated printMe module!');
//    printMe();
//  })
// }
