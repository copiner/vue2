import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

Vue.use(VueRouter)

new Vue({
  router,
  template: `
    <div id="root">
    <button id="mount">mount</button>
    <button id="unmount">unmount</button>

    <hr />

    Count beforeEach: <span id="beforeEach"></span><br />
    Count beforeResolve: <span id="beforeResolve"></span><br />
    Count afterEach: <span id="afterEach"></span><br />

    <hr />
    </div>
  `
}).$mount('#root')

// track number of beforeResolve
const increment = name => {
  const counter = document.getElementById(name)
  counter.innerHTML++
}

document.getElementById('beforeEach').innerHTML = 0
router.beforeEach((to, from, next) => {
  increment('beforeEach')
  next()
})

document.getElementById('beforeResolve').innerHTML = 0
router.beforeResolve((to, from, next) => {
  increment('beforeResolve')
  next()
})

document.getElementById('afterEach').innerHTML = 0
router.afterEach((to, from) => {
  increment('afterEach')
})




let vueInstance
const mountEl = document.getElementById('mount')
const unmountEl = document.getElementById('unmount')

mountEl.addEventListener('click', () => {
  vueInstance = new Vue({
    router,
    template: `
      <div id="app">
        <h1>Hello "Restart-app"</h1>
        <ul>
          <li><router-link to="/">Go to Home</router-link></li>
          <li><router-link to="/foo">Go to Foo</router-link></li>
        </ul>
        <router-view id="view"></router-view>
      </div>
    `
  }).$mount('#app')
})

unmountEl.addEventListener('click', () => {
  vueInstance.$destroy()
  vueInstance.$el.innerHTML = ''
})
