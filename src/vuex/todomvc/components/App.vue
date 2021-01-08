
<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        v-on:keyup.enter="addTodo">
    </header>
    <!-- main section -->
    <section class="main" v-show="todos.length">
      <input class="toggle-all" id="toggle-all"
        type="checkbox"
        v-bind:checked="allChecked"
        v-on:change="toggleAll(!allChecked)">
      <label for="toggle-all">all</label>
      <ul class="todo-list">
        <TodoItem
          v-for="(todo, index) in filteredTodos"
          v-bind:key="index"
          v-bind:todo="todo"
        />
      </ul>
    </section>
    <!-- footer -->
    <footer v-show="todos.length">
      <span>
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>

      <ul>
        <li v-for="(val, key) in filters">
          <a v-bind:href="'#/' + key"
            v-on:click="visibility = key">
            {{ key | capitalize }}
          </a>
        </li>
      </ul>
      <button class="clear-completed"
        v-show="todos.length > remaining"
        v-on:click="clearCompleted">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>

import { mapActions } from 'vuex'
import TodoItem from './TodoItem.vue'

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}

export default {
  components: { TodoItem },
  data () {
    return {
      visibility: 'all',
      filters: filters
    }
  },
  computed: {//对于任何复杂逻辑，你都应当使用计算属性
    todos () {
      return this.$store.state.todos
    },
    allChecked () {
      return this.todos.every(todo => todo.done)
    },
    filteredTodos () {//computed
      return filters[this.visibility](this.todos)
    },
    remaining () {
      return this.todos.filter(todo => !todo.done).length
    }
  },
  methods: {
    ...mapActions([
      'toggleAll',
      'clearCompleted'
    ]),
    addTodo (e) {
      const text = e.target.value
      if (text.trim()) {
        this.$store.dispatch('addTodo', text)
      }
      e.target.value = ''
    }
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>
