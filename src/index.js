// main.js
import Vue from 'vue'
//import Vue from 'vue/dist/vue.esm.js'
import App from './app.vue'

import VueRouter from 'vue-router'
import { router } from './router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'abc', done: true },
      { id: 2, text: 'xyz', done: false }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})

console.log("service at ", SERVICE_URL)
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
