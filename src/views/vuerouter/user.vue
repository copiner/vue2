<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <button v-on:click="pushposts">push</button>
    <router-link v-bind:to="posts">posts</router-link>
    <router-link v-bind:to="profile">profile</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    name: 'user',
    data () {
        return {
          title:"user",
          posts: this.$route.params.id+"/posts",
          profile: this.$route.params.id+"/profile"
        }
    },
    created: function () {
      console.log(this.$route)
      console.log(this.$router)
    },
    methods:{
      pushposts:function(){
        // 命名的路由
        //router.push({ name: 'user', params: { userId: '123' }})
        this.$router.push({ path: 'register', query: { plan: 'private' }})
      }
    }
}

</script>
