<template>
  <div>
    <ol>
      <todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
      ></todo-item>
    </ol>

    <button-counter></button-counter>

    <div :style="{ fontSize: postfontsize + 'em' }">
      <blog-post
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
        v-on:enlarge-text="postfontsize += 0.1"
        v-on:pop-text="onEnlarge"
      ></blog-post>
    </div>

    <custom-input v-model="searchText"></custom-input>

    <alert-box>
      Something bad happened.
    </alert-box>
  </div>


</template>
<script>
import Vue from 'vue'

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <button v-on:click="$emit('pop-text', 0.1)">
        Enlarge
      </button>
    </div>
  `
})

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

export default {
    name: 'home',
    data () {
        return {
          groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '披萨' }
          ],
          posts: [
            { id: 0, title: '金融' },
            { id: 1, title: '科技' },
            { id: 2, title: '教育' }
          ],
          postfontsize: 1,
          searchText:""
        }
    },
    created: function () {
      console.log('created')
    },
    methods: {
      onEnlarge: function (enlargeAmount) {
        this.postfontsize += enlargeAmount
      }
    }
}

</script>

<style></style>
