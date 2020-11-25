<template>
  <div>
    <li>{{ todo.text }}</li>
  </div>
</template>
<script>

export default {
    name: 'todo',
    props: ["todo"],
    data () {
        return {

        }
    },
    created: function () {
      console.log(this.todo)
    },
    methods: {

    },
    computed: {
    }
}

</script>

<style></style>
