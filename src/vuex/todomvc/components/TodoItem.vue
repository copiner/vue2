<template>
  <li>
    <div class="view">
      <input class="toggle"
        type="checkbox"
        v-bind:checked="todo.done"
        v-on:change="toggleTodo(todo)">
      <label v-text="todo.text" v-on:dblclick="editing = true"></label>
      <button class="destroy" v-on:click="removeTodo(todo)">x</button>
    </div>
    <input class="edit"
      v-show="editing"
      v-focus="editing"
      v-bind:value="todo.text"
      v-on:keyup.enter="doneEdit"
      v-on:keyup.esc="cancelEdit"
      v-on:blur="doneEdit">
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Todo',
  props: ['todo'],
  data () {
    return {
      editing: false
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  methods: {
    ...mapActions([
      'editTodo',
      'toggleTodo',
      'removeTodo'
    ]),
    doneEdit (e) {
      const value = e.target.value.trim()
      const { todo } = this
      if (!value) {
        this.removeTodo(todo)
      } else if (this.editing) {
        this.editTodo({
          todo,
          value
        })
        this.editing = false
      }
    },
    cancelEdit (e) {
      e.target.value = this.todo.text
      this.editing = false
    }
  }
}
</script>
