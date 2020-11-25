<template>
  <div>
    <ol>
      <TodoItem
        v-for="item in foods"
        v-bind:todo="item"
        v-bind:key="item.id"
      />
    </ol>
    <BlogItem v-bind:posts="posts"/>

    <ComputeItem/>
  </div>
</template>
<script>
//
import BlogItem from "./blogItem.vue"
import TodoItem from "./todoItem.vue"
import ComputeItem from "./computeItem.vue"
export default {
    name: 'home',
    data () {
        return {
          foods: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '披萨' }
          ],
          posts: [
            { id: 0, title: '金融' },
            { id: 1, title: '科技' },
            { id: 2, title: '教育' }
          ]
        }
    },
    components:{
      BlogItem,
      TodoItem,
      ComputeItem
    },
    created: function () {
      console.log('created')
    },
    methods: {

    }
}

</script>

<style></style>
