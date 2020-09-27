<template>
  <div>
    <p>The button above has been clicked {{ counter }} times.</p>
    <button v-on:click="counter += 1">Add 1</button>
    <button v-on:click="greet">Greet</button>
    <button v-on:click="say('what')">Say</button>
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">Warn</button>
  </div>
</template>
<script>

export default {
    name: 'home',
    data () {
        return {
          name: 'action',
          counter: 0
        }
    },
    created: function () {
      console.log('created')
    },
    methods: {
      greet: function (event) {
        // `this` 在方法里指向当前 Vue 实例
        console.log('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          console.log(event.target.tagName)
        }
      },
      say: function (message) {
        console.log(message)
      },
      warn: function (message, event) {
        // 现在我们可以访问原生事件对象
        if (event) {
          event.preventDefault()
        }
        console.log(message)
      }
    }
}

</script>

<style></style>
