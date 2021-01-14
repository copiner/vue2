<template>
  <div>
    Value: {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <button @click="incrementNot">Increment not</button>
    <button @click="incrementReally">Increment really</button>
    <div>
      <div>Recent History (last 5 entries): {{ recentHistory }}</div>
    </div>
  </div>
</template>

<script>

/*
你在组件中使用 this.$store.dispatch('xxx') 分发 action，
或者使用 mapActions辅助函数将组件的 methods 映射为 store.dispatch 调用
*/
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'count',
    'recentHistory'
  ]),
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ]),
    incrementNot:async function(){
      await this.$store.dispatch('incrementBy')
      this.$store.commit('decrement')
    },
    incrementReally:function(){
      this.$store.dispatch('incrementBy')
      this.$store.commit('decrement')
    }
  },
  created: function () {
    //console.log(this.$store)
  },
}


/*
你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，
或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
*/
/*
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
*/

</script>
