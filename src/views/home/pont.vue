<template>
  <div>
    <ol>
      <todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
      ></todo-item>
    </ol>
  </div>
</template>
<script>
import Vue from 'vue'

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

export default {
    name: 'home',
    data () {
        return {
          groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '披萨' }
          ]
        }
    },
    created: function () {
      console.log('created')
    },
    methods: {

    }
}

</script>

<style></style>
