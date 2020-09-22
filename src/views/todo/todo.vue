<template>
	<div class="todo">
		<h1>My Todo App!</h1>
		<TodoList/>
	</div>
</template>

<script>
import TodoList from './todolist.vue'

export default {
	components: {
		TodoList
	}
}
</script>

<style src="./todo.css"></style>
