<template>
	<div class="app">
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

<style lang="css">
--vue-blue: #32485F;
--vue-green: #00C185;

*,
*::before,
*::after {
	box-sizing: border-box;
}

.app {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--vue-blue);
}

h1 {
	text-align: center;
}
</style>
