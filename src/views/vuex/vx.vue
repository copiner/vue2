<template>
  <div class="user">
    <h2>vuex{{reversedTitle}}</h2>
    <button v-on:click="increment">INCREMENT</button>
    <button v-on:click="sub({type: 'decrement',amount: 1})">DECREMENT</button>
    <button v-on:click="$store.dispatch({type: 'incrementAsync',amount: 10})">ASYNC</button>
    <span>{{ donetodo }}</span>
    <span>{{$store.state.count}}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

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
        this.$store.commit({
          type: 'increment',
          amount: 10
        })
        console.log(this.$store.state.count)
      },

      ...mapMutations({
        sub: 'decrement' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
      })
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
