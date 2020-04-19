<template>
  <div>
    <h3>todo list</h3>
    <div class='todolist'>
      <div v-for="todo in allTodos" :key='todo.id' class='todo'>
        {{todo.title}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "todolist",
  computed: mapGetters(['allTodos'])
};
</script>

<style>
</style>