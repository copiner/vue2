import Vue from 'vue'
import VueRouter from 'vue-router'

const component = {
  template: `
  <div>
  {{ $route.fullPath }}
  </div>
  `
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component }, { path: '/foo', component }
  ]
})

window.router = router

router.beforeEach((to, from, next) => {

  console.log('from', from.fullPath)
  console.log('going to', to.fullPath)
  if (to.query.wait) {
    setTimeout(() => next(), 100)
  } else if (to.query.redirect) {
    next(to.query.redirect)
  } else if (to.query.abort) {
    next(false)
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  template: `
  <div id="app">
    <router-link to="/">/</router-link>
    <br/>
    <router-link to="/foo">/foo</router-link>
    <router-view></router-view>
  </div>
  `
})
//.$mount('#app')

// 4 NAVIGATION ERROR CASES :

// navigation duplicated

// router.push('/foo')
// router.push('/foo')

// navigation cancelled
// router.push('/foo?wait=y')
// router.push('/')

// navigation redirected
//router.push('/foo?redirect=/')

// navigation aborted
//router.push('/foo?abort=y')
