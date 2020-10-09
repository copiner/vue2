<template>
  <div class="user">
    <h2>vuex{{reversedTitle}}</h2>
    <button v-on:click="increment">INCREMENT</button>
    <span>{{ donetodo }}</span>
    <span>{{$store.state.count}}</span>
  </div>
</template>

<script>

export default {
    name: 'user',
    data () {
        return {
          title:"vuex",
        }
    },
    created: function () {
      console.log(this.$route)
      console.log(this.$router)
    },
    methods: {
      increment() {
        this.$store.commit('increment')
        console.log(this.$store.state.count)
      }
    },
    computed: {
      // 计算属性的 getter
      reversedTitle: function () {
        // `this` 指向 vm 实例
        return this.title.split('').reverse().join('')
      },
      donetodo: function(){
        console.log(this.$store.getters.doneTodos)
        return this.$store.getters.doneTodos
      }

    }
}

</script>
