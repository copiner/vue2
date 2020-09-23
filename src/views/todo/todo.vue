<template>
	<div class="todo">
		<h1 class="title">My Todo App!</h1>
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
<style scoped src="./todo.css"></style>
