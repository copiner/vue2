<template>
  <div>
    <p>{{ name }}</p>

    <span v-bind:title="message">bind</span>
    <p v-if="seen">seened</p>

    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>

    <button v-on:click="reverseMessage">反转消息</button>
    <p>{{ text }}</p>
    <input v-model="text">
  </div>
</template>
<script>

export default {
    name: 'home',
    data () {
        return {
          name: 'abc',
          message:"bind---" + new Date().toLocaleString(),
          text:"",
          seen: true,
          todos: [
            { text: '00007' },
            { text: '00003' },
            { text: '00009' }
          ]
        }
    },
    methods: {
      reverseMessage: function () {
        this.name = this.name.split('').reverse().join('')
      }
    }
}

</script>

<style></style>
