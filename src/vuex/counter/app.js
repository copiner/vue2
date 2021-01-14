import Vue from 'vue'
import Counter from './Counter.vue'
import store from './store'

new Vue({
  store,
  el: '#app',
  render: h => h(Counter)
})
