// main.js
import Vue from 'vue'
//import Vue from 'vue/dist/vue.esm.js'
import App from './app.vue'

import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)


new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
