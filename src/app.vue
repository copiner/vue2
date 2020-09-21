

<template>
    <div id="app">
      <!--这个元素及其子元素会把index.html里的#app替换掉 -->
      <router-link to="/">Login</router-link>
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
