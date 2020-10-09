
<template>
    <div id="app">
      <h1>{{title}}</h1>

      <router-item
        v-for="item in baserouter"
        v-bind:route="item"
        v-bind:key="item.id"
      ></router-item>


      <router-view>
      <!--路由匹配的组件-->
      </router-view>
    </div>
</template>
<script>
import { routes } from './router'

import Vue from 'vue'

Vue.component('router-item', {
  props: ['route'],
  template: `
    <router-link class="homeLink" v-bind:to=route.path>{{ route.title }}</router-link>
  `
})

export default {
    name: 'App',
    data () {
        return {
          title:"VUE",
          baserouter:routes
        }
    },
    created: function () {
      console.log(this.$route)
      console.log(this.$router)
    },
}
</script>

<style scoped lang="css">
  .homeLink{
    padding:5px;
  }
</style>
