<template>

</template>

<script>
/*
当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。
为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性

mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
*/
import { mapState, mapGetters } from 'vuex'

export default {
  // ...
  computed: {
    anyComputed(){},
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),

    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}
</script>
