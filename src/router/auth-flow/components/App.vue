<template>
  <div id="app">
    <h1>Auth Flow</h1>
    <ul>
      <li>
        <router-link v-if="loggedIn" to="/logout">Log out</router-link>
        <router-link v-if="!loggedIn" to="/login">Log in</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/dashboard">Dashboard</router-link>
        (authenticated)
      </li>
    </ul>
    {{$route.matched.length}}
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    </template>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    //通过注入路由器，我们可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由
    //console.log(this.$route)
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>
