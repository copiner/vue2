

<template>
    <div id="app">
      <!--这个元素及其子元素会把index.html里的#app替换掉 -->
      <router-link to="/">home</router-link>
      <router-link to="/pont">pont</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/pwd">Pwd</router-link>
      <router-link to="/todo">Todo</router-link>
      <router-view>
      <!--路由匹配的组件-->
      </router-view>
    </div>
</template>
<script>
    export default {
        name: 'App',
        data () {
            return {}
        }
    }
</script>

<style>
</style>
